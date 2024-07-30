"use client";
import Image from "next/image";
import logoUnsia from "../icons/logoUnsia.jpeg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const menuLinks = [
    {
      href: "/dashboard",
      menu: "Dashboard",
    },
    {
      href: "/materi",
      menu: "Materi",
    },
  ];

  return (
    <div className="flex items-center w-full pl-[20px] pt-[10px] pb-[10px] bg-white sticky top-0">
      <Link href={"/dashboard"} className="flex items-center">
        <Image
          src={logoUnsia}
          width={35}
          height={35}
          alt="img-logo"
          className=" object-cover"
        />
        <div className="w-[10px]"></div>
        <div className="flex flex-col">
          <span className="text-[#3D3C38] text-[18px] font-[500]">
            Universitas
          </span>
          <span className="text-[#3D3C38] text-[12px] font-[500]">
            Siber Asia
          </span>
        </div>
      </Link>
      <div className="w-[10px]"></div>
      <div className="w-[2px] bg-[#DDDCD4] h-[35px]"></div>
      <div className="w-[10px]"></div>
      {menuLinks.map((menuLinks, index) => {
        return (
          <>
            <Link
              key={index}
              href={menuLinks.href}
              style={{
                color: pathname.includes(menuLinks.href)
                  ? "#FFFFFF"
                  : "#3D3C38",
                backgroundColor: pathname.includes(menuLinks.href)
                  ? "#10487A"
                  : "",
                borderRadius: 200,
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 15,
                paddingRight: 15,
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {menuLinks.menu}
            </Link>
            <div className="w-[8px]"></div>
          </>
        );
      })}
    </div>
  );
};

export default Header;
