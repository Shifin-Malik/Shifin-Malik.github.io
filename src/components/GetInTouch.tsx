    import NavBar from "./NavBar"
    import { CheckboxDemo } from "./CheckboxDemo";
    import { Textarea } from "@/components/ui/textarea"
import { TextareaDisabled } from "./TextareaDisabled";
import { Button } from "./ui/button";
    function GetInTouch() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden p-5 bg-gray-50 dark:bg-black">
        <NavBar />
        <div className="flex flex-col h-full w-full items-center justify-start px-2 md:px-2 mt-5">
        <h1 className="text-2xl md:text-3xl">contact request</h1>
        <CheckboxDemo/>
        <p className="mt-6 w-[90%] text-left md:w-[58%]">Message</p>
        <Textarea  placeholder="I love this website :)"/>
        <p className="mt-6 w-[90%] text-left md:w-[58%]">Email</p>
        <TextareaDisabled />
        <Button className="mt-6 h-10 w-[90%] md:w-[60%]">Send</Button>
        
        </div>
        </div>
    )
    }

    export default GetInTouch
