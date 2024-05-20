"use client";
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFilterStore } from "@/stores/filter-store";
const formSchema = z.object({
  min: z.number().min(0, "Minimum value is zero."),
  max: z.number().max(10000, "Maximum value is 10,000."),
});

type TFilterForm = z.infer<typeof formSchema>;

//TODO: max should be set by the largest expense in the month
export default function ExpenseFilter({ className }: { className?: string }) {
  const minValue = useFilterStore((state) => state.minValue);
  const maxValue = useFilterStore((state) => state.maxValue);
  const setMin = useFilterStore((state) => state.setMinValue);
  const setMax = useFilterStore((state) => state.setMaxValue);

  const form = useForm<TFilterForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      min: minValue,
      max: maxValue,
    },
  });
  function submitFilterForm(values: TFilterForm) {
    setMin(values.min);
    setMax(values.max);
    console.log(values)
  }
  return (
    <section className={cn(className)}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitFilterForm)}
          className="grid grid-cols-2 gap-2"
        >
          <FormField
            control={form.control}
            name="min"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-100">Min</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0"
                    {...field}
                    onChange={(event) =>
                      field.onChange(
                        !isNaN(event.target.valueAsNumber)
                          ? event.target.valueAsNumber
                          : 0
                      )
                    }
                  />
                </FormControl>
                <FormDescription>
                  Items in your table below this amount will not show.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="max"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-100">Max</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="10000"
                    {...field}
                    onChange={(event) =>
                      field.onChange(
                        !isNaN(event.target.valueAsNumber)
                          ? event.target.valueAsNumber
                          : 0
                      )
                    }
                  />
                </FormControl>
                <FormDescription>
                  Items in your table above this amount will not show.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="col-span-2">
            Apply
          </Button>
        </form>
      </Form>
    </section>
  );
}
