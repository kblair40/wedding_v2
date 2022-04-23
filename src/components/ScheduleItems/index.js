import React from "react";

import { scheduleItems } from "utils/constants";
import ScheduleItem from "./ScheduleItem";

const ScheduleItems = ({ day }) =>
  scheduleItems[day].map((item, i) => <ScheduleItem {...item} key={i} />);

export default ScheduleItems;
