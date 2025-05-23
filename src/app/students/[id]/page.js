import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function UserProfilePage() {
  return (
    <>
      <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <Navbar />
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex p-4 @container">
                <div className="flex w-full flex-col gap-4 items-center">
                  <div className="flex gap-4 flex-col items-center">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3Y86lbs6HlVJxxlX7WgfqsCdx8Qic7lDN6jy9ePjzgIyzxZR7t4-jMtkcLbornc4ZKTL8IRkSQH7Fo_qEBprRgq9ffvgemRsD0qAsjZNpA_79EHIqqZvmRtS4QMR3Akbvhe5AMwh-qxgjLNS6xKRyUH4GtxjKiBc_krbXZY4wUMUBU3935fDYLDEt1JY68iL6V5-xRLdPDtMICnL0qDnN8QR93n6aCCm2mNMEiz644i_OVMlqMwlL4R8fupb4DbT8kvKsHb5QAi2K")' }}
                    ></div>
                    <div className="flex flex-col items-center justify-center justify-center">
                      <p className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Sophia Carter</p>
                      <p className="text-[#4e7097] text-base font-normal leading-normal text-center">Computer Science Student at State University | Aspiring Software Engineer</p>
                      <p className="text-[#4e7097] text-base font-normal leading-normal text-center">100 connections</p>
                    </div>
                  </div>
                  <button
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto"
                  >
                    <span className="truncate">Connect</span>
                  </button>
                </div>
              </div>
              <div className="pb-3">
                <div className="flex border-b border-[#d0dbe7] px-4 gap-8">
                  <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#1978e5] text-[#0e141b] pb-[13px] pt-4" href="#">
                    <p className="text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">About</p>
                  </a>
                  <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4e7097] pb-[13px] pt-4" href="#">
                    <p className="text-[#4e7097] text-sm font-bold leading-normal tracking-[0.015em]">Activity</p>
                  </a>
                  <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4e7097] pb-[13px] pt-4" href="#">
                    <p className="text-[#4e7097] text-sm font-bold leading-normal tracking-[0.015em]">Experience</p>
                  </a>
                </div>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About</h2>
              <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
                I'm a passionate computer science student at State University, specializing in software development. I'm eager to connect with fellow students and professionals in
                the tech industry to share ideas and collaborate on exciting projects.
              </p>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Interests</h2>
              <div className="flex gap-3 p-3 flex-wrap pr-4">
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                  <p className="text-[#0e141b] text-sm font-medium leading-normal">Software Development</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                  <p className="text-[#0e141b] text-sm font-medium leading-normal">Machine Learning</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                  <p className="text-[#0e141b] text-sm font-medium leading-normal">Web Development</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                  <p className="text-[#0e141b] text-sm font-medium leading-normal">Data Science</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                  <p className="text-[#0e141b] text-sm font-medium leading-normal">Artificial Intelligence</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                  <p className="text-[#0e141b] text-sm font-medium leading-normal">Cybersecurity</p>
                </div>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
              <div className="flex gap-3 p-3 flex-wrap pr-4">
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                  <p className="text-[#0e141b] text-sm font-medium leading-normal">Python</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                  <p className="text-[#0e141b] text-sm font-medium leading-normal">Java</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                  <p className="text-[#0e141b] text-sm font-medium leading-normal">JavaScript</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                  <p className="text-[#0e141b] text-sm font-medium leading-normal">C++</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                  <p className="text-[#0e141b] text-sm font-medium leading-normal">SQL</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
                  <p className="text-[#0e141b] text-sm font-medium leading-normal">React</p>
                </div>
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
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbEzmgdcPShmEVHUq508ifAnW8hd4W0YKo4-yIvtGykY7g7OB0nkHTQFc8shWxj9qPXioYRx-gNia4thDe2SFnJxEksbb73N_kZ8G4_Yvr3LtdSTfGTyCxp6McBvfdOQVBa7JNeTiP-ZDSoUe8vNRHXssfCMl0IEhCsc-brJ0w9M3LW8YdAw0q2Xns8K4v5wFdxPFRkvInHM4pvWziRTRhQ_6KlqHtT5V5LJRKeY3T13p1LxCLhfdVJ7OCN48fRIV-A-zYHyUFYkRi")' }}
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
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3CpsnyBcbGmdTCM9FhHBBo61aAGB4t6MSampAEUH5fD9LC9ZD8kFWg86LrY0288IX7IXp_4pu0KtTZIAOE9NHVScv4YjAfBS3W6RXhFBm-qpYHVlbyvbkMwmLiwg8Ptxg4mkTekC63rLAbFoFYrbxV3vDLeWY57vsLfFr-fRRV5q1L9e83u86bZ4Ns2n3LphVKX2Fi1cKVyox4iNOzx0n8T7yQfKOIv2aeGth6hBanLWyHA6Dx4rQwH9t1ZdgvQwD6-PVc8_wpdGG")' }}
                  ></div>
                </div>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Education</h2>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBztjs-XOQfrBmRPWHsIdz0nmNJYSzEvdBb5Plok_TESstCls6-QnSIIAaY6-twhtvVQruDHr8RqKF7sEhfEkQNNw_hmUuhoNzkOa4dXbzY0mSfqFkSFVT3ODcbljgVHBG2hSFIoqDniFIv4ieY1ov9M9Bc2OZwO25LemkYEYzcxhXDXV5QCwknvsnj6gKGkmSl2gUAnAYVAbBgQ1uVWiq0AY1t68dbjDf9TxmaZRBu1z5Rg-CLV0Hqw9Y5cyp3vjDZ4eANQKbIZjo1")' }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">State University</p>
                  <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">Computer Science</p>
                </div>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact</h2>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
                <div className="text-[#0e141b] flex items-center justify-center rounded-lg bg-[#e7edf3] shrink-0 size-12" data-icon="Envelope" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">Email</p>
                  <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">sophia.carter@email.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
                <div className="text-[#0e141b] flex items-center justify-center rounded-lg bg-[#e7edf3] shrink-0 size-12" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">LinkedIn</p>
                  <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">linkedin.com/in/sophiacarter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}