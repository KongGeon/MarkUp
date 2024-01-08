"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Textarea01",
      cssFile: [],
      jsFile: [],
      img: "category/img_textarea01.svg",
      html: `
      <div class="s__container">
      <div class="s__row">
<div class="s__textarea-wrap">
  <div class="s__textarea__group">
      <textarea name="textarea" id="" class="s__textarea" rows="3" placeholder="작성해주세요."></textarea>
  </div>
</div>
</div>
        </div>
      `,
      css: `
      /* 텍스트에어리어 */
.s__textarea {
  padding: 12px 18px;
  border-radius: 5px;
  border: 1px solid #c2c2c2;
  font-size: 16px;
  min-height: 50px;
  width: 100%;
  resize: none;
  box-sizing: border-box;
}
.use__application__textarea__addinfo {
  display: flex;
  justify-content: space-between;
}
.use__application__textarea__addinfo li {
  font-size: 16px;
}
.textarea__text__check {
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 19px;
  margin-top: 8px;
  text-align: right;
}
      `,
      js: () => {},
      download: [{ name: "file01", link: "link01" }],
    },
    {
      title: "Textarea02",
      cssFile: [],
      jsFile: [],
      img: "category/img_textarea02.svg",
      html: `
      <div class="s__container">
      <div class="s__row">
<div class="s__textarea-wrap js-text-count-group">
  <div class="s__textarea__group">
    <textarea name="textarea" id="" class="s__textarea js-text-count" data-max="5000" rows="5" title="내용을 5000자 이하로 작성해주세요" placeholder="내용을 5000자 이하로 작성해주세요"></textarea>
  </div>
  <div class="use__application__textarea__addinfo">
    <ul>
      <li>이용목적을 명확하고 구체적으로 작성해주시기 바랍니다.</li>
    </ul>
    <p class="s__textarea__text__check js-text-count-ck">0/5000</p>
  </div>
</div>
</div>
        </div>
      `,
      css: `
/* 텍스트에어리어 */
.s__textarea {
  padding: 12px 18px;
  border-radius: 5px;
  border: 1px solid #c2c2c2;
  font-size: 16px;
  min-height: 50px;
  width: 100%;
  resize: none;
  box-sizing: border-box;
}
.use__application__textarea__addinfo {
  display: flex;
  justify-content: space-between;
}
.use__application__textarea__addinfo li {
  font-size: 16px;
}
.textarea__text__check {
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 19px;
  margin-top: 8px;
  text-align: right;
}
      `,
      js: () => {
        // 텍스트에어리어 숫자 체크
        const textCounts = document.querySelectorAll(".js-text-count");

        function handlerTextCount() {
          const countGroup = this.parentNode.parentNode;
          const countTextGroup = countGroup.querySelector(".js-text-count-ck");
          const countMax = this.dataset.max;
          const countText = this.value.length;

          countTextGroup.innerText = `${countText}/${countMax}`;

          if (countText > countMax) {
            countTextGroup.innerText = `${countMax}/${countMax}`;
          }
        }
        textCounts.forEach((elem) => {
          elem.addEventListener("keyup", handlerTextCount);
        });
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
