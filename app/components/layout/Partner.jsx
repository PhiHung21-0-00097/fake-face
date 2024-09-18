// import { useEffect, useState } from "react";
import { i1 } from "@/public/image/banner";
import Image from "next/image";
// import { getCourse } from "@/app/services/user";
const Partner = async () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const getCourse = async () => {
  //   try {
  //     setisLoading(true);
  //     const res = await getCourse();                        
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setisLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   getCourse();
  // }, []);
  return (
    <div className="container">
      <div className="row grid grid-cols-12 gap-2">
        <div className="col col-span-4">
          <div className="p-5 rounded-2xl shadow-xl">
            <h1 className="uppercase font-medium text-[24px] border-b-2 border-gray-300 py-2">
              Great Quality!
            </h1>
            <p className="font-light text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....
            </p>
            <div>
              <div className="flex">
                <div className="w-[85px] h-[85px]">
                  <Image
                    src={i1}
                    alt=""
                    className="rounded-full w-full h-auto"
                  ></Image>
                </div>
                <div className="ml-3">
                  <h1 className="text-[23px] font-medium">James Gouse</h1>
                  <p className="text-[15px] font-light">Graphic Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-span-4">
          <div className="p-5 rounded-lg shadow-xl">
            <h1 className="uppercase font-medium text-[24px] border-b-2 border-gray-300 py-2">
              Great Quality!
            </h1>
            <p className="font-light text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....
            </p>
            <div>
              <div className="flex">
                <div className="w-[85px] h-[85px]">
                  <Image
                    src={i1}
                    alt=""
                    className="rounded-full w-full h-auto"
                  ></Image>
                </div>
                <div className="ml-3">
                  <h1 className="text-[23px] font-medium">James Gouse</h1>
                  <p className="text-[15px] font-light">Graphic Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-span-4 flex items-center">
          <div className="p-5 ">
            <h1 className="uppercase font-medium text-[36px]">
              Phản hồi từ khách hàng
            </h1>
            <p className="font-light text-[20px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. lorem
              ipsum
            </p>
            <div>
              <div className="grid grid-cols-12">
                <div className="col col-span-2 ">
                  <button className="transition-all ease-in-out duration-300 rounded-full w-10 h-10 hover:bg-[#cc410e] bg-[#F15A22] flex justify-center items-center text-white">
                    &#8592;
                  </button>
                </div>
                <div className="col col-span-2">
                  <button className="transition-all ease-in-out duration-300 rounded-full w-10 h-10 bg-[#F15A22] flex justify-center items-center text-white hover:bg-[#cc410e]">
                    &#8594;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
