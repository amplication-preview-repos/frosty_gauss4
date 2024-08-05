import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type InvoiceUpdateInput = {
  amount?: number | null;
  invoiceDate?: Date | null;
  order?: OrderWhereUniqueInput | null;
};
