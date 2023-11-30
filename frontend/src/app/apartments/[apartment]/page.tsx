import DetailsItem from "@/app/components/detailsItem";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

type ApartmentType = {
  id: number;
  title: string;
  img: string;
  areaSize: string;
  price: number;
  installmentPlan?: string;
  description?: string;
};

async function getData(id: number): Promise<ApartmentType> {
  const res = await fetch(`http://localhost:4000/api/apartment/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({
  params: { apartment },
}: {
  params: { apartment: number };
}) {
  const details = await getData(apartment);
  console.log("details", details);

  return (
    <div className="border rounded p-0.5">
      <Image
        src={"/apart.jpg"}
        height="400"
        width={400}
        className="w-full"
        alt={""}
      />
      <div className="mt-2">
        <DetailsItem title="Title" value={details.title} />
        <DetailsItem title="Description" value={details.description} />
        <DetailsItem title="Area Size" value={details.areaSize} />
        <DetailsItem title="Price" value={details.price} />
        <DetailsItem title="Installment Plan" value={details.installmentPlan} />
      </div>
    </div>
  );
}
