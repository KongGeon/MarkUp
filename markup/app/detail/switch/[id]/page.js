"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Switch01",
      cssFile: [],
      jsFile: [],
      img: "category/img_switch01.svg",
      html: `
<div class="s__switch">
    <input type="checkbox" id="toggle" hidden>
    <label for="toggle" class="toggleSwitch">
        <span class="toggleButton"></span>
    </label>
</div>
      `,
      css: `
/* 토글스위치 */
.toggleSwitch {
    width: 46px;
    height: 24px;
    display: block;
    position: relative;
    border-radius: 30px;
    background-color: #fff;
    border: 1px solid var(--border);
    cursor: pointer;
  }
  
  .toggleSwitch .toggleButton {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: var(--black);
  }
  
  #toggle:checked ~ .toggleSwitch {
    background: var(--main);
  }
  
  #toggle:checked ~ .toggleSwitch .toggleButton {
    left: calc(100% - 19px);
    background: #fff;
  }
  
  .toggleSwitch, .toggleButton {
    transition: all 0.2s ease-in;
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
