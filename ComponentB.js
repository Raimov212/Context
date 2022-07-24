import React from "react";
import { UserContext, ChanelContext } from "./index";

const ComponentB = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChanelContext>
              {(chanel) => {
                return (
                  <div>
                    {user}
                    {chanel}
                  </div>
                );
              }}
            </ChanelContext>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentB;
