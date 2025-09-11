import { Button, Form, Input, InputNumber, Modal, notification, Select, Spin, Switch } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { updateRoom } from "../../services/roomsService";
const { Option } = Select;

function EditRoom(props) {
  const { record, onReload } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [notiApi, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  }
  

  const rules = [
    {
      required: true, 
      message: 'Bat buoc'
    },
  ];

  const handleSubmit = async (values) => {
    setSpinning(true);
    console.log("Da gui");
    const response = await updateRoom(record.id, values);
    // const response = undefined; //Tao khong thanh cong
    setTimeout(() => {
      if(response) {
        notiApi.success({
          message: 'Cap nhat thanh cong',
          description: `Ban da cap nhat thanh cong phong ${record.name}`
        });
        setShowModal(false);
        onReload();
      } else {
        notiApi.error({
          message: 'Cap nhat that bai',
          description: `Ban da cap nhat that bai phong ${record.name}`
        });
      }
      setSpinning(false);
    }, 3000);
  };

  return (
    <>
      {contextHolder}
      <Button size="small" type="primary" icon={<EditOutlined />} onClick={handleShowModal}/>

      <Modal open={showModal} onCancel={handleCancel} title="Chinh sua phong" footer={null}>
        <Spin spinning={spinning} tip="Dang cap nhat">
          <Form layout="vertical" name="create-room" onFinish={handleSubmit} form={form} initialValues={record}>
              <Form.Item
                label="Ten phong"
                name="username"
                rules={rules}
            >
              <Input />
              </Form.Item>

              <Form.Item
                label="So luong giuong"
                name="quantityBed"
                rules={rules}
            >
              <InputNumber min={1} />
              </Form.Item>

              <Form.Item
                label="So nguoi toi da"
                name="quantityPeople"
                rules={rules}
            >
              <InputNumber min={1} />
              </Form.Item>


              <Form.Item
                label="Mo ta"
                name="description"
            >
                <Input.TextArea />
              </Form.Item>

              <Form.Item label="Tien ich" name="utils" noStyle>
              <Select
                style={{
                  width: "100%",
                }}
                mode="multiple"
                allowClear
            >
                <Option value="Wifi">Wifi</Option>
                <Option value="Nong lanh">Nong lanh</Option>
                </Select>
              </Form.Item>


              <Form.Item valuePropName="checked" label="Trang thai" name="status">
              <Switch checkedChildren="Con phong" unCheckedChildren="Het phong" defaultChecked />
              </Form.Item>

              <Form.Item valuePropName="checked" label="Loai phong" name="typeRoom">
              <Switch checkedChildren="VIP" unCheckedChildren="Thuong" defaultChecked />
              </Form.Item>

              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  Cap nhat
                </Button>
              </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </>
  )
}

export default EditRoom;