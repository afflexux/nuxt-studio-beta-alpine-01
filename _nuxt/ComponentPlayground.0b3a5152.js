import{b as m,u as c,J as a,a as i,af as u,r as l,a7 as n,x as d}from"./entry.ae868468.js";import{u as f}from"./asyncData.5bf67738.js";import _ from"./Ellipsis.bf1311c5.js";import y from"./ComponentPlaygroundData.211888ea.js";import"./TabsHeader.ea6ea0e8.js";import"./ComponentPlaygroundProps.4837dbea.js";import"./ProseH4.488823de.js";import"./ProseCodeInline.ddea0749.js";import"./Badge.4c656f3b.js";import"./ContentSlot.28493f8d.js";import"./ProseP.96586bf0.js";import"./index.935ad908.js";import"./ComponentPlaygroundSlots.vue.702936d5.js";import"./ComponentPlaygroundTokens.vue.30664f69.js";async function g(o){m();const t=c(o);{const{data:e}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return a(()=>e.value)}}const v=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=a(()=>u(o.component)),e=l({...o.props}),r=await g(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,p])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=p}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(_,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(v,[["__scopeId","data-v-ffdff82a"]]);export{V as default};
