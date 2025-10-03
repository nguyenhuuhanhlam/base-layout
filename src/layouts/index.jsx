import { useNavigate } from 'react-router-dom'
import ProLayout from '@ant-design/pro-layout'
import { Button, Space } from 'antd'

import { routes } from './config'

function AppLayout() {
	const navigate = useNavigate();

	return (
		<ProLayout
			title="Base Layout"
			layout="mix"
			logo="https://avatars.githubusercontent.com/u/507615?s=200&v=4"

			route={{ routes }}
			onMenuHeaderClick={() => navigate('/')}

			menuItemRender={(item, dom) => (
				<a onClick={() => navigate(item.path || '/')}>{dom}</a>
			)}

			headerTitleRender={(logo, title, _) => {
				return (
					<Space>
						<div>LOGO</div>
						<div>TITLE</div>
					</Space>
				)
			}}

			headerContentRender={() => {
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

export default AppLayout