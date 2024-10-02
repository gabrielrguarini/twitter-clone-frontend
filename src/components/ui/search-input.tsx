"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./input";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  defaultValue?: string;
  hideOnSearch?: boolean;
};
export const SearchInput = ({ defaultValue, hideOnSearch }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const [searchInput, setSearchInput] = useState(defaultValue ?? "");
  const handleSearchEnter = () => {
    if (searchInput) {
      router.push(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  };

  if (hideOnSearch && pathName === "/search") return null;

  return (
    <Input
      placeholder="Pesquise por usuários"
      type="search"
      icon={faSearch}
      filled
      value={searchInput}
      onChange={(event) => setSearchInput(event.target.value)}
      onEnter={handleSearchEnter}
    />
  );
};
