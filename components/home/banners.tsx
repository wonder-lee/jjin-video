import { Card, Text } from "@nextui-org/react";

const Banners = () => {
  return (
    <Card css={{ maxWidth: "655px", margin: "0 auto" }}>
      <Card.Body>
        <Text weight="bold" css={{ textAlign: "center" }}>
          <Text
            span
            css={{ textGradient: "45deg, $pink600 30%, $blue600 80%" }}
          >
            진
          </Text>
          흙속의{" "}
          <Text
            span
            css={{ textGradient: "95deg, $pink600 30%, $blue600 80%" }}
          >
            진
          </Text>
          주같은{" "}
          <Text
            span
            css={{ textGradient: "245deg, $pink600 30%, $blue600 80%" }}
          >
            영상
          </Text>
          찾기
        </Text>
      </Card.Body>
    </Card>
  );
};

export default Banners;
