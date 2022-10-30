(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[581],{99503:function(t,e,r){"use strict";r.r(e);var n=r(26042),i=r(69396),o=r(99534),a=r(85893),s=(r(67294),r(9008)),l=r.n(s),c=r(41664),u=r.n(c),h=r(85661),p=r(12599),d=r(70762),f=r.n(d);function v(t){var e=t.href,r=t.children,s=(0,o.Z)(t,["href","children"]);return(0,a.jsx)(u(),{href:e,children:(0,a.jsx)("a",(0,i.Z)((0,n.Z)({},s),{children:r}))})}e.default=function(t){var e=t.links;e.filter((function(t){return Boolean(t.url)})).forEach((function(t){if((0,h.Z)(t.url))throw new Error('Absolute URL passed to BreadcrumbBar: "'.concat(JSON.stringify(t),'". Please ensure all "link.url" values are relative links.'))}));var r=[{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:e.filter((function(t){return!!t.url})).map((function(t,e){return{"@type":"ListItem",position:e+1,name:t.title,item:"https://developer.hashicorp.com".concat(t.url)}}))}],n=JSON.stringify(r);return(0,a.jsxs)("nav",{"aria-label":"Breadcrumb",className:f().root,children:[(0,a.jsx)(l(),{children:(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:n}})}),(0,a.jsx)("ol",{className:f().listRoot,children:e.map((function(t){var e=t.title,r=t.url,n=t.isCurrentPage,i=e.replace(/<[^>]+>/g,""),o=r?v:"span";return(0,a.jsx)(p.default,{asElement:"li",className:f().listItem,size:100,weight:"medium",children:(0,a.jsx)(o,{className:f().breadcrumbText,href:r,"aria-current":n?"page":void 0,children:i})},"".concat(i,"_").concat(r))}))})]})}},34429:function(t,e,r){"use strict";var n=r(85893),i=r(67294),o=r(94184),a=r.n(o),s=r(51898),l=r(55749),c=r(24679),u=r.n(c);e.Z=function(t){var e=t.placeholder,r=void 0===e?"Filter":e,o=t.value,c=t.onChange,h=t.className,p=(0,i.useRef)(),d=o;return(0,n.jsxs)("div",{className:a()(u().filterInputContainer,h),children:[(0,n.jsx)(s.N,{className:u().filterIcon}),(0,n.jsx)("input",{className:u().filterInput,onChange:function(t){var e=t.target.value;c(e)},placeholder:r,ref:p,value:o,autoComplete:"off",autoCorrect:"off",autoCapitalize:"none",spellCheck:"false"}),d&&(0,n.jsx)("button",{"aria-label":"Clear filter",className:u().clearButton,onClick:function(){c(""),p.current.focus()},children:(0,n.jsx)(l.H,{className:u().clearIcon})})]})}},91136:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(85893),i=r(31230),o=r.n(i);function a(t){var e=t.children;return(0,n.jsx)("ul",{className:o().navList,children:e})}},90775:function(t,e,r){"use strict";r.d(e,{PO:function(){return o},Tl:function(){return a},_G:function(){return l},ti:function(){return m},Vz:function(){return _},ok:function(){return x}});var n=r(26042),i=r(69396),o=function(t,e){var r=!1;if(!e)return{foundActiveItem:r,itemsWithMetadata:[]};var a=e.map((function(e){var a=(0,n.Z)({},e);if(e.hasOwnProperty("title")){var s,l=e,c=null!==(s=l.badge)&&void 0!==s?s:function(t){var e=null,r=new RegExp(/<sup>(.*)<\/sup>$/),n=t.match(r);return n&&n.length>0&&(e={text:n[1],color:"neutral",type:"outlined"}),e}(l.title),u=c?l.title.replace("<sup>".concat(c.text,"</sup>"),"").trim():l.title;a=(0,i.Z)((0,n.Z)({},a),{badge:c,title:u})}if(e.hasOwnProperty("routes")){var h=o(t,e.routes),p=!r&&h.foundActiveItem;return r=p||r,(0,i.Z)((0,n.Z)({},a),{routes:h.itemsWithMetadata,hasActiveChild:p})}if(e.hasOwnProperty("fullPath")){var d=e.fullPath,f=!r&&d.replace(/\/$/,"")===t;return r=f||r,(0,i.Z)((0,n.Z)({},a),{isActive:f})}return a}));return{foundActiveItem:r,itemsWithMetadata:a}},a=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={text:"".concat(t.name," Home"),href:"/".concat(t.slug)},i={levelUpButtonText:"".concat(t.name," Home"),levelDownButtonText:"Previous"},o=e||[],a=!1,s=r?"Install ".concat(t.name," Enterprise"):"Install ".concat(t.name);return{backToLinkProps:n,levelButtonProps:i,menuItems:o,showFilterInput:a,title:s}},s=r(83797),l=function(t){var e=function(t){var e=(0,s.O)(t).map((function(t){return{title:t.label,fullPath:t.fullPath}})),r={title:"Documentation",fullPath:"/".concat(t.slug,"/docs")},n=[e.length>1?{title:"Documentation",isOpen:!0,routes:e}:r,{title:"Tutorials",fullPath:"/".concat(t.slug,"/tutorials")}];return"hcp"!==t.slug&&n.push({title:"Install",fullPath:"/".concat(t.slug,"/downloads")}),n}(t);return{levelButtonProps:{levelUpButtonText:"Main Menu",levelDownButtonText:"Previous"},menuItems:e,showFilterInput:!1,title:t.name}},c=r(29815),u=r(1685),h="https://github.com/hashicorp",p="https://www.hashicorp.com/customer-success",d={boundary:"https://discuss.hashicorp.com/c/boundary/50",consul:"https://discuss.hashicorp.com/c/consul/29",hcp:"https://discuss.hashicorp.com/c/hcp/54",nomad:"https://discuss.hashicorp.com/c/nomad/28",packer:"https://discuss.hashicorp.com/c/packer/23",sentinel:"https://discuss.hashicorp.com/c/sentinel/25",terraform:"https://discuss.hashicorp.com/c/terraform-core/27",vagrant:"https://discuss.hashicorp.com/c/vagrant/24",vault:"https://discuss.hashicorp.com/c/vault/30",waypoint:"https://discuss.hashicorp.com/c/waypoint/51"},f={boundary:"https://github.com/hashicorp/boundary",consul:"https://github.com/hashicorp/consul",hcp:h,nomad:"https://github.com/hashicorp/nomad",packer:"https://github.com/hashicorp/packer",sentinel:h,terraform:"https://github.com/hashicorp/terraform",vagrant:"https://github.com/hashicorp/vagrant",vault:"https://github.com/hashicorp/vault",waypoint:"https://github.com/hashicorp/waypoint"};function v(t){var e="/tutorials/library";return t?u.T2.includes(t)?"".concat(e,"/?product=").concat(t):u.LX.includes(t)?"".concat(e,"/?edition=").concat(t):e:e}var m=function(t){var e=function(t){if(t)try{return r(2967)("./".concat(t,"/additional-sidebar-resources.json"))}catch(e){return[]}return[]}(t);return[{heading:"Resources"},{title:"Tutorial Library",href:v(t)},{title:"Community Forum",href:t?d[t]:"https://discuss.hashicorp.com/"},{title:"Support",href:p},{title:"GitHub",href:t?f[t]:h}].concat((0,c.Z)(e))},b=r(25042),_=function(t){return{levelButtonProps:{levelDownButtonText:"".concat(t," Home")},menuItems:(0,b.A)(),showFilterInput:!1,title:"Main Menu"}},x=function(t,e){if(!e)return t;var r=[];return t.forEach((function(t){var o,a=t.hasOwnProperty("routes"),s=t.hasOwnProperty("path")||t.hasOwnProperty("href");if(!!(a||s))if(null===(o=t.title)||void 0===o?void 0:o.toLowerCase().includes(e.toLowerCase()))r.push((0,i.Z)((0,n.Z)({},t),{matchesFilter:!0}));else if(a){var l=x(t.routes,e),c=l.length>0;c&&r.push((0,i.Z)((0,n.Z)({},t),{hasChildrenMatchingFilter:c,routes:l}))}})),r}},24149:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return B}});var n=r(14924),i=r(85893),o=r(67294),a=r(94184),s=r.n(a),l=r(34893),c=r(84138),u=r(34429),h=r(337),p=r(23754),d=r(90775),f=r(91136),v=r(28695),m=r(47584),b=r(92316),_=r.n(b),x=function(t){var e=t.text,r=t.href;return(0,i.jsx)("div",{className:_().root,children:(0,i.jsx)(m.default,{href:r,icon:(0,i.jsx)(v.a,{className:_().icon}),iconPosition:"leading",text:e})})},g=r(38596),C=r(9337),j=r(67554),I=r.n(j),w=function(t){var e=t.className,r=t.icon,n=t.iconPosition,o=t.onClick,a=t.text;return(0,i.jsx)(C.default,{className:e,color:"tertiary",icon:r,iconPosition:n,onClick:o,text:a})},y=function(t){var e=t.onClick,r=t.text;return(0,i.jsx)(w,{className:I().levelUpButton,icon:(0,i.jsx)(v.a,{}),iconPosition:"leading",onClick:e,text:r})},N=function(t){var e=t.onClick,r=t.text;return(0,i.jsx)(w,{className:I().levelDownButton,icon:(0,i.jsx)(g.r,{}),iconPosition:"trailing",onClick:e,text:r})},k=function(t){var e,r,o=t.levelUpButtonText,a=t.levelDownButtonText,l=(0,h.c)(),c=l.hasManyLevels,u=l.isFirstLevel,p=l.isLastLevel,d=l.setCurrentLevel;c&&!u&&(e=(0,i.jsx)(y,{text:o,onClick:function(){return d((function(t){return t-1}))}})),c&&!p&&(r=(0,i.jsx)(N,{text:a,onClick:function(){return d((function(t){return t+1}))}}));var f=!e&&!!r;return(0,i.jsxs)("div",{className:s()(I().root,(0,n.Z)({},I().rightAlign,f)),children:[e,r]})},P=r(31230),T=r.n(P),L="sidebar-label",B=function(t){var e,r,a,v,m=t.backToLinkProps,b=t.children,_=t.levelButtonProps,g=t.menuItems,C=t.overviewItemHref,j=t.showFilterInput,I=void 0===j||j,w=t.title,y=t.visuallyHideTitle,N=void 0!==y&&y,P=(0,c.j2)(),B=(0,h.c)().shouldRenderMobileControls,O=(0,l.Z)({excludeHash:!0,excludeSearch:!0}),Z=(0,o.useState)(""),M=Z[0],E=Z[1],D=(0,o.useMemo)((function(){return(0,d.PO)(O,g)}),[O,g]).itemsWithMetadata;if(B&&_)e=(0,i.jsx)(k,{levelUpButtonText:_.levelUpButtonText,levelDownButtonText:_.levelDownButtonText});else if(m){var F=m.text,W=m.href;e=(0,i.jsx)("div",{className:T().backToLinkWrapper,children:(0,i.jsx)(x,{text:F,href:W})})}if(I&&(r=(0,i.jsx)("div",{className:s()(T().filterInputWrapper,(0,n.Z)({},T()["filterInputWrapper--mobile"],B)),children:(0,i.jsx)(u.Z,{value:M,onChange:E,placeholder:"Filter sidebar"})})),C&&!M&&(a=(0,i.jsx)(p.sd,{item:{href:C,title:"Overview",isActive:C===O}})),b)v=b;else{var A=(0,d.ok)(D,M);v=(0,i.jsx)(f.Z,{children:A.map((function(t,e){var r="".concat(t.id,"-").concat(e);return(0,i.jsx)(p.Rd,{item:t},r)}))})}return(0,i.jsxs)("div",{className:T().sidebar,children:[e,r,(0,i.jsxs)("nav",{"aria-labelledby":L,className:T().nav,children:[(0,i.jsx)("div",{className:N?"g-screen-reader-only":void 0,children:(0,i.jsx)(p.HS,{text:w,id:L})}),(0,i.jsx)(p.tH,{}),a,v,(0,i.jsx)(p.ny,{}),(0,i.jsx)(f.Z,{children:(0,d.ti)(null===P||void 0===P?void 0:P.slug).map((function(t,e){return(0,i.jsx)(p.Rd,{item:t},e)}))})]})]})}},337:function(t,e,r){"use strict";r.d(e,{c:function(){return l},n:function(){return s}});var n=r(85893),i=r(67294),o=r(84138),a=(0,i.createContext)(void 0);a.displayName="SidebarNavDataContext";var s=function(t){var e=t.children,r=t.navDataLevels,s=(0,o.Sn)(),l=s.mobileMenuIsOpen,c=s.setMobileMenuIsOpen,u=s.isMobileMenuRendered,h=r.length,p=(0,i.useState)(h-1),d=p[0],f=p[1];(0,i.useEffect)((function(){l||f(h-1)}),[l,r,h]);var v=h>1,m={currentLevel:d,hasManyLevels:v,isFirstLevel:0===d,isLastLevel:d===h-1,mobileMenuIsOpen:l,setCurrentLevel:f,setMobileMenuIsOpen:c,shouldRenderMobileControls:v&&u};return(0,n.jsx)(a.Provider,{value:m,children:e})},l=function(){var t=(0,i.useContext)(a);if(void 0===t)throw new Error("useSidebarNavData must be used within a SidebarNavDataProvider");return t}},1685:function(t,e,r){"use strict";r.d(e,{C6:function(){return s},LX:function(){return l},T2:function(){return c},U8:function(){return o},js:function(){return i},rP:function(){return a}});var n=r(67919),i="prod_LEARN",o=200,a=[{label:"Video",attribute:"hasVideo"},{label:"Interactive",attribute:"isInteractive"}],s=[{value:"open_source",label:"Open Source"},{value:"enterprise",label:"Enterprise"},{value:"tfc",label:"Terraform Cloud"},{value:"hcp",label:"HashiCorp Cloud Platform (HCP)"}],l=s.map((function(t){return t.value})),c=Object.keys(n.tC).filter((function(t){return!["hcp","sentinel"].includes(t)}))},70762:function(t){t.exports={root:"breadcrumb-bar_root__Z5aTO",listRoot:"breadcrumb-bar_listRoot__U6We_",listItem:"breadcrumb-bar_listItem__Ew2MO",breadcrumbText:"breadcrumb-bar_breadcrumbText__ftu3n g-focus-ring-from-box-shadow"}},24679:function(t){t.exports={sharedFlexCentering:"filter-input_sharedFlexCentering__T14iy",sharedIconColorAndPositioning:"filter-input_sharedIconColorAndPositioning__8WKNV",filterInputContainer:"filter-input_filterInputContainer__m9s0j",filterIcon:"filter-input_filterIcon__8CzS6 filter-input_sharedFlexCentering__T14iy filter-input_sharedIconColorAndPositioning__8WKNV",clearButton:"filter-input_clearButton__uX5HW filter-input_sharedFlexCentering__T14iy filter-input_sharedIconColorAndPositioning__8WKNV",clearIcon:"filter-input_clearIcon__95aN9 filter-input_sharedFlexCentering__T14iy",filterInput:"filter-input_filterInput__Qktl7 g-focus-ring-from-box-shadow"}},92316:function(t){t.exports={root:"sidebar-back-to-link_root__37rRr"}},67554:function(t){t.exports={root:"sidebar-mobile-controls_root__y9UQy",rightAlign:"sidebar-mobile-controls_rightAlign__I5_4D",levelUpButton:"sidebar-mobile-controls_levelUpButton__xtVT_",levelDownButton:"sidebar-mobile-controls_levelDownButton__hT37Z"}},31230:function(t){t.exports={sidebar:"sidebar_sidebar__eQGRJ",nav:"sidebar_nav__EFmKd",navList:"sidebar_navList__Je2sN",backToLinkWrapper:"sidebar_backToLinkWrapper__zbqbb",filterInputWrapper:"sidebar_filterInputWrapper__owoEI","filterInputWrapper--mobile":"sidebar_filterInputWrapper--mobile__euE4y"}},2967:function(t,e,r){var n={"./terraform/additional-sidebar-resources.json":62310};function i(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id=2967},62310:function(t){"use strict";t.exports=JSON.parse('[{"title":"Terraform Registry","href":"https://registry.terraform.io/"}]')}}]);