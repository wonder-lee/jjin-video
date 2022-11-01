import { Text } from "@nextui-org/react";
import Link from "next/link";

const Title = ({ setData }: any) => {
  return (
    <Text h2 weight="bold" onClick={() => setData(null)}>
      찐영상
    </Text>
  );
};

export default Title;
