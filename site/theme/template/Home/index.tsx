import * as React from 'react';
import { Button } from 'antd';
import { StepBackwardOutlined } from '@ant-design/icons';
const Home = () => {
  const wrapStyle = {display:'flex',justifyContent:'center', 
  alignItems:'center', marginTop:'50px'};

  React.useEffect(() => {

  }, []);

  return <div style={wrapStyle}>
    <Button loading={true} type="primary" icon={<StepBackwardOutlined />}>你好</Button>
  </div>;
};

export default Home;
