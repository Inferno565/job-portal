import CardFlow from "@/Components/CardFlow";
import DashSearch from "@/Components/DashSearch";
import Header from "@/Components/Header";
import StatCard from "@/Components/StatCard";
import ThemeToggle from "@/Components/ThemeToggle";
import React from "react";

export default function HomePage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="p-3 bg-secondary">
        <div className="md:p-10">
          <DashSearch />
        </div>

        {/* Start of stats div */}
        <div className="flex flex-col md:flex-row gap-3 p-4 md:justify-center items-center">
          <StatCard
            className="sm:col-span-2"
            title={"Users"}
            value={500}
            path={"src/assets/user.jpg"}
          />
          <StatCard
            className="sm:col-span-2"
            title={"Recruiters"}
            value={500}
            path={"src/assets/hr.jpg"}
          />
          <StatCard
            className="sm:col-span-2"
            title={"Placed"}
            value={500}
            path={"src/assets/accept.jpg"}
          />
        </div>
        {/* End of stats div */}

        <div className="w-full">
          <CardFlow />
        </div>

      </main>
    </>
  );
}
