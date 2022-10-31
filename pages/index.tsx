import { useState } from "react";
import Head from "next/head";
import Title from "@components/home/title";
import SearchInput from "@components/home/searchInput";
import Banners from "@components/home/banners";
import VideosTable from "@components/home/videosTable";
import { Container, Spacer } from "@nextui-org/react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
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
          <Title />
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setData={setData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <Spacer y={1} />
          <Banners />
          <Spacer y={1} />
          <VideosTable data={data} isLoading={isLoading} />
        </Container>
      </main>
    </div>
  );
};

export default Home;
