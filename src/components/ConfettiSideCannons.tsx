import confetti from "canvas-confetti";
import BgImg from "@/assets/bgimg.png";
export function ConfettiSideCannons() {
  const handleClick = () => {
    const end = Date.now() + 3 * 500; // 3 seconds
    const colors = ["#a786ff", "#67AE6E", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 50,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 50,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="relative">
      
      <img  onClick={handleClick}
            src={BgImg}
            alt="Profile Image"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rotate-12 cursor-pointer "
          />
    </div>
  );
}
