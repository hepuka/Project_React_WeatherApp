import React from "react";

const Elorejelzes = ({ idojarasInfo }) => {
  console.log(idojarasInfo);

  if (idojarasInfo === null) {
    return <div>Please, choose a city!</div>;
  }
  return <div>{JSON.stringify(idojarasInfo)}</div>;
};

export default Elorejelzes;
