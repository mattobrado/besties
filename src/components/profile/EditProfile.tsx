import {
  FormControl,
  FormLabel,
  Input,
  Avatar as ChakraAvatar,
  Center,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AddIcon } from "@chakra-ui/icons";
import { useAuth, useUpdateUser } from "src/hooks";
import { FormContainer, FormField } from "src/components/auth";
import { ContentContext } from "src/context";
import {
  INPUT_TYPE,
  ROUTES,
  VALIDATE,
  type UserType,
  getSongIdFromLink,
} from "src/lib";

export const EditProfile = ({
  id,
  goToNext,
}: {
  id?: string;
  goToNext?: () => void;
}) => {
  const { authUser } = useAuth();
  const content = useContext(ContentContext);
  const navigate = useNavigate();
  const [color, setColor] = useState("#F40B52");
  useEffect(() => {
    if (authUser?.favoriteColor) {
      setColor(authUser.favoriteColor);
    }
  }, [authUser?.favoriteColor]);
  const values: Partial<UserType> = {
    fullName: authUser?.fullName,
    email: authUser?.email,
    bio: authUser?.bio,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values });

  if (id && id !== authUser?.id) {
    navigate(ROUTES.HOME);
  }
  const { updateUser, isLoading, setFile, fileURL } = useUpdateUser(
    authUser?.id
  );

  const handleSignup = async (data: any) => {
    const dataWithoutEmptyStrings: Partial<UserType> = {};
    Object.keys(data).forEach((key) => {
      if (key === "url") {
        dataWithoutEmptyStrings.favoriteSongId = getSongIdFromLink(data[key]);
      }
      if (data[key] !== "") {
        dataWithoutEmptyStrings[key as keyof UserType] = data[key];
      }
    });
    await updateUser({
      ...dataWithoutEmptyStrings,
      favoriteColor: color,
    })
      .then(() => {
        if (goToNext) goToNext();
      })
      .catch((e) => console.log(e));
  };

  const imageInputId = "image-input";

  return (
    authUser && (
      <FormContainer
        onSubmit={handleSubmit(handleSignup)}
        buttonProps={{
          isLoading: isLoading,
          label: content.auth.next,
          loadingText: "Updating",
        }}
      >
        <div id="edit-avatar">
          <Center>
            <ChakraAvatar
              name={authUser?.fullName}
              src={fileURL ?? authUser?.avatar}
              loading="lazy"
              size={"xl"}
              icon={<AddIcon fontSize="1.5rem" />}
              bg={color}
              onClick={() => document.getElementById(imageInputId)?.click()}
              borderColor={color}
              borderWidth={3}
            />
          </Center>
          <FormControl>
            <FormLabel htmlFor="picture"></FormLabel>
            <input
              id={imageInputId}
              type="file"
              accept="image/*"
              onChange={(e: any) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </FormControl>
        </div>

        <FormField
          error={errors?.fullName}
          inputType={INPUT_TYPE.FULL_NAME}
          label={content.auth.fullName}
          placeHolder={authUser.fullName}
          register={register}
          validate={
            authUser.fullName ? VALIDATE.FULL_NAME : VALIDATE.FULL_NAME_REQUIRED
          }
        />
        <FormField
          error={errors?.email}
          inputType={INPUT_TYPE.EMAIL}
          label={content.auth.emailAddress}
          placeHolder={authUser.email}
          register={register}
          validate={!authUser.email && VALIDATE.EMAIL_REQUIRED}
        />
        <FormField
          error={errors?.bio}
          inputType={INPUT_TYPE.BIO}
          label={content.auth.bio}
          register={register}
          placeHolder={authUser.bio}
        />
        <FormField
          error={errors?.favoriteSongId}
          inputType={INPUT_TYPE.SONG}
          label={content.auth.favoriteSong}
          placeHolder={content.auth.favoriteSongPlaceholder}
          register={register}
        />
        <FormControl>
          <FormLabel>{"Favorite color"}</FormLabel>
          <Input
            type={INPUT_TYPE.COLOR}
            value={color}
            onChange={(e: any) => setColor(e.target.value)}
            placeholder="gh"
            p={0}
          />
        </FormControl>
      </FormContainer>
    )
  );
};
