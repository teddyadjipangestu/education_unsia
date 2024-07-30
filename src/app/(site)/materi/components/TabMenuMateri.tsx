"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import router from "next/router";
import { useEffect, useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TabMenuMateri = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = new URLSearchParams(searchParams);
  const tab = query.get("tab");

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const menuTab = [
    {
      menu: "Pertemuan 1",
      href: `${pathname}`,
      value: null,
    },
    {
      menu: "Pertemuan 2",
      href: `${pathname}?tab=materi2`,
      value: "materi2",
    },
    {
      menu: "Pertemuan 3",
      href: `${pathname}?tab=materi3`,
      value: "materi3",
    },
    {
      menu: "Pertemuan 4",
      href: `${pathname}?tab=materi4`,
      value: "materi4",
    },
    {
      menu: "Pertemuan 5",
      href: `${pathname}?tab=materi5`,
      value: "materi5",
    },
    {
      menu: "Pertemuan 6",
      href: `${pathname}?tab=materi6`,
      value: "materi6",
    },
    {
      menu: "Pertemuan 7",
      href: `${pathname}?tab=materi7`,
      value: "materi7",
    },
    {
      menu: "Pertemuan 8",
      href: `${pathname}?tab=materi8`,
      value: "materi8",
    },
    {
      menu: "Pertemuan 9",
      href: `${pathname}?tab=materi9`,
      value: "materi9",
    },
    {
      menu: "Pertemuan 10",
      href: `${pathname}?tab=materi10`,
      value: "materi10",
    },
    {
      menu: "Pertemuan 11",
      href: `${pathname}?tab=materi11`,
      value: "materi11",
    },
    {
      menu: "Pertemuan 12",
      href: `${pathname}?tab=materi12`,
      value: "materi12",
    },
    {
      menu: "Pertemuan 13",
      href: `${pathname}?tab=materi13`,
      value: "materi13",
    },
    {
      menu: "Pertemuan 14",
      href: `${pathname}?tab=materi14`,
      value: "materi14",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    if (scrollRef.current) {
      handleScroll();
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center">
      {canScrollLeft && (
        <button
          onClick={handleScrollLeft}
          className="absolute left-0 z-10 bg-white border border-gray-300 rounded-full shadow p-[12px] flex items-center justify-center"
        >
          <FaChevronLeft color="#898880" />
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex flex-row gap-2 whitespace-nowrap w-full p-[10px] overflow-auto scrollbar-hide"
      >
        <Slide triggerOnce>
          {menuTab.map((item, index) => {
            const isActive =
              tab === item.value || (tab === null && item.value === null);
            const bgColor = isActive ? "bg-[#FFFCE6]" : "bg-[#FFFFFF]";
            const textColor = isActive ? "text-[#3D3C38]" : "text-[#898880]";
            const border = isActive
              ? "border border-[#FFD300]"
              : "border border-[#E4E3DD]";
            return (
              <Link
                href={item.href}
                key={"menu" + index}
                className={`${bgColor} ${textColor} ${border} pt-[9px] pb-[9px] pl-[20px] pr-[20px] text-[14px] font-[500] rounded-[200px] transition duration-100 hover:bg-[#FFFCE6] hover:border-[#FFD300] hover:text-[#3D3C38]`}
              >
                {item.menu}
              </Link>
            );
          })}
        </Slide>
      </div>
      {canScrollRight && (
        <button
          onClick={handleScrollRight}
          className="absolute right-0 z-10 bg-white border border-gray-300 rounded-full shadow p-[12px] flex items-center justify-center"
        >
          <FaChevronRight color="#898880" />
        </button>
      )}
    </div>
  );
};

export default TabMenuMateri;
