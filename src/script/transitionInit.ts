import {ref} from "vue";
import router from "@/router";

export const cmsMngInit = () => {

  const cmsMngstatus = ref(true)
  const loginfoStatus = ref(true)
  const checkMngStatus = ref(true)
  const taskContainerStatus = ref(true)
  const mngCenterStatus = ref(true)
  setTimeout(() => {
    cmsMngstatus.value = !cmsMngstatus.value
  }, 200)

  setTimeout(() => {
    loginfoStatus.value = !loginfoStatus.value
  }, 600)

  setTimeout(() => {
    checkMngStatus.value = !checkMngStatus.value
  }, 900)

  setTimeout(() => {
    taskContainerStatus.value = !taskContainerStatus.value
  }, 1200)

  setTimeout(() => {
    mngCenterStatus.value = !mngCenterStatus.value
  }, 1200)
  return{
    cmsMngstatus,
    loginfoStatus,
    checkMngStatus,
    taskContainerStatus,
    mngCenterStatus
  }

}
