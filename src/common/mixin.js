import { debounce } from "./utils"
import BackTo from 'components/content/backTo/BackTo.vue'
export const imageLoadMixin= {
    data() {
        return {
            imageFlag: null
        }
    },
    mounted() {
        // 3.监听图片是否加载完成
        console.log("混入")
       const refresh = debounce(this.$refs.scroll.refresh, 50)
       this.imageFlag = () => {
         console.log('-----混入debounce')
         refresh()
         // this.$refs.scroll.refresh()
       }
       this.$bus.$on('loadImgFlag', this.imageFlag)
    }
}
export const BackToMixin= {
    components:{
        BackTo
    },
    data() {
        return {
            isShowType: false,
        }
    },
    methods:{
        backClick() {
            // console.log("clicking")
            // console.log(this.$refs.backTo.scroll.scrollTo)
            this.$refs.scroll.scrollTo(0,0,500)
        },
    }
}