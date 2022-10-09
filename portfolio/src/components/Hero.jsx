import styles from "../style";
import { Ez } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={Ez} alt="billing" className="w-[100%} h-[100%] relative z-[5]"/>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[8%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
    </div>

    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
    <div className="absolute z-[1] w-[80%] h-[8%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[20%] h-[20%] right-10 bottom-10 pink__gradient" />
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Hello! <br className="sm:block hidden" />{" "}
          <span className="text-gradient"> I'm Ashley </span><br className="sm:block hidden" />{" "}
          {/* <p className="font-poppins font-normal text-dimWhite text-[30px] leading-[30.8px]">Web Developer</p> */}
          Web Developer
        </h1>
      </div>
    </div>
  </section>
);

export default Hero;
