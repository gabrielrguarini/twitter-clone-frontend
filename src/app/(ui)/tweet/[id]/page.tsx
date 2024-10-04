import { TweetItem } from "@/components/tweet/tweet-item";
import { TweetPost } from "@/components/tweet/tweet-post";
import { GeneralHeader } from "@/components/ui/general-header";
import { tweet } from "@/data/tweet";

export default function Page() {
  return (
    <div>
      <GeneralHeader backHref="/">
        <p className="font-bold text-lg">Voltar</p>
      </GeneralHeader>
      <TweetItem tweet={tweet} />

      <div className="border-b-2 border-gray-900">
        <div className="border-y-4 border-gray-900 bg-gray-900">
          <TweetPost />
        </div>
        <TweetItem tweet={tweet} hideComments />
        <TweetItem tweet={tweet} hideComments />
        <TweetItem tweet={tweet} hideComments />
      </div>
    </div>
  );
}
