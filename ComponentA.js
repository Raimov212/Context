import React, { useContext } from "react";
import { UserContext, ChanelContext } from "./index";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const User = useContext(UserContext);
  const Chanel = useContext(ChanelContext);
  return (
    <div>
      {User}.{Chanel}
      <ComponentB />
    </div>
  );
};

export default ComponentA;
