import Header from "@/components/header/Header";

const LayoutSite = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <Header />
      <div className="bg-[#F8F8F8] p-5 h-full overflow-y-auto">{children}</div>
    </div>
  );
};

export default LayoutSite;
