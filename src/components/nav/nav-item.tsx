"use client";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
type Props = {
  label: string;
  icon: IconDefinition;
  href: string;
  active?: boolean;
} & LinkProps;
export const NavItem = ({ href, label, icon, active, ...props }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  console.log(pathName);
  return (
    <Link
      className={`flex items-center gap-6 py-3 ${
        active || isActive ? "opacity-100" : "opacity-70"
      } hover:opacity-100 transition-opacity`}
      href={href}
    >
      <FontAwesomeIcon icon={icon} className="size-6" />
      {label}
    </Link>
  );
};
