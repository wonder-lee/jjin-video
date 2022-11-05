import ResultProgress from "./resultProgress";
import {
  Table,
  Textarea,
  Image,
  Spacer,
  Avatar,
  Badge,
  Card,
  Text,
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
            <Textarea readOnly minRows={1} initialValue={data.title} />
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
            <Badge variant="flat">{data.channelName}</Badge>
            {/* <Textarea readOnly minRows={1} initialValue={data.channelName} /> */}
          </span>
        );
      case "viewCount":
        return (
          <Badge color="secondary" variant="flat">
            {data.viewCount}
          </Badge>
        );
      case "subscribers":
        return (
          <Badge color="primary" variant="flat">
            {data.subscribers}
          </Badge>
        );
      case "publishedTime":
        return <Badge variant="flat">{data.publishedTime}</Badge>;
      default:
        return cellValue;
    }
  };

  return (
    <Table
      aria-label="Example table with dynamic content & infinity pagination"
      css={{
        height: "calc($space$14 * 12)",
      }}
      color="secondary"
      selectionMode="single"
      containerCss={{
        maxWidth: "960px",
        margin: "0 auto",
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
        onLoadMore={() => console.log("hello JJIN VIDEO")}
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
  );
};

export default VideosTable;
