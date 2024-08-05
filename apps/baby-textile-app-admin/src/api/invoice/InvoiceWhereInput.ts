import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  invoiceDate?: DateTimeNullableFilter;
  order?: OrderWhereUniqueInput;
};
