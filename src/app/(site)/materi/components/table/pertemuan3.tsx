"use client";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaChevronDown, FaChevronUp, FaFilePdf } from "react-icons/fa6";

const Pertemuan3 = () => {
  const pdfUrlModulPertemuan3 =
    "file/pertemuan3/Modul Pemograman Web I - Pertemuan 3 - Membuat Paragraf di HTML.pdf";
  const pdfUrlPertemuan3 =
    "file/pertemuan3/Pertemuan 3 - Membuat Paragraf di HTML.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/6e8F9ZaMg1c";

  const [openYoutube, setOpenYoutube] = useState<boolean>(false);
  const [openPertemuan3, setOpenPertemuan3] = useState<boolean>(false);
  const [openMoadulPertemuan3, setOpenModulPertemuan3] =
    useState<boolean>(false);

  const handleOpenYoutube = () => {
    setOpenYoutube(!openYoutube);
  };

  const handleOpenPertemuan3 = () => {
    setOpenPertemuan3(!openPertemuan3);
  };

  const handleOpenModulPertemuan3 = () => {
    setOpenModulPertemuan3(!openMoadulPertemuan3);
  };

  return (
    <div className="bg-white rounded-[8px] shadow-xl p-[20px]">
      <div className="flex flex-col items-center justify-center">
        <span className="text-[20px] text-[#3D3C38] font-[500]">
          Membuat Paragraf di HTML
        </span>
        <div className="h-[20px]"></div>
        <p className="text-[14px] text-[#3D3C38] ">
          Paragraf adalah kumpulan dari beberapa kalimat. Pada web, Paragraf
          biasanya digunakan untuk menampilkan teks atau artikel. Paragraf pada
          HTML dibuat dengan tag
        </p>
        <p className="text-[14px] text-[#3D3C38] ">
          {`Paragraf di HTML digunakan untuk mengelompokkan teks menjadi blok-blok
          yang terpisah agar lebih mudah dibaca dan dipahami. Dalam HTML,
          paragraf ditandai dengan elemen "<p>".`}
        </p>
      </div>
      <div className="h-[25px]"></div>
      <Slide triggerOnce direction="up">
        <div
          className="rounded-[12px] border border-[#E4E3DD] p-[20px] cursor-pointer"
          onClick={handleOpenYoutube}
        >
          <div className="flex items-start justify-between">
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Pertemuan 3 Membuat paragraf di HTML | Riad Sahara, S.Si., M.T
            </span>
            {openYoutube ? (
              <FaChevronUp color="#3D3C38" />
            ) : (
              <FaChevronDown color="#3D3C38" />
            )}
          </div>
          {openYoutube && (
            <>
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
            </>
          )}
        </div>
      </Slide>
      <div className="h-[25px]"></div>
      <Slide triggerOnce direction="up">
        <div
          className="rounded-[12px] border border-[#E4E3DD] p-[20px] cursor-pointer"
          onClick={handleOpenPertemuan3}
        >
          <div className="flex items-start justify-between">
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Membuat Paragraf di HTML
            </span>
            {openPertemuan3 ? (
              <FaChevronUp color="#3D3C38" />
            ) : (
              <FaChevronDown color="#3D3C38" />
            )}
          </div>
          {openPertemuan3 && (
            <>
              <div className="h-[20px]"></div>
              <iframe
                width={"100%"}
                height="850px"
                src={pdfUrlPertemuan3}
                allowFullScreen
                className="object-cover rounded-[8px]"
                title="pdf"
                style={{
                  border: "none",
                }}
              ></iframe>
              <div className="h-[20px]"></div>
              <a
                href={pdfUrlPertemuan3}
                download
                className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
              >
                <FaFilePdf />
                <div className="w-[8px]"></div>
                Download PDF
              </a>
            </>
          )}
        </div>
      </Slide>
      <div className="h-[25px]"></div>
      <Slide triggerOnce direction="up">
        <div
          className="rounded-[12px] border border-[#E4E3DD] p-[20px] cursor-pointer"
          onClick={handleOpenModulPertemuan3}
        >
          <div className="flex items-start justify-between">
            <span className="text-[20px] text-[#3D3C38] font-[500]">
              Modul Pemrogaman Web 1 - Pertemuan 3
            </span>
            {openMoadulPertemuan3 ? (
              <FaChevronUp color="#3D3C38" />
            ) : (
              <FaChevronDown color="#3D3C38" />
            )}
          </div>
          {openMoadulPertemuan3 && (
            <>
              <div className="h-[20px]"></div>
              <iframe
                width={"100%"}
                height="850px"
                src={pdfUrlModulPertemuan3}
                allowFullScreen
                className="object-cover rounded-[8px]"
                title="pdf"
                style={{
                  border: "none",
                }}
              ></iframe>
              <div className="h-[20px]"></div>
              <a
                href={pdfUrlModulPertemuan3}
                download
                className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
              >
                <FaFilePdf />
                <div className="w-[8px]"></div>
                Download PDF
              </a>
            </>
          )}
        </div>
      </Slide>
    </div>
  );
};

export default Pertemuan3;
