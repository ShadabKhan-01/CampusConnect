import Link from 'next/link'
import { MdOutlineMenu } from "react-icons/md";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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

import Searchbar from './Searchbar'


const Navbar = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
            <div className='lg:hidden'>
            <Drawer>
                <DrawerTrigger><MdOutlineMenu size={24}/></DrawerTrigger>
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
            <div className="items-center gap-8 hidden lg:flex">
                <div className="flex items-center gap-4 text-[#0e141b]">
                    <div className="size-4">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
                    </div>
                    <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">CampusConnect</h2>
                </div>
                <div className="flex items-center gap-9">
                    <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="/">Home</Link>
                    <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="/my-network">My Network</Link>
                    <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="/discover-students">Discover</Link>
                    <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Messaging</Link>
                    <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Notifications</Link>
                </div>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <Searchbar />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer"
                            style={{ backgroundImage: 'url("/me.png")' }}
                        ></div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Link href={'/'}>View Profile</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={'/userform'}>Edit Profile Details</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

export default Navbar
