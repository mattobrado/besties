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
import { useAuth, useLogout, useUpdateUser } from "src/hooks";
import { REGISTRATION_STEPS, REGISTRATION_STEP_TYPES, ROUTES } from "src/lib";
import { useState } from "react";
import { PhoneAuth } from "src/components/auth";
import {
  ButtonOptions,
  RadioOptions,
  ShortResponse,
} from "src/components/registration";
import { EditProfile } from "src/components/profile";
import { useNavigate } from "react-router-dom";

export const RegistrationSteps = () => {
  const { authUser } = useAuth();

  const numSteps = REGISTRATION_STEPS.length;

  const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: numSteps,
  });

  const [fieldOfExpertise, setFieldOfExpertise] = useState("");

  const percentComplete = (activeStep / REGISTRATION_STEPS.length) * 100;

  const { logout } = useLogout();

  const { getTitle, subtitle, stepType, props } =
    REGISTRATION_STEPS[activeStep];

  if (authUser && activeStep === 0) {
    setActiveStep(1);
  }

  const isBackButtonLoggingOut = activeStep === 1;
  const navigate = useNavigate();
  const { updateUser } = useUpdateUser(authUser?.id);

  const onNextButtonClick =
    activeStep >= numSteps - 1
      ? () => {
          updateUser({
            isApplicationSubmitted: true,
          });
          navigate(ROUTES.APPLICATION_STATUS);
        }
      : () => goToNext();

  return (
    <>
      <Fade in={activeStep > 0}>
        <Button
          leftIcon={<ArrowBackIcon />}
          colorScheme="black"
          variant="ghost"
          size={"sm"}
          onClick={isBackButtonLoggingOut ? logout : goToPrevious}
          id={isBackButtonLoggingOut ? "logout" : ""}
        >
          {isBackButtonLoggingOut ? "LOG OUT" : "BACK"}
        </Button>
      </Fade>
      <Box p={4} pb={24}>
        <Stepper
          size="xs"
          index={activeStep}
          gap="0"
          pt={0}
          colorScheme="brand"
        >
          {REGISTRATION_STEPS.map((_step, index) => (
            <Step key={index}>
              <StepIndicator color={"brand"}>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Stack py={5}>
          <Text fontSize={"3xl"}>{getTitle(fieldOfExpertise)}</Text>
          {subtitle}
        </Stack>
        {stepType === REGISTRATION_STEP_TYPES.PHONE_AUTH ? (
          <PhoneAuth {...{ ...props }} />
        ) : stepType === REGISTRATION_STEP_TYPES.RADIO_OPTIONS ? (
          <RadioOptions
            {...{ ...props, onNextButtonClick, setFieldOfExpertise }}
          />
        ) : stepType === REGISTRATION_STEP_TYPES.BUTTON_OPTIONS ? (
          <ButtonOptions {...{ ...props, onNextButtonClick }} />
        ) : stepType === REGISTRATION_STEP_TYPES.SHORT_RESPONSE ? (
          <ShortResponse {...{ ...props, onNextButtonClick }} />
        ) : stepType === REGISTRATION_STEP_TYPES.EDIT_PROFILE ? (
          <EditProfile {...{ ...props, onNextButtonClick }} />
        ) : (
          ""
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
            colorScheme="brand"
            value={percentComplete}
          />
        </Center>
      </Box>
    </>
  );
};
