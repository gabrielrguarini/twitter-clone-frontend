"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SinginForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={(e) => setEmailField(e.target.value)}
      />
      <FontAwesomeIcon icon={faHeart} />
      <input
        type="password"
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(e) => setPasswordField(e.target.value)}
      />
      <button className="" onClick={handleEnterButton}>
        Entrar
      </button>
    </>
  );
};
