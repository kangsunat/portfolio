import React from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ExperienceSection() {
  return (
    <section className="space-y-10 p-8 py-20">
      {/* title */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <small className="font-medium text-[#bc6c25]">Experienced</small>
        <p className="text-2xl font-semibold text-[#283618] lg:text-4xl">
          Skills and Technologies
        </p>
        <small className="text-[#606c38]">
          Ahmad is proficient in a wide range of skills and technologies,
          allowing him to create <br /> professional and innovative web
          solutions.
        </small>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className=" flex flex-col items-center gap-4 text-center">
          <i className="mx-auto text-4xl">
            <GiPerspectiveDiceSixFacesRandom />
          </i>
          <p className="font-semibold text-[#283618]">Front-end Development</p>
          <small className="text-[#606c38]">
            HTML5, CSS3, JavaScript, and jQuery are just a few of the
            technologies Ahmad is proficient in.
          </small>
        </div>
        <div className=" flex flex-col items-center gap-4 text-center">
          <i className="mx-auto text-4xl">
            <GiPerspectiveDiceSixFacesRandom />
          </i>
          <p className="font-semibold text-[#283618]">Back-end Development</p>
          <small className="text-[#606c38]">
            Ahmad also has experience with PHP, MySQL, and WordPress.
          </small>
        </div>
        <div className=" flex flex-col items-center gap-4 text-center">
          <i className="mx-auto text-4xl">
            <GiPerspectiveDiceSixFacesRandom />
          </i>
          <p className="font-semibold text-[#283618]">
            Mobile Development (comming soon)
          </p>
          <small className="text-[#606c38]">
            Ahmad also has experience with PHP, MySQL, and WordPress.
          </small>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="flex items-center gap-2 text-[#dda15e] transition-all duration-300 hover:text-[#bc6c25]">
          <p>View Portfolio</p>
          <i>
            <MdKeyboardArrowRight />
          </i>
        </button>
      </div>
    </section>
  );
}
