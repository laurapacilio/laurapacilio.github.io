(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7932],{38688:function(e,t,n){"use strict";n.d(t,{R:function(){return s}});var r=n(98854),a=n(86340);function s(e){return{id:e.id,dbSlug:e.slug,description:e.description,heading:e.name,productsUsed:i(e),tutorialCount:e.tutorials.length,url:(0,r.I_)(e.slug)}}function i(e){var t=e.theme;return(0,a.ig)(t)?[t]:[]}},60455:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(74542),s=n(9416);t.default=function(e){var t=e.productSlug,n=e.className;return(0,r.jsx)(a.default,{size:"extra-large",brandColor:"hcp"==t?"neutral-dark":t,className:n,children:(0,r.jsx)(s.default,{productSlug:t})})}},74542:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(94184),s=n.n(a),i=n(62291),o=n.n(i);t.default=function(e){var t=e.children,n=e.size,a=void 0===n?"medium":n,i=e.brandColor,l=void 0===i?"neutral":i,c=e.className;return(0,r.jsx)("span",{className:s()(o().root,o()["size-".concat(a)],o()["color-".concat(l)],c),children:t})}},67441:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(83793),s=n(77492),i=n(81806);t.default=function(e){var t=e.ariaLabel,n=e.href,o=e.onClick;return(0,r.jsx)(i.Z,{ariaLabel:t,download:!0,href:n,size16Icon:(0,r.jsx)(a.J,{}),size24Icon:(0,r.jsx)(s.l,{}),iconPosition:"trailing",onClick:o,text:"Download"})}},81806:function(e,t,n){"use strict";var r=n(26042),a=n(69396),s=n(99534),i=n(85893),o=n(47584),l=n(23673),c=n.n(l);t.Z=function(e){var t=e.size16Icon,n=e.size24Icon,l=e.text,d=(0,s.Z)(e,["size16Icon","size24Icon","text"]);return(0,i.jsx)(o.default,(0,a.Z)((0,r.Z)({},d),{icon:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:c().notMobileIcon,children:t}),(0,i.jsx)("span",{className:c().mobileIcon,children:n})]}),text:l,textClassName:c().text}))}},1762:function(e,t,n){"use strict";n.d(t,{Z:function(){return xe}});var r=n(26042),a=n(85893),s=n(67294),i=n(12851),o=n(84138),l=n(81161),c=n(90775),d=n(47568),u=n(69396),h=n(20414),f=(n(63657),n(57559),n(76397),n(80859)),g=n(38688),p=n(80145),m={Mac:"darwin",Win:"windows",Linux:"linux"};(function(){var e=(0,d.Z)((function(e){var t;return(0,h.__generator)(this,(function(n){switch(n.label){case 0:return[4,(0,f.d)(e)];case 1:return t=n.sent(),[2,e.map((function(e){return(0,g.R)(t[e])}))]}}))}))})(),function(){var e=(0,d.Z)((function(e){var t,n,a;return(0,h.__generator)(this,(function(s){switch(s.label){case 0:return t=function(e){var t=e.split("/");return 3===t.length?{productSlug:t[0],collectionSlug:t[1],tutorialSlug:t[2]}:2===t.length?{productSlug:t[0],tutorialSlug:t[1]}:void console.error("Found string `featuredTutorialsSlugs` width incorrect number of slash-separated parts:",e)},n=e.map((function(e){var n=t(e),r=n.productSlug,a=n.tutorialSlug;return"".concat(r,"/").concat(a)})),[4,(0,f.F)(n)];case 1:return a=s.sent(),[2,e.map((function(e){var n,s=t(e),i=s.productSlug,o=s.collectionSlug,l=s.tutorialSlug,c=a["".concat(i,"/").concat(l)],d=c.collectionCtx.default,h=(0,u.Z)((0,r.Z)({},c),{defaultContext:d}),f=c.collectionCtx.default;c.collectionCtx.default.slug!=o&&(f=null===(n=c.collectionCtx.featuredIn)||void 0===n?void 0:n.find((function(e){return e.slug==o})));var g=(0,p.OW)(h,f);return(0,r.Z)({type:"tutorial"},g)}))]}}))}))}();var x=(0,s.createContext)(void 0);x.displayName="CurrentVersionContext";var _=function(e){var t=e.children,n=e.initialValue,r=e.latestVersion,i=(0,s.useState)(n),o=i[0],l={currentVersion:o,isLatestVersion:o===r,latestVersion:r,setCurrentVersion:i[1]};return(0,a.jsx)(x.Provider,{value:l,children:t})},v=function(){var e=(0,s.useContext)(x);if(void 0===e)throw new Error("useCurrentVersion must be used within a CurrentVersionProvider");return e},j=n(94184),b=n.n(j),w=n(39626),N=n(23826),C=n(11023),L=n(38110),k=n(13896),S=n(19671),y=n(1666),z=n(67441),T=n(51477),I=n(81079),V=n(81806),Z=n(56922),O=n(12599),A=n(89146),H=n(9416),M=n(20208),D=n.n(M),E=function(e){for(var t=e.initialValue,n=e.onChange,r=e.options,i=(0,o.j2)(),l=r[0].value,c=0;c<r.length;c++){var d=r[c].label,u=r[c].value;if(d.indexOf("(latest)")>=0){l=u;break}}var h=(0,s.useState)(t||l),f=h[0],g=h[1],p="sentinel"===i.slug?"hcp":i.slug;return(0,a.jsxs)("div",{className:D().root,children:[(0,a.jsx)("span",{className:D().productIcon,children:(0,a.jsx)(H.default,{productSlug:p})}),(0,a.jsx)("select",{"aria-label":"Choose a different version to install",className:D().select,onChange:function(e){g(e.target.value),n&&n(e)},value:f,children:r.map((function(e){return(0,a.jsx)("option",{"aria-label":"".concat(i.name," ").concat(e.label),className:D().option,value:e.value,children:e.label},e.value)}))}),(0,a.jsx)("span",{className:D().trailingIcon,children:(0,a.jsx)(A.W,{})})]})},F=function(e){return function(e){var t=e.builds.reduce((function(e,t){return e[t.os]||(e[t.os]={}),e[t.os][t.arch]=t.url,e}),{}),n=Object.keys(t),r=Object.keys(m).map((function(e){return m[e]})).concat(n).filter((function(e,t,r){return r.indexOf(e)==t&&n.indexOf(e)>-1}));return n.sort((function(e,t){return r.indexOf(e)-r.indexOf(t)})).reduce((function(e,n){return e[n]=t[n],e}),{})}(e)},B=n(84811),P=n.n(B),G={className:P().subHeading,level:3,size:200,weight:"semibold"},R=function(e){var t=e.packageManagers,n=e.prettyOSName,s=1===(null===t||void 0===t?void 0:t.length),i=(null===t||void 0===t?void 0:t.length)>1;return s||i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(T.default,(0,u.Z)((0,r.Z)({},G),{id:"package-manager-for-".concat(n),children:["Package manager for ",n]})),s&&(0,a.jsx)(L.Z,{code:t[0].installCodeHtml,language:"shell-session",options:{showClipboard:!0}}),i&&(0,a.jsx)(k.Z,{tabs:t.map((function(e){return e.label})),children:t.map((function(e){var t=e.label,n=e.installCodeHtml;return(0,a.jsx)(L.Z,{code:n,language:"shell-session",options:{showClipboard:!0}},t)}))})]}):null},J=function(e){var t=e.downloadsByOS,n=e.os,s=e.prettyOSName,i=e.selectedRelease,o=i.name,l=i.version;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(T.default,(0,u.Z)((0,r.Z)({},G),{id:"binary-download-for-".concat(s),children:["Binary download for ",s]})),Object.keys(t[n]).map((function(e){return(0,a.jsxs)(y.default,{className:P().textAndLinkCard,elevation:"base",children:[(0,a.jsxs)("div",{className:P().textAndLinkCardTextContainer,children:[(0,a.jsx)(O.default,{className:P().textAndLinkCardLabel,size:200,weight:"semibold",children:e.toUpperCase()}),(0,a.jsxs)(O.default,{className:P().textAndLinkCardVersionLabel,size:200,weight:"regular",children:["Version: ",l]})]}),(0,a.jsx)(z.default,{ariaLabel:"download ".concat(o," version ").concat(l," for ").concat(s,", architecture ").concat(e),href:t[n][e],onClick:function(){(0,S.OQ)({productSlug:o,version:l,prettyOSName:s,architecture:e})}})]},e)}))]})},W=function(e){var t=e.selectedRelease,n=t.name,s=t.version;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(T.default,(0,u.Z)((0,r.Z)({},G),{id:"release-information",children:"Release information"})),(0,a.jsxs)(y.default,{className:P().textAndLinkCard,elevation:"base",children:[(0,a.jsxs)("div",{className:P().textAndLinkCardTextContainer,children:[(0,a.jsx)(O.default,{className:P().textAndLinkCardLabel,size:200,weight:"semibold",children:"Changelog"}),(0,a.jsxs)(O.default,{className:P().textAndLinkCardVersionLabel,size:200,weight:"regular",children:["Version: ",s]})]}),(0,a.jsx)(V.Z,{ariaLabel:"".concat(n," version ").concat(s," changelog"),href:"https://github.com/hashicorp/".concat(n,"/blob/v").concat(s,"/CHANGELOG.md"),size16Icon:(0,a.jsx)(w.g,{}),size24Icon:(0,a.jsx)(N.B,{}),iconPosition:"trailing",openInNewTab:!0,text:"GitHub"})]})]})},K=function(e){var t=e.selectedRelease,n=(0,o.j2)(),s=t.name,i=t.shasums,l=t.shasums_signature,c=t.version;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(T.default,(0,u.Z)((0,r.Z)({},G),{className:b()(G.className,P().specialSubHeading),id:"notes",children:"Notes"})),(0,a.jsxs)(O.default,{size:200,children:["You can find the"," ",(0,a.jsxs)(I.default,{href:"https://releases.hashicorp.com/".concat(s,"/").concat(c,"/").concat(i),textSize:200,children:["SHA256 checksums for ",n.name," ",c]})," ","online and you can"," ",(0,a.jsx)(I.default,{href:"https://releases.hashicorp.com/".concat(s,"/").concat(c,"/").concat(l),textSize:200,children:"verify the checksums signature file"})," ","which has been signed using"," ",(0,a.jsx)(I.default,{href:"https://www.hashicorp.com/security",textSize:200,children:"HashiCorp's GPG key"}),"."]})]})},U=function(){return(0,a.jsxs)("div",{className:P().enterpriseLegalNotice,children:[(0,a.jsx)(C.w,{className:P().enterpriseLegalNoticeIcon}),(0,a.jsxs)("div",{children:[(0,a.jsx)(O.default,{asElement:"p",className:P().enterpriseLegalNoticeTitle,size:200,weight:"semibold",children:"Terms of use"}),(0,a.jsx)(O.default,{asElement:"p",className:P().enterpriseLegalNoticeText,size:200,weight:"regular",children:"The following shall apply unless your organization has a separately signed Enterprise License Agreement or Evaluation Agreement governing your use of the package: Enterprise packages in this repository are subject to the license terms located in the package. Please read the license terms prior to using the package. Your installation and use of the package constitutes your acceptance of these terms. If you do not accept the terms, do not use the package."})]})]})},Q=function(e){var t=e.isEnterpriseMode,n=void 0!==t&&t,r=e.packageManagers,i=e.selectedRelease,o=e.versionSwitcherOptions,l=v(),c=l.isLatestVersion,d=l.setCurrentVersion,u=(0,s.useMemo)((function(){return F(i)}),[i]),h=(0,s.useMemo)((function(){return function(e){var t={};return e.forEach((function(e){var n=e.os;t[n]?t[n].push(e):t[n]=[e]})),t}(r)}),[r]);return(0,a.jsx)("div",{className:P().root,children:(0,a.jsxs)(y.default,{elevation:"base",children:[(0,a.jsxs)("div",{className:P().cardHeader,children:[(0,a.jsx)("div",{className:P().versionSwitcherWrapper,children:(0,a.jsx)(E,{onChange:function(e){return d(e.target.value)},options:o})}),(0,a.jsx)(T.default,{className:P().operatingSystemTitle,level:2,size:300,id:"operating-system",weight:"bold",children:"Operating System"})]}),(0,a.jsx)(Z.default,{showAnchorLine:!0,children:Object.keys(u).map((function(e){var t=h[e],r=function(e){switch(e){case"darwin":return"macOS";case"freebsd":return"FreeBSD";case"openbsd":return"OpenBSD";case"netbsd":return"NetBSD";case"archlinux":return"Arch Linux";case"linux":return"Linux";case"windows":return"Windows";default:return e.charAt(0).toUpperCase()+e.slice(1)}}(e);return(0,a.jsx)(Z.Tab,{heading:r,children:(0,a.jsxs)("div",{className:P().tabContent,children:[c&&(0,a.jsx)(R,{packageManagers:t,prettyOSName:r}),(0,a.jsx)(J,{downloadsByOS:u,os:e,prettyOSName:r,selectedRelease:i}),(0,a.jsx)(W,{selectedRelease:i}),(0,a.jsx)(K,{selectedRelease:i}),n?(0,a.jsx)(U,{}):null]})},e)}))})]})})},X=n(59924),Y=n.n(X),q=n(75956),$=n(69769),ee=function(e){var t=e.cards,n=void 0===t?[]:t,s=e.cardType,i=void 0===s?"tutorial":s;return n.length<=0?null:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(T.default,{className:Y().heading2,id:"featured-tutorials",level:2,size:300,weight:"bold",children:"tutorial"===i?"Featured Tutorials":"Featured Collections"}),"tutorial"===i?(0,a.jsx)(q.TutorialCardsGridList,{tutorials:n}):(0,a.jsx)(q.default,{children:n.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)($.CollectionCardWithAuthElements,(0,r.Z)({},e))},e.id)}))})]})},te=n(80945),ne=n(58094),re=n.n(ne),ae=function(){return(0,a.jsxs)("div",{className:re().root,children:[(0,a.jsx)(T.default,{className:Y().heading2,level:2,size:300,id:"looking-for-more",weight:"bold",children:"Looking for more?"}),(0,a.jsxs)(te.default,{ariaLabel:"Official releases",href:"https://www.hashicorp.com/official-release-channels",children:[(0,a.jsx)(O.default,{className:re().cardTitle,size:300,weight:"semibold",children:"Official releases"}),(0,a.jsx)(O.default,{className:re().cardBody,size:200,children:"All officially supported HashiCorp release channels and their security guarantees."})]})]})},se=n(60455),ie=n(82965),oe=n.n(ie),le=function(e){var t=e.isEnterpriseMode,n=void 0!==t&&t,r=e.product,s=v(),i=s.currentVersion,o=s.isLatestVersion,l=n?"".concat(r.name," Enterprise Installation"):"Install ".concat(r.name),c=n?"":function(e){var t=e.productName,n=e.version,r=e.isLatestVersion,a="v".concat(n).concat(r?" (latest version)":"");return"Install or update to ".concat(a," of ").concat(t," to get started.")}({productName:r.name,version:i,isLatestVersion:o}),d="sentinel"===r.slug?"hcp":r.slug;return(0,a.jsxs)("div",{className:oe().root,children:[(0,a.jsx)(se.default,{className:oe().iconTileLogo,productSlug:d}),(0,a.jsxs)("div",{children:[(0,a.jsx)(T.default,{className:oe().pageHeaderTitle,level:1,size:500,id:"install-".concat(r.slug),weight:"bold",children:l}),(0,a.jsx)(O.default,{className:oe().pageHeaderSubtitle,size:300,weight:"regular",children:c})]})]})},ce=n(41664),de=n.n(ce),ue=n(31304),he=n.n(ue),fe=n(75532),ge=n.n(fe),pe=function(e){var t=e.title,n=e.subtitle,r=e.featuredDocsLinks;return(0,a.jsxs)(y.default,{elevation:"base",children:[(0,a.jsx)(O.default,{className:ge().cardTitle,size:300,weight:"semibold",children:t}),(0,a.jsx)(O.default,{className:ge().cardSubtitle,size:200,weight:"regular",children:n}),(0,a.jsx)(O.default,{className:ge().featuredDocsLabel,size:200,weight:"semibold",children:"Featured docs"}),(0,a.jsx)("ul",{className:ge().featuredDocsLinksList,children:r.map((function(e){var t=e.href,n=e.text;return(0,a.jsx)(O.default,{className:ge().featuredDocsListItem,asElement:"li",size:200,weight:"regular",children:(0,a.jsx)(de(),{href:t,children:(0,a.jsx)("a",{className:ge().featuredDocsLink,children:n})})},he()(n))}))})]})},me=function(e){var t=e.isEnterpriseMode,n=void 0!==t&&t,d=e.merchandisingSlot,u=e.pageContent,h=e.releases,f=e.versionSwitcherOptions,g=e.packageManagers,p=u.featuredCollectionCards,m=u.featuredTutorialCards,x=u.sidecarMarketingCard,_=u.sidebarMenuItems,j=u.installName,b=(0,o.j2)(),w=v().currentVersion,N=(0,s.useMemo)((function(){return function(e,t,n){return[{title:"Developer",url:"/"},{title:e.name,url:"/".concat(e.slug)},{isCurrentPage:!0,title:n?"Install ".concat(e.name," Enterprise"):"Install v".concat(t),url:"/".concat(e.slug,n?"/downloads/enterprise":"/downloads")}]}(b,w,n)}),[b,w,n]),C=[(0,c.Vz)(b.name),(0,c._G)(b),(0,c.Tl)(b,_,n)];return(0,a.jsxs)(l.Z,{sidebarNavDataLevels:C,breadcrumbLinks:N,sidecarSlot:(0,a.jsx)(pe,(0,r.Z)({},x)),children:[n?(0,a.jsx)(i.Z,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"},"robots")}):null,(0,a.jsx)(le,{isEnterpriseMode:n,product:{name:j||b.name,slug:b.slug}}),(0,a.jsx)(Q,{isEnterpriseMode:n,packageManagers:g,selectedRelease:h.versions[w],versionSwitcherOptions:f}),d,(0,a.jsx)(ae,{}),(0,a.jsx)(ee,{cards:p,cardType:"collection"}),(0,a.jsx)(ee,{cards:m,cardType:"tutorial"})]})},xe=function(e){var t=e.isEnterpriseMode,n=void 0!==t&&t,r=e.latestVersion,i=e.merchandisingSlot,o=e.pageContent,l=e.releases,c=e.sortedAndFilteredVersions,d=e.packageManagers,u=(0,s.useMemo)((function(){return function(e){var t=e.latestVersion;return e.releaseVersions.map((function(e){var n=e.version,r=n===t;return{label:"".concat(n).concat(r?" (latest)":""),value:n}}))}({latestVersion:r,releaseVersions:c})}),[r,c]);return(0,a.jsx)(_,{initialValue:r,latestVersion:r,children:(0,a.jsx)(me,{isEnterpriseMode:n,merchandisingSlot:i,pageContent:o,releases:l,versionSwitcherOptions:u,packageManagers:d})})}},80859:function(e,t,n){"use strict";n.d(t,{d:function(){return x},F:function(){return p}});var r=n(47568),a=n(14924),s=n(20414),i=n(70100),o=n(1864),l=n.n(o),c=n(91385),d=n(21083),u=n(12812);var h="/tutorials";function f(e,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)((function(e,t){var n,r,a;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return n=(0,d.iy)(e,t),r=l().join(h,n),[4,(0,c.U2)(r)];case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3];case 2:return[2,s.sent().result.map(u.ri)];case 3:return[4,(0,c.KC)(a)];case 4:throw s.sent()}}))}))).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)((function(e){var t,n;return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return[4,f(e,!1)];case 1:return t=r.sent(),n={},[2,t.reduce((function(e,t){return Object.assign(e,(0,a.Z)({},t.slug,t))}),n)]}}))}))).apply(this,arguments)}function x(e){return _.apply(this,arguments)}function _(){return _=(0,r.Z)((function(e){var t,n,r;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return[4,(0,i.bG)(e)];case 1:return t=s.sent(),r={},n=t.reduce((function(e,t){return Object.assign(e,(0,a.Z)({},t.slug,t))}),r),[2,n]}}))})),_.apply(this,arguments)}},62291:function(e){e.exports={root:"icon-tile_root__VcaKq","size-small":"icon-tile_size-small__HVzI8","size-medium":"icon-tile_size-medium__vptri","size-large":"icon-tile_size-large__pgQmk","size-extra-large":"icon-tile_size-extra-large__b_Ex3","color-neutral":"icon-tile_color-neutral__Lq1vl","color-neutral-dark":"icon-tile_color-neutral-dark__HfjXx","color-boundary":"icon-tile_color-boundary__vNS4T","color-consul":"icon-tile_color-consul__JCxDC","color-nomad":"icon-tile_color-nomad__3BT9_","color-packer":"icon-tile_color-packer__7zIDY","color-terraform":"icon-tile_color-terraform__DKznJ","color-vagrant":"icon-tile_color-vagrant__cOT22","color-vault":"icon-tile_color-vault__V9XCE","color-waypoint":"icon-tile_color-waypoint__9bZTt"}},23673:function(e){e.exports={notMobileIcon:"mobile-standalone-link_notMobileIcon__UJ92y",mobileIcon:"mobile-standalone-link_mobileIcon__2CcJM",text:"mobile-standalone-link_text__qP8J4"}},20208:function(e){e.exports={root:"version-context-switcher_root__DmKhm",productIcon:"version-context-switcher_productIcon__gQNmM",trailingIcon:"version-context-switcher_trailingIcon__HotBe",select:"version-context-switcher_select__BjweE g-focus-ring-from-box-shadow hds-surface-low",option:"version-context-switcher_option__A9evF hds-typography-body-200"}},84811:function(e){e.exports={root:"downloads-section_root__I5Jri",cardHeader:"downloads-section_cardHeader__opIXs",versionSwitcherWrapper:"downloads-section_versionSwitcherWrapper__15u3K",operatingSystemTitle:"downloads-section_operatingSystemTitle__KYez5",tabContent:"downloads-section_tabContent__NwBtj",subHeading:"downloads-section_subHeading__zpvGQ",specialSubHeading:"downloads-section_specialSubHeading__GJnsH",textAndLinkCard:"downloads-section_textAndLinkCard__pmCGx",textAndLinkCardTextContainer:"downloads-section_textAndLinkCardTextContainer__xD_0t",textAndLinkCardLabel:"downloads-section_textAndLinkCardLabel__HljZ9",textAndLinkCardVersionLabel:"downloads-section_textAndLinkCardVersionLabel__PD1jL",enterpriseLegalNotice:"downloads-section_enterpriseLegalNotice__6noH4",enterpriseLegalNoticeIcon:"downloads-section_enterpriseLegalNoticeIcon__kz5I1",enterpriseLegalNoticeTitle:"downloads-section_enterpriseLegalNoticeTitle__jE4O2",enterpriseLegalNoticeText:"downloads-section_enterpriseLegalNoticeText__NN68u"}},58094:function(e){e.exports={root:"official-releases-section_root__2N1HS",cardTitle:"official-releases-section_cardTitle__mLZJy",cardBody:"official-releases-section_cardBody__GuPPB"}},82965:function(e){e.exports={root:"page-header_root__FAAbV",iconTileLogo:"page-header_iconTileLogo__MVX0r",pageHeaderTitle:"page-header_pageHeaderTitle__ecl8x",pageHeaderSubtitle:"page-header_pageHeaderSubtitle__sOaNC"}},75532:function(e){e.exports={cardTitle:"sidecar-marketing-card_cardTitle__7_wnj",cardSubtitle:"sidecar-marketing-card_cardSubtitle__9PgG2",featuredDocsLabel:"sidecar-marketing-card_featuredDocsLabel__NNfrT",featuredDocsLinksList:"sidecar-marketing-card_featuredDocsLinksList__Zdosj",featuredDocsListItem:"sidecar-marketing-card_featuredDocsListItem___6mw0",featuredDocsLink:"sidecar-marketing-card_featuredDocsLink__Cokkk"}},59924:function(e){e.exports={heading2:"product-downloads-view_heading2__DP6st hds-typography-display-300 hds-font-weight-bold"}}}]);