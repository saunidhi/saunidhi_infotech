import { useContext } from "react"
import BgImg from "./BgImg.svg"
import { Context } from "./Utils/Context"

function Mainfront() {

  const { setData } = useContext(Context)

  return (
    <>
      <div className="Bgimge h-[100vh] sm:h-[100vh]  md:h-[100%] xl:h-[100vh] bg-no-repeat image" style={{ backgroundImage: `url(${BgImg})` }}>
        <div className="Information text-white ml-3 w-[80%] sm:top-[5rem] sm:mx-[5rem] sm:w-[50%] sm:h-[100vh] md:w-[%]  xl:top-[10rem] xl:mx-[8rem]  relative xl:w-[40%] top-20 px-3">
          <p className=" heading font-semibold " style={{ fontFamily: "arial", fontStyle: "normal", fontWeight: "550", lineHeight: " normal" }} >
            <div className=" text-[40px] sm:text-4xl md:text-6xl xl:text-7xl " >Business automation</div>
            <div className=" text-[28px] sm:text-2xl md:text-4xl xl:text-5xl my-3 font-semibold">for enterprises</div>
          </p>
          <p className="text-[18px] sm:text-[15px] md:text-[18px] xl:text-[20px] ">{setData}</p>
          {/* Button */}
          <div className="flex sm:h-[5rem] sm:top-4 sm:mb-5 xl:h-[10rem] justify-center items-center ">
            <div className="bg-white text-black flex items-center justify-center w-[200px] h-[40px] rounded-[33px] mt-9 xl:w-[244px] xl:h-[55px] xl:text-xl uppercase font-semibold hover:bg-red-600 hover:text-white cursor-pointer" >Get a free quote</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mainfront
