import { Stack, Container, Box, Button } from "@chakra-ui/react";
import { AuthHeading, AuthHeadingPropsType } from "./AuthHeading";

const AuthFormContainer = ({
  authHeadingProps,
  buttonProps,
  children,
  onSubmit,
}: {
  authHeadingProps: AuthHeadingPropsType;
  buttonProps: { isLoading: boolean; label: string; loadingText: string };
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}) => (
  <Container
    maxW="lg"
    py={{ base: "4", md: "16" }}
    px={{ base: "0", sm: "16" }}
  >
    <Stack spacing="6">
      <AuthHeading {...authHeadingProps} />
      <Box
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bg={{ base: "transparent", sm: "bg.surface" }}
        boxShadow={{ base: "none", sm: "md" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack spacing="6">
          <form onSubmit={onSubmit}>
            <>
              {children}
              <Stack spacing="6">
                <Button
                  mt="4"
                  type="submit"
                  size="md"
                  w="full"
                  isLoading={buttonProps.isLoading}
                  loadingText={buttonProps.loadingText}
                  variant={"custom"}
                >
                  {buttonProps.label}
                </Button>
                {/* <HStack>
                  <Divider />
                  <Text color={COLORS.text} textStyle="sm" whiteSpace="nowrap">
                    {CONTENT.AUTH.orContinueWith}
                  </Text>
                  <Divider />
                </HStack>
                <OAuthButtonGroup /> */}
              </Stack>
            </>
          </form>
        </Stack>
      </Box>
    </Stack>
  </Container>
);

export default AuthFormContainer;
