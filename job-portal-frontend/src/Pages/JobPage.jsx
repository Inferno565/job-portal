import React from "react";


import Header from "@/Components/Header";
import JobCard from "@/Components/JobCard";
import CompanyInfoCard from "@/Components/CompanyInfoCard";
import JobComponent from "@/Components/JobComponent";
// import { Textarea } from "@/components/ui/textarea";
export default function JobPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="flex flex-col lg:flex-row gap-6 m-7">
          <div>
            <JobCard />
          </div>
          <div>
            <CompanyInfoCard />
          </div>
        </div>
        <div className="mr-auto ml-auto p-3 lg:p-14">
          <h1 className="p-2 text-xl">More jobs like this</h1>
          <JobComponent />
        </div>
      </main>
    </>
  );
}
