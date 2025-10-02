import { useState } from 'react'
import ProLayout from '@ant-design/pro-layout'
import { Button } from 'antd'
import { BrowserRouter, useNavigate } from 'react-router-dom'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
  },
  {
    path: '/users',
    name: 'Users',
    routes: [
      {
        path: '/users/list',
        name: 'User List',
      },
      {
        path: '/users/create',
        name: 'Create User',
      },
    ],
  },
];

function AppLayout() {
  const navigate = useNavigate();

  return (
    <ProLayout
      title="My App"
      layout="mix"
      logo="https://avatars.githubusercontent.com/u/507615?s=200&v=4"
      route={{ routes }}
      onMenuHeaderClick={() => navigate('/')}
      menuItemRender={(item, dom) => (
        <a onClick={() => navigate(item.path || '/')}>{dom}</a>
      )}
      headerTitleRender={(logo, title, _) => {
        return (<div>HEAD!!!</div>)
      }}
      headerContentRender={()=>{
        return (<div>HEADMENU</div>)
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined
        return (<div>FOOT!!!</div>)
      }}
    >
      <div style={{ padding: 24 }}>
        <h1>Hello ProLayout</h1>
        <Button type="primary">Click Me</Button>
      </div>
    </ProLayout>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
