import { Category } from "../category/Category";

export type Product = {
  category?: Category | null;
  color: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  itemCountInPackage: number | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
