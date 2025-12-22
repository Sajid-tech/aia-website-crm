import Cookies from "js-cookie";

export const getAuthToken = (reduxToken) => {
  if (reduxToken) return reduxToken;

  try {
    const raw = Cookies.get("persist:auth");
    if (!raw) return null;
console.log(raw)
    const parsed = JSON.parse(raw);
    return null;
  } catch {
    return null;
  }
};
