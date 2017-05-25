import { createReducer } from '../packages/resolve-redux/dist';
import projection from '../projections'

const { name, eventHandlers } = projection

export default createReducer({ name, eventHandlers })
