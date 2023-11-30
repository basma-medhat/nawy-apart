import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import {
  ApartmentType,
  GetApartmentPayloadType,
  IAddApartmentPayloadType,
  TypedRequestParams,
} from "./types/apartmentsTypes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apartments: ApartmentType[] = [
  {
    id: 1,
    title: "Mivida",
    img: "",
    areaSize: "120m",
    description: "2 rooms, 1 bathroom, 3 pieces living",
    price: 4000000,
    installmentPlan: "10 years",
  },
  {
    id: 2,
    title: "Zed",
    img: "",
    areaSize: "90m",
    description: "1 rooms, 1 bathroom, 3 pieces living",
    price: 2000000,
    installmentPlan: "6 years",
  },
];

// list
app.get("/api/apartments", (req: Request, res: Response) => {
  res.json(apartments);
});

// details
app.get(
  "/api/apartment/:id",
  (req: TypedRequestParams<GetApartmentPayloadType>, res: Response) => {
    const apartmentId = Number(req.params.id);
    console.log("id", apartmentId);
    const apartmentDetails = apartments.filter(({ id }) => id === apartmentId);
    res.json(apartmentDetails[0]);
  }
);

// add
app.post("/api/apartment", (req: IAddApartmentPayloadType, res: Response) => {
  const newApartment = req.body;
  if (
    newApartment.title !== undefined &&
    newApartment.price !== undefined &&
    newApartment.img !== undefined &&
    newApartment.areaSize !== undefined
  ) {
    apartments.push({
      ...newApartment,
      id: apartments[apartments.length - 1].id + 1,
    });
    res.json({ message: "Apartment added successfully" });
  } else {
    res.status(500).json({ errorMsg: "required data not sent" });
  }
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
