import Link from "next/link";
import type { ComponentProps } from "react";
import { buttonVariants, type ButtonVariants } from "@heroui/react";

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  className?: string;
}

/**
 * Enlace de navegación (next/link, con prefetch y sin recarga de página)
 * con la apariencia visual de un HeroUI Button. HeroUI Button (react-aria)
 * no soporta renderizarse como enlace en esta versión, así que reutilizamos
 * directamente sus clases (`buttonVariants`) sobre un Link real.
 */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) {
  return <Link className={`${buttonVariants({ variant, size })} ${className}`} {...props} />;
}
