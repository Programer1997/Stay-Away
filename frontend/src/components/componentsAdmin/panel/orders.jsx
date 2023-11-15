import React from "react";
import NivoFunnel from "./charts/nivo_Funnel";

export default function Orders() {
  const data = [
    {
      id: "step_sent",
      value: 12,
      label: "Sent",
    },
    {
      id: "step_viewed",
      value: 9,
      label: "Viewed",
    },
  ];
  return (
    <div>
      <h1>orders section</h1>
    </div>
  );
}
