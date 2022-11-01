import ResultProgress from "./resultProgress";
import {
  Table,
  Textarea,
  Image,
  Spacer,
  Avatar,
  Badge,
} from "@nextui-org/react";

const VideosTable = ({ data, isLoading }: any) => {
  const columns = [
    { name: "번호", uid: "id" },
    { name: "영상", uid: "title" },
    { name: "채널명", uid: "channelName" },
    { name: "조회수", uid: "viewCount" },
    { name: "구독자 수", uid: "subscribers" },
    { name: "업로드 일자", uid: "publishedTime" },
  ];
  const renderCell = (data: any, columnKey: any) => {
    const cellValue = data[columnKey];
    switch (columnKey) {
      case "id":
        return <span style={{ width: "50px" }}>{data.id + 1}</span>;
      case "title":
        return (
          <>
            <Image
              src={data.thumbnails[0].url}
              alt="Default Image"
              width="200px"
              css={{ borderRadius: "15px" }}
            />
            <Spacer y={1} />
            <Textarea
              status="primary"
              readOnly
              minRows={1}
              initialValue={data.title}
            />
          </>
        );
      case "channelName":
        return (
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              size="xl"
              src={data.channelThumbnail.url || `/mong.jpeg`}
              color="gradient"
              bordered
              css={{ margin: "0 auto" }}
            />
            <Spacer y={1} />
            <Badge color="secondary" variant="flat">
              {data.channelName}
            </Badge>
            {/* <Textarea readOnly minRows={1} initialValue={data.channelName} /> */}
          </span>
        );
      default:
        return cellValue;
    }
  };

  return (
    <>
      <ResultProgress
        totalCount={data?.totalCount}
        listCount={data?.listCount}
        isLoading={isLoading}
      />
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
        조회수 〉 구독자 수
      </Badge>
      <Spacer y={1} />
      <Table
        aria-label="Example table with dynamic content & infinity pagination"
        css={{ minWidth: "100%", height: "calc($space$14 * 12)" }}
        color="secondary"
        selectionMode="single"
        containerCss={{
          minWidth: "100%",
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              align="center"
              css={{ width: column.uid === "id" ? "50px" : "" }}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body
          items={data ? data.list : []}
          loadingState={"idle"}
          onLoadMore={() => console.log("enter")}
        >
          {(data) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell
                  css={{
                    width: columnKey === "id" ? "50px" : "",
                  }}
                >
                  {renderCell(data, columnKey)}
                </Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      <Spacer y={1} />
    </>
  );
};

export default VideosTable;
