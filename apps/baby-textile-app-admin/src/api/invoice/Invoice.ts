import { Order } from "../order/Order";

export type Invoice = {
  amount: number | null;
  createdAt: Date;
  id: string;
  invoiceDate: Date | null;
  order?: Order | null;
  updatedAt: Date;
};
