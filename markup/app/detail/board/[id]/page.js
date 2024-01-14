"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Board01",
      cssFile: [],
      jsFile: [],
      img: "category/img_board01.svg",
      html: `
      <section class="s__board01">
      <div class="s__container">
          <div class="s__row">
              <div class="board01__list">
                  <p class="board01__title">title</p>
                  <ul>
                      <li><a href="#"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorem hic explicabo vel rem non at id. Suscipit delectus, quisquam est sed cumque architecto doloremque asperiores nostrum quas quo et.</span><span>2023.01.01</span></a></li>
                      <li><a href="#"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorem hic explicabo vel rem non at id. Suscipit delectus, quisquam est sed cumque architecto doloremque asperiores nostrum quas quo et.</span><span>2023.01.01</span></a></li>
                      <li><a href="#"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorem hic explicabo vel rem non at id. Suscipit delectus, quisquam est sed cumque architecto doloremque asperiores nostrum quas quo et.</span><span>2023.01.01</span></a></li>
                      <li><a href="#"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorem hic explicabo vel rem non at id. Suscipit delectus, quisquam est sed cumque architecto doloremque asperiores nostrum quas quo et.</span><span>2023.01.01</span></a></li>
                      <li><a href="#"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repel  </span><span>2023.01.01</span></a></li>
                  </ul>
                  <a class="board01__more-btn" href="#">more<img src="/icon_plus.svg" alt="더보기"></a>
              </div>
              <div class="board01__list">
                  <p class="board01__title">title</p>
                  <ul>
                      <li><a href="#"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorem hic explicabo vel rem non at id. Suscipit delectus, quisquam est sed cumque architecto doloremque asperiores nostrum quas quo et.</span><span>2023.01.01</span></a></li>
                      <li><a href="#"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorem hic explicabo vel rem non at id. Suscipit delectus, quisquam est sed cumque architecto doloremque asperiores nostrum quas quo et.</span><span>2023.01.01</span></a></li>
                      <li><a href="#"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorem hic explicabo vel rem non at id. Suscipit delectus, quisquam est sed cumque architecto doloremque asperiores nostrum quas quo et.</span><span>2023.01.01</span></a></li>
                      <li><a href="#"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorem hic explicabo vel rem non at id. Suscipit delectus, quisquam est sed cumque architecto doloremque asperiores nostrum quas quo et.</span><span>2023.01.01</span></a></li>
                      <li><a href="#"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorem hic explicabo vel rem non at id. Suscipit delectus, quisquam est sed cumque architecto doloremque asperiores nostrum quas quo et.</span><span>2023.01.01</span></a></li>
                  </ul>
                  <a class="board01__more-btn" href="#">more<img src="/icon_plus.svg" alt="더보기"></a>
              </div>
          </div>
      </div>

  </section>
      `,
      css: `
      
/* board01 */

.s__board01 .s__row{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
}
.board01__list{
    position: relative;
}
.board01__list .board01__title{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
}
.board01__list > ul li{
    margin-bottom: 8px;
}
.board01__list >ul a{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.board01__list >ul a span{
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp:1 ;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.board01__list >ul a span:nth-child(1){
    width: calc(100% - 100px);
    margin-right: 16px;
}
.board01__list >ul a span:nth-child(2){
    width: 100px;
}
.board01__more-btn{
    position: absolute;
    right: 0;
    top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.board01__more-btn img {
    width: 16px;
    margin-bottom: 2px;
    margin-left: 2px;
}
/* board01 끝 */



/* PC (해상도 1024px)*/ 
@media all and (min-width:1024px) {
    
} 
/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/ 
@media all and (min-width:768px) and (max-width:1023px) {

} 
/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/ 
@media all and (max-width:767px) {
    .s__board01 .s__row{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
    .board01__more-btn{
        position: relative;
        top: auto;
        left: auto;
        padding: 8px;
        margin-top: 24px;
        border: 1px solid #c7c7c7;
    }
}


      `,
      js: () => {},
    },
    {
      title: "Board02",
      subTitle: "더 자세한 정보는 TUI GRID 공식사이트를 참고해주세요.",
      cssFile: [
        "css/tui-pagination.css",
        "css/tui-grid.css",
        "css/checkbox.css",
      ],
      jsFile: ["js/tui-pagination.js", "js/tui-grid.js"],
      img: "category/img_board02.svg",
      html: `
      <section class="s__board02">
      <div class="s__container">
        <div class="s__row">
          <div id="grid"></div>
        </div>
      </div>
    </section>
      `,
      css: ``,
      js: () => {
        // 도움말
        //https://github.com/nhn/tui.grid/blob/master/packages/toast-ui.grid/docs/ko/README.md

        // 원래 대로라면 이렇게
        // const dataSource = {
        //     contentType: 'application/json',
        //     api: {
        //       readData: { url: '/api/readData', method: 'GET'}
        //     }
        //   };

        //로컬이니까 이렇게
        const dataSource = [
          {
            id: "10012",
            name: "Seoul",
            country: "South Korea",
          },
          {
            id: "10013",
            city: "Tokyo",
            country: "Japan",
          },
          {
            id: "10014",
            city: "London",
            country: "England",
          },
          {
            id: "10015",
            city: "Ljubljana",
            country: "Slovenia",
          },
          {
            id: "10016",
            city: "Reykjavik",
            country: "Iceland",
          },
        ];

        //넘버
        class RowNumberRenderer {
          constructor(props) {
            const el = document.createElement("span");
            el.innerHTML = `No.${props.formattedValue}`;
            this.el = el;
          }

          getElement() {
            return this.el;
          }

          render(props) {
            this.el.innerHTML = `No.${props.formattedValue}`;
          }
        }

        //체크박스
        class CheckboxRenderer {
          constructor(props) {
            const { grid, rowKey } = props;

            const label = document.createElement("label");
            label.className = "checkbox tui-grid-row-header-checkbox";
            label.setAttribute("for", String(rowKey));

            const hiddenInput = document.createElement("input");
            hiddenInput.className = "hidden-input";
            hiddenInput.id = String(rowKey);

            const customInput = document.createElement("span");
            customInput.className = "custom-input";

            label.appendChild(hiddenInput);
            label.appendChild(customInput);

            hiddenInput.type = "checkbox";
            label.addEventListener("click", (ev) => {
              ev.preventDefault();

              if (ev.shiftKey) {
                grid[!hiddenInput.checked ? "checkBetween" : "uncheckBetween"](
                  rowKey
                );
                return;
              }

              grid[!hiddenInput.checked ? "check" : "uncheck"](rowKey);
            });

            this.el = label;

            this.render(props);
          }

          getElement() {
            return this.el;
          }

          render(props) {
            const hiddenInput = this.el.querySelector(".hidden-input");
            const checked = Boolean(props.value);

            hiddenInput.checked = checked;
          }
        }

        const grid = new tui.Grid({
          el: document.getElementById("grid"),
          data: dataSource,
          scrollX: false,
          scrollY: false,
          minBodyHeight: 30,
          rowHeaders: [
            {
              type: "rowNum",
              renderer: {
                type: RowNumberRenderer,
              },
            },
            {
              type: "checkbox",
              header: `
      <label for="all-checkbox" class="checkbox">
        <input type="checkbox" id="all-checkbox" class="hidden-input" name="_checked" />
        <span class="custom-input"></span>
      </label>
    `,
              renderer: {
                type: CheckboxRenderer,
              },
            },
          ], //체크박스, 넘버
          pageOptions: {
            useClient: true,
            perPage: 2,
          },
          columns: [
            {
              header: "ID",
              name: "id",
              sortingType: "desc", //내림차순
              sortable: true,
            },
            {
              header: "CITY",
              name: "city",
              sortingType: "asc", //오름차순
              sortable: true,
            },
            {
              header: "COUNTRY",
              name: "country",
              filter: { type: "text", showApplyBtn: true, showClearBtn: true }, //검색필터
            },
          ],
        });

        //체크박스 이벤트
        grid.on("check", function (ev) {
          console.log("check", ev);
        });

        grid.on("uncheck", function (ev) {
          console.log("uncheck", ev);
        });
      },
      download: [{ name: "board02", link: "/download/board02.zip" }],
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
