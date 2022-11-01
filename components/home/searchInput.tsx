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
      const response = await axios.get(
        `${BASE_URL}?searchQuery=${searchQuery}`
      );
      setData(response.data);
    } catch (error) {
      setData(null);
      setErrorMessage("🥹 네트워크 에러가 발생하였습니다. 🙏🏻");
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
          contentRight={
            <>
              {isLoading ? (
                <Button disabled auto flat color="success">
                  <Loading type="points" color="secondary" size="sm" />
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
