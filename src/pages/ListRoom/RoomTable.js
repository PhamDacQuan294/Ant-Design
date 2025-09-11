import { Table, Tooltip } from "antd";
import { Tag } from 'antd';
import DeleteRoom from "./DeleteRoom";

function RoomTable(props) {
  const { rooms, onReload } = props;

  const columns = [
    {
      title: 'Ten phong',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'So giuong',
      dataIndex: 'quantityBed',
      key: 'quantityBed',
    },
    {
      title: 'So nguoi',
      dataIndex: 'quantityPeople',
      key: 'quantityPeople',
    },
    {
      title: 'Loai phong',
      dataIndex: 'typeRoom',
      key: 'typeRoom',
      render: (_, record) => {
        return <>
          {record.typeRoom ? (
            <>
              <Tooltip title="Phong vip chuan 5 sao">
                  <Tag color="purple">VIP</Tag>
              </Tooltip>
              {/* <Badge color="purple" text="VIP" /> */}
            </>
          ) : (
            <>
             <Tooltip title="Phong thuong chuan 3 sao">
                <Tag color="gray">Thuong</Tag>
             </Tooltip>
              {/* <Badge status="error" text="Thuong" /> */}
            </>   
          )}
        </>;
      }
    },
    {
      title: 'Trang thai',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => {
        return <>
          {record.status ? (
            <>
              <Tooltip title="Phong chua co khach dat" color="green">
                <Tag color="green">Con phong</Tag>
              </Tooltip>
              {/* <Badge status="success" text="Con phong" /> */}
            </>
          ) : (
            <>
              <Tooltip title="Phong da co khach dat" color="red">
                <Tag color="red">Het phong</Tag>
              </Tooltip>
              {/* <Badge color="yellow" text="Het phong" /> */}
            </>
          )}
        </>;
      }
    },
    {
      title: 'Hanh dong',
      key: 'actions',
      render: (_, record) => {
        return <>
          <DeleteRoom record={record} onReload={onReload} />
        </>;
      }
    },
  ];

  return (
    <>
      <Table dataSource={rooms} columns={columns} rowKey="id" />;
    </>
  )
}

export default RoomTable;