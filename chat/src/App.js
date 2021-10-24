import React from 'react';
import './App.css';

// react component
export function App({name, test2, myFoo, children, messegetext, component}) {

  // react element
  return (
      <div className="App">

        <h1>Hello React, {name}</h1>

        {component}

        <div>{children}</div>

        <ul>
          {test2.map((item) => (
              <li onClick={() => myFoo(item)} key={item}>
                {item}
              </li>
          ))}
        </ul>

      </div>
  );
}

export class AppClass extends React.Component {
  render() {
    // this.props
    const { name } = this.props;

    return <div className="App">AppClass {name}</div>;
  }
}

export const AppWitoutJSX = ({name, children}) => {
  return React.createElement(
      'div',
      {className: 'App'},
      React.createElement("div", null, `hello react ${name}`),
      React.createElement("div", null, children)
  );
};

