import axios from "axios";
export const markAlarmAPI = async (alarmId: number) => {
  return await axios.patch(
    `${import.meta.env.VITE_API_BASE}alarms/${String(alarmId)}/read`,
    {},
    { withCredentials: true },
  );
};

export const getAlarmsByUserAPI = async () => {
  return await axios.get(`${import.meta.env.VITE_API_BASE}alarms/`, {
    withCredentials: true,
  });
};
