import FilterCard from '@/Components/FilterCard'
import Header from '@/Components/Header'
import React from 'react'
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { MapPin, Search } from 'lucide-react';
import JobComponent from '@/Components/JobComponent';
export default function ListingPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <form className="flex flex-row gap-2 max-w-[800px] ml-auto mr-auto rounded-3xl shadow-xl border-4 p-3 mt-6">
        <div className=" flex-col flex md:flex-row w-full items-center md:justify-between gap-4">
          <div className="w-full flex flex-row items-center">
            <Search className=" md:w-[50px] mr-2 md:mr-0 " />

            <Input
              placeholder="Job Title"
              className="h-[50px] rounded-3xl dark:border-gray-50  "
            />
          </div>
          <div className="w-full flex flex-row items-center">
            <MapPin className="mr-2 md:mr-0 md:w-[50px] " />
            <Input
              placeholder="Location"
              className="h-[50px] rounded-3xl dark:border-gray-50"
            />
          </div>
          <Button className="w-[200px] h-[50px] rounded-3xl md:ml-2 bg-primary text-secondary font-bold">
            Search
          </Button>
        </div>
      </form>
      <main className="p-12 flex flex-row">
        <div className="w-[300px]">
          <FilterCard />
        </div>
        <div className='p-4'>
         <JobComponent/>
        </div>
      </main>
    </>
  );
}
