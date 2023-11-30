import { Request, Response } from "express";
import { Params } from "express-serve-static-core";

export type ApartmentType = {
  id: number;
  title: string;
  img: string;
  areaSize: string;
  price: number;
  installmentPlan?: string;
  description?: string;
};

export interface IGetApartmentsResponseType extends Response {
  data: ApartmentType[];
}

export type GetApartmentPayloadType = {
  id: string;
};

export type AddApartmentPayloadType = Omit<ApartmentType, "id">;

export interface IAddApartmentPayloadType extends Request {
  body: AddApartmentPayloadType;
}

export interface TypedRequestParams<T extends Params> extends Express.Request {
  params: T;
}
