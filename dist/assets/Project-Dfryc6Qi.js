import{p as i}from"./projects-B5oPZRyg.js";import{_ as l,c as f,e as s,w as a,a as n,t as c,b as m,o as u,f as p}from"./index-D4TFxnkq.js";const _={name:"Project",props:["projectId"],computed:{project(){return i.find(t=>t.id===parseInt(this.projectId,10))}},filters:{pretty:function(t){return t?(t=JSON.stringify(t,null,4),t):""}}};function j(t,e,d,k,I,r){const o=m("router-link");return u(),f("div",null,[s(o,{to:{name:"home"}},{default:a(()=>e[0]||(e[0]=[p("Go back")])),_:1}),n("h3",null,c(r.project.title),1),n("p",null,c(r.project),1),s(o,{to:{name:"taskLists",params:{projectId:d.projectId}}},{default:a(()=>e[1]||(e[1]=[p("Task Lists")])),_:1},8,["to"])])}const b=l(_,[["render",j],["__scopeId","data-v-da468b4c"]]);export{b as default};