import { Customer } from "../customer/Customer";
import { Invoice } from "../invoice/Invoice";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  invoices?: Array<Invoice>;
  orderDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
