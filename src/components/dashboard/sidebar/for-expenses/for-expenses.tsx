"use client";
import { usePathname } from "next/navigation";
import AddExpense from "./addExpense/add-expense";
import Filters from "./filters/filters";
import { cn } from "@/lib/utils";

export default function ExpensesSidebarItems() {
    const path = usePathname();
    console.log(path);
  return (
    <div className={cn(`space-y-8 ${path !== "/dashboard/expenses" ? "hidden" : ""}`)}>
      <Filters />
      <AddExpense />
    </div>
  )
}
