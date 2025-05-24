"use client";
import { useState } from 'react';
import students from '@/data/students.json';
import { IoIosSearch } from "react-icons/io";
import { useRouter } from 'next/navigation';

const Searchbar = () => {

    const [showSearch, setShowSearch] = useState([])
    const [searchValue, setsearchValue] = useState("");
    const router = useRouter();

    const handleSearch = (value) => {
        setsearchValue(value);
        if (value) {
            const findedStudent = students.filter(student => student.name.toLowerCase().includes(value.toLowerCase()));
            setShowSearch(findedStudent);
            // console.log(showSearch);
        }
        else {
            setShowSearch([]);
        }
    }

    return (
        <div className="px-4 py-3 relative">
            <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div
                        className="text-[#4e7097] flex border-none bg-[#e7edf3] items-center justify-center pl-4 rounded-l-lg border-r-0"
                        data-icon="MagnifyingGlass"
                        data-size="24px"
                        data-weight="regular"
                    >
                        <IoIosSearch fill='currentColor' size={24} />
                    </div>
                    <input
                        placeholder="Search by name"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-full placeholder:text-[#4e7097] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                        value={searchValue}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </label>
            {showSearch.length > 0 && (
                <div className="py-3 pr-6 absolute w-full z-10">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full text-[#4e7097] border-none bg-[#e7edf3]">
                        <ul className='p-4 w-full'>
                            {showSearch.map((student, index) => (
                                <li key={student.id} className='m-2 hover:bg-[#dbe9f8] cursor-pointer' onClick={() => router.push(`/students/${student.id}`)}>{student.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Searchbar
