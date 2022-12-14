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
  setListBykeywordCount,
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
  const getOnlyTotalCount = (count: number) => {
    setListBykeywordCount(count);
  };
  const onSearch = async (e: any) => {
    e.preventDefault && e.preventDefault();
    setData(null);
    setIsLoading(true);
    if (!searchQuery.length) {
      setErrorMessage("π₯Ή ν€μλλ₯Ό μλ ₯ν΄ μ£ΌμΈμ ππ»");
      setIsLoading(false);
      return setVisible(true);
    }
    try {
      await axios
        .get(`${BASE_URL}/getListByKeyword?searchQuery=${searchQuery}`)
        .then(async (getListByKeywordResponse: any) => {
          getOnlyTotalCount(getListByKeywordResponse.data.totalCount);
          const postListBySubscriberResponse = await axios.post(
            `${BASE_URL}/postListBySubscriber`,
            getListByKeywordResponse.data
          );
          if (postListBySubscriberResponse.data.list.length === 0) {
            setErrorMessage(
              "π₯Ή κ²μνμ  ν€μλλ‘λ μ§μ£Όκ°μ μμμ΄ μμ΅λλ€. λ€λ₯Έ ν€μλλ‘ λμ ν΄λ³ΌκΉμ? πͺπ»"
            );
            return setVisible(true);
          }
          setData(postListBySubscriberResponse.data);
        })
        .catch((error) => {
          setData(null);
          setErrorMessage(
            `π₯Ή μλ² μλ¬κ° λ°μνμμ΅λλ€.λ©μΌλ‘ λ¬΄μμ κ²μνλ€ λ°μνλμ§ λ¬Έμ μ£Όμλ©΄ λΉ λ₯΄κ² νμΈνκ² μ΅λλ€!ππ» errorMessage : ${error.response.data.errorMessage}`
          );
          return setVisible(true);
        });
    } catch (error: any) {
      setData(null);
      setErrorMessage(
        `π₯Ή μλ² μλ¬κ° λ°μνμμ΅λλ€.λ©μΌλ‘ λ¬΄μμ κ²μνλ€ λ°μνλμ§ λ¬Έμ μ£Όμλ©΄ λΉ λ₯΄κ² νμΈνκ² μ΅λλ€!ππ» errorMessage : ${error.response.data.errorMessage}`
      );
      return setVisible(true);
    } finally {
      setListBykeywordCount(null);
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={(e) => onSearch(e)}>
      <Tooltip
        content={
          isLoading
            ? "μ΅λ 1λΆμμ 2λΆμ΄ μμλ  μ μμ΅λλ€. μ‘°κΈλ§ λ κΈ°λ€λ € μ£ΌμΈμ! "
            : "2κ° μ΄μμ λ¨μ΄λ‘ μλ ₯νμλ©΄ λ λΉ λ₯΄κ² κ²μλ©λλ€! β‘οΈ (ex : κ°μμ§ μμΈ) πΆ"
        }
        placement="bottom"
        color="error"
        style={{ width: "unset" }}
      >
        <Input
          placeholder="ν€μλλ₯Ό μλ ₯ν΄ μ£ΌμΈμ."
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
                  π
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
            νμΈ
          </Button>
        </Modal.Footer>
      </ModalCustom>
    </form>
  );
};

export default SearchInput;
