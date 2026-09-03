"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { NAV_ITEMS, SITE } from "@/content/site";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logo-ecm-pucv.jpg"
            alt="Escuela de Ciencias del Mar, Pontificia Universidad Católica de Valparaíso"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-full object-cover"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-brand-navy">
              {SITE.shortName}
            </span>
            <span className="hidden text-xs text-slate-500 sm:block">{SITE.fullName}</span>
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-brand-teal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          variant="ghost"
          isIconOnly
          className="md:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          onPress={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </Button>
      </div>

      {isMenuOpen ? (
        <nav aria-label="Navegación principal (móvil)" className="border-t border-slate-200 md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-slate-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
