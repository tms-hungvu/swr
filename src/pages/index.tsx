import Image from "next/image";

import Layout from "./components/Layout";
import Link from "next/link";
import bgr from "../../public/banner/circle-7147640 1.png";
import icon1 from "../../public/icon/Group 3.png";
import layer1 from "../../public/icon/Layer_1.png";
import icon2 from "../../public/icon/Group 4.png";
export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <section className="">
            <div className="container">
              <div className="flex gap-4 ">
                <div
                  className="bg-contain py-[120px] bg-center w-full bg-no-repeat flex flex-col gap-4"
                  style={{ backgroundImage: `url("${bgr.src}")` }}
                >
                  <h1 className=" text-[73px] leading-[93.16px] font-[700]">
                    Quality education is a ley to your future success
                  </h1>
                  <span className=" font-[400] text-[14px] leading-[17.87px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>

                  <Link href="" className="mt-7">
                    <button className="text-[22px] text-white rounded-[25px]  px-3 bg-[#000000]">
                      Get a Free Consultation
                    </button>
                  </Link>
                </div>
                <div className="w-[800px] flex-grow   flex  px-4 items-center">
                  <div className="flex gap-8">
                    <div className="flex flex-col w-full gap-9 ">
                      <div className="flex rounded-[20px]  flex-col text-white pt-[19px] pl-[19px] pr-[19px] pb-[3px] bg-[#000000]">
                        <div className="mx-2 mb-2">
                          <Image src={icon1} width={40} alt="icon" />
                        </div>
                        <div className=" text-[22px] font-[600] my-1">
                          100000+
                        </div>
                        <div className=" font-[500] text-[10px] leading-1 w-[80%]">
                          Student Finished Coursece Every Year
                        </div>
                        <div className=" relative top-[-10px]">
                          <div className="">
                            <Image src={layer1} alt="" width={170} />
                          </div>
                          <div className=" mt-[1px] text-[10px] font-[600] flex justify-between">
                            <span className="">40,000</span>
                            <span className="">60,000</span>
                            <span className="">1.000,000</span>
                          </div>
                        </div>
                      </div>
                      <div className="gap-[10px] flex flex-col bg-[#FFFFFF] rounded-[20px] shadow-lg justify-center items-center pt-6  pb-3 pr-2">
                        <div className=" flex items-center justify-center w-[85px] h-[85px] text-[22px] font-[600] rounded-full border-solid border-[8px] border-[#9FFA00]  ">
                          96%
                        </div>
                        <div className=" text-black  text-[22px] font-[600]">
                          Intership
                        </div>
                        <div className=" text-[9px] font-[600] text-black text-center w-[80%]">
                          <span className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-9  mt-[60px]">
                      <div className="bg-[#FFFFFF] rounded-[20px] shadow-lg p-5 flex flex-col ">
                        <div className="">
                          <Image src={icon2} width={40} alt="icon2" />
                        </div>

                        <div className="mt-4 text-black  text-[22px] font-[600]">
                          Real Projects
                        </div>
                        <div className="mt-3 text-[9px] font-[600] text-black   w-[80%] pb-8">
                          <span className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.{" "}
                          </span>
                        </div>
                      </div>

                      <div className="bg-[#000000] rounded-[20px] shadow-lg p-5">
                           <div className="text-white text-[22px] font-[600]">New Courses</div>

                           <div className="flex flex-col gap-1 mt-3 mb-10">
                           <div className=" text-white flex items-center gap-2 ">
                                 <div className=" bg-[#9FFA00] w-6 h-1 rounded-[6px]"></div>
                                 <span className="text-[12px] font-[500]">Graphics Design</span>
                      
                           </div>
                           <div className=" text-white flex items-center gap-2 ">
                                 <div className=" bg-[#9FFA00] w-6 h-1 rounded-[6px]"></div>
                                 <span className="text-[12px] font-[500]">Web Design</span>
                      
                           </div>
                           <div className=" text-white flex items-center gap-2 ">
                                 <div className=" bg-[#9FFA00] w-6 h-1 rounded-[6px]"></div>
                                 <span className="text-[12px] font-[500]">Ui/Ux Design</span>
                      
                           </div>
                           <div className=" text-white flex items-center gap-2 ">
                                 <div className=" bg-[#9FFA00] w-6 h-1 rounded-[6px]"></div>
                                 <span className="text-[12px] font-[500]">Web Developement</span>
                      
                           </div>
                           </div>
                          
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container">
              <div className="flex flex-col gap-2">
                   <span className="text-[16px] font-[600]">Explore Programs</span>
                   <h1 className=" text-[36px] font-[600]">Our Most Popular Class</h1>
                   <span className=" text-[20px] font-[400]">Lets join our famous class, the knowledge provided will definitely be useful for you.</span>
              </div>
          </section>

          <section className="container py-5">
                <div className="flex gap-[40px]">
                    <div className=" p-6 rounded-[25px] bg-[#454545] w-1/3 gap-[10px] flex flex-col">
                        <div className="">
                           <img src="https://i.ytimg.com/vi/Cx2dkpBxst8/maxresdefault.jpg"  alt="" className="w-full" />
                        </div>

                        <div className="">
                          <span className=" text-[#9FFA00] text-[14px] font-[600]">Design</span>
                        </div>

                        <div className="">
                            <h1 className=" text-[24px] font-[600] text-[#FFFFFF]">Figma UI UX Design..</h1>
                        </div>

                        <div className="">
                          <div className=" leading-5 text-[16px] font-[400] text-[#FFFFFF]">Use Figma to get a job in UI Design, User Interface, User Experience design.</div>
                        </div>
                        <div className="text-[14px] flex gap-3 items-center">
                            <div className=" font-[500] text-[#9FFA00]">
                                3.9
                            </div>
                            <div className="flex text-[#FF9B26] text-[14px] gap-2">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>

                            <i className="fa fa-star" aria-hidden="true"></i>

                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>

                            </div>
                            <div className=" text-[#969696]">(124)</div>
                        </div>

                         <div className="flex justify-between mt-5">
                         <div className="flex gap-2">
                            <div className="">
                                <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1688" alt="" className=" rounded-full" width={40} />
                            </div>

                            <div className=" text-white flex flex-col justify-between">
                                  <b className="text-[14px]">Esther Howard</b>
                                  <span className="text-[14px]">2001 Enrolled</span>
                            </div>
                        </div>
                        <div className="text-[#9FFA00] text-[25px] font-[700]"> $11.70</div>
                         </div>
                    </div>
                    <div className=" p-6 rounded-[25px] bg-[#454545] w-1/3 gap-[10px] flex flex-col">
                        <div className="">
                           <img src="https://i.ytimg.com/vi/Cx2dkpBxst8/maxresdefault.jpg"  alt="" className="w-full" />
                        </div>

                        <div className="">
                          <span className=" text-[#9FFA00] text-[14px] font-[600]">Design</span>
                        </div>

                        <div className="">
                            <h1 className=" text-[24px] font-[600] text-[#FFFFFF]">Figma UI UX Design..</h1>
                        </div>

                        <div className="">
                          <div className=" leading-5 text-[16px] font-[400] text-[#FFFFFF]">Use Figma to get a job in UI Design, User Interface, User Experience design.</div>
                        </div>
                        <div className="text-[14px] flex gap-3 items-center">
                            <div className=" font-[500] text-[#9FFA00]">
                                3.9
                            </div>
                            <div className="flex text-[#FF9B26] text-[14px] gap-2">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>

                            <i className="fa fa-star" aria-hidden="true"></i>

                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>

                            </div>
                            <div className=" text-[#969696]">(124)</div>
                        </div>

                         <div className="flex justify-between mt-5">
                         <div className="flex gap-2">
                            <div className="">
                                <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1688" alt="" className=" rounded-full" width={40} />
                            </div>

                            <div className=" text-white flex flex-col justify-between">
                                  <b className="text-[14px]">Esther Howard</b>
                                  <span className="text-[14px]">2001 Enrolled</span>
                            </div>
                        </div>
                        <div className="text-[#9FFA00] text-[25px] font-[700]"> $11.70</div>
                         </div>
                    </div>
                    <div className=" p-6 rounded-[25px] bg-[#454545] w-1/3 gap-[10px] flex flex-col">
                        <div className="">
                           <img src="https://i.ytimg.com/vi/Cx2dkpBxst8/maxresdefault.jpg"  alt="" className="w-full" />
                        </div>

                        <div className="">
                          <span className=" text-[#9FFA00] text-[14px] font-[600]">Design</span>
                        </div>

                        <div className="">
                            <h1 className=" text-[24px] font-[600] text-[#FFFFFF]">Figma UI UX Design..</h1>
                        </div>

                        <div className="">
                          <div className=" leading-5 text-[16px] font-[400] text-[#FFFFFF]">Use Figma to get a job in UI Design, User Interface, User Experience design.</div>
                        </div>
                        <div className="text-[14px] flex gap-3 items-center">
                            <div className=" font-[500] text-[#9FFA00]">
                                3.9
                            </div>
                            <div className="flex text-[#FF9B26] text-[14px] gap-2">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>

                            <i className="fa fa-star" aria-hidden="true"></i>

                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>

                            </div>
                            <div className=" text-[#969696]">(124)</div>
                        </div>

                         <div className="flex justify-between mt-5">
                         <div className="flex gap-2">
                            <div className="">
                                <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1688" alt="" className=" rounded-full" width={40} />
                            </div>

                            <div className=" text-white flex flex-col justify-between">
                                  <b className="text-[14px]">Esther Howard</b>
                                  <span className="text-[14px]">2001 Enrolled</span>
                            </div>
                        </div>
                        <div className="text-[#9FFA00] text-[25px] font-[700]"> $11.70</div>
                         </div>
                    </div>
                </div>
          </section>
          <section className="flex justify-center py-10">
              <button className="bg-[#000000] text-white  py-[12px] px-[16px] text-[22px] rounded-[8px]"> Explore All Programs</button>
          </section>
        </main>
      </Layout>
    </>
  );
}
