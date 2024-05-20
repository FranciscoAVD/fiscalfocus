"use client";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
export default function ActionButtons() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="flex gap-x-2">
      {!isAuthenticated ? (
        <>
          <li>
            <Button disabled={isLoading} asChild>
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </li>
          <li>
            <Button variant={"link"} disabled={isLoading} asChild>
              <Link href={"/sign-in"}>Log in</Link>
            </Button>
          </li>
        </>
      ) : (
        <li>
          <Button asChild>
            <Link href={"/dashboard/expenses"}>Dashboard</Link>
          </Button>
        </li>
      )}
    </div>
  );
}
