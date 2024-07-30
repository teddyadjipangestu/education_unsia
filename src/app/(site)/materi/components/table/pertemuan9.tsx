"use client";
import { FaFilePdf } from "react-icons/fa6";

const Pertemuan9 = () => {
  const pdfUrlModulPertemuan9 =
    "file/pertemuan9/Modul Pemograman Web I - Pertemuan 9 - Membuat Form pada HTML.pdf";
  const pdfUrlPertemuan9 =
    "file/pertemuan9/Pertemuan 9 - Membuat Form pada HTML.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/c_cc_BTC6-A";

  return (
    <div className="w-full h-full bg-white rounded-[8px] shadow-xl p-[20px]">
      <span className="text-[20px] text-[#3D3C38] font-[500]">
        Membuat Form pada HTML
      </span>
      <div className="h-[20px]"></div>
      <p className="text-[14px] text-[#3D3C38] w-[600px]">
        Membuat form pada HTML adalah salah satu dasar dalam pengembangan web.
        Formulir digunakan untuk mengumpulkan data dari pengguna, seperti input
        teks, pilihan, file, dan lainnya.
      </p>
      <div className="h-[20px]"></div>
      <div className="w-full h-[1px] bg-[#E4E3DD]"></div>
      <div className="h-[20px]"></div>
      <div className="flex w-full justify-between">
        <span className="text-[18px] text-[#3D3C38] font-[500]">
          1. Cara Membuat Form Pada Web dengan HTML
        </span>
        <div className="w-[40px]"></div>
        <iframe
          width="65%"
          height="500px"
          src={youtubeUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
          className="rounded-[8px]"
        ></iframe>
      </div>
      <div className="h-[30px]"></div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <span className="text-[18px] text-[#3D3C38] font-[500]">
            2. Membuat Form pada HTML
          </span>
          <div className="h-[10px]"></div>
          <a
            href={pdfUrlPertemuan9}
            download
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
          >
            <FaFilePdf />
            <div className="w-[8px]"></div>
            Download PDF
          </a>
        </div>
        <div className="w-[40px]"></div>
        <iframe
          width="65%"
          height="600px"
          src={pdfUrlPertemuan9}
          allowFullScreen
          className="object-cover rounded-[8px]"
          title="pdf"
          style={{
            border: "none",
          }}
        ></iframe>
      </div>
      <div className="h-[30px]"></div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <span className="text-[18px] text-[#3D3C38] font-[500]">
            3. Modul Pemrogaman Web 1 - Pertemuan 9
          </span>
          <div className="h-[10px]"></div>
          <a
            href={pdfUrlModulPertemuan9}
            download
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
          >
            <FaFilePdf />
            <div className="w-[8px]"></div>
            Download PDF
          </a>
        </div>
        <div className="w-[40px]"></div>
        <iframe
          width="65%"
          height="600px"
          src={pdfUrlModulPertemuan9}
          allowFullScreen
          className="object-cover rounded-[8px]"
          title="pdf"
          style={{
            border: "none",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Pertemuan9;
