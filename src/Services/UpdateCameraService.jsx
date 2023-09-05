import http from "./httpService";

export default function UpdateCamera(id ,data){
    return http.put(`/c/${id}` , data);
}