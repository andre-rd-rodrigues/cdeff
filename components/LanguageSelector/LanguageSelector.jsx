"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function LanguageSelector() {
  return (
    <div>
      <Link href="/en">English</Link>
      <Link href="/pt">Portuguese</Link>
    </div>
  );
}

export default LanguageSelector;
