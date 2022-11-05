import {
  Tooltip,
  Popover,
  Button,
  Text,
  Spacer,
  Loading,
  Badge,
} from "@nextui-org/react";

const ResultProgress = ({ totalCount, listCount, isLoading }: any) => {
  return (
    <>
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
      <Spacer y={1} />
      <Badge color="success" variant="flat">
        6개월전 ~ 오늘
      </Badge>
      <Badge color="success" variant="flat">
        4분 ~ 20분
      </Badge>
      <Badge color="success" variant="flat">
        영상 개수 200만개 ⬇️
      </Badge>
      <Badge color="warning" variant="flat">
        조회수 500회 ⬆️
      </Badge>
      <Badge color="warning" variant="flat">
        한글 제목
      </Badge>
      <Badge color="error" variant="flat">
        <Badge color="secondary" variant="flat">
          조회수
        </Badge>
        <Badge color="error" variant="flat">
          {"  >  "}
        </Badge>
        <Badge color="primary" variant="flat">
          구독자 수
        </Badge>
      </Badge>
    </>
  );
};

export default ResultProgress;
