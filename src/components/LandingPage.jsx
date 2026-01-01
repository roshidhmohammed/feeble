
import Button from "../common/Button";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { landingPageImages } from "../utils/constants";

const LandingPage = () => {
  const LandingPageBirdTransitionY = () => {
    gsap.fromTo(
      ".bird-transition",
      { autoAlpha: 0, opacity: 0, y: 600, duration: 0 },
      { autoAlpha: 1, y: 0, opacity: 1, duration: 1.5 }
    );
  };

  const LandingPageBirdTransitionYCopy = () => {
    gsap.fromTo(
      ".bird-transition-copy",
      { autoAlpha: 0, opacity: 0, y: 600, duration: 0 },
      { autoAlpha: 0.2, y: 0, opacity: 0, duration: 1.5 }
    );
  };

  useGSAP(() => {
    LandingPageBirdTransitionY();
    LandingPageBirdTransitionYCopy();
  });

  return (
    <div className=" 2xl:mx-60 sm:mx-0  px-4 py-8   h-111.75 mt-16 relative mb-[54.07px] ">
      <p className=" text-[#006FE8] pr-2 mx-auto bg-[#FFFFFF] rounded-[200px] font-medium px-2 pb-1.25 pt-1 text-center w-80.5 h-">
        <img src={landingPageImages.messageLogo} alt="message-logo" className="inline-block" />
        The #1 iMessage Automation Tool.
      </p>
      <div className=" font-general-sans font-bold md:text-[64px] text-[32px] leading-[120%] text-center ">
        <p className="text-center  font-bold ">
          <span className="text-[#007AFF]">iMessage </span> Automation
        </p>

        <p>for teams and AI</p>
        <p>Workflows.</p>
      </div>
      <div className="flex justify-center mt-6">
        <p className=" font-normal text-[18px] text-center text-[#000000] w-184 flex justify-center ">
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </p>
      </div>

      <div className=" flex md:flex-row flex-col justify-center mt-12 md:gap-3 gap-5">
        <Button text={"Get Started"} classname="bg-[#007AFF] text-[#FFFFFF]" />
        <Button
          text={"Download the Mac app"}
          icon={landingPageImages.appleLogo}
          classname="bg-[#FFFFFF] text-[#1D2026]"
        />
      </div>

      {/* logo placement */}
      <div className=" ">
        <div className="absolute left-[178.18px] bottom-[327.04px] bird-transition">
          <img src={landingPageImages.landingLogoLeft1} alt="" />
        </div>
        <div className="absolute left-[375.3px] bottom-[289.02px]">
          <img src={landingPageImages.landingLogoLeft2} alt="" />
        </div>
        <div className="absolute left-[375.3px] bottom-[289.02px] bird-transition-copy">
          <img src={landingPageImages.landingLogoLeft2} alt="" className=" text-gray-400" />
        </div>
        <div className="absolute right-[351.46px] bottom-[313.04px] bird-transition">
          <img src={landingPageImages.landingLogoRight1} alt="" />
        </div>
        <div className="absolute right-[311.46px] bottom-[153.04px] ">
          <img src={landingPageImages.landingLogoRight2} alt="" />
        </div>
        <div className="absolute right-[311.46px] bottom-[153.04px] bird-transition-copy">
          <img src={landingPageImages.landingLogoRight2} alt="" className=" text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
