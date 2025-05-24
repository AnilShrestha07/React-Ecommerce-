import { lazy, useEffect, useState } from "react";

import { Layout, Spin, theme } from "antd";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../context/auth.context";
import { toast } from "react-toastify";
const AdminSidebar = lazy(()=> import("../../components/sidebar/admin-sidebar.component"))
const AdminHeader = lazy(()=> import("../../components/header/admin-header.component"))

const {  Content } = Layout;
const AdminLayout = () => {
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
        <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Layout>
          <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} />
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

export default AdminLayout;
