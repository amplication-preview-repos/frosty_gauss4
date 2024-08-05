import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  orderDate?: DateTimeNullableFilter;
  status?: "Option1";
};
