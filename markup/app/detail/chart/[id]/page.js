"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Chart01",
      cssFile: [],
      jsFile: ["js/echart.js"],
      img: "category/img_chart01.svg",
      html: `
      <div class="s__container">
      <div class="s__row">
          <!-- 선차트 -->
          <h1>선차트</h1>
          <div id="myChart01" style="width: 800px;height:250px;"></div>
          <!-- 도넛차트 -->
          <h1>도넛차트</h1>
          <div id="myChart02" style="width: 800px;height:250px;"></div>
          <!-- 바차트 -->
          <h1>바차트</h1>
          <div id="myChart03" style="width: 800px;height:250px;"></div>
      </div>
  </div>

      `,
      css: ``,
      js: () => {
        // ----------------테스트용 데이터 : 참고만 해주세요----------------

        // 테스트용 랜덤 배열제작
        function generateRandomNumbers(n, min, max) {
          const randomNumbers = [];
          for (let i = 0; i < n; i++) {
            const randomNumber =
              Math.floor(Math.random() * (max - min + 1)) + min;
            randomNumbers.push(randomNumber);
          }
          return randomNumbers; //[123, 114, 34 ,412 ... ] 이런식으로 배열
        }
        // 방문제 페이지 분석 월 테스트
        function monthAddNumber(num) {
          const Numbers = [];
          for (let i = 1; i < num; i++) {
            Numbers.push(i + " Jan");
          }
          return Numbers; //['1 Jan', '2 Jan', ... 'num Jan']
        }
        //Week Month 탭 버튼 이벤트
        const dataBtn = document.querySelectorAll(".btn-week-month a");
        for (let i = 0; i < dataBtn.length; i++) {
          const d = dataBtn[i];
          d.addEventListener("click", () => {
            dataBtn.forEach((e) => {
              e.classList.remove("tab-on");
            });
            d.classList.add("tab-on");
            if (d.innerText === "Week") {
              //week일때
              myChart.setOption(option0102);
            } else {
              //month일때
              myChart.setOption(option0101);
            }
          });
        }

        // ----------------선 차트----------------

        var chartDom = document.getElementById("myChart01");
        var myChart = echarts.init(chartDom);
        var option01;

        option01 = {
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ["메인", "상품검색", "상품주문", "분석환경신청등록"],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: monthAddNumber(31),
            //   axisLine: {
            //     show: false, // x축 선 제거
            //   },
            //   axisLabel: {
            //     show: false, // x축 라벨 제거
            //   },
            //   axisTick: {
            //     show: false // x축 라벨선 제거
            //   }
          },
          yAxis: {
            type: "value",
            // show: false // y축 제거
          },
          series: [
            {
              name: "메인",
              type: "line",
              //   showSymbol: false, //심볼 여부
              data: generateRandomNumbers(31, 100, 600),
              //   Style: {
              //     color: '#9D76F0', //선 색상
              //   },
              //   areaStyle: {
              //     color: '#DCCDFA', //배경 색상
              //   },
            },
            {
              name: "상품검색",
              type: "line",
              showSymbol: false,
              data: generateRandomNumbers(31, 100, 600),
            },
          ],
        };
        myChart.setOption(option01);

        // ----------------도넛 차트----------------

        var chartDom02 = document.getElementById("myChart02");
        var myChart02 = echarts.init(chartDom02);
        var option02;

        option02 = {
          tooltip: {
            //툴팁
            trigger: "item",
          },
          legend: {
            //범례
            bottom: "0",
            left: "center",
          },
          series: [
            {
              type: "pie",
              radius: ["40%", "70%"], //안쪽크기, 바깥쪽크기
              avoidLabelOverlap: false,
              labelLine: {
                show: false,
              },
              label: {
                //라벨 평소에 안보임
                formatter: "{d}%",
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  //라벨 마우스 올리면 보임
                  show: true,
                  fontSize: 20,
                  fontWeight: "bold",
                },
              },
              data: [
                { value: 2131, name: "개인사업자" },
                { value: 214, name: "법인" },
                { value: 1254, name: "대학" },
                { value: 1000, name: "기관" },
              ],
            },
          ],
        };

        myChart02.setOption(option02);

        // ----------------바 차트----------------

        var chartDom03 = document.getElementById("myChart03");
        var myChart03 = echarts.init(chartDom03);
        var option03;
        option03 = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true, //여백없음
          },
          xAxis: [
            {
              type: "category", //타입 x, y축 바꾸면 가로 세로 바뀜
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              axisTick: {
                //show: false, // x축 라벨선 제거
                alignWithLabel: true, // 선 가운데로 맞춤
              },
              //   axisLine: {
              //     show: false, // x축 선 제거
              //   },
              //   axisLabel: {
              //     show: false, // x축 라벨 제거
              //   },
            },
          ],
          yAxis: [
            {
              type: "value", //타입 x, y축 바꾸면 가로 세로 바뀜
              // show: false, // y축 제거
            },
          ],
          series: [
            {
              name: "Direct",
              type: "bar",
              //   barWidth: "60%", //바 넓이
              data: [10, 52, 200, 334, 390, 330, 220],
            },
            {
              name: "Direct",
              type: "bar",
              data: [1, 2, 20, 34, 39, 290, 20],
              // itemStyle: {
              //   borderRadius: [0, 20, 20, 0], //라디오스
              // }
            },
          ],
        };
        myChart03.setOption(option03);
      },
      download: [{ name: "Chart01", link: "/download/chart01.zip" }],
    },
    {
      title: "Chart02",
      cssFile: [],
      jsFile: ["js/chart.js"],
      img: "category/img_chart02.svg",
      html: `
      <div class="s__container">
      <div class="s__row">
          <!-- 선차트 -->
          <h1>선차트</h1>
          <div>
            <canvas id="myChart01" style="width: 100%; height: 150px"></canvas>
          </div>
          <div id="legend-container01"></div>

          <!-- 도넛차트 -->
          <h1>도넛차트</h1>
          <div style="width: 100%; height: 250px">
            <canvas id="myChart02" style="margin: 0 auto"></canvas>
          </div>
          <div id="legend-container02"></div>

          <!-- 바차트 -->
          <h1>바차트</h1>
          <div>
            <canvas id="myChart03" style="width: 100%; height: 250px"></canvas>
          </div>
      </div>
  </div>
      `,
      css: `
/* 도넛차트 */
.chart02-ul {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}
.chart02-ul li {
  display: flex;
  margin-right: 8px;
}
      `,
      js: () => {
        // ----------------테스트용 데이터 : 참고만 해주세요----------------

        // 테스트용 랜덤 배열제작
        function generateRandomNumbers(n, min, max) {
          const randomNumbers = [];
          for (let i = 0; i < n; i++) {
            const randomNumber =
              Math.floor(Math.random() * (max - min + 1)) + min;
            randomNumbers.push(randomNumber);
          }
          return randomNumbers; //[123, 114, 34 ,412 ... ] 이런식으로 배열
        }
        // 방문제 페이지 분석 월 테스트
        function monthAddNumber(num) {
          const Numbers = [];
          for (let i = 1; i < num; i++) {
            Numbers.push(i + " Jan");
          }
          return Numbers; //['1 Jan', '2 Jan', ... 'num Jan']
        }
        //Week Month 탭 버튼 이벤트
        const dataBtn = document.querySelectorAll(".btn-week-month a");

        // ----------------옵션----------------
        const getOrCreateLegendList = (chart, id) => {
          const legendContainer = document.getElementById(id);
          let listContainer = legendContainer.querySelector("ul");

          if (!listContainer) {
            listContainer = document.createElement("ul");
            listContainer.style.display = "flex";
            listContainer.style.justifyContent = "center";

            listContainer.style.flexDirection = "row";
            listContainer.style.margin = "16px 0 24px 0";
            listContainer.style.padding = 0;

            legendContainer.appendChild(listContainer);
          }

          return listContainer;
        };

        const htmlLegendPlugin = {
          id: "htmlLegend",
          afterUpdate(chart, args, options) {
            const ul = getOrCreateLegendList(chart, options.containerID);

            while (ul.firstChild) {
              ul.firstChild.remove();
            }

            const items =
              chart.options.plugins.legend.labels.generateLabels(chart);

            items.forEach((item) => {
              const li = document.createElement("li");
              li.style.alignItems = "center";
              li.style.cursor = "pointer";
              li.style.display = "flex";
              li.style.flexDirection = "row";
              li.style.marginLeft = "16px";

              li.onclick = () => {
                const { type } = chart.config;
                if (type === "pie" || type === "doughnut") {
                  chart.toggleDataVisibility(item.index);
                } else {
                  chart.setDatasetVisibility(
                    item.datasetIndex,
                    !chart.isDatasetVisible(item.datasetIndex)
                  );
                }
                chart.update();
              };

              // Color box
              const boxSpan = document.createElement("span");
              boxSpan.style.background = item.fillStyle;
              boxSpan.style.borderColor = item.strokeStyle;
              boxSpan.style.borderWidth = item.lineWidth + "px";
              boxSpan.style.display = "inline-block";
              boxSpan.style.flexShrink = 0;
              boxSpan.style.height = "14px";
              boxSpan.style.borderRadius = "14px";
              boxSpan.style.marginRight = "10px";
              boxSpan.style.width = "14px";

              // Text
              const textContainer = document.createElement("p");
              textContainer.style.color = item.fontColor;
              textContainer.style.margin = 0;
              textContainer.style.padding = 0;
              textContainer.style.textDecoration = item.hidden
                ? "line-through"
                : "";

              const text = document.createTextNode(item.text);
              textContainer.appendChild(text);

              li.appendChild(boxSpan);
              li.appendChild(textContainer);
              ul.appendChild(li);
            });
          },
        };

        const getOrCreateLegendList02 = (chart, id) => {
          const legendContainer = document.getElementById(id);
          let listContainer = legendContainer.querySelector("ul");

          if (!listContainer) {
            listContainer = document.createElement("ul");
            legendContainer.appendChild(listContainer);
          }

          return listContainer;
        };

        const htmlLegendPlugin02 = {
          id: "htmlLegend",
          afterUpdate(chart, args, options) {
            const ul = getOrCreateLegendList02(chart, options.containerID);

            // 이전 범례 삭제
            while (ul.firstChild) {
              ul.firstChild.remove();
            }

            // labels 모두 선택
            const items =
              chart.options.plugins.legend.labels.generateLabels(chart);

            items.forEach((item) => {
              const li = document.createElement("li");
              li.onclick = () => {
                const { type } = chart.config;
                if (type === "pie" || type === "doughnut") {
                  chart.toggleDataVisibility(item.index);
                } else {
                  chart.setDatasetVisibility(
                    item.datasetIndex,
                    !chart.isDatasetVisible(item.datasetIndex)
                  );
                }
                chart.update();
              };

              // Color box
              const boxSpan = document.createElement("span");
              boxSpan.style.background = item.fillStyle;
              boxSpan.style.borderColor = item.strokeStyle;
              boxSpan.style.borderWidth = item.lineWidth + "px";
              boxSpan.style.display = "inline-block";
              boxSpan.style.flexShrink = 0;
              boxSpan.style.height = "14px";
              boxSpan.style.marginTop = "4px";
              boxSpan.style.borderRadius = "2px";
              boxSpan.style.marginRight = "10px";
              boxSpan.style.width = "14px";

              // textBox
              const div = document.createElement("div");
              div.classList.add("chart02-textbox");
              const div02 = document.createElement("div");

              // Text
              const textContainer = document.createElement("p");
              textContainer.style.color = item.fontColor;
              textContainer.style.margin = 0;
              textContainer.style.padding = 0;
              textContainer.style.fontWeight = 700;
              textContainer.style.cursor = "pointer";
              textContainer.style.textDecoration = item.hidden
                ? "line-through"
                : "";

              const text = document.createTextNode(item.text);
              const text02 = document.createTextNode(
                chart.data.datasets[0].data[item.index]
              );

              //   데이터 합계
              let sum = 0;
              for (let i = 0; i < chart.data.datasets[0].data.length; i++) {
                sum += chart.data.datasets[0].data[i];
              }
              // 합계 이용해서 % 계산
              const text03 = document.createTextNode(
                ((chart.data.datasets[0].data[item.index] / sum) * 100).toFixed(
                  2
                ) + "%"
              );
              const textContainer02 = document.createElement("p");
              const textContainer03 = document.createElement("p");

              console.log(chart.data.datasets[0].data[item.index]);
              textContainer.appendChild(text);
              textContainer02.appendChild(text02);
              textContainer03.appendChild(text03);
              ul.classList.add("chart02-ul");
              li.appendChild(boxSpan);
              div.appendChild(textContainer);
              div02.appendChild(textContainer02);
              div02.appendChild(textContainer03);
              div.appendChild(div02);
              li.appendChild(div);
              ul.appendChild(li);
            });
          },
        };

        // ----------------선 차트----------------
        const dataWeek = {
          labels: monthAddNumber(8),
          datasets: [
            {
              label: "메인",
              data: generateRandomNumbers(8, 100, 200),
              borderColor: "#733BEA",
              backgroundColor: "#733BEA",
            },
            {
              label: "상품검색",
              data: generateRandomNumbers(8, 200, 300),
              borderColor: "#08C56F",
              backgroundColor: "#08C56F",
            },
            {
              label: "상품주문",
              data: generateRandomNumbers(8, 100, 600),
              borderColor: "#F2406C",
              backgroundColor: "#F2406C",
            },
            {
              label: "분석환경신청등록",
              data: generateRandomNumbers(8, 100, 600),
              borderColor: "#FD8904",
              backgroundColor: "#FD8904",
            },
          ],
        };

        const dataMonth = {
          labels: monthAddNumber(31),
          datasets: [
            {
              label: "메인",
              data: generateRandomNumbers(31, 100, 200),
              borderColor: "#733BEA",
              backgroundColor: "#733BEA",
            },
            {
              label: "상품검색",
              data: generateRandomNumbers(31, 200, 300),
              borderColor: "#08C56F",
              backgroundColor: "#08C56F",
            },
            {
              label: "상품주문",
              data: generateRandomNumbers(31, 100, 600),
              borderColor: "#F2406C",
              backgroundColor: "#F2406C",
            },
            {
              label: "분석환경신청등록",
              data: generateRandomNumbers(31, 100, 600),
              borderColor: "#FD8904",
              backgroundColor: "#FD8904",
            },
          ],
        };
        const config = {
          type: "line",
          data: dataMonth,
          options: {
            responsive: true,
            plugins: {
              htmlLegend: {
                containerID: "legend-container01",
              },
              legend: {
                display: false,
              },
            },
            // elements: {
            //   point: {
            //     radius: 0, // 포인트 삭제
            //   },
            // },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                display: false, //x축 삭제
              },
              y: {
                display: false, //y축 삭제
              },
            },
          },
          plugins: [htmlLegendPlugin], //플러그인
        };
        const ctx = document.getElementById("myChart01");
        new Chart(ctx, config);

        // ----------------도넛 차트----------------

        const data02 = {
          labels: ["자동차", "에너지", "헬스케어", "문화콘텐츠"],
          datasets: [
            {
              data: [4305, 859, 482, 138],
            },
          ],
        };
        const config02 = {
          type: "doughnut",
          data: data02,
          options: {
            responsive: true,
            plugins: {
              htmlLegend: {
                containerID: "legend-container02",
              },
              legend: {
                display: false,
              },
            },
          },
          plugins: [htmlLegendPlugin02], //플러그인
        };
        const ctx02 = document.getElementById("myChart02");
        new Chart(ctx02, config02);

        // ----------------바 차트----------------

        const data03 = {
          labels: monthAddNumber(31),
          datasets: [
            {
              label: "Fully Rounded",
              data: generateRandomNumbers(31, 100, 200),
              borderColor: "#733BEA",
              backgroundColor: "#733BEA",
              borderWidth: 2,
              // borderRadius: ,
              // borderSkipped: ,
            },
          ],
        };
        const config03 = {
          type: "bar",
          data: data03,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Chart.js Bar Chart",
              },
            },
          },
        };
        const ctx03 = document.getElementById("myChart03");
        new Chart(ctx03, config03);
      },
      download: [{ name: "Chart02", link: "/download/chart02.zip" }],
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
