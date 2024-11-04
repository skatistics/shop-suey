import React from "react";
import QRCode from "react-qr-code";

export default function SectionQR() {
  return (
    <div
      style={{
        height: "auto",
        margin: "0 auto",
        maxWidth: "100%",
        width: "100%",
      }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={"https://github.com/skatistics/shop-suey"}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}
