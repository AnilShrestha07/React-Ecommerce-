import { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Spin, theme } from "antd";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../context/auth.context";
import { toast } from "react-toastify";

const { Header, Sider, Content } = Layout;
const AdminDashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {loggedInUser} = useAuth()

  useEffect(()=>{
    if(!loggedInUser){
      toast.warning("Please login to continue!!!")
      navigate('/')
    }else if(loggedInUser && loggedInUser.role !== 'admin'){
      toast.warning("you do not have admin role to access this panel!!!")
      navigate('/'+ loggedInUser.role)
    }else{
      setLoading(false)
    }
  },[loggedInUser])
  return loading ? (
    <Spin fullscreen />
  ) : (
    <>
      <Layout>
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
        <Layout>
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
          <Content
            className="m-2 p-4"
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminDashboard;
