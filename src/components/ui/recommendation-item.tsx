"use client";
import { User } from "@/types/user";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

type Props = {
  user: User;
};
export const RecommendationItem = ({ user }: Props) => {
  const [following, setFollowing] = useState(false);
  const handleFollowButton = () => {
    setFollowing(true);
  };
  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`/${user.slug}`}>
          <img className="size-full" src={user.avatar} alt={user.name}></img>
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link className="block truncate" href={`/${user.slug}`}>
          {user.name}
        </Link>
        <p className="truncate text-sm text-gray-400">@{user.slug}</p>
      </div>
      <div className="pl-2 w-20">
        {!following && (
          <Button className="px-2" size={3} onClick={handleFollowButton}>
            Seguir
          </Button>
        )}
      </div>
    </div>
  );
};

export const RecommendationItemSkeleton = () => {
  return (
    <div className="flex items-center animate-pulse">
      <div className="size-10 mr-2 rounded-full bg-gray-600"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="bg-gray-600 w-3/4 h-4"></div>
        <div className="bg-gray-600 w-2/4 h-4"></div>
      </div>
      <div className="w-[56px] bg-gray-600 h-7 rounded-full mr-3"></div>
    </div>
  );
};
