import { useState } from "react";
import NavBar from "./NavBar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

function GetInTouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-50 dark:bg-black">
      <NavBar />

      <div className="flex flex-col items-center justify-start w-full px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Contact Request
        </h1>

        <form
          action="https://formsubmit.co/shifinmalik7@gmail.com"
          method="POST"
          className="w-full max-w-xl rounded-2xl bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-lg space-y-6 transition-all duration-300"
        >
          {/* Optional Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_subject" value="New Contact Request" />
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

          {/* Name Field */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-neutral-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#67AE6E]"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
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
              name="message"
              required
              placeholder="I love this website :)"
              className="w-full min-h-[50px]"
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
