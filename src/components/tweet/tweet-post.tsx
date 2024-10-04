"use client";
import { user } from "@/data/user";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";

export const TweetPost = () => {
  const handleImageUpload = () => {};
  const handlePostClick = () => {};
  return (
    <div className="flex gap-6 px-8 py-6 border-2 bg-black border-gray-900 rounded-2xl">
      <div>
        <img
          src={user.avatar}
          alt={user.name}
          className="size-12 rounded-full"
        />
      </div>
      <div className="flex-1">
        <div
          className="min-h-14 outline-none text-white empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)]"
          contentEditable
          role="textbox"
          data-placeholder="O que está acontecendo?"
        ></div>
        <div className="flex justify-between items-center mt-2">
          <div className="cursor-pointer" onClick={handleImageUpload}>
            <FontAwesomeIcon icon={faImage} className="size-6" />
          </div>
          <div className="w-28">
            <Button size={2} onClick={handlePostClick}>
              Postar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
