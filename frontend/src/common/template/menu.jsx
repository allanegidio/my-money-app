import React from 'react'

import MenuItem from '../template/menu-item'
import MenuTree from '../template/menu-tree'

export default props => (
	<ul className='sidebar-menu'>
		<MenuItem path='/' label='Dashboard' icon='dashboard'/>
		<MenuTree label='Cadastro' icon='edit'>
			<MenuItem path='billing-cycles' label='Ciclos de Pagamentos' icon='usd'/>
		</MenuTree>
	</ul>
)