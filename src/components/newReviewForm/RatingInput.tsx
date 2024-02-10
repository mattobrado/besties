import { Button, Stack, StackDirection, Text } from "@chakra-ui/react";

const RatingInput = ({
  iconSize,
  rating,
  setRating,
  filledElement = "⭐️",
  unfilledElement = "❔",
  direction,
}: {
  iconSize: string;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  filledElement?: React.ReactNode;
  unfilledElement?: React.ReactNode;
  direction?: StackDirection;
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
          {fill ? filledElement : unfilledElement}
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
    <Stack justify="center" direction={direction}>
      {Buttons}
    </Stack>
  );
};

export default RatingInput;
