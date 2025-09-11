import { Button, Form, Input, InputNumber, message, Select, Switch } from "antd";
import { createRoom } from "../../services/roomsService";
const { Option } = Select;

function CreateRoom() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const rules = [
    {
      required: true, 
      message: 'Bat buoc'
    },
  ];

  const handleSubmit = async (values) => {
    const response = await createRoom(values);
    // const response = undefined; //Tao khong thanh cong
    console.log(response);
    if(response) {
      form.resetFields();
      messageApi.open({
        type: 'success',
        content: 'Tao phong moi thanh cong',
        duration: 5,
      });
    } else {
      messageApi.open({
        type: 'error',
        content: 'Tao phong moi khong thanh cong',
        duration: 6,
      });
    }
  }

  return (
    <>
      {contextHolder}
      <h2>Them phong moi</h2>

      <Form layout="vertical" name="create-room" onFinish={handleSubmit} form={form}>
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
              Tao moi
            </Button>
          </Form.Item>

      </Form>
    </>
  )
}

export default CreateRoom;