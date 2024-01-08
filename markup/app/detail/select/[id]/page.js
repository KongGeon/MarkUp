"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Select01",
      cssFile: [],
      jsFile: [],
      img: "category/img_select01.svg",
      html: `
      <div class="s__container">
      <div class="s__row">
      <select name="" id="" class="s__select">
      <option value="" disabled>선택안됨</option>
      <option value="" label="이걸로대체됨">옵션</option>
      <option value="" selected>처음에선택됨</option>
      <option value="">옵션</option>
  </select>
  </div>
  </div>
      `,
      css: `
      .s__select {
        -webkit-appearance: none; /* for chrome */
        -moz-appearance: none; /*for firefox*/
        appearance: none;
        background: url("/icon_down_arrow.svg") no-repeat 97% 50%/18px auto;
        background-color: #fff;
        width: 100%;
        padding: 12px 18px;
        border-radius: 5px;
        border-radius: 5px;
        border: 1px solid #c2c2c2;
        font-size: 16px;
        min-height: 50px;
      }
      .s__select::-ms-expand {
        display: none; /*for IE10,11*/
      }
      `,
      js: () => {},
      download: [{ name: "file01", link: "link01" }],
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
