import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
