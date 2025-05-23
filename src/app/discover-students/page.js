import Navbar from '@/components/Navbar';
import { FaAngleDown } from "react-icons/fa6";
import students from '@/data/students.json';
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
                                <Select>
                                    <SelectTrigger className="w-[200px]">
                                        <SelectValue placeholder="Select an interest" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Technology & Engineering</SelectLabel>
                                            <SelectItem value="ai_engineering">AI in Engineering</SelectItem>
                                            <SelectItem value="automation">Automation</SelectItem>
                                            <SelectItem value="cryptography">Cryptography</SelectItem>
                                            <SelectItem value="hardware_prototyping">Hardware Prototyping</SelectItem>
                                            <SelectItem value="mechatronics">Mechatronics</SelectItem>
                                            <SelectItem value="robotics">Robotics</SelectItem>
                                            <SelectItem value="software_engineering">Software Engineering</SelectItem>
                                        </SelectGroup>

                                        <SelectGroup>
                                            <SelectLabel>Data & AI</SelectLabel>
                                            <SelectItem value="artificial_intelligence">Artificial Intelligence</SelectItem>
                                            <SelectItem value="data_science">Data Science</SelectItem>
                                            <SelectItem value="data_policy">Data-Driven Policy</SelectItem>
                                            <SelectItem value="ethical_ai">Ethical AI</SelectItem>
                                            <SelectItem value="machine_learning">Machine Learning</SelectItem>
                                            <SelectItem value="natural_language_processing">Natural Language Processing</SelectItem>
                                        </SelectGroup>

                                        <SelectGroup>
                                            <SelectLabel>Science & Health</SelectLabel>
                                            <SelectItem value="biomedicine">Biomedicine</SelectItem>
                                            <SelectItem value="biotech">Biotech</SelectItem>
                                            <SelectItem value="clinical_psychology">Clinical Psychology</SelectItem>
                                            <SelectItem value="genetics">Genetics</SelectItem>
                                            <SelectItem value="health_research">Health Research</SelectItem>
                                            <SelectItem value="mental_health">Mental Health</SelectItem>
                                            <SelectItem value="public_health">Public Health</SelectItem>
                                            <SelectItem value="therapeutic_techniques">Therapeutic Techniques</SelectItem>
                                        </SelectGroup>

                                        <SelectGroup>
                                            <SelectLabel>Business & Economics</SelectLabel>
                                            <SelectItem value="development_economics">Development Economics</SelectItem>
                                            <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                                            <SelectItem value="finance">Finance</SelectItem>
                                            <SelectItem value="global_markets">Global Markets</SelectItem>
                                            <SelectItem value="investment">Investment</SelectItem>
                                            <SelectItem value="sustainable_business">Sustainable Business</SelectItem>
                                        </SelectGroup>

                                        <SelectGroup>
                                            <SelectLabel>Policy & Society</SelectLabel>
                                            <SelectItem value="community_outreach">Community Outreach</SelectItem>
                                            <SelectItem value="development_studies">Development Studies</SelectItem>
                                            <SelectItem value="economic_policy">Economic Policy</SelectItem>
                                            <SelectItem value="education">Education</SelectItem>
                                            <SelectItem value="social_impact">Social Impact</SelectItem>
                                            <SelectItem value="startups">Startups</SelectItem>
                                            <SelectItem value="youth_advocacy">Youth Advocacy</SelectItem>
                                        </SelectGroup>

                                        <SelectGroup>
                                            <SelectLabel>Global Affairs</SelectLabel>
                                            <SelectItem value="diplomacy">Diplomacy</SelectItem>
                                            <SelectItem value="global_policy">Global Policy</SelectItem>
                                            <SelectItem value="human_rights">Human Rights</SelectItem>
                                            <SelectItem value="international_law">International Law</SelectItem>
                                        </SelectGroup>

                                        <SelectGroup>
                                            <SelectLabel>Mathematics</SelectLabel>
                                            <SelectItem value="pure_mathematics">Pure Mathematics</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-[200px]">
                                        <SelectValue placeholder="Select a skill" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Programming Languages</SelectLabel>
                                            <SelectItem value="c">C</SelectItem>
                                            <SelectItem value="c++">C++</SelectItem>
                                            <SelectItem value="go">Go</SelectItem>
                                            <SelectItem value="java">Java</SelectItem>
                                            <SelectItem value="javascript">JavaScript</SelectItem>
                                            <SelectItem value="python">Python</SelectItem>
                                            <SelectItem value="r">R</SelectItem>
                                            <SelectItem value="sql">SQL</SelectItem>
                                            <SelectItem value="typescript">TypeScript</SelectItem>
                                        </SelectGroup>

                                        <SelectGroup>
                                            <SelectLabel>Web & App Development</SelectLabel>
                                            <SelectItem value="bootstrap">Bootstrap</SelectItem>
                                            <SelectItem value="expressjs">Express.js</SelectItem>
                                            <SelectItem value="flutter">Flutter</SelectItem>
                                            <SelectItem value="html_css">HTML/CSS</SelectItem>
                                            <SelectItem value="nextjs">Next.js</SelectItem>
                                            <SelectItem value="nodejs">Node.js</SelectItem>
                                            <SelectItem value="react">React</SelectItem>
                                            <SelectItem value="tailwindcss">Tailwind CSS</SelectItem>
                                        </SelectGroup>

                                        <SelectGroup>
                                            <SelectLabel>Data Science & AI</SelectLabel>
                                            <SelectItem value="data_analysis">Data Analysis</SelectItem>
                                            <SelectItem value="data_visualization">Data Visualization</SelectItem>
                                            <SelectItem value="deep_learning">Deep Learning</SelectItem>
                                            <SelectItem value="machine_learning">Machine Learning</SelectItem>
                                            <SelectItem value="nlp">Natural Language Processing</SelectItem>
                                            <SelectItem value="pandas">Pandas</SelectItem>
                                            <SelectItem value="scikit_learn">Scikit-learn</SelectItem>
                                            <SelectItem value="tensorflow">TensorFlow</SelectItem>
                                        </SelectGroup>

                                        <SelectGroup>
                                            <SelectLabel>Design & Communication</SelectLabel>
                                            <SelectItem value="figma">Figma</SelectItem>
                                            <SelectItem value="graphic_design">Graphic Design</SelectItem>
                                            <SelectItem value="public_speaking">Public Speaking</SelectItem>
                                            <SelectItem value="technical_writing">Technical Writing</SelectItem>
                                            <SelectItem value="ux_research">UX Research</SelectItem>
                                        </SelectGroup>

                                        <SelectGroup>
                                            <SelectLabel>Economics & Finance Tools</SelectLabel>
                                            <SelectItem value="excel">Excel</SelectItem>
                                            <SelectItem value="financial_modeling">Financial Modeling</SelectItem>
                                            <SelectItem value="stata">Stata</SelectItem>
                                        </SelectGroup>

                                        <SelectGroup>
                                            <SelectLabel>Science & Research</SelectLabel>
                                            <SelectItem value="biology_lab">Biology Lab Techniques</SelectItem>
                                            <SelectItem value="clinical_interviewing">Clinical Interviewing</SelectItem>
                                            <SelectItem value="genomic_analysis">Genomic Analysis</SelectItem>
                                            <SelectItem value="microscopy">Microscopy</SelectItem>
                                            <SelectItem value="psychometric_testing">Psychometric Testing</SelectItem>
                                            <SelectItem value="research_methods">Research Methods</SelectItem>
                                        </SelectGroup>

                                        <SelectGroup>
                                            <SelectLabel>Miscellaneous</SelectLabel>
                                            <SelectItem value="project_management">Project Management</SelectItem>
                                            <SelectItem value="team_leadership">Team Leadership</SelectItem>
                                            <SelectItem value="vba">VBA</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-[200px]">
                                        <SelectValue placeholder="Select a Department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Department</SelectLabel>
                                            <SelectItem value="School of Business">School of Business</SelectItem>
                                            <SelectItem value="School of Engineering">School of Engineering</SelectItem>
                                            <SelectItem value="School of Economics">School of Economics</SelectItem>
                                            <SelectItem value="School of International Studies">School of International Studies</SelectItem>
                                            <SelectItem value="School of Life Sciences">School of Life Sciences</SelectItem>
                                            <SelectItem value="School of Mathematical Sciences">School of Mathematical Sciences</SelectItem>
                                            <SelectItem value="School of Social Sciences">School of Social Sciences</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                                {students.map((student) => (
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