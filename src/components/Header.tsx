import { DockDemo } from "./DockDemo";
import { InteractiveGridPatternDemo } from "./InteractiveGridPatternDemo";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ConfettiSideCannons } from "./ConfettiSideCannons";
import NavBar from "./NavBar";
import Footer from "./Footer";
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
          <h6 className="font-montserrat text-[25px]">Software Developer</h6>
        </BlurFade>

        {/* Profile Image */}
        <div className="mt-32 md:mt-20 flex justify-center items-center">
          <ConfettiSideCannons />
        </div>
      </div>

      <DockDemo />
      <Footer />
    </div>
  );
}

export default Header;
