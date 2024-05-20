import ExpensesSidebarItems from "./for-expenses/for-expenses";
import SidebarNav from "./nav";

export default function Sidebar() {
  return (
    <section className="flex flex-col gap-y-8 p-4 h-screen overflow-y-scroll bg-gray-900">
      <h1 className="text-white/90 font-semibold">
        <span className="text-accent text-3xl">FiscalFocus</span> <br />{" "}
        Dashboard
      </h1>
      <SidebarNav />
      <ExpensesSidebarItems />
    </section>
  );
}


