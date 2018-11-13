import React from 'react';
import {connect} from 'react-redux';

function Counter(props) {
    console.log('render', props);
    return(
        <div>
            <h1>I am counter!</h1>
            <p>Count: {props.count}</p>
            <button onClick={props.onClickByButton}>Збільшити лічильник</button>
        </div>
    )
}
function mapStateProps(state){
    console.log('mapStateProps', state);
    return {
        count: state.count
    }
}

function mapDispatcthToProps(dispatch) {
    return {
        onClickByButton: () => {
            console.log('clickin');
            const action = {type: 'SEMEN_ACTION'};
            dispatch(action);
        }
    }
}

export default connect(mapStateProps,mapDispatcthToProps)(Counter);