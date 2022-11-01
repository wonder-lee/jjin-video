import { Card } from "@nextui-org/react";
import LoadingBanner from "./loadingBanne";
import MainBanner from "./mainBanner";
import TotalCountBanner from "./totalCountBanner";
const Banners = ({ isLoading, searchQuery, listByKeywordCount }: any) => {
  return (
    <Card css={{ maxWidth: "650px", margin: "0 auto" }}>
      <Card.Body>
        <LoadingBanner searchQuery={searchQuery} />
        {/* {(isLoading && !listByKeywordCount && (
          <LoadingBanner searchQuery={searchQuery} />
        )) ||
          (isLoading && listByKeywordCount && (
            <TotalCountBanner
              listByKeywordCount={listByKeywordCount}
              searchQuery={searchQuery}
            />
          )) || <MainBanner />} */}
      </Card.Body>
    </Card>
  );
};

export default Banners;
