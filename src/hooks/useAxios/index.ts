import axios from "axios";

interface requestType {
  method?: "GET" | "POST" | "DELETE" | "PUT";
  body?: object;
  headers?: object;
  params?: object;
  url: string;
}

export let useAxios = () => {
  let request = ({
    method = "GET",
    body,
    headers,
    url,
    params,
  }: requestType) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...headers,
      },
      params: {
        // access_token: "64bebc1e2c6d3f056a8c85b7",
        access_token: "64eecf3b54abde61153d1fd3",
        ...params,
      },
    }).then((data) => data.data);
  };
  return request
};
//  64eecf3b54abde61153d1fd3