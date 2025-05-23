import Head from 'next/head';

export default function NetworkPage() {
  return (
    <>
      <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <div className="gap-1 px-6 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-80">
              <div className="flex h-full min-h-[700px] flex-col justify-between bg-slate-50 p-4">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAo60wUzJn6Ho7xtPfaqIDyspPxS-H4yb19fw-wFIaHvoVENUyJmyXfRtxGSZUevg9W5TlLAKHgZ6elTm3U0hbOYHPyEB9OdF9Rr9eAA3eojUJ7OF2KIx9Ni3FXOtW5BNQCEVOrD5TcmFf7ThOD0lCmznHPWFAqBnRQVyPmYaaSxN0CR-tehajdyufMI5GZiijkoHu6m6qRcOL1YJDdmtBFO7oSjZzafbnOlPMPANB7sa4IqixIRDV1Zx8EhpuHjcrBiH7CdzKv_LLv")' }}
                    ></div>
                    <h1 className="text-[#0e141b] text-base font-medium leading-normal">Sophia Chen</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 px-3 py-2">
                      <div className="text-[#0e141b]" data-icon="House" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-[#0e141b] text-sm font-medium leading-normal">Home</p>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf3]">
                      <div className="text-[#0e141b]" data-icon="Users" data-size="24px" data-weight="fill">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-[#0e141b] text-sm font-medium leading-normal">My Network</p>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2">
                      <div className="text-[#0e141b]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-[#0e141b] text-sm font-medium leading-normal">Jobs</p>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2">
                      <div className="text-[#0e141b]" data-icon="ChatCircleDots" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-[#0e141b] text-sm font-medium leading-normal">Messages</p>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2">
                      <div className="text-[#0e141b]" data-icon="Bell" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-[#0e141b] text-sm font-medium leading-normal">Notifications</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0e141b]" data-icon="UsersThree" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Groups</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0e141b]" data-icon="Calendar" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Events</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0e141b]" data-icon="Hash" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0e141b] text-sm font-medium leading-normal">Followed Hashtags</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
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
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDv-bqlJ_gvyeKZ3AkLXIuMaksvo4REJgfv8f6lB6L1wfWLOQwZcUhFP5y2ni_bFFbY8ht8CUrM8LQ5m0Xktq-EgsXo5_F4ieFGtQfLPmy21xS33IPOxbCan1iYWWslnW5L8Z_xSKouuBj4OoYpdkZdArkUTTVn4YREsFqO6XBPZu3LRnC6dnv6GFVRyqArdMZO9AVOtT38250tICPsq1uWfhLv3jU-JfiIoKxg9NFeSb9py_xoX4tOnBl4_MAt50h2OJByIL1QIRop")' }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">Ethan Carter</p>
                    <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">Software Engineer Intern at Tech Solutions Inc.</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Accept</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGOYL2tJVtWEjoYI3LM2k7vef2zV-7XjwBFWw2DEI1JM8e8AsyRMMO7agnSbAWZw-PV4hWXb0BZn_5Yq7Peku-QQxNbZ-iSBSwmeuP3UZ_mBEwcec8Q6N4JCjBoG-npzSnFn8qSuNfooZ83E1OVxnM4TPHFFt3MxzleyrQQ3xqP9DOvgF_6o721ILeFG0XAkxnFEF_L87_Jk1EEAdcZhzo38GGCP87Ug7wQa2hlBXHqIytAur3NYXEnl9mIS8XLC9d8KWFBGrzOUmx")' }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">Olivia Bennett</p>
                    <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">Product Manager Intern at Innovate Co.</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Accept</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz4JTakxJy0WYuIPPR4xoscCRR3GjE3x1V0HhDjYqCcpcBK3MvQZL4z4Jhagf2m9hoJllArP83e8FaVcR8gY556cpS0NLIWp9eLllimVRe4bIhW7vZ0quMPuPAipsDcUbKbUbfeBFSUpt_Q7bzJ1EaCfiXIKhlPhwOt55H_U2bVk7NP9aaEVFs-DkFg1-xbynWjcrqGtYF_NRecKra5z1DSzQjc_XAmhg_QHyvV-5lExjq4LwiOaZvJIH9ugnP0JQxzD8YEeizk1tv")' }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">Noah Thompson</p>
                    <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">Data Analyst Intern at Data Insights LLC</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Accept</span>
                  </button>
                </div>
              </div>
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Your connections</h2>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWk-xl_5YmVqG8frpH2gnwyi-VjlPzxxJcCfIU33IZXtx8JebUrWxNgPgK7xOLPmgUs1UKpiOlFNeoJwiLH4Z1NRI6-kWCl-GzB7CfkXEN7flcfq5hwdsV2uzDFKZYwAk1ygSYAHxjprlSvaY2HEREwrC3CLBfBsPb933wZkuQ3miBuTq-J-ophLLewiPkYVfPJw0pg9x_vbUBY0Jrnzt3qXYMwiQFzoIiwRSlamsoVXR-0hUO3-ZqExQAEW3Ne8jQDYaN4GjBGoZf")' }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">Liam Harper</p>
                    <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">Software Engineer at Tech Solutions Inc.</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div className="text-[#0e141b] flex size-7 items-center justify-center" data-icon="CaretRight" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLTbv4i-BT8L3iLUxFpV8RV-5R6vUGbgWbKbm6I7mjDH08i8nyhuSkLTaKaXVtA4fPMfHdowXUbyo1TwZNLywXuv7qvUgDJrHplnlmdBuSjOQfNu-T7yq3-SEqCU48uR1vNp7PXYlBAPj5ZcrXCSOsmwi476i0D5z72CRbivtCJNSgZwepOoZ_yIGr5iBckoDO10G-PBUbfQpY4c_kJW-xDBsgthCu8wargE8IGL6Pq_mxhLma6X-5wKRE4NoM6WXlSlE3vIKho708")' }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">Ava Mitchell</p>
                    <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">Product Manager at Innovate Co.</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div className="text-[#0e141b] flex size-7 items-center justify-center" data-icon="CaretRight" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDS4gN2UEOC0hxUxAud9LHgU5SHAhB4fYL4Mba8YhU49K5hnJzp4gEi2ediufeE-_7wzz37XI2tcgCoe6qsP9ApW55eA_v-3dgmUlPBf0-fXtwGGHwMTzBGs6q7coIcrjz5m6vYPpzUyYl6jrHv08Beiez6sZRkxM2FS6qbGfSDl_-o4lUR41d3bDzvPw57DQpl2FtSIg52r7SiMJoljOQhF0UQKJUnLsdTG0pogAM11KX28IiKh6ArIuNzQfkvy3aOZdELDoPDW0ha")' }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">Lucas Bennett</p>
                    <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">Data Analyst at Data Insights LLC</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <div className="text-[#0e141b] flex size-7 items-center justify-center" data-icon="CaretRight" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                    </svg>
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