import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

//TODO: Correct section height to accomodate for header height: 68px
export default function Hero() {
  return (
    <section className="min-h-screen pt-12 md:pt-24 lg:pt-32 bg-gray-900">
      <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center md:items-start gap-y-4">
            <h1 className="lg:leading-tighter text-wrap text-3xl text-white/90 font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] min-w-0">
              Track Your Expenses <span className="text-accent italic">Effortlessly</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-center text-balance lg:text-pretty md:text-left text-gray-400 md:text-xl">
              Take control of your finances with our easy-to-use expense
              tracker. Get started today!
            </p>
            <Button asChild variant={"outline"} className="w-fit mt-4">
                <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
          <div className="overflow-hidden border rounded-xl">
            <Image
              alt="Expense Tracker Illustration"
              className="mx-auto aspect-[1/1]  object-cover"
              height="500"
              src=""
              width="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
