
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

// logos and images
import { footerImages } from "../utils/constants";

const Footer = () => {
  const footerTransitionY = () => {
    gsap.fromTo(
      ".footer",
      { opacity: 0, y: 200, duration: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  };

  const footerBirdTransitionY = () => {
    gsap.fromTo(
      ".footer-bird",
      { autoAlpha: 0, opacity: 0, y: 0, duration: 0 },
      { autoAlpha: 1, y: -400, opacity: 1, duration: 1.5 }
    );
  };

  const birdFlight = () => {
    gsap.set("body", { overflowX: "hidden" });
    gsap.set(".flying-bird-1", { clearProps: "all", overflowX: "hidden" });
    gsap.set(".flying-bird-2", { clearProps: "all", overflowX: "hidden" });
    const tl = gsap.timeline({ delay: 3 });

    tl.fromTo(
      ".flying-bird-1",
      { x: "-120vw", y: 100, autoAlpha: 1 },
      {
        x: "120vw",
        y: -500,
        duration: 6,
        autoAlpha: 1,
        opacity: 0,
        ease: "power2.out",
      },
      0
    );

    tl.fromTo(
      ".flying-bird-2",
      { x: "120vw", y: 100, autoAlpha: 1 },
      {
        x: "-120vw",
        y: -500,
        duration: 6,
        autoAlpha: 1,
        opacity: 0,
        ease: "power2.out",
      },
      0
    );
  };

  // const birdFlight = () => {
  //   // gsap.set(".flying-bird-1", { overflowX: "hidden" });
  //     gsap.set(".flying-bird-1", { clearProps: "all", overflowX: "hidden" });
  //    gsap.set(".flying-bird-2", { clearProps: "all", overflowX: "hidden" });
  //   // gsap.set("footer", { overflowY: "hidden" });

  //   const tl = gsap.timeline({  });

  //   // BIRD 1 → LEFT ➜ RIGHT
  //   tl.fromTo(
  //     ".flying-bird-1",
  //     { x: "-120vw", y: 100, autoAlpha: 1 },
  //     {
  //       x: "10vw",
  //       y: -200,
  //       duration: 4,
  //       ease: "none"   // 🐢 slow
  //     },
  //     0
  //   )
  //   .to(
  //     ".flying-bird-1",
  //     {
  //       x: "120vw",
  //       y: -500,
  //       duration: 2,
  //        ease: "none"    // ⚡ speeds up
  //     },
  //     ">0" // start right after
  //   );

  //   // BIRD 2 → RIGHT ➜ LEFT
  //   tl.fromTo(
  //     ".flying-bird-2",
  //     { x: "120vw", y: 300, autoAlpha: 1 },
  //     {
  //       x: "-10vw",
  //       y: -100,
  //     duration: 4,
  //       ease: "none"   // 🐢 slow
  //     },
  //     0
  //   )
  //   .to(
  //     ".flying-bird-2",
  //     {
  //       x: "-120vw",
  //       y: -500,
  //       duration: 2,
  //        ease: "none"    // ⚡ speeds up
  //     },
  //     ">0"
  //   );

  //   gsap.set(".flying-bird-2", { x:0, y:0,autoAlpha: 0 });
  //   gsap.set(".flying-bird-1", { x:0, y:0, autoAlpha: 0 });
  // };

  useGSAP(() => {
    footerTransitionY();
    footerBirdTransitionY();
  });

  useGSAP(() => {
    birdFlight();
  });

  return (
    <div className=" mt-[54.07px] w-full relative footer z-999999 ">
      <img
        src={footerImages.footerImg}
        alt=""
        className="text-[#84BAF5]/10 
      footer
        "
      />
      <div className=" footer-bird">
        <div className="absolute top-[239.31px] left-[371.92px] ">
          <img src={footerImages.footerBird1} alt="" />
        </div>
        <div className="absolute top-[194.93px] left-[665.18px] ">
          <img src={footerImages.footerBird2} alt="" />
        </div>
        <div className="absolute top-[269.93px] left-[1263.18px] ">
          <img src={footerImages.footerBird3} alt="" />
        </div>
        <div className="absolute top-[195.93px] left-[1577.18px] ">
          <img src={footerImages.footerBird4} alt="" />
        </div>
      </div>
      <div className="absolute bottom-[10%] md:bottom-[15%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center w-full max-w-161.25 px-4">
        <p className="text-sm md:text-base font-medium text-gray-600 mb-2">
          Scroll to learn more
        </p>
        <img src={footerImages.scrolllDown} alt="" className="w-6 h-6 md:w-auto md:h-auto" />
      </div>

      <div className="absolute flying-bird flying-bird-1 top-50 left-0">
        <img src={footerImages.footerBird1} />
      </div>

      <div className="absolute flying-bird flying-bird-2 top-50 right-0">
        <img src={footerImages.footerBird3} />
      </div>
    </div>
  );
};

export default Footer;
