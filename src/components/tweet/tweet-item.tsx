"use client";
import { Tweet } from "@/types/tweet";
import { formatRelativeTime } from "@/utils/format-relative";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

type Props = {
  tweet: Tweet;
};
export const TweetItem = ({ tweet }: Props) => {
  const [liked, setLiked] = useState(tweet.liked);
  return (
    <div className="flex gap-2 p-6 border-b-2 border-gray-900">
      <div>
        <Link href={`/@${tweet.user.slug}`}>
          <img
            src={tweet.user.avatar}
            alt={tweet.user.name}
            className="size-10 rounded-full"
          />
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <div className="font-bold text-lg">
            <Link href={`/@${tweet.user.slug}`}>{tweet.user.name}</Link>
          </div>
          <div className="text-xs text-gray-500">
            @{tweet.user.slug} - {formatRelativeTime(tweet.createdAt)}
          </div>
        </div>
        <div className="py-4 text-lg">{tweet.body}</div>
        {tweet.image && (
          <div className="w-full">
            <img src={tweet.image} alt="" className="w-full rounded-2xl" />
          </div>
        )}
        <div className="flex mt-6 text-gray-500">
          <div className="flex-1">
            <Link href={`/tweet/${tweet.id}`}>
              <div className="inline-flex items-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faComment} />
                <p className="text-lg">{tweet.commentCount}</p>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 cursor-pointer">
              <FontAwesomeIcon icon={faRetweet} />
              <p className="text-lg">{tweet.retweetCount}</p>
            </div>
          </div>
          <div className="flex-1">
            <div
              onClick={() => setLiked(!liked)}
              className={`inline-flex items-center gap-2 cursor-pointer transition-colors duration-300 ease-in-out ${
                liked && "text-red-500"
              }`}
            >
              <FontAwesomeIcon icon={liked ? faHeartSolid : faHeart} />
              <p className="text-lg">{tweet.likeCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
