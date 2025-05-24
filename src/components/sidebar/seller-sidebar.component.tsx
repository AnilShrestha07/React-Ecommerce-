import Sider from "antd/es/layout/Sider"
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import { Menu } from "antd"

export interface ISellerSidebarProps{
    collapsed: boolean,
    setCollapsed: Function
}
const SellerSidebar = ({collapsed, setCollapsed}: Readonly<ISellerSidebarProps>)=>{
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

export default SellerSidebar