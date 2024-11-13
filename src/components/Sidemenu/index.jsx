import { AppstoreAddOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
function SideMenu(){
  const navigate = useNavigate();
  return <div className="SideMenu">
    <Menu onClick={(items)=>{
        navigate(items.key)
    }} items={
      [
        {
          label:"DashBoard",
          icon: <AppstoreAddOutlined/>,
          key:"/",
        },
        {
          label:"Inventory",
          icon:<ShopOutlined/>,
          key:"/inventory",
        },
        {
          label:"Orders",
          icon:<ShoppingCartOutlined/>,
          key:"/orders",
        },
        {
          label:"Customers",
          icon:<UserOutlined/>,
          key:"/customers",
        }
      ]
    }>
      
    </Menu>
  </div>
}
export default SideMenu;