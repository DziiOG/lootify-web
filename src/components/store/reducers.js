import { combineReducers } from 'redux';
import { uiReducer as UI } from './modules/uiReducer/uiReducer';
import { dataReducer as Data} from './modules/dataReducer/dataReducer';





export const makeRootReducer = () => {
    return combineReducers({
     UI,
     Data
    })
}

export default makeRootReducer;