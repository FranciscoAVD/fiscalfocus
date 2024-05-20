import { Button } from "../../ui/button";
import Link from "next/link";
import ActionButtons from "./action-buttons";

const navLinks = [
    { name: "Get started", href: "#hero" },
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how" },
];

export default function Header() {
  
  return (
    <header className="sticky top-0 flex justify-between bg-gray-900  shadow shadow-gray-600 py-4 px-8 z-10 ">
      <Link href="/" className="block text-2xl font-bold text-accent">FiscalFocus</Link>
      <nav className="grow max-w-lg lg:max-w-xl">
        <ul className="flex justify-between">
          <div className="flex">
            {navLinks.map((l, idx) => (
              <li key={idx}>
                <NavLink name={l.name} href={l.href} />
              </li>
            ))}
          </div>

          <ActionButtons />
        </ul>
      </nav>
    </header>
  );
}

function NavLink({ name, href }: { name: string; href: string }) {
  return (
    <Button variant={"link"} asChild>
      <Link href={href}>{name}</Link>
    </Button>
  );
}
