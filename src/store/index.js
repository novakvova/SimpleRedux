import {createStore} from 'redux';

const initialState ={
    count: 9
};

const reducer = (state = initialState, action) => {
    console.log('reducer runnting', action);
    switch(action.type) {
        case 'SEMEN_ACTION': {
            return Object.assign({},state, {count: state.count+1});
        }
        default:
            return state;
    }
    
}

const store = createStore(reducer);

export default store;