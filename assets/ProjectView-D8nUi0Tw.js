import{p as i}from"./project-DnR2rFRh.js";import{_ as l,g as d,o,c,a as e,t as n,b as u}from"./index-Bquq_4QI.js";const _={key:0,class:"project-info"},m=["src","alt"],j={key:1},v={__name:"test",props:{projectId:{type:[String,Number],required:!0}},setup(r){const s=r,t=d(()=>i.find(a=>a.id===Number(s.projectId)));return(a,p)=>(o(),c("div",null,[t.value?(o(),c("div",_,[e("img",{src:t.value.img.path,alt:t.value.img.alt,class:"project-image"},null,8,m),e("h1",null,n(t.value.title),1),e("p",null,n(t.value.description),1)])):(o(),c("div",j,p[0]||(p[0]=[e("p",null,"Project not found.",-1)])))]))}},f=l(v,[["__scopeId","data-v-a478dcc4"]]),g={__name:"ProjectView",props:{projectId:{type:String,required:!0}},setup(r){return(s,t)=>(o(),u(f,{projectId:r.projectId},null,8,["projectId"]))}},k=l(g,[["__scopeId","data-v-6740b349"]]);export{k as default};
