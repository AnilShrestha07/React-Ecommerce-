import {
  KeyOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { useAuth } from "../../context/auth.context";

export interface IAdminHeaderProps {
  collapsed: boolean;
  setCollapsed: Function;
}
const AdminHeader = ({
  collapsed,
  setCollapsed,
}: Readonly<IAdminHeaderProps>) => {
  const {loggedInUser} = useAuth()
  return (
    <>
      <Header
        style={{ padding: 0 }}
        className="flex justify-between items-center h-20"
      >
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
        <div>
          <Dropdown 
          menu={{
            items:[
              {
                label:"User Profile",
                key:"user-profile",
                icon: <UserOutlined/>
              },
               {
                label:"Change Password",
                key:"change-password",
                icon: <KeyOutlined/>
              },
               {
                label:"Logout",
                key:"logout",
                icon: <PoweroffOutlined/>
              }
            ]
          }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()} className="text-white! me-2">
              <Space>
                
                {
                  loggedInUser?.image? <img src={loggedInUser?.image?.url} className="rounded-full w-7 h-7"/> : <UserOutlined/>
                }
                {loggedInUser?.name}
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
    </>
  );
};

export default AdminHeader;
