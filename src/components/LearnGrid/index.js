import { Col, Row } from "antd";
import "./LearnGrid.css";
import CardItem from "../CardItem";

function LearnGrid() {
  //10 la khoang cach giua cac cot, 20 la khoang cach giua cac hang
  return (
    <>
      {/* <Row gutter={[10, 20]}>
        <Col xxl={6} xl={4}>
          <div className="box">
            Cot 1
          </div>
        </Col>
        <Col xxl={6} xl={6}>
          <div className="box">
            Cot 2
          </div>
        </Col>
        <Col xxl={6} xl={6}>
          <div className="box">
            Cot 3
          </div>
        </Col>
        <Col xxl={6} xl={8}>
          <div className="box">
            Cot 4
          </div>
        </Col>
      </Row> */}

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
    </>
  )
}

export default LearnGrid;