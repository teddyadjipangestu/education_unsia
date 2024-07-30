"use client";
import Image from "next/image";
import GmabarWebPortofolio from "../../../../../components/icons/gambar-web-portofolio.jpg";
import { FaAngleRight, FaFilePdf } from "react-icons/fa6";
import { useState } from "react";

const Pertemuan13 = () => {
  const pdfUrlMoadulPertemuan13 =
    "file/pertemuan13/Modul Pemograman Web I - Pertemuan 13 - Membuat Project Web Pribadi dengan HTML.pdf";
  const pdfUrlPertemuan13 =
    "file/pertemuan13/Pertemuan 13 - Membuat Project Web Pribadi dengan HTML.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/kjdT_M2F9tc";

  const [openVidioYoutube, setOpenVidioYoutube] = useState<boolean>(false);

  const handleOpenVidioYoutube = () => {
    setOpenPertemuan13(false);
    setOpenModulPertemuan13(false);
    setOpenVidioYoutube(true);
  };

  const [openPertemuan13, setOpenPertemuan13] = useState<boolean>(false);

  const handleOpenPertemuan13 = () => {
    setOpenVidioYoutube(false);
    setOpenModulPertemuan13(false);
    setOpenPertemuan13(true);
  };

  const [openModulPertemuan13, setOpenModulPertemuan13] =
    useState<boolean>(false);

  const handleModulOpenPertemuan13 = () => {
    setOpenVidioYoutube(false);
    setOpenPertemuan13(false);
    setOpenModulPertemuan13(true);
  };

  return (
    <div className="flex w-full h-full">
      <div className="w-[50%] bg-white shadow-xl rounded-[8px] p-[20px] h-full">
        <span className="text-[20px] text-[#3D3C38] font-[500]">
          Membuat Project Web Pribadi dengan HTML
        </span>
        <div className="h-[20px]"></div>
        <span className="text-[14px] text-[#3D3C38]">
          Pembuatan web dimulai dengan desain. Kalau tidak ada desain, nanti
          kita akan kesulitan dan tidak akan tahu mau buat apa. Biasanya desain
          web dikerjakan oleh desainer, setelah itu diserahkan ke programmer
          untuk diubah menjadi HTML. Pada project ini, kita akan membuat tiga
          halaman web, yakni home, contact, dan about. Desain yang digunakan
          adalah desain dalam bentuk wireframe atau sketsa.
        </span>
        <div className="h-[20px]"></div>
        <div className="flex flex-col">
          <div
            onClick={handleOpenVidioYoutube}
            className="p-[12px] border rounded-[8px] cursor-pointer flex items-center justify-between"
          >
            <span className="text-[12px] text-[#3D3C38] font-[500]">
              Membuat Website Portfolio Lengkap dengan HTML, CSS & Javascript |
              Responsive
            </span>
            <FaAngleRight color="#3D3C38" />
          </div>
          <div className="h-[20px]"></div>
          <div
            onClick={handleOpenPertemuan13}
            className="p-[12px] border rounded-[8px] cursor-pointer flex items-center justify-between"
          >
            <span className="text-[12px] text-[#3D3C38] font-[500]">
              Pertemuan 13 - Membuat Project Web Pribadi dengan HTML
            </span>
            <FaAngleRight color="#3D3C38" />
          </div>
          <div className="h-[20px]"></div>
          <div
            onClick={handleModulOpenPertemuan13}
            className="p-[12px] border rounded-[8px] cursor-pointer flex items-center justify-between"
          >
            <span className="text-[12px] text-[#3D3C38] font-[500]">
              Modul Pemrogaman Web 1 - Pertemuan 11
            </span>
            <FaAngleRight color="#3D3C38" />
          </div>
        </div>
      </div>
      <div className="w-[20px]"></div>
      <div className="w-[50%] bg-white shadow-xl rounded-[8px] p-[20px] h-full">
        {openVidioYoutube ? (
          <iframe
            width="100%"
            height="450px"
            src={youtubeUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
            className="rounded-[8px]"
          ></iframe>
        ) : openPertemuan13 ? (
          <>
            <iframe
              width={"100%"}
              height="450px"
              src={pdfUrlPertemuan13}
              allowFullScreen
              className="object-cover rounded-[8px]"
              title="pdf"
              style={{
                border: "none",
              }}
            ></iframe>
            <div className="h-[20px]"></div>
            <a
              href={pdfUrlPertemuan13}
              download
              className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
            >
              <FaFilePdf />
              <div className="w-[8px]"></div>
              Download PDF
            </a>
          </>
        ) : openModulPertemuan13 ? (
          <>
            <iframe
              width={"100%"}
              height="450px"
              src={pdfUrlMoadulPertemuan13}
              allowFullScreen
              className="object-cover rounded-[8px]"
              title="pdf"
              style={{
                border: "none",
              }}
            ></iframe>
            <div className="h-[20px]"></div>
            <a
              href={pdfUrlMoadulPertemuan13}
              download
              className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
            >
              <FaFilePdf />
              <div className="w-[8px]"></div>
              Download PDF
            </a>
          </>
        ) : (
          <Image
            src={GmabarWebPortofolio}
            alt="gambar-web"
            width={700}
            height={700}
            className="object-cover rounded-[8px]"
          />
        )}
      </div>
    </div>
  );
};

export default Pertemuan13;
