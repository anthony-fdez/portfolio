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
};
export default projects;
