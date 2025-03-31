import React from "react";

const TermsAndConditions = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <div className="w-full bg-black flex flex-col justify-evenly items-center pt-4">
        <div className="h-[100px] w-full flex justify-center items-center text-white text-5xl md:text-6xl font-mono font-bold">
          <span>GURUDEV 077</span>
        </div>
        <div className="w-full max-w-[500px] pt-4">
          <div className=" flex justify-center items-center">
            <img src="img.png" className="h-full w-[80%] object-contain pr-6" />
          </div>
          <div className="relative">
            <img src="tag.png" className="h-full w-full object-contain" />
            <span className="w-1/2 absolute top-3 left-1/2 -translate-x-1/2 font-semibold text-center text-[8.5vw] sm:text-[45px]">
              20% EXTRA
            </span>
          </div>
        </div>
        <div className="h-[150px] flex flex-col gap-2 justify-center items-center">
          <button className="px-6 py-2 bg-white text-black rounded-full font-bold text-3xl">
            <a href="https://wa.me/+919997406683?text=Hey%2C%20I%20need%20a%20new%20ID">
              CONTACT US
            </a>
          </button>
          <button className="px-6 py-1 bg-white text-black rounded-full font-bold text-base">
            <a href="tel:+919997406683">CALL US : +919997406683</a>
          </button>
        </div>
      </div>
      {/* footer */}
      <footer class="bg-gray-100 text-center py-4 text-xs px-2">
        <div class="text-blue-600 space-x-4">
          <a href="#" class="hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" class="hover:underline">
            Terms and Conditions
          </a>{" "}
          |
          <a href="#" class="hover:underline">
            Game Responsibility
          </a>
        </div>
        <p class="text-black font-semibold mt-2">
          Disclaimer:{" "}
          <span class="font-normal">
            This Website is only for 18+ users. If you are from Telangana,
            Orissa, Assam, Sikkim, and Nagaland, please leave the website
            immediately. Be aware of fraudsters, we only deal via WhatsApp.
          </span>
        </p>
        <p class="text-black font-semibold mt-1">
          About:{" "}
          <span class="font-normal">
            We Only Promote Fantasy Sports. No Real Money Involvement
          </span>
        </p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
