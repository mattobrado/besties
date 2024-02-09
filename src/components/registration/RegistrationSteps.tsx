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
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useAuth, useLogout } from "../../hooks/authHooks";
import PhoneAuth from "../auth/PhoneAuth";
import EditProfile from "../profile/EditProfile";
import QuestionCard from "./QuestionCard";

const RegistrationSteps = () => {
  enum stepIds {
    editProfileId = "edit-profile",
    loginId = "login",
  }
  const { authUser } = useAuth();
  const stepsWithoutSubmitButton: {
    description?: string;
    body?: React.ReactNode;
    id?: string;
  }[] = [
    {
      description: "Register",
      body: <PhoneAuth />,
      id: stepIds.loginId,
    },
    {
      id: stepIds.editProfileId,
      description: "About you",
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
    step.id === stepIds.editProfileId
      ? { ...step, ...{ body: <EditProfile id={""} onSubmit={goToNext} /> } }
      : step
  );

  const percentComplete = (activeStep / steps.length) * 100;

  const { logout } = useLogout();

  const { description, body, id } = steps[activeStep];
  if (authUser && activeStep === 0) {
    setActiveStep(1);
  }

  return (
    <>
      <div>
        <Fade in={activeStep === 1}>
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="black"
            variant="ghost"
            size={"sm"}
            onClick={logout}
          >
            LOG OUT
          </Button>
        </Fade>
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
          <Text fontSize={"3xl"} py={5}>
            {description}
          </Text>
          {body}
          {(!id || id in stepIds) && (
            <Button colorScheme="pink" onClick={goToNext}>
              <Text color={"black"} w={"96px"} fontSize={"lg"}>
                {"Next"}
              </Text>
            </Button>
          )}
        </Box>
      </div>
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
export default RegistrationSteps;
