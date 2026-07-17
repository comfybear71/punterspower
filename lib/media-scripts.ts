export type VideoScript = {
  topic: string;
  duration: string;
  lines: string[];
};

/** Ready-to-use scripts — add more objects here anytime */
export const videoScripts: VideoScript[] = [
  {
    topic: "Resources sell-off & sovereign wealth",
    duration: "~30s",
    lines: [
      "Mate, we dig it up, ship it out — and somehow still get flogged at the checkout.",
      "Australia’s sitting on serious wealth. Everyday punters get the price of living. Ask what stays here for wages, hospitals, regions — a fair share, not a farewell tour.",
      "Join at punterspower.au — No one left behind. We grow together.",
    ],
  },
  {
    topic: "Housing crisis for everyday punters",
    duration: "~25s",
    lines: [
      "You can work full-time and still lose the roof race. That’s not a vibe — that’s a fortnight eaten before groceries.",
      "Rent. Mortgage. Bond. Same story in every suburb. Say your suburb. Say your hit. Make it real.",
      "Join at punterspower.au — No one left behind. We grow together.",
    ],
  },
  {
    topic: "Surveillance — Flock cameras + Palantir",
    duration: "~35s",
    lines: [
      "Your number plate’s becoming a timeline. ANPR cameras watch the roads. Big-data platforms stitch ordinary trips into searchable history.",
      "Marketed as safety. Paid for by us. Ask about retention. Ask who gets the data. Keep it factual — not conspiracy theatre.",
      "Join at punterspower.au — No one left behind. We grow together.",
    ],
  },
  {
    topic: "Medical insurance gaps",
    duration: "~30s",
    lines: [
      "Private cover and still copping a gap fee — explain that to the kids.",
      "No-gap isn’t automatic. Ask what’s covered. Get the out-of-pocket in writing before they start. Shame helps no one — sharing the tip does.",
      "Join at punterspower.au — No one left behind. We grow together.",
    ],
  },
  {
    topic: "Supermarket duopoly",
    duration: "~25s",
    lines: [
      "Two giants. One trolley. Same shock at the register every week.",
      "Check the unit price per 100 grams. Specials aren’t always special. Share one move that actually saved you money this week.",
      "Join at punterspower.au — No one left behind. We grow together.",
    ],
  },
  {
    topic: "Indigenous empowerment",
    duration: "~35s",
    lines: [
      "Empowerment isn’t a slogan — it’s seats at the table and resources that stick.",
      "First Nations communities deserve real power over outcomes that affect them: housing, health, jobs, decisions. Same rule as every punter — dignity first. Nobody left behind.",
      "Join at punterspower.au — We are all the same. We grow together.",
    ],
  },
];
