import Image from "next/image";
import elementSimantik from "../../../../../components/icons/element-simantik-html.png";
import { FaFilePdf } from "react-icons/fa6";

const Pertemuan10 = () => {
  const pdfUrlModulPertemuan10 =
    "file/pertemuan10/Modul Pemograman Web I - Pertemuan 10 - Elemen Semantik pada HTML.pdf";
  const pdfUrlPertemuan10 =
    "file/pertemuan10/Pertemuan 10 - Membuat Elemen Semantik pada HTML.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/cp65r8rbtis";

  return (
    <div className="pl-[20%] pr-[20%]">
      <div className="bg-white rounded-[8px] w-full h-full shadow-xl p-[20px]">
        <div className="flex items-center justify-center flex-col">
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Membuat Elemen Semantik pada HTML
          </span>
          <div className="h-[20px]"></div>
          <p className="text-[14px] text-[#3D3C38] text-center">
            Elemen semantik dalam HTML adalah elemen yang memiliki arti khusus
            dan jelas bagi browser dan pengembang. Elemen-elemen ini memberikan
            konteks yang lebih baik tentang isi halaman web, membantu mesin
            pencari memahami struktur dan konten, serta meningkatkan
            aksesibilitas.
          </p>
          <div className="h-[4px]"></div>
          <p className="text-[14px] text-[#3D3C38] text-center">
            Semantic HTML adalah konsep dalam pengembangan web yang berfungsi
            menyediakan makna atau arti lebih dalam kode HTML. Dalam semantic
            HTML, masing-masing elemen memiliki nama yang mencerminkan arti dari
            kontennya, bukan hanya presentasinya. Semantic membantu mesin
            pencari dan perangkat pembaca layar (screen reader) untuk memahami
            struktur dan konten dari halaman web dengan lebih maksimal. Artinya,
            jika kamu ingin membuat kode yang mudah dipahami, tidak hanya oleh
            manusia tapi juga oleh mesin, semantic HTML adalah solusi yang
            tepat.
          </p>
          <div className="h-[20px]"></div>
          <Image
            src={elementSimantik}
            alt="elemet-simantik"
            width={500}
            height={500}
            className=" object-cover"
          />
          <div className="h-[30px]"></div>
          <span className="text-[20px] text-[#3D3C38] font-[500] text-center">
            Di bawah ini kita akan memberikan sebuah vidio dan materi tentang
            Elemen Simantik Pada HTML
          </span>
          <span className="text-[14px] text-[#3D3C38] text-center">
            Tolong pahami dan perhatikan beberapa vidio dan materi dengan
            seksama
          </span>
          <div className="h-[50px]"></div>
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Membuat Elemen Semantik Pada HTML
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
          <div className="h-[20px]"></div>
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Pertemuan 10 - Membuat Elemen Semantik Pada HTML
          </span>
          <div className="h-[20px]"></div>
          <iframe
            width="100%"
            height="600px"
            src={pdfUrlPertemuan10}
            allowFullScreen
            className="object-cover rounded-[8px]"
            title="pdf"
            style={{
              border: "none",
            }}
          ></iframe>
          <div className="h-[20px]"></div>
          <a
            href={pdfUrlPertemuan10}
            download
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
          >
            <FaFilePdf />
            <div className="w-[8px]"></div>
            Download PDF
          </a>
          <div className="h-[20px]"></div>
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Modul Pemrogaman Web 1 - Pertemuan 10
          </span>
          <div className="h-[20px]"></div>
          <iframe
            width="100%"
            height="600px"
            src={pdfUrlModulPertemuan10}
            allowFullScreen
            className="object-cover rounded-[8px]"
            title="pdf"
            style={{
              border: "none",
            }}
          ></iframe>
          <div className="h-[20px]"></div>
          <a
            href={pdfUrlModulPertemuan10}
            download
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
          >
            <FaFilePdf />
            <div className="w-[8px]"></div>
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pertemuan10;
