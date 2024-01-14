"use client";
import styled from "styled-components";

const Body = styled.div`
  margin-top: 40px;
`;
const Title = styled.h2`
  color: var(--black, #181818);
  font-family: GmarketSansBold;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 16px;
`;
const SubTitle = styled.p`
  color: var(--black, #181818);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 8px;
`;
const ReadMeListWrap = styled.ul`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
const ReadMeList = styled.li`
  margin-bottom: 4px;
  font-size: 15px;
  color: var(--black);
  list-style-type: disc;
  margin-left: 20px;
  & strong {
    font-weight: 700;
  }
`;
const ReadMeList2 = styled.li`
  margin-bottom: 4px;
  font-size: 15px;
  color: var(--black);
  list-style-type: auto;
  margin-left: 20px;
  & strong {
    font-weight: 700;
  }
`;
const DownBtn = styled.a`
  display: inline-block;
  padding: 8px 24px;
  border-radius: 100px;
  font-size: 14px;
  background-color: var(--black);
  color: #fff;
  margin-right: 8px;
  margin-bottom: 24px;
  &:hover {
    background-color: #3559e0;
  }
`;
export default function Home() {
  return (
    <Body>
      <Title>README</Title>
      <SubTitle>특징</SubTitle>
      <ReadMeListWrap>
        <ReadMeList>
          <strong>웹표준, 웹접근성 :</strong> 웹표준과 웹접근성에 맞는
          마크업파일을 제공합니다.(a태그의 src는 비워뒀습니다. 채워주세요!)
        </ReadMeList>
        <ReadMeList>
          <strong>빠른 마크업 :</strong> 기초적인 마크업을 빠르게 생성할 수
          있도록 도와줍니다.
        </ReadMeList>
        <ReadMeList>
          <strong>라이브러리 의존성 최소화 :</strong> 대부분 바닐라 JavaScript로
          개발되어 라이브러리 의존성을 최소화했습니다.(단, Swiper, Chart,
          datepick는 외부라이브러리 사용했습니다.)
        </ReadMeList>
      </ReadMeListWrap>
      <SubTitle>사용법</SubTitle>
      <ReadMeListWrap>
        <ReadMeList2>code 탭을 클릭하여 코드를 복사합니다.</ReadMeList2>
        <ReadMeList2>원하는 페이지에 복사한 코드를 붙여넣기합니다.</ReadMeList2>
        <ReadMeList2>
          필요한 라이브러리가 있다면, 다운로드 버튼을 클릭하거나 해당 라이브러리
          공식홈페이지를 이용해 첨부합니다.
        </ReadMeList2>
        <ReadMeList2>
          최상단의 디바이스 크기 조절 버튼을 이용해 preview를 확인해보세요 :)
        </ReadMeList2>
      </ReadMeListWrap>
      <SubTitle>공통 코드 다운로드</SubTitle>
      <DownBtn href="/download/markup.zip" download>
        다운로드
      </DownBtn>
      <SubTitle>업데이트 및 기여</SubTitle>
      <ReadMeListWrap>
        <ReadMeList>
          새로운 코드 제안은 언제든 환영합니다! 업데이트를 원하는 완성된 코드를
          보내주시면 정리해서 작성자 아이디와 함께 업데이트합니다.
        </ReadMeList>
        <ReadMeList>
          업데이트 내역 및 버그 제보는 yangsk0526@gmail.com으로 보내주세요.😊
        </ReadMeList>
      </ReadMeListWrap>
      <SubTitle>기타</SubTitle>
      <ReadMeListWrap>
        <ReadMeList>
          마크업 작업 특성상 본 'MARKUP' 페이지는 반응형으로 제작되지
          않았습니다.
        </ReadMeList>
      </ReadMeListWrap>
      {/* <SubTitle>도움을 주신 분</SubTitle>
      <ReadMeListWrap>
        <ReadMeList>아직..없음 ㅜ</ReadMeList>
      </ReadMeListWrap> */}
    </Body>
  );
}
