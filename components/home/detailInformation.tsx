import { Collapse, Text, Avatar, Tooltip } from "@nextui-org/react";
import Link from "next/link";

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
        찐영상에서는 아래 7가지 조건의 결과를 제공해드리고 있습니다.
        <br />
        <br />
        <Text>1. 6개월 기간</Text>
        <Text>2. 영상 구분은 동영상</Text>
        <Text>3. 영상 길이는 4분 ~ 20분</Text>
        <Text>4. 조회수 최소 500회 이상</Text>
        <Text>5. 제목에 한글이 포함된 영상</Text>
        <Text>6. 전체 영상 개수가 200만개 이하인 영상</Text>
        <Text>7. 영상 조회수가 구독자 수보다 높은 영상</Text>
        <br />
        <br />
        우선 위 7가지 조건으로 데이터를 조절하고 있습니다.
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
      <Collapse
        shadow
        title="어떻게 분석을 하나요?"
        css={{ textAlign: "left" }}
      >
        <Text>
          Youtube에서 제공되는 공식 API를 이용하여 데이터를 조회하고 있습니다.
        </Text>
      </Collapse>
      <Collapse shadow title="당신은 누구입니까?" css={{ textAlign: "left" }}>
        <Text>
          아래 참고영상을 열심히 보다가 돈이 없어서..필요한 기능만 공식 API
          이용하여 만든 개발자입니다. (하지만 서버비..가..🥲)
          <br />
          또한 인터넷 바다를 헤엄치는 초보 개발자입니다. 🏊🏻‍♂️ <br />
          <br />
          어푸어푸 🌊
          <br />
          문의는 유리병에 편지를 담아 흘려 보내주세요. 🍾 <br />
          hi.wonder.dev@gmail.com 📨
        </Text>
      </Collapse>
      <Collapse shadow title="참고 영상" css={{ textAlign: "left" }}>
        <Link href="https://youtu.be/TjGB5eTfTbM" target="_blank">
          <Tooltip
            content="요약 : 영상의 조회수가 구독자 수보다 높은 영상을 보고 배우자 → 노아 홈페이지 이용 → 유료 결제..🥲"
            color="error"
            placement="top"
            style={{ width: "unset" }}
          >
            <iframe
              id="ytplayer"
              width="100%"
              height="360"
              src={`https://www.youtube.com/embed/TjGB5eTfTbM?autoplay=0&origin=http://example.com&controls=1&rel=1`}
            ></iframe>
          </Tooltip>
        </Link>
      </Collapse>
    </Collapse.Group>
  );
};

export default DetailInformation;
