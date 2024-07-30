"use client";
import { Slide } from "react-awesome-reveal";
import GedungUnsia from "../../../components/icons/GEDUNG-UNSIA-1536x1024.png";
import Teacher from "../../../components/icons/TEACHER.png";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="w-full h-full">
      <span className="font-bold text-[28px] text-[#3D3C38]">Dashboard</span>
      <div className="h-[20px]"></div>
      <div className="w-full bg-white rounded-[8px] shadow-xl p-[20px]">
        <div className="flex flex-col">
          <span className="text-[#10487A] text-[20px] font-[600]">
            Universitas Siber Asia
          </span>
          <span className="text-[#152D38] text-[14px] font-[400]">
            Universitas Full Online
          </span>
        </div>
        <div className="h-[20px]"></div>
        <div className="flex items-center">
          <Slide triggerOnce>
            <div className="w-[600px] h-[600px]">
              <Image
                src={GedungUnsia}
                alt="gedung-unsia"
                className=" object-cover"
                fill
              />
            </div>
          </Slide>
          <div className="w-[700px]"></div>
          <div className="flex flex-col">
            <Slide triggerOnce duration={1500} direction="right">
              <span className="text-[#898880] font-[500] text-[14px]">
                Universitas Siber Asia atau UNSIA lahir atas inisiasi dua tokoh
                penting, yaitu Dr. El Amry Bermawi Putera dan Jan Youn Cho,
                Ph.D., MPA., CPA. Keduanya memiliki pengalaman Panjang di dunia
                Pendidikan tinggi. Dr. El Amry merupakan Rektor di Universitas
                Nasional, salah satu universitas tertua di Indonesia dan Jan
                Youn Cho, Ph.D., MPA., CPA adalah mantan Vice President of
                Hankuk University for Foreign Studies, yang sekaligus merupakan
                Operating Rector. Keduanya memiliki misi mulia untuk
                meningkatkan kualitas Pendidikan tinggi melalui pembelajaran
                berbasis full online learning.
              </span>
            </Slide>
            <div className="h-[10px]"></div>
            <Slide triggerOnce duration={1600} direction="right">
              <span className="text-[#898880] text-[14px]">
                Dibawah naungan Yayasan Memajukan Ilmu dan Kebudayaan (YMIK),
                UNSIA hadir unutk mendorong peningkatan Angka Partisipasi Kasar
                (APK) atau jumlah masyarakat usia produktif yang melanjutkan ke
                jenjang perguruan tinggi di Indonesia yang masih rendah.
              </span>
            </Slide>
            <div className="h-[10px]"></div>
            <Slide triggerOnce duration={1700} direction="right">
              <span className="text-[#898880] text-[14px]">
                Cyber university atau universitas siber adalah merupakan
                revolusi pengembangan perguruan tinggi yang berbasis pada konsep
                soft-university system melibatkan platform smart digital
                technology baik secara hardware maupun secara software yang
                bertujuan untuk meningkatkan keahlian mahasiswa dalam menguasai
                pilar-pilar pengembangan teknologi informasi yakni Artificial
                Intelligence, Machine Learning, Digital Twin, Big Data, Data
                Science, dan Quantum Computing.
              </span>
            </Slide>
            <div className="h-[10px]"></div>
            <Slide triggerOnce duration={1800} direction="right">
              <span className="text-[#898880] text-[14px]">
                Cyber University berorientasi pada era Smart Society 5.0, dimana
                tatanan interaksi social peradaban dunia semakin menyatu dengan
                dunia virtual atau online network sehingga interaksi tersebut
                memunculkan konsep pengembangan Smart City, Smart
                Factory/Industry, Smart Community, Smart military dan Smart
                Government. Untuk mendukung orientasi tersebut UNSIA
                mencanangkan program pengembangan yang menyiapkan lulusan untuk
                mampu memberikan kontribusi pada kemajuan IPTEK di era Smart
                Society 5.0.
              </span>
            </Slide>
            <div className="h-[10px]"></div>
            <Slide triggerOnce duration={1900} direction="right">
              <span className="text-[#898880] text-[14px]">
                Cyber University fokus dalam pengembangan kompetensi lulusan
                yang dibutuhkan di era Smart Society 5.0, dimana digital economy
                based on virtual activity akan semakin mendominasi dan
                dibutuhkan oleh setiap orang di dunia. Digital economy
                berpotensi sebagai driven factor for national growth of
                development dalam upaya mengangkat potensi ekonomi secara local
                dan nasional menjadi produk yang bermutu dan diandalkan oleh
                konsumen global (Sumber McKinsey).
              </span>
            </Slide>
          </div>
        </div>
      </div>
      <div className="h-[30px]"></div>
      <Slide triggerOnce direction="up" duration={2000}>
        <div className="flex justify-center">
          <div className="flex flex-col w-[400px] gap-3">
            <div className="flex">
              <span className="text-[#898880]  text-[14px]">1.</span>
              <span className="text-[#898880]  text-[14px]">
                Membangun tata kelola kampus online berbasis teknologi informasi
                yang mendukung layanan pendidikan tinggi secara massive dan
                online berbasis high-end Smart Digital Technology.
              </span>
            </div>
            <div className="flex">
              <span className="text-[#898880]  text-[14px]">2. </span>
              <span className="text-[#898880]  text-[14px]">
                Mengembangkan sumber daya dosen dan tenaga kependidikan yang
                mampu menguasai platform smart digital technology berorientasi
                pada pengembangan keilmuan dan dan applied skill.
              </span>
            </div>
            <div className="flex">
              <span className="text-[#898880]  text-[14px]">3.</span>
              <span className="text-[#898880]  text-[14px]">
                Mengembangkan sistem pembelajaran yang berorientasi pada luaran
                lulusan yang memiliki kemampuan dalam penguasaan applied science
                dan platform smart digital technology development dan
                berkarakter mandiri, inovatif, kreatif, mampu bekerja sama dan
                complex problem solving.
              </span>
            </div>
            <div className="flex">
              <span className="text-[#898880]  text-[14px]">4.</span>
              <span className="text-[#898880]  text-[14px]">
                Membangun roadmap penelitian dan pengabdian kepada masyarakat
                berorientasi pada pengembangan Smart Digital Technology untuk
                berkontribusi pengembangan Revolusi Industri 4.0.
              </span>
            </div>
            <div className="flex">
              <span className="text-[#898880]  text-[14px]">5.</span>
              <span className="text-[#898880]  text-[14px]">
                Menjalin networking dan kerjasama baik nasional dan
                internasional untuk mengembangkan kampus berbasis layanan
                online.
              </span>
            </div>
          </div>
          <div className="w-[30px]"></div>
          <Image
            src={Teacher}
            alt="Teacher-unsia"
            className=" object-cover"
            width={400}
            height={400}
          />
        </div>
      </Slide>
    </div>
  );
};

export default Dashboard;
