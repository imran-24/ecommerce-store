import { Billboard } from "@/types";
import { cache } from "react";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard= async(): Promise<Billboard[]> =>{
    const res = await fetch(`${URL}/`, {cache: "no-cache"})
    return res.json()
}