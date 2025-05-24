import { lazy, useEffect, useState } from "react";

import { Layout, Spin, theme } from "antd";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../context/auth.context";
import { toast } from "react-toastify";
const SellerSidebar = lazy(()=> import("../../components/sidebar/seller-sidebar.component"))
const AdminHeader = lazy(()=> import("../../components/header/admin-header.component"))

const {  Content } = Layout;
const SellerLayout = () => {
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
    }else if(loggedInUser && loggedInUser.role !== 'seller'){
      toast.warning("you do not have seller role to access this panel!!!")
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
        <SellerSidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
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

export default SellerLayout;
