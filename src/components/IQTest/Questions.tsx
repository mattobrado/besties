import QuestionCard from "./QuestionCard";

const Questions = () => (
  <QuestionCard
    question={"Choose your field of expertise"}
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
    ].sort()}
    submitButtonLabel="Next"
  />
);

export default Questions;
