import { Text } from "@nextui-org/react";

const LoadingBanner = ({ searchQuery }: any) => {
  return (
    <>
      <Text weight="bold" css={{ textAlign: "center" }}>
        <Text span css={{ textGradient: "45deg, $pink600 30%, $blue600 80%" }}>
          {searchQuery}
        </Text>
        <Text span css={{ color: "Gray" }}>
          에 관련된 모든 영상을{" "}
        </Text>
        <Text span css={{ textGradient: "45deg, $pink600 30%, $blue600 80%" }}>
          수집
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
    </>
  );
};

export default LoadingBanner;
