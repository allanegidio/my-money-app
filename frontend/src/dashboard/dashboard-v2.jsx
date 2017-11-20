import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import ContentHeader from '../common/template/content-header'
import Content from '../common/template/content'
import ValueBox from '../common/widget/value-box'
import Row from '../common/layout/row'

const URL = 'http://localhost:3003/api'

export default class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = { credit: 0, debit: 0 }
	}

	componentWillMount() {
		axios.get(`${URL}/billing-cycles/summary`)	
			.then(resp => this.setState(resp.data))
	}

	render() {
		const { credit, debit } = this.state
		return (
			<div>
				<ContentHeader title='Dashboard' small='Versão 2.0' />
				<Content>
					<Row>
						<ValueBox cols='12 4' color='green' icon='bank'
								value={`R$ ${credit}`} text='Total de Créditos' />
						<ValueBox cols='12 4' color='red' icon='credit-card'
								value={`R$ ${debit}`} text='Total de Débitos' />
						<ValueBox cols='12 4' color='blue' icon='money'
								value={`R$ ${credit - debit}`} text='Valor Consolidado' />
					</Row>
				</Content>
			</div>
		)
	}
}