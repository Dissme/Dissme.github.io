"use strict";(self.webpackChunkeasy_view_boilerplate=self.webpackChunkeasy_view_boilerplate||[]).push([[592],{607:function(e,t,l){l.d(t,{A:function(){return s},w:function(){return a}});var n=l(858);const a={h2:(e,t)=>(0,n.Au)((()=>(0,n.tZ)("h2",{className:"font-bold text-xl",id:"string"===t[0]&&t[0],children:t}))),blockquote:(e,t)=>(0,n.Au)((()=>(0,n.tZ)("blockquote",{className:"group text-justify leading-relaxed text-slate-400 text-sm mb-6",children:t.reduce(((e,t)=>(t.tag===a.p&&e.push(t.children),e)),[])}))),p:(e,t)=>(0,n.Au)((()=>(0,n.tZ)("p",{className:"text-justify leading-relaxed mb-2 text-sm",children:t}))),code:(e,t)=>(0,n.Au)((()=>{var l;return(0,n.tZ)("code",{className:`text-slate-400 ${null!==(l=e.className)&&void 0!==l?l:""}`,children:t})})),pre:(e,t)=>(0,n.Au)((()=>(0,n.BX)("details",{className:"text-sm",open:!0,children:[(0,n.tZ)("summary",{className:"cursor-pointer select-none py-2 pr-2 w-fit",children:"示例"}),r(t[0])]}))),strong:(e,t)=>(0,n.Au)((()=>(0,n.tZ)("strong",{className:"text-base mr-2",children:t}))),a:(e,t)=>(0,n.Au)((()=>(0,n.tZ)("a",{href:e.href,className:"text-sky-500 decoration-current decoration-wavy underline",children:t})))};function r(e){if(e)return(0,n.Au)((()=>{var t,l,a,r;return(0,n.tZ)("code",{className:`${null!==(t=null===(l=e.props)||void 0===l?void 0:l.className)&&void 0!==t?t:""} block rounded overflow-auto leading-loose whitespace-nowrap`,children:null===(a=e.children)||void 0===a||null===(r=a.map)||void 0===r?void 0:r.call(a,(e=>{if("string"==typeof e){const t=(e=e.replace(/ /g," ")).split("\n");t.length&&(e=t.map(((e,t)=>[t&&(0,n.tZ)("br",{}),e])))}return e}))})}))}function s(e,t){const l=()=>t.filter((e=>e.key)).reduce(((e,t)=>{const l=t.props.group;if(!e[l]){const t=[];t.name=l,e[l]=t,e.push(t)}return e[l].push(t),e}),[]);let a=decodeURIComponent(location.hash.slice(1));const r={},s=()=>{let e=a,t=0,l=null;return Object.keys(r).find((e=>{if(r[e]>t&&(t=r[e],l=e),t>=1)return!0})),t>(r[a]||0)&&(e=l),e};return(0,n.Au)((()=>(0,n.BX)(n.HY,{children:[(0,n.tZ)("aside",{className:"h-full fixed left-0 w-64 overflow-x-hidden overflow-y-auto text-sm break-words",children:l().map((e=>(0,n.tZ)("nav",{children:(0,n.BX)("ol",{className:"py-4 pl-4",children:[(0,n.tZ)("li",{className:"py-2",children:(0,n.tZ)("span",{className:"text-base",children:e.name})}),e.map((e=>(0,n.tZ)("li",{className:"py-1",children:(0,n.tZ)("a",{href:`#${e.key}`,"on-click":()=>{a=e.key},className:"border-l pl-4 transition-all "+(e.key===s()?"text-sky-500 border-sky-500":"border-slate-50/30 hover:text-sky-500"),children:e.key})},`#${e.key}`)))]})},e.name)))}),(0,n.tZ)("main",{className:"pl-72 pt-6 pb-6 pr-6 lg:pr-60 break-words",children:l().map((e=>(0,n.BX)("section",{className:"pb-4 mb-14",children:[(0,n.tZ)("h1",{className:"font-bold text-3xl",children:e.name}),e.map((e=>(0,n.BX)("section",{className:"p-4 rounded-lg bg-stone-50/30 my-4 relative","on-intersection":t=>{let{detail:{value:l}}=t;r[e.key]=l},children:[(0,n.tZ)("span",{id:e.key,className:"absolute -top-16","on-mounted":()=>{var t,l;e.key===a&&(null===(t=document.querySelector(`#${a}`))||void 0===t||null===(l=t.scrollIntoView)||void 0===l||l.call(t,{block:"start",inline:"start",behavior:"smooth"}))}}),e]},e.key)))]},e.name)))})]})))}}}]);