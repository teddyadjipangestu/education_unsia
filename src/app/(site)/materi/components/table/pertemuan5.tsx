"use client";
import { FaFilePdf } from "react-icons/fa6";
import LinkHtml from "../../../../../components/icons/link-html.jpeg";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";

const Pertemuan5 = () => {
  const pdfUrlModulPertemuan4 =
    "file/pertemuan5/Modul Pemograman Web I - Pertemuan 5 - Membuat Link pada HTML.pdf";
  const pdfUrlPertemuan5 =
    "file/pertemuan5/Pertemuan 5 - Membuat Link pada HTML.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/v5_cCHD6T5c";

  return (
    <>
      <div className="rounded-[8px] bg-white shadow-xl p-[20px]">
        <Slide triggerOnce>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Membuat Link pada HTML
            </span>
            <div className="h-[20px]"></div>
            <p className="text-[14px] text-[#3D3C38] w-[900px]">
              Link atau Hyperlink adalah elemen HTML yang berfungsi
              menghubungkan suatu halaman web ke halaman web yang lain. Elemen
              ini bisa diklik.. dan nanti akan membuka halaman lain sesui alamat
              URL yang diberikan. Link pada HTML dapat dibuat dengan tag ,
              kemudian tag ini harus memiliki atribut href untuk menentukan
              alamat URL tujuan dari link.
            </p>
            <div className="h-[20px]"></div>
            <Image
              src={LinkHtml}
              alt="logo-html"
              width={500}
              height={500}
              className="object-cover"
            />
            <div className="h-[20px]"></div>
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Belajar HTML Part 7 : Membuat Link di HTML
            </span>
            <div className="h-[20px]"></div>
            <iframe
              width="50%"
              height="400px"
              src={youtubeUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
              className="rounded-[8px]"
            ></iframe>
          </div>
        </Slide>
      </div>
      <div className="h-[20px]"></div>
      <div className="flex items-center">
        <div className="w-[50%]">
          <Slide triggerOnce direction="up">
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Membuat Link pada HTML
            </span>
            <div className="h-[20px]"></div>
            <iframe
              width="100%"
              height="850px"
              src={pdfUrlPertemuan5}
              allowFullScreen
              className="object-cover rounded-[8px]"
              title="pdf"
              style={{
                border: "none",
              }}
            ></iframe>
            <div className="h-[20px]"></div>
            <a
              href={pdfUrlPertemuan5}
              download
              className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
            >
              <FaFilePdf />
              <div className="w-[8px]"></div>
              Download PDF
            </a>
          </Slide>
        </div>
        <div className="w-[20px]"></div>
        <div className="w-[50%]">
          <Slide triggerOnce direction="up">
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Modul Pemrogaman Web 1 - Pertemuan 5
            </span>
            <div className="h-[20px]"></div>
            <iframe
              width="100%"
              height="850px"
              src={pdfUrlModulPertemuan4}
              allowFullScreen
              className="object-cover rounded-[8px]"
              title="pdf"
              style={{
                border: "none",
              }}
            ></iframe>
            <div className="h-[20px]"></div>
            <a
              href={pdfUrlModulPertemuan4}
              download
              className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
            >
              <FaFilePdf />
              <div className="w-[8px]"></div>
              Download PDF
            </a>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Pertemuan5;
