import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

const Acad = () => {
  return (
    <div className="py-20" id="certifications">
      <h1 className="heading mb-[90px]">
        Academics &<span className="text-purple"> Certifications</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-[20rem] rounded-md flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 ">
            {companies.map(({id, img, name , nameImg}) => (
                <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                    <img src={img} alt={name} className="md:w-10 w-5" />
                    <img src={nameImg} alt={name} className="md:w-24 w-20" />
                </div>
            ) )}
        </div>
      </div>
    </div>
  );
};

export default Acad;
