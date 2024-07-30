import Link from "next/link";
import { FaFilePdf } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Pertemuan12 = () => {
  const pdfUrlMoadulPertemuan12 =
    "file/pertemuan12/Modul Pemograman Web I - Pertemuan 12 - Menambahkan Audio pada HTML.pdf";
  const pdfUrlPertemuan12 =
    "file/pertemuan12/Pertemuan 12 - Menambahkan Audio pada HTML.pdf";
  const youtubeUrl = "https://www.youtube.com/embed/16cUF2UqpQE";

  return (
    <div className="w-full bg-white shadow-xl rounded-[8px] p-[20px]">
      <span className="text-[20px] text-[#3D3C38] font-[500]">
        Menambahkan Audio pada HTML
      </span>
      <div className="h-[20px]"></div>
      <p className="text-[14px] text-[#3D3C38]">
        Konten dalam web, tidak hanya dalam bentuk teks dan gambar saja. Tapi
        juga bisa dalam bentuk multimedia seperti audio dan video.
      </p>
      <p className="text-[14px] text-[#3D3C38]">
        {`Menambahkan audio pada HTML dapat dilakukan dengan menggunakan elemen (<audio>).
        Elemen ini memungkinkan Anda untuk menyisipkan audio ke dalam halaman
        web tanpa memerlukan plugin tambahan`}
      </p>
      <div className="h-[20px]"></div>
      <p className="text-[14px] text-[#3D3C38] w-[600px]">
        Pada tutorial ini, kita akan fokus membahas tentang audio di HTML.
        Konten audio biasanya berbentuk podcast, audiobook, dan musik. Lalu
        pertanyaanya: Bagaimana cara menambahkan audio di HTML? Mari kita bahas.
      </p>
      <div className="h-[16px]"></div>
      <div className="w-full h-[2px] bg-[#E4E3DD]"></div>
      <div className="h-[16px]"></div>
      <div className="flex items-center justify-between gap-[20px]">
        <div className="flex flex-col w-full">
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Menambahkan Audio menggunakan HTML 5
          </span>
          <div className="h-[20px]"></div>
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
          <Link
            href={
              "https://www.youtube.com/watch?v=16cUF2UqpQE&ab_channel=WarungBelajar"
            }
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
          >
            <FaYoutube />
            <div className="w-[8px]"></div>
            Go To Youtube
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Menambahkan Audio pada HTML PDF
          </span>
          <div className="h-[20px]"></div>
          <iframe
            width={"100%"}
            height="335px"
            src={pdfUrlPertemuan12}
            allowFullScreen
            className="object-cover rounded-[8px]"
            title="pdf"
            style={{
              border: "none",
            }}
          ></iframe>
          <div className="h-[20px]"></div>
          <a
            href={pdfUrlPertemuan12}
            download
            className="flex items-center justify-center rounded-[8px] bg-blue-500 p-[10px] w-[170px]"
          >
            <FaFilePdf />
            <div className="w-[8px]"></div>
            Download PDF
          </a>
        </div>
        <div className="flex flex-col w-full">
          <span className="text-[20px] text-[#3D3C38] font-[500]">
            Modul Pemrogaman Web 1 - Pertemuan 9
          </span>
          <div className="h-[20px]"></div>
          <iframe
            width={"100%"}
            height="335px"
            src={pdfUrlMoadulPertemuan12}
            allowFullScreen
            className="object-cover rounded-[8px]"
            title="pdf"
            style={{
              border: "none",
            }}
          ></iframe>
          <div className="h-[20px]"></div>
          <a
            href={pdfUrlMoadulPertemuan12}
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

export default Pertemuan12;
