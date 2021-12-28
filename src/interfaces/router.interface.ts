import { FunctionComponent } from "react";

export type AppRoutesType = {
  isAuth: boolean;
  component: FunctionComponent;
  isPublic?: boolean;
};
