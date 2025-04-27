import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { DockDemo } from "./DockDemo";
import { InteractiveGridPatternDemo } from "./InteractiveGridPatternDemo";
import ProImg from "@/assets/proimg.png";
import { ModeToggle } from "./mode-toggle";
import { ThemeProvider } from "./theme-provider";
function Header() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden p-5">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <InteractiveGridPatternDemo />
      </div>

      {/* Top Section */}
      <div className="flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            more
          </h5>
        </div>

        {/* Contact Button */}
        <Button
          variant="outline"
          className="w-28 h-10 text-sm font-semibold text-white bg-black dark:bg-white dark:text-black"
        >
          Get In Touch
        </Button>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center text-center mt-20">
        <TextAnimate
          className="text-3xl md:text-6xl font-bold"
          animation="blurInUp"
          by="character"
          once
        >
          Shifin Malik
        </TextAnimate>
        <TextAnimate
          className="text-lg md:text-3xl font-extralight mt-2"
          animation="blurInUp"
          by="character"
          once
        >
          Web Developer and Designer
        </TextAnimate>

        {/* Profile Image */}
        <div className="mt-32 md:mt-24 flex justify-center items-center">
          <img
            src={ProImg}
            alt="Profile Image"
            className="w-20 h-20 md:w-28 md:h-28 object-cover rotate-12"
          />
        </div>
      </div>

      {/* Bottom Dock */}
      <DockDemo />  
     <div className="flex justify-center items-center gap-6 absolute bottom-4 right-4">
      <h1>Github</h1>
      <h1>Linkedin</h1>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle/>
    </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
