import { Briefcase, Building, Clock, DollarSign, MapPin, Share2 } from "lucide-react";
import React from "react";

const trendingJobs = [
  {
    title: "Senior React Developer",
    company: "TechCorp Inc.",
    postedAgo: "2 days ago",
    type: "Full-time",
    time: "9:00 AM - 5:00 PM",
    ctc: "$120,000 - $150,000",
    experience: "5+ years",
    location: "San Francisco, CA",
    description:
      "We're seeking an experienced React developer to join our dynamic team and help build cutting-edge web applications.",
  },
  {
    title: "UX/UI Designer",
    company: "DesignMasters",
    postedAgo: "1 week ago",
    type: "Contract",
    time: "Flexible hours",
    ctc: "$80,000 - $100,000",
    experience: "3-5 years",
    location: "Remote",
    description:
      "Join our creative team to design intuitive and visually appealing user interfaces for web and mobile applications.",
  },
  {
    title: "Data Scientist",
    company: "AI Innovations",
    postedAgo: "3 days ago",
    type: "Full-time",
    time: "9:00 AM - 6:00 PM",
    ctc: "$130,000 - $160,000",
    experience: "4+ years",
    location: "New York, NY",
    description:
      "We're looking for a data scientist to help us develop machine learning models and analyze large datasets.",
  },
  {
    title: "DevOps Engineer",
    company: "CloudSystems",
    postedAgo: "5 days ago",
    type: "Full-time",
    time: "8:00 AM - 4:00 PM",
    ctc: "$110,000 - $140,000",
    experience: "3+ years",
    location: "Austin, TX",
    description:
      "Join our team to manage and improve our cloud infrastructure, CI/CD pipelines, and deployment processes.",
  },
  {
    title: "Mobile App Developer",
    company: "AppWizards",
    postedAgo: "1 day ago",
    type: "Part-time",
    time: "Flexible hours",
    ctc: "$70,000 - $90,000",
    experience: "2+ years",
    location: "Chicago, IL",
    description:
      "We're seeking a talented mobile app developer to create innovative iOS and Android applications.",
  },
  {
    title: "Product Manager",
    company: "InnovateTech",
    postedAgo: "4 days ago",
    type: "Full-time",
    time: "9:00 AM - 5:00 PM",
    ctc: "$100,000 - $130,000",
    experience: "5+ years",
    location: "Seattle, WA",
    description:
      "Lead the development of new products from conception to launch, working closely with cross-functional teams.",
  },
];



export default function JobComponent() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-3xl font-bold text-gray-900 mb-6">Trending Jobs</h2> */}
        <div className="flex flex-col gap-3">
          {trendingJobs.map((job, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-400 rounded-lg p-6 ">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <span className="text-sm text-gray-500">{job.postedAgo}</span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Building className="w-4 h-4 mr-2" />
                  <span>{job.type}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{job.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>
                    CTC: <b>{job.ctc}</b>
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>
                    Exp: <b>{job.experience}</b>
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>
                    <b>{job.location}</b>
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <div className="flex justify-between items-center">
                {/* <Link
                  href={/artisan/jobPortal/${encodeURIComponent(job.title)}}
                > */}
                <button className="bg-[#1A2B4A] hover:bg-[#1A2B4A]/90 text-white px-4 py-2 rounded transition duration-300">
                  View Job
                </button>
                {/* </Link> */}
                <button className="text-blue-900 hover:text-blue-700 transition duration-300 flex items-center">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share Job
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
