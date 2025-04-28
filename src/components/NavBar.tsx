
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";   
import { ModeToggle } from "./mode-toggle";
import { ThemeProvider } from "./theme-provider";

function NavBar() {
return (
  <>
    {/* Top Section */}
    <div className="flex items-center justify-between px-1 md:px-12">
        {/* Logo and Name */}
        <div className="flex items-center gap-8">
         <Link to="/">
         <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
         </Link>
          <Link to="/more">
          <h5 className="text-xl font-semibold text-black dark:text-white">
            more
          </h5>
          </Link>
        </div>

        {/* Contact Button */}
        <Link to="/getintouch">
        <Button
          variant="outline"
          className="w-28 h-10 text-sm font-semibold text-white bg-black dark:bg-white dark:text-black"
        >
          Get In Touch
        </Button>
        </Link>
    </div>
  </>
  )
}

export default NavBar
