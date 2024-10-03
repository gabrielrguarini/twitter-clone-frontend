import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
  id: 123,
  user: user,
  body: "Tweet de teste",
  image: "https://picsum.photos/300/200",
  likeCount: 10,
  commentCount: 5,
  retweetCount: 0,
  liked: true,
  retweeted: false,
  createdAt: new Date(2024, 9, 0, 10, 0, 0),
};
