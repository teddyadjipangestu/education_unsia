import Image from "next/image";
import unsiajpg from "../components/icons/unsia.jpg";
import LogoUnsia from "../components/icons/logoUnsia.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-cols-2 w-screen h-screen bg-white">
      <div className="relative">
        <Image
          src={unsiajpg}
          fill
          alt="img-landing"
          className=" object-cover"
        />
      </div>
      <div className="my-auto flex flex-col items-center justify-center pl-[20px] pr-[20px]">
        <Image
          src={LogoUnsia}
          alt="logo-unsia"
          className=" object-cover"
          width={200}
          height={200}
        />
        <div className="h-[20px]"></div>
        <h1 className="text-black  capitalize text-3xl font-semibold">
          Welcome to education pemrogaman web
        </h1>
        <div className="h-[10px]"></div>
        <span className="text-black font-[500] text-[18px]">UNSIA 2024</span>
        <div className="h-[20px]"></div>
        <Link
          href={"/dashboard"}
          className="flex items-center justify-center rounded-[8px] w-full h-[40px] bg-blue-500 text-white text-[18px] font-[500] hover:bg-blue-200 hover:text-black"
        >
          Go To Education
        </Link>
      </div>
    </main>
  );
}
