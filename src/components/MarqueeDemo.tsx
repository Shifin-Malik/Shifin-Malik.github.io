import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import HTML from '@/assets/html.png';
import CSS from '@/assets/css.png';
import JS from '@/assets/js.png';
import REACTJS from '@/assets/reactjs.png';
import TYPESCRIPT from '@/assets/typescript.png';
import REDUX from '@/assets/reduxlogo.png';
import TAILWINDCSS from '@/assets/tailwindcss.png';
const reviews = [
  {
    name: "HTML",
    img: HTML,
  },
  {
    name: "CSS",
    img: CSS,
  },
  {
    name: "JS",
    img: JS,
  },
  {
    name: "TYPESCRIPT",
    img: TYPESCRIPT,
  },
  {
    name: "REACTJS",
    img: REACTJS,
  },
  {
    name: "TAILWINDCSS",

    img: TAILWINDCSS,
  },
  {
    name: "REDUX",
    img: REDUX,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-20 h-20 md:h-28 md:w-28 cursor-pointer overflow-hidden rounded-2xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col items-center justify-center gap-1 w-full">
        <img className="rounded-full w-8 h-8 md:w-14 md:h-14" width="96" height="96" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="mt-10 relative flex  flex-col items-center justify-center overflow-hidden md:mx-12 mx-1">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-background"></div>
    </div>
  );
}
