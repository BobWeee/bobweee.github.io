webpackJsonp([3],{"+708":function(e,t,M){"use strict";var a={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;M("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,M,a,n,i,N,u,c,l,D,o,r,j,s){particlesJS("particles-js",{particles:{number:{value:M,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:a,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:n,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:u,distance:l,color:i,opacity:c,width:N},move:{enable:!0,speed:D,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:o,mode:r},onclick:{enable:j,mode:s},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},n={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},i=M("VU/8")(a,n,!1,null,null,null);t.a=i.exports},"4zN9":function(e,t){},NHnr:function(e,t,M){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=M("7+uW"),i=M("bOdI"),N=M.n(i),u=(a={data:function(){return{}}},N()(a,"data",function(){return{options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:"",input1:"",input2:"",input3:"",input4:""}}),N()(a,"methods",{}),a),c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-col",{staticStyle:{"padding-top":"1%","padding-left":"2%"},attrs:{span:2}},[a("img",{staticClass:"logo",staticStyle:{scale:"1.2"},attrs:{src:M("XmuZ"),alt:"BingX API Docs"}})]),e._v(" "),a("el-col",{attrs:{span:17}},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":"/"+e.$route.path.split("/")[1],mode:"horizontal",router:""}},[a("el-menu-item",{attrs:{index:"/swap"}},[e._v("USDT本位永续合约")]),e._v(" "),a("el-menu-item",{attrs:{index:"/swapV2"}},[e._v("USDT本位永续合约V2")]),e._v(" "),a("el-menu-item",{attrs:{index:"/spot"}},[e._v("现货")]),e._v(" "),a("el-menu-item",{attrs:{index:"/standard"}},[e._v("标准合约")]),e._v(" "),a("el-menu-item",{attrs:{index:"/common"}},[e._v("账户与钱包")])],1)],1),e._v(" "),a("el-col",{staticClass:"el-menu-demo el-menu--horizontal el-menu",attrs:{span:3}},[a("div",{staticStyle:{"padding-top":"4%","text-align":"right","margin-right":"3%"}},[a("el-input",{attrs:{placeholder:"请输入搜索内容","prefix-icon":"el-icon-search"},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}})],1)]),e._v(" "),a("el-col",{staticStyle:{"border-bottom":"solid 1px #e6e6e6"},attrs:{span:2}},[a("div",{staticStyle:{"padding-top":"5%","text-align":"center","border-bottom":"solid 1px #e6e6e6","margin-right":"3%"}},[a("el-select",{staticStyle:{"margin-right":"3%"},attrs:{placeholder:"请选择"},model:{value:e.$store.getters.app.lang.value,callback:function(t){e.$set(e.$store.getters.app.lang,"value",t)},expression:"$store.getters.app.lang.value"}},e._l(e.$store.getters.app.lang.options,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1)])],1)],1)},staticRenderFns:[]};var l={render:function(){var e=this,t=e.$createElement,M=e._self._c||t;return M("div",{staticStyle:{"padding-left":"10%"}},[M("div",[M("div",[e._v("USDT本位永续合约")]),e._v(" "),M("el-menu",{attrs:{"default-active":e.$route.path,"default-openeds":e.level1,router:""}},[e._l(e.$router.options.routes,function(t){return t.meta.hidden?e._e():[t.children&&1!=t.children.length?M("el-submenu",{attrs:{index:t.path}},["中文简体"==e.$store.getters.app.lang.value?M("template",{slot:"title"},[e._v(e._s(t.meta.name.zh))]):"中文繁體"==e.$store.getters.app.lang.value?M("template",{slot:"title"},[e._v(e._s(t.meta.name["zh-hk"]))]):M("template",{slot:"title"},[e._v(e._s(t.meta.name.en))]),e._v(" "),"中文简体"==e.$store.getters.app.lang.value?M("lable",[M("template",{slot:"title"},[e._v(e._s(t.meta.name.zh))]),e._v(" "),e._l(t.children,function(a){return a.meta.hidden?e._e():M("el-menu-item",{key:t.path+"/"+a.path,attrs:{index:t.path+"/"+a.path}},[e._v(e._s(a.meta.name.zh))])})],2):"中文繁體"==e.$store.getters.app.lang.value?M("lable",e._l(t.children,function(a){return a.meta.hidden?e._e():M("el-menu-item",{key:t.path+"/"+a.path,attrs:{index:t.path+"/"+a.path}},[e._v(e._s(a.meta.name["zh-hk"]))])}),1):M("lable",e._l(t.children,function(a){return a.meta.hidden?e._e():M("el-menu-item",{key:t.path+"/"+a.path,attrs:{index:t.path+"/"+a.path}},[e._v(e._s(a.meta.name.en))])}),1)],2):M("label",{attrs:{index:t.path}},["中文简体"==e.$store.getters.app.lang.value?M("label",[M("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v("\n                            "+e._s(t.meta.name.zh)+"\n                        ")])],1):"中文繁體"==e.$store.getters.app.lang.value?M("label",[M("el-menu-item",{key:t.path},[e._v("\n                            "+e._s(t.meta.name["zh-hk"])+"\n                        ")])],1):M("label",[M("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v("\n                            "+e._s(t.meta.name.en)+"\n                        ")])],1)])]})],2)],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",[this._v("Socket文档")])])}]};var D={data:function(){return{}},components:{Navbar:M("VU/8")(u,c,!1,function(e){M("s8MK")},null,null).exports,RouterNav:M("VU/8")({data:function(){return{}},computed:{level1:function(){return this.$router.options.routes.map(function(e){return e.path})}}},l,!1,function(e){M("lyMT")},null,null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticStyle:{height:"6vmin","margin-bottom":"1%"}},[t("Navbar",{staticClass:"app__navbar",staticStyle:{"border-bottom":"solid 1px #e6e6e6"}})],1),this._v(" "),t("el-row",[t("el-col",{staticStyle:{position:"fixed",width:"20%"},attrs:{span:4}},[t("RouterNav")],1),this._v(" "),t("el-col",{staticStyle:{"margin-left":"20%"},attrs:{span:20}},[t("router-view")],1)],1),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticStyle:{width:"10%",position:"fixed"}}),this._v(" "),t("div",{staticStyle:{float:"left",width:"78%","margin-left":"21%"}})])}]};var r=M("VU/8")(D,o,!1,function(e){M("4zN9")},null,null).exports,j=M("/ocq"),s=function(){return M.e(1).then(M.bind(null,"sRz/"))},g=[];g.push({path:"*",component:function(){return M.e(0).then(M.bind(null,"ERm+"))},meta:{hidden:!0}});for(var z=M("wS1W").keys(),T=0;T<z.length;T++){var I=z[T],p=M("QkfL")("./"+I.replace("./","")),y=[];if(p.children)for(var x=0;x<p.children.length;x++){var A=p.children[x];y.push({path:A.path,component:s,meta:{name:A.name}})}g.push({path:"/"+I.replace("./","").replace(".json",""),component:s,redirect:y.length>0?y[0].path:"",meta:{name:p.name},children:y.length>0?y:""})}var d=g,O=M("mM94"),h=M("NYxO"),E={state:{sidebar:"1111",lang:{options:["English","中文繁體","中文简体"],value:"中文简体"}},mutations:{SET_SIZE:function(e,t){e.sidebar="change"}},actions:{setSize:function(e,t){(0,e.commit)("SET_SIZE",t)}}},L={app:function(e){return e.app}};n.default.use(h.a);var m=new h.a.Store({modules:{app:E},getters:L}),S=M("zL8q"),k=M.n(S),v=(M("tvR6"),M("mtWM")),f=M.n(v),Q=M("bm7V"),w=M.n(Q);n.default.use(w.a),n.default.prototype.$axios=f.a,n.default.use(O.a),n.default.use(k.a),n.default.use(j.a),n.default.config.productionTip=!1,n.default.config.debug=!0;var C=new j.a({routes:d});new n.default({el:"#app",router:C,store:m,components:{App:r},template:"<App/>"})},QkfL:function(e,t,M){var a={"./swap/a0introduce":"s9V5","./swap/a0introduce.json":"s9V5","./swap/account-api":"Tzy7","./swap/account-api.json":"Tzy7"};function n(e){return M(i(e))}function i(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id="QkfL"},Tzy7:function(e,t){e.exports={root:"/swap",path:"/account-api",name:{zh:"账户接口","zh-hk":"賬戶接口",en:"Account Interface"},children:[{path:"get-perpetual-swap-account-asset-information",api:{uri:"api/v1/user/getBalance",method:"POST",info:{"zh-hk":"查詢賬戶信息",zh:"查询账户信息",en:"Get Perpetual Swap Account Asset Information"}},name:{"zh-hk":"查詢賬戶信息",zh:"查询账户信息",en:"Get Perpetual Swap Account Asset Information"},comment:{"zh-hk":"查詢賬戶信息",zh:"查询账户信息",en:"Get Perpetual Swap Account Asset Information"}},{path:"perpetual-swap-positions",api:{uri:"api/v1/user/getPositions",method:"POST",info:{"zh-hk":"查詢持倉信息",zh:"查询持仓信息",en:"Perpetual Swap Positions"}},name:{"zh-hk":"查詢持倉信息",zh:"查询持仓信息",en:"Perpetual Swap Positions"},comment:{"zh-hk":"查詢持倉信息",zh:"查询持仓信息",en:"Perpetual Swap Positions"}},{path:"perpetual-swap-positions666",api:{uri:"api/v1/user/getPositions",method:"POST",info:{"zh-hk":"查詢持倉信息",zh:"查询持仓信息",en:"Perpetual Swap Positions"}},name:{"zh-hk":"查詢持倉信息",zh:"查询持仓信息",en:"Perpetual Swap Positions"},comment:{"zh-hk":"查詢持倉信息",zh:"查询持仓信息",en:"Perpetual Swap Positions"}},{path:"perpetual-swap-positions677",api:{uri:"api/v1/user/getPositions",method:"POST",info:{"zh-hk":"查詢持倉信息",zh:"查询持仓信息",en:"Perpetual Swap Positions"}},name:{"zh-hk":"查詢持倉信息",zh:"查询持仓信息",en:"Perpetual Swap Positions"},comment:{"zh-hk":"查詢持倉信息",zh:"查询持仓信息",en:"Perpetual Swap Positions"}}]}},XmuZ:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA4NCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4LjQwNzcgNy42NzE3Nkg0NS40NDk3VjE3Ljk3MjhINDguNDA3N1Y3LjY3MTc2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQzLjU0MzcgMTEuODc0OUM0My4yMjUxIDExLjI4OTYgNDIuNzY4OCAxMC43OTAzIDQyLjIxODkgMTAuNDE5OUM0Mi44OTkgOS42NDg4IDQzLjI5OTcgOC42MjQ4OCA0My4yNTA0IDcuNTAzNjNDNDMuMTUwNSA1LjI4MTM3IDQxLjI1MDYgMy41NjQ3MyAzOS4wMjcxIDMuNTY0NzNIMzIuODYwOFYxNy45NzE2SDM5LjkxNTdDNDIuMTk0OSAxNy45NzE2IDQ0LjA0MyAxNi4xMjQ3IDQ0LjA0MyAxMy44NDQzQzQ0LjA0MyAxMy4xMzE0IDQzLjg2MjIgMTIuNDYxNCA0My41NDM3IDExLjg3NDlaTTM5LjQ1NjkgMTUuNTI2OEgzNS44MTc1VjExLjk5MTJIMzkuNDM1NEM0MC4zODYgMTEuOTkxMiA0MS4xODk5IDEyLjc0NTggNDEuMTg5OSAxMy43NTk2QzQxLjE4OTkgMTQuNzYwOCA0MC4zODcyIDE1LjUyNjggMzkuNDU2OSAxNS41MjY4Wk0zOC42ODMyIDkuNTQ2NEgzNS44MTc1VjYuMDEwNzVIMzguNjYxN0MzOS42MTIzIDYuMDEwNzUgNDAuNDE2MyA2Ljc2NTQxIDQwLjQxNjMgNy43NzkyQzQwLjQxNSA4Ljc3OTEgMzkuNjEyMyA5LjU0NjQgMzguNjgzMiA5LjU0NjRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNODMuMzk5MiAzLjk5MTk5SDc5Ljk5NjNMNzcuMzM5MSA4LjI1MzI0TDc0LjY4MiAzLjk5MTk5SDcxLjI3NzhMNzUuNjM3NyAxMC45ODI0TDcxLjI3NzggMTcuOTcyOEg3NC42ODJMNzcuMzM5MSAxMy43MTE2TDc5Ljk5NjMgMTcuOTcyOEg4My4zOTkyTDc5LjA0MDYgMTAuOTgyNEw4My4zOTkyIDMuOTkxOTlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTguOTU2NiAxMi4yNDI3VjE3Ljk3MTZINTUuOTk5OVYxMS43Mjk1QzU1Ljk5OTkgMTAuODIxOSA1NS4yNTAzIDEwLjA4ODcgNTQuMzM1MSAxMC4xMTUyQzUzLjQ1MjggMTAuMTQxOCA1Mi43NzE0IDEwLjkxMjkgNTIuNzcxNCAxMS43OTY1VjE3Ljk3MDNINDkuODEzNVY3LjY2OTIzSDUyLjc3MTRWOC4xNTk2OUM1My40Mzc2IDcuODQ0OTQgNTQuMTc5NiA3LjY2OTIzIDU0Ljk2NDYgNy42NjkyM0M1NS4zNTc4IDcuNjY5MjMgNTUuNzQwOCA3LjcxMzQ3IDU2LjEwODYgNy43OTY5QzU3Ljc0ODIgOC4xNjk4MSA1OC45MDYxIDkuNjMzNjIgNTguOTQ3OCAxMS4zMTM2QzU4Ljk1NDEgMTEuNjE1NyA1OC45NTY2IDExLjkyNzkgNTguOTU2NiAxMi4yNDI3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQ4LjQwNzcgMy41NjQ3M0g0NS40NDk3VjYuNTIyN0g0OC40MDc3VjMuNTY0NzNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNzAuNDg1NCA3LjY3MTc2SDY1LjM4NDhDNjUuMzY4NCA3LjY3MTc2IDY1LjM1MiA3LjY3MDQ5IDY1LjMzNDMgNy42NzA0OUM2Mi40OTAxIDcuNjcwNDkgNjAuMTg0NCA5Ljk3NzQ2IDYwLjE4NDQgMTIuODIxN0M2MC4xODQ0IDE1LjY1MzIgNjIuNDY3MyAxNy45NDg4IDY1LjI5IDE3Ljk3MDNDNjUuMzAyNyAxNy45NzI4IDY1LjMxNzggMTcuOTcyOCA2NS4zMzQzIDE3Ljk3MjhDNjYuNDMxNSAxNy45NzI4IDY3LjUyNzUgMTguMjk1MiA2Ny41Mjc1IDE5LjI0OTZDNjcuNTI3NSAyMC4yMTkxIDY2LjUzNTIgMjEuMDQyIDY1LjMzNDMgMjEuMDQyQzY0LjEyMzMgMjEuMDQyIDYzLjE0MTEgMjAuMDU5OCA2My4xNDExIDE4Ljg0ODhINjAuMTgzMUM2MC4xODMxIDIxLjY5MyA2Mi40OTAxIDI0IDY1LjMzMyAyNEM2OC4xNzg1IDI0IDcwLjQ4MjkgMjEuNjkzIDcwLjQ4MjkgMTguODQ4OEM3MC40ODQyIDE4Ljg0ODggNzAuNTM5OCAxNy4zMTA0IDY5LjIzNTIgMTYuMTg0MUM3MC4wMTUyIDE1LjI4MjggNzAuNDg0MiAxNC4xMDk4IDcwLjQ4NDIgMTIuODIxN0M3MC40ODQyIDExLjgyOTMgNzAuMjAzNSAxMC45MDI4IDY5LjcxNjkgMTAuMTE2NUg3MC40ODU0VjcuNjcxNzZaTTY1LjMzNDMgMTUuMDE0OUM2NC4xMjMzIDE1LjAxNDkgNjMuMTQxMSAxNC4wMzI3IDYzLjE0MTEgMTIuODIxN0M2My4xNDExIDExLjYxMDcgNjQuMTIzMyAxMC42Mjg1IDY1LjMzNDMgMTAuNjI4NUM2Ni41NDUzIDEwLjYyODUgNjcuNTI3NSAxMS42MTA3IDY3LjUyNzUgMTIuODIxN0M2Ny41Mjc1IDE0LjAzMjcgNjYuNTQ1MyAxNS4wMTQ5IDY1LjMzNDMgMTUuMDE0OVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yOC4wMDY1IDBDMjQuODQyNSAwIDIxLjcxMzkgMC44MDAxNyAxOC45NTgyIDIuMzE0NTVDMTcuNDgxNyAzLjEyNjA5IDE2LjExOSA0LjEzMjMxIDE0LjkwOCA1LjMwNjY1QzE0LjYyMzYgNS41ODIyMiAxNC4zNDQzIDUuODcwNDMgMTQuMDc3NSA2LjE2MzdDMTMuMTgzOCA3LjE0ODQyIDEyLjM5MjUgOC4yMjc5NiAxMS43Mjc2IDkuMzczMjJDMTEuNDkxMiA5Ljc4NDA1IDExLjIyOTUgMTAuMTg0OCAxMC45NDg5IDEwLjU2NzhDMTAuOTEyMyAxMC42MTgzIDEwLjg3NjkgMTAuNjY3NyAxMC44Mzc3IDEwLjcxN0M4LjM4Nzg3IDEzLjk1ODEgNC42NTc1NCAxNS44MTYzIDAuNjAxMDc0IDE1LjgxNjNWMjEuODA0M0MzLjc2NTA5IDIxLjgwNDMgNi44OTM3MSAyMS4wMDQxIDkuNjQ5NDMgMTkuNDg5N0MxMS4xMjIxIDE4LjY4MDcgMTIuNDg0OCAxNy42NzMyIDEzLjY5OTYgMTYuNDk3NkMxMy45ODQgMTYuMjIyMSAxNC4yNjM0IDE1LjkzMzggMTQuNTMxMyAxNS42NDA2QzE1LjQyNTEgMTQuNjU1OSAxNi4yMTM4IDEzLjU3NzYgMTYuODc4OCAxMi40MzIzTDE2LjkyMyAxMi4zNTc3QzE3LjE0OCAxMS45NzIyIDE3LjM5NTggMTEuNTk1NSAxNy42NTc0IDExLjIzNzhDMTcuNjk0MSAxMS4xODg1IDE3LjczMDcgMTEuMTM3OSAxNy43Njk5IDExLjA4NjFDMjAuMjE4NSA3Ljg0NjIgMjMuOTUwMSA1Ljk4NjczIDI4LjAwNjUgNS45ODY3M1YwWiIgZmlsbD0iIzJBNTRGRiIvPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGQ9Ik0yOC4wMDY1IDBDMjQuODQyNSAwIDIxLjcxMzkgMC44MDAxNyAxOC45NTgyIDIuMzE0NTVDMTcuNDgxNyAzLjEyNjA5IDE2LjExOSA0LjEzMjMxIDE0LjkwOCA1LjMwNjY1QzE0LjYyMzYgNS41ODIyMiAxNC4zNDQzIDUuODcwNDMgMTQuMDc3NSA2LjE2MzdDMTMuMTgzOCA3LjE0ODQyIDEyLjM5MjUgOC4yMjc5NiAxMS43Mjc2IDkuMzczMjJDMTEuNDkxMiA5Ljc4NDA1IDExLjIyOTUgMTAuMTg0OCAxMC45NDg5IDEwLjU2NzhDMTAuOTEyMyAxMC42MTgzIDEwLjg3NjkgMTAuNjY3NyAxMC44Mzc3IDEwLjcxN0M4LjM4Nzg3IDEzLjk1ODEgNC42NTc1NCAxNS44MTYzIDAuNjAxMDc0IDE1LjgxNjNWMjEuODA0M0MzLjc2NTA5IDIxLjgwNDMgNi44OTM3MSAyMS4wMDQxIDkuNjQ5NDMgMTkuNDg5N0MxMS4xMjIxIDE4LjY4MDcgMTIuNDg0OCAxNy42NzMyIDEzLjY5OTYgMTYuNDk3NkMxMy45ODQgMTYuMjIyMSAxNC4yNjM0IDE1LjkzMzggMTQuNTMxMyAxNS42NDA2QzE1LjQyNTEgMTQuNjU1OSAxNi4yMTM4IDEzLjU3NzYgMTYuODc4OCAxMi40MzIzTDE2LjkyMyAxMi4zNTc3QzE3LjE0OCAxMS45NzIyIDE3LjM5NTggMTEuNTk1NSAxNy42NTc0IDExLjIzNzhDMTcuNjk0MSAxMS4xODg1IDE3LjczMDcgMTEuMTM3OSAxNy43Njk5IDExLjA4NjFDMjAuMjE4NSA3Ljg0NjIgMjMuOTUwMSA1Ljk4NjczIDI4LjAwNjUgNS45ODY3M1YwWiIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsXzM2OV8xNDM4KSIvPgo8cGF0aCBkPSJNMjguMDA2NSAxNS44MTYzQzIzLjk1MDEgMTUuODE2MyAyMC4yMTg1IDEzLjk1ODEgMTcuNzY4NyAxMC43MTdDMTcuNzMyIDEwLjY2NzcgMTcuNjk0MSAxMC42MTg0IDE3LjY1NzQgMTAuNTY1M0MxNy4zNzgxIDEwLjE4NiAxNy4xMTY0IDkuNzg0MDUgMTYuODggOS4zNzE5NkMxNi4yMTUxIDguMjI3OTYgMTUuNDIzOCA3LjE0ODQyIDE0LjUzMDEgNi4xNjM3QzE0LjI2MzQgNS44NzE2OSAxMy45ODQgNS41ODM0OCAxMy42OTk2IDUuMzA3OTFDMTIuNDg4NiA0LjEzMjMxIDExLjEyNTkgMy4xMjYwOSA5LjY0OTQzIDIuMzE1ODFDNi44OTM3MSAwLjgwMTQzMSAzLjc2NTA5IDAuMDAxMjY0NTcgMC42MDEwNzQgMC4wMDEyNjQ1N1Y1Ljk4OTI1QzQuNjU3NTQgNS45ODkyNSA4LjM4OTEzIDcuODQ3NDcgMTAuODM4OSAxMS4wODg2QzEwLjg3NjkgMTEuMTM3OSAxMC45MTM1IDExLjE4ODUgMTAuOTUwMiAxMS4yMzc4QzExLjIxMzEgMTEuNTk2OCAxMS40NjA5IDExLjk3MzUgMTEuNjgzMyAxMi4zNTUyTDExLjczMDEgMTIuNDMzNkMxMi4zOTM4IDEzLjU3NjMgMTMuMTgzOCAxNC42NTQ2IDE0LjA3NzUgMTUuNjQwNkMxNC4zNDMgMTUuOTMyNiAxNC42MjM2IDE2LjIyMDggMTQuOTA4IDE2LjQ5NjRDMTYuMTIxNiAxNy42NzIgMTcuNDg0MyAxOC42Nzk0IDE4Ljk1ODIgMTkuNDg4NUMyMS43MTM5IDIxLjAwMjggMjQuODQyNSAyMS44MDMgMjguMDA2NSAyMS44MDNWMTUuODE2M1oiIGZpbGw9IiMyQTU0RkYiLz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbF8zNjlfMTQzOCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxNC4zMDUgMTAuOTAyMSkgc2NhbGUoOS41OTk5NSkiPgo8c3RvcC8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="},lyMT:function(e,t){},s8MK:function(e,t){},s9V5:function(e,t){e.exports={root:"/swap",path:"/introduce",name:{"zh-hk":"介紹",zh:"介绍",en:"Introduction"},comment:{"zh-hk":"查詢賬戶信息",zh:"查询账户信息",en:"Get Perpetual Swap Account Asset Information"}}},tvR6:function(e,t){},wS1W:function(e,t,M){var a={"./swap/a0introduce.json":"s9V5","./swap/account-api.json":"Tzy7"};function n(e){return M(i(e))}function i(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id="wS1W"}},["NHnr"]);
//# sourceMappingURL=app.cfd926d7f93af8f6cb72.js.map