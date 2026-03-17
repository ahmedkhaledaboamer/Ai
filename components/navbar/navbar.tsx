"use client";

import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/utils/cn";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useMemo } from "react";
import LocaleSwitcher from "../locale-switcher";
import Logo from "../logo";
import MobileNavbar from "./mobile-nav";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Route {
  label: string;
  href: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("navbar");
  const locale = useLocale();
  const isRTL = useMemo(() => locale === "ar", [locale]);
  const routesRaw = t.raw("routes");
  const isLaptop = useMediaQuery("(max-width: 1536px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Memoize routes processing
  const routes = useMemo<Route[]>(() => {
    if (!Array.isArray(routesRaw)) return [];
    return routesRaw
      .map((route: unknown) => {
        const r = route as { label?: unknown; href?: unknown };
        const href = String(r.href || "");
        const label = String(r.label || "");
        return { href, label };
      })
      .filter((route) => route.href && route.href !== "[object Object]");
  }, [routesRaw]);

  // Memoize active route check
  const isActive = useCallback(
    (href: string) => {
      if (href === "/") {
        return pathname === "/" || pathname === `/${locale}`;
      }
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname, locale]
  );

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-[5%]",
        "flex justify-between items-center py-4",
        "transition-all duration-300 ease-in-out",
        "w-full rounded-none",
        "bg-secondary/95 backdrop-blur-sm shadow-lg shadow-black/20"
      )}
      role="navigation"
      aria-label="Main navigation"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Logo */}
      <Logo className=" transition-transform duration-300 hover:scale-105 w-fit" size={isLaptop && !isMobile ? 80: isMobile ? 60 : 100} />

      {/* Desktop Navigation Links */}
      <ul
        className={cn("hidden md:flex items-center")}
        style={{
          gap: "clamp(1.5rem, 2vw, 3rem)",
        }}
        role="list"
      >
        {routes.map((route) => (
          <li key={route.href} role="none">
            <Link
              href={route.href}
              className={cn(
                "navbar-link relative font-semibold group transition-colors duration-300 focus:outline-none rounded-md",
                isActive(route.href)
                  ? "navbar-link-active"
                  : ""
              )}
              style={{
                fontSize: "clamp(1rem, 0.55rem + 0.5vw, 1.75rem)",
                paddingTop: "clamp(0.25rem, 0.5vw, 0.5rem)",
                paddingBottom: "clamp(0.25rem, 0.5vw, 0.5rem)",
                paddingLeft: "clamp(0.5rem, 0.75vw, 1rem)",
                paddingRight: "clamp(0.5rem, 0.75vw, 1rem)",
              }}
              aria-current={isActive(route.href) ? "page" : undefined}
            >
              {route.label}
              <span
                className={cn(
                  "pointer-events-none absolute left-0 right-0 rounded-full",
                  "transition-all duration-300",
                  "bottom-0",
                  !isActive(route.href) &&
                    "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500",
                  isActive(route.href) &&
                    "opacity-100 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500"
                )}
                style={{
                  height: "clamp(2px, 0.25vw, 4px)",
                }}
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Section */}
      <div
        className={cn("flex items-center", isRTL ? "flex-row-reverse" : "flex-row")}
        style={{
          gap: "clamp(0.75rem, 1vw, 1.5rem)",
        }}
      >
        <div className="hidden md:flex">
          <LocaleSwitcher />
        </div>
         
        <MobileNavbar />
      </div>
    </nav>
  );
}