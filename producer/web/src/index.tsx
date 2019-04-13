import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import Form from './form/form';
import Log from './log';
import { GlobalStyles, Wrapper } from './styles';

const pages = [{ name: 'Form', component: Form }, { name: 'Log', component: Log }];

const App = () => {
  const [page, setPage] = useState(0);
  const Component = pages[page].component;
  return (
    <Layout>
      <GlobalStyles />
      <Layout.Header>
        <Wrapper>
          <Menu theme="dark" mode="horizontal" selectedKeys={[String(page)]} style={{ lineHeight: '64px' }}>
            {pages.map(({ name }, index) => (
              <Menu.Item key={index} onClick={() => setPage(index)} children={name} />
            ))}
          </Menu>
        </Wrapper>
      </Layout.Header>
      <Layout.Content>
        <Wrapper>
          <Component />
        </Wrapper>
      </Layout.Content>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
