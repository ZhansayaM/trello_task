const cards = [
  {
    id: "card-1",
    title: "Learning how to code",
  },
  {
    id: "card-2",
    title: "Making a website",
  },
  {
    id: "card-3",
    title: "Fixing the bugs",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "To do",
      cards,
    },
  },
  listIds: ["list-1"],
};

export default data;
