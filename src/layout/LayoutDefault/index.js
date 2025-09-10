import { Layout } from "antd";
import "./LayoutDefault.css";
import LearnGrid from '../../components/LearnGrid'

const { Sider, Content } = Layout;

function LayoutDefault() {  
  return (
    <>
      <Layout className="layout-default">

        <header className="header">
            Header
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
