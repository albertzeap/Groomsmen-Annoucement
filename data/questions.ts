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
    title: "Behavioral Check 🏙️",
    titleDescription:
      'Scenario: You are a unicorn detective fighting in the streets of Gotham. After your usual nightly routine of crime fighting, you receive a message from a trusted friend. It says " Hey check this website out www.paez-announcement ". What do you do? ',
    choices: [
      {
        id: "A-🦄",
        choice: "I click the link because I trust the person who sent it.",
      },
      {
        id: "B-🕵️‍♂️",
        choice:
          "I dont' click the link. I am the last line of defense against the Gotham Ocelots. If this link takes me down then its over for everyone",
      },
      { id: "C-❓", choice: "I am confused but I still click the link" },
      {
        id: "D-💡",
        choice:
          "I didn't see any message on my phone. Therefore, there was no link to click",
      },
    ],
  },
  {
    id: "2",
    title: "Knowledge Check 🧠",
    titleDescription:
      "Scenario: You are a world-renowed spy and are tasked with infiltrating the life of Albert Paez. After years of studying the weird specimen named Albert Paez, you are tasked with writing a report. What do you write about him? ",
    choices: [
      {
        id: "A-😇🤪",
        choice:
          "He was the humblest person I know. Loved the Lord and loved being goofy",
      },
      { id: "B-👍🤏", choice: "He had some weirdly shaped thumbs" },
      {
        id: "C-💘🥰",
        choice: "He was like super duper in love with that Ritz gurl",
      },
      { id: "D-💒🎉", choice: "I think I was invited to his wedding?" },
    ],
  },
  {
    id: "3",
    title: "Emotional Check 🫀",
    titleDescription:
      "Scenario: You are 1 point away from winning a pickleball match. Using your spy-like abilities, you successfully return the ball that was coming at you. It's at this moment that the opponent makes a mistake. He hits the ball up high enough for you to slam it. With every fiber of your being, you prepare to hit the grand slam that you see set out before you. Then BOOM! You suddenly feel a sharp pain on your head. You open your eyes to see that your partner has hit you in the head trying to hit the grand slam that was set before you. How does this make you feel?  ",
    choices: [
      {
        id: "A-😵‍💫❓",
        choice: "I'm confused because I don't even play pickleball",
      },
      {
        id: "B-😡💥",
        choice: "BBOOOOOYYY HE BETTER RUUUN",
      },
      {
        id: "C-🤝😊",
        choice:
          "It's okay. It's the thought that counts. I appreciate his effort and his tenacity.",
      },
      {
        id: "D-🤬😵‍💫",
        choice:
          "It's okay everything is fine, it's okay everything is fine, it's okay everything is fine",
      },
    ],
  },
  {
    id: "4",
    title: "Check 📝💸",
    titleDescription:
      "Scenario: You are tasked with a spy mission in Rome. You decide to walk the streets to do a quick survey of the surrounding area. While you're looking around, you feel a sudden tap on your shoulder. Naturally you turn around to see who it is. Upon turning and looking, you see an old man who is holding a piece of paper. He then looks at you and asks 'Can you write me a check?' How much do you give him? ",
    choices: [
      {
        id: "A-💸❌",
        choice: "I write a BIG FAT ZEEERROOO because I DON'T GOT MoNeY",
      },
      {
        id: "B-🫶💰",
        choice: "I give him everything I own. All my cash is his",
      },
      {
        id: "C-🧮🤔",
        choice: "$3271.08",
      },
      { id: "D-🤓➗", choice: "$[(500 * 2) - (500 * 2 - 777)].00" },
    ],
  },
  {
    id: "5",
    title: "Preparation Check 💪",
    titleDescription:
      "Scenario: You are about to be tasked with a mission that requires love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self control. How do you feel?   ",
    choices: [
      {
        id: "A-💪🚀",
        choice: "I was born ready",
      },
      {
        id: "B-🤏😅",
        choice: "I have like one of those traits. I think that's good enough",
      },
      {
        id: "C-🤔❓",
        choice:
          "I still don't know what's going on but I'll just pick this answer.",
      },
      { id: "D-😬😜", choice: "It's just question why you haf to be nervous?" },
    ],
  },
];
