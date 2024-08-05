import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  invoiceDate?: SortOrder;
  orderId?: SortOrder;
  updatedAt?: SortOrder;
};
