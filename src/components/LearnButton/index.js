import { Button, Typography } from "antd";
import { StepBackwardOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Title } = Typography;

function LearnButton() {

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      const result = {
        code: 200,
        data: []
      };
      if (result && result.code === 200) {
        setLoading(false);
      }
    }, 3000);
  };

  return (
    <>
      <Button type="dashed" loading={loading} onClick={handleClick} size="small">Noi dung</Button>

      <Button icon={<StepBackwardOutlined rotate={45} spin={true}/>}>Button</Button>

      <Title level={3}>h3. Ant Desing</Title>

      <h3>h3</h3>
    </>
  )
}

export default LearnButton;