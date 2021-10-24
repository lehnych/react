import React from 'react';
import './Message.css';

// react component
export function Message({messegetext}) {

    // react element
    return (
        <div className="message">
            {messegetext}
        </div>
    );
}
