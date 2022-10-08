import styles from "../style";
import { discount, robot, Ez, Ez2 } from "../assets";
import { info } from "../constants";

const About = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          <span className="text-gradient"> About Me</span>{" "}
          <p className={`${styles.paragraph}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </h1>
      </div>

      <div>
        {info.map((content) => (
          <div key={content.text}>
            <h3 className="md:text-4xl text 2xl font-semibold text-white">
              {content.count}
            </h3>
            
            <span className="text-cyan-600"> + </span>{" "}
          </div>
        ))}
      </div>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={Ez2}
        alt="billing"
        className="w-[100%} h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[8%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] left-10 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default About;
