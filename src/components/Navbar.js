import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 text-[#0e141b]">
                    <div className="size-4">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
                    </div>
                    <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">CampusConnect</h2>
                </div>
                <div className="flex items-center gap-9">
                    <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="/">Home</Link>
                    <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="/my-network">My Network</Link>
                    <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="/discover-students">Find</Link>
                    <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Messaging</Link>
                    <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Notifications</Link>
                </div>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <label className="flex flex-col min-w-40 !h-10 max-w-64">
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
                            placeholder="Search"
                            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-full placeholder:text-[#4e7097] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                            defaultValue=""
                        />
                    </div>
                </label>
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{ backgroundImage: 'url("/Sophia_Chen.png")' }}
                ></div>
            </div>
        </header>
    )
}

export default Navbar
