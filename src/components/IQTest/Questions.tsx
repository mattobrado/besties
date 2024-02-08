import {
  Text,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepSeparator,
  useSteps,
  Button,
  Box,
  Center,
  Flex,
  Progress,
} from "@chakra-ui/react";
import QuestionCard from "./QuestionCard";

const steps = [
  { title: "First", description: "Contact Info" },
  {
    title: "Second",
    description: "Choose your first field of expertise",
    options: [
      "Mathematics",
      "Business",
      "Economics",
      "Archeology",
      "History",
      "Anthropology",
      "Art",
      "Literature",
      "Music",
      "Film",
      "Physics",
      "Chemistry",
      "Astronomy",
      "Technology",
    ].sort(),
  },
  { title: "Third", description: "Select Rooms" },
];
const Questions = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const percentComplete = (activeStep / steps.length) * 100;

  const { description, options } = steps[activeStep];
  return (
    <>
      <Box p={4} pb={24}>
        <Stepper size="sm" index={activeStep} gap="0" colorScheme="pink">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <QuestionCard description={description} options={options} />
        <Button
          colorScheme="pink"
          onClick={() => setActiveStep(activeStep + 1)}
        >
          <Text color={"black"} w={"96px"} fontSize={"lg"}>
            {"Next"}
          </Text>
        </Button>
      </Box>
      <Box
        id="completion-footer"
        pt={2}
        pb={6}
        bg={"gray.800"}
        position={"fixed"}
        left={0}
        bottom={0}
        w={"100%"}
      >
        <Center>
          <Text fontSize={"sm"}>{percentComplete.toFixed(0)}% Complete</Text>
        </Center>
        <Center>
          <Progress
            w={"150px"}
            h={"4px"}
            colorScheme="pink"
            value={percentComplete}
          />
        </Center>
      </Box>
    </>
  );
};
export default Questions;
