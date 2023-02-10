import Image from "next/image";
import {bgOne,bgTwo,bgThree} from "../public/assets/index"

const Works = () => {
  return (
    <div className="w-full h-full bg-black text-white py-28">
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center">
        Featured Works.
      </h1>
      <div className="w-full flex h-[400px] mt-16 px-6">
        <div className="w-1/3 h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={bgOne}
            alt="bgOne"
          />
          <div className="absolute w-full h-[400px] left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center font-bold bg-designColor px-6 py-2 w-60 absolute bottom-10 transform translate-x-1/2">
                Web design
              </h1>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={bgTwo}
            alt="bgOne"
          />
          <div className="absolute w-full h-[400px] left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center font-bold bg-designColor px-6 py-2 w-60 absolute bottom-10 transform translate-x-1/2">
                Development
              </h1>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={bgThree}
            alt="bgOne"
          />
          <div className="absolute w-full h-[400px] left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center font-bold bg-designColor px-6 py-2 w-60 absolute bottom-10 transform translate-x-1/2">
              UI Design
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works