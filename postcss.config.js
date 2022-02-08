module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewportWidth: 375, //视窗宽度
            viewportHeight: 667, //视窗高度
            unitPrecision: 5, //指定"px"转换为"vw"后的最小保留字
            viewportUnit: "vw",//指定需要转换的视窗单位，推荐vwg
            selectorBlackList: ["ignore", "tar-bar", "tar-bar-item"],//指定不需要转换的类
            minPixelValue: 1,//小于1px的不进行转换
            mediaQuery: false,//允许在媒体查询中转换'px'
            exclude: [/TarBar/]
        },
    }
}