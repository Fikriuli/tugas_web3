import React from 'react';
import './App.css';
import MainMenu from './components/MainMenu'
import MainRoute from './components/page/MainRoute'
import {Row,Col} from 'antd';

function App() {
  return (
      <div>
        <MainMenu/>
        <Row guter={8}>
          <Col offset={4} span={16}>
            <br/>
            <MainRoute/>
          </Col>
        </Row>
      </div>
  );
}

export default App;
