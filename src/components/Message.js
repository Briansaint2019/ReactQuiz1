import React, {Component} from 'react';
import './Message.css';

class Message extends Component{
    render(){
        return(
            <p>{this.props.person}</p>
        );

    }

}

export default Message;

