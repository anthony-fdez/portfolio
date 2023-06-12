import AlgoSaurus from "@/projects/algoSaurus/AlgoSaurus";
import BasketballCenter from "@/projects/basketballCenter/BasketballCenter";
import Protypist from "@/projects/protypist/Protypist";
import SupaMessenger from "@/projects/supaMessenger/SupaMessenger";
import WeEatCode from "@/projects/weeatcode/WeEatCode";
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
  supaMessenger: {
    name: "Supa Messenger",
    bgImage: "",
    iconImage: "/logos/supaMessenger.svg",
    component: <SupaMessenger />,
    images: [
      "/supa-messenger/1.png",
      "/supa-messenger/2.png",
      "/supa-messenger/3.png",
      "/supa-messenger/4.png",
    ],
    description: `Supa Messenger is a fullstack chat application. Users can
    create an account, create a chat room, start a conversation
    under any chat room and send messages to other users in real
    time. Among many other features.`,
  },
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
    images: [
      "/weeatcode/1.png",
      "/weeatcode/2.png",
      "/weeatcode/3.png",
      "/weeatcode/4.png",
    ],
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
    images: [
      "/protypist/1.png",
      "/protypist/2.png",
      "/protypist/3.png",
      "/protypist/4.png",
      "/protypist/5.png",
    ],
    description: `ProTypist is a fully featured typing game, with a multiplayer
    mode and lots of other features`,
  },
  algoSaurus: {
    name: "AlgoSaurus",
    bgImage: "basketball-center/home.png",
    iconImage: "/logos/dino.gif",
    component: <AlgoSaurus />,
    images: [
      "/algo-saurus/1.webp",
      "/algo-saurus/2.webp",
      "/algo-saurus/3.webp",
      "/algo-saurus/4.webp",
    ],
    description: `AlgoSaurus is a complex algorithms visualization tool to help
    people learn the basics about the most famous sorting
    algorithms. This project placed top 3 at ShellHacks, one of
    the largest hackathons at Florida.`,
  },
};
export default projects;
