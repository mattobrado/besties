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
import { schoolSubjects } from "../../lib/constants";
import NextButton from "./NextButton";
import { useState } from "react";
import { useUpdateUser } from "../../hooks/userHooks";

const RegistrationSteps = () => {
  const { authUser } = useAuth();
  const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: 4,
  });
  const [value, setValue] = useState("");
  const { updateUser } = useUpdateUser(authUser?.id);

  const steps: {
    description?: string;
    body?: React.ReactNode;
  }[] = [
    {
      description: "Register",
      body: <PhoneAuth />,
    },
    {
      description: "Choose your field of expertise",
      body: (
        <QuestionCard
          options={schoolSubjects.sort().concat("Other")}
          initialValue={authUser?.tag}
          value={value}
          nextButton={
            <NextButton
              onClick={async () => {
                await updateUser({ tag: value });
                setValue("");
                goToNext();
              }}
            />
          }
          setValue={setValue}
        />
      ),
    },
    {
      description: "About you",
      body: <EditProfile id={""} onSubmit={goToNext} />,
    },

    { description: "Select Rooms" },
  ];

  const percentComplete = (activeStep / steps.length) * 100;

  const { logout } = useLogout();

  const { description, body } = steps[activeStep];
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
