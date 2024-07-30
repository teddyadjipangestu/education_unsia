import { FaFilePdf } from "react-icons/fa6";

const Pertemuan7 = () => {
  const pdfUrlModulPertemuan7 =
    "file/pertemuan7/Modul Pemograman Web I - Pertemuan 7 - Membuat List di HTML.pdf";
  const pdfUrlPertemuan7 =
    "file/pertemuan7/Pertemuan 7 - Membuat List pada HTML.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/u2OHREqqhbM";

  return (
    <div className="w-full bg-white h-full shadow-xl rounded-[8px] p-[20px]">
      <span className="text-[20px] text-[#3D3C38] font-[500]">
        Membuat List di HTML
      </span>
      <div className="h-[20px]"></div>
      <span className="text-[14px] text-[#3D3C38]">
        Daftar (list) di HTML digunakan untuk menampilkan kelompok item dalam
        urutan tertentu atau tidak berurutan. Ada dua jenis daftar utama dalam
        HTML: daftar tidak berurutan (unordered list) dan daftar berurutan
        (ordered list). Selain itu, ada daftar definisi (definition list) untuk
        pasangan istilah dan deskripsi.
      </span>
      <div className="flex flex-col items-center justify-center">
        <div className="h-[16px]"></div>
        <div className="w-full h-[1px] bg-[#E4E3DD]"></div>
        <div className="h-[16px]"></div>
        <span className="text-[20px] text-[#3D3C38] font-[500]">
          Belajar HTML Part 6 : Membuat List di HTML
        </span>
        <div className="h-[20px]"></div>
        <iframe
          width="70%"
          height="500px"
          src={youtubeUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
          className="rounded-[8px]"
        ></iframe>
        <div className="h-[16px]"></div>
        <div className="w-full h-[1px] bg-[#E4E3DD]"></div>
        <div className="h-[16px]"></div>
        <span className="text-[20px] text-[#3D3C38] font-[500]">
          Membuat List pada HTML
        </span>
        <div className="h-[20px]"></div>
        <iframe
          width="70%"
          height="850px"
          src={pdfUrlPertemuan7}
          allowFullScreen
          className="object-cover rounded-[8px]"
          title="pdf"
          style={{
            border: "none",
          }}
        ></iframe>
        <div className="h-[15px]"></div>
        <a
          href={pdfUrlPertemuan7}
          download
          className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
        >
          <FaFilePdf />
          <div className="w-[8px]"></div>
          Download PDF
        </a>
        <div className="h-[16px]"></div>
        <div className="w-full h-[1px] bg-[#E4E3DD]"></div>
        <div className="h-[16px]"></div>
        <span className="text-[20px] text-[#3D3C38] font-[500]">
          Modul Pemrogaman Web 1 - Pertemuan 7
        </span>
        <div className="h-[20px]"></div>
        <iframe
          width="70%"
          height="850px"
          src={pdfUrlModulPertemuan7}
          allowFullScreen
          className="object-cover rounded-[8px]"
          title="pdf"
          style={{
            border: "none",
          }}
        ></iframe>
        <div className="h-[15px]"></div>
        <a
          href={pdfUrlModulPertemuan7}
          download
          className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
        >
          <FaFilePdf />
          <div className="w-[8px]"></div>
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default Pertemuan7;
