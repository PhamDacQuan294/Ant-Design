import { Carousel, Col, Collapse, QRCode, Rate, Row, Tabs } from "antd";
import "./LearnGrid.css";
import CardItem from "../CardItem";
import { Image } from 'antd';
import Slide from "./Slide";
const { Panel } = Collapse;

function LearnGrid() {
    const list = [
    {
      id: 1,
      title: "Logo 1 la gi?",
      description: "Logo 1 la..."
    },
    {
      id: 2,
      title: "Logo 2 la gi?",
      description: "Logo 2 la..."
    },
    {
      id: 3,
      title: "Logo 3 la gi?",
      description: "Logo 3 la..."
    }
  ];

  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: <Slide />,

    },
    { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
    { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
  ];
  
  //10 la khoang cach giua cac cot, 20 la khoang cach giua cac hang
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 1" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 2" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 3" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 4" />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title="Box 5" style={{ height: "400px" }} /> 
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 6" style={{ height: "400px" }} />
        </Col>
      </Row>

      {/* <CardItem title="Box 5" style={{ height: "400px" }} />  
        style ở đây là dạng props nên bên CardItem nó phải nhận thêm một cái props là style nữa thì 
        nó mới css được 
      */}

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 7" style={{ height: "400px" }} />
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title="Box 8" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 9" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 10" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 11" style={{ height: "400px" }} />
        </Col>
      </Row>

       {/* autoplay tu dong chay */}
      <Carousel autoplay dotPosition="top" dots={false} effect="fade">
        <div className="slider-item">
          1
        </div>
        <div className="slider-item">
          2
        </div>
        <div className="slider-item">
          3
        </div>
        <div className="slider-item">
          4
        </div>
      </Carousel>

      <Collapse defaultActiveKey="1" accordion={true}>
        {list.map(item => (
          <Panel header={item.title} key={item.id}>
            <p>{item.description}</p>
          </Panel>
        ))}
      </Collapse>;

      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        preview={true}
      />

      <Tabs items={items} />

      <QRCode
        errorLevel="H"
        value="https://ant.design/"
        icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Rate allowHalf character={["Yeu", "Kem", "Trung binh", "Kha", "Gioi"]} onChange={(e) => console.log(e)}/>;
    </>
  )
}

export default LearnGrid;