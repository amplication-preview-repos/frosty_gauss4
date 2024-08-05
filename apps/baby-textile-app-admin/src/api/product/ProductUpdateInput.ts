import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  color?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  itemCountInPackage?: number | null;
  name?: string | null;
  price?: number | null;
};
