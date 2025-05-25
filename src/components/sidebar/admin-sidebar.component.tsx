import Sider from "antd/es/layout/Sider"
import { BoldOutlined, FileImageOutlined, HomeOutlined, SettingOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import { useAuth } from "../../context/auth.context"
import Title from "antd/es/typography/Title"
import { NavLink } from "react-router"

export interface IAdminSidebarProps{
    collapsed: boolean,
    setCollapsed: Function
}
const adminFeature = [
              {
                key: "1",
                icon: <HomeOutlined/>,
                label: <NavLink to="/" target="_home">Home</NavLink>
              },
               {
                key: "2",
                icon: <SettingOutlined/>,
                label: <NavLink to="/admin">Dashboard</NavLink>
              },
              {
                key: "3",
                icon: <FileImageOutlined/>,
                label: <NavLink to="/admin/banner">Banner Management</NavLink>
              },
              {
                key: "4",
                icon: <BoldOutlined/>,
                label: <NavLink to="/admin/brand">Brand Management</NavLink>
              },
              {
                key: "5",
                icon: <UserOutlined/>,
                label: <NavLink to="/admin/users">User Management</NavLink>
              },
            ]
const AdminSidebar = ({collapsed, setCollapsed}: Readonly<IAdminSidebarProps>)=>{
  const {loggedInUser} = useAuth()
    return(
        <>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          onBreakpoint={(broken) => setCollapsed(broken)}
          className={`h-screen ${collapsed ? "" : "w-65! min-w-65! max-w-65!"}` }
        >
          <div className="demo-logo-vertical">
            <div className="flex flex-col items-center justify-center my-10 gap-3">
                <div className={` ${collapsed ? 'w-1/2' : 'w-1/3'}`}>
            <img src={loggedInUser?.image.url} className={`w-full rounded-full h-10! ${collapsed ? 'md:h-10! ' : 'md:h-21!'} `}/>
                </div>
                <div>
                  <Title level={5} className={`text-white! ${collapsed ? "hidden" : "block"} text-center`}>{loggedInUser?.name}</Title>
                  <p className={`text-white text-sm ${collapsed ? "hidden" : "block"} text-center`}>{loggedInUser?.email}</p>

                </div>
            </div>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={adminFeature}
          />
        </Sider>
        </>
    )
}

export default AdminSidebar