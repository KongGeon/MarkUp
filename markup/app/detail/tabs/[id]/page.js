"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Tabs01",
      cssFile: [],
      jsFile: [],
      img: "category/img_tabs01.svg",
      html: `
<section>
    <div class="s__container">
        <div class="s__row">
            <div class="s__tab01-wrap">
                <div class="s__tab01-box active-on" data-tab="tab01">
                    <a href="javascript:void(0)" class="s__tab01-title">title1</a>
                    <ul class="s__tab01-contents">
                        <li>
                            <a href=""><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><span>2024.01.01</span></a>
                        </li>
                    </ul>
                    <a href="" class="s__tab01-more-btn"><img src="/icon_plus.svg" alt="더보기" title="더보기"></a>
                </div>
                <div class="s__tab01-box" data-tab="tab01">
                    <a href="javascript:void(0)" class="s__tab01-title">title2</a>
                    <ul class="s__tab01-contents">
                        <li>
                            <a href=""><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>2024.01.01</span></a>
                        </li>
                    </ul>
                    <a href="" class="s__tab01-more-btn"><img src="/icon_plus.svg" alt="더보기" title="더보기"></a>
                </div>
                <div class="s__tab01-box" data-tab="tab01">
                    <a href="javascript:void(0)" class="s__tab01-title">title3</a>
                    <ul class="s__tab01-contents">
                        <li>
                            <a href=""><span>There are many variations of passages of Lorem Ipsum available</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>There are many variations of passages of Lorem Ipsum available</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>There are many variations of passages of Lorem Ipsum available</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>There are many variations of passages of Lorem Ipsum available</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>There are many variations of passages of Lorem Ipsum available</span><span>2024.01.01</span></a>
                        </li>
                    </ul>
                    <a href="" class="s__tab01-more-btn"><img src="/icon_plus.svg" alt="더보기" title="더보기"></a>
                </div>
            </div>
            <div class="s__tab01-wrap">
                <div class="s__tab01-box active-on" data-tab="tab02">
                    <a href="javascript:void(0)" class="s__tab01-title">title1</a>
                    <ul class="s__tab01-contents">
                        <li>
                        <a href=""><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span><span>2024.01.01</span></a>
                        </li>
                    </ul>
                    <a href="" class="s__tab01-more-btn"><img src="/icon_plus.svg" alt="더보기" title="더보기"></a>
                </div>
                <div class="s__tab01-box" data-tab="tab02">
                    <a href="javascript:void(0)" class="s__tab01-title">title2</a>
                    <ul class="s__tab01-contents">
                        <li>
                        <a href=""><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>2024.01.01</span></a>
                        </li>
                        <li>
                            <a href=""><span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span><span>2024.01.01</span></a>
                        </li>
                    </ul>
                    <a href="" class="s__tab01-more-btn"><img src="/icon_plus.svg" alt="더보기" title="더보기"></a>
                </div>
            </div>
        </div>
    </div>
</section>
      `,
      css: `
      /* tab */
      .s__tab01-wrap{
          padding-top: 50px;
          position: relative;
      }
      .s__tab01-box .s__tab01-contents, .s__tab01-box .s__tab01-more-btn{
          display: none;
      }
      .s__tab01-box.active-on .s__tab01-contents, .s__tab01-box.active-on .s__tab01-more-btn{
          display: block;
      }
      .s__tab01-title{
          cursor: pointer;
          text-wrap: nowrap;
          position: absolute;
          top: 0;
          display: flex;
          align-items: center;
          padding: 16px 24px;
          height: 50px;
          width: 100px;
      }
      .s__tab01-box .s__tab01-contents{
          border-top: 1px solid var(--border);
      
      }
      .active-on .s__tab01-title{
          font-weight: 600;
          border-bottom: 3px solid var(--main);
          color: var(--main);
      }
      .s__tab01-box:nth-child(2) .s__tab01-title{
          left: 100px;
      }
      .s__tab01-box:nth-child(3) .s__tab01-title{
          left: 200px;
      }
      .s__tab01-box:nth-child(4) .s__tab01-title{
          left: 300px;
      }
      .s__tab01-contents{
          padding-top: 16px;
      }
      .s__tab01-contents li a{
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      .s__tab01-contents li a span:nth-child(1){
          width: calc(100% - 80px);
          white-space: normal;
          display: -webkit-box;
          -webkit-line-clamp:1 ;
          -webkit-box-orient: vertical;
          overflow: hidden;
      }
      .s__tab01-contents li + li a{
           padding-top: 8px;
      }
      .s__tab01-more-btn{
          position: absolute;
          right: 0;
          top: 14px;
      }
      .s__tab01-more-btn img {
          width: 24px;
      }
      /* tab 끝*/
      `,
      js: () => {
        // tab01
        const tabList = document.querySelectorAll(".s__tab01-box");
        tabList.forEach((e) => {
          const thisTabName = e.dataset.tab;
          e.addEventListener("click", () => {
            tabList.forEach((t) => {
              if (t.dataset.tab === thisTabName) {
                t.classList.remove("active-on");
              }
            });
            e.classList.add("active-on");
          });
        });
      },
    },
    {
      title: "Tabs02",
      cssFile: [],
      jsFile: [],
      img: "category/img_tabs02.svg",
      html: `
<section>
    <div class="s__container">
        <div class="s__row">
            <div class="s__tab02-wrap">
                <div class="s__tab02-title-wrap">
                    <a href="javascript:void(0)" class="s__tab02-title active-on" data-tab="tab01">title1</a>
                    <a href="javascript:void(0)" class="s__tab02-title" data-tab="tab02">title2</a>
                    <a href="javascript:void(0)" class="s__tab02-title" data-tab="tab03">title3</a>
                    <a href="javascript:void(0)" class="s__tab02-title" data-tab="tab04">title4</a>
                </div>
                <div class="s__tab02-contents-wrap">
                    <div id="tab01" class="s__teb-contents active-on">
                        contents1
                    </div>
                    <div id="tab02" class="s__teb-contents">
                    c   ontents2
                    </div>
                    <div id="tab03" class="s__teb-contents">
                    c   ontents3
                    </div>
                    <div id="tab04" class="s__teb-contents">
                        contents4
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
      `,
      css: `
.s__tab02-title-wrap{
border-bottom: 1px solid var(--border);
display: flex;
align-items: center;
overflow-x: auto;
margin-bottom: 16px;
}
.s__tab02-title-wrap .s__tab02-title{
cursor: pointer;
font-size: 18px;
font-weight: 400;
padding: 12px 16px;
display: block;
}
.s__tab02-title-wrap .s__tab02-title.active-on{
border-bottom: 2px solid var(--main);
color: var(--main);
font-weight: 700;
}
.s__teb-contents {
    display: none;
}
.s__teb-contents.active-on{
display: block;
}
      `,
      js: () => {
        // tab02
        const tabList02 = document.querySelectorAll(".s__tab02-title");
        const tabContents02 = document.querySelectorAll(".s__teb-contents");
        tabList02.forEach((e) => {
          const thisTabName = e.dataset.tab;
          e.addEventListener("click", () => {
            tabList02.forEach((t) => {
              t.classList.remove("active-on");
            });
            tabContents02.forEach((t) => {
              t.classList.remove("active-on");
            });
            e.classList.add("active-on");
            document.getElementById(thisTabName).classList.add("active-on");
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
