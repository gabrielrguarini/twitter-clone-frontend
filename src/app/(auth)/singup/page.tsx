import { SingupForm } from "@/components/auth/singup-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function SingIn() {
  return (
    <div className="max-w-lg mx-auto mt-12 px-6">
      <Logo size={56} />
      <h1 className="mt-10 text-2xl">Crie sua conta</h1>
      <div className="mt-10 mb-14 flex flex-col gap-6">
        <SingupForm />
      </div>
      <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
        <p className="text-gray-500">Já tem uma conta?</p>
        <Link href={"/singin"} className="hover:underline">
          Entre
        </Link>
      </div>
    </div>
  );
}
