import styles, { layout } from "../style";
import { Ez2 } from "../assets";
import { info } from "../constants";

const About = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
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

      <div className={`flex-1 flex justify-start items-center flex-row m-3 gap-10`}>
        {info.map((content) => (
          <div key={content.text}>
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{content.count}</h4>
            <p className="font-poppins font-normal xs:text-[15px] text-[10px] xs:leading-[26px] leading-[21px] text-gradient uppercase">{content.text}</p>
          </div>
        ))}
      </div><br />
      

      <div className={`${styles.flexCenter}`}>
        <a href="./src/assets/Resume.pdf" download> 
          <button className={`py-3 px-6 bg-blue-gradient font-poppins font-medium text-[20px] text-primary outline-none ${styles} rounded-[10px] w-full`}>
              Download CV
          </button>
        </a>
      </div>
    </div><br/>

    <div className={layout.sectionImgReverse}>
      <img src={Ez2} className="w-[100%} h-[100%]"/>
      <div className="absolute z-[1] w-[80%] h-[8%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-10 top-10 blue__gradient" />
    </div>
  </section>
);

export default About;
