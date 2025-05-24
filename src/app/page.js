"use client";
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link';


export default function ProfilePage() {

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
    if (!userData) {
      console.log("No user data found in local storage");
      router.push('/userform'); // Redirect to the form page
      return;
    }
    else {
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


  return (
    <>
      <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <Navbar />
          <div className="px-10 md:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1000px] flex-1">
              <div className="flex p-4 @container">
                <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                  <div className="flex gap-4 flex-col sm:flex-row items-center">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-20 w-32"
                      style={{ backgroundImage: 'url("/me.png")' }}
                    ></div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center sm:text-left">{userName}</p>
                      <p className="text-[#4e7097] text-base font-normal leading-normal text-center sm:text-left">{userHeadlines}</p>
                      <p className="text-[#4e7097] text-base font-normal leading-normal text-center sm:text-left">120 connections</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-3">
                <Tabs defaultValue="account" className="max-w-[700px] w-full">
                  <div className="flex border-b border-[#d0dbe7] px-4 gap-8">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4" >
                      <TabsTrigger className={'cursor-pointer'} value="account">About</TabsTrigger>
                      <TabsTrigger className={'cursor-pointer'} value="Activity">Activity</TabsTrigger>
                      <TabsTrigger className={'cursor-pointer'} value="Experience">Experience</TabsTrigger>
                      <TabsTrigger className={'cursor-pointer'} value="Skills">Skills</TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="account">
                    <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About</h2>
                    <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">{userAbout}</p>
                  </TabsContent>
                  <TabsContent value="Activity">
                    <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Activity</h2>
                    <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">{userActivity}</p>
                  </TabsContent>
                  <TabsContent value="Experience">
                    <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Experience</h2>
                    <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">{userExperience}</p>
                  </TabsContent>
                  <TabsContent value="Skills">
                    <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
                    <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">{userSkills}</p>
                  </TabsContent>
                </Tabs>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Quick Links</h2>
              <Link href={'/my-network'}>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-[#0e141b] flex items-center justify-center rounded-lg bg-[#e7edf3] shrink-0 size-10" data-icon="Users" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#0e141b] text-base font-normal leading-normal flex-1 truncate">My Network</p>
                </div>
                <div className="shrink-0"><p className="text-[#0e141b] text-base font-normal leading-normal">120</p></div>
              </div></Link>
              <Link href={'/'}>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-[#0e141b] flex items-center justify-center rounded-lg bg-[#e7edf3] shrink-0 size-10" data-icon="Note" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#0e141b] text-base font-normal leading-normal flex-1 truncate">My Posts</p>
                </div>
                <div className="shrink-0"><p className="text-[#0e141b] text-base font-normal leading-normal">5</p></div>
              </div></Link>
              <Link href={'/'}>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-[#0e141b] flex items-center justify-center rounded-lg bg-[#e7edf3] shrink-0 size-10" data-icon="UsersThree" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#0e141b] text-base font-normal leading-normal flex-1 truncate">My Groups</p>
                </div>
                <div className="shrink-0"><p className="text-[#0e141b] text-base font-normal leading-normal">3</p></div>
              </div></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}