import { Collapse, Text } from "@nextui-org/react";

const DetailInformation = () => {
  return (
    <Collapse.Group
      splitted
      divider={false}
      accordion={false}
      css={{ maxWidth: "655px", margin: "0 auto" }}
    >
      <Collapse
        shadow
        title="검색 조건이 무엇인가요?"
        css={{ textAlign: "left" }}
      >
        찐영상에서는 아래 6가지 조건의 결과를 제공해드리고 있습니다.
        <br />
        <br />
        <Text>1. 6개월 기간</Text>
        <Text>2. 영상 구분은 동영상</Text>
        <Text>3. 영상 길이는 4분 ~ 20분</Text>
        <Text>4. 조회수 최소 500회 이상</Text>
        <Text>5. 제목에 한글이 포함된 영상</Text>
        <Text>6. 영상 조회수가 구독자 수보다 높은 영상</Text>
        <br />
        <br />
        우선 위 6가지 조건으로 데이터를 조절하고 있습니다.
        <br />
        조건은 충분히 확장하여 더 값진 결과를 얻을 순 있으나, <br />
        테스트용으로 만든 서비스이며, 아무래도 기승전결 비용.. 🤦🏻 <br />
        여러분께서 편하게 검색할 때, 이미 제 지갑에서는 비용이 콸콸콸.. 🫧 <br />
        <del>(응 어차피 아무도 안써 ~ 🤡)</del>
        <br />
        아주 만약에 많은 사용자들에게 사랑받으면 확장을 고려해보겠습니다. 🙆🏻{" "}
        <br />
        <del>(응 그럴 일 없어 ~ 🤡)</del>
      </Collapse>
      <Collapse shadow title="당신은 누구입니까?" css={{ textAlign: "left" }}>
        <Text>인터넷 바다를 헤엄치는 나그네입니다. 🏊🏻‍♂️ 어푸어푸 🌊</Text>
      </Collapse>
    </Collapse.Group>
  );
};

export default DetailInformation;
