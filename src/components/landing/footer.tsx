import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 bg-gray-900">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © FiscalFocus. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6 text-gray-300">
        <Link className="text-xs hover:text-accent" href="/terms-of-service">
          Terms of Service
        </Link>
        <Link className="text-xs hover:text-accent" href="/privacy-policy">
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
}
