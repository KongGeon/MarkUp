"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Input",
      cssFile: [],
      jsFile: [],
      img: "category/img_input01.svg",
      html: `
      <div class="s__container">
      <div class="s__row">
        <input type="text" class="s__input s__input-small s__text" placeholder="small">
        <input type="text" class="s__input s__text" placeholder="text">
        <input type="number" class="s__input s__number" placeholder="number">
        </div>
        </div>
      `,
      css: `
      .s__input {
        padding: 12px 18px;
        border-radius: 5px;
        border: 1px solid #c2c2c2;
        font-size: 16px;
        min-height: 50px;
        width: 100%;
        margin: 2px;
      }
      .s__input-small{
          padding: 6px 14px;
          font-size: 14px;
          min-height: 36px;
      }
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
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
