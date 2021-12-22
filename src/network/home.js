import request from "./network";
export function getHomedata() {
    return request({
        url: '/home/multidata'
    })
}
export function getGoodsdata() {
    return request({
        url: '/home/data'
    })
}