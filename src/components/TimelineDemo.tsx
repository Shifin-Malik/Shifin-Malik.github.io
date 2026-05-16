
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
  title: "End 2025",
  content: (
    <div>
      <h1 className="text-xs md:text-lg font-normal text-neutral-800 dark:text-neutral-200">
        In August 2025, I joined Bridgeon Solutions as a MERN Stack Developer Intern, where I worked on scalable full-stack web applications using the MERN stack. I developed secure RESTful APIs with JWT authentication and role-based authorization, implemented real-time messaging and live presence tracking using Socket.IO and Redis, built responsive React.js interfaces, and deployed applications using Docker, Vercel, and Render while optimizing performance and scalability. I also collaborated with team members using Git and GitHub for efficient workflow management.
      </h1>
    </div>
  ),
},
    {
      title: "early 2025",
      content: (
        <div>
          <h1 className="text-xs md:text-lg font-normal text-neutral-800  dark:text-neutral-200">
          This BCA thesis examines the impact of rendering strategies—client-side rendering (CSR), server-side rendering (SSR), and static site generation (SSG)—in modern JavaScript frameworks like React, Next.js, and Svelte. It evaluates how these approaches affect website performance, SEO, and user experience, offering practical insights for selecting the right strategy based on project needs.
          </h1>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div>
           <h1 className="text-xs md:text-lg font-normal text-neutral-800  dark:text-neutral-200">
           Since 2024, I've been working at Peaks & Pies as a MERN stack and Svelte developer, focusing on enterprise-level landing page projects for multiple clients.
          </h1>
        </div>
      ),
    },
    {
      title: "Mid 2024",
      content: (
        <div>
           <h1 className="text-xs md:text-lg font-normal text-neutral-800  dark:text-neutral-200">
           In mid-2024, I started working on 'Doc-Time,' a college project for a doctor appointment booking app built with the MERN stack
          </h1>
        </div>
      ),
    },
    {
      title: "early 2024",
      content: (
        <div>
           <h1 className="text-xs md:text-lg font-normal text-neutral-800  dark:text-neutral-200">
           In early 2024, I contributed to the open-source Svelte project 'Notepad' and the ReactJS project 'Movieflix.
          </h1>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
           <h1 className="text-xs md:text-lg font-normal text-neutral-800  dark:text-neutral-200">
           I started my BCA at the end of 2022, during which I gained hands-on experience with HTML, CSS, JavaScript, and ReactJS, and actively began learning and contributing to open-source projects.
          </h1>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
