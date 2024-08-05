import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceUpdateManyWithoutOrdersInput } from "./InvoiceUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  invoices?: InvoiceUpdateManyWithoutOrdersInput;
  orderDate?: Date | null;
  status?: "Option1" | null;
};
