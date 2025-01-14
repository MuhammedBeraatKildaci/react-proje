import React, { createElement, Fragment } from "react";

const App = () => {
  /**createElement
   * return createElement('main',{
      className: 'test-app',
      id: 'main',
  },'main content')*/

  /* jsx */
  return (
    //fragment
    <>
      <main id="main" className="test-app">
        hello world
      </main>
    </>
  );
};

export default App;
