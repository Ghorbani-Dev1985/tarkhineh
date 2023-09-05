import http from "./HttpService";

export default function GetSingleCamera(id) {
  return http.get(`/c/${id}`);
}
