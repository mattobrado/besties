import { Button, HStack, Text } from "@chakra-ui/react";

const RatingInput = ({
  iconSize,
  rating,
  setRating,
}: {
  iconSize: string;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const Buttons = [];

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
      <Button
        variant={"link"}
        aria-label={`Rate ${idx}`}
        mx={1}
        onClick={() => onClick(idx)}
        _focus={{ outline: 0 }}
      >
        <RatingIcon fill={fill} />
      </Button>
    );
  };
  for (let i = 1; i <= 5; i++) {
    Buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
  }

  return (
    <HStack justify="center">
      <input type="hidden" value={rating} />
      {Buttons}
    </HStack>
  );
};

export default RatingInput;
