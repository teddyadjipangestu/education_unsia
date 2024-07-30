"use client";
import { Slide } from "react-awesome-reveal";
import { FaFilePdf } from "react-icons/fa6";

const Pertemuan4 = () => {
  const pdfUrlModulPertemuan4 =
    "file/pertemuan4/Modul Pemograman Web I - Pertemuan 4 - Heading, Komentar, dan Text Formatting di HTML.pdf";
  const pdfUrlPertemuan4 =
    "file/pertemuan4/Pertemuan 4 - Heading-Komentar-Text Formatting di HTML.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/COkuM-JTnJU";

  return (
    <div className="pl-[30%] pr-[30%]">
      <div className="rounded-[8px] bg-white shadow-xl p-[20px] flex flex-col">
        <span className="text-[20px] text-[#3D3C38] font-[500]">
          Heading-Komentar-Text Formatting di HTML
        </span>
        <div className="h-[20px]"></div>
        <span className="text-[14px] text-[#3D3C38] font-[600]">
          Heading adalah sebuah judul{" "}
          <span className="text-[14px] text-[#3D3C38] font-[400]">
            yang biasanya diberikan pada halaman atau beberapa bagian dari
            artikel.
          </span>
        </span>
        <div className="h-[10px]"></div>
        <span className="text-[14px] text-[#3D3C38]">
          Jika kamu sering menulis artikel, pasti ini tidak asing buatmu.
        </span>
        <div className="h-[10px]"></div>
        <span className="text-[14px] text-[#3D3C38] font-[600]">
          Komentar adalah elemen yang akan diabaikan oleh browser.{" "}
          <span className="text-[14px] text-[#3D3C38] font-[400]">
            Ia tidak akan ditampilkan di dalam web.
          </span>
        </span>
        <div className="h-[10px]"></div>
        <span className="text-[14px] text-[#3D3C38]">
          Komentar biasanya digunakan untuk memberikan informasi tambahan pada
          kode HTML dan kadang juga digunakan untuk menon-aktifkan beberapa kode
          HTML.
        </span>
        <span className="text-[14px] text-[#3D3C38]">
          Teks yang terformat akan lebih mudah dibaca, karena ada penegasan
          seperti <span className="font-[600]">teks tebal,</span>{" "}
          <span className="italic">miring,</span> dan{" "}
          <span className="underline">garis bawah.</span>
        </span>
        <div className="h-[10px]"></div>
        <span className="text-[14px] text-[#3D3C38]">
          Saat kita mencari kata atau kalimat penting.. mata kita akan lebih
          mudah menemukannya pada teks yang terformat dibandingkan plain text.
          Karena itu, dalam membuat web.. ada baiknya menggunakan format teks.
          Nah, di HTML terdapat tag-tag yang khusus digunakan untuk text
          formatting.
        </span>
        <div className="h-[20px]"></div>
        <Slide triggerOnce direction="down">
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Heading HTM-riad
          </span>
          <div className="h-[20px]"></div>
          <iframe
            width="100%"
            height="300px"
            src={youtubeUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
            className="rounded-[8px]"
          ></iframe>
        </Slide>
        <div className="h-[20px]"></div>
        <Slide triggerOnce direction="left">
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Heading Komentar Text Formatting di HTML
          </span>
          <div className="h-[20px]"></div>
          <iframe
            width={"100%"}
            height="850px"
            src={pdfUrlPertemuan4}
            allowFullScreen
            className="object-cover rounded-[8px]"
            title="pdf"
            style={{
              border: "none",
            }}
          ></iframe>
        </Slide>
        <div className="h-[20px]"></div>
        <Slide triggerOnce direction="right">
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Modul Pemrogaman Web 1 - Pertemuan 4
          </span>
          <div className="h-[20px]"></div>
          <iframe
            width={"100%"}
            height="850px"
            src={pdfUrlModulPertemuan4}
            allowFullScreen
            className="object-cover rounded-[8px]"
            title="pdf"
            style={{
              border: "none",
            }}
          ></iframe>
        </Slide>
        <div className="h-[20px]"></div>
        <Slide triggerOnce direction="up">
          <a
            href={pdfUrlModulPertemuan4}
            download
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px]"
          >
            <FaFilePdf />
            <div className="w-[8px]"></div>
            <span className="text-[12px]">
              Pertemuan 4 - Heading-Komentar-Text Formatting di HTML
            </span>
          </a>
        </Slide>
        <div className="h-[20px]"></div>
        <Slide triggerOnce direction="up">
          <a
            href={pdfUrlModulPertemuan4}
            download
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px]"
          >
            <FaFilePdf className="" />
            <div className="w-[8px]"></div>
            <span className="line-clamp-1 text-[12px] ">
              {" "}
              Modul Pemograman Web I - Pertemuan 4 - Heading, Komentar, dan Text
              Formatting di HTML
            </span>
          </a>
        </Slide>
      </div>
    </div>
  );
};

export default Pertemuan4;
