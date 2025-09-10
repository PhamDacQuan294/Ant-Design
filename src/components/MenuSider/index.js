import { Menu } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";

function MenuSider() {
  const items = [
    {
      label: "Menu 1",
      icon: <MenuUnfoldOutlined />,
      key: "menu-1",
      children: [
        {
          label: "Menu 1 - 1",
          key: "menu-1-1",
        },
        {
          label: "Menu 1 - 2",
          key: "menu-1-2",
        },
        {
          label: "Menu 1 - 3",
          key: "menu-1-3",
        }
      ]
    },
    {
      label: "Menu 2",
      icon: <MenuUnfoldOutlined />,
      key: "menu-2",
      children: [
        {
          label: "Menu 2 - 1",
          key: "menu-2-1",
        },
        {
          label: "Menu 2 - 2",
          key: "menu-2-2",
        },
        {
          label: "Menu 2 - 3",
          key: "menu-2-3",
        }
      ]
    },
    {
      label: "Menu 3",
      icon: <MenuUnfoldOutlined />,
      key: "menu-3",
      children: [
        {
          label: "Menu 3 - 1",
          key: "menu-3-1",
        },
        {
          label: "Menu 3 - 2",
          key: "menu-3-2",
        },
        {
          label: "Menu 3 - 3",
          key: "menu-3-3",
        }
      ]
    },
  ];

  return (
    <>
       <Menu
        mode="inline"
        items={items}
      />
    </>
  )
}

export default MenuSider;