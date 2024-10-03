import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/text-area";
import { user } from "@/data/user";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Edit() {
  const isMe = true;
  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="font-bold text-lg">Editar perfil</div>
      </GeneralHeader>
      <section className="border-b-2 border-gray-900">
        <div
          className="flex justify-center items-center gap-4 bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${user.cover})` }}
        >
          <div className="size-12 cursor-pointer bg-black/80 flex justify-center items-center rounded-full">
            <FontAwesomeIcon icon={faCamera} className="size-6" />
          </div>
          <div className="size-12 cursor-pointer bg-black/80 flex justify-center items-center rounded-full">
            <FontAwesomeIcon icon={faXmark} className="size-6" />
          </div>
        </div>
        <div className="">
          <img
            src={user.avatar}
            alt={user.name}
            className="-mt-12 size-24 rounded-full"
          />
          <div className="-mt-24 size-24 flex justify-center items-center">
            <div className="size-12 cursor-pointer bg-black/80 flex justify-center items-center rounded-full">
              <FontAwesomeIcon icon={faCamera} className="size-6 opacity-80" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 flex flex-col gap-4 ">
        <label htmlFor="name">
          <p className="text-lg text-gray-500">Nome</p>
          <Input name="name" value={user.name} placeholder="Digite seu nome" />
        </label>
        <label htmlFor="bio">
          <p className="text-lg text-gray-500">Bio</p>
          <TextArea
            placeholder="Descreva você mesmo"
            rows={4}
            value={user.bio}
          />
        </label>
        <label htmlFor="link">
          <p className="text-lg text-gray-500">Link</p>
          <Input name="link" value={user.name} placeholder="Digite um linnk" />
        </label>
        <Button size={3}>Salvar alterações</Button>
      </section>
    </div>
  );
}
