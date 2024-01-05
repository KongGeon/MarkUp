"use client";

import Contents from "@/app/components/Contents";
import { useEffect } from "react";
export default function page() {
  const header01 = {
    html: `
    <header>
      <div class="s__container pc-menu">
          <div class="s__row">
              <a href="#" class="s__logo"><img src="../image/icon_logo.svg" alt="logo" title="홈으로 이동"></a>
              <ul class="menu-link">
                  <li>
                      <a href="#" class="pc-menu__step1">Lorem, ipsum</a>
                      <ul>
                          <li><a href="#" class="pc-menu__step2">step2</a></li>
                          <li><a href="#" class="pc-menu__step2">step2</a></li>
                          <li><a href="#" class="pc-menu__step2">step2</a></li>
                      </ul>
                  </li>
                  <li>
                      <a href="#" class="pc-menu__step1">lorem</a>
                      <ul>
                          <li><a href="#" class="pc-menu__step2">step2</a></li>
                          <li><a href="#" class="pc-menu__step2">step2</a></li>
                          <li><a href="#" class="pc-menu__step2">step2</a></li>
                      </ul>
                  </li>
                  <li>
                      <a href="#" class="pc-menu__step1">Lorem, ipsum dolor</a>
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
                  <a href="#" class="s__login">로그인</a>
                  <a href="#">회원가입</a>
              </div>
          </div>
      </div>
    </header>
    `,
    css: `
     
/* header */
header {
  // position: fixed;
  width: 100%;
  border-bottom: 1px solid var(--border);
  background-color: #fff;
}
header .s__row {
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
}
.menu-link > li {
  height: 100%;
}
.menu-link a:hover{
  color: var(--main);
}
.pc-menu__step1 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
}
.pc-menu__step1.menu-on + ul,
.menu-link > li:hover > ul {
  display: block;
  border: 1px solid var(--border);
  border-top: 1px solid #fff;
}
.pc-menu__step1.menu-on + ul a,
.menu-link > li:hover > ul a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}
.pc-menu {
  height: 50px;
}
.menu-right a {
  margin-left: 16px;
}
/* header-mobile */
.mobile-menu {
  display: none;
  height: 50px;
}
.mobile-menu .s__row {
  align-items: center;
  width: 100%;
}
.mobile-menu .s__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.mobile-menu ul ul {
  display: none;
}
.mobile-menu ul ul.menu-on {
  display: block;
}
.mobile-menu__list {
  display: none;
}
.mobile-menu__list.menu-on {
  display: block;
  height: 100vh;
  background-color: #fff;

}
.mobile-menu__step1 {
  display: block;
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid var(--border);
}
.mobile-menu__step1.menu-on + ul {
  display: block;
  text-align: center;
}
.mobile-menu__step2{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
}
.mobile-menu__step1.menu-on + ul {
  border-bottom: 1px solid var(--border);
  background-color: #f7f7f7;
}

.icon-menu-off{
  display: none;
}
.menu.menu-on .icon-menu-on{
  display: none;
}
.menu.menu-on .icon-menu-off{
  display: block;
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
      preMenu.addEventListener("focusin", () => {
        pcMenuBtn.forEach((e) => {
          e.classList.remove("menu-on");
        });
      });
      nextMenu.addEventListener("focusin", () => {
        pcMenuBtn.forEach((e) => {
          e.classList.remove("menu-on");
        });
      });
    },
    download:[{name:'file01', link:'link01'},{name:'file02', link:'link02'}]
  };

  useEffect(() => {
    header01.js();
  }, []);

  return (
    <>
      <style>{header01.css}</style>
      <Contents name="Header(PC)" contentsHtml={header01.html} contentsCss={header01.css} contentsJs={header01.js} contentsDownload = {header01.download}></Contents>
    </>
  );
}
