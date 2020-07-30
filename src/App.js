import React, { Fragment } from 'react';

import ToDo from "./containers/todo/Todo";
import Title from "./components/title/Title";

import './App.scss';

function App() {
  return (
    <Fragment>
      <div className="todo">
        <Title title="ToDo" />
        <ToDo />
      </div>
    </Fragment>
  );
}

export default App;
