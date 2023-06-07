export type IProject = Record<string, string>;

const projects: Record<string, IProject> = {
  basketballCenter: {
    name: "Basketball Center",
    bgImage: "basketball-center/home.png",
    iconImage: "logos/BBALL_CENTER.png",
    description: `Basketball Center is a mobile app built to help basketball
      fans to stay up to date with everything in the league.
      Features an in-game chat, personalized notifications for
      favorite teams and players, real time shot-chart that can be
      targeted to specific players with play-by-play info alongside
      it.`,
  },
  weEatCode: {
    name: "WeEatCode",
    bgImage: "basketball-center/home.png",
    iconImage: "logos/BBALL_CENTER.png",
    description: `WeEatCode is a fullstack blog web application. Users can
    create an account, create a blog post, start a conversation
    under any post and downvote and upvote any post or comment.
    Among many other features.`,
  },
  proTypist: {
    name: "ProTypist",
    bgImage: "basketball-center/home.png",
    iconImage: "logos/BBALL_CENTER.png",
    description: `ProTypist is a fully featured typing game, with a multiplayer
    mode and lots of other features`,
  },
  algoSaurus: {
    name: "AlgoSaurus",
    bgImage: "basketball-center/home.png",
    iconImage: "logos/BBALL_CENTER.png",
    description: `AlgoSaurus is a complex algorithms visualization tool to help
    people learn the basics about the most famous sorting
    algorithms. This project placed top 3 at ShellHacks, one of
    the largest hackathons at Florida.`,
  },
};
export default projects;
