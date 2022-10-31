import { useState } from "react";
import axios from "axios";
import ModalCustom from "@components/common/modalCustom";
import { BASE_URL } from "@constants/api";
import { Input, Button, Modal, Text, Loading } from "@nextui-org/react";

const SearchInput = ({
  searchQuery,
  setSearchQuery,
  setData,
  isLoading,
  setIsLoading,
}: any) => {
  const [visible, setVisible] = useState(false);

  const closeHandler = () => {
    setVisible(false);
  };
  const onChange = (e: any) => {
    setSearchQuery(e.target.value);
  };
  const onSearch = async () => {
    setData(null);
    setIsLoading(true);
    if (!searchQuery.length) {
      setIsLoading(false);
      return setVisible(true);
    }
    const response = await axios.get(`${BASE_URL}?searchQuery=${searchQuery}`);
    setData(response.data);
    setIsLoading(false);
  };
  return (
    <>
      <Input
        placeholder="영상의 키워드를 입력해 주세요."
        width="250px"
        aria-label="searchInput"
        onChange={(e) => onChange(e)}
        contentRight={
          <>
            {isLoading ? (
              <Button disabled auto flat color="success">
                <Loading type="points" color="secondary" size="sm" />
              </Button>
            ) : (
              <Button flat color="secondary" auto onPress={onSearch}>
                🔍
              </Button>
            )}
          </>
        }
      />
      <ModalCustom visible={visible} closeHandler={closeHandler}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Text b color="error" size={18} css={{ textAlign: "center" }}>
            🥹 키워드를 입력해 주세요 🙏🏻
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="secondary" onClick={closeHandler}>
            확인
          </Button>
        </Modal.Footer>
      </ModalCustom>
    </>
  );
};

export default SearchInput;
