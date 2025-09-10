import { Layout } from "antd";
import "./LayoutDefault.css";
import LearnGrid from '../../components/LearnGrid'
import logo from "../../images/logo.png";
import { MenuUnfoldOutlined, SearchOutlined} from "@ant-design/icons";

const { Sider, Content } = Layout;

function LayoutDefault() {  
  return (
    <>
      <Layout className="layout-default">

        <header className="header">
          <div className="header__logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="header__nav">
            <div className="header__nav-left">
              <div className="header__collapse">
                <MenuUnfoldOutlined />
              </div>
              <div className="header__search">
                <SearchOutlined />
              </div>
            </div>
            <div className="header__nav-right">
              Noi dung
            </div>
          </div>
        </header>


        <Layout>

          <Sider className="sider">
            Sider
          </Sider>

          <Content className="content">
            <LearnGrid />
          </Content>

        </Layout>

      </Layout>
    </>
  )
}

export default LayoutDefault;
