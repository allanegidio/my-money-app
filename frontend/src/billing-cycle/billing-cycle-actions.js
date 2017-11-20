import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tab-actions'

const URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { credits: [{}], debits: [{}]}

export function getBillingCycles() {
	const request = axios.get(`${URL}/billing-cycles`)
	return {
		type: 'BILLING_CYCLES_FETCHED',
		payload: request
	}
}

export function createBillingCycle(values) {
	return dispatch => {
		axios.post(`${URL}/billing-cycles`, values)
			.then(resp => {
				toastr.success('Sucesso', 'Operação realizada com sucesso!')
				dispatch(init())
			})
			.catch(e => {
				e.response.data.errors.forEach(error => toastr.error('Erro', error))
			})
	}
}

export function deleteBillingCycle(values) {
	return dispatch => {
		axios.delete(`${URL}/billing-cycles/${values._id}`, values)
			.then(resp => {
				toastr.success('Sucesso', 'Operação realizada com sucesso!')
				dispatch(init())
			})
			.catch(e => {
				e.response.data.errors.forEach(error => toastr.error('Erro', error))
			})
	}
}

export function updateBillinhCycle(values) {
	return dispatch => {
		axios.put(`${URL}/billing-cycles/${values._id}`, values)
			.then(resp => {
				toastr.success('Sucesso', 'Operação realizada com sucesso!')
				dispatch(init())
			})
			.catch(e => {
				e.response.data.errors.forEach(error => toastr.error('Erro', error))
			})
	}
}

export function showUpdate(billingCycle) {
	return [ 
		showTabs('tabUpdate'),
		selectTab('tabUpdate'),
		initialize('BillingCycleForm', billingCycle	)
	]
}

export function showDelete(billingCycle) {
	return [ 
		showTabs('tabDelete'),
		selectTab('tabDelete'),
		initialize('BillingCycleForm', billingCycle	)
	]
}

export function init() {
	return [
		showTabs('tabList', 'tabCreate'),
		selectTab('tabList'),
		getBillingCycles(),
		initialize('BillingCycleForm', INITIAL_VALUES)
	]
}

export function initWithoutList() {
	return initialize('BillingCycleForm', INITIAL_VALUES)
}

