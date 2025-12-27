type Choice = {
  id: string;
  choice: string;
};

type Question = {
  id: string;
  title: string;
  titleDescription: string;
  choices: Choice[];
};

export const questions: Question[] = [
  {
    id: "1",
    title: "First Things First",
    titleDescription:
      'Scenario: You are a unicorn detective fighting in the streets of Gotham. After your usual nightly routine of crime fighting, you receive a message from a trusted friend. It says " Hey check this website out www.paez-announcement ". What do you do? ',
    choices: [
      {
        id: "A",
        choice: "I click the link because I trust the person who sent it.",
      },
      {
        id: "B",
        choice:
          "I dont' click the link. I am the last line of defense against the Gotham Ocelots. If this link takes me down then its over for everyone",
      },
      { id: "C", choice: "I am confused but I still click the link" },
      {
        id: "D",
        choice:
          "I didn't see any message on my phone. Therefore, there was no link to click",
      },
    ],
  },
  {
    id: "2",
    title: "Knowledge Check",
    titleDescription:
      "Scenario: You are a world-renowed spy and are tasked with infiltrating the life of Albert Paez. After years of studying the weird specimen named Albert Paez, you are tasked with writing a report. What do you write about him? ",
    choices: [
      {
        id: "A",
        choice:
          "He was the humblest person I know. Loved the Lord and loved being goofy",
      },
      { id: "B", choice: "He had some weirdly shaped thumbs" },
      {
        id: "C",
        choice: "He was like super duper in love with that Ritz gurl",
      },
      { id: "D", choice: "I think I was invited to his wedding?" },
    ],
  },
  {
    id: "3",
    title: "Preparation Check",
    titleDescription:
      "Scenario: You are about to be tasked with a mission that requires love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self control. How do you feel?   ",
    choices: [
      {
        id: "A",
        choice: "I was born ready",
      },
      {
        id: "B",
        choice: "I have like one of those traits. I think that's good enough",
      },
      {
        id: "C",
        choice:
          "I still don't know what's going on but I'll just pick this answer.",
      },
      { id: "D", choice: "It's just game why you haf to be nervous?" },
    ],
  },
];
