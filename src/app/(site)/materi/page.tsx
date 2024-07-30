import MainTableMateri from "./components/MainTabMateri";
import TabMenuMateri from "./components/TabMenuMateri";

interface ParamProps {
  searchParams: { [key: string]: string };
}

const Materi: React.FC<ParamProps> = ({ searchParams }) => {
  return (
    <div className=" gap-5 flex flex-col">
      <span className="font-bold text-[28px] text-[#3D3C38]">Materi</span>
      <TabMenuMateri />
      <MainTableMateri searchParams={searchParams} />
    </div>
  );
};

export default Materi;
