"use client";
import Image from "next/image";
import MenampilkanVidio from "../../../../../components/icons/menampilkan-vidio-html.png";
import { FaFilePdf } from "react-icons/fa6";
import { Slide } from "react-awesome-reveal";

const PerTemuan11 = () => {
  const pdfUrlMoadulPertemuan11 =
    "file/pertemuan11/Modul Pemograman Web I - Pertemuan 11 - Menampilkan Video pada HTML.pdf";
  const pdfUrlPertemuan11 =
    "file/pertemuan11/Pertemuan 11 - Menampilkan Video pada HTML.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/7MdcfVM2Zz0";

  return (
    <div className="w-full h-full">
      <Slide triggerOnce direction="down">
        <div className="flex items-center ">
          <div className="flex flex-col items-center justify-center w-[50%] h-full bg-white rounded-[8px] shadow-xl p-[20px]">
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Menampilkan Video pada HTML
            </span>
            <div className="h-[20px]"></div>
            <div className="flex items-center">
              <Image
                src={MenampilkanVidio}
                alt="logo-html"
                width={375}
                height={100}
                className="object-cover"
              />
              <div className="flex flex-col">
                <p className="text-[14px] text-[#3D3C38]">
                  Pada pertemuan sebelumnya, kita sudah belajar cara menambahkan
                  gambar di HTML. Namun, ini belumlah cukup, karena sekarang
                  konten di web tidak hanya dalam bentuk teks dan gambar saja.
                  Konten lainnya yang bisa ditambahkan di HTML adalah audio dan
                  juga video. Nah, pada pertemuan kali ini, kita akan belajar
                  cara menambahkan video di HTML.
                </p>
                <div className="h-[15px]"></div>
                <p className="text-[14px] text-[#3D3C38]">
                  {` Menampilkan video pada HTML dapat dilakukan dengan menggunakan
                elemen ( <video>.). Elemen ini memungkinkan Anda untuk menyisipkan video ke
                dalam halaman web tanpa memerlukan plugin tambahan seperti
                Flash.`}
                </p>
              </div>
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
              Menampilkan Video pada HTML
            </span>
          </div>
        </div>
      </Slide>
      <div className="h-[20px]"></div>
      <Slide triggerOnce direction="up">
        <div className="flex items-center">
          <div className="w-[50%] h-full p-[20px] bg-white rounded-[8px] shadow-xl">
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Modul Pemrogaman Web 1 - Pertemuan 11
            </span>
            <div className="h-[20px]"></div>
            <iframe
              width={"100%"}
              height="850px"
              src={pdfUrlMoadulPertemuan11}
              allowFullScreen
              className="object-cover rounded-[8px]"
              title="pdf"
              style={{
                border: "none",
              }}
            ></iframe>
            <div className="h-[20px]"></div>
            <a
              href={pdfUrlMoadulPertemuan11}
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
              Menampilkan Video Pada HTML
            </span>
            <div className="h-[20px]"></div>
            <iframe
              width={"100%"}
              height="850px"
              src={pdfUrlPertemuan11}
              allowFullScreen
              className="object-cover rounded-[8px]"
              title="pdf"
              style={{
                border: "none",
              }}
            ></iframe>
            <div className="h-[20px]"></div>
            <a
              href={pdfUrlPertemuan11}
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

export default PerTemuan11;
