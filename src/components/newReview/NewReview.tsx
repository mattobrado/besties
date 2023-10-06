import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import RatingInput from "../rating/RatingInput";
import { SetStateAction, useState } from "react";

const NewReview = () => {
  const [rating, setRating] = useState(3);

  return (
    <FormControl isRequired>
      <InputGroup size={"lg"}>
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
        <Input placeholder="Who are you reviewing?" />{" "}
      </InputGroup>
      <RatingInput rating={rating} size={"5xl"} setRating={setRating} />
    </FormControl>
  );
};

export default NewReview;
