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
      `,
      js: () => {},
      download: [{ name: "file01", link: "link01" }],
    },
    {
      title: "Select02",
      cssFile: [],
      jsFile: [],
      img: "category/img_select02.svg",
      html: `
      <div class="s__container">
      <div class="s__row">
      <div class="phone-wrap">
      <select name="" id="" class="s__select">
          <option value="">010</option>
          <option value="">011</option>
      </select>
      <input type="number" class="s__input s__input_phone" maxlength="4">
      <input type="number" class="s__input s__input_phone" maxlength="4">
  </div>
  </div>
  </div>
      `,
      css: `
      .phone-wrap {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 8px;
      }
      `,
      js: () => {
        //input 숫자 최대 개수
        const phoneNum = document.querySelectorAll('.s__input_phone')
        for (let i = 0; i < phoneNum.length; i++) {
          const p = phoneNum[i];
          p.addEventListener('input', function (e) {
            const object = e.target
            if (object.value.length > object.maxLength) {
              object.value = object.value.slice(0, object.maxLength);
            }
          })
        }
      },
      download: [{ name: "file01", link: "link01" }],
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
