import request from './network'
export function getDetails(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
export class Goods{
    constructor(columns, itemInfo, shopInfo) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.columnsNum = columns[0]
        this.columnsLike = columns[1]
        this.columnsDelivery = itemInfo.extra.deliveryTime
        this.highPrice = itemInfo.highPrice
        this.lowNowPrice = itemInfo.lowNowPrice
        this.discount = itemInfo.discountDesc
        this.discountColor = itemInfo.discountBgColor
        this.service = shopInfo.services
    }
}
export class Shops{
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.cFans = shopInfo.cFans
        this.cGoods = shopInfo.cGoods
        this.cSells = shopInfo.cSells
        this.score = shopInfo.score
    }
}
export class DetailMessage{
    constructor(detailInfo) {
        this.desc = detailInfo.desc
        this.images = detailInfo.detailImage[0].list
        this.key = detailInfo.detailImage[0].key
    }
}
export class Params{
    constructor(itemParams) {
        this.product_info = itemParams.info.set
        this.product_key = itemParams.info.key
        this.rule_desc = itemParams.rule.desc
        this.rule_tables = itemParams.rule.tables[0][0]
        this.rule_key = itemParams.rule.key
        this.disclaimer = itemParams.rule.disclaimer
    }
}