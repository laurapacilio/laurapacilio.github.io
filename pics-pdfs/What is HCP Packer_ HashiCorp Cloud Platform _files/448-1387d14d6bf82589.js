(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[448],{70247:function(e,t,n){"use strict";var i=n(85893),a=n(94184),r=n.n(a),o=n(89349),l=n.n(o);t.Z=function(e){var t=e.className,n=e.children;return(0,i.jsx)("div",{className:r()(l().root,t),children:n})}},20947:function(e,t,n){"use strict";n.d(t,{nu:function(){return U},N2:function(){return d},NM:function(){return y},e2:function(){return j},Uw:function(){return N},RC:function(){return k},xh:function(){return Z},Je:function(){return C},yf:function(){return Y},l2:function(){return T},P8:function(){return P},im:function(){return A},mn:function(){return z.Tab},pf:function(){return J},Nk:function(){return M},u$:function(){return S}});var i=n(26042),a=n(69396),r=n(99534),o=n(85893),l=n(94184),s=n.n(l),c=n(91835),u=n.n(c);function d(e){var t=e.className,n=(0,r.Z)(e,["className"]);return(0,o.jsx)("blockquote",(0,a.Z)((0,i.Z)({},n),{className:s()(u().blockquote,t)}))}var h=n(67294),f=n(51477),m=n(35249),g=n(63096),p=n.n(g);function x(e){var t=e.className,n=e.level,i=e.href,a=e["aria-label"];return(0,o.jsx)("a",{className:s()(p().root,t,p()["h".concat(n)]),"aria-label":a,href:i,children:(0,o.jsx)(m.j,{className:p().icon})})}var _=n(42365),v=n.n(_),b={1:{size:500,weight:"bold"},2:{size:400,weight:"bold"},3:{size:300,weight:"bold"},4:{size:200,weight:"semibold"},5:{size:200,weight:"semibold"},6:{size:200,weight:"semibold"}};function w(e){var t=s()(v().heading,v()["h".concat(e)]),n=b[e],l=n.size,c=n.weight;return function(n){var s=n.children,u=(0,r.Z)(n,["children"]);return(0,o.jsx)(f.default,(0,a.Z)((0,i.Z)({},u),{level:e,className:t,size:l,weight:c,children:h.Children.map(s,(function(t){var n;return"__permalink-h"===(null===t||void 0===t||null===(n=t.props)||void 0===n?void 0:n.className)&&1!==e?(0,o.jsx)(x,(0,a.Z)((0,i.Z)({},t.props),{level:e})):t}))}))}}var y=w(1),j=w(2),N=w(3),k=w(4),Z=w(5),C=w(6),I=n(57133),W=n.n(I);function P(e){var t=e.children;return(0,o.jsx)("ol",{className:W().listRoot,children:t})}function S(e){var t=e.children;return(0,o.jsx)("ul",{className:W().listRoot,children:t})}function T(e){var t=e.children;return(0,o.jsx)("li",{className:W().listItem,children:t})}var z=n(56922),L=n(87180),B=n.n(L);function M(e){var t=e.children;return(0,o.jsx)("div",{className:B().tabsWrapper,children:(0,o.jsx)(z.default,{allowNestedStyles:!0,children:t})})}var E=n(4923),R=n.n(E);function J(e){return(0,o.jsx)("div",{className:R().tableWrapper,children:(0,o.jsx)("table",(0,i.Z)({},e))})}var O=n(81079),G=n(89444),H=n.n(G);function U(e){var t=e.children,n=e.className,l=e.href,c=(0,r.Z)(e,["children","className","href"]);if("string"===typeof t&&"\xbb"==t)return(0,o.jsx)("a",(0,a.Z)((0,i.Z)({},c),{className:s()(n,H().hiddenPermalink),href:l,children:t}));var u=l||"#";return(0,o.jsx)(O.default,(0,a.Z)((0,i.Z)({},c),{className:n,href:u,textWeight:"medium",children:t}))}var q=n(12599),Q=n(60159),V=n.n(Q);function A(e){return(0,o.jsx)(q.default,(0,a.Z)((0,i.Z)({},e),{className:V().p}))}var F=n(79289),X=n.n(F);function Y(e){var t=e.className,n=(0,r.Z)(e,["className"]);return(0,o.jsx)("code",(0,a.Z)((0,i.Z)({},n),{className:s()(X().inlineCode,t)}))}n(42204)},42204:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var i=n(85893),a=n(25675),r=n.n(a),o=n(33643),l=n(12599),s=n(47584),c=n(67919),u=n(29220),d=n.n(u),h=n(9079),f=n.n(h),m=n(42298),g=n.n(m),p=n(77202),x=n.n(p),_=n(72690),v=n.n(_),b={applications:["waypoint"],infrastructure:["packer"],networking:["consul"],security:["boundary","vault"]},w={applications:{gradient:"--wpl-gradient-applications-horizontal",image:d()},infrastructure:{gradient:"--wpl-gradient-infrastructure-horizontal",image:f()},networking:{gradient:"--wpl-gradient-networking-horizontal",image:g()},security:{gradient:"--wpl-gradient-security-horizontal",image:x()}};function y(e){var t=e.product,n=c.tC[t],a=Object.keys(b).find((function(e){return b[e].includes(t)})),u=w[a],d=u.gradient,h=u.image;return(0,i.jsxs)("div",{className:v().root,style:{"--gradient":"var(".concat(d,")")},children:[(0,i.jsxs)("div",{className:v().textContainer,children:[(0,i.jsxs)(l.default,{asElement:"p",weight:"bold",color:"var(--white)",className:v().heading,children:["Looking for ",(0,i.jsx)("span",{className:v().solutionGradient,children:n})," ","fundamentals?"]}),(0,i.jsxs)(l.default,{asElement:"p",size:200,color:"var(--white)",className:v().subHeading,children:["Read core ",n," documentation and tutorials, including self-hosted open source docs."]}),(0,i.jsx)(s.default,{text:"Go to ".concat(n),href:"/".concat(t,"/docs"),icon:(0,i.jsx)(o.k,{color:"var(--white)",className:v().ctaIcon}),iconPosition:"trailing",className:v().ctaWrapper})]}),(0,i.jsx)("div",{className:v().solutionPattern,children:(0,i.jsx)(r(),{src:h,alt:"",layout:"fill",objectFit:"cover",objectPosition:"center"})})]})}},18503:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var i=n(85893),a=n(67294);var r=function(e){var t=a.Children.count(e),n=a.Children.toArray(e);if(1!==t||1!==n.length)throw new Error("In ImageConfig, found ".concat(t," total children and ").concat(n.length," valid children. Please ensure that ImageConfig has exactly one child element, and ensure it is a valid image element."));var i=n[0];if(!(0,a.isValidElement)(i))throw new Error("In ImageConfig, found child that does not seem to be a valid React element. Please ensure that ImageConfig contains a valid image element.");var r=i.props.mdxType||i.type;if("img"===r)return i;if("p"===r)return function(e){var t=a.Children.toArray(e.props.children);t.length>1&&console.warn("Warning: <ImageConfig /> was passed multiple children. We'll filter these children to find the image element being configured. All other children will be ignored. Please ensure that ImageConfig contains only a single image element.");var n=t.filter((function(e){return!!(0,a.isValidElement)(e)&&"img"==(e.props.mdxType||e.type)}));if(0==n.length||!(0,a.isValidElement)(n[0]))throw new Error("In ImageConfig, could not find a valid image element. Please ensure that ImageConfig contains a valid image element. Child element details: ".concat(JSON.stringify(e,null,2)));return n[0]}(i);throw new Error('In ImageConfig, found child with unexpected type: "'.concat(r,'". Please ensure that ImageConfig contains a single <img /> element. Child element details: ').concat(JSON.stringify(i,null,2)))},o=n(98821),l=n(48691),s=n.n(l);function c(e){var t=e.children,n=e.caption,a=e.hideBorder,l=void 0!==a&&a,c=e.width,u=e.height,d=e.inline,h=r(t).props,f=h.src,m=h.alt,g=h.title;if("string"!==typeof f||""==f)throw new Error("Images in MDX must have an source defined. Use the format ![some alt text](path/to/img.jpg). Image details: ".concat(JSON.stringify({src:f,alt:m,title:g})," "));return n?(0,i.jsxs)("figure",{className:s().figure,children:[(0,i.jsx)(o.Z,{src:f,alt:m,title:g,noMargin:!0,noBorder:l,width:c,height:u,inline:d}),(0,i.jsx)("figcaption",{className:s().caption,children:n})]}):(0,i.jsx)(o.Z,{src:f,alt:m,title:g,noBorder:l,width:c,height:u,inline:d})}},98821:function(e,t,n){"use strict";var i=n(14924),a=n(85893),r=n(61608),o=n.n(r),l=n(94184),s=n.n(l),c=n(6570),u=n.n(c);t.Z=function(e){var t=e.src,n=e.alt,r=e.title,l=e.noMargin,c=e.noBorder,d=e.height,h=e.width,f=e.inline,m=void 0!==f&&f;"string"!==typeof n&&console.warn('Warning: Found MDX image with undefined alternate text. Even if an image is decorative, it\'s important for alt to be set to an empty string. Please define alt text the syntax "![Some alt text.](/some-image.jpg)". Image details: '.concat(JSON.stringify({src:t,alt:n,title:r})));var g,p=function(e,t){var n={};return e&&(n.width="".concat(e,"px")),t&&(n.height="".concat(t,"px")),n}(h,d),x=function(e){if(!e.startsWith("http"))return null;var t=new URL(e).searchParams,n=t.get("width"),i=t.get("height");return n&&i?{width:parseInt(n),height:parseInt(i)}:null}(t);return(0,a.jsx)("span",{className:s()(u().root,(g={},(0,i.Z)(g,u().noMargin,l),(0,i.Z)(g,u().noBorder,c),(0,i.Z)(g,u().inline,m),g)),children:x?(0,a.jsx)(o(),{src:t,alt:n,title:r,width:x.width,height:x.height,style:p}):(0,a.jsx)("img",{src:t,alt:n,title:r,style:p})})}},40839:function(e,t,n){"use strict";n.d(t,{J8:function(){return c},yW:function(){return E},Mc:function(){return j},Qc:function(){return N}});var i=n(26042),a=n(85893),r=n(69769),o=n(24893),l=n.n(o),s=n(75956);function c(e){var t=e.className,n=e.collections;return 0===n.length?null:(0,a.jsxs)("div",{className:t,children:[(0,a.jsx)("h2",{className:l().heading,children:"This tutorial also appears in:"}),(0,a.jsx)("div",{className:l().cards,children:(0,a.jsx)(s.default,{fixedColumns:1==n.length?2:null,children:n.map((function(e){return(0,a.jsx)("li",{className:l().listItem,children:(0,a.jsx)(r.CollectionCardWithAuthElements,(0,i.Z)({},e))},e.id)}))})})]})}n(67294);var u=n(94184),d=n.n(u),h=n(33643),f=n(79041),m=n(71614),g=n(80945),p=n(12599),x=n(87605),_=n.n(x),v={next:h.k,previous:f.n,final:m.H};var b=function(e){var t=e.href,n=e.label,i=e.ariaLabel,r=e.direction,o=v[r];return(0,a.jsxs)(g.default,{className:d()(_().linkbox,_()["direction-".concat(r)]),href:t,ariaLabel:i,"data-heap-track":"directional-link-box-".concat(r),children:[(0,a.jsx)(o,{className:d()(_().icon,_()["direction-".concat(r)])}),(0,a.jsx)(p.default,{className:_().text,asElement:"span",size:200,weight:"medium",children:n})]})},w=n(2595),y=n.n(w);function j(e){var t=e.tutorial,n=e.collection,i=e.finalLink;return(0,a.jsxs)("div",{className:y().linkBoxWrapper,children:[t.previous?(0,a.jsx)(b,{label:"Previous",href:t.previous.path,direction:"previous",ariaLabel:"Go to previous tutorial: ".concat(t.previous.name)}):(0,a.jsx)(b,{href:n.current.path,label:"Back to Collection",direction:"previous",ariaLabel:"Go back to collection: ".concat(n.current.name)}),t.next&&!t.isLast?(0,a.jsx)(b,{label:"Next",href:t.next.path,direction:"next",ariaLabel:"Go to next tutorial: ".concat(t.next.name)}):n.isLast?(0,a.jsx)(b,{href:i,label:"Browse Tutorials",direction:"final",ariaLabel:"Browse Tutorials"}):(0,a.jsx)(b,{href:n.next.path,label:"Next Collection",direction:"next",ariaLabel:"Go to next collection: ".concat(n.next.name)})]})}function N(e){var t,n,i,a=e.currentTutorialSlug,r=e.currentCollection,o=e.nextCollectionInSidebar,l=e.formatting,s=r.tutorials.findIndex((function(e){return e.slug===a})),c=0===s,u=s===r.tutorials.length-1;if(!c){var d=r.tutorials[s-1],h=d.slug,f=d.name;t={path:l.getTutorialSlug(h,r.slug),name:f}}if(!u){var m=r.tutorials[s+1],g=m.slug,p=m.name;n={path:l.getTutorialSlug(g,r.slug),name:p}}o&&(i={path:l.getCollectionSlug(o.slug),name:o.shortName});var x=function(e){var t="/tutorials/library",n=new URLSearchParams;if("hashicorp"===e)return t;"cloud"===e?n.set("edition","hcp"):n.set("product",e);return"".concat(t,"?").concat(n.toString())}(r.theme),_=r.slug.split("/")[0];return"well-architected-framework"===_?x="/well-architected-framework":"onboarding"===_&&(x="https://learn.hashicorp.com/search"),{tutorial:{previous:t,next:n,isLast:u},collection:{current:{path:l.getCollectionSlug(r.slug),name:r.shortName},next:i,isLast:u&&!i},finalLink:x}}var k=n(47568),Z=n(14924),C=n(69396),I=n(20414),W=n(23416),P=n(81051),S=n(40952),T=n(48264),z=n.n(T);function L(e,t){return B.apply(this,arguments)}function B(){return B=(0,k.Z)((function(e,t){var n,a,r,o,l,s,c;return(0,I.__generator)(this,(function(u){switch(u.label){case 0:(a={}).responses=e.reduce((function(e,t){var n=t.id,i=t.value;return Object.assign(e,(0,Z.Z)({},n,i))}),{}),a.sessionId=t,a.timestamp=new Date,n=a,u.label=1;case 1:return u.trys.push([1,3,,4]),o={},l={},r=(0,C.Z)((0,i.Z)(o,n),(l.page=document.location.pathname,l)),s=function(){var e=(0,k.Z)((function(){var e;return(0,I.__generator)(this,(function(t){switch(t.label){case 0:return e={},[4,fetch("/api/tutorial-feedback",(e.method="POST",e.headers={"Content-Type":"application/json"},e.body=JSON.stringify(r),e))];case 1:return t.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}(),[4,s()];case 2:return u.sent(),[3,4];case 3:return c=u.sent(),console.warn(c),[3,4];case 4:return[2]}}))})),B.apply(this,arguments)}var M=[{id:"helpful",type:"choice",label:"Was this tutorial helpful?",answers:[{icon:(0,a.jsx)(P.k,{color:"var(--token-color-foreground-faint)"}),value:"yes",display:"Yes",nextQuestion:"reasonForVisit"},{icon:(0,a.jsx)(W.Z,{color:"var(--token-color-foreground-faint)"}),value:"no",display:"No",nextQuestion:"suggestedImprovements"}]},{id:"reasonForVisit",type:"text",labelIcon:(0,a.jsx)(P.k,{color:"var(--token-color-foreground-faint)"}),label:"We want to hear from you.",labelSecondary:"Why did you visit this tutorial?",buttonText:"Submit",optional:!0},{id:"suggestedImprovements",type:"text",labelIcon:(0,a.jsx)(W.Z,{color:"var(--token-color-foreground-faint)"}),label:"We want to hear from you.",labelSecondary:"How could this tutorial be more helpful?",buttonText:"Submit",optional:!0}];function E(){return(0,a.jsx)("div",{className:z().root,children:(0,a.jsx)(S.default,{questions:M,onQuestionSubmit:L,finishedText:(0,a.jsx)(a.Fragment,{children:"Thank you! Your feedback will help us improve our websites."})})})}},77467:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i,a=n(14924),r=n(86340),o=(i={},(0,a.Z)(i,r.Bw.youtube,"https://www.youtube.com/watch?v="),(0,a.Z)(i,r.Bw.wistia,"https://hashicorp.wistia.com/medias/"),i);function l(e){var t=e.videoHost,n=e.videoId;return"".concat(o[t]).concat(n)}},86421:function(e,t,n){"use strict";var i=n(85893),a=n(3921),r=n(2485),o=n(98821),l=n(18503),s=n(87431),c=n(20947),u=n(55073),d=(0,a.ZP)({theme:"dark"}),h=d.CodeBlockConfig,f=d.CodeTabs,m=d.pre,g={Accordion:function(e){var t=e.children,n=(e.collapse,e.heading);return(0,i.jsx)(r.default,{title:n,children:t})},Tabs:c.Nk,Tab:c.mn,pre:m,inlineCode:c.yf,CodeBlockConfig:h,CodeTabs:f,ImageConfig:l.default,InteractiveLabCallout:s.default,img:o.Z,VideoEmbed:u.default,ol:c.P8,ul:c.u$,li:c.l2,a:c.nu,h1:c.NM,h2:c.e2,h3:c.Uw,h4:c.RC,h5:c.xh,h6:c.Je,p:c.im,table:c.pf,blockquote:c.N2};t.Z=g},89349:function(e){e.exports={root:"dev-dot-content_root__PM7Rc hds-typography-body-300"}},89444:function(e){e.exports={hiddenPermalink:"mdx-a_hiddenPermalink__Mah9X"}},91835:function(e){e.exports={blockquote:"mdx-blockquote_blockquote__QDU3a"}},72690:function(e){e.exports={root:"mdx-callout_root__TzNsl",ctaIcon:"mdx-callout_ctaIcon__LawZb",textContainer:"mdx-callout_textContainer__T8MIR",heading:"mdx-callout_heading__xwqfU",subHeading:"mdx-callout_subHeading__V3s2b",ctaWrapper:"mdx-callout_ctaWrapper__3ypUL g-focus-ring-from-box-shadow",solutionGradient:"mdx-callout_solutionGradient__ZUiSK",solutionPattern:"mdx-callout_solutionPattern__viQdf"}},63096:function(e){e.exports={root:"mdx-heading-permalink_root__rMneC g-focus-ring-from-box-shadow",icon:"mdx-heading-permalink_icon__wRuQa",h2:"mdx-heading-permalink_h2___xzUm"}},42365:function(e){e.exports={heading:"mdx-headings_heading__T_KWX g-offset-scroll-margin-top",h1:"mdx-headings_h1__LMw9h",h2:"mdx-headings_h2__8mhgN",h3:"mdx-headings_h3__ST7wF",h4:"mdx-headings_h4__gBHMJ",h5:"mdx-headings_h5___uGnN",h6:"mdx-headings_h6__iO3RA"}},79289:function(e){e.exports={inlineCode:"mdx-inline-code_inlineCode__mRRzk"}},57133:function(e){e.exports={listRoot:"mdx-lists_listRoot__zHI9u",listItem:"mdx-lists_listItem__2Palk"}},60159:function(e){e.exports={p:"mdx-p_p__iAYvZ"}},4923:function(e){e.exports={tableWrapper:"mdx-table_tableWrapper__yb8EI"}},87180:function(e){e.exports={tabsWrapper:"mdx-tabs_tabsWrapper__irr1H"}},48691:function(e){e.exports={figure:"image-config_figure__P_Yj3",caption:"image-config_caption__WJZcJ hds-typography-body-200"}},6570:function(e){e.exports={root:"image_root__MMhvi",noMargin:"image_noMargin__5Ktmo",noBorder:"image_noBorder__ztYXH",inline:"image_inline__iubZ8"}},24893:function(e){e.exports={heading:"featured-in-collections_heading__V_n3d hds-typography-display-200",cards:"featured-in-collections_cards__ONu2v"}},48264:function(e){e.exports={root:"feedback-panel_root__9LiGm"}},87605:function(e){e.exports={linkbox:"directional-link-box_linkbox__fZo8Z","direction-previous":"directional-link-box_direction-previous__zIIQZ","direction-next":"directional-link-box_direction-next__Wr2OR","direction-final":"directional-link-box_direction-final__jxbuv",icon:"directional-link-box_icon__djZ_q",text:"directional-link-box_text__zZeBM"}},2595:function(e){e.exports={linkBoxWrapper:"next-previous_linkBoxWrapper__Fytni"}},29220:function(e){e.exports="/_next/static/images/applications-fcbf381afac444e0cd9790579e5c3364.svg"},9079:function(e){e.exports="/_next/static/images/infrastructure-ab9308c80f1d3cbde7acf34cf44d81d6.svg"},42298:function(e){e.exports="/_next/static/images/networking-8a270f6ab7fbd76b046a087b46436f47.svg"},77202:function(e){e.exports="/_next/static/images/security-041198e583984af33b5304a76e329fc4.svg"}}]);