import Link from "next/link";
import Layout from "../components/Layout";
import googleIcon from "../../../public/icon/Icon.png";
import Image from "next/image";
export default function Login() {
  return (
    <>
      <Layout>
        <main className=" min-h-screen  flex justify-center py-[50px]">

          <div className=" bg-[#E9E9E9] w-[1103px] shadow md:shadow-lg rounded-[12px]">
          <div className=" text-center mt-[47px]">
            <h1 className="text-[48px] font-bold tracking-[2px]">Login</h1>
            <span className="text-[18px] text-[#4C4C4D] ">
              Welcome back! Please log in to access your account
            </span>
          </div>
          <div className="px-[51px]">
            <form  className="py-11 flex flex-col gap-6">
                <div className="">
                    <div className="flex flex-col text-[18px] gap-3">
                        <label className="" htmlFor="email">Email</label>
                        <input id="email" type="text" className=" px-6 rounded-[13px] py-6 bg-[#FCFCFD] focus:outline-none" placeholder="Enter your Email" />
                    </div>
                </div>

                <div className="">
                    <div className="flex flex-col text-[18px] gap-3">
                        <label className="" htmlFor="password">Password</label>
                        <input id="password" type="password" className=" px-6 rounded-[13px] py-6 bg-[#FCFCFD] focus:outline-none" placeholder="Enter your Password" />
                    </div>
                    <div className=" mt-5 text-end text-[17.5px]"><Link href="">Forgot Password ?</Link></div>
                </div>

                <div className="">
                    <div className="flex text-[18px] gap-3">
                        <input className="bg-[#FCFCFD] border-none w-8 focus:ring-0 border-0 focus:outline-none" type="checkbox" name="" id="" />
                        <label className="text-[18px] text-[#656567]" htmlFor="email">Remember Me</label>
                        
                    </div>
                </div>

                <div className="text-white text-[18px] ">
                    <button type="submit" className="bg-[#000000] w-full py-[19px] rounded-[10px]">Login</button>
                </div>
                <div className=" text-[18px] text-center py-1"> OR</div>

                <div className="flex justify-center bg-[#F7F7F8] rounded-[10px] py-5 my-1" >
                    <Link href="">
                        <div className=" flex gap-4 ">
                            <Image 
                                  src={googleIcon}
                                  width={32}
                                
                                  alt=""
                                />
                                <span className=" text-[18px]">Login with Google</span>
                        </div>
                    </Link>
                </div>

                <div className="text-[18px]  flex gap-2 justify-center items-center">
                    <span className="">Dont have an account? </span>
                    <Link href="" className=" underline">Sign up </Link>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
            </form>
          </div>
          </div>
        
        </main>
      </Layout>
    </>
  );
}
