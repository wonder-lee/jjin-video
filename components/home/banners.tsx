import { Card, Text } from "@nextui-org/react";

const Banners = ({ isLoading, searchQuery }: any) => {
  return (
    <Card css={{ maxWidth: "650px", margin: "0 auto" }}>
      <Card.Body>
        {isLoading ? (
          <Text weight="bold" css={{ textAlign: "center" }}>
            <Text
              span
              css={{ textGradient: "45deg, $pink600 30%, $blue600 80%" }}
            >
              {searchQuery}
            </Text>
            <Text span css={{ color: "lightGray" }}>
              에 관련된{" "}
            </Text>
            <Text
              span
              css={{ textGradient: "45deg, $pink600 30%, $blue600 80%" }}
            >
              진주
            </Text>
            <Text span css={{ color: "lightGray" }}>
              같은
            </Text>
            <Text
              span
              css={{ textGradient: "45deg, $pink600 30%, $blue600 80%" }}
            >
              영상
            </Text>
            <Text span css={{ color: "lightGray" }}>
              을 찾고있습니다! 📡
            </Text>
          </Text>
        ) : (
          <Text weight="bold" css={{ textAlign: "center" }}>
            <Text
              span
              css={{ textGradient: "45deg, $pink600 30%, $blue600 80%" }}
            >
              진
            </Text>
            <Text span css={{ color: "lightGray" }}>
              흙속의{" "}
            </Text>
            <Text
              span
              css={{ textGradient: "95deg, $pink600 30%, $blue600 80%" }}
            >
              진
            </Text>
            <Text span css={{ color: "lightGray" }}>
              주같은{" "}
            </Text>
            <Text
              span
              css={{ textGradient: "245deg, $pink600 30%, $blue600 80%" }}
            >
              영상
            </Text>
            <Text span css={{ color: "lightGray" }}>
              찾기
            </Text>
            <br />
          </Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default Banners;
