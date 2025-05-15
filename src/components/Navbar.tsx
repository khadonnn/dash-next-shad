import { LogOut, Settings, SquareMenu, User } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle as Darkmode } from './Darkmode';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4">
            {/* LEFT */}
            {/* sidebar trigger */}
            <SidebarTrigger className="cursor-pointer" />

            {/* RIGHT */}
            <div className="flex items-center gap-4">
                <Link href="/">Dashboard</Link>
                {/* THEME MENU */}
                <Darkmode />
                {/* USER MENU */}

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar className="cursor-pointer">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/146587461?v=4&size=64" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                            <LogOut />
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>

                    {/* 2 */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <SquareMenu />
                                <span className="sr-only">Dropdown</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
                            <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
                            <DropdownMenuItem>Menu Item 3</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </DropdownMenu>
            </div>
        </nav>
    );
};
export default Navbar;
