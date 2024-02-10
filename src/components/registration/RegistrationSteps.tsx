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
import RadioOptions from "./RadioOptions";
import { agreementLevels, schoolSubjects } from "../../lib/constants";
import ButtonOptions from "./ButtonOptions";
import { useState } from "react";

const RegistrationSteps = () => {
  const { authUser } = useAuth();
  const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: 10,
  });

  const [fieldOfExpertise, setFieldOfExpertise] = useState("");

  const steps: {
    description?: string;
    body?: React.ReactNode;
  }[] = [
    {
      description: "Register",
      body: <PhoneAuth />,
    },
    {
      description: "I am a quick learner.",
      body: (
        <RadioOptions
          field={"iAmAQuickLearner"}
          options={agreementLevels}
          goToNext={goToNext}
        />
      ),
    },
    // {
    //   description: "I like discussing abstract concepts.",
    //   body: (
    //     <RadioOptions
    //       field={"iLikeDiscussingAbstractTopics"}
    //       options={agreementLevels}
    //       goToNext={goToNext}
    //     />
    //   ),
    // },
    {
      description:
        "There is evidence from my achievements and results that I'm above average.",
      body: (
        <RadioOptions
          field={"iAmAboveAverage"}
          options={agreementLevels}
          goToNext={goToNext}
        />
      ),
    },
    {
      description:
        "I actively look for opportunities to update my understanding. I like to find out where I'm wrong.",
      body: (
        <RadioOptions
          field={"iLikeDiscussingAbstractTopics"}
          options={agreementLevels}
          goToNext={goToNext}
        />
      ),
    },
    {
      description:
        "If a bat and a ball cost $11 together and the bat costs $10 more than the ball, how much does the ball cost?",
      body: (
        <ButtonOptions
          field={"math"}
          options={["50 cents", "1 dollar", "10 cents"]}
          goToNext={goToNext}
        />
      ),
    },
    {
      description: "My main motivation is",
      body: (
        <ButtonOptions
          field={"motivation"}
          options={[
            "Maximizing profits",
            "Creating utopia",
            "Living life to the fullest",
            "Transcending the levels of consciousness",
            "My art",
            "Fighting the system",
            "I am unmotivated",
            "Revenge",
          ]}
          goToNext={goToNext}
        />
      ),
    },
    {
      description: "Choose your field of expertise",
      body: (
        <RadioOptions
          field={"fieldOfExpertise"}
          options={schoolSubjects
            .map((item) => item.subject)
            .sort()
            .concat("Other")}
          goToNext={goToNext}
          setFieldOfExpertise={setFieldOfExpertise}
        />
      ),
    },
    {
      description: `What are your thoughts on ${
        schoolSubjects.find((item) => item.subject === fieldOfExpertise)?.topic
      }`,
      body: (
        <ButtonOptions
          field={"motivation"}
          options={["Revenge"]}
          goToNext={goToNext}
        />
      ),
    },
    {
      description: "About you",
      body: <EditProfile id={""} onSubmit={goToNext} />,
    },
    {
      description: "About you",
      body: <EditProfile id={""} onSubmit={goToNext} />,
    },
  ];

  const percentComplete = (activeStep / steps.length) * 100;

  const { logout } = useLogout();

  const { description, body } = steps[activeStep];
  if (authUser && activeStep === 0) {
    setActiveStep(1);
  }

  return (
    <>
      <Fade in={activeStep > 0}>
        <Button
          leftIcon={<ArrowBackIcon />}
          colorScheme="black"
          variant="ghost"
          size={"sm"}
          onClick={activeStep === 1 ? logout : goToPrevious}
        >
          BACK
        </Button>
      </Fade>
      <Box p={4} pb={24}>
        <Stepper size="sm" index={activeStep} gap="0" colorScheme="pink" pt={0}>
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
export default RegistrationSteps;
