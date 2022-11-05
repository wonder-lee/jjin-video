import VideoCard from "./videoCard";
import { Grid, Spacer } from "@nextui-org/react";

const VideoCardList = ({ data }: any) => {
  return (
    <Grid.Container gap={2} justify="center">
      {data?.list?.map((video: any, index: number) => {
        return (
          <>
            <Grid key={index} css={{ width: "320px" }}>
              <VideoCard video={video} index={index} />
            </Grid>
            <Spacer y={1} />
          </>
        );
      })}
    </Grid.Container>
  );
};

export default VideoCardList;
