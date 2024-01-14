"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Table01",
      cssFile: [],
      jsFile: [],
      img: "category/img_table01.svg",
      html: `
<section>
    <div class="s__container">
    <div class="s__row">
    <ul class="s__table01-row">
    <li class="table-half">
        <p>th</p>
        <div>
            <p>td</p>
        </div>
    </li>
    <li class="table-half">
        <p>th</p>
        <div>
            <p>td</p>
            
    </div></li>
    <li class="table-full">
        <p>th</p>
        <div>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </li>
    <li class="table-half">
        <p>th</p>
        <div>
            <p>td</p>
        </div>
    </li>
    <li class="table-half">
        <p>th</p>
        <div>
            <p>td</p>
        </div>
    </li>
    </ul>
    </div>
    </div>
</section>
      `,
      css: `
/* 테이블01 가로형 */
.s__table01-row {
  border-top: 1px solid var(--main);
  display: flex;
  flex-wrap: wrap;
}
.s__table01-row > li {
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
}
.s__table01-row > li > p {
  background-color: #f8f9fb;
  width: 150px;
  padding: 24px 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.s__table01-row > li > p {
  font-weight: 700;
  white-space: normal;
}
.s__table01-row > li > div > p {
    font-weight: 500;
    white-space: normal;
  }
.s__table01-row > li div {
  padding: 12px 24px;
  width: calc(100% - 150px);
}
.s__table01-row .table-full {
  width: 100%;
}
.s__table01-row .table-half {
  width: 50%;
}
/* table 끝 */
/* PC (해상도 1024px)*/ 
@media all and (min-width:1024px) {

} 
/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/ 
@media all and (max-width:1023px) {
    .s__table01-row .table-half, .s__table01-row .table {
        width: 100%;
    }
} 
/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/ 
@media all and (max-width:767px) {

}

      `,
      js: () => {},
    },
    {
      title: "Table02",
      cssFile: [],
      jsFile: [],
      img: "category/img_table02.svg",
      html: `
<section>
    <div class="s__container">
        <div class="s__row">
            <ul class="s__table01-col custom-table01">
                <li>
                    <div class="s__th">
                        <p>thththththththththththththththththththththth</p>
                    </div>
                    <div class="s__th">
                        <p>th</p>
                    </div>
                    <div class="s__th">
                        <p>th</p>
                    </div>
                    <div class="s__th">
                        <p>th</p>
                    </div>
                    <div class="s__th">
                        <p>th</p>
                    </div>
                    <div class="s__th">
                        <p>th</p>
                    </div>
                </li>
                <li>
                    <div class="s__td">
                        <p>td</p>
                    </div>
                    <div class="s__td">
                        <p>td</p>
                    </div>
                    <div class="s__td">
                        <p>td</p>
                    </div>
                    <div class="s__td">
                        <p>td</p>
                    </div>
                    <div class="s__td">
                        <p>td</p>
                    </div>
                    <div class="s__td">
                        <p>td</p>
                    </div>
                </li>
                <li>
                    <div class="s__td">
                        <p>td</p>
                    </div>
                    <div class="s__td">
                        <p>td</p>
                    </div>
                    <div class="s__td">
                        <p>td</p>
                    </div>
                    <div class="s__td">
                        <p>td</p>
                    </div>
                    <div class="s__td">
                        <p>td</p>
                    </div>
                    <div class="s__td">
                        <p>td</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>    
</section>
      `,
      css: `

      /* 테이블01 세로형 */
      .s__table01-col{
          border-top: 1px solid var(--main);
      }
      .s__table01-col > li {
              display: grid;
      }
      /* --------------------------넓이커스텀-------------------------- */
      .custom-table01 > li{
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      }
      /* --------------------------넓이커스텀-------------------------- */
      .s__table01-col > li > div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          border-bottom: 1px solid var(--border);
      }
      .s__table01-col > li > div p {
          text-align: center;
          width: 100%;
          white-space: normal;
          display: -webkit-box;
          -webkit-line-clamp:1 ;
          -webkit-box-orient: vertical;
          overflow: hidden;
      
      }
      .s__table01-col > li > div.s__th{
          background-color: #f8f9fb;
          font-weight: 700;
      }
      `,
      js: () => {},
    },
    {
      title: "Table03",
      cssFile: [],
      jsFile: [],
      img: "category/img_table03.svg",
      html: `
<section>
    <div class="s__container">
        <div class="s__row">
            <table class="s__table02-col">
                <caption>타이틀</caption>
                <colgroup>
                    <col width="100">
                    <col width="*">
                    <col width="100">
                    <col width="100">
                </colgroup>
                <thead>
                    <tr>
                        <th>th</th>
                        <th>th</th>
                        <th>th</th>
                        <th>th</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="3">td</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                    </tr>
                    <tr>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                    </tr>
                    <tr>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
      `,
      css: `
      /* table */
      .s__table02-col  caption {
        overflow: hidden;
        width: 0;
        height: 0;
        font-size: 0;
        line-height: 0;
      }.s__table02-col {
        width: 100%;
        table-layout: fixed;
        border-top: 2px solid var(--main);
      }.s__table02-col th {
        padding: 16px;
        border-bottom: 1px solid var(--border);
        border-right: 1px solid var(--border);
        font-weight: bold;
        background: #F9FAFC;
      }.s__table02-col td {
        padding: 16px;
        border-bottom: 1px solid var(--border);
        border-right: 1px solid var(--border);
        line-height: 26px;
        text-align: center;
      }.s__table02-col td:last-child {
        border-right: none;
      }.s__table02-col th:last-child {
        border-right: none;
      }
      /* table 끝 */
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
