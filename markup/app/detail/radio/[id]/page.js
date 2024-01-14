"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Radio01",
      cssFile: [],
      jsFile: [],
      img: "category/img_radio01.svg",
      html: `
<div class="s__radio-wrap">
  <div class="s__radio">
      <input type="radio" class="" name="ra01" id="ra01_01" hidden checked>
      <label for="ra01_01"></label>
      <label for="ra01_01">radio</label>
  </div>
  <div class="s__radio">
      <input type="radio" class="" name="ra01" id="ra01_02" hidden>
      <label for="ra01_02"></label>
      <label for="ra01_02">radio</label>
  </div>
</div>
      `,
      css: `
.s__checkbox-wrap,
.s__radio-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.s__checkbox,
.s__radio {
  display: flex;
  align-items: center;
}
.s__checkbox + .s__checkbox,
.s__radio + .s__radio {
  margin-left: 16px;
}
.s__radio input + label {
  width: 24px;
  height: 24px;
  display: block;
  background: url(/icon_radio_off.svg);
  background-size: contain;
  cursor: pointer;
}
.s__radio input:disabled + label {
  background: url(/icon_radio_off_disabled.svg);
  background-size: contain;
}
.s__radio input:checked + label {
  background: url(/icon_radio_on.svg);
  background-size: contain;
}
.s__radio input:checked:disabled + label {
  background: url(/icon_radio_on_disabled.svg);
  background-size: contain;
}
.s__radio input + label + label {
  font-size: 16px;
  cursor: pointer;
  margin-left: 8px;
}
      `,
      js: () => {},
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
