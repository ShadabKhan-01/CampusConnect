"use client";
import Link from "next/link";
import { MdPeopleAlt, MdEventAvailable } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineHashtag } from "react-icons/hi";
import { MdOutlineMenu } from "react-icons/md";
import { LuUserSearch } from "react-icons/lu";
import { TiGroup } from "react-icons/ti";
import { GoHome } from "react-icons/go";
import students from "@/data/students.json";
import toast, { Toaster } from 'react-hot-toast';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <>
      <div><Toaster /></div>
      <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div className="flex h-full grow flex-col">
          <div className="gap-1 px-6 flex flex-1 justify-center py-5">
            <div className="hidden md:flex flex-col w-80">
              <div className="flex h-full min-h-[700px] flex-col justify-between bg-slate-50 p-4">
                <div className="flex flex-col gap-4 ">
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                      style={{ backgroundImage: 'url("/me.png")' }}
                    ></div>
                    <h1 className="text-[#0e141b] text-base font-medium leading-normal">My Profile</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link href={'/'}>
                      <div className="flex items-center gap-3 px-3 py-2">
                        <GoHome size={24} />
                        <p className="text-[#0e141b] text-sm font-medium leading-normal">Home</p>
                      </div>
                    </Link>
                    <Link href={'/my-network'}>
                      <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf3]">
                        <MdPeopleAlt size={24} />
                        <p className="text-[#0e141b] text-sm font-medium leading-normal">My Network</p>
                      </div>
                    </Link>
                    <Link href={'/discover-students'}>
                      <div className="flex items-center gap-3 px-3 py-2">
                        <LuUserSearch size={24} />
                        <p className="text-[#0e141b] text-sm font-medium leading-normal">Discover</p>
                      </div>
                    </Link>
                    <Link href={'#'}>
                      <div className="flex items-center gap-3 px-3 py-2">
                        <AiOutlineMessage size={24} />
                        <p className="text-[#0e141b] text-sm font-medium leading-normal">Messages</p>
                      </div>
                    </Link>
                    <Link href={'#'}>
                      <div className="flex items-center gap-3 px-3 py-2">
                        <IoNotificationsOutline size={24} />
                        <p className="text-[#0e141b] text-sm font-medium leading-normal">Notifications</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <TiGroup size={24} />
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Groups</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <MdEventAvailable size={24} />
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Events</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <HiOutlineHashtag size={24} />
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Followed Hashtags</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="md:hidden">
                <Drawer>
                  <DrawerTrigger><MdOutlineMenu size={24} /></DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>CampusConnect</DrawerTitle>
                      <DrawerDescription>Select the page to be visit.</DrawerDescription>
                    </DrawerHeader>
                    <Button variant="link"><Link href={'/'}>Home</Link></Button>
                    <Button variant="link"><Link href={'/my-network'}>My Network</Link></Button>
                    <Button variant="link"><Link href={'/discover-students'}>Discover</Link></Button>
                    <Button variant="link"><Link href={'#'}>Messaging</Link></Button>
                    <Button variant="link"><Link href={'#'}>Notifications</Link></Button>
                    <DrawerFooter>
                      <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
              <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight min-w-72">Manage my network</p></div>
              <div className="pb-3">
                <div className="flex border-b border-[#d0dbe7] px-4 gap-8">
                  <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#1978e5] text-[#0e141b] pb-[13px] pt-4" href="#">
                    <p className="text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">Connections</p>
                  </a>
                  <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4e7097] pb-[13px] pt-4" href="#">
                    <p className="text-[#4e7097] text-sm font-bold leading-normal tracking-[0.015em]">Contacts</p>
                  </a>
                </div>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Invitations</h2>
              {students.slice(0, 3).map((student) => (
                <div key={student.id} className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
                  <Link href={`/students/${student.id}`} >
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                        style={{ backgroundImage: `url("${student.photo}")` }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">{student.name}</p>
                        <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">{student.major}</p>
                      </div>
                    </div>
                  </Link>
                  <div className="shrink-0">
                    <button onClick={() => toast.success('Request Accepted!')}
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit"
                    >
                      <span className="truncate">Accept</span>
                    </button>
                  </div>
                </div>

              ))}
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Your connections</h2>
              {students.slice(3, 8).map((student) => (
                <Link href={`/students/${student.id}`} key={student.id}>
                  <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                        style={{ backgroundImage: `url("${student.photo}")` }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">{student.name}</p>
                        <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">{student.major}</p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <IoIosArrowForward size={24} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}