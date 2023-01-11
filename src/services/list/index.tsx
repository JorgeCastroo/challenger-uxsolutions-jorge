import { api } from "../api";

export const getList = async () => {
  try {
    const { data } = await api.get(`/feriados/nacionais.json`);
    return Promise.resolve({ data });
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};
