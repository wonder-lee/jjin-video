import { useState } from "react";
import axios from "axios";
import ModalCustom from "@components/common/modalCustom";
import { BASE_URL } from "@constants/api";
import {
  Input,
  Button,
  Modal,
  Text,
  Loading,
  Tooltip,
} from "@nextui-org/react";

const SearchInput = ({
  searchQuery,
  setSearchQuery,
  setData,
  isLoading,
  setIsLoading,
}: any) => {
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const closeHandler = () => {
    setErrorMessage("");
    setVisible(false);
  };
  const onChange = (e: any) => {
    setSearchQuery(e.target.value);
  };
  const onSearch = async (e: any) => {
    e.preventDefault && e.preventDefault();
    setData(null);
    setIsLoading(true);
    if (!searchQuery.length) {
      setErrorMessage("🥹 키워드를 입력해 주세요 🙏🏻");
      setIsLoading(false);
      return setVisible(true);
    }
    try {
      await axios
        .get(`${BASE_URL}/getListByKeyword?searchQuery=${searchQuery}`)
        .then(async (getListByKeywordResponse) => {
          console.log("response", getListByKeywordResponse);
          const postListBySubscriberResponse = await axios.post(
            `${BASE_URL}/postListBySubscriber`,
            getListByKeywordResponse.data
          );
          if (postListBySubscriberResponse.data.list.length === 0) {
            setErrorMessage(
              "🥹 검색하신 키워드로는 진주같은 영상이 없습니다. 다른 키워드로 도전해볼까요? 💪🏻"
            );
            return setVisible(true);
          }
          setData(postListBySubscriberResponse.data);
        })
        .catch((error) => {
          console.log("error", error);
          setData(null);
          setErrorMessage(
            "🥹 서버 에러가 발생하였습니다. 아직 개발 초기 단계라 에러 자동화를 못했습니다.! 메일로 무엇을 검색하다 발생했는지 문의 주시면 빠르게 확인하겠습니다!🙏🏻"
          );
          return setVisible(true);
        });
    } catch (error) {
      setData(null);
      setErrorMessage(
        "🥹 서버 에러가 발생하였습니다. 아직 개발 초기 단계라 에러 자동화를 못했습니다.! 메일로 무엇을 검색하다 발생했는지 문의 주시면 빠르게 확인하겠습니다!🙏🏻"
      );
      return setVisible(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={(e) => onSearch(e)}>
      <Tooltip
        content="2개 이상의 단어로 입력하시면 더 빠르게 검색됩니다! ⚡️ (ex : 강아지 시츄) 🐶"
        color="error"
        style={{ width: "unset" }}
      >
        <Input
          placeholder="키워드를 입력해 주세요."
          color="secondary"
          aria-label="searchInput"
          onChange={(e) => onChange(e)}
          disabled={isLoading}
          contentRight={
            <>
              {isLoading ? (
                <Button flat disabled auto css={{ right: "36px" }}>
                  <Loading type="points" color="secondary" size="xs" />
                </Button>
              ) : (
                <Button
                  flat
                  color="secondary"
                  auto
                  onPress={(e) => onSearch(e)}
                  css={{ right: "26px" }}
                >
                  🔍
                </Button>
              )}
            </>
          }
        />
      </Tooltip>
      <ModalCustom visible={visible} closeHandler={closeHandler}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Text b color="error" size={18} css={{ textAlign: "center" }}>
            {errorMessage}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="secondary" onClick={closeHandler}>
            확인
          </Button>
        </Modal.Footer>
      </ModalCustom>
    </form>
  );
};

export default SearchInput;
