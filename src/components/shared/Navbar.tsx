import Image from "next/image";
import logo from "@/assets/Logo.png";
import Link from "next/link";
import { Home, Info, Briefcase, PenTool, Menu, Contact } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavigationLink from "./NavigationLink";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  // console.log(session);
  return (
    <nav className="flex items-center justify-between p-4  text-[#110E18] dark:text-white  lg:max-w-screen-2xl mx-auto">
      {/*  Logo */}
      <div className="text-xl font-bold">
        <Link href="/">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </Link>
      </div>

      {/* Navigation links and Login button */}
      <div className="hidden lg:flex items-center space-x-6">
        <NavigationLink path="/" route="Home" />
        <NavigationLink path="/about" route="About" />
        <NavigationLink path="/projects" route="Projects" />
        <NavigationLink path="/blogs" route="Blogs" />
        <NavigationLink path="/contact" route="Contact" />
        <ModeToggle />
      </div>

      {/* Hamburger Menu for mobile */}
      {/* Hamburger Menu for small devices */}
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Explore</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/" className="flex gap-2">
                  <Home className="w-4 h-4  " />
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about" className="flex gap-2">
                  <Info className="w-4 h-4" />
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/projects" className="flex gap-2">
                  <Briefcase className="w-4 h-4" />
                  Projects
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/blogs" className="flex gap-2">
                  <PenTool className="w-4 h-4" />
                  Blogs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact" className="flex gap-2">
                  <Contact className="w-4 h-4" />
                  Contact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
