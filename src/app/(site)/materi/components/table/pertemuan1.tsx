"use client";
import Image from "next/image";
import LogoHtml from "../../../../../components/icons/Logo-HTML.png";
import { FaFilePdf } from "react-icons/fa6";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";

const PerTemuan1 = () => {
  const pdfUrlMoadulPertemuan1 =
    "file/pertemuan1/Modul Pemograman Web I - Pertemuan 1.pdf";
  const pdfUrlPertemuan1 =
    "file/pertemuan1/Pertemuan 1 - Pengenalan Dasar HTML untuk Pemula.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/jNsK1l0dLRk";

  return (
    <div className="w-full h-full">
      <Slide triggerOnce direction="down">
        <div className="flex items-center ">
          <div className="flex flex-col items-center justify-center w-[50%] h-full bg-white rounded-[8px] shadow-xl p-[20px]">
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Pengenalan Dasar HTML
            </span>
            <div className="h-[20px]"></div>
            <div className="flex items-center">
              <Image
                src={LogoHtml}
                alt="logo-html"
                width={300}
                height={300}
                className="object-cover"
              />
              <p className="text-[14px] text-[#3D3C38] w-[500px]">
                HTML itu adalah sebuah bahasa yang menggunakan markup atau
                penanda untuk membuat halaman web. Penanda atau markup ini,
                nanti akan kita sebut dengan Tag. HTML berperan untuk menentukan
                struktur konten dan tampilan dari sebuah web. HTML itu seperti
                batu bata untuk membangun rumah. Batu bata ini dapat disusun,
                hingga menjadi fondasi dasar. Dalam membuat halaman web, HTML
                tidak sendirian. Ada bahasa lain lagi yang menjadi pelengkapnya,
                yakni CSS dan Javascript. CSS adalah bahasa khusus yang
                digunakan untuk memperindah tampilan web. Lalu Javascript
                bertugas untuk membuat halaman web menjadi hidup. Karena dengan
                Javascript, kita dapat menentukan fungsi-fungsi maupun efek yang
                akan diterapkan di website. Kita akan fokus dulu membahas HTML.
              </p>
            </div>
          </div>
          <div className="w-[20px]"></div>
          <div className="bg-white w-[50%] h-full p-[20px] rounded-[8px] shadow-xl">
            <iframe
              width="100%"
              height="335px"
              src={youtubeUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
              className="rounded-[8px]"
            ></iframe>
            <div className="h-[20px]"></div>
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Pertemuan 1 Pengenalan dasar html | Riad Sahara, S.Si., M.T
            </span>
          </div>
        </div>
      </Slide>
      <div className="h-[20px]"></div>
      <Slide triggerOnce direction="up">
        <div className="flex items-center">
          <div className="w-[50%] h-full p-[20px] bg-white rounded-[8px] shadow-xl">
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Modul Pemrogaman Web 1 - Pertemuan 1
            </span>
            <div className="h-[20px]"></div>
            <iframe
              width={"100%"}
              height="850px"
              src={pdfUrlMoadulPertemuan1}
              allowFullScreen
              className="object-cover rounded-[8px]"
              title="pdf"
              style={{
                border: "none",
              }}
            ></iframe>
            <div className="h-[20px]"></div>
            <a
              href={pdfUrlMoadulPertemuan1}
              download
              className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
            >
              <FaFilePdf />
              <div className="w-[8px]"></div>
              Download PDF
            </a>
          </div>
          <div className="w-[20px]"></div>
          <div className="w-[50%] h-full p-[20px] bg-white rounded-[8px] shadow-xl">
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Pengenalan Dasar HTML Untuk Pemula
            </span>
            <div className="h-[20px]"></div>
            <iframe
              width={"100%"}
              height="850px"
              src={pdfUrlPertemuan1}
              allowFullScreen
              className="object-cover rounded-[8px]"
              title="pdf"
              style={{
                border: "none",
              }}
            ></iframe>
            <div className="h-[20px]"></div>
            <a
              href={pdfUrlPertemuan1}
              download
              className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
            >
              <FaFilePdf />
              <div className="w-[8px]"></div>
              Download PDF
            </a>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default PerTemuan1;
