"use client";

import { usePathname } from "next/navigation";

export default function SortProducts() {
  const pathName = usePathname();

  function switchLocale(locale: string) {
    const newPath = `/${locale}${pathName}`;
    window.history.replaceState(null, "", newPath);
  }

  return (
    <>
      <button onClick={() => switchLocale("en")}>English </button>
      <button onClick={() => switchLocale("fr")}>French </button>
    </>
  );
}
