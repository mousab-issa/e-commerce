export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export type initialStateType = {
  products: Product[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  currentPage: number;
  totalPages: number;
  limit: number;
};
