import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "./../components/NewsletterBox";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse
            dolorum quis alias praesentium, ducimus magnam. Quos cum aliquid
            magnam totam modi quia laboriosam a. Lorem ipsum dolor sit amet.
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            voluptas ullam sint, inventore similique assumenda rerum excepturi
            aut. Magnam, at tempore. Architecto voluptatibus hic fugiat amet
            nostrum magni animi dicta? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. A, ut.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            mollitia vel quia ex omnis architecto nisi. Omnis vero quis cum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            nisi.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            excepturi.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            excepturi.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            excepturi.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default About;
