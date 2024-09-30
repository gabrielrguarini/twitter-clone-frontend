"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SinginForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
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
