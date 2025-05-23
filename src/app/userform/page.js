"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";


export default function Page() {

  const [userName, setUserName] = useState("");
  const [userCollageId, setUserCollageId] = useState("");
  const [userHeadlines, setUserHeadlines] = useState("");
  const [userAbout, setUserAbout] = useState("");
  const [userActivity, setUserActivity] = useState("");
  const [userExperience, setUserExperience] = useState("");
  const [userSkills, setUserSkills] = useState("");
  const router = useRouter();

    useEffect(() => {
    const userData = localStorage.getItem("campusConnet_userData");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setUserName(parsedData.name);
      setUserCollageId(parsedData.collageId);
      setUserHeadlines(parsedData.headlines);
      setUserAbout(parsedData.about);
      setUserActivity(parsedData.activity);
      setUserExperience(parsedData.experience);
      setUserSkills(parsedData.skills);
    }

  }, [])

  const handleSubmit = () => {

    if (!userName || !userCollageId || !userHeadlines || !userAbout || !userActivity || !userExperience || !userSkills) {
      toast.error('Please fill all the fields');
      return;
    }

    const userData = {
      name: userName,
      collageId: userCollageId,
      headlines: userHeadlines,
      about: userAbout,
      activity: userActivity,
      experience: userExperience,
      skills: userSkills
    };

    console.log(userName)
    console.log(userData);
    localStorage.setItem("campusConnet_userData", JSON.stringify(userData));
    toast.success('Data saved!');
    setTimeout(() => {
      router.push('/'); // Redirect to the home page
    }, 1000);
  }

  return (
    <>
      <div><Toaster /></div>
      <div
        className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
        style={{
          '--select-button-svg': `url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(78,112,151)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')`,
          fontFamily: 'Inter, "Noto Sans", sans-serif',
        }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
            <div className="flex items-center gap-4 text-[#0e141b]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
              </div>
              <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">CampusConnect</h2>
            </div>
            <Button onClick={handleSubmit} className={'cursor-pointer'}>Submit</Button>
          </header>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="flex items-center flex-col py-5 ">
              <h2 className="text-[#0e141b] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Tell us about yourself</h2>
              <div className="flex w-sm gap-4 px-4 py-3">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" id="name" placeholder="Enter your Full Name" />
                </div>
              </div>
              <div className="flex w-sm gap-4 px-4 py-3">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="collage-id">Collage ID</Label>
                  <Input value={userCollageId} onChange={(e) => setUserCollageId(e.target.value)} type='text' id="collage-id" placeholder="Collage ID" />
                </div>
              </div>
              <div className="flex w-sm gap-4 px-4 py-3">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="Headlines">Headlines</Label>
                  <Input value={userHeadlines} onChange={(e) => setUserHeadlines(e.target.value)} type="text" id="Headlines" placeholder="Headlines" />
                </div>
              </div>
              <div className="flex w-sm gap-4 px-4 py-3">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="about">About</Label>
                  <Textarea value={userAbout} onChange={(e) => setUserAbout(e.target.value)} placeholder="Type your message here." id="about" />
                </div>
              </div>
              <div className="flex w-sm gap-4 px-4 py-3">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="Activity">Activity</Label>
                  <Textarea value={userActivity} onChange={(e) => setUserActivity(e.target.value)} placeholder="Type your Activities here." id="Activity" />
                </div>
              </div>
              <div className="flex w-sm gap-4 px-4 py-3">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="Experience">Experience</Label>
                  <Textarea value={userExperience} onChange={(e) => setUserExperience(e.target.value)} placeholder="Type your Experience here." id="Experience" />
                </div>
              </div>
              <div className="flex w-sm gap-4 px-4 py-3">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="Skills">Skills</Label>
                  <Textarea value={userSkills} onChange={(e) => setUserSkills(e.target.value)} placeholder="Type your Skills here." id="Skills" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}