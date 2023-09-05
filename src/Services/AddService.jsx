import http from "./HttpService";

export default function AddService(data) {
  return http.post("/tarkhinehContactForm", data);
}
