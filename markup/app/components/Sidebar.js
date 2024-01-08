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
    { name: "Header(PC)", path: "/detail/header_pc/0" },
    { name: "Header(Mobile)", path: "/detail/header_mobile/0" },
    { name: "footer", path: "/detail/footer/0" },
    { name: "swiper", path: "/detail/swiper/0" },
    { name: "board", path: "/detail/board/0" },
    { name: "table", path: "/detail/table/0" },
    { name: "input", path: "/detail/input/0" },
    { name: "radio", path: "/detail/radio/0" },
    { name: "checkbox", path: "/detail/checkbox/0" },
    { name: "textarea", path: "/detail/textarea/0" },
    { name: "select", path: "/detail/select/0" },
    { name: "switch", path: "/detail/switch/0" },
    { name: "button", path: "/detail/button/0" },
    { name: "modal", path: "/detail/modal/0" },
    { name: "tabs", path: "/detail/tabs/0" },
    { name: "chart", path: "/detail/chart/0" },
    { name: "accordion", path: "/detail/accordion/0" },
    { name: "textediter", path: "/detail/textediter/0" },
    { name: "cordbox", path: "/detail/cordbox/0" },
  ];

  function extractBetweenSlashes(input) {
    const parts = input.split('/');
    if (parts.length >= 4) {
      return parts[2];
    } else {
      // 적절한 처리 또는 에러 핸들링
      return null;
    }
  }
  
  return (
    <SidebarList>
      {menuData.map((menu, index) => {
        return (
          <li key={index}>
            <Link href={menu.path}>
              <List
                style={{
                  color:
                    extractBetweenSlashes(menu.path) === extractBetweenSlashes(pathname) ? "var(--black)" : "var(--gray)",
                  fontWeight: extractBetweenSlashes(menu.path) === extractBetweenSlashes(pathname) ? 600 : 400,
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
