import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { Header } from "antd/es/layout/layout"

export interface IAdminHeaderProps{
    collapsed: boolean,
    setCollapsed: Function
}
const AdminHeader = ({collapsed, setCollapsed}: Readonly<IAdminHeaderProps>) =>{
    return(
        <>
        <Header style={{ padding: 0 }}>
            <Button
              className="text-white!"
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "22px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
        </>
    )
}

export default AdminHeader