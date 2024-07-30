"use client";
import { Slide } from "react-awesome-reveal";
import { FaFilePdf } from "react-icons/fa6";

const Pertemuan6 = () => {
  const pdfUrlModulPertemuan6 =
    "file/pertemuan6/Modul Pemograman Web I - Pertemuan 6 - Gambar dan Tabel di HTML.pdf";
  const pdfUrlPertemuan6 =
    "file/pertemuan6/Pertemuan 6 - Gambar dan Tabel di HTML.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/O3jJiyssD04";

  return (
    <div className="w-full h-full flex gap-[20px]">
      <div className="w-full h-full bg-white shadow-xl rounded-[8px] p-[20px]">
        <Slide triggerOnce duration={1200}>
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Gambar dan Tabel di HTML
          </span>
          <div className="h-[20px]"></div>
          <span className="text-[14px] text-[#3D3C38]">
            Gambar akan membuat website kita terlihat lebih menarik. Karena otak
            kita lebih mudah menyerap informasi dengan visual dibandingkan hanya
            teks saja. Karena itu, gambar sangatlah penting. Pada tutorial ini,
            kita akan belajar cara menambahkan gambar di HTML.
          </span>
          <div className="h-[10px]"></div>
          <span className="text-[14px] text-[#3D3C38]">
            Salah satu cara atau format menampilkan informasi dalam web adalah
            dengan tabel. Tabel terdiri dari 4 unsur utama:
          </span>
          <div className="h-[5px]"></div>
          <span className="text-[14px] text-[#3D3C38]">1. Baris</span>
          <div className="h-[5px]"></div>
          <span className="text-[14px] text-[#3D3C38]">2. Kolom</span>
          <div className="h-[5px]"></div>
          <span className="text-[14px] text-[#3D3C38]">3. Sel</span>
          <div className="h-[5px]"></div>
          <span className="text-[14px] text-[#3D3C38]">4. Garis</span>
        </Slide>
      </div>
      <div className="w-full h-full bg-white shadow-xl rounded-[8px] p-[20px]">
        <Slide triggerOnce duration={1300}>
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Pertemuan 6 Gambar Dan Tabel HTML
          </span>
          <div className="h-[20px]"></div>
          <iframe
            width="100%"
            height="337px"
            src={youtubeUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
            className="rounded-[8px]"
          ></iframe>
        </Slide>
      </div>
      <div className="w-full h-full bg-white shadow-xl rounded-[8px] p-[20px]">
        <Slide triggerOnce duration={1400}>
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Modul Pemrogaman Web 1 - Pertemuan 6
          </span>
          <div className="h-[15px]"></div>
          <iframe
            width="100%"
            height="284px"
            src={pdfUrlModulPertemuan6}
            allowFullScreen
            className="object-cover rounded-[8px]"
            title="pdf"
            style={{
              border: "none",
            }}
          ></iframe>
          <div className="h-[15px]"></div>
          <a
            href={pdfUrlModulPertemuan6}
            download
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
          >
            <FaFilePdf />
            <div className="w-[8px]"></div>
            Download PDF
          </a>
        </Slide>
      </div>
      <div className="w-full h-full bg-white shadow-xl rounded-[8px] p-[20px]">
        <Slide triggerOnce duration={1500}>
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Gambar dan Tabel di HTML
          </span>
          <div className="h-[20px]"></div>
          <iframe
            width="100%"
            height="308px"
            src={pdfUrlPertemuan6}
            allowFullScreen
            className="object-cover rounded-[8px]"
            title="pdf"
            style={{
              border: "none",
            }}
          ></iframe>
          <div className="h-[15px]"></div>
          <a
            href={pdfUrlPertemuan6}
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
  );
};

export default Pertemuan6;
