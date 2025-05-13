import { useState } from "react";
import NavBar from "./NavBar";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

function GetInTouch() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-50 dark:bg-black">
      <NavBar />
       
      <div className="flex flex-col items-center justify-start w-full px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Contact Request
        </h1>
    
        <form
          action="https://formsubmit.co/shifinmalik46@gmail.com"
          method="POST"
          className="w-full max-w-xl rounded-2xl bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-lg space-y-6 transition-all duration-300"
        >
          {/* Hidden Email Field (for FormSubmit) */}
          <input type="hidden" name="_replyto" value={email} />

          {/* Checkbox */}
          <div className="w-full flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(!!checked)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              I accept the terms and conditions
            </label>
          </div>

          {/* Email Field */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-neutral-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#67AE6E]"
              placeholder="you@example.com"
            />
          </div>

          {/* Message Field */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <Textarea
              required
              placeholder="I love this website :)"
              className="w-full min-h-[100px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full h-11 text-base font-semibold rounded-xl">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
