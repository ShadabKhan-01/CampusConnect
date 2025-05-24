import Navbar from '@/components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SendRequest from '@/components/SendRequest';
import students from '@/data/students.json';
import { TfiEmail } from "react-icons/tfi";
import { CiLinkedin } from "react-icons/ci";
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function UserProfilePage({ params }) {

  const { id } = await params;

  const student = students.find((student) => student.id === parseInt(id));

  if (!student) return notFound();

  return (
    <>
      <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <Navbar />
          <div className="px-10 md:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex p-4 @container">
                <div className="flex w-full flex-col gap-4 items-center">
                  <div className="flex gap-4 flex-col items-center">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                      style={{ backgroundImage: `url("${student.photo}")` }}
                    ></div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">{student.name}</p>
                      <p className="text-[#4e7097] text-base font-normal leading-normal text-center">{student.headline}</p>
                      <p className="text-[#4e7097] text-base font-normal leading-normal text-center">{student.department}</p>
                      <p className="text-[#4e7097] text-base font-normal leading-normal text-center">{student.connections} connections</p>
                    </div>
                  </div>
                  <SendRequest />
                </div>
              </div>
              <div className="pb-3">
                <div className="flex border-b border-[#d0dbe7] px-4 gap-8">
                  <Tabs defaultValue="About" >
                    <div className="flex border-b border-[#d0dbe7] gap-8 max-w-[400px]">
                      <TabsList className="grid w-full grid-cols-3" >
                        <TabsTrigger className={'cursor-pointer'} value="About">About</TabsTrigger>
                        <TabsTrigger className={'cursor-pointer'} value="Activity">Activity</TabsTrigger>
                        <TabsTrigger className={'cursor-pointer'} value="Experience">Experience</TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent value="About">
                      <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About</h2>
                      <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">{student.about}</p>
                    </TabsContent>
                    <TabsContent value="Activity">
                      <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Activity</h2>
                      <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">{student.activity}</p>
                    </TabsContent>
                    <TabsContent value="Experience">
                      <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Experience</h2>
                      <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">{student.experience}</p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Interests</h2>
              <div className="flex gap-3 p-3 flex-wrap pr-4">
                {student.interests.map((interest, index) => (
                  <div key={index} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">{interest}</p>
                  </div>
                ))}
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
              <div className="flex gap-3 p-3 flex-wrap pr-4">
                {student.skills.map((skills, index) => (
                  <div key={index} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">{skills}</p>
                  </div>
                ))}
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Projects</h2>
              <div className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-lg">
                  <div className="flex flex-col gap-1 flex-[2_2_0px]">
                    <p className="text-[#4e7097] text-sm font-normal leading-normal">Personal Project</p>
                    <p className="text-[#0e141b] text-base font-bold leading-tight">Portfolio Website</p>
                    <p className="text-[#4e7097] text-sm font-normal leading-normal">Developed a personal portfolio website using React to showcase my projects and skills.</p>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                    style={{ backgroundImage: 'url("/project1.png")' }}
                  ></div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-lg">
                  <div className="flex flex-col gap-1 flex-[2_2_0px]">
                    <p className="text-[#4e7097] text-sm font-normal leading-normal">Course Project</p>
                    <p className="text-[#0e141b] text-base font-bold leading-tight">E-commerce Platform</p>
                    <p className="text-[#4e7097] text-sm font-normal leading-normal">Collaborated with a team to build an e-commerce platform using Java and Spring Boot.</p>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                    style={{ backgroundImage: 'url("/project2.png")' }}
                  ></div>
                </div>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Education</h2>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                  style={{ backgroundImage: 'url("/university.png")' }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">State University</p>
                  <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">{student.department}</p>
                </div>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact</h2>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
                <div className="text-[#0e141b] flex items-center justify-center rounded-lg bg-[#e7edf3] shrink-0 size-12" data-icon="Envelope" data-size="24px" data-weight="regular">
                  <TfiEmail size={24} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">Email</p>
                  <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2"><Link href={"mailto:iam.shadab.khan.1001@gmail.com"}>Student@email.com</Link></p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
                <div className="text-[#0e141b] flex items-center justify-center rounded-lg bg-[#e7edf3] shrink-0 size-12" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
                  <CiLinkedin size={24} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">LinkedIn</p>
                  <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2"><Link href={'https://www.linkedin.com/in/devshadabkhan/'} target='_blank'>linkedin.com/in/student</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}