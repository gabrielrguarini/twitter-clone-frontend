import { Logo } from "@/components/ui/logo";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
  return (
    <div
      className="min-h-screen flex items-center justify-center
  "
    >
      <Logo size={80} />
    </div>
  );
}
