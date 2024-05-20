"use client";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import ExpenseFilter from "./expense-filter";
import MonthFilter from "./month-filter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Filters() {
  return (
    <section className="space-y-2">
      <h3 className="flex items-center gap-x-2 text-gray-100">
        Filters <span className="sr-only">Adjustment Icon</span>
        <AdjustmentsHorizontalIcon className="w-6 h-6" aria-hidden="true" />
      </h3>
      <Accordion type="multiple">
        <AccordionItem value="month">
          <AccordionTrigger>
            <h4 className="text-gray-400">By Month</h4>
          </AccordionTrigger>
          <AccordionContent>
            <MonthFilter />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="range">
          <AccordionTrigger>
            <h4 className="text-gray-400">Range</h4>
          </AccordionTrigger>
          <AccordionContent>
            <ExpenseFilter className="" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* <div className="h-[1px] bg-gray-700 mb-4 mt-1" /> */}
    </section>
  );
}
