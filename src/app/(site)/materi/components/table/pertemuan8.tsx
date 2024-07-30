import Link from "next/link";
import Teacher from "../../../../../components/icons/TEACHER.png";
import Image from "next/image";

const Pertemuan8 = () => {
  return (
    <div className="w-full h-full bg-white shadow-xl rounded-[8px] p-[20px]">
      <span className="text-[20px] text-[#3D3C38] font-[500]">
        Selamat Datang di Materi Khusus Kami!
      </span>
      <div className="flex">
        <div className="flex flex-col w-[50%]">
          <div className="h-[20px]"></div>
          <span className="text-[14px] text-[#3D3C38]">
            Materi yang Telah Dipelajari
          </span>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38] w-[500px]">
            Kami sangat bangga dengan kemajuan Anda sejauh ini! Anda telah
            mempelajari konsep-konsep penting yang akan menjadi dasar kuat dalam
            perjalanan pembelajaran Anda. Mari kita tinjau kembali beberapa poin
            utama yang telah kita bahas:
          </p>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38]">1. Pengenalan Dasar HTML</p>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38]">
            2. Tag, Elemen, dan Atribut dalam HTML
          </p>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38]">
            3. Membuat Paragraf di HTML
          </p>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38]">
            4. Heading-Komentar-Text Formatting di HTML
          </p>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38]">
            5. Membuat Link pada HTML
          </p>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38]">
            6. Gambar dan Tabel di HTML
          </p>
          <div className="h-[10px]"></div>
          <p className="text-[14px] text-[#3D3C38]">7. Membuat List di HTML</p>
          <div className="h-[20px]"></div>
        </div>
        <div className="flex flex-col w-[50%]">
          <span className="text-[14px] text-[#3D3C38]">Tugas Baru</span>
          <div className="h-[10px]"></div>
          <span className="text-[14px] text-[#3D3C38]">
            Sekarang saatnya untuk menerapkan pengetahuan Anda! Berikut adalah
            tugas yang dirancang khusus untuk menguji pemahaman Anda dan
            memperkuat apa yang telah Anda pelajari:
          </span>
          <div className="h-[10px]"></div>
          <span className="text-[14px] text-[#3D3C38]">
            1. <span className="font-[600]">Tugas : </span> Buatlah sebuah
            halaman website yang berisikan Curriculum Vitae (CV) diri Anda
            dengan template (CSS & JS, Bootsrap, dsb) serta memiliki susunan
            konten yang menarik
          </span>
          <div className="h-[10px]"></div>
          <span className="text-[14px] text-[#3D3C38]">
            Kami yakin bahwa tugas-tugas ini akan membantu Anda untuk lebih
            mendalami materi dan mempersiapkan Anda untuk langkah selanjutnya
            dalam perjalanan belajar Anda. Jangan ragu untuk menghubungi kami
            jika Anda memiliki pertanyaan atau membutuhkan bantuan lebih lanjut.
          </span>
          <div className="h-[10px]"></div>
          <span className="text-[14px] text-[#3D3C38] font-[600]">
            Selamat belajar dan sukses selalu!
          </span>
        </div>
      </div>
      <div className="h-[20px]"></div>
      <div className="flex items-center justify-center">
        <Image
          src={Teacher}
          alt="techer"
          width={500}
          height={500}
          className=" object-cover"
        />
      </div>
    </div>
  );
};

export default Pertemuan8;
