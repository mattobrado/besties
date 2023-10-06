import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const RatingInput = React.forwardRef(
  (
    {
      iconSize: iconSize,
    }: {
      iconSize: string;
    },
    ref
  ) => {
    const [rating, setRating] = useState(3);

    const onClick = (idx: any) => {
      if (!isNaN(idx)) {
        // allow user to click first icon and set rating to zero if rating is already 1
        if (rating === 1 && idx === 1) {
          setRating(0);
        } else {
          setRating(idx);
        }
      }
    };

    const RatingIcon = ({ fill }: { fill: boolean }) => {
      return (
        <>
          <Text fontSize={iconSize} onClick={onClick}>
            {fill ? "⭐️" : "❔"}
          </Text>
        </>
      );
    };

    const RatingButton = ({ idx, fill }: { idx: number; fill: boolean }) => {
      return (
        <Box
          as={Button}
          variant={"link"}
          aria-label={`Rate ${idx}`}
          mx={1}
          onClick={() => onClick(idx)}
          _focus={{ outline: 0 }}
        >
          <RatingIcon fill={fill} />
        </Box>
      );
    };
    const Buttons = [];
    for (let i = 1; i <= 5; i++) {
      Buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
    }

    return (
      <HStack justify="center">
        <input name="rating" type="hidden" value={rating} ref={ref as any} />
        {Buttons}
      </HStack>
    );
  }
);

export default RatingInput;
