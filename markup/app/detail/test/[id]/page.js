"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "",
      cssFile: [],
      jsFile: [],
      img: "category/img_header_pc01.svg",
      html: `
<div class="s__container">
  <div class="s__row">
  </div>
</div>
      `,
      css: `
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
