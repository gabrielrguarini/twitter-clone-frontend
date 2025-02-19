import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { user } from "@/data/user";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page() {
  const isMe = true;
  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="font-bold text-base">{user.name}</div>
        <div className="text-xs text-gray-500">{user.postCount} posts</div>
      </GeneralHeader>
      <section className="border-b-2 border-gray-900">
        <div
          className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${user.cover})` }}
        ></div>
        <div className="flex justify-between items-end">
          <img
            src={user.avatar}
            alt={user.name}
            className="-mt-12 size-24 rounded-full"
          />

          {isMe && (
            <div className="w-32">
              <Link href={`/${user.slug}/edit`}>
                <Button size={2}>Editar perfil</Button>
              </Link>
            </div>
          )}
          {!isMe && (
            <div className="w-32">
              <Button size={2}>Seguir</Button>
            </div>
          )}
        </div>
        <div className="px-6 mt-4">
          <div className="font-bold">{user.name}</div>
          <div className="text-gray-500 text-sm">@{user.slug}</div>
          <div className="py-2 text-gray-500">@{user.bio}</div>
          {user.link && (
            <div className="flex gap-2 items-center text-sm">
              <FontAwesomeIcon icon={faLink} className="size-5" />
              <Link href={user.link} className="text-blue-300" target="_blank">
                {user.link}
              </Link>
            </div>
          )}
          <div className="my-2 flex gap-6">
            <p className="text-gray-500">
              <span className="text-white">99 </span>
              Seguindo
            </p>
            <p className="text-gray-500">
              <span className="text-white">99 </span>
              Seguidores
            </p>
          </div>
        </div>
      </section>
      <ProfileFeed />
    </div>
  );
}
