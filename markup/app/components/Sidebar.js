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
    width: 200px;
    & li:nth-child(1),
    & li:nth-child(4) {
      padding-bottom: 16px;
      position: relative;
    }
    & li:nth-child(1)::after,
    & li:nth-child(4)::after {
      content: "";
      display: block;
      width: 100px;
      height: 1px;
      background-color: var(--boarder);
      position: absolute;
      bottom: 0;
      opacity: 0.5;
    }
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
    { name: "ReadMe", path: "/detail/read_me" },
    { name: "Header(PC)", path: "/detail/header_pc/0" },
    { name: "Header(Mobile)", path: "/detail/header_mobile/0" },
    { name: "footer", path: "/detail/footer/0" },
    { name: "swiper", path: "/detail/swiper/0" },
    { name: "board", path: "/detail/board/0" },
    { name: "table", path: "/detail/table/0" },
    { name: "input", path: "/detail/input/0" },
    { name: "date", path: "/detail/date/0" },
    { name: "file", path: "/detail/file/0" },
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
    // { name: "texteditor", path: "/detail/texteditor/0" },
    // { name: "cordbox", path: "/detail/cordbox/0" },
  ];

  // 5번째 요소(index 4)부터 끝까지를 따로 분리
  const sliceArray = menuData.slice(4);
  // 분리한 부분을 'name' 속성을 기준으로 오름차순으로 정렬
  sliceArray.sort((a, b) => a.name.localeCompare(b.name));
  // 정렬된 부분을 원래 배열에 다시 삽입
  menuData.splice(4, sliceArray.length, ...sliceArray);

  function extractBetweenSlashes(input) {
    const parts = input.split("/");
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
                    extractBetweenSlashes(menu.path) ===
                    extractBetweenSlashes(pathname)
                      ? "var(--black)"
                      : "var(--gray)",
                  fontWeight:
                    extractBetweenSlashes(menu.path) ===
                    extractBetweenSlashes(pathname)
                      ? 600
                      : 400,
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
