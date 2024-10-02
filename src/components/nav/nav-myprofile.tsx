import { user } from "@/data/user";
import Link from "next/link";

export const NavMyProfile = () => {
  return (
    <div className="flex items-center">
      <Link href={`/${user.slug}`}>
        <img
          className="size-10 mr-2 rounded-full"
          src={user.avatar}
          alt={user.name}
        />
      </Link>
      <div className="flex flex-1 flex-col overflow-hidden">
        <Link className="block truncate" href={`/${user.slug}`}>
          {user.name}
        </Link>
        <span className="text-gray-400 text-sm block truncate">
          @{user.slug}
        </span>
      </div>
    </div>
  );
};
