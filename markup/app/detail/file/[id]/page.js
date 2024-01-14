"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "File01",
      cssFile: [],
      jsFile: [],
      img: "category/img_file01.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
    <div class="s__file-wrap s__singlefile-wrap">
      <div class="s__file-btn">
          <input type="file" class="s__file" id="btnFile" hidden>
          <label for="btnFile" class="s__btn s__btn-line">업로드</label>
      </div>
      <div class="s__singlefile-list"></div>
    </div>
    </div>
  </div>
</section>
      `,
      css: `
/* 싱글파일 */
.s__singlefile-wrap {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.s__singlefile-list {
  width: calc(100% - 88px);
}
.s__singlefile-wrap .file__get__list__name {
  background-color: var(--backgroun);

  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-left: 8px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid var(--border);
}
      `,
      js: () => {
        //싱글 파일첨부
        const fileUploads = document.querySelectorAll(
          'input[type="file"]:not([multiple])'
        );
        if (fileUploads) {
          fileUploads.forEach((fileInput) => {
            fileInput.addEventListener("change", () => {
              let file = fileInput.files;
              const fileName = file[0].name;
              const fileSize = (file[0].size / (1024 * 1024)).toFixed(1);

              // p 태그 생성
              const fileGetListName = document.createElement("p");
              fileGetListName.className = "file__get__list__name";
              fileGetListName.textContent = `${fileName} (${fileSize}MB)`;
              fileInput.parentNode.parentNode.querySelector(
                ".s__singlefile-list"
              ).innerHTML = ""; //초기화
              fileInput.parentNode.parentNode
                .querySelector(".s__singlefile-list")
                .appendChild(fileGetListName);
              // fileInput.parentNode.parentNode.querySelector('.s__singlefile-list').innerHTML = ` //이렇게 해도 됨
              // <p class="file__get__list__name">${fileName} (${fileSize}MB)</p>
              // `
            });
          });
        }
      },
    },
    {
      title: "File02",
      cssFile: [],
      jsFile: [],
      img: "category/img_file02.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <div class="s__file-wrap">
        <div class="s__file-btn">
            <input type="file" class="s__multi-file" multiple id="what_file" hidden>
            <label for="what_file" class="s__btn s__btn-line">업로드</label>
        </div>
        <div class="s__file-list-wrap">
            <ul class="s__file-list" id="whatList"></ul>
        </div>
      </div>
    </div>
  </div>
</section>
      `,
      css: `
/* 멀터파일 */
.s__file-list {
  display: flex;
  flex-wrap: wrap;
}
.s__file-list > li {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  position: relative;
  height: 48px;
  margin: 6px 5px;
  padding: 0 24px;
  border-radius: 24px;
}
.file__get__list__name {
  font-size: 14px;
  font-weight: 400;
  color: #222;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
  margin-right: 12px;
  letter-spacing: -0.56px;
}
.file__get__list__name + button span {
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
}
.file__get__list__name + button::before,
.file__get__list__name + button::after {
  width: 14px;
  height: 2px;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background: #ccc;
  border-radius: 2px;
}
.file__get__list__name + button::before {
  transform: translate(-50%, -50%) rotate(45deg);
}
.file__get__list__name + button::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
.file__get__list__name + button {
  width: 20px;
  height: 20px;
  position: relative;
}
      `,
      js: () => {
        //멀티 파일첨부
        const fileMultiUploads = document.querySelectorAll(
          'input[type="file"][multiple]'
        );

        if (fileMultiUploads) {
          fileMultiUploads.forEach((fileInput) => {
            const dataTransfer = new DataTransfer();

            fileInput.addEventListener("change", () => {
              let fileArr = fileInput.files;

              if (fileArr != null && fileArr.length > 0) {
                // =====DataTransfer 파일 관리========
                for (let i = 0; i < fileArr.length; i++) {
                  dataTransfer.items.add(fileArr[i]);
                }
                fileInput.files = dataTransfer.files;
                const underscoreIndex = fileInput.id.indexOf("_");
                const prefix =
                  underscoreIndex !== -1
                    ? fileInput.id.slice(0, underscoreIndex)
                    : fileInput.id;
                const modifiedId = prefix + "List";

                //for문으로 리스트 만들어 줌
                let fileList = "";
                let fileDiv = document.createElement("div");

                for (let i = 0; i < fileInput.files.length; i++) {
                  const currentFile = fileInput.files[i];
                  const fileSize = (currentFile.size / (1024 * 1024)).toFixed(
                    1
                  );

                  // 새로운 li 요소 생성
                  const listItem = document.createElement("li");
                  listItem.id = `data${currentFile.lastModified}`;

                  // p 태그 생성
                  const fileGetListName = document.createElement("p");
                  fileGetListName.className = "file__get__list__name";
                  fileGetListName.textContent = `${currentFile.name} (${fileSize}MB)`;

                  // button 태그 생성
                  const removeButton = document.createElement("button");
                  removeButton.className = "btns remove_button";
                  removeButton.setAttribute(
                    "data-index",
                    `data${currentFile.lastModified}`
                  );
                  removeButton.setAttribute("data-target-input", fileInput.id);

                  // span 태그 생성
                  const span = document.createElement("span");
                  span.textContent = `${currentFile.name} 삭제`;

                  // button에 span 추가
                  removeButton.appendChild(span);

                  // li에 p와 button 추가
                  listItem.appendChild(fileGetListName);
                  listItem.appendChild(removeButton);

                  // 대상 요소에 li 추가
                  fileDiv.appendChild(listItem);

                  fileList += fileDiv.innerHTML;
                  fileDiv.innerHTML = "";
                }

                document.querySelector("#" + modifiedId).innerHTML = fileList;

                // ==========================================

                // 삭제
                const fileBottomList =
                  document.querySelectorAll(".s__file-list");
                fileBottomList.forEach((e) => {
                  e.addEventListener("click", function (event) {
                    if (
                      e.id == modifiedId &&
                      event.target.className == "btns remove_button"
                    ) {
                      targetFile = event.target.dataset.index;
                      // ============DataTransfer================
                      for (let i = 0; i < dataTransfer.files.length; i++) {
                        if (
                          "data" + dataTransfer.files[i].lastModified ==
                          targetFile
                        ) {
                          dataTransfer.items.remove(i);
                          break;
                        }
                      }

                      document.getElementById(
                        event.target.dataset.targetInput
                      ).files = dataTransfer.files;
                      console.log(e.querySelector("#" + targetFile));
                      console.log(targetFile);
                      if (e.querySelector("#" + targetFile)) {
                        e.querySelector("#" + targetFile).remove();
                      }

                      console.log(
                        "input FIles 삭제후=>",
                        document.getElementById(
                          event.target.dataset.targetInput
                        ).files
                      );
                    }
                  });
                });
              }
            });
          });
        }
      },
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
