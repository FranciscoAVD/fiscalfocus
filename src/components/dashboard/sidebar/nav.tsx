"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { TableCellsIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export default function SidebarNav() {
  const path = usePathname();
  return (
    <nav>
      <ul className="space-y-2">
        <DashboardLink
          path={path}
          name="Expenses"
          href="/dashboard/expenses"
          Icon={TableCellsIcon}
        />
        <DashboardLink
          path={path}
          name="Insights"
          href="/dashboard/insights"
          Icon={BanknotesIcon}
        />
      </ul>
    </nav>
  );
}
function DashboardLink({
  name,
  href,
  Icon,
  path,
}: {
  name: string;
  href: string;
  path: string;
  Icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <li>
      <Button
        asChild
        className={cn(`w-full justify-start gap-x-2 focus-visible:ring-2 focus-visible:ring-gray-100`, {
          "bg-gray-800 hover:bg-gray-600 focus-visible:bg-gray-600 ": path !== href,
        })}
      >
        <Link href={href}>
          {Icon && <Icon className="w-6 h-6" />}
          {name}
        </Link>
      </Button>
    </li>
  );
}
