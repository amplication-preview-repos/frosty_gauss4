import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  color?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  itemCountInPackage?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
