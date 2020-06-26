import React from 'react';
import Column from "./rc-blueprint/layout/Column";
import Row from "./rc-blueprint/layout/Row";

function App() {
  return (
    <Column styles={{height: '100%'}}>
      <Row>
        header
      </Row>
      <Row styles={{flex: 1}}>
        body
      </Row>
      <Row>
        footer
      </Row>
    </Column>
  );
}

export default App;
