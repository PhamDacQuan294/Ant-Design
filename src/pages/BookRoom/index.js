import { Checkbox, Col, Input, Row, Space, Radio, Button, DatePicker, Select } from "antd";
import { useState } from "react";

const { RangePicker } = DatePicker;

function BookRoom() {
  const [data, setData] = useState({
    time: "14 gio"
  });

  const optionsTime = [];

  for(let i = 7; i <= 24; i++) {
    optionsTime.push({
      value: i > 9 ? `${i} gio` : `0${i} gio`,
      label: i > 9 ? `${i} gio` : `0${i} gio`,
    });
  }

  const handleChangeInput = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value
    };
    setData(object);
  }

  const handleChangeCheckbox = (e) => {
    const object = {
      ...data,
      services: e
    };
    setData(object);
  }

  const handleChangeDate = (dates, dateStrings) => {
    const object = {
      ...data,
      date: dateStrings,
    };
    setData(object);
  }

  const handleChangeSelect = (e) => {
    const object = {
      ...data,
      time: e,
    };
    setData(object);
  }


  const handleSubmit = () => {
    console.log("ok");
  }

  return (
    <>
      <h2>Booking room</h2>

      <Row gutter={[20, 20]}>
        <Col span={24}>
          <p>Your name</p>
          <Input name='fullName' placeholder="Example: Le Van A" onChange={handleChangeInput} />
        </Col>

        <Col span={12}>
          <p>Your phone</p>
          <Input name='phone' placeholder="Example: 01010110" onChange={handleChangeInput} />
        </Col>

        <Col span={12}>
          <p>Your email</p>
          <Input name='email' placeholder="Example: levanan@gmail.com" onChange={handleChangeInput} />
        </Col>

         <Col span={12}>
          <p>Additional services</p>
          <Checkbox.Group onChange={handleChangeCheckbox}>
            <Space direction='vertical'>
              <Checkbox value="Thue xe may">Thue xe may</Checkbox>
              <Checkbox value="Thue o to 4 cho">Thue o to 4 cho</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>

        <Col span={12}>
          <p>Qua tang</p>
          <Radio.Group name="gift" onChange={handleChangeInput}>
            <Space direction='vertical'>
              <Radio value="Ao coc">Ao coc</Radio>
              <Radio value="mu">Mu</Radio>
            </Space>
          </Radio.Group>
        </Col>

        <Col span={12}>
          <p>Chon ngay</p>
          <RangePicker placeholder={["Nhan phong", "Tra phong"]} format="DD/MM/YYYY" onChange={handleChangeDate}/>
        </Col>

        <Col span={12}>
          <p>Gio nhan phong</p>
          <Select 
            style={{ width: 120 }}
            defaultValue={data.time}
            options={optionsTime} 
            onChange={handleChangeSelect}
          />
        </Col>

        <Col span={24}>
          <Button type='primary' onClick={handleSubmit}>Booking room</Button>
        </Col>
      </Row>
    </>
  )
}

export default BookRoom;