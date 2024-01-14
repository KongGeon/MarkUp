"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Accordion01",
      cssFile: [],
      jsFile: [],
      img: "category/img_accordion01.svg",
      html: `
    <section>
      <div class="s__container">
        <div class="s__row">
            <ul class="s__accordion01-wrap">
                <li>
                    <ul class="s__accordion01" data-accordion="accordion01">
                        <li class="s__accordion01-title">
                            <a href="javascript:void(0)">
                                <span>아코디언타이틀</span>
                                <img src="/icon_down_arrow.svg" alt="열기" title="열기">
                            </a>
                        </li>
                        <li class="s__accordion01-contents">
                            <div>
                                <p>아코디언텍스트</p>
                                <p>아코디언텍스트</p>
                                <p>아코디언텍스트</p>
                                <p>아코디언텍스트</p>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class="s__accordion01" data-accordion="accordion01">
                        <li class="s__accordion01-title">
                            <a href="javascript:void(0)">
                                <span>아코디언타이틀</span>
                                <img src="/icon_down_arrow.svg" alt="열기" title="열기">
                            </a>
                        </li>
                        <li class="s__accordion01-contents">
                            <div>
                                <p>아코디언텍스트</p>
                                <p>아코디언텍스트</p>
                                <p>아코디언텍스트</p>
                                <p>아코디언텍스트</p>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class="s__accordion01" data-accordion="accordion01">
                        <li class="s__accordion01-title">
                            <a href="javascript:void(0)">
                                <span>아코디언타이틀</span>
                                <img src="/icon_down_arrow.svg" alt="열기" title="열기">
                            </a>
                        </li>
                        <li class="s__accordion01-contents">
                            <div>
                                <p>아코디언텍스트</p>
                                <p>아코디언텍스트</p>
                                <p>아코디언텍스트</p>
                                <p>아코디언텍스트</p>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class="s__accordion01" data-accordion="accordion01">
                        <li class="s__accordion01-title">
                            <a href="javascript:void(0)">
                                <span>아코디언타이틀</span>
                                <img src="/icon_down_arrow.svg" alt="열기" title="열기">
                            </a>
                        </li>
                        <li class="s__accordion01-contents">
                            <div>
                                <p>아코디언텍스트</p>
                                <p>아코디언텍스트</p>
                                <p>아코디언텍스트</p>
                                <p>아코디언텍스트</p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</section>
      `,
      css: `
      .s__accordion01-wrap{
        border-top: 1px solid var(--border);
        }
        .s__accordion01-title > a{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
            border-bottom: 1px solid var(--border);
        }
        .s__accordion01-title > a > img {
            width: 24px;
            transition: all 0.3s;
        }
        .s__accordion01-contents{
            max-height: 0;
            height: auto;
            overflow: hidden;
            transition: max-height 0.3s;
        }
        .active-on .s__accordion01-contents{
            border-bottom: 1px solid var(--border);
            /* max-height는 가변적 */
            max-height: 200px;
        }
        .active-on .s__accordion01-title > a > img{
            transform: rotate(180deg);
        }
        .s__accordion01-contents > div {
            padding: 16px;
        }
      `,
      js: () => {
        // 아코디언
        const accordionAList = document.querySelectorAll(".s__accordion01 a");
        const accordionList = document.querySelectorAll(".s__accordion01");
        accordionAList.forEach((e) => {
          const thisAccordionName = e.parentNode.parentNode.dataset.accordion;
          e.addEventListener("click", () => {
            if (e.parentNode.parentNode.classList.contains("active-on")) {
              e.parentNode.parentNode.classList.remove("active-on");
            } else {
              accordionList.forEach((t) => {
                if (t.dataset.accordion === thisAccordionName) {
                  t.classList.remove("active-on");
                }
              });
              e.parentNode.parentNode.classList.add("active-on");
            }
          });
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
