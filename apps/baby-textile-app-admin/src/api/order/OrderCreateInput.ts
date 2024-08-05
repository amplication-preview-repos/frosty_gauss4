import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceCreateNestedManyWithoutOrdersInput } from "./InvoiceCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  invoices?: InvoiceCreateNestedManyWithoutOrdersInput;
  orderDate?: Date | null;
  status?: "Option1" | null;
};
