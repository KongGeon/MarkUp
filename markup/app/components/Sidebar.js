"use client";

import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  const SidebarList = styled.ul`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 160px;
  `;
  const List = styled.p`
    color: var(--gray);
    font-family: Pretendard Variable;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  `;

  const menuData = [
    { name: "Header(PC)", path: "/detail/header_pc/1" },
    { name: "Header(Mobile)", path: "/detail/header_mobile/1" },
    { name: "footer", path: "/detail/footer/1" },
    { name: "swiper", path: "/detail/swiper/1" },
    { name: "board", path: "/detail/board/1" },
    { name: "table", path: "/detail/table/1" },
    { name: "input", path: "/detail/input/1" },
    { name: "radio", path: "/detail/radio/1" },
    { name: "checkbox", path: "/detail/checkbox/1" },
    { name: "textarea", path: "/detail/textarea/1" },
    { name: "select", path: "/detail/select/1" },
    { name: "switch", path: "/detail/switch/1" },
    { name: "button", path: "/detail/button/1" },
    { name: "modal", path: "/detail/modal/1" },
    { name: "tabs", path: "/detail/tabs/1" },
    { name: "chart", path: "/detail/chart/1" },
    { name: "accordion", path: "/detail/accordion/1" },
    { name: "textediter", path: "/detail/textediter/1" },
    { name: "cordbox", path: "/detail/cordbox/1" },
  ];
  return (
    <SidebarList>
      {menuData.map((menu, index) => {
        return (
          <li key={index}>
            <Link href={menu.path}>
              <List
                style={{
                  color:
                    menu.path === pathname ? "var(--black)" : "var(--gray)",
                  fontWeight: menu.path === pathname ? 600 : 400,
                }}
              >
                {menu.name}
              </List>
            </Link>
          </li>
        );
      })}
    </SidebarList>
  );
}
