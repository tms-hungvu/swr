import Image from "next/image";
import Logo from "../../../public/logo/image 3.png";
import Link from "next/link";
import { useRouter } from 'next/router';
export default function Header() {
  const router = useRouter();
  
  const dataItem = [
    {
      name : "Home",
      href : '/',
    },
    {
      name : "About",
      href : '/about',
    },
    {
      name : "Courses",
      href : '/courses',
    },
    {
      name : "Contacts",
      href : '/contact',
    }
  ]
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

                {dataItem.map((item, key) => (
                    <Link key={key} href={item.href}>
                    <li className={router.pathname == item.href ?  "active-btn-nav": ""}>{item.name}</li>
                  </Link>
                ))}
              
               
              </ul>
            </div>
          </div>
          <div className="flex gap-5 items-center">
              <Link href="/login">
                  <button className={router.pathname != '/login' ? "text-black  border-solid border-2 rounded-full border-black py-[2.5px] px-5 font-bold" : "bg-[#000000]  text-white py-[2.5px] px-5 font-bold rounded-full"} >Login</button>
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
