"use client";
import Image from "next/image";
import TagHtml from "../../../../../components/icons/HTML-Tags-df.webp";
import { FaFilePdf } from "react-icons/fa6";
import { Slide } from "react-awesome-reveal";

const PerTemuan2 = () => {
  const pdfUrlModulPertemuan2 =
    "file/pertemuan2/Modul Pemograman Web I - Pertemuan 2.pdf";
  const pdfUrlPertemuan2 =
    "file/pertemuan2/Pertemuan 2 - Mengenal Tag, Elemen, dan Atribut dalam HTML.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/UVvsI12LITU";

  return (
    <div className="pl-[15%] pr-[15%]">
      <Slide triggerOnce>
        <div className="w-full h-full bg-white rounded-[8px] shadow-xl p-[20px] flex flex-col items-center justify-center">
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Tag, Elemen, dan Atribut dalam HTML
          </span>
          <div className="h-[20px]"></div>
          <div className="flex">
            <Image
              src={TagHtml}
              alt="logo-html"
              width={500}
              height={500}
              className="object-cover"
            />
            <div className="w-[30px]"></div>
            <div className="flex flex-col gap-3">
              <div className="flex">
                <span className="text-[14px] text-[#3D3C38]">1.</span>
                <div className="w-[8px]"></div>
                <span className="text-[14px] text-[#3D3C38]">
                  Tag adalah sebauh penanda awalan dan akhiran dari sebuah
                  elemen di HTML. Tag dibuat dengan kurung siku (), lalu di
                  dalamnya berisi nama tag dan kadang juga ditambahkan dengan
                  atribut.
                </span>
              </div>
              <div className="flex">
                <span className="text-[14px] text-[#3D3C38]">2. </span>
                <div className="w-[8px]"></div>
                <span className="text-[14px] text-[#3D3C38]">
                  Elemen dalam HTML adalah sebuah komponen yang menyusun dokumen
                  HTML. Elemen kadang juga disebut sebagai node, karena ia
                  merupakan salah satu jenis node yang menyusun dokumen HTML
                  dalam diagram HTML tree.
                </span>
              </div>
              <div className="flex">
                <span className="text-[14px] text-[#3D3C38]">3.</span>
                <div className="w-[8px]"></div>
                <span className="text-[14px] text-[#3D3C38]">
                  Atribut adalah kata khusus yang berada di dalam tag pembuka.
                  Atribut juga disebut sebagai modifier yang akan menentukan
                  perliaku dari elemen.
                </span>
              </div>
            </div>
          </div>
          <div className="h-[20px]"></div>
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Pertemuan 2 Mengenal tag, elemen dan atribut dalam HTML | Riad
            Sahara, S.Si., M.T
          </span>
          <div className="h-[20px]"></div>
          <iframe
            width="100%"
            height="500px"
            src={youtubeUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
            className="rounded-[8px]"
          ></iframe>
        </div>
      </Slide>
      <div className="h-[20px]"></div>
      <Slide triggerOnce>
        <div className="w-full h-full bg-white rounded-[8px] shadow-xl p-[20px]">
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Mengenal Tag, Elemen, dan Atribut dalam HTML
          </span>
          <div className="h-[20px]"></div>
          <iframe
            width={"100%"}
            height="850px"
            src={pdfUrlPertemuan2}
            allowFullScreen
            className="object-cover rounded-[8px]"
            title="pdf"
            style={{
              border: "none",
            }}
          ></iframe>
          <div className="h-[20px]"></div>
          <a
            href={pdfUrlPertemuan2}
            download
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
          >
            <FaFilePdf />
            <div className="w-[8px]"></div>
            Download PDF
          </a>
        </div>
      </Slide>
      <div className="h-[20px]"></div>
      <Slide triggerOnce>
        <div className="w-full h-full bg-white rounded-[8px] shadow-xl p-[20px]">
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Modul Pemrogaman Web 1 - Pertemuan 2
          </span>
          <div className="h-[20px]"></div>
          <iframe
            width={"100%"}
            height="850px"
            src={pdfUrlModulPertemuan2}
            allowFullScreen
            className="object-cover rounded-[8px]"
            title="pdf"
            style={{
              border: "none",
            }}
          ></iframe>
          <div className="h-[20px]"></div>
          <a
            href={pdfUrlModulPertemuan2}
            download
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
          >
            <FaFilePdf />
            <div className="w-[8px]"></div>
            Download PDF
          </a>
        </div>
      </Slide>
    </div>
  );
};

export default PerTemuan2;
