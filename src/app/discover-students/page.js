import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function StudentProfilesPage() {
    return (
        <>
            <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
                <div className="layout-container flex h-full grow flex-col">
                    <Navbar />
                    <div className="px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <div className="flex flex-wrap justify-between gap-3 p-4">
                                <div className="flex min-w-72 flex-col gap-3">
                                    <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight">Student Profiles</p>
                                    <p className="text-[#4e7097] text-sm font-normal leading-normal">Connect with peers based on interests, department, or skills.</p>
                                </div>
                            </div>
                            <div className="px-4 py-3">
                                <label className="flex flex-col min-w-40 h-12 w-full">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                        <div
                                            className="text-[#4e7097] flex border-none bg-[#e7edf3] items-center justify-center pl-4 rounded-l-lg border-r-0"
                                            data-icon="MagnifyingGlass"
                                            data-size="24px"
                                            data-weight="regular"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <input
                                            placeholder="Search by name or interests"
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-full placeholder:text-[#4e7097] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                            defaultValue=""
                                        />
                                    </div>
                                </label>
                            </div>
                            <div className="flex gap-3 p-3 flex-wrap pr-4">
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-2">
                                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Interests</p>
                                    <div className="text-[#0e141b]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                        </svg>
                                    </div>
                                </button>
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-2">
                                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Department</p>
                                    <div className="text-[#0e141b]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                        </svg>
                                    </div>
                                </button>
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-2">
                                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Skills</p>
                                    <div className="text-[#0e141b]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                                <div className="flex flex-col gap-3 text-center pb-3">
                                    <div className="px-4">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                                            style={{ backgroundImage: 'url("/Sarah_Chen.png")' }}
                                        ></div>
                                    </div>
                                    <div>
                                        <p className="text-[#0e141b] text-base font-medium leading-normal">Sarah Chen</p>
                                        <p className="text-[#4e7097] text-sm font-normal leading-normal">Computer Science, Stanford</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 text-center pb-3">
                                    <div className="px-4">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                                            style={{ backgroundImage: 'url("/David_Lee.png")' }}
                                        ></div>
                                    </div>
                                    <div>
                                        <p className="text-[#0e141b] text-base font-medium leading-normal">David Lee</p>
                                        <p className="text-[#4e7097] text-sm font-normal leading-normal">Business Administration, Harvard</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 text-center pb-3">
                                    <div className="px-4">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                                            style={{ backgroundImage: 'url("/Emily_Rodriguez.png")' }}

                                        ></div>
                                    </div>
                                    <div>
                                        <p className="text-[#0e141b] text-base font-medium leading-normal">Emily Rodriguez</p>
                                        <p className="text-[#4e7097] text-sm font-normal leading-normal">Psychology, Yale</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 text-center pb-3">
                                    <div className="px-4">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                                            style={{ backgroundImage: 'url("/Michael_Brown.png")' }}
                                        ></div>
                                    </div>
                                    <div>
                                        <p className="text-[#0e141b] text-base font-medium leading-normal">Michael Brown</p>
                                        <p className="text-[#4e7097] text-sm font-normal leading-normal">Engineering, MIT</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 text-center pb-3">
                                    <div className="px-4">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                                            style={{ backgroundImage: 'url("/Jessica_Wilson.png")' }}
                                        ></div>
                                    </div>
                                    <div>
                                        <p className="text-[#0e141b] text-base font-medium leading-normal">Jessica Wilson</p>
                                        <p className="text-[#4e7097] text-sm font-normal leading-normal">Biology, UCLA</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 text-center pb-3">
                                    <div className="px-4">
                                        <div
                                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                                            style={{ backgroundImage: 'url("/Kevin_Garcia.png")' }}
                                        ></div>
                                    </div>
                                    <div>
                                        <p className="text-[#0e141b] text-base font-medium leading-normal">Kevin Garcia</p>
                                        <p className="text-[#4e7097] text-sm font-normal leading-normal">Economics, UChicago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}