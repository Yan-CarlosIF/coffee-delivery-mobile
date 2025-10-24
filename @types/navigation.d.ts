import { Coffee } from "@/shared/Coffee";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      coffee: {
        coffee: Coffee;
      };
    }
  }
}
