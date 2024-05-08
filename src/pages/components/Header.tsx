import Image from "next/image";
import Logo from "../../../public/logo/image 3.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="container  h-[77px]  text-[22px] pt-4">
        <div className="flex  justify-between">
          <div className="flex items-center gap-[90px]">
            <div className="">
              <Image
                src={Logo}
                width={124}
                height={77}
                alt="Picture of the author"
              />
            </div>

            <div className="">
              <ul className="flex gap-[60px] font-bold">
                <Link href="">
                  <li className="">Home</li>
                </Link>
                <Link href="">
                  <li className="">About</li>
                </Link>
                <Link href="">
                  <li className="">Courses</li>
                </Link>
                <Link href="">
                  <li className="">Contacts</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex gap-5 items-center">
              <Link href="">
                  <button className="bg-[#000000] text-white rounded-full py-[2.5px] px-5 font-bold" >Login</button>
              </Link>

              <Link href="">
              <button className="bg-[#000000] text-white rounded-full py-[2.5px] px-5 font-bold" >Join For Free</button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}
