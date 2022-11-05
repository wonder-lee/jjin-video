import {
  Card,
  Col,
  Row,
  Button,
  Text,
  Container,
  Avatar,
  Spacer,
  Badge,
  Textarea,
} from "@nextui-org/react";

const VideoCard = ({ video }: any) => {
  return (
    <Container>
      <Card isPressable>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={video.thumbnails[0].url}
            objectFit="cover"
            width="100%"
            height={140}
            alt={video.title}
          />
        </Card.Body>
      </Card>
      <Spacer y={1} />
      <Row justify="space-between">
        <Avatar src={video.channelThumbnail.url} />
        <Col style={{ marginLeft: "15px" }}>
          <Card variant="flat">
            <Card.Body>
              <Text
                css={{
                  color: "$accents7",
                  fontWeight: "$semibold",
                  fontSize: "$sm",
                  textAlign: "left",
                }}
              >
                {video.title}
              </Text>
              <Badge variant="flat">{video.channelName}</Badge>
              <Badge variant="flat">{video.publishedTime}</Badge>
            </Card.Body>
          </Card>
          <Row justify="flex-end">
            <Badge color="secondary" variant="flat">
              {video.viewCount}
            </Badge>
            <Badge color="primary" variant="flat">
              {video.subscribers}
            </Badge>
          </Row>
          <Row></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoCard;
