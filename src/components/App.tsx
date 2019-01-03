import * as React from 'react';
import { useState } from 'react';
import 'antd/dist/antd.css';

import { Button, Progress, Row, Col } from 'antd';

export const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>Value: {value}</h1>
      <Row type="flex">
        <Col span={10} offset={2}>
          <Progress percent={value + 50} type="circle" />
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Button type="danger" onClick={() => setValue(value - 1)}>
            -
          </Button>
        </Col>
        <Col span={6}>
          <Button type="primary" onClick={() => setValue(value + 1)}>
            +
          </Button>
        </Col>
      </Row>
    </div>
  );
};
