(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c07a10fc"],{"08b0":function(e,t,a){},"0c51":function(e,t,a){},"2fff":function(e,t,a){"use strict";a("08b0")},"41b2":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n=a("56b7"),s=a.n(n);const i=Object(c["D"])("data-v-2726c00e");Object(c["s"])("data-v-2726c00e");const l={key:0,class:"video-list"},o={class:"video-info"},d={class:"video-name"},b={class:"video-upload-auth"},r={class:"video-create"},f=Object(c["g"])("h1",null,"视频上传",-1),O={key:0,class:"uploadmain"},j=Object(c["g"])("label",{for:"file"},[Object(c["g"])("img",{class:"file-img",src:s.a,alt:""})],-1),u={class:"file-info-name"},p={key:0,class:"file-info-size"},g={key:1,class:"file-info-size"};Object(c["q"])();const m=i((function(e,t,a,n,s,i){const m=Object(c["w"])("loading");return Object(c["p"])(),Object(c["d"])("div",{class:["video-mng-box",{"cmsMng-transition-begin":e.cmsMngstatus,"cmsMng-transition-end":!e.cmsMngstatus}]},[0!=e.resData.datas.length?(Object(c["p"])(),Object(c["d"])("div",l,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(e.resData.datas,(t,a)=>(Object(c["p"])(),Object(c["d"])("div",{class:"video-item",key:t.id},[Object(c["g"])("video",{controls:"",src:t.resPath},null,8,["src"]),Object(c["g"])("div",o,[Object(c["g"])("h1",d,"视频名:"+Object(c["y"])(t.resName),1),Object(c["g"])("h1",b,"上传者:"+Object(c["y"])(t.publishAdminName),1),t.resDel?(Object(c["p"])(),Object(c["d"])("h1",{key:0,class:"stop-play-btn",onClick:a=>e.controlRes(t.id)},"禁止播放",8,["onClick"])):(Object(c["p"])(),Object(c["d"])("h1",{key:1,class:"stop-play-btn",onClick:a=>e.controlRes(t.id)},"恢复播放",8,["onClick"]))])]))),128))])):Object(c["e"])("",!0),Object(c["g"])("div",r,[f,e.loadingStatus?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("div",O,[j,Object(c["g"])("input",{class:"file-input",id:"file",type:"file",onChange:t[1]||(t[1]=(...t)=>e.fileSelect(...t)),accept:"video/mp4"},null,32),Object(c["g"])("h1",u,Object(c["y"])(e.resData.filename),1),e.resData.filesize?(Object(c["p"])(),Object(c["d"])("h1",p,Object(c["y"])(e.resData.filesize)+"MB",1)):(Object(c["p"])(),Object(c["d"])("h1",g,"未上传文件")),e.resData.filename?(Object(c["p"])(),Object(c["d"])("div",{key:2,class:"upload-btn",onClick:t[2]||(t[2]=(...t)=>e.uploadFile(...t))},"上传")):Object(c["e"])("",!0)])),e.loadingStatus?(Object(c["p"])(),Object(c["d"])(m,{key:1})):Object(c["e"])("",!0)])],2)}));var v=a("9ab4"),h=a("5502"),y=a("bc3a"),k=a.n(y),D=a("c645"),w=a("afbc");const z=Object(c["D"])("data-v-1a6835a0");Object(c["s"])("data-v-1a6835a0");const S={class:"loader"};Object(c["q"])();const C=z((function(e,t,a,n,s,i){return Object(c["p"])(),Object(c["d"])("div",S,"Loading...")}));var M=Object(c["h"])({name:"Loading"});a("df94");M.render=C,M.__scopeId="data-v-1a6835a0";var N=M,I=a("3228"),_=Object(c["h"])({name:"VideoMng",components:{Loading:N},setup:function(){var e=Object(c["t"])({datas:Array(),filename:"",filesize:0}),t=new FormData,a=(Object(h["b"])(),Object(c["u"])(!1));function n(){k.a.get(D["a"].apiUrl.res).then((function(t){for(var a=0;a<t.data.data.length;a++)e.datas.push(t.data.data[a])}))}function s(e){k.a.put(D["a"].apiUrl.res+e).then((function(e){w["a"].go(0)}))}function i(a){e.filename=a.target.files[0].name,e.filesize=Number((a.target.files[0].size/1024/1024).toString().match(/^\d+(?:\.\d{0,2})?/)),t.append("file",a.target.files[0])}function l(){a.value=!0,e.filename="",e.filesize=0,k.a.post(D["a"].apiUrl.res+Number(JSON.parse(sessionStorage.getItem("payload")).adminId),t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){a.value=!1,console.log("ok"),t.delete("file"),w["a"].go(0)}))}return n(),Object(v["a"])({resData:e,controlRes:s,fileSelect:i,uploadFile:l,loadingStatus:a},Object(I["a"])())}});a("2fff");_.render=m,_.__scopeId="data-v-2726c00e";t["default"]=_},"56b7":function(e,t,a){e.exports=a.p+"img/add.c8fc9f1e.png"},df94:function(e,t,a){"use strict";a("0c51")}}]);
//# sourceMappingURL=chunk-c07a10fc.9b2d7b4d.js.map