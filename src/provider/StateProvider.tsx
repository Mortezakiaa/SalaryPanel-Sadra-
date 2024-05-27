"use client";

import store from "@/statemanagment/store/store";
import { Provider } from "react-redux";

export default function StateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
