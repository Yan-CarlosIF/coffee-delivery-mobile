import { Coffee } from "@/shared/Coffee";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      catalog: undefined;
      coffee: {
        coffee: Coffee;
      };
      cart: undefined;
    }
  }
}
