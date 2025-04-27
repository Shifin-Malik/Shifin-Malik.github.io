
import { DockDemo } from "./DockDemo";
import { InteractiveGridPatternDemo } from "./InteractiveGridPatternDemo";
import { ModeToggle } from "./mode-toggle";
import { ThemeProvider } from "./theme-provider";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ConfettiSideCannons } from "./ConfettiSideCannons";
import NavBar from "./NavBar";
function Header() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden p-5">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <InteractiveGridPatternDemo />
      </div>

      {/* Top Section */}
      <NavBar />

      {/* Center Content */}
      <div className="flex flex-col items-center text-center mt-12">
        <BlurFade delay={0.25} inView>
          <h4 className="font-montserrat text-[48px] font-bold">
            Shifin Malik
          </h4>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <h6 className="font-montserrat text-[25px]">
            Software Developer
          </h6>
        </BlurFade>

        {/* Profile Image */}
        <div className="mt-32 md:mt-20 flex justify-center items-center">
          <ConfettiSideCannons />
        </div>
      </div>

      {/* Bottom Dock */}
      <DockDemo />
      <div className="flex justify-center items-center gap-6 absolute bottom-4 right-4">
        <h4 className="sm:block md:hidden dark:text-gray-300 text-black font-sans">Github</h4>
        <h4 className="sm:block md:hidden dark:text-gray-300 text-black font-sans">Linkedin</h4>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
