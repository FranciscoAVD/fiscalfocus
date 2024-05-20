import { cn } from "@/lib/utils";

export default function Features() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="mx-auto container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose <span className="text-accent">FiscalFocus</span> ?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our expense tracker is packed with features designed to help you
              take control of your finances.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <Feature
            title="Easy to Use"
            description="Our intuitive interface makes tracking your expenses a breeze."
            className="mx-auto lg:mx-0"
          />
          <Feature
            title="Detailed Reports"
            description="Get detailed reports to gain insights into your spending habits."
            className="mx-auto lg:mx-0"
          />
          <Feature
            title="Secure"
            description="Your data is encrypted and stored securely."
            className="sm:col-span-1 md:col-span-2 lg:col-span-1 mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
}

function CheckCircleIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function Feature({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn(`space-y-1 ${className}`)}>
      <div className="flex items-center justify-center gap-x-1">
        <CheckCircleIcon className="h-6 w-6 text-accent" />
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </div>
  );
}
