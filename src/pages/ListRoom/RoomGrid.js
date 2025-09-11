import { Badge, Card, Col, Row } from "antd";

function RoomGrid(prosp) {
  const { rooms } = prosp;
  
  return (
    <>
      <Row gutter={[20, 20]}>
        {rooms.map((item) => (
          <Col span={12} key={item.id}>
            <Badge.Ribbon text={item.typeRoom ? "Vip" : "Thuong"} color={item.typeRoom ? "purple" : "gray"}>
              <Card title={item.name}>
                <p>
                  So giuong: <strong>{item.quantityBed}</strong>
                </p>
                <p>
                  So nguoi: <strong>{item.quantityPeople}</strong>
                </p>
                <p>
                  {item.status ? (
                    <Badge status="success" text="Con phong" />
                  ) : (
                    <Badge status="error" text="Het phong" />
                  )}
                </p>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default RoomGrid;