import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { ThemeProvider } from "./theme-provider";

function Footer() {
  return (
    <div className="flex justify-center items-center gap-6 absolute bottom-4 right-4">
     
   <Link to="https://github.com/Shifin-Malik/">
   <h4 className="sm:block md:hidden dark:text-gray-300 text-black font-sans">Github</h4>
   </Link>
   <Link to="https://www.linkedin.com/in/shifin-malik/">
    <h4 className="sm:block md:hidden dark:text-gray-300 text-black font-sans">Linkedin</h4>
   </Link>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
    </ThemeProvider>
  </div>
  )
}

export default Footer
