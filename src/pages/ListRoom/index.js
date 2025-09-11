import { useState, useEffect } from "react";
import { getListRoom } from "../../services/roomsService";
import {  Button } from "antd";
import { UnorderedListOutlined, AlignCenterOutlined } from "@ant-design/icons"


function ListRoom() {
  const [rooms, setRooms] = useState([]);

  const fetchApi = async () => {
    const response = await getListRoom();
    setRooms(response.reverse());
  }

  useEffect(() => {
    fetchApi();
  }, []);

  
  return (
    <>
      <Button>
        <UnorderedListOutlined />
      </Button>
      <Button>
        <AlignCenterOutlined />
      </Button>
    </>
  )
}

export default ListRoom;