(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{795:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s})),i.d(e,"d",(function(){return o})),i.d(e,"c",(function(){return a}));const n=(t,e)=>void 0===t?e:t,s={string:{type:String,default:""},strDef(t="",e=!1){const i=typeof t;return"string"!==i&&"function"!==i&&console.error("props 属性默认值类型要求为 string/function, 得到的为"+i),{type:String,required:e,default:t}},boolean:{type:Boolean,default:!1},boolDef(t=!1,e=!1){const i=typeof t;return"boolean"!==i&&"function"!==i&&console.error("props 属性默认值类型要求为 boolean/function, 得到的为"+i),{type:Boolean,required:e,default:t}},number:{type:Number,default:0},numDef(t=0,e=!1){const i=typeof t;return"number"!==i&&"function"!==i&&console.error("props 属性默认值类型要求为 number/function, 得到的为"+i),{type:Number,required:e,default:t}},anyDef:(t="",e=!1)=>({required:e,default:t}),objDef:(t={},e=!1)=>({type:Object,required:e,default:"function"==typeof t?t:()=>t}),arrDef:(t=[],e=!1)=>({type:Array,required:e,default:"function"==typeof t?t:()=>t})},r=["text","textarea","integer","decimal","input"],o=["select","radio","checkbox","cascader","switch","time","year","month","date","dates","week","datetime","datetimerange","daterange","monthrange","rate","color","choose"],a=t=>r.includes(t)?"请输入":o.includes(t)?"请选择":""},829:function(t,e,i){},862:function(t,e,i){"use strict";i(829)},907:function(t,e,i){"use strict";i.r(e);var n=i(795);var s={name:"UEditor",inheritAttrs:!1,data:()=>({ueId:"editor_"+Math.random().toString().substr(2),iframeId:"iframe_"+Math.random().toString().substr(2),instance:null,innerModify:!1,editorReady:!1,isFocus:!1,src:"",baseConfig:{UEDITOR_HOME_URL:"/ue/",serverUrl:"/ue/jsp/config.json",initialFrameWidth:"100%"}}),props:{path:n.b.strDef("/ue/"),config:n.b.objDef({}),value:n.b.strDef(""),disabled:n.b.boolDef(!1),height:n.b.strDef("auto")},watch:{value(t){return this.disabled?(sessionStorage.setItem(this.iframeId,t),this.src=`/ueditor.html?id=${this.iframeId}&_t=${Date.now()}`,void this.resizeHeight()):this.innerModify?(this.innerModify=!1,this.innerModify):void this.setContent(t)}},methods:{setEnabled(){this.instance&&this.instance.setEnabled()},setHide(){this.instance&&this.instance.setHide()},clearDoc(){this.instance&&this.instance.execCommand("cleardoc")},getContent(){return this.instance&&this.instance.getContent()},setContent(t){this.editorReady?this.instance.setContent(t):setTimeout(()=>this.setContent(t),100)},initEditor(){if(!window.UE||this.instance)return;let t=setInterval(()=>{window.UE.getEditor&&(clearInterval(t),this.instance=window.UE.getEditor(this.ueId,{...this.baseConfig,...this.config}),this.instance.ready(this.doReady),this.instance.addListener("contentChange",this.contentChange),this.instance.addListener("blur",this.blur),this.instance.addListener("focus",this.focus))},30)},blur(){this.contentChange(),this.isFocus=!1},focus(){this.isFocus=!0},doReady(){this.$emit("ready",this.instance),this.editorReady=!0,this.instance.setContent(this.value)},contentChange(){const t=this.getContent();this.isFocus&&(this.innerModify=!0,this.$emit("input",t),setTimeout(()=>{this.innerModify=!1}))},async insertScript(){await Promise.all([this.insert("editorScriptTag","ueditor.all.min.js"),this.insert("configScriptTag","ueditor.config.js")]).then(()=>{this.initEditor()})},async insert(t,e){let i=document.getElementById(t);if(i)return Promise.resolve();i=document.createElement("script"),i.src=this.path+e,i.id=t;return(document.head||document.getElementsByTagName("head")[0]).appendChild(i),new Promise(t=>i.addEventListener("load",()=>t()))},resizeHeight(){"auto"===this.height&&this.$nextTick(()=>{let t=document.getElementById(this.iframeId);t.setAttribute("height","0px"),t.onload=function(){this.setAttribute("height",this.contentWindow.document.documentElement.scrollHeight+"px")}})}},created(){this.disabled?(sessionStorage.setItem(this.iframeId,this.value),this.src=`/ueditor.html?id=${this.iframeId}&_t=${Date.now()}`,this.resizeHeight()):window.UE?this.initEditor():this.insertScript()},beforeDestroy(){sessionStorage.removeItem(this.iframeId),this.instance&&(this.instance.removeListener("ready",this.doReady),this.instance.removeListener("contentChange",this.contentChange),this.instance.removeListener("blur",this.blur),this.instance.removeListener("focus",this.focus),this.instance.destroy(),this.instance=null)}},r=(i(862),i(24)),o=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"u-editor",style:{height:this.height}},[this.disabled?e("iframe",{attrs:{id:this.iframeId,src:this.src,width:"100%",height:"100%",frameborder:"0"}}):e("script",{attrs:{id:this.ueId,type:"text/plain",name:"content"}})])}),[],!1,null,null,null);e.default=o.exports}}]);