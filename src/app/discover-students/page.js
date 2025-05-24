"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import students from '@/data/students.json';
import skills from '@/data/skills.json';
import interest from '@/data/interest.json';
import department from '@/data/department.json';


import Link from 'next/link';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Searchbar from '@/components/Searchbar';


export default function StudentProfilesPage() {

    const [studentData, setstudentData] = useState([]);

    const [filter, setFilter] = useState({
        interest: '',
        skill: '',
        department: ''
    });

    const setFilterHandler = (name, value) => {
        setFilter(prev => ({
            ...prev,
            [name]: value

        }));
    }

    useEffect(() => {
        let filteredStudents = students;

        if (filter.interest) {
            filteredStudents = filteredStudents.filter(student => student.interests.includes(filter.interest));
        }

        if (filter.skill) {
            filteredStudents = filteredStudents.filter(student => student.skills.includes(filter.skill));
        }

        if (filter.department) {
            filteredStudents = filteredStudents.filter(student => student.department === filter.department);
        }

        setstudentData(filteredStudents);

    }, [filter])


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
                            <Searchbar/>
                            <div className="flex gap-3 p-3 flex-wrap pr-4">
                                <Select onValueChange={(e) => setFilterHandler("interest", e)}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem>Select an interest</SelectItem>
                                        {interest.map((item, index) => (
                                            <SelectGroup key={index}>
                                                <SelectLabel>{item.name}</SelectLabel>
                                                {item.skill.map((skill, skillIndex) => (
                                                    <SelectItem key={skillIndex} value={skill}>{skill}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select onValueChange={(e) => setFilterHandler("skill", e)}>
                                    <SelectTrigger className="w-[200px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem>Select a skill</SelectItem>
                                        {skills.map((item, index) => (
                                            <SelectGroup key={index}>
                                                <SelectLabel>{item.name}</SelectLabel>
                                                {item.skill.map((skill, skillIndex) => (
                                                    <SelectItem key={skillIndex} value={skill}>{skill}</SelectItem>
                                                ))}
                                                <SelectItem value="python">Python</SelectItem>
                                                <SelectItem value="r">R</SelectItem>
                                                <SelectItem value="sql">SQL</SelectItem>
                                            </SelectGroup>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select onValueChange={(e) => setFilterHandler("department", e)}>
                                    <SelectTrigger className="w-[200px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem>Select a Department</SelectItem>
                                        <SelectGroup>
                                            <SelectLabel>Department</SelectLabel>
                                            {department.map((dept, index) => (
                                                <SelectItem key={index} value={dept}>{dept}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid w-full grid-cols-5 gap-3 p-4">
                                {studentData.map((student) => (
                                    <Link href={`/students/${student.id}`} key={student.id}>
                                        <div className="flex flex-col gap-3 text-center pb-3">
                                            <div className="px-4">
                                                <div
                                                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                                                    style={{ backgroundImage: `url("${student.photo}")` }}
                                                ></div>
                                            </div>
                                            <div>
                                                <p className="text-[#0e141b] text-base font-medium leading-normal">{student.name}</p>
                                                <p className="text-[#4e7097] text-sm font-normal leading-normal">{student.major}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}