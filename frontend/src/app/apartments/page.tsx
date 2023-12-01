import { ApartmentType } from "@/types/apiTypes";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";

async function getData(): Promise<ApartmentType[]> {
  const res = await fetch("http://localhost:4000/api/apartments", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const apartments = await getData();
  console.log("apartments", apartments);

  return (
    <div className="flex flex-col w-full">
      {apartments.map(({ title, areaSize, id, img, price }) => (
        <div
          key={id}
          className="flex p-2 border justify-between items-center mb-1"
        >
          <Image src={"/apart.jpg"} height="150" width="150" alt={""} />
          <div>Title: {title}</div>
          <div>Area Size: {areaSize}</div>
          <div>Price: {price}</div>
          <Link
            href={`/apartments/${id}`}
            className="rounded border p-1 bg-slate-800 text-white"
          >
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}
