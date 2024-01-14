"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Header_PC01 (PC, Tablet Only)",
      img: "category/img_header_pc01.svg",
      html: `
<header class="s__header">
  <div class="s__container pc-menu">
      <div class="s__row">
          <a href="#" class="s__logo"><img src="/icon_logo.svg" alt="logo" title="홈으로 이동"></a>
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
/* header */
header.s__header {
  position: fixed;
  width: 100%;
  border-bottom: 1px solid var(--border);
  background-color: #fff;
  top: 0;

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
    },
    {
      title: "Header_PC02 (PC, Tablet Only)",
      img: "category/img_header_pc02.svg",
      html: `
<header class="s__header">
    <div class="s__pc-header-wrap">
        <div class="s__container pc-menu">
            <div class="s__row">
                <a href="#" class="s__logo"><img src="/icon_logo.svg" alt="logo" title="홈으로 이동"></a>
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
    </div>
    <div class="pc-menu-bg"></div>
    <!-- 모바일 헤더 위치 -->
</header>
      `,
      css: `
/* header */
header.s__header{
  position: fixed;
  width: 100%;
  border-bottom: 1px solid var(--border);
  background-color: #fff;
  top: 0;

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
  position: absolute;
  left: 0;
  right: 0;
}
.menu-link > li {
  height: 100%;
}
.menu-link a:hover{
  color: var(--main);
}
.s__pc-header-wrap{
  background-color: #fff;
  z-index: 11;
  position: relative;
}
.pc-menu__step1 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  font-weight: 600;
}
.pc-menu__step1 + ul {
  overflow: hidden;
  max-height: 0;
  height: 0;
  transition: all 0.2s;
}
.menu-link:hover .pc-menu__step1 + ul, .s__pc-header-wrap.menu-on .menu-link ul {
  height: auto;
  max-height: 200px;
}
.pc-menu__step2{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin: 2px;
  opacity: 0;
  transition: opacity 0.3s;
  transition-delay: 0.3s;
}
.menu-link:hover .pc-menu__step1 + ul a, .s__pc-header-wrap.menu-on .menu-link ul a {
  opacity: 1;
}
.pc-menu {
  height: 60px;
  position: relative;
}
.menu-right a + a {
  margin-left: 24px;
}
.menu-right a:hover{
  color: var(--main);
}
.pc-menu-bg{
  width: 100%;
  height: 270px;
  background-color: #fff;
  position: absolute;
  top: -300px;
  z-index: 10;
  transition: all 0.3s;
  border-bottom: 1px solid var(--border);
}
.s__pc-header-wrap.menu-on + .pc-menu-bg{
  top: 0;
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
        let header = document.querySelector("header");
        let pcMenu = document.querySelector(".s__pc-header-wrap");
        let pcMenuBtn = document.querySelectorAll(".pc-menu__step1");
        let pcMenuBtnList = document.querySelectorAll(".pc-menu__step1 + ul");
        let pcMenuBg = document.querySelector(".pc-menu-bg");
        let lastMenuLink = document.querySelector(
          ".menu-link > li:last-child li:last-child .pc-menu__step2"
        );
        for (let i = 0; i < pcMenuBtn.length; i++) {
          const p = pcMenuBtn[i];
          p.addEventListener("focusin", () => {
            pcMenu.classList.add("menu-on");
          });
          p.addEventListener("mouseover", () => {
            pcMenu.classList.add("menu-on");
          });
        }
        header.addEventListener("mouseleave", () => {
          pcMenu.classList.remove("menu-on");
        });
        let preMenu = document.querySelector(".s__logo"); //pc메뉴의 이전요소
        let nextMenu = document.querySelector(".s__login"); //pc메뉴의 다음요소
        preMenu.addEventListener("focusin", () => {
          pcMenu.classList.remove("menu-on");
        });
        nextMenu.addEventListener("focusin", () => {
          pcMenu.classList.remove("menu-on");
        });
        lastMenuLink.addEventListener("focusin", () => {
          pcMenu.classList.add("menu-on");
        });
      },
    },
    {
      title: "Header_PC03 (PC, Tablet Only)",
      img: "category/img_header_pc03.svg",
      html: `
<header class="s__header">
  <div class="s__container pc-menu">
      <div class="s__row">
          <a href="#" class="s__logo"><img src="/icon_logo.svg" alt="logo" title="홈으로 이동"></a>
          <ul class="menu-link">
              <li class="pc-menu__step1">
                  <a href="#">step1(1)</a>
                  <div>
                      <div>
                          <div class="sub-menu-title">
                              <h3>step1(1) title</h3>
                              <p>step1(1) subtite</p>
                          </div>
                          <div class="pc-menu__step2">
                              <ul>
                                  <li>
                                      <a href="#">step2(1-1)</a>
                                  </li>
                                  <li>
                                      <a href="#">step2(1-2)</a>
                                      <div class="pc-menu__step3">
                                          <ul>
                                              <li><a href="#">step3(1-2-1)</a></li>
                                              <li><a href="#">step3(1-2-2)</a></li>
                                          </ul>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </li>
              <li class="pc-menu__step1">
                  <a href="#">step1(2)</a>
                  <div>
                      <div>
                          <div class="sub-menu-title">
                              <h3>step1(2) title</h3>
                              <p>step1(2) subtite</p>
                          </div>
                          <div class="pc-menu__step2">
                              <ul>
                                  <li>
                                      <a href="#">step2(2-1)</a>
                                      <div class="pc-menu__step3">
                                          <ul>
                                              <li><a href="#">step3(2-1-1)</a></li>
                                              <li><a href="#">step3(2-1-2)</a></li>
                                          </ul>
                                      </div>
                                  </li>
                                  <li>
                                      <a href="#">step2(2-2)</a>
                                      <div class="pc-menu__step3">
                                          <ul>
                                              <li><a href="#">step3(2-2-1)</a></li>
                                              <li><a href="#">step3(2-2-2)</a></li>
                                              <li><a href="#">step3(2-2-3)</a></li>
                                          </ul>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
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
/* header */
header.s__header{
  position: fixed;
  width: 100%;
  border-bottom: 1px solid var(--border);
  background-color: #fff;
  top: 0;
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
.menu-link > li > a {
  cursor: pointer;
}
.menu-link a:hover {
  color: var(--main);
}
.pc-menu__step1 {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
}
.pc-menu__step1 > a{
  font-weight: 500;
}
.pc-menu {
  height: 60px;
}
.menu-right a:hover {
  color: var(--main);
}
.menu-right a + a {
  margin-left: 24px;
}
.pc-menu__step1 > div {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  position: absolute;
  width: 100%;
  top: calc(100%);
  left: 0;
  background-color: #fff;
  display: none;
  height: 300px;
}
.pc-menu__step1.active > div {
  display: block;
}
.pc-menu__step1 > div > div {
  display: flex;
  height: 100%;
}
.sub-menu-title{
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.sub-menu-title h3{
  font-size: 24px;
  font-weight: 800;
}
.sub-menu-title p{
  opacity: 0.3;
}
.pc-menu__step1 > div > div > div {
  width: 25%;
  height: 100%;
  border-right: 1px solid var(--border);
}
.pc-menu__step2 {
  position: relative;
}
.pc-menu__step3 {
  width: 100%;
  position: absolute;
  right: -100%;
  top: 0;
  display: none;
}
li.active > .pc-menu__step3 {
  display: block;
}

.pc-menu__step2 a {
  width: calc(100% - 8px);
  display: block;
  padding: 16px 16px;
  margin: 4px;
  border-radius: 8px;
}
.pc-menu__step2 > ul > li:hover > a,
.pc-menu__step2 > ul > li:focus > a {
  background-color: #eeeeee3e;
}
.pc-menu__step2 a:hover,
.pc-menu__step2 a:focus {
  background-color: #eeeeee3e;
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
        let pcMenuBtnStep2 = document.querySelectorAll(
          ".pc-menu__step2 > ul > li"
        );
        let pcMenuBtnList = document.querySelectorAll(".pc-menu__step1 + ul");
        let preMenu = document.querySelector(".s__logo"); //pc메뉴의 이전요소
        let nextMenu = document.querySelector(".s__login"); //pc메뉴의 다음요소

        //스탭1
        for (let i = 0; i < pcMenuBtn.length; i++) {
          const p = pcMenuBtn[i];
          p.addEventListener("mouseenter", () => {
            pcMenuBtn.forEach((e) => {
              e.classList.remove("active");
            });
            p.classList.add("active");
          });
          p.addEventListener("focusin", () => {
            pcMenuBtn.forEach((e) => {
              e.classList.remove("active");
            });
            p.classList.add("active");
          });
          p.addEventListener("mouseleave", () => {
            pcMenuBtn.forEach((e) => {
              e.classList.remove("active");
            });
          });
        }
        preMenu.addEventListener("focusin", () => {
          pcMenuBtn.forEach((e) => {
            e.classList.remove("active");
          });
        });
        nextMenu.addEventListener("focusin", () => {
          pcMenuBtn.forEach((e) => {
            e.classList.remove("active");
          });
        });

        // 스탭2
        for (let i = 0; i < pcMenuBtnStep2.length; i++) {
          const p = pcMenuBtnStep2[i];
          p.addEventListener("mouseenter", () => {
            pcMenuBtnStep2.forEach((e) => {
              e.classList.remove("active");
            });
            p.classList.add("active");
          });
          p.addEventListener("focusin", () => {
            pcMenuBtnStep2.forEach((e) => {
              e.classList.remove("active");
            });
            p.classList.add("active");
          });
        }
      },
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
