import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm pb-[20px] pt-[16px] px-[16px] mt-10 rounded-xl shadow-xl">
      <Image
        src="/assets/img/cactus_img.jpg"
        width={336}
        height={152}
        alt="cactus"
        className="rounded-xl w-full"
      />
      <button className="mt-[1rem] border bg-[#E6D6FC] px-[1rem] py-0.5 text-[#883AE1] rounded-xl font-bold text-[0.625rem]">
        Design
      </button>
      <div className="text-[1.125rem] mt-[1rem] font-bold text-[#20293A]">
        Embracing Minimalism
      </div>
      <div className="text-[0.875rem] text-[#6C727F] mt-[6px] font-light">
        From minimalist sculptures to minimalist paintings, this blog will
        inspire you to appreciate the beauty that lies in simplicity.
      </div>
      <div className="text-[0.75rem] pt-[1rem] border-t mt-[20px] text-[#6C727F]">
        Annie Spratt
      </div>
    </div>
  );
};

export default Card;
