"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SinginForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.push("/home");
  };

  return (
    <>
      <Input
        type="email"
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={(event) => setEmailField(event.target.value)}
      />
      <Input
        type="password"
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(event) => setPasswordField(event.target.value)}
      />
      <Button size={1} onClick={handleEnterButton}>
        Entrar
      </Button>
    </>
  );
};
