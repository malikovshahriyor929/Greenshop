import Cookies from "js-cookie";

let CookiesInfo = () => {
  const getCookie = (key: string) => {
    return Cookies.get(key) ? JSON.parse(Cookies.get(key) as string) : null;
  };

  const setCookie = (key: string, data: object) => {
    return Cookies.set(key, JSON.stringify(data), { expires: 24 / 24 });
  };

  const isAuthorization = getCookie("user") ? true : false;
  const isFollow = getCookie("follow") ? true : false;

  return { getCookie, setCookie, isAuthorization, isFollow };
};

export default CookiesInfo;
