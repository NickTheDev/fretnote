(function(t){function e(e){for(var s,i,c=e[0],l=e[1],u=e[2],d=0,f=[];d<c.length;d++)i=c[d],a[i]&&f.push(a[i][0]),a[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);o&&o(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var o=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cfb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"contents"},[t._m(0),n("div",{staticClass:"data"},[n("VField",{staticClass:"length",attrs:{title:"Enter middle C base length..."},model:{value:t.baseLength,callback:function(e){t.baseLength=e},expression:"baseLength"}}),t._m(1),t._l(t.chords,function(e,s){return n("div",[n("div",{staticClass:"values columns is-centered is-text-center"},[n("div",{staticClass:"column"},[n("a",{staticClass:"chord"},[t._v(t._s(s))])]),n("div",{staticClass:"column"},[t._v("\n            "+t._s(e)+" "),n("a",{staticClass:"units"},[t._v("hz")])]),n("div",{staticClass:"column"},[t._v("\n            "+t._s(t.cap(e===t.chords.C?t.baseLength:t.length(e)))+" "),n("a",{staticClass:"units"},[t._v("m")])]),n("div",{staticClass:"column"},[t._v("\n            "+t._s(t.cap(e===t.chords.C?t.baseWave:t.wave(e)))+" "),n("a",{staticClass:"units"},[t._v("m")])]),n("div",{staticClass:"column"},[t._v("\n            "+t._s(t.cap(t.baseSpeed))+" "),n("a",{staticClass:"units"},[t._v("m/s")])])])])})],2)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headers is-text-center"},[n("a",{staticClass:"h1"},[t._v("fretnote")]),n("p",{staticClass:"h2"},[t._v("Calculate guitar fret lengths.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"keys columns is-centered is-text-center"},[n("div",{staticClass:"column"},[t._v("Chord")]),n("div",{staticClass:"column"},[t._v("Frequency")]),n("div",{staticClass:"column"},[t._v("Length")]),n("div",{staticClass:"column"},[t._v("Wavelength")]),n("div",{staticClass:"column"},[t._v("Speed")])])}],i={name:"app",data:function(){return{baseLength:0,chords:{C:262,D:294,E:329.6,F:349,G:392,A:440,B:494}}},computed:{baseWave:function(){return 2*this.baseLength},baseSpeed:function(){return this.chords.C*this.baseWave}},methods:{cap:function(t){return isNaN(t)?0:Math.round(100*t)/100},wave:function(t){return this.baseSpeed/t},length:function(t){return this.wave(t)/2}}},c=i,l=(n("cf25"),n("2877")),u=Object(l["a"])(c,a,r,!1,null,null,null),o=u.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("label",[n("input",{staticClass:"input",attrs:{placeholder:t.title,type:"number"},domProps:{value:t.onKey},on:{input:function(e){t.$emit("input",parseFloat(e.target.value))}}})])])])},f=[],v=(n("c5f6"),{name:"VField",props:{title:{type:String,default:""},value:{type:Number,default:0}},methods:{onKey:function(t){this.value=isNaN(t)?0:t}}}),p=v,h=(n("ab72"),Object(l["a"])(p,d,f,!1,null,"f490e888",null)),b=h.exports;s["a"].config.productionTip=!1;var m=[b];m.forEach(function(t){return s["a"].component(t.name,t)}),new s["a"]({render:function(t){return t(o)}}).$mount("#app")},5750:function(t,e,n){},ab72:function(t,e,n){"use strict";var s=n("5750"),a=n.n(s);a.a},cf25:function(t,e,n){"use strict";var s=n("0cfb"),a=n.n(s);a.a}});
//# sourceMappingURL=app.5006fa2c.js.map