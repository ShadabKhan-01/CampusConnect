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
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQWmW2-WZMNcoI-6dKXjyOE78YrSjwYDdYAf5yA626NfbY76KMIfRdikX4BYx-U4vRDgD-4-zpS7QOtu1iVgw5IG8q1osbCNxRgeEPSO5d1rCBNJB9r-1fmSQzPVRQaY5L6blgSVaTfTzSJQxpe29yRa35QR_0tn1spqlwV5wDq9_MMemqnFI-QiOm8ZIXPXl8iTUOawXT2fHRGvTvdEg6pUYcBh2ErqZgVqmSD_u9UGJxl9uo1OTnQpRl9uQdwlfe1zRYuxPD1sc9")' }}
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
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNgh2bAWymz9FPb3ZikS4uqvgQ2P-qbIBDgoqkflLsyQOyi4bVGAHtnaKx9LisBIPZN9oZuVpW-8wV65X3fY7es5Nv69BjpswEa5qndb4unRZWcl3e7NyOXU7gf59KQPb6hd_00uu7jHO6ClB2O7VCAWYeuecCRYAOkCfUQ9s9fdK68VmWwOvzYBh2APVrqoJoeZg5BTk-xxh9SGOIyqmiR5n0S1LcwHoC7QjpFuNZe9c4WcHxWf5U4gO5htZTRwfI2MIzoJGNxmJW")' }}
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
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuobIuXJ3ykgvKFeVrlhumYTNA6QtBAyU-EaTFEFsH1Cz6MzkKS8jgp6TOv4nw-XiERFFXYVtVY6d2P642gorgMs9ijOidg6ogNWxaIyZOtf9d62AEjob3VscuUYxcfDJwajsnHYKxH_adc1mSnqvn_-JUSTzyVsBYkeZaF-G60_ryWeZVBP_k9rr5YNmGBlrmRzAC0y-phUIvGRtjGuhwkQ9Q9RdAB2F4tTKcP6hxCfWAxxys8v9jhmgdidtxooiGDn2CeSXhJ-P6")' }}

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
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQk5lQjzX4B3dnwf9bQg_f_Ri_db4Hpru99h0_U1hf7pUBCFic0UEaWR3hnDt0lJAgWxmbogNyx5dPEAr3HFCZNDMdVrm6CK-XpxXJyIfnB9J_S7MoNBIf7e9UcTbEHVkL-oIc4PaFoBD-5eJtgFFo9ONXvIqarSvgyY8R8YxO5di57wec_ege5CEEOkRe2eR0HQLrqPF4EvOuegcDqmUYL_JNHDEPsgjQrF8Vvt2d1EicbW9mavC2jbkm1swQHE04jeucpdpjVoam")' }}
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
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXVcX0ftMTWc_rhnlL9vPix5P2gL5slZukDe4rY6g7MkOeTrkSzDeXHtl5xnPGiwRBmlbuMNie0daWuLI1uxGnnlccG597YXO_G9g0teglTfvcmRiFEUhh4zRR09nx17i0osUl5wJY9JgBJASEwtNyYBkTPn4T3aASzRucxBMQKTjNimHB-E8klUR_OET-5Ofpu_1Z6RASFdXckKek5TMLiNhhbnNxQA3HvfTCux1X8e47x3HDld_tTnj9NNp2fNKVRQf4dcwLRLAS")' }}
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
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_kKqo-UKPSYUIl8lTN8j2LGiCp_MuIp_Ef-u-qTcQMjyX-WFE_vvzY5mY7lccjqManrFLUU0fPrfom_iqf8hvgA6U0-lo4H3JBO4LRpoCHaah7WvR49QXzDWEpgdwAAUpOsThwgx44E5W5jbg0f-up_hywBViGkn72deUPYZ8M6yotMmsGZbLd0lrnhJnnH3x89KwCXR2yjSvuKtMYnct0xEHXUo17ZzoAyUbqwFXGkY0wSsmmy5g0qFDcZjFZKQlJeLhNGQmlSHo")' }}
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