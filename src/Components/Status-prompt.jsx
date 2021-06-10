import React from 'react';
import './status-prompt.stylesheet.css';
import { connect } from 'react-redux';
import { statusPromptAction } from '../redux/status-prompt/status-prompt.action';

const StatusPrompt = (props) => {
    return(
        <div className={props.statusPrompt.display?"status-prompt":"status-prompt hide"}>
            <div className="msg">
                {props.statusPrompt.msg} 
            </div>
            <div className="close" onClick={props.closeStatusPrompt}>
                &#10006;
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    statusPrompt:state.statusPrompt
});

const dispatchStateToProps = dispatch => ({
    closeStatusPrompt:()=>dispatch(statusPromptAction())
})

export default connect(mapStateToProps,dispatchStateToProps)(StatusPrompt);