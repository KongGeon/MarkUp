"use client";

import Contents from "@/app/components/Contents";
import { useEffect, useState } from "react";
export default function page(props) {
  // 처음켜지면 id의 값이 thisPage의 값으로 지정
  const [thisPage, setThisPage] = useState("1");

  // thisPage의 값이 바뀌면 thisCategory 값이 해당 내용으로 지정
  useEffect(() => {
    setThisPage(props.params.id);
    console.log("현재페이지", props.params.id);
  }, [thisPage]); //이상하게 이것 넣으면 처음에 랜더링이 안됨

  const header01 = {
    html: `
    <header class="s__header">
    <div class="s__container pc-menu">
        <div class="s__row">
            <a href="#" class="s__logo"><img src="/img_logo.svg" alt="logo" title="홈으로 이동"></a>
            <ul class="menu-link">
                <li>
                    <a href="#" class="pc-menu__step1">step1</a>
                    <ul>
                        <li><a href="#" class="pc-menu__step2">step2</a></li>
                        <li><a href="#" class="pc-menu__step2">step2</a></li>
                        <li><a href="#" class="pc-menu__step2">step2</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="pc-menu__step1">step1</a>
                    <ul>
                        <li><a href="#" class="pc-menu__step2">step2</a></li>
                        <li><a href="#" class="pc-menu__step2">step2</a></li>
                        <li><a href="#" class="pc-menu__step2">step2</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="pc-menu__step1">step1</a>
                    <ul>
                        <li><a href="#" class="pc-menu__step2">step2</a></li>
                        <li><a href="#" class="pc-menu__step2">step2</a></li>
                        <li><a href="#" class="pc-menu__step2">step2</a></li>
                        <li><a href="#" class="pc-menu__step2">step2</a></li>
                        <li><a href="#" class="pc-menu__step2">step2</a></li>
                    </ul>
                </li>
            </ul>
            <div class="menu-right">
                <a href="#" class="s__login">login</a>
                <a href="#">join</a>
            </div>
        </div>
    </div>
    <!-- 모바일 헤더 위치 -->
</header>
    `,
    css: `
     
    header.s__header {
      position: fixed;
      width: 100%;
      border-bottom: 1px solid var(--border);
      background-color: #fff;
    }
    header.s__header .s__row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      height: 100%;
    }
    .menu-link {
      display: flex;
      height: 100%;
    }
    .menu-link > li {
      position: relative;
      cursor: pointer;
    }
    .menu-link ul {
      display: none;
      position: absolute;
      left: 0;
      right: 0;
      background-color: #fff;
      overflow: hidden;
    }
    .menu-link > li {
      height: 100%;
    }
    .menu-link a:hover {
      color: var(--main);
    }
    @-webkit-keyframes menuOpen {
      0% {
        max-height: 0;
      }
      100% {
        max-height: 1000px;
      }
    }
    
    .pc-menu__step1 {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 24px;
      font-weight: 500;
    }
    .pc-menu__step1.menu-on + ul,
    .menu-link > li:hover > ul {
      display: block;
      border: 1px solid var(--border);
      border-top: 1px solid #fff;
      animation-name: menuOpen;
      animation-duration: 2s;
      border-radius: 0 0 4px 4px;
    }
    .pc-menu__step1.menu-on + ul a,
    .menu-link > li:hover > ul a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
    }
    .pc-menu__step1.menu-on + ul li:last-child a,.menu-link > li:hover > ul li:last-child a {
      padding-bottom: 16px;
    }
    .pc-menu {
      height: 60px;
    }
    .menu-right a + a {
      margin-left: 24px;
    }
    .menu-right a:hover {
      color: var(--main);
    }
    
    @media (max-width: 1600px) {
    }
    @media (max-width: 1366px) {
    }
    @media (max-width: 1024px) {
    }
    @media (max-width: 768px) {
      .pc-menu {
        display: none;
      }
    }
    

    `,
    js: () => {
      //pc메뉴
      let pcMenuBtn = document.querySelectorAll(".pc-menu__step1");

      for (let i = 0; i < pcMenuBtn.length; i++) {
        const p = pcMenuBtn[i];
        p.addEventListener("focusin", () => {
          pcMenuBtn.forEach((e) => {
            e.classList.remove("menu-on");
          });
          p.classList.add("menu-on");
        });
      }
      let preMenu = document.querySelector(".s__logo"); //pc메뉴의 이전요소
      let nextMenu = document.querySelector(".s__login"); //pc메뉴의 다음요소
      preMenu &&
        preMenu.addEventListener("focusin", () => {
          pcMenuBtn.forEach((e) => {
            e.classList.remove("menu-on");
          });
        });
      nextMenu &&
        nextMenu.addEventListener("focusin", () => {
          pcMenuBtn.forEach((e) => {
            e.classList.remove("menu-on");
          });
        });
    },
    download: [
      { name: "file01", link: "link01" },
      { name: "file02", link: "link02" },
    ],
  };

  return (
    <>
      <style>{header01.css}</style>
      <Contents
        name="Header(PC)"
        contentsHtml={header01.html}
        contentsCss={header01.css}
        contentsJs={header01.js}
        contentsDownload={header01.download}
      ></Contents>
    </>
  );
}
