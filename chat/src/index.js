import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, AppClass, AppWitoutJSX} from './App';
import {Message} from './Message';

const name = "test";
const children = "123123123123";
const myFoo = (item) => {
    console.log(item);
};

const messegetext = "Success Messege";

ReactDOM.render(
    <React.StrictMode>
        <App
            test="123"
            id={() => {}}
            test2={[1, 2, 3]}
            test3={{}}
            name={name}
            myFoo={myFoo}
            component={<Message messegetext = {messegetext} />}
        >

        </App>

        <hr />
        <AppClass name={name}>{children}</AppClass>

        <hr />
        <AppWitoutJSX name={name}>{children}</AppWitoutJSX>

    </React.StrictMode>,
    document.getElementById('root')
);
