import {
  Tooltip,
  Popover,
  Button,
  Text,
  Spacer,
  Loading,
} from "@nextui-org/react";

const ResultProgress = ({ totalCount, listCount, isLoading }: any) => {
  return (
    <Tooltip
      content={
        (totalCount &&
          listCount &&
          `${totalCount}개의 진흙 속에서 ${listCount}개의 진주를 찾아냈습니다! 🥳`) ||
        (isLoading && `찾기 어려운 진주는 그만큼 값지답니다! 🤩`) ||
        (!totalCount && !listCount && `키워드를 검색해 보세요! 🕵🏻‍♀️`)
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
        {listCount > 0 && (
          <Text b color="white">
            {listCount}
          </Text>
        )}
        {isLoading && <Loading type="gradient" size="xs" />}
        {!listCount && !isLoading && `💎`}
      </Button>
    </Tooltip>
  );
};

export default ResultProgress;
