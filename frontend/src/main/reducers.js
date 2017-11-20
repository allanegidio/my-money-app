import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import { reducer as ToastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboard-reducer'
import TabReducer from '../common/tab/tab-reducer'
import BillingCycleReducer from '../billing-cycle/billing-cycle-reducer'
import AuthReducer from '../auth/auth-reducer'

export const rootReducers = combineReducers({
	dashboard: DashboardReducer,
	tab: TabReducer,
	billingCycle: BillingCycleReducer,
	form: FormReducer,
	toastr: ToastrReducer,
	auth: AuthReducer
})

export default rootReducers