import { Tooltip, Popover, Button, Text, Spacer } from "@nextui-org/react";

const ResultProgress = ({ totalCount, listCount }: any) => {
  console.log("1", totalCount, listCount);
  return (
    <Tooltip
      content={
        totalCount && listCount
          ? `${totalCount}개의 진흙 속에서 ${listCount}개의 진주를 찾아냈습니다! 🥳`
          : `키워드를 검색해 보세요! 🕵🏻‍♀️`
      }
      color="error"
      style={{ width: "unset" }}
    >
      <Button
        auto
        flat
        color="gradient"
        css={{
          margin: "0 auto",
          borderRadius: "100%",
          width: "20px",
          height: "55px",
        }}
      >
        💎
      </Button>
    </Tooltip>
  );
};

export default ResultProgress;
