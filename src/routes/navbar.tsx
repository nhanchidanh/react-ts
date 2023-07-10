import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { MenuItem, NavbarItem } from "~/types";
import { Paths } from "~/types/route";

function getItem({ key, icon, to, children, label }: NavbarItem): MenuItem {
  return {
    key,
    icon,
    children,
    label: to ? <Link to={to}>{label}</Link> : label,
  } as MenuItem;
}

const navConfig: MenuItem[] = [
  getItem({
    key: Paths.Home,
    label: "Trang chu",
    to: Paths.Home,
    icon: <DesktopOutlined />,
  }),
  getItem({
    key: "",
    label: "Quan ly nguoi dung",
    children: [
      getItem({
        key: Paths.AddUser,
        label: "Them user",
        to: Paths.AddUser,
        icon: <TeamOutlined />,
      }),
    ],
  }),
];

export default navConfig;
