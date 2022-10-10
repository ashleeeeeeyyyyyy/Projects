import styles from "../style";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[20px] leading-[27px] text-white">
        Copyright © 2022. All Rights Reserved.
      </p>
    </div>
  </section>
)


export default Footer