"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Date01",
      subTitle:
        "해당 페이지에서는 버그로 간혹 표현이 안됩니다. 다만 가져가서 사용하시면 잘 나옵니다!",
      cssFile: ["css/daterangepicker.css"],
      jsFile: [
        "js/jquery.min.js",
        "js/moment.min.js",
        "js/daterangepicker.min.js",
      ],
      img: "category/img_date01.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <div class="s__date-wrap">
        <input type="text" class="s__input s__date">
      </div>
    </div>
  </div>
</section>
      `,
      css: `
/* 데이트피커 */
.s__date, .s__date-range{
    background: url(/icon_date.svg) no-repeat 97% 50%/18px auto;
}
      `,
      js: () => {
        // 데이트피커
        // https://www.daterangepicker.com/#config

        //적용시 js순서를 잘 지켜주세요! jquery > moment > daterangepicker 순서입니다!

        // 싱글 데이트피커
        $(".s__date").daterangepicker(
          {
            singleDatePicker: true,
            minYear: 1000,
            maxYear: 9999,
            locale: {
              format: "YYYY-MM-DD",
              separator: " ~ ",
              applyLabel: "확인",
              cancelLabel: "취소",
              fromLabel: "From",
              toLabel: "To",
              customRangeLabel: "Custom",
              weekLabel: "주",
              daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
              monthNames: [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월",
                "11월",
                "12월",
              ],
              firstDay: 1,
            },
          },
          function (start, end, label) {
            console.log(
              "New date range selected: " +
                start.format("YYYY-MM-DD") +
                " to " +
                end.format("YYYY-MM-DD") +
                " (predefined range: " +
                label +
                ")"
            );
          }
        );
      },
      download: [{ name: "Date", link: "/download/date.zip" }],
    },
    {
      title: "Date02",
      subTitle:
        "해당 페이지에서는 버그로 간혹 표현이 안됩니다. 다만 가져가서 사용하시면 잘 나옵니다!",
      cssFile: ["css/daterangepicker.css"],
      jsFile: [
        "js/jquery.min.js",
        "js/moment.min.js",
        "js/daterangepicker.min.js",
      ],
      img: "category/img_date02.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <div class="s__date-wrap">
        <input type="text" name="daterange" class="s__input s__date-range" value="" />
      </div>
    </div>
  </div>
</section>
      `,
      css: `
/* 데이트피커 */
.s__date, .s__date-range{
    background: url(/icon_date.svg) no-repeat 97% 50%/18px auto;
}

      `,
      js: () => {
        // 데이트피커
        // https://www.daterangepicker.com/#config

        //적용시 js순서를 잘 지켜주세요! jquery > moment > daterangepicker 순서입니다!

        // 멀티 데이트피커
        $(".s__date-range").daterangepicker(
          {
            minYear: 1000,
            maxYear: 9999,
            locale: {
              format: "YYYY-MM-DD",
              separator: " ~ ",
              applyLabel: "확인",
              cancelLabel: "취소",
              fromLabel: "From",
              toLabel: "To",
              customRangeLabel: "Custom",
              weekLabel: "주",
              daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
              monthNames: [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월",
                "11월",
                "12월",
              ],
              firstDay: 1,
            },
          },
          function (start, end, label) {
            console.log(
              "New date range selected: " +
                start.format("YYYY-MM-DD") +
                " to " +
                end.format("YYYY-MM-DD") +
                " (predefined range: " +
                label +
                ")"
            );
          }
        );
      },
      download: [{ name: "Date", link: "/download/date.zip" }],
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
