import{M as m,I as p,d as c,ah as i,r as u,N as e,k as l}from"./entry.CwYng1Ik.js";import{u as d}from"./asyncData.ChCmdDMF.js";import f from"./Ellipsis.DdULotDO.js";import y from"./ComponentPlaygroundData.99NJhmzb.js";import"./TabsHeader.DQJbtLFY.js";import"./ComponentPlaygroundProps.Dirj3jEN.js";import"./ProseH4.CFlt_nb6.js";import"./ProseCodeInline.LVPMbqgP.js";import"./Badge.BqWilKCk.js";import"./MDCSlot.BgvfKJOv.js";import"./slot.9JxAj_Rs.js";import"./ProseP.bqKlRGcd.js";import"./index.Bwx6QcMt.js";import"./ComponentPlaygroundSlots.vue.BoZJ0hmo.js";import"./ComponentPlaygroundTokens.vue.B8-pCLNT.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=l(h,[["__scopeId","data-v-c0c27b3d"]]);export{V as default};
