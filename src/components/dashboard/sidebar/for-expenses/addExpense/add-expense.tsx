"use client";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ExpenseForm from "./expense-form";
export default function AddExpense() {
  return (
    <section className="space-y-2">
      <h3 className="flex items-center gap-x-2 text-gray-100">
        Actions
        <CurrencyDollarIcon className="w-6 h-6" />
      </h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="expense">
          <AccordionTrigger>
            <h4 className="text-gray-400">Add</h4>
          </AccordionTrigger>
          <AccordionContent>
            <ExpenseForm />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
