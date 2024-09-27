"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

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
        onChange={(text) => setEmailField(text)}
      />
      <Input
        type="password"
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(text) => setPasswordField(text)}
      />
      <button className="" onClick={handleEnterButton}>
        Entrar
      </button>
    </>
  );
};
