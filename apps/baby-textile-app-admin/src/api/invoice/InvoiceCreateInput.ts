import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  invoiceDate?: Date | null;
  order?: OrderWhereUniqueInput | null;
};
