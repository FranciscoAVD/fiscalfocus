export default function HowItWorks() {
    return (
      <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl  font-bold tracking-tighter md:text-4xl/tight">
              How It Works
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Getting started with our expense tracker is as easy as <span className="italic">1-2-3</span>.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Bubble num={1} text={"Sign up for a free account."}/>
            <Bubble num={2} text={"Add your expenses and categorize them."}/>
            <Bubble num={3} text={"Track your spending and save money!"}/>
          </div>
        </div>
      </section>
    );
  }
  
  function Bubble(props:{num: number, text: string}) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent text-white font-bold text-2xl">
          {props.num}
        </div>
        <p className="text-gray-500 w-[70%]">
          {props.text}
        </p>
      </div>
    );
  }
  