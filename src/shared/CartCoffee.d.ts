import { Coffee } from "./Coffee";

export type CartCoffee = Coffee & {
  size: string;
  quantity: number;
};
