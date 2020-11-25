export interface StoryForm{
  adminId:number
  content:string
  title:string
}

export interface StoryUpdateForm{
  content:string
  title:string
}

export interface StoryModel{
  id:number
  createdTime:Date
  content:string
  title:string
}

export interface ResModel{
  id:number
  resName:string
  resPath:string
  resSize:string
  publishAdminName:string
  resStatus:boolean
  resDel:boolean
  createdTime:Date
}

export interface AdminModel{
  id:number
  adminFace:string
  adminName:string
  adminAccount:string
  isFreeze:boolean
  isRoot:boolean
}


export interface TaskForm{
  executorId:number
  publisherId:number
  taskTitle:string,
  taskContent:string,
  taskLevel:string
}

export interface TaskModel{
  id:number
  executorName:string
  publisherName:string
  taskTitle:string
  taskContent:string
  taskLevel:string
  finishTime:Date
  taskStatus:boolean
}

export interface AdminForm{
  adminFace:string;
  adminName:string;
  adminAccount:string;
}




