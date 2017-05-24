import { FILTER_CHANGED } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/TodoFilters'


export default function(state = SHOW_ALL, action) {
    switch(action.type) {
        case FILTER_CHANGED:
            return action.filter;
        default:
            return state;
    }
}
