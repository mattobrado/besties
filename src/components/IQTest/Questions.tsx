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
  Progress,
  Fade,
  Stack,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import steps from "./steps";
import { useAuth } from "../../hooks/authHooks";
import { useEffect } from "react";

const Questions = () => {
  const { authUser } = useAuth();
  const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  });

  const percentComplete = (activeStep / steps.length) * 100;

  const { description, body } = steps[activeStep];
  useEffect(
    () => setActiveStep(authUser && activeStep === 0 ? 1 : 0),
    [authUser]
  );
  return (
    <>
      <Fade in={activeStep > 0}>
        <Button
          leftIcon={<ArrowBackIcon />}
          colorScheme="black"
          variant="ghost"
          size={"sm"}
          onClick={goToPrevious}
        >
          BACK
        </Button>
      </Fade>
      <Box p={4} pb={24}>
        <Stack spacing={5} pb={5}>
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
          <Text fontSize={"3xl"}>{description}</Text>
          {body}
        </Stack>
        <Button colorScheme="pink" onClick={goToNext}>
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
