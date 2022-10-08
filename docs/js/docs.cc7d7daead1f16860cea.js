(self.webpackChunkeasy_view_boilerplate=self.webpackChunkeasy_view_boilerplate||[]).push([[163],{138:function(n,e,s){"use strict";s.r(e),s.d(e,{group:function(){return a}});var t=s(858);const a="@easythings/easy-view/jsx-runtime";function r(n){const e=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",pre:"pre",code:"code",span:"span"},n.components);return(0,t.BX)(t.HY,{children:[(0,t.tZ)(e.h2,{children:"Fragment"}),"\n",(0,t.BX)(e.blockquote,{children:["\n",(0,t.tZ)(e.p,{children:"片段组件"}),"\n"]}),"\n",(0,t.tZ)(e.p,{children:"这个组件只会返回它的 children"}),"\n",(0,t.tZ)(e.pre,{children:(0,t.BX)(e.code,{className:"hljs language-jsx",children:[(0,t.BX)(e.span,{className:"hljs-function",children:[(0,t.tZ)(e.span,{className:"hljs-keyword",children:"function"})," ",(0,t.tZ)(e.span,{className:"hljs-title",children:"Main"}),"(",(0,t.tZ)(e.span,{className:"hljs-params"}),") "]}),"{\n  ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"return"})," (\n    ",(0,t.BX)(e.span,{className:"xml",children:[(0,t.tZ)(e.span,{className:"hljs-tag",children:"<>"}),"\n      {/* 这里的空标签对 ",(0,t.tZ)(e.span,{className:"hljs-tag",children:"<>"}),(0,t.tZ)(e.span,{className:"hljs-tag",children:"</>"})]})," 就是Fragment */}\n      hello world\n    </>\n  );\n}\n"]})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=n.components||{};return e?(0,t.tZ)(e,Object.assign({},n,{children:(0,t.tZ)(r,n)})):r(n)}},873:function(n,e,s){"use strict";s.r(e),s.d(e,{group:function(){return a}});var t=s(858);const a="@easythings/easy-view";function r(n){const e=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",strong:"strong",br:"br",pre:"pre",code:"code",span:"span"},n.components);return(0,t.BX)(t.HY,{children:[(0,t.tZ)(e.h2,{children:"class MethodChannel"}),"\n",(0,t.BX)(e.blockquote,{children:["\n",(0,t.tZ)(e.p,{children:"用于两个隔离的环境交互的一组函数"}),"\n"]}),"\n",(0,t.BX)(e.p,{children:[(0,t.tZ)(e.strong,{children:"connect(port: MessagePort): void;"})," 用来连接对面的",(0,t.tZ)(e.br,{}),"\n",(0,t.tZ)(e.strong,{children:"register(methodName: string, method: (params: any) => any): void;"})," 注册一个函数 同一个名字新的会代替旧的",(0,t.tZ)(e.br,{}),"\n",(0,t.tZ)(e.strong,{children:"unregister(methodName: string): void;"})," 取消注册一个函数",(0,t.tZ)(e.br,{}),"\n",(0,t.tZ)(e.strong,{children:"postMessage(methodName: string, params: any): void;"})," 不需要返回值的调用",(0,t.tZ)(e.br,{}),"\n",(0,t.tZ)(e.strong,{children:"sendMessage(methodName: string, params: any): Promise<any>;"})," 需要返回值的调用"]}),"\n",(0,t.tZ)(e.pre,{children:(0,t.BX)(e.code,{className:"hljs language-jsx",children:[(0,t.tZ)(e.span,{className:"hljs-comment",children:"// bootstrap.js"}),"\n",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"const"})," port = ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"new"})," Worker(",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"new"})," URL(",(0,t.tZ)(e.span,{className:"hljs-string",children:"'@/components/worker/Menu'"}),", ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"import"}),".meta.url));\n",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"const"})," channel = ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"new"})," MethodChannel();\nchannel.register(methods.getPathName, ",(0,t.tZ)(e.span,{className:"hljs-function",children:"() =>"})," location.pathname);\nchannel.connect(port);\n\n",(0,t.tZ)(e.span,{className:"hljs-comment",children:"// Menu.jsx"}),"\n",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"const"})," channel = ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"new"})," MethodChannel();\nchannel.connect(self);\nchannel.sendMessage(methods.getPathName).then(",(0,t.BX)(e.span,{className:"hljs-function",children:["(",(0,t.tZ)(e.span,{className:"hljs-params",children:"pathname"}),") =>"]})," ",(0,t.tZ)(e.span,{className:"hljs-built_in",children:"console"}),".log(pathname));\n"]})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=n.components||{};return e?(0,t.tZ)(e,Object.assign({},n,{children:(0,t.tZ)(r,n)})):r(n)}},151:function(n,e,s){"use strict";s.r(e),s.d(e,{group:function(){return a}});var t=s(858);const a="@easythings/easy-view/jsx-runtime";function r(n){const e=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",pre:"pre",code:"code",span:"span"},n.components);return(0,t.BX)(t.HY,{children:[(0,t.tZ)(e.h2,{children:"MicroComponent"}),"\n",(0,t.BX)(e.blockquote,{children:["\n",(0,t.tZ)(e.p,{children:"微前端组件"}),"\n"]}),"\n",(0,t.tZ)(e.p,{children:"这个组件用来渲染远程的组件 只接受一个名为 port 的 props 并且没有 children"}),"\n",(0,t.tZ)(e.pre,{children:(0,t.BX)(e.code,{className:"hljs language-jsx",children:[(0,t.tZ)(e.span,{className:"hljs-keyword",children:"import"})," { MicroComponent } ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"from"})," ",(0,t.tZ)(e.span,{className:"hljs-string",children:"'@easythings/easy-view/jsx-runtime'"}),";\n",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"const"})," port = ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"new"})," Worker(",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"new"})," URL(",(0,t.tZ)(e.span,{className:"hljs-string",children:"'@/components/worker/Menu'"}),", ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"import"}),".meta.url));\n",(0,t.BX)(e.span,{className:"hljs-function",children:[(0,t.tZ)(e.span,{className:"hljs-keyword",children:"function"})," ",(0,t.tZ)(e.span,{className:"hljs-title",children:"Main"}),"(",(0,t.tZ)(e.span,{className:"hljs-params"}),") "]}),"{\n  ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"return"})," ",(0,t.tZ)(e.span,{className:"xml",children:(0,t.BX)(e.span,{className:"hljs-tag",children:["<",(0,t.tZ)(e.span,{className:"hljs-name",children:"MicroComponent"})," ",(0,t.tZ)(e.span,{className:"hljs-attr",children:"port"}),"=",(0,t.tZ)(e.span,{className:"hljs-string",children:"{port}"})," />"]})}),";\n}\n"]})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=n.components||{};return e?(0,t.tZ)(e,Object.assign({},n,{children:(0,t.tZ)(r,n)})):r(n)}},906:function(n,e,s){"use strict";s.r(e),s.d(e,{group:function(){return a}});var t=s(858);const a="@easythings/easy-view/jsx-runtime";function r(n){const e=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",a:"a",pre:"pre",code:"code",span:"span"},n.components);return(0,t.BX)(t.HY,{children:[(0,t.tZ)(e.h2,{children:"defineRender"}),"\n",(0,t.BX)(e.blockquote,{children:["\n",(0,t.tZ)(e.p,{children:"babel 构建阶段自动添加的函数"}),"\n"]}),"\n",(0,t.BX)(e.p,{children:["这个函数用来保证组件的返回值在闭包内 需要配合 ",(0,t.tZ)(e.a,{href:"https://www.npmjs.com/package/@easythings/babel-plugin-easy-view-jsx",children:"@easythings/babel-plugin-easy-view-jsx"})]}),"\n",(0,t.tZ)(e.pre,{children:(0,t.tZ)(e.code,{className:"hljs language-bash",children:"npm i -D @easythings/babel-plugin-easy-view-jsx\n"})}),"\n",(0,t.tZ)(e.pre,{children:(0,t.BX)(e.code,{className:"hljs language-js",children:[(0,t.tZ)(e.span,{className:"hljs-comment",children:"// .babelrc"}),"\n",(0,t.tZ)(e.span,{className:"hljs-built_in",children:"module"}),".exports = {\n  ...,\n  ",(0,t.tZ)(e.span,{className:"hljs-attr",children:"plugins"}),": [\n    [",(0,t.tZ)(e.span,{className:"hljs-string",children:"'@easythings/easy-view-jsx'"}),"],\n    ...,\n  ],\n};\n"]})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=n.components||{};return e?(0,t.tZ)(e,Object.assign({},n,{children:(0,t.tZ)(r,n)})):r(n)}},550:function(n,e,s){"use strict";s.r(e),s.d(e,{group:function(){return a}});var t=s(858);const a="@easythings/easy-view/jsx-runtime";function r(n){const e=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",a:"a",pre:"pre",code:"code",span:"span"},n.components);return(0,t.BX)(t.HY,{children:[(0,t.tZ)(e.h2,{children:"jsx 和 jsxs"}),"\n",(0,t.BX)(e.blockquote,{children:["\n",(0,t.tZ)(e.p,{children:"babel 构建阶段自动添加的函数"}),"\n"]}),"\n",(0,t.BX)(e.p,{children:["这个函数用来把 jsx 代码构建成 js 代码的 需要配合 ",(0,t.tZ)(e.a,{href:"https://www.npmjs.com/package/@babel/preset-react",children:"@babel/preset-react"})]}),"\n",(0,t.tZ)(e.pre,{children:(0,t.tZ)(e.code,{className:"hljs language-bash",children:"npm i -D @babel/preset-react\n"})}),"\n",(0,t.tZ)(e.pre,{children:(0,t.BX)(e.code,{className:"hljs language-js",children:[(0,t.tZ)(e.span,{className:"hljs-comment",children:"// .babelrc"}),"\n",(0,t.tZ)(e.span,{className:"hljs-built_in",children:"module"}),".exports = {\n  ",(0,t.tZ)(e.span,{className:"hljs-attr",children:"presets"}),": [\n    [\n      ",(0,t.tZ)(e.span,{className:"hljs-string",children:"'@babel/preset-react'"}),",\n      {\n        ",(0,t.tZ)(e.span,{className:"hljs-attr",children:"runtime"}),": ",(0,t.tZ)(e.span,{className:"hljs-string",children:"'automatic'"}),",\n        ",(0,t.tZ)(e.span,{className:"hljs-attr",children:"importSource"}),": ",(0,t.tZ)(e.span,{className:"hljs-string",children:"'@easythings/easy-view'"}),",\n      },\n    ],\n  ],\n};\n"]})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=n.components||{};return e?(0,t.tZ)(e,Object.assign({},n,{children:(0,t.tZ)(r,n)})):r(n)}},98:function(n,e,s){"use strict";s.r(e),s.d(e,{group:function(){return a}});var t=s(858);const a="@easythings/easy-view";function r(n){const e=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",strong:"strong",code:"code",br:"br",pre:"pre",span:"span"},n.components);return(0,t.BX)(t.HY,{children:[(0,t.tZ)(e.h2,{children:"mount(node: JSXElement, container: HTMLElement): () => void"}),"\n",(0,t.BX)(e.blockquote,{children:["\n",(0,t.tZ)(e.p,{children:"用于把组件渲染到页面上 只有页面里可以用"}),"\n"]}),"\n",(0,t.BX)(e.p,{children:[(0,t.tZ)(e.strong,{children:"node:"})," 类似 ",(0,t.tZ)(e.code,{children:"<Main />"})," 这样的一个标签",(0,t.tZ)(e.br,{}),"\n",(0,t.tZ)(e.strong,{children:"container:"})," 一个可以挂载的节点",(0,t.tZ)(e.br,{}),"\n",(0,t.tZ)(e.strong,{children:"返回值:"})," 卸载函数"]}),"\n",(0,t.tZ)(e.pre,{children:(0,t.BX)(e.code,{className:"hljs language-jsx",children:[(0,t.tZ)(e.span,{className:"hljs-keyword",children:"const"})," destroy = mount(",(0,t.tZ)(e.span,{className:"xml",children:(0,t.BX)(e.span,{className:"hljs-tag",children:["<",(0,t.tZ)(e.span,{className:"hljs-name",children:"Main"})," />"]})}),", ",(0,t.tZ)(e.span,{className:"hljs-built_in",children:"document"}),".body); ",(0,t.tZ)(e.span,{className:"hljs-comment",children:"// 挂载到body"}),"\ndestroy(); ",(0,t.tZ)(e.span,{className:"hljs-comment",children:"// 卸载"}),"\n"]})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=n.components||{};return e?(0,t.tZ)(e,Object.assign({},n,{children:(0,t.tZ)(r,n)})):r(n)}},454:function(n,e,s){"use strict";s.r(e),s.d(e,{group:function(){return a}});var t=s(858);const a="@easythings/easy-view";function r(n){const e=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",strong:"strong",br:"br",a:"a",pre:"pre",code:"code",span:"span"},n.components);return(0,t.BX)(t.HY,{children:[(0,t.tZ)(e.h2,{children:"mountFromPort(port: MessagePort, container: HTMLElement): () => void"}),"\n",(0,t.BX)(e.blockquote,{children:["\n",(0,t.tZ)(e.p,{children:"把从 port 收到的消息渲染到页面上 只有页面里可以用"}),"\n"]}),"\n",(0,t.BX)(e.p,{children:[(0,t.tZ)(e.strong,{children:"port:"})," 一个可以收消息的 MessagePort",(0,t.tZ)(e.br,{}),"\n","其他和 ",(0,t.tZ)(e.a,{href:"#mount",children:"mount"})," 一样"]}),"\n",(0,t.tZ)(e.pre,{children:(0,t.BX)(e.code,{className:"hljs language-jsx",children:[(0,t.tZ)(e.span,{className:"hljs-keyword",children:"const"})," port = ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"new"})," Worker(",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"new"})," URL(",(0,t.tZ)(e.span,{className:"hljs-string",children:"'@/components/worker/Menu'"}),", ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"import"}),".meta.url));\n",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"const"})," destroy = mountFromPort(port, ",(0,t.tZ)(e.span,{className:"hljs-built_in",children:"document"}),".querySelector(",(0,t.tZ)(e.span,{className:"hljs-string",children:"'#menu'"}),")); ",(0,t.tZ)(e.span,{className:"hljs-comment",children:"// 挂载"}),"\ndestroy(); ",(0,t.tZ)(e.span,{className:"hljs-comment",children:"// 卸载"}),"\n"]})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=n.components||{};return e?(0,t.tZ)(e,Object.assign({},n,{children:(0,t.tZ)(r,n)})):r(n)}},368:function(n,e,s){"use strict";s.r(e),s.d(e,{group:function(){return a}});var t=s(858);const a="@easythings/easy-view";function r(n){const e=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",strong:"strong",code:"code",br:"br",pre:"pre",span:"span"},n.components);return(0,t.BX)(t.HY,{children:[(0,t.tZ)(e.h2,{children:"render(node: JSXElement): (port: MessagePort) => number"}),"\n",(0,t.BX)(e.blockquote,{children:["\n",(0,t.tZ)(e.p,{children:"用于把用户的代码渲染成虚拟 dom"}),"\n"]}),"\n",(0,t.BX)(e.p,{children:[(0,t.tZ)(e.strong,{children:"node:"})," 类似 ",(0,t.tZ)(e.code,{children:"<Main />"})," 这样的一个标签",(0,t.tZ)(e.br,{}),"\n",(0,t.tZ)(e.strong,{children:"返回值:"})," 用来监听 port 发来的事件、发送虚拟 dom 的函数"]}),"\n",(0,t.tZ)(e.pre,{children:(0,t.BX)(e.code,{className:"hljs language-jsx",children:[(0,t.tZ)(e.span,{className:"hljs-keyword",children:"const"})," listen = render(",(0,t.tZ)(e.span,{className:"xml",children:(0,t.BX)(e.span,{className:"hljs-tag",children:["<",(0,t.tZ)(e.span,{className:"hljs-name",children:"Menu"})," />"]})}),");\n",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"const"})," platform = self.constructor.name;\n",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"const"})," init = {\n  [",(0,t.tZ)(e.span,{className:"hljs-string",children:"'SharedWorkerGlobalScope'"}),"]() {\n    self.onconnect = ",(0,t.BX)(e.span,{className:"hljs-function",children:["(",(0,t.tZ)(e.span,{className:"hljs-params",children:"{ ports }"}),") =>"]})," {\n      ports.forEach(",(0,t.BX)(e.span,{className:"hljs-function",children:["(",(0,t.tZ)(e.span,{className:"hljs-params",children:"port"}),") =>"]})," {\n        listen(port);\n      });\n    };\n  },\n  [",(0,t.tZ)(e.span,{className:"hljs-string",children:"'DedicatedWorkerGlobalScope'"}),"]() {\n    listen(self);\n  },\n};\ninit[platform]?.();\n"]})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=n.components||{};return e?(0,t.tZ)(e,Object.assign({},n,{children:(0,t.tZ)(r,n)})):r(n)}},677:function(n,e,s){"use strict";s.r(e),s.d(e,{group:function(){return a}});var t=s(858);const a="@easythings/easy-view";function r(n){const e=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",strong:"strong",br:"br",pre:"pre",code:"code",span:"span"},n.components);return(0,t.BX)(t.HY,{children:[(0,t.tZ)(e.h2,{children:"use(plugins: Record<string, { call?(this: HTMLElement, target: HTMLElement, dispatch: (detail: object) => {}): () => void; format?(): object }>): void"}),"\n",(0,t.BX)(e.blockquote,{children:["\n",(0,t.tZ)(e.p,{children:"用于创建用户的自定义事件 只有页面里可以用"}),"\n"]}),"\n",(0,t.BX)(e.p,{children:[(0,t.tZ)(e.strong,{children:"plugins:"})," 一个配置用户的自定义事件的对象",(0,t.tZ)(e.br,{}),"\n",(0,t.tZ)(e.strong,{children:"call:"})," jsx 里绑定对应事件的时候 dom 环境会调用 call 函数",(0,t.tZ)(e.br,{}),"\n",(0,t.tZ)(e.strong,{children:"dispatch:"})," 用于触发事件 传递的 detail 参数会出现在事件的 detail 里 detail 对象里不能放不能通过 port 传递的东西"]}),"\n",(0,t.tZ)(e.pre,{children:(0,t.BX)(e.code,{className:"hljs language-jsx",children:[(0,t.tZ)(e.span,{className:"hljs-comment",children:"// bootstrap.js"}),"\n",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"import"})," intersection ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"from"})," ",(0,t.tZ)(e.span,{className:"hljs-string",children:"'./intersection'"}),";\nuse({\n  intersection,\n});\n\n",(0,t.tZ)(e.span,{className:"hljs-comment",children:"// intersection.js"}),"\n",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"const"})," observerMap = ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"new"})," ",(0,t.tZ)(e.span,{className:"hljs-built_in",children:"WeakMap"}),"();\n",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"const"})," dispatchMap = ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"new"})," ",(0,t.tZ)(e.span,{className:"hljs-built_in",children:"WeakMap"}),"();\n\n",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"export"})," ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"default"})," ",(0,t.BX)(e.span,{className:"hljs-function",children:[(0,t.tZ)(e.span,{className:"hljs-keyword",children:"function"})," ",(0,t.tZ)(e.span,{className:"hljs-title",children:"intersection"}),"(",(0,t.tZ)(e.span,{className:"hljs-params",children:"target, dispatch"}),") "]}),"{\n  dispatchMap.set(target, dispatch);\n  ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"if"})," (!observerMap.has(",(0,t.tZ)(e.span,{className:"hljs-built_in",children:"this"}),")) {\n    observerMap.set(\n      ",(0,t.tZ)(e.span,{className:"hljs-built_in",children:"this"}),",\n      ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"new"})," IntersectionObserver(\n        ",(0,t.BX)(e.span,{className:"hljs-function",children:["(",(0,t.tZ)(e.span,{className:"hljs-params",children:"entries"}),") =>"]})," {\n          entries.forEach(",(0,t.BX)(e.span,{className:"hljs-function",children:["(",(0,t.tZ)(e.span,{className:"hljs-params",children:"item"}),") =>"]})," {\n            dispatchMap.get(item.target)(item.intersectionRatio);\n          });\n        },\n        {\n          ",(0,t.tZ)(e.span,{className:"hljs-attr",children:"threshold"}),": [",(0,t.tZ)(e.span,{className:"hljs-number",children:"0"}),", ",(0,t.tZ)(e.span,{className:"hljs-number",children:"0.5"}),", ",(0,t.tZ)(e.span,{className:"hljs-number",children:"1"}),"],\n        },\n      ),\n    );\n  }\n\n  observerMap.get(",(0,t.tZ)(e.span,{className:"hljs-built_in",children:"this"}),").observe(target);\n\n  ",(0,t.tZ)(e.span,{className:"hljs-keyword",children:"return"})," ",(0,t.tZ)(e.span,{className:"hljs-function",children:"() =>"})," {\n    observerMap.get(",(0,t.tZ)(e.span,{className:"hljs-built_in",children:"this"}),").unobserve(target);\n    dispatchMap.delete(target);\n  };\n}\n"]})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=n.components||{};return e?(0,t.tZ)(e,Object.assign({},n,{children:(0,t.tZ)(r,n)})):r(n)}},662:function(n,e,s){"use strict";var t=s(858),a=s(515),r=s(607);const c=s(68),l=c.keys().map((n=>{var e;return{id:n.match(/\.\/(.*)\.mdx$/)[1],Component:c(n).default,group:null!==(e=c(n).group)&&void 0!==e?e:"建设中"}})).sort(((n,e)=>n.group.charCodeAt()-e.group.charCodeAt()||e.id.charCodeAt()-n.id.charCodeAt()));(0,a.LI)((0,t.tZ)((function(){return(0,t.Au)((()=>(0,t.tZ)(r.A,{children:l.map((n=>(0,t.tZ)(n.Component,{group:n.group,components:r.w},n.id)))})))}),{}),document.querySelector("#app"))},68:function(n,e,s){var t={"./Fragment.mdx":138,"./MethodChannel.mdx":873,"./MicroComponent.mdx":151,"./defineRender.mdx":906,"./jsx和jsxs.mdx":550,"./mount.mdx":98,"./mountFromPort.mdx":454,"./render.mdx":368,"./use.mdx":677};function a(n){var e=r(n);return s(e)}function r(n){if(!s.o(t,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t[n]}a.keys=function(){return Object.keys(t)},a.resolve=r,n.exports=a,a.id=68}},function(n){n.O(0,[736,592,672],(function(){return e=662,n(n.s=e);var e}));n.O()}]);