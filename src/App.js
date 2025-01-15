import React, { createElement, Fragment, useEffect, useState } from "react";
import Button from "./components/Button";
import Tab from "./components/Tab";
import UseRefAndForwardRef from "./components/UseRefAndForwardRef";

function Profile() {
  console.log("profil tabına geldin!");
  return <div>burası profile tabı</div>;
}

const App = () => {
  const todos = ["todo1", "todo2", "todo3"];

  const [activeTab, setActiveTab] = useState(1);

  /* lifesycle method */
  useEffect(() => {
    console.log("component did mount");
  }, []);
  useEffect(() => {
    console.log("component did update");
  }, [activeTab]);

  /**createElement
   * return createElement('main',{
      className: 'test-app',
      id: 'main',
  },'main content')*/

  /* jsx */
  return (
    //fragment
    <>
      <div className="m-4 p-3">
        <UseRefAndForwardRef />
      </div>
      <div style={{ padding: 20 }}>
        <button onClick={() => setActiveTab(2)}>Aktif Tabı Değiştir</button>
        <Tab
          activeTab={activeTab}
          onChange={(tabIndex) => setActiveTab(tabIndex)}
        >
          <Tab.Panel title="Profil">
            <Profile />
          </Tab.Panel>
          <Tab.Panel title="Hakkında">2. tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
        </Tab>
        {activeTab === 2 && <div>burası da eksta bir alan!</div>}
      </div>

      <main id="main" className="test-app">
        <div style={{ padding: 20 }}>
          <Button>Buton Örneği</Button>
          <Button variant="success">Buton Örneği</Button>
          <Button variant="danger">Buton Örneği</Button>
          <Button variant="warning">Buton Örneği</Button>
        </div>
      </main>
    </>
  );
};

export default App;
