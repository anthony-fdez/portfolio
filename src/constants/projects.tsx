import AlgoSaurus from "@/components/sections/work/projects/algoSaurus/AlgoSaurus";
import BasketballCenter from "@/components/sections/work/projects/basketballCenter/BasketballCenter";
import Protypist from "@/components/sections/work/projects/protypist/Protypist";
import WeEatCode from "@/components/sections/work/projects/weeatcode/WeEatCode";
import React from "react";

export interface IProject {
  name: string;
  bgImage: string;
  iconImage: string;
  component: JSX.Element;
  description: string;
  images: string[];
}

const projects: Record<string, IProject> = {
  basketballCenter: {
    name: "Basketball Center",
    bgImage: "basketball-center/home.png",
    iconImage: "/logos/BBALL_CENTER.png",
    component: <BasketballCenter />,
    images: [
      "/basketball-center/1.png",
      "/basketball-center/2.png",
      "/basketball-center/3.png",
      "/basketball-center/4.png",
      "/basketball-center/5.png",
      "/basketball-center/6.png",
      "/basketball-center/7.png",
      "/basketball-center/8.png",
    ],
    description: `Basketball Center is a mobile app built to help basketball
      fans to stay up to date with everything in the league.
      Features an in-game chat, personalized notifications for
      favorite teams and players, real time shot-chart that can be
      targeted to specific players with play-by-play info alongside
      it.`,
  },
  weEatCode: {
    name: "WeEatCode",
    bgImage: "logos/weeatcode.png",
    iconImage: "/logos/weeatcode.png",
    component: <WeEatCode />,
    images: [],
    description: `WeEatCode is a fullstack blog web application. Users can
    create an account, create a blog post, start a conversation
    under any post and downvote and upvote any post or comment.
    Among many other features.`,
  },
  proTypist: {
    name: "ProTypist",
    bgImage: "basketball-center/home.png",
    iconImage: "/logos/protypist.png",
    component: <Protypist />,
    images: [],
    description: `ProTypist is a fully featured typing game, with a multiplayer
    mode and lots of other features`,
  },
  algoSaurus: {
    name: "AlgoSaurus",
    bgImage: "basketball-center/home.png",
    iconImage: "/logos/dino.gif",
    component: <AlgoSaurus />,
    images: [],
    description: `AlgoSaurus is a complex algorithms visualization tool to help
    people learn the basics about the most famous sorting
    algorithms. This project placed top 3 at ShellHacks, one of
    the largest hackathons at Florida.`,
  },
};
export default projects;
