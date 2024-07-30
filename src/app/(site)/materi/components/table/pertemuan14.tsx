import Image from "next/image";
import GambarCss from "../../../../../components/icons/gambar-CSS.jpg";
import { FaFilePdf } from "react-icons/fa6";

const Pertemuan14 = () => {
  const pdfUrlMoadulPertemuan14 =
    "file/pertemuan14/Modul Pemograman Web I - Pertemuan 14 - Pengenalan Dasar CSS.pdf";
  const pdfUrlPertemuan14 =
    "file/pertemuan14/Pertemuan 14 - Pengenalan Dasar CSS.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/jKDG1qFAtgA";

  return (
    <div className="w-full h-full pl-[20%] pr-[20%]">
      <div className="w-full bg-white shadow-xl rounded-[8px] h-full flex items-center pr-[15px]">
        <Image
          src={GambarCss}
          alt="css-image"
          className="object-cover"
          style={{
            width: 450,
            height: "100%",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        />
        <div className="w-[50px]"></div>
        <div className="flex flex-col ">
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Pengenalan Dasar CSS
          </span>
          <div className="h-[20px]"></div>
          <span className="text-[14px] text-[#3D3C38]">
            CSS adalah bahasa kedua setelah HTML yang harus dipelajari seorang
            web developer. Pengetahuan tentang CSS sangatlah penting bagi
            seorang web developer, karena dengan CSS kita bisa:
          </span>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38]">
            1. Halaman landing page yang menarik;
          </p>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38]">
            2. Template atau tema blog;
          </p>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38]">
            3. Mengubah PSD (Desain web) menjadi HTML;
          </p>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38]">4. dan sebagainya.</p>
        </div>
      </div>
      <div className="h-[30px]"></div>
      <div className="w-full bg-white shadow-xl rounded-[8px] flex items-center justify-end pl-[15px]">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[15px] text-[#3D3C38] font-[500] text-center">
            PERTEMUAN 14 Dr Windu Gata M Kom Pemgrograman Web I Pengenalan Dasar
            CSS
          </span>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38]">
            Berikut vidio youtube materi Pengenalan Dasar CSS
          </p>
        </div>
        <div className="w-[20px]"></div>
        <iframe
          width="650px"
          height="500px"
          src={youtubeUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
          style={{
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        ></iframe>
        <div className="flex justify-end"></div>
      </div>
      <div className="h-[30px]"></div>
      <div className="w-full bg-white shadow-xl rounded-[8px] h-full flex items-center pr-[15px]">
        <iframe
          width="500px"
          height="500px"
          src={pdfUrlMoadulPertemuan14}
          allowFullScreen
          className="object-cover"
          title="pdf"
          style={{
            border: "none",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        ></iframe>
        <div className="w-[50px]"></div>
        <div className="flex flex-col items-center">
          <span className="text-[20px] text-[#3D3C38] font-[500] text-center">
            Modul Pemrogaman Web 1 - Pertemuan 13
          </span>
          <div className="h-[20px]"></div>
          <a
            href={pdfUrlMoadulPertemuan14}
            download
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
          >
            <FaFilePdf />
            <div className="w-[8px]"></div>
            Download PDF
          </a>
        </div>
      </div>
      <div className="h-[30px]"></div>
      <div className="w-full bg-white shadow-xl rounded-[8px] h-full flex items-center pl-[15px]">
        <div className="flex flex-col items-center">
          <span className="text-[20px] text-[#3D3C38] font-[500] text-center">
            Pertemuan 14 - Pengenalan Dasar CSS
          </span>
          <div className="h-[20px]"></div>
          <a
            href={pdfUrlPertemuan14}
            download
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
          >
            <FaFilePdf />
            <div className="w-[8px]"></div>
            Download PDF
          </a>
        </div>
        <div className="w-[20px]"></div>
        <iframe
          width="430px"
          height="500px"
          src={pdfUrlPertemuan14}
          allowFullScreen
          className="object-cover"
          title="pdf"
          style={{
            border: "none",
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Pertemuan14;
