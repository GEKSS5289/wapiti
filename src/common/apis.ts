const baseUrl = 'http://192.168.2.207:5288/';

const taskApiUrl = {
  finish:'finish',
  abolish:'abolish'
}

const resApiUrl = {
  check:'check'
}

const adminApiUrl = {
  freeze:'freeze',
  thaw:'thaw',
  up:'up',
  demote:'demote'
}

const apiUrl = {
  story:baseUrl+'story/',
  admin:baseUrl+'admin/',
  logs:baseUrl+'logs/',
  res:baseUrl+'res/',
  task:baseUrl+'task/',
}



export default {
  apiUrl,
  taskApiUrl,
  resApiUrl,
  adminApiUrl
}


