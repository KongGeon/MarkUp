"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Button01",
      cssFile: [],
      jsFile: [],
      img: "category/img_button01.svg",
      html: `
      <div class="s__container">
      <div class="s__row">
          <div class="s__btn-center-wrap s__btn-wrap">
              <button class="s__btn s__btn-main"><img class="s__btn-img-left" src="/icon_home_w.svg" alt="">앞아이콘</button>
              <button class="s__btn s__btn-main">뒤아이콘<img class="s__btn-img-right" src="/icon_blog_w.svg" alt=""></button>
              <a href="#" class="s__btn s__btn-main">a태그</a>
          </div>
          <p>사이즈</p>
          <div class="s__btn-center-wrap s__btn-wrap">
              <button class="s__btn s__btn-sm s__btn-main">SMALL</button>
              <button class="s__btn s__btn-main">NOMAL</button>
              <button class="s__btn s__btn-lg s__btn-main">LARGE</button>
          </div>
          <p>정렬</p>
          <div class="s__btn-left-wrap s__btn-wrap">
              <button class="s__btn s__btn-main">MAIN</button>
              <button class="s__btn s__btn-red">RED</button>
              <button class="s__btn s__btn-line">LINE</button>
              <button class="s__btn s__btn-main" disabled>DISABLED</button>
          </div>
          <div class="s__btn-center-wrap s__btn-wrap">
              <button class="s__btn s__btn-main">MAIN</button>
              <button class="s__btn s__btn-red">RED</button>
              <button class="s__btn s__btn-line">LINE</button>
              <button class="s__btn s__btn-main" disabled>DISABLED</button>
          </div>
          <div class="s__btn-right-wrap s__btn-wrap">
              <button class="s__btn s__btn-main">MAIN</button>
              <button class="s__btn s__btn-red">RED</button>
              <button class="s__btn s__btn-line">LINE</button>
              <button class="s__btn s__btn-main" disabled>DISABLED</button>
          </div>
          <div class="s__btn-between-wrap s__btn-wrap">
              <div>
                  <button class="s__btn s__btn-main">MAIN</button>
                  <button class="s__btn s__btn-red">RED</button>
              </div>
              <div>
                  <button class="s__btn s__btn-line">LINE</button>
                  <button class="s__btn s__btn-main" disabled>DISABLED</button>
              </div>
          </div>
          <div class="s__btn-row-wrap s__btn-wrap">
              <button class="s__btn s__btn-main">MAIN</button>
              <button class="s__btn s__btn-red">RED</button>
              <button class="s__btn s__btn-line">LINE</button>
              <button class="s__btn s__btn-main" disabled>DISABLED</button>
          </div>
      </div>
  </div>
      `,
      css: ``,
      js: () => {},
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
