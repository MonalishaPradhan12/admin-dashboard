import { Image, Typography,Badge,Space } from "antd";
import antdLogo from '../../assets/antdLogo.svg'
import { BellFilled, MailOutlined } from "@ant-design/icons";
function AppHeader(){
  return <div className="AppHeader">
    <img src={antdLogo}  width={40} alt="Antd Logo" />
    <Typography.Title>My DashBoard</Typography.Title>
    <Space>     
      <Badge count={10} dot={5}>
      <MailOutlined style={{fontSize:24}}/>
      </Badge>
      <Badge count={24}>
      <BellFilled style={{fontSize:24}}/>
      </Badge>
    </Space>
  </div>
}
export default AppHeader;