import React, { useEffect } from "react";
import NivoPie from "./charts/nivo_pie";
import NivoBar from "./charts/nivo_bar";
import UserTable from "./charts/tableCustomer";
import Axios from "axios";

const DashBoard = (props) => {
  useEffect(() => {
    Axios.get("/users/testing")
      .then((response) => {
        props.setDataUsers(response.data);
      })
      .catch((error) => {
        console.error("it has occurred an error", error);
      });
  }, []);

  const data1 = [
    {
      id: "Active",
      label: "Active",
      value: 471,
      color: "hsl(275, 70%, 50%)",
    },
    {
      id: "Inactive",
      label: "Inactive",
      value: 451,
      color: "hsl(307, 70%, 50%)",
    },
    {
      id: "Total",
      label: "Total",
      value: 922,
      color: "hsl(119, 70%, 50%)",
    },
  ];

  const data2 = [
    {
      country: "AD",
      "hot dog": 61,
      "hot dogColor": "hsl(194, 70%, 50%)",
      burger: 132,
      burgerColor: "hsl(162, 70%, 50%)",
      sandwich: 122,
      sandwichColor: "hsl(302, 70%, 50%)",
      kebab: 111,
      kebabColor: "hsl(158, 70%, 50%)",
      fries: 89,
      friesColor: "hsl(176, 70%, 50%)",
      donut: 154,
      donutColor: "hsl(287, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 196,
      "hot dogColor": "hsl(148, 70%, 50%)",
      burger: 100,
      burgerColor: "hsl(143, 70%, 50%)",
      sandwich: 49,
      sandwichColor: "hsl(340, 70%, 50%)",
      kebab: 25,
      kebabColor: "hsl(109, 70%, 50%)",
      fries: 51,
      friesColor: "hsl(85, 70%, 50%)",
      donut: 24,
      donutColor: "hsl(8, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 199,
      "hot dogColor": "hsl(332, 70%, 50%)",
      burger: 3,
      burgerColor: "hsl(142, 70%, 50%)",
      sandwich: 197,
      sandwichColor: "hsl(357, 70%, 50%)",
      kebab: 160,
      kebabColor: "hsl(257, 70%, 50%)",
      fries: 15,
      friesColor: "hsl(152, 70%, 50%)",
      donut: 142,
      donutColor: "hsl(199, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 94,
      "hot dogColor": "hsl(23, 70%, 50%)",
      burger: 183,
      burgerColor: "hsl(186, 70%, 50%)",
      sandwich: 49,
      sandwichColor: "hsl(322, 70%, 50%)",
      kebab: 5,
      kebabColor: "hsl(249, 70%, 50%)",
      fries: 152,
      friesColor: "hsl(141, 70%, 50%)",
      donut: 139,
      donutColor: "hsl(264, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 128,
      "hot dogColor": "hsl(340, 70%, 50%)",
      burger: 175,
      burgerColor: "hsl(87, 70%, 50%)",
      sandwich: 139,
      sandwichColor: "hsl(67, 70%, 50%)",
      kebab: 92,
      kebabColor: "hsl(326, 70%, 50%)",
      fries: 126,
      friesColor: "hsl(316, 70%, 50%)",
      donut: 64,
      donutColor: "hsl(332, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 67,
      "hot dogColor": "hsl(232, 70%, 50%)",
      burger: 37,
      burgerColor: "hsl(29, 70%, 50%)",
      sandwich: 181,
      sandwichColor: "hsl(83, 70%, 50%)",
      kebab: 15,
      kebabColor: "hsl(87, 70%, 50%)",
      fries: 110,
      friesColor: "hsl(122, 70%, 50%)",
      donut: 99,
      donutColor: "hsl(220, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 129,
      "hot dogColor": "hsl(93, 70%, 50%)",
      burger: 156,
      burgerColor: "hsl(138, 70%, 50%)",
      sandwich: 28,
      sandwichColor: "hsl(300, 70%, 50%)",
      kebab: 191,
      kebabColor: "hsl(211, 70%, 50%)",
      fries: 78,
      friesColor: "hsl(254, 70%, 50%)",
      donut: 159,
      donutColor: "hsl(299, 70%, 50%)",
    },
  ];

  return (
    <>
      <div className="itemsDashboard"></div>
      <div className="chartsDashboard">
        <NivoPie data={data1} />
        <NivoBar data={data2} />
      </div>
      <div className="tableDashboard">
        <UserTable dataUsers={props.dataUsers} />
      </div>
    </>
  );
};

export default DashBoard;
