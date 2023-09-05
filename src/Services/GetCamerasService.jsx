import http from "./HttpService";

export default function GetCameras() {
  return http.get("/c");
}
