import React from "react";


import Header from "@/Components/Header";
import JobCard from "@/Components/JobCard";
import CompanyInfoCard from "@/Components/CompanyInfoCard";
// import { Textarea } from "@/components/ui/textarea";
export default function JobPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col lg:flex-row gap-6 m-7">
        <div>
          <JobCard />
        </div>
        <div>
          <CompanyInfoCard />
        </div>
      </main>
    </>
  );
}
