import { Suspense } from "react";
import PerTemuan1 from "./table/pertemuan1";
import PerTemuan2 from "./table/pertemuan2";
import Pertemuan3 from "./table/pertemuan3";
import Pertemuan4 from "./table/pertemuan4";
import Pertemuan5 from "./table/pertemuan5";
import Pertemuan6 from "./table/pertemuan6";
import Pertemuan7 from "./table/pertemuan7";
import Pertemuan8 from "./table/pertemuan8";
import Pertemuan9 from "./table/pertemuan9";
import Pertemuan10 from "./table/pertemuan10";
import PerTemuan11 from "./table/pertemuan11";
import Pertemuan12 from "./table/pertemuan12";
import Pertemuan13 from "./table/pertemuan13";
import Pertemuan14 from "./table/pertemuan14";

const MainTableMateri = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const keyString = `tab=${searchParams?.tab}`;

  switch (searchParams?.tab) {
    case "materi14":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <Pertemuan14 />
        </Suspense>
      );
    case "materi13":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <Pertemuan13 />
        </Suspense>
      );
    case "materi12":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <Pertemuan12 />
        </Suspense>
      );
    case "materi11":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <PerTemuan11 />
        </Suspense>
      );
    case "materi10":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <Pertemuan10 />
        </Suspense>
      );
    case "materi9":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <Pertemuan9 />
        </Suspense>
      );
    case "materi8":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <Pertemuan8 />
        </Suspense>
      );
    case "materi7":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <Pertemuan7 />
        </Suspense>
      );
    case "materi6":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <Pertemuan6 />
        </Suspense>
      );
    case "materi5":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <Pertemuan5 />
        </Suspense>
      );
    case "materi4":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <Pertemuan4 />
        </Suspense>
      );
    case "materi3":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <Pertemuan3 />
        </Suspense>
      );
    case "materi2":
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <PerTemuan2 />
        </Suspense>
      );
    default:
      return (
        <Suspense key={keyString} fallback={"loading"}>
          <PerTemuan1 />
        </Suspense>
      );
  }
};

export default MainTableMateri;
