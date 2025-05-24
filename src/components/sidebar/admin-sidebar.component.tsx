import Sider from "antd/es/layout/Sider"
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import { Menu } from "antd"

export interface IAdminSidebarProps{
    collapsed: boolean,
    setCollapsed: Function
}
const AdminSidebar = ({collapsed, setCollapsed}: Readonly<IAdminSidebarProps>)=>{
    return(
        <>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          onBreakpoint={(broken) => setCollapsed(broken)}
          className="h-screen"
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        </>
    )
}

export default AdminSidebar