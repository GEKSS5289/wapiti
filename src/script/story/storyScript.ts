import {reactive} from "vue";
import {StoryForm, StoryModel} from "@/model/datas";
import {useStore} from "vuex";
import axios from "axios";
import apis from "@/common/apis";
import router from "@/router";



const store = useStore()
const pushData = reactive({
  content:'',
  title:'',
})
const storyData = reactive({
  datas:Array<StoryModel>()
})


function initStoryData(){
  axios.get(apis.apiUrl.story+store.getters.getAdminId).then(res=>{
    for(let i = 0;i<res.data.data.length;i++){
      storyData.datas.push(res.data.data[i])
    }
  })
}

function pushStory(){
  let data:StoryForm={
    adminId:store.getters.getAdminId,
    content:pushData.content,
    title:pushData.title
  }
  axios.post(apis.apiUrl.story,data).then(res=>{
    router.go(0)
  })
}

export {
  pushData,
  storyData,
  initStoryData,
  pushStory
}
