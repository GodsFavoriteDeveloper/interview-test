(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7MJf":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return M})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return w})),n.d(t,"e",(function(){return o}));var i=n("imtE"),r=n("kBU6");const o=e=>new Promise((t,n)=>{Object(i.l)(()=>{s(e),a(e).then(n=>{n.animation&&n.animation.destroy(),c(e),t(n)},t=>{c(e),n(t)})})}),s=e=>{const t=e.enteringEl,n=e.leavingEl;E(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),w(t,!1),n&&w(n,!1)},a=async e=>{const t=await l(e);return t?u(t,e):d(e)},c=e=>{const t=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},l=async e=>{if(e.leavingEl&&e.animated&&0!==e.duration)return e.animationBuilder?e.animationBuilder:"ios"===e.mode?(await n.e(95).then(n.bind(null,"pe/X"))).iosTransitionAnimation:(await n.e(96).then(n.bind(null,"KYEN"))).mdTransitionAnimation},u=async(e,t)=>{await p(t,!0);const n=e(t.baseEl,t);f(t.enteringEl,t.leavingEl);const i=await h(n,t);return t.progressCallback&&t.progressCallback(void 0),i&&g(t.enteringEl,t.leavingEl),{hasCompleted:i,animation:n}},d=async e=>{const t=e.enteringEl,n=e.leavingEl;return await p(e,!1),f(t,n),g(t,n),{hasCompleted:!0}},p=async(e,t)=>{const n=(void 0!==e.deepWait?e.deepWait:t)?[b(e.enteringEl),b(e.leavingEl)]:[y(e.enteringEl),y(e.leavingEl)];await Promise.all(n),await m(e.viewIsReady,e.enteringEl)},m=async(e,t)=>{e&&await e(t)},h=(e,t)=>{const n=t.progressCallback,i=new Promise(t=>{e.onFinish(e=>t(1===e))});return n?(e.progressStart(!0),n(e)):e.play(),i},f=(e,t)=>{v(t,r.c),v(e,r.a)},g=(e,t)=>{v(e,r.b),v(t,r.d)},v=(e,t)=>{if(e){const n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},y=e=>e&&e.componentOnReady?e.componentOnReady():Promise.resolve(),b=async e=>{const t=e;if(t){if(null!=t.componentOnReady&&null!=await t.componentOnReady())return;await Promise.all(Array.from(t.children).map(b))}},w=(e,t)=>{t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},E=(e,t,n)=>{void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},M=e=>e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e},Dl6n:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return a}));const i=(e,t)=>null!==t.closest(e),r=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,["ion-color-".concat(e)]:!0}:void 0,o=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},s=/^[a-z][a-z0-9+\-.]*:/,a=async(e,t,n)=>{if(null!=e&&"#"!==e[0]&&!s.test(e)){const i=document.querySelector("ion-router");if(i)return null!=t&&t.preventDefault(),i.push(e,n)}return!1}},TMBv:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const i="".concat(e*t/n-e,"ms"),r=2*Math.PI*t/n;return{r:5,style:{top:"".concat(9*Math.sin(r),"px"),left:"".concat(9*Math.cos(r),"px"),"animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const i=t/n,r="".concat(e*i-e,"ms"),o=2*Math.PI*i;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:"".concat(9-9*t,"px"),"animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(e*t/n-e,"ms")}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(e*t/n-e,"ms")}})}}},YtD4:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=e=>{try{if("string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,a.forEach(e=>{const n=t.querySelectorAll(e);for(let i=n.length-1;i>=0;i--){const e=n[i];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const s=o(e);for(let t=0;t<s.length;t++)r(s[t])}});const i=o(t);for(let e=0;e<i.length;e++)r(i[e]);const s=document.createElement("div");s.appendChild(t);const c=s.querySelector("div");return null!==c?c.innerHTML:s.innerHTML}catch(t){return console.error(t),""}},r=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),i=t.name;if(!s.includes(i.toLowerCase())){e.removeAttribute(i);continue}const r=t.value;null!=r&&r.toLowerCase().includes("javascript:")&&e.removeAttribute(i)}const t=o(e);for(let n=0;n<t.length;n++)r(t[n])},o=e=>null!=e.children?e.children:e.childNodes,s=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},m9yc:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));const i=async(e,t,n,i,r)=>{if(e)return e.attachViewToDom(t,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return i&&i.forEach(e=>o.classList.add(e)),r&&Object.assign(o,r),t.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},r=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},opz7:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return i}));const i=()=>{const e=window.TapticEngine;e&&e.selection()},r=()=>{const e=window.TapticEngine;e&&e.gestureSelectionStart()},o=()=>{const e=window.TapticEngine;e&&e.gestureSelectionChanged()},s=()=>{const e=window.TapticEngine;e&&e.gestureSelectionEnd()}},sUQ5:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("XNiG"),r=n("vkgz"),o=n("8Y7J"),s=n("IheW"),a=n("iInd");let c=(()=>{class e{constructor(e,t){this.http=e,this.router=t,this.movies=[],this.updatedMovies=new i.a,this.url="http://localhost:3000/api/movies"}getUpdatedMoviesListener(){return this.updatedMovies.asObservable()}getMovies(){return this.http.get(this.url).pipe(Object(r.a)(e=>{console.log(e),this.movies=e,this.updatedMovies.next([...this.movies])}))}getMovie(e){return this.http.get("".concat(this.url,"/").concat(e))}addMovie(e,t,n){return this.http.post("".concat(this.url),{title:e,plot:t,genre:n}).pipe(Object(r.a)(()=>{this.getMovies().subscribe(),this.router.navigateByUrl("/")}))}updateMovie(e,t,n,i){return this.http.put("".concat(this.url,"/").concat(e),{title:t,plot:n,genre:i}).pipe(Object(r.a)(()=>{this.getMovies().subscribe(),this.router.navigateByUrl("/")}))}deleteMovie(e){return this.http.delete("".concat(this.url,"/").concat(e)).pipe(Object(r.a)(()=>{this.getMovies().subscribe(),this.router.navigateByUrl("/")}))}}return e.ngInjectableDef=o.Kb({factory:function(){return new e(o.Lb(s.c),o.Lb(a.m))},token:e,providedIn:"root"}),e})()}}]);