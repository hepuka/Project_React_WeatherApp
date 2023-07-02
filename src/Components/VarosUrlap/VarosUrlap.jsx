import React, { useState } from "react";

const VarosUrlap = ({ getCity }) => {
  //  const varosRef = useRef(null);
  const [varosInfo, setVarosInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getCity(varosInfo); //itt adjul át az input értékét a szülő komponensnek
  };

  const handleVarosChange = (e) => {
    setVarosInfo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Város:
        {/* <input type="text" name="varos" ref={varosRef} /> */}
        <input
          type="text"
          name="varos"
          value={varosInfo}
          onChange={handleVarosChange}
        />
      </label>
      <button type="submit">Lekérdez</button>
    </form>
  );
};

export default VarosUrlap;
