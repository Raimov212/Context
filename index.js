import React, { createContext } from "react";
import ComponentA from "./ComponentA";

export const UserContext = createContext();
export const ChanelContext = createContext();

const Context = () => {
  return (
    <div>
      <UserContext.Provider value={"Raimov"}>
        <ChanelContext.Provider value={"Jasurbek"}>
          <ComponentA />
        </ChanelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default Context;
