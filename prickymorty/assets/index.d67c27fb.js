import{p as a,a as e,o as t,c as s,b as c,u as r,w as n,r as i,d as l,v as o,t as h,e as d,f as m,g as p,h as u,F as v,i as C,j as f,k as y,l as g}from"./vendor.a0d1ba12.js";const k={setup(){const a=r();return{filter:e=>{a.dispatch("filterByStatus",e)}}}},F=n("data-v-ea3e1e78");a("data-v-ea3e1e78");const b={class:"filter"};e();const w=F(((a,e,r,n,i,l)=>(t(),s("div",b,[c("div",{onClick:e[1]||(e[1]=a=>n.filter("")),class:"item"}," All "),c("div",{onClick:e[2]||(e[2]=a=>n.filter("Alive")),class:"item"}," Alive "),c("div",{onClick:e[3]||(e[3]=a=>n.filter("Dead")),class:"item"}," Dead "),c("div",{onClick:e[4]||(e[4]=a=>n.filter("unknown")),class:"item"}," Unknown ")]))));k.render=w,k.__scopeId="data-v-ea3e1e78";const _={setup(){const a=r(),e=i("");return{name:e,filter:()=>{a.dispatch("filterByName",e.value)}}}},B=n("data-v-010c642b");a("data-v-010c642b");const S={class:"search"};e();const A=B(((a,e,r,n,i,h)=>(t(),s("div",S,[l(c("input",{type:"text",placeholder:"Search by name","onUpdate:modelValue":e[1]||(e[1]=a=>n.name=a),onKeyup:e[2]||(e[2]=a=>n.filter())},null,544),[[o,n.name]])]))));_.render=A,_.__scopeId="data-v-010c642b";const L={props:["character"]},I=n("data-v-9e510ac6");a("data-v-9e510ac6");const N={class:"character"},j={class:"characters"},D={class:"name"},M={class:"status"},U=m("Status: "),x={class:"species"},G=m("Species: "),H={key:0,class:"type"},K={class:"gender"},O=m("Gender: "),R={class:"origin"},V=m("Origin: "),q={class:"origin-name"},z={class:"location"},E=m("Location: "),J={class:"location-name"};e();const P=I(((a,e,r,n,i,l)=>(t(),s("div",N,[c("img",{class:"image-character",src:r.character.image,alt:r.character.name},null,8,["src","alt"]),c("div",j,[c("h3",D,h(r.character.name),1),c("h5",M,[U,c("span",{class:[[{alive:"Alive"==r.character.status},{dead:"Dead"==r.character.status},{unknown:"unknown"==r.character.status}],"char-stat"]},h(r.character.status),3)]),c("h5",x,[G,c("span",{class:[{alien:"Alien"==r.character.species},{human:"Human"==r.character.species}]},h(r.character.species),3)]),""!=r.character.type?(t(),s("h6",H,"("+h(r.character.type)+")",1)):d("",!0),c("h5",K,[O,c("span",{class:[{male:"Male"==r.character.gender},{female:"Female"==r.character.gender},{unknown:"unknown"==r.character.gender}]},h(r.character.gender),3)]),c("h5",R,[V,c("span",q,h(r.character.origin.name),1)]),c("h5",z,[E,c("span",J,h(r.character.location.name),1)])])]))));L.render=P,L.__scopeId="data-v-9e510ac6";const Q={components:{CardCharacter:L,FilterByStatus:k,FilterByName:_},setup(){const a=r(),e=p((()=>a.state.charactersFilter));return u((()=>{a.dispatch("getCharacters")})),{characters:e}}},T=n("data-v-5bba9689");a("data-v-5bba9689");const W={class:"listCharacters"},X={class:"characters"};e();const Y=T(((a,e,r,n,i,l)=>{const o=f("FilterByStatus"),h=f("FilterByName"),d=f("CardCharacter");return t(),s("section",W,[c(o),c(h),c("div",X,[(t(!0),s(v,null,C(n.characters,(a=>(t(),s("div",{key:a.id,class:"characters_items"},[c(d,{character:a},null,8,["character"])])))),128))])])}));Q.render=Y,Q.__scopeId="data-v-5bba9689";const Z={name:"App",components:{ListCharacters:Q}},$={class:"app-container"},aa=c("h1",{class:"app-title"},"Rick and Morty Client",-1);Z.render=function(a,e,r,n,i,l){const o=f("ListCharacters");return t(),s("div",$,[aa,c(o)])};var ea=y({state:{characters:[],charactersFilter:[]},mutations:{setCharacters(a,e){a.characters=e},setCharactersFilter(a,e){a.charactersFilter=e}},actions:{async getCharacters({commit:a}){try{const e=await fetch("https://rickandmortyapi.com/api/character"),t=await e.json();a("setCharacters",t.results),a("setCharactersFilter",t.results)}catch(e){console.error(e)}},filterByStatus({commit:a,state:e},t){a("setCharactersFilter",e.characters.filter((a=>a.status.includes(t))))},filterByName({commit:a,state:e},t){const s=t.toLowerCase();a("setCharactersFilter",e.characters.filter((a=>{if(a.name.toLowerCase().includes(s))return a})))}},modules:{}});g(Z).use(ea).mount("#app");