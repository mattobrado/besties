import QuestionCard from "./QuestionCard";

const steps = [
  { title: "First", description: "Contact Info" },
  {
    title: "Second",
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
        ]
          .sort()
          .concat("Other")}
      />
    ),
  },
  { title: "Third", description: "Select Rooms" },
];

export default steps;
