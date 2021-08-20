(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{825:function(e,t,l){},858:function(e,t,l){"use strict";l(825)},903:function(e,t,l){"use strict";l.r(t);var s={name:"Tree2",props:{data:{type:Array,default:()=>[]},nodeKey:{type:String,default:"id"},defaultExpandAll:{type:Boolean,default:!1},defaultExpandedKeys:{type:Array,default:()=>[]},filterNodeMethod:{type:Function,default(e,t,l){if(!e)return!0;let s=l.parent,a=[l.label],h=1;for(;h<l.level;)a=[...a,s.label],s=s.parent,h++;return a.some(t=>-1!==t.indexOf(e))}},showCheckAll:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!1},level:{type:Number,default:1}},data:()=>({ref:"elTree",key:"",allNodes:[],maxLevel:0,isFirst:!0,isIndeterminate:!1,checkAll:!1,timeout:null,currentKey:null}),watch:{data:{handler:"handleData",immediate:!0,deep:!0},level:{handler:"expandToLevel",immediate:!0},defaultCheckedKeys:{handler:"handleCheckChange",immediate:!0}},methods:{async expandToLevel(e){if(this.isFirst&&(this.defaultExpandAll||this.defaultExpandedKeys.length))return void(this.isFirst=!1);this.isFirst=!1,this.maxLevel||await this.handleData();const t=this.allNodes.sort((e,t)=>t.level-e.level);0===e?t.forEach(e=>{e.isLeaf&&e.expand(null,!0)}):t.forEach(t=>{t.level>=e?t.expanded=!1:t.expanded=!0})},handleData(){this.$nextTick(()=>(this.allNodes=this.getAllNodes(this.$refs[this.ref].root.childNodes),this.allNodes.length&&(this.maxLevel=Math.max.apply(null,this.allNodes.map(({level:e})=>e))),this.$emit("max-level",this.maxLevel),this.handleCheckChange(),Promise.resolve()))},getAllNodes(){let e=[];const t=function(l){(l.root?l.root.childNodes:l.childNodes).forEach(l=>{e.push(l),t(l)})};return t(this.$refs[this.ref]),e},handleCheckAllChange(){this.isIndeterminate=!1;let e=[];if(this.checkAll){const t=this.allNodes.filter(({visible:e})=>e);e=t.map(({key:e})=>e),this.$emit("check",{[this.$refs[this.ref].props.label||"label"]:"全选"},{checkedNodes:t,checkedKeys:e,halfCheckedNodes:[],halfCheckedKeys:[]})}else this.$emit("check",{[this.$refs[this.ref].props.label||"label"]:"全选"},{checkedNodes:[],checkedKeys:[],halfCheckedNodes:[],halfCheckedKeys:[]});this.$refs[this.ref].setCheckedKeys(e)},handleCheckChange(){this.showCheckAll&&this.showCheckbox&&this.data.length&&this.debounce(this.handleCheckAllStatus,100)},debounce(e,t){clearTimeout(this.timeout),this.timeout=setTimeout(e,t)},handleCheckAllStatus(){const e=this.allNodes.filter(({level:e,visible:t})=>1===e&&t);this.checkAll=e.every(({checked:e})=>e),this.isIndeterminate=e.some(({indeterminate:e})=>e)||e.some(({checked:e})=>e)&&!this.checkAll},handleCurrentChange(e,t){const{key:l,disabled:s}=t;s?this.$refs[this.ref].setCurrentKey(this.currentKey):(this.currentKey=l,this.$emit("current-change",e,t))},handleNodeClick(e,t,l){const{disabled:s}=t;s||this.$emit("node-click",e,t,l)},filter(e){this.$refs[this.ref].filter(e)}},mounted(){for(let e in this.$refs[this.ref])e in this||"function"!=typeof this.$refs[this.ref][e]||(this[e]=this.$refs[this.ref][e].bind(this.$refs[this.ref]))}},a=(l(858),l(24)),h=Object(a.a)(s,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"b-tree"},[e.showCheckAll&&e.showCheckbox&&e.data.length?l("el-checkbox",{staticClass:"b-tree-check-all",attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]):e._e(),e._v(" "),l("el-tree",e._g(e._b({key:e.key,ref:e.ref,attrs:{data:e.data,"node-key":e.nodeKey,"default-expand-all":e.defaultExpandAll,"default-expanded-keys":e.defaultExpandedKeys,"show-checkbox":e.showCheckbox,"filter-node-method":e.filterNodeMethod},on:{"check-change":e.handleCheckChange},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.node,a=t.data;return e._t("default",(function(){return[l("text-ellipsis",{class:{"custom-disabled":s.disabled},attrs:{content:s.label}})]}),null,{node:s,data:a})}}],null,!0)},"el-tree",e.$attrs,!1),Object.assign({},e.$listeners,{"current-change":e.handleCurrentChange,"node-click":e.handleNodeClick})))],1)}),[],!1,null,null,null);t.default=h.exports}}]);