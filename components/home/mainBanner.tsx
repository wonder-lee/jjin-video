import { Text } from "@nextui-org/react";

const MainBanner = () => {
  return (
    <Text weight="bold" css={{ textAlign: "center" }}>
      <Text span css={{ textGradient: "45deg, $pink600 30%, $blue600 80%" }}>
        진
      </Text>
      <Text span css={{ color: "lightGray" }}>
        흙속의{" "}
      </Text>
      <Text span css={{ textGradient: "95deg, $pink600 30%, $blue600 80%" }}>
        진
      </Text>
      <Text span css={{ color: "lightGray" }}>
        주같은{" "}
      </Text>
      <Text span css={{ textGradient: "245deg, $pink600 30%, $blue600 80%" }}>
        영상
      </Text>
      <Text span css={{ color: "lightGray" }}>
        찾기
      </Text>
      <br />
    </Text>
  );
};

export default MainBanner;
