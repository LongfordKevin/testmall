import request from "./network";
export function getHomedata() {
    return request({
        url: '/home/multidata'
    })
}