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
<section>
  <div class="s__container">
    <div class="s__row">
      <input type="text" class="s__input s__input-small s__text" placeholder="small">
      <input type="text" class="s__input s__text" placeholder="text">
      <input type="number" class="s__input s__number" placeholder="number">
    </div>
  </div>
</section>
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
