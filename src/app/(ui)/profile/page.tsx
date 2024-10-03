import { user } from "@/data/user";
import { redirect } from "next/navigation";

export default function Page() {
  redirect(`/${encodeURIComponent(user.slug)}`);
}
