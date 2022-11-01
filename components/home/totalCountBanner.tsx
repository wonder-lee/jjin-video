import { Text } from "@nextui-org/react";

const TotalCountBanner = ({ listByKeywordCount, searchQuery }: any) => {
  return (
    <>
      <Text weight="bold" css={{ textAlign: "center" }}>
        <Text span css={{ color: "Gray" }}>
          마지막 단계로 총{" "}
        </Text>
        <Text span css={{ textGradient: "95deg, $pink600 30%, $blue600 80%" }}>
          {listByKeywordCount}
        </Text>
        <Text span css={{ color: "Gray" }}>
          {" "}
          개의{" "}
        </Text>
        <Text span css={{ textGradient: "245deg, $pink600 30%, $blue600 80%" }}>
          영상
        </Text>
        <Text span css={{ color: "Gray" }}>
          을{" "}
        </Text>
        <Text span css={{ textGradient: "245deg, $pink600 30%, $blue600 80%" }}>
          분석
        </Text>
        <Text span css={{ color: "Gray" }}>
          하고 있습니다.
        </Text>
      </Text>
      <Text weight="bold" css={{ textAlign: "center" }}>
        <Text span css={{ color: "Gray" }}>
          {" "}
          최대{" "}
        </Text>
        <Text span css={{ textGradient: "245deg, $pink600 30%, $blue600 80%" }}>
          15초 ~ 30초
        </Text>
        <Text span css={{ color: "Gray" }}>
          {" "}
          안에 완료되오니, 조금만 기다려 주세요!
        </Text>
      </Text>
      <Text weight="bold" css={{ textAlign: "center" }}></Text>
    </>
  );
};

export default TotalCountBanner;
