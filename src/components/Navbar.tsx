import { LogOut, Moon, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4">
            {/* LEFT */}
            CollapseButton
            {/* RIGHT */}
            <div className="flex items-center gap-4">
                <Link href="/">Dashboard</Link>
                <Moon />

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
                </DropdownMenu>
            </div>
        </nav>
    );
};
export default Navbar;
