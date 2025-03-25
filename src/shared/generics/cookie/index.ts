import Cookies from "js-cookie";

let CookiesInfo = () => {
  const getCookie = (key: string) => {
    return Cookies.get(key) ? JSON.parse(Cookies.get(key) as string) : null;
  };

  const setCookie = (key: string, data: string) => {
    return Cookies.set(key, JSON.stringify(data));
  };

  const isAuthorization = getCookie("user") ? true : false;

  return { getCookie, setCookie, isAuthorization };
};

export default CookiesInfo;
