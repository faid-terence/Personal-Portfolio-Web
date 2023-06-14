
import React from "react";
import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";
import Terence from "../../assets/images/Terence.jpeg";
import Faid from "../../assets/images/faid1.png";

export const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h3
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h3>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sn:text[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Terence Faid JABO <br /> Software Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  {" "}
                  <i class="ri-mail-line"></i> Hire Me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              Passionate software developer creating innovative solutions.
              Experienced in web and mobile applications. Committed to crafting
              elegant, user-friendly software that meets unique project needs.
              Thrives in collaborative environments, continuously learning to
              stay at the forefront of technology. Explore my projects and let's
              create amazing software together.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor texxt-[15px]">
                Follow Me:
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={Faid} alt="" />
            </figure>
          </div>
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                    <CountUp start={0} end={1} duration={2} suffix="+" />
                </h2>
                <h4  className="text-headingColor font-[600] text-[18px]">Years of Experience</h4>
            </div>
            <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                    <CountUp start={0} end={87} duration={2} suffix="+" />
                </h2>
                <h4  className="text-headingColor font-[600] text-[18px]">Success Rate</h4>
            </div>
            <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                    <CountUp start={0} end={70} duration={2} suffix="+" />
                </h2>
                <h4  className="text-headingColor font-[600] text-[18px]">Projects Completed</h4>
            </div>
            <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                    <CountUp start={0} end={15} duration={2} suffix="+" />
                </h2>
                <h4  className="text-headingColor font-[600] text-[18px]">Happy Clients</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

