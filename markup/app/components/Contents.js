import styled from "styled-components";
import { useState } from "react";

export default function Contents(props) {
  const [index, setIndex] = useState(0);

  const Body = styled.div`
    margin-top: 40px;
  `;
  const Title = styled.h2`
    color: var(--black, #181818);
    /* font-family: Gmarket Sans TTF; */
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 24px;
  `;

  const TabWrap = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--boarder);
    margin-bottom: 16px;
  `;
  const Tab = styled.a`
    display: block;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    padding: 8px 16px 12px 16px;
    transform: translateY(1px);
  `;
  const data = [
    {
      id: 0,
      title: "Preview",
      description: "0",
    },
    {
      id: 1,
      title: "Code",
      description: "1",
    },
  ];
  return (
    <Body>
      <Title>{props.name}</Title>
      <TabWrap>
        {data.map((item) => (
          <Tab
            href="#"
            key={item.id}
            style={{
              color: index === item.id ? "var(--black)" : "var(--gray)",
              borderBottom:
                index === item.id ? "1px solid var(--black)" : "1px solid var(--boarder)",
            }}
            onClick={() => setIndex(item.id)}
          >
            {item.title}
          </Tab>
        ))}
      </TabWrap>
      {data
        .filter((item) => index === item.id)
        .map((item) => (
          <div>{item.description}</div>
        ))}
    </Body>
  );
}
