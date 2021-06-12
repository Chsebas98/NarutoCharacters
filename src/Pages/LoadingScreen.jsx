import React from "react";

const LoadingScreen = () => {
  return (
    <div className="d-flex justify-content-center ">
      <div
        className="spinner-grow "
        style={{ width: "3rem", height: "3rem", marginTop: "15rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
