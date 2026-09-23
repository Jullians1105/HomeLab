import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <Sidebar />
      <div className="pl-60">
        <main className="w-full min-h-[calc(100vh-70px)] pt-[70px] bg-[#f5f7fa] p-margin-lg">
          <div className="flex flex-col w-full gap-y-space-lg">{children}</div>
        </main>
      </div>
    </>
  );
}
