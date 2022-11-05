import { useState } from "react";
import Head from "next/head";
import Title from "@components/home/title";
import SearchInput from "@components/home/searchInput";
import Banners from "@components/home/banners";
import VideosTable from "@components/home/videosTable";
import DetailInformation from "@components/home/detailInformation";
import VideoCardList from "@components/home/videoCardList";
import { Container, Spacer } from "@nextui-org/react";
import { useMediaQuery } from "@hooks/useMediaQuery";
import ResultProgress from "@components/home/resultProgress";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [listByKeywordCount, setListBykeywordCount] = useState(0);
  const [data, setData] = useState();
  const isMd = useMediaQuery(960);
  return (
    <div>
      <Head>
        <title>찐영상 | 진흙속의 진주같은 영상</title>
        <meta name="description" content="진흙속의 진주같은 유튜브 영상 찾기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container
          css={{
            textAlign: "center",
          }}
        >
          <Title setData={setData} />
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setData={setData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setListBykeywordCount={setListBykeywordCount}
          />
          <Spacer y={1} />
          <Banners
            isLoading={isLoading}
            searchQuery={searchQuery}
            listByKeywordCount={listByKeywordCount}
          />
          <Spacer y={1} />
          <ResultProgress
            totalCount={data?.totalCount}
            listCount={data?.listCount}
            isLoading={isLoading}
          />
          <Spacer y={1} />
          {isMd ? (
            <VideoCardList data={data} isLoading={isLoading} />
          ) : (
            <VideosTable data={data} isLoading={isLoading} />
          )}

          <Spacer y={1} />
          {/* <DetailInformation /> */}
        </Container>
      </main>
    </div>
  );
};

export default Home;
