import http from "./HttpService";

export default function DeleteCamera(id) {
  return http.delete(`/c/${id}`);
}
