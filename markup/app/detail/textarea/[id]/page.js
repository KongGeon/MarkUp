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
<section>
  <div class="s__container">
    <div class="s__row">
      <div class="s__textarea-wrap">
        <div class="s__textarea__group">
          <textarea name="textarea" id="" class="s__textarea" rows="3" placeholder="작성해주세요."></textarea>
        </div>
      </div>
    </div>
  </div>
</section>
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
  resize: vertical;
  box-sizing: border-box;
}
      `,
      js: () => {},
    },
    {
      title: "Textarea02",
      cssFile: [],
      jsFile: [],
      img: "category/img_textarea02.svg",
      html: `
<section>
  <div class="s__container">
      <div class="s__row">
        <div class="s__textarea-wrap js-text-count-group">
          <div class="s__textarea__group">
            <textarea name="textarea" id="" class="s__textarea js-text-count" maxlength="100" rows="3" placeholder="내용을 100자 이하로 작성해주세요"></textarea>
          </div>
          <div class="s__textarea__addinfo">
            <p class="s__textarea__text__check js-text-count-ck">0/100</p>
          </div>
        </div>
    </div>
  </div>
</section>
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
.s__textarea__addinfo {
  display: flex;
  justify-content: flex-end;
}
.s__textarea__text__check {
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
          const countMax = this.maxLength; //최대글자수
          const countText = this.value.length; //현재글자수

          countTextGroup.innerText = `${countText}/${countMax}`;

          if (countText > countMax) {
            this.value.length = countMax;
            countTextGroup.innerText = `${countMax}/${countMax}`;
          }
        }
        textCounts.forEach((elem) => {
          elem.addEventListener("keyup", handlerTextCount);
        });
      },
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
