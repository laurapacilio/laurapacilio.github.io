(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1161],{94909:function(e,n,t){"use strict";t.d(n,{v:function(){return Z},Z:function(){return A}});var r=t(85893),s=t(67294),i=t(94184),a=t.n(i),o=t(23302),l=t(89019),c=t(11163),u=t(59624),d=t(10971),_=t(44481),f=t(84138),m=t(44748),h=t(9337),b=t(63319),p=t(41664),v=t.n(p),x=t(98634),g=t(85661),j=t(8140),N=t(12599),w=t(57562),C=t.n(w),L=function(e,n){var t=e.icon,s=e.label,i=e.href,a=e.onClick;if(!i&&!a)return null;var o,l=(0,g.Z)(i),c=l?"noreferrer noopener":void 0,u=l?"_blank":void 0,d=(0,r.jsx)(N.default,{asElement:"span",size:200,weight:"medium",children:s});return i?o=(0,r.jsx)(v(),{href:i,children:(0,r.jsxs)("a",{className:C().link,rel:c,target:u,children:[t,d]})}):a&&(o=(0,r.jsxs)("button",{className:C().button,onClick:a,children:[t,d]})),(0,r.jsx)("li",{children:o},n)},k=function(e){var n=e.items,t=e.user,s=e.initialOpen,i=(0,_.U)(t),a=i.icon,o=i.label,l=i.description;return(0,r.jsxs)(j.default,{containerClassName:C().root,initialOpen:s,children:[(0,r.jsxs)(j.DisclosureActivator,{className:C().activator,children:[(0,r.jsxs)("span",{className:C().iconAndTextWrapper,children:[(0,r.jsx)("span",{className:C().icon,children:a}),(0,r.jsx)(N.default,{asElement:"span",className:C().text,size:300,weight:"medium",children:l})]}),(0,r.jsx)("span",{className:C().chevron,children:(0,r.jsx)(x.g,{})})]}),(0,r.jsxs)(j.DisclosureContent,{className:C().content,children:[(0,r.jsx)(N.default,{asElement:"span",className:C().label,size:100,weight:"semibold",children:o}),(0,r.jsx)("ul",{className:C().list,children:n.map(L)})]})]})},I=t(1791),O=t.n(I),y={visible:{left:0,display:"flex"},hidden:{left:"-150vw",transitionEnd:{display:"none"}}},Z=function(){var e,n=(0,c.useRouter)().asPath,t=(0,m.Z)(),s=t.showAuthenticatedUI,i=t.showUnauthenticatedUI,a=t.signIn,o=t.signOut,l=t.user;return s||i?(i?e=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.default,{icon:(0,r.jsx)(u.d,{}),iconPosition:"trailing",onClick:function(){var e="/"===n;a(m.O,{callbackUrl:e?"/profile/bookmarks":n})},size:"medium",text:"Sign In"}),(0,r.jsx)(b.Z,{color:"secondary",href:"/sign-up",icon:(0,r.jsx)(d.b,{}),iconPosition:"trailing",size:"medium",text:"Sign Up"})]}):s&&(e=(0,r.jsx)(k,{items:(0,_.H)({signOut:o}),user:l,initialOpen:n.startsWith("/profile")})),(0,r.jsx)("div",{className:"g-show-with-mobile-menu",children:(0,r.jsx)("div",{className:O().mobileAuthenticationControls,children:e})})):null},A=(0,s.forwardRef)((function(e,n){var t=e.children,s=e.className,i=(0,f.Sn)().mobileMenuIsOpen,c=(0,o.J)();return(0,r.jsx)(l.m.div,{animate:i?"visible":"hidden",className:a()(O().root,s),ref:n,transition:{duration:c?0:.6},variants:y,children:t})}))},5344:function(e,n,t){"use strict";t.d(n,{H:function(){return r},V:function(){return s}});var r=/v\d+\.\d+\.(\d+|\w+)/i,s=/v[0-9]{6}-\d+/i},11871:function(e,n,t){"use strict";t.d(n,{Z:function(){return O}});var r=t(14924),s=t(85893),i=t(11163),a=t(94184),o=t.n(a),l=t(74533),c=t(48097),u=t(25042),d=t(29815),_=t(67294),f=t(19671),m=[25,50,75,90];function h(){(0,_.useEffect)((function(){if((0,f.Of)())return function(){var e=(0,d.Z)(m),n=document.documentElement.scrollHeight,t=window.innerHeight,r=0;function s(){0!==e.length?window.requestAnimationFrame((function(){var s=function(e,n){var t=window.scrollY+n;return Math.round(t/e*100)}(n,t);if(!(s<r))for(r=s;s>=e[0];){var i=e.shift();window.analytics.track("Page Scrolled",{percent:i})}})):window.removeEventListener("scroll",s)}return window.addEventListener("scroll",s,{passive:!0}),function(){return window.removeEventListener("scroll",s)}}()}),[])}var b=t(65455),p=t(13543),v=t(23322),x=t(94909),g=t(75578),j=t(23754),N=t(33197),w=t.n(N),C=(0,c.Z)({preset:"oss"}),L=C.ConsentManager,k=C.openConsentManager,I=function(){return(0,s.jsxs)(x.Z,{className:w().mobileMenuContainer,children:[(0,s.jsx)(x.v,{}),(0,s.jsxs)("ul",{className:w().mobileMenuNavList,children:[(0,s.jsx)(j.Rd,{item:{heading:"Main Menu"}}),(0,u.A)().map((function(e,n){return(0,s.jsx)(j.Rd,{item:e},n)}))]})]})},O=function(e){var n=e.children,t=e.showFooterTopBorder,a=void 0!==t&&t,c=(0,i.useRouter)();(0,l.ZP)({siteId:"ZFTCLDIZ",includedDomains:"developer.hashi-mktg.com developer.hashicorp.com"}),h();var u=["/","/_error"].includes(c.route);return(0,s.jsxs)(p.MY,{children:[(0,s.jsx)(b.Z,{children:(0,s.jsxs)("div",{className:w().root,"data-layout":"base-new",children:[(0,s.jsx)("div",{className:w().header,children:(0,s.jsx)(g.default,{})}),(0,s.jsxs)("div",{className:w().contentArea,children:[u?(0,s.jsx)(I,{}):null,n]}),(0,s.jsx)("div",{className:o()(w().footer,(0,r.Z)({},w().showFooterTopBorder,a)),children:(0,s.jsx)(v.default,{openConsentManager:k})})]})}),(0,s.jsx)(L,{})]})}},81161:function(e,n,t){"use strict";t.d(n,{Z:function(){return U}});var r=t(26042),s=t(85893),i=t(67294),a=t(33613),o=t(86218),l=t(86777),c="undefined"!==typeof document,u=t(6577);function d(){return c?(0,u.Z)("--navigation-header-height",{asNumber:!0,fallback:68}):68}var _=t(19586),f=t(34893),m=t(71297),h=t(84138),b=t(11871),p=t(14924),v=t(94184),x=t.n(v);var g=t(80407),j=t.n(g),N="table-of-contents-label";function w(e){var n=e.isActive,t=e.slug,r=e.title,a=e.index,o=x()(j().tableOfContentsListItem,(0,p.Z)({},j().activeTableOfContentsListItem,n)),l=(0,i.useMemo)((function(){return r.replace(/`/g,"")}),[r]);return(0,s.jsxs)("li",{className:o,children:[(0,s.jsx)("a",{className:j().tableOfContentsListItemAnchor,href:"#".concat(t),"data-heap-track":"toc-list-item-index-".concat(a),children:l}),n&&(0,s.jsx)("span",{"aria-hidden":!0,className:j().activeIndicator})]},t)}var C=function(e){var n=e.headings,t=(0,h.BV)().isDesktop,r=n.length<=1,a=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,i.useRef)(new Set),r=(0,i.useState)(),s=r[0],a=r[1],o=(0,i.useRef)(),l=(0,f.Z)({excludeHash:!0,excludeSearch:!0}),c=(0,h.j2)(),u=c&&l==="/".concat(c.slug);return(0,i.useEffect)((function(){if(t.current=new Set,n){var r=function(n){return e.findIndex((function(e){return e.slug===n}))},s=new IntersectionObserver((function(n){var s,i;n.forEach((function(e){s=window.scrollY,i=o.current<s?"down":"up";var n=e.target.id;e.isIntersecting?t.current.add(n):t.current.delete(n)}));var l,c,u=1===n.length&&!n[0].isIntersecting,d=u?r(n[0].target.id):-1;t.current.size>0?(t.current.forEach((function(e){var n=document.getElementById(e).getBoundingClientRect().bottom;(!c||n<l)&&(c=e,l=n)})),a(c)):o.current&&"up"===i&&a((function(n){var t=r(n);if(u&&d>t)return n;var s=t-1;return s<0?n:e[s].slug})),s&&(o.current=s)}),{rootMargin:"-".concat(d(),"px 0% -40% 0%"),threshold:u?0:1});return e.forEach((function(e){var n,t=null===(n=document.getElementById("main"))||void 0===n?void 0:n.querySelector("#".concat(CSS.escape(e.slug)));t&&s.observe(t)})),function(){s.disconnect()}}}),[e,n,u]),s}(n,!r&&t);return r?null:(0,s.jsxs)("nav",{"aria-labelledby":N,children:[(0,s.jsx)("p",{className:j().tableOfContentsLabel,id:N,children:"On this page"}),(0,s.jsx)("ol",{className:j().tableOfContentsList,children:n.map((function(e,n){return(0,s.jsx)(w,{isActive:e.slug===a,slug:e.slug,title:e.title,index:n},e.slug)}))})]})},L=t(99503),k=t(70453),I=t(3711),O=t.n(I);var y=function(e){var n=e.url,t=e.label,r=void 0===t?"Edit this page":t,i=e.className;return(0,s.jsxs)("a",{href:n,target:"_blank",className:x()(O().editLink,i),rel:"noreferrer",children:[(0,s.jsx)(k.P,{className:O().editLinkIcon}),r]})},Z=t(81079),A=t(94909),E=t(12599),M=t(32962),S=t.n(M),W=function(e){var n,t=e.className,r=e.type,i=void 0===r?"neutral":r,a=e.description,o=e.icon,l=e.title,c=x()(S().root,S()[i],t);return l&&(n=(0,s.jsx)(E.default,{asElement:"p",className:S().title,size:200,weight:"semibold",children:l})),(0,s.jsxs)("div",{className:c,children:[(0,s.jsx)("div",{className:S().icon,children:o}),(0,s.jsxs)("div",{className:S().contentContainer,children:[n,(0,s.jsx)(E.default,{asElement:"p",className:S().description,size:200,weight:"regular",children:a})]})]})},R=t(24149),F=t(337),H=t(89019),B=t(92322),T=t.n(B);function z(e){var n=e.progress,t=(0,i.useState)(!1),r=t[0],a=t[1];return(0,i.useEffect)((function(){return n.onChange((function(e){var n=1e3===Math.round(1e3*e);r!==n&&a(n)}))}),[r,n]),(0,s.jsx)("div",{className:x()(T().root,(0,p.Z)({},T().isComplete,r)),children:(0,s.jsx)(H.m.div,{className:T().progress,style:{scaleX:n}})})}var G=t(10677),P=t.n(G),D=function(e){var n=e.breadcrumbLinks,t=e.children,c=e.githubFileUrl,u=e.headings,b=e.AlternateSidebar,p=e.showScrollProgress,v=e.sidecarSlot,x=e.sidebarNavDataLevels,g=(e.versions,(0,h.Sn)()),j=g.isMobileMenuRendered,N=g.mobileMenuIsOpen,w=g.setMobileMenuIsOpen,k=(0,F.c)().currentLevel,I=(0,i.useRef)(),O=(0,f.Z)({excludeHash:!0,excludeSearch:!0}),E=(0,o.B)(O),M=x[k],S=!j||N,H=(0,i.useRef)(null),B=d(),T=(0,m.v)({target:H,offset:["".concat(-1*B,"px start"),"end end"]}).scrollYProgress;(0,_.Z)([I],(function(){return w(!1)}),j&&S);var G=null;G=b&&!(null===M||void 0===M?void 0:M.menuItems)?(0,s.jsx)(b,(0,r.Z)({},M)):(0,s.jsx)(R.default,(0,r.Z)({},M));var D=function(){return"undefined"!==typeof v?v:(0,s.jsx)(C,{headings:u.filter((function(e){return e.level<=2}))})};return(0,s.jsxs)("div",{className:P().root,children:[(0,s.jsx)(A.Z,{className:P().mobileMenuContainer,ref:I,children:(0,s.jsxs)("div",{className:P().sidebarContentWrapper,children:[(0,s.jsx)(A.v,{}),G]})}),(0,s.jsxs)("div",{className:P().contentWrapper,ref:H,children:[E&&(0,s.jsx)(W,{className:P().versionAlert,description:(0,s.jsxs)(s.Fragment,{children:["You are viewing documentation for version"," ",E,"."," ",(0,s.jsx)(Z.default,{className:P().versionAlertLink,href:(0,l.R)(O),textSize:200,textWeight:"medium",children:"View latest version"}),"."]}),icon:(0,s.jsx)(a.k,{}),type:"highlight"}),(0,s.jsxs)("div",{className:P().mainAreaWrapper,children:[(0,s.jsxs)("main",{id:"main",className:P().main,children:[(0,s.jsx)("span",{className:P().breadcrumbOptOutGroup,children:n&&(0,s.jsx)(L.default,{links:n})}),t,c&&(0,s.jsx)(y,{className:P().editOnGithubLink,url:c,label:"Edit this page on GitHub"})]}),(0,s.jsx)("div",{className:P().sidecarWrapper,children:(0,s.jsx)(D,{})})]}),p?(0,s.jsx)(z,{progress:T}):null]})]})},U=function(e){var n=e.sidebarNavDataLevels;return(0,s.jsx)(b.Z,{showFooterTopBorder:!0,children:(0,s.jsx)(F.n,{navDataLevels:n,children:(0,s.jsx)(D,(0,r.Z)({},e))})})}},86218:function(e,n,t){"use strict";t.d(n,{B:function(){return s}});var r=t(5344);function s(e){return e.replace(/^https?:\/\/[a-z-:0-9.]+/i,"").replace(/^\//i,"").split("/").find((function(e,n){return!(2!==n||!r.V.test(e))||!(2!==n&&3!==n||!r.H.test(e))}))}},86777:function(e,n,t){"use strict";t.d(n,{R:function(){return i}});var r=t(29815),s=t(5344);function i(e){var n=e.split("/"),t=n.findIndex((function(e){return s.H.test(e)||s.V.test(e)}));return t>-1?(0,r.Z)(n.slice(0,t)).concat((0,r.Z)(n.slice(t+1))).join("/"):e}},3711:function(e){e.exports={editLink:"edit-on-github-link_editLink__sIi03",editLinkIcon:"edit-on-github-link_editLinkIcon__FuB6t"}},57562:function(e){e.exports={root:"mobile-user-disclosure_root__aHFLz hds-surface-base",activator:"mobile-user-disclosure_activator__xj9DE g-focus-ring-from-box-shadow",chevron:"mobile-user-disclosure_chevron__LYtZY",iconAndTextWrapper:"mobile-user-disclosure_iconAndTextWrapper__5_boA",icon:"mobile-user-disclosure_icon__So56b",text:"mobile-user-disclosure_text__mRgNa",content:"mobile-user-disclosure_content__pHF4M",label:"mobile-user-disclosure_label__SB818",list:"mobile-user-disclosure_list__agZnv",button:"mobile-user-disclosure_button__U42Ch g-focus-ring-from-box-shadow",link:"mobile-user-disclosure_link__qK_H7 g-focus-ring-from-box-shadow"}},1791:function(e){e.exports={root:"mobile-menu-container_root__2_51o",mobileAuthenticationControls:"mobile-menu-container_mobileAuthenticationControls__HfhG1"}},32962:function(e){e.exports={root:"page-alert_root__xP2Vw",icon:"page-alert_icon__RPKvK",contentContainer:"page-alert_contentContainer__iClXE",title:"page-alert_title__YWqUw",description:"page-alert_description__Xnjjm",neutral:"page-alert_neutral__H_l3n",highlight:"page-alert_highlight__ApLx9",success:"page-alert_success__9ZIpj",warning:"page-alert_warning__o_ueG",critical:"page-alert_critical__exbgt"}},33197:function(e){e.exports={root:"base-new-layout_root___lg7a",header:"base-new-layout_header__fm91R",mobileMenuContainer:"base-new-layout_mobileMenuContainer__lE_6E",mobileMenuNavList:"base-new-layout_mobileMenuNavList___EbEu",contentArea:"base-new-layout_contentArea__y630n",footer:"base-new-layout_footer__LslqQ",showFooterTopBorder:"base-new-layout_showFooterTopBorder__svNbM"}},92322:function(e){e.exports={root:"scroll-progress-bar_root__jCKBi",isComplete:"scroll-progress-bar_isComplete__jX01k",progress:"scroll-progress-bar_progress__TcteE"}},80407:function(e){e.exports={tableOfContentsLabel:"table-of-contents_tableOfContentsLabel__NZOry",tableOfContentsList:"table-of-contents_tableOfContentsList__uSG1X",tableOfContentsListItem:"table-of-contents_tableOfContentsListItem__VpCs1",activeTableOfContentsListItem:"table-of-contents_activeTableOfContentsListItem__YlxM_",tableOfContentsListItemAnchor:"table-of-contents_tableOfContentsListItemAnchor__dh00Q g-focus-border-and-box-shadow-light",activeIndicator:"table-of-contents_activeIndicator__GZD1V"}},10677:function(e){e.exports={root:"sidebar-sidecar-layout_root__8s1Nl",mobileMenuContainer:"sidebar-sidecar-layout_mobileMenuContainer__VsFd2",sidebarContentWrapper:"sidebar-sidecar-layout_sidebarContentWrapper__Q5ntu",contentWrapper:"sidebar-sidecar-layout_contentWrapper__FtPII",main:"sidebar-sidecar-layout_main__S864v",editOnGithubLink:"sidebar-sidecar-layout_editOnGithubLink__c3Hzw",mainAreaWrapper:"sidebar-sidecar-layout_mainAreaWrapper__rTIEe",breadcrumbOptOutGroup:"sidebar-sidecar-layout_breadcrumbOptOutGroup__RMzZc",sidecarWrapper:"sidebar-sidecar-layout_sidecarWrapper__bQlIN",versionAlert:"sidebar-sidecar-layout_versionAlert__ldZt_",versionAlertLink:"sidebar-sidecar-layout_versionAlertLink__kyW2X"}}}]);