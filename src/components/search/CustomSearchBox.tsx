import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch";
import { COLORS } from "../../theme/colors";
import { TfiSearch } from "react-icons/tfi";

function CustomSearchBox(
  props: UseSearchBoxProps & { placeholderText: string }
) {
  const { query, refine } = useSearchBox(props);
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  function setQuery(newQuery: string) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  return (
    <form
      action=""
      role="search"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();

        if (inputRef.current) {
          inputRef.current.blur();
        }
      }}
      onReset={(event) => {
        event.preventDefault();
        event.stopPropagation();

        setQuery("");

        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <InputGroup size={"lg"}>
        <Input
          ref={inputRef}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder={props.placeholderText}
          _placeholder={{ color: COLORS.BACKGROUND }}
          spellCheck={false}
          maxLength={512}
          value={inputValue}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
          }}
          autoFocus
        />
        <InputRightElement>
          <TfiSearch />
        </InputRightElement>
      </InputGroup>
    </form>
  );
}

export default CustomSearchBox;
