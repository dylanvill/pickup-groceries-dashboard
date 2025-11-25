"use client";

import { Search } from "lucide-react";
import { Button } from "@/@shadcn/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/@shadcn/components/ui/form";
import { Input } from "@/@shadcn/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Form schema for validation
const searchFormSchema = z.object({
  query: z.string().min(0).max(100),
});

type SearchFormValues = z.infer<typeof searchFormSchema>;

export function SearchBar() {
  // Form setup with react-hook-form and zod validation
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: "",
    },
  });

  // Placeholder callback - for future integration
  const onSubmit = (values: SearchFormValues) => {
    // TODO: Implement search logic
    console.log("Search submitted:", values.query);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex w-full max-w-2xl mx-auto">
        <div className="relative flex-1 flex">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Search for groceries..."
                    className="pr-20 h-12 text-base"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-10 px-4">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
