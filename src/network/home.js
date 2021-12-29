import request from "./network";
export function getHomedata() {
    return request({
        url: '/home/multidata'
    })
}
export function getGoodsdata(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}