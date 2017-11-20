import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/content-header'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabs-header'
import TabsContent from '../common/tab/tabs-content'
import TabHeader from '../common/tab/tab-header'
import TabContent from '../common/tab/tab-content'

import BillingCycleList from './billing-cycle-list'
import BillingCycleForm from './billing-cycle-form'
import { createBillingCycle, updateBillinhCycle, deleteBillingCycle, init } from './billing-cycle-actions'

class BillingCycle extends Component {
	componentWillMount() {
		this.props.init()
	}

	render() {
		return (
			<div>
				<ContentHeader title='Ciclos de Pagamentos' small='Cadastro'/>
				<Content >
					<Tabs>
						<TabsHeader>
							<TabHeader label='Listar' icon='bars' target='tabList'/>
							<TabHeader label='Incluir' icon='plus' target='tabCreate' />
							<TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
							<TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
						</TabsHeader>
						<TabsContent>
							<TabContent id='tabList'>
								<BillingCycleList />
							</TabContent>
							<TabContent id='tabCreate'>
								<BillingCycleForm onSubmit={this.props.createBillingCycle}
												submitLabel='Incluir' submitClass='primary'/>
							</TabContent>
							<TabContent id='tabUpdate'>
								<BillingCycleForm onSubmit={this.props.updateBillinhCycle}
												submitLabel='Alterar' submitClass='info' />
							</TabContent>
							<TabContent id='tabDelete'>
								<BillingCycleForm onSubmit={this.props.deleteBillingCycle} 
												readOnly={true} submitLabel='Excluir' submitClass='danger' />
							</TabContent>
						</TabsContent>
					</Tabs>
				</Content>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	init, createBillingCycle, updateBillinhCycle, deleteBillingCycle
}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)