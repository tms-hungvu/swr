import Link from "next/link";
import Logo from "../../../public/logo/image 3.png";
import Image from "next/image";
export default function Footer(){
    return <footer className=" bg-[#001642]">
        <div className="container pt-[64px] ">
             <div className="flex">
                    <div className=" flex-grow w-[470px] px-6">
                       <Image src={Logo} 
                            width={145}
                            height={120}
                            alt="logo"
                            className="bg-white rounded-[10px] py-2 px-3"
                            />
                        <div className="text-white text-[16px] leading-6 mt-10">Top learning experiences that create more talent in the world.</div>
                        
                    </div>
                    <div className=" w-1/5">
                         <ul className="gap-3 font-bold flex flex-col text-[#EAECF0] text-[16px] leading-[24px]">
                            <li className="text-[14px]">Product</li>
                            <Link href=""><li className="">Overview</li> </Link>
                            <Link href=""><li className="">Features</li> </Link>
                            <Link href=""><li className="">Solutions</li> </Link>
                            <Link href=""><li className="">Tutorials</li> </Link>
                            <Link href=""><li className="">Pricing</li> </Link>
                            
                         </ul>
                    </div>
                    <div className="w-1/5">
                    <ul className="gap-3 font-bold flex flex-col text-[#EAECF0] text-[16px] leading-[24px]">
                            <li className="text-[14px]">Company</li>
                            <Link href=""><li className="">About us</li> </Link>
                            <Link href=""><li className="">Careers</li> </Link>
                            <Link href=""><li className="">Press  <span className="text-black bg-white rounded-[10px] px-2 py-[2px] text-[12px] text-center">New</span></li> </Link>
                            <Link href=""><li className="">New</li> </Link>
                           
                            
                         </ul>
                    </div>
                    <div className="w-1/5">
                    <ul className="gap-3 font-bold flex flex-col text-[#EAECF0] text-[16px] leading-[24px]">
                            <li className="text-[14px]">Social</li>
                            <Link href=""><li className="">Twitter</li> </Link>
                            <Link href=""><li className="">Linkedln</li> </Link>
                            <Link href=""><li className="">GitHub</li> </Link>
                            <Link href=""><li className="">Dribbble</li> </Link>
                            
                            
                         </ul>
                    </div>
                    <div className="w-1/5">
                    <ul className="gap-3 font-bold flex flex-col text-[#EAECF0] text-[16px] leading-[24px]">
                            <li className="text-[14px]">Legal</li>
                            <Link href=""><li className="">Terms</li> </Link>
                            <Link href=""><li className="">Privacy</li> </Link>
                            <Link href=""><li className="">Cookies</li> </Link>
                            <Link href=""><li className="">Contact</li> </Link>
                            
                            
                         </ul>
                    </div>
             </div>
        </div>

         <div className="container mt-[105px] px-11 pb-[135px]">
             <div className="flex justify-between text-[#98A2B3]">
               <div className="">
                    <span className=" text-[16px]">© 2022 Ed-Circle. All rights reserved.</span>
               </div>
               <div className="">
                    <ul className="flex items-center gap-6 text-[28px]">
                         <Link href="">
                              <li className="">    <i className="fa fa-twitter" aria-hidden="true"></i></li>
                         </Link>
                         <Link href="">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                         </Link>
                         <Link href="">
                         <i className="fa fa-facebook-square" aria-hidden="true"></i>
                         </Link>
                         <Link href="">
                         <i className="fa fa-github" aria-hidden="true"></i>
                         </Link>
                         <Link href="">
                         <i className="fa fa-ravelry" aria-hidden="true"></i>
                         </Link>
                    </ul>
               </div>
             </div>
            
         </div>


    </footer>
}