

import React from "react";
import { UserProvider } from "./UsersContext";
import { OpenProvider } from "./OpenContext";
import { CamerasReducerProvider } from "./CamerasContextReducer";


function Providers({ children }) {
  return (
    <UserProvider>
      <OpenProvider>{children}</OpenProvider>
      <CamerasReducerProvider></CamerasReducerProvider>
    </UserProvider>
  );
}

export default Providers;