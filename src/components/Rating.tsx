import React, { useState } from "react";
import { Box, Button, Stack, Text } from "@chakra-ui/react";

const Rating = React.forwardRef(
  (
    {
      size,
      scale = 5,
    }: {
      size: number;
      scale?: number;
    },
    ref
  ) => {
    const [rating, setRating] = useState(0);
    const buttons = [];

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
          <Text fontSize="5xl" onClick={onClick}>
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

    for (let i = 1; i <= scale; i++) {
      buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
    }

    return (
      <Stack isInline mt={8} justify="center">
        <input name="rating" type="hidden" value={rating} ref={ref} />
        {buttons}
      </Stack>
    );
  }
);

Rating.displayName = "Rating";

export default Rating;
