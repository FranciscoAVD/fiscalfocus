"use client";

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useFilterStore } from '@/stores/filter-store';

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ] as const;
export default function MonthFilter() {
  return (
    
        <section className="grid grid-cols-3 gap-2">
        {months.map((m) => (
          <MonthButton key={m} name={m} />
        ))}
      </section>
    
  )
}

function MonthButton({ name }: { name: string }) {
    const active = useFilterStore((state) => state.active);
    const set = useFilterStore((state) => state.setActive);
  
    return (
      <Button
        variant={"outline"}
        onClick={() => set(name)}
        className={cn("rounded-full", {
          "bg-accent hover:bg-accent border-accent": active === name,
          "bg-transparent hover:bg-gray-700 border-gray-700 hover:border-gray-700 focus-visible:bg-gray-700":
            active !== name,
        })}
      >
        {name}
      </Button>
    );
  }