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
import { useAuth } from "../../hooks/authHooks";
import PhoneAuth from "../auth/PhoneAuth";
import EditProfile from "../profile/EditProfile";
import QuestionCard from "./QuestionCard";

const Questions = () => {
  const editProfileId = "edit-profile";
  const { authUser } = useAuth();
  const stepsWithoutSubmitButton = [
    { description: "Log in", body: <PhoneAuth /> },
    {
      id: editProfileId,
      description: "Contact Info",
    },
    {
      description: "Choose your first field of expertise",
      body: (
        <QuestionCard
          options={[
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
            "Architecture",
            "Geology",
            "Biology",
            "Medicine",
            "Government",
          ]
            .sort()
            .concat("Other")}
        />
      ),
    },
    { description: "Select Rooms" },
  ];
  const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: stepsWithoutSubmitButton.length,
  });

  const steps = stepsWithoutSubmitButton.map((step) =>
    step.id === editProfileId
      ? { ...step, ...{ body: <EditProfile id={""} onSubmit={goToNext} /> } }
      : step
  );

  const percentComplete = (activeStep / steps.length) * 100;

  const { description, body, id } = steps[activeStep];
  if (authUser && activeStep === 0) {
    setActiveStep(1);
  }

  return (
    <>
      <Fade in={activeStep > 1}>
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
            {steps.map((_step, index) => (
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
        {id !== editProfileId && (
          <Button colorScheme="pink" onClick={goToNext}>
            <Text color={"black"} w={"96px"} fontSize={"lg"}>
              {"Next"}
            </Text>
          </Button>
        )}
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
