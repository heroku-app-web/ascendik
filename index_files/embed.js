(function(g){var window=this;var w4=function(a,b){g.jf(a.u,8*b+2);var c=a.u.end();a.C.push(c);a.B+=c.length;c.push(a.B);return c},x4=function(a,b){var c=b.pop();
for(c=a.B+a.u.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.B++;b.push(c);a.B++},fGa=function(a,b,c){null!=c&&(g.jf(a.u,8*b+1),a=a.u,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.wf=b,g.xf=c,g.kf(a,g.wf),g.kf(a,g.xf))},y4=function(a,b,c){null!=c&&(g.jf(a.u,8*b),a.u.u.push(c?1:0))},z4=function(a,b,c){if(null!=c){b=w4(a,b);
for(var d=a.u,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.u.push(f);else if(2048>f)d.u.push(f>>6|192),d.u.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var h=c.charCodeAt(e+1);56320<=h&&57343>=h&&(f=1024*(f-55296)+h-56320+65536,d.u.push(f>>18|240),d.u.push(f>>12&63|128),d.u.push(f>>6&63|128),d.u.push(f&63|128),e++)}else d.u.push(f>>12|224),d.u.push(f>>6&63|128),d.u.push(f&63|128)}x4(a,b)}},A4=function(a,b,c,d){null!=c&&(b=w4(a,b),d(c,a),x4(a,b))},B4=function(a,b,c,d){if(null!=
c)for(var e=0;e<c.length;e++){var f=w4(a,b);
d(c[e],a);x4(a,f)}},gGa=function(a,b){var c=(b-a.u)/(a.B-a.u);
if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=g.qn(a,c);var l=(g.qn(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.qn(a,c);return c},C4=function(a,b,c){a.u||(a.u={});
if(!a.u[c]){var d=g.Gf(a,c);d&&(a.u[c]=new b(d))}return a.u[c]},hGa=function(a,b,c){a.u||(a.u={});
c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].yf;a.u[b]=c;g.If(a,b,d)},D4=function(a,b,c,d){(c=g.Ef(a,c))&&c!==b&&void 0!==d&&(a.u&&c in a.u&&(a.u[c]=void 0),g.If(a,c,void 0));
g.If(a,b,d)},E4=function(){return{I:"svg",
U:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},S:[{I:"path",rb:!0,L:"ytp-svg-fill",U:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
iGa=function(a){this.DA=a},F4=function(a,b,c){this.D=a;
this.B=b;this.u=c||[];this.Km=new Map},G4=function(a,b){F4.call(this,a,3,b)},kGa=function(){this.G=new jGa;
this.B=new Map;this.F=new Set;this.C=0;this.D=100;this.flushInterval=3E4;this.u=new g.xm(this.flushInterval);this.u.wa("tick",this.VF,!1,this)},lGa=function(a,b){return a.F.has(b)?void 0:a.B.get(b)},mGa=function(a){for(var b=0;b<a.length;b++)a[b].clear()},nGa=function(){if(!H4){H4=new kGa;
var a=g.$n("client_streamz_web_flush_count",-1);-1!==a&&(H4.D=a)}this.u=H4;this.u.gI("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe")},pGa=function(a){g.Ff(this,a,oGa,null)},qGa=function(a){g.Ff(this,a,null,null)},sGa=function(a,b){var c=g.Kf(a,qGa,1);
0<c.length&&B4(b,1,c,rGa)},rGa=function(a,b){var c=g.Gf(a,1);
null!=c&&g.zf(b,1,c);c=g.Gf(a,2);null!=c&&g.yf(b,2,c)},uGa=function(a){g.Ff(this,a,tGa,null)},wGa=function(a){g.Ff(this,a,null,vGa)},xGa=function(a){g.Ff(this,a,null,null)},yGa=function(a){g.Ff(this,a,null,null)},I4=function(a){g.Ff(this,a,zGa,null)},K4=function(a){g.Ff(this,a,null,J4)},M4=function(a){g.Ff(this,a,null,L4)},CGa=function(a,b){var c=C4(a,xGa,1);
null!=c&&A4(b,1,c,AGa);c=C4(a,yGa,2);null!=c&&A4(b,2,c,BGa)},AGa=function(a,b){var c=g.Gf(a,1);
null!=c&&z4(b,1,c);c=g.Gf(a,2);null!=c&&z4(b,2,c);c=g.Gf(a,3);null!=c&&y4(b,3,c)},BGa=function(a,b){var c=g.Gf(a,1);
null!=c&&z4(b,1,c);c=g.Gf(a,2);null!=c&&z4(b,2,c);c=g.Gf(a,3);null!=c&&g.vf(b,3,c);c=g.Gf(a,4);null!=c&&y4(b,4,c)},FGa=function(a,b){var c=g.Kf(a,K4,1);
0<c.length&&B4(b,1,c,DGa);c=C4(a,M4,2);null!=c&&A4(b,2,c,EGa)},DGa=function(a,b){var c=g.Gf(a,1);
null!=c&&z4(b,1,c);c=g.Gf(a,2);null!=c&&g.vf(b,2,c);c=g.Gf(a,3);null!=c&&y4(b,3,c)},EGa=function(a,b){var c=g.Gf(a,1);
null!=c&&g.yf(b,1,c);c=g.Gf(a,2);null!=c&&g.zf(b,2,c);c=C4(a,pGa,3);null!=c&&A4(b,3,c,sGa)},jGa=function(){},N4=function(a){g.B.call(this);
this.callback=a;this.B=new g.pn(0,0,.4,0,.2,1,1,1);this.delay=new g.Um(this.next,window,this);this.startTime=this.duration=this.u=this.from=NaN;g.D(this,this.delay)},O4=function(a){g.V.call(this,{I:"div",
L:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.G=this.B=0;this.animationDelay=1E3;this.N=new g.mR(this);this.D=[];this.u=[];this.F=0;this.title=new g.V({I:"h2",L:"ytp-related-title",Z:"{{title}}"});this.previous=new g.V({I:"button",ha:["ytp-button","ytp-previous"],U:{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},S:[g.NN()]});this.X=
new N4(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.C=0;this.K=!0;this.next=new g.V({I:"button",ha:["ytp-button","ytp-next"],U:{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},S:[g.ON()]});g.D(this,this.N);a=a.T();this.W=a.B;g.D(this,this.title);this.title.fa(this.element);this.suggestions=new g.V({I:"div",L:"ytp-suggestions"});g.D(this,this.suggestions);this.suggestions.fa(this.element);
g.D(this,this.previous);this.previous.fa(this.element);this.previous.wa("click",this.PK,this);g.D(this,this.X);for(var c=0;16>c;c++){var d=new g.V({I:"a",L:"ytp-suggestion-link",U:{href:"{{link}}",target:a.F,"aria-label":"{{aria_label}}"},S:[{I:"div",L:"ytp-suggestion-image",S:[{I:"div",U:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",Z:"{{duration}}"}]},{I:"div",L:"ytp-suggestion-title",U:{title:"{{hover_title}}"},Z:"{{title}}"},{I:"div",L:"ytp-suggestion-author",Z:"{{views_or_author}}"}]});
g.D(this,d);d.fa(this.suggestions.element);var e=d.ga("ytp-suggestion-link");g.lg(e,"transitionDelay",c/20+"s");this.N.R(e,"click",g.Va(this.QK,c));this.D.push(d)}g.D(this,this.next);this.next.fa(this.element);this.next.wa("click",this.OK,this);this.N.R(this.api,"videodatachange",this.Na);this.resize(g.MG(this.api).getPlayerSize());this.Na();this.show()},P4=function(a){a.next.element.style.bottom=a.G+"px";
a.previous.element.style.bottom=a.G+"px";var b=a.C,c=a.F-a.u.length*(a.tileWidth+a.B);g.I(a.element,"ytp-scroll-min",0<=b);g.I(a.element,"ytp-scroll-max",b<=c)},GGa=function(a){for(var b=0;b<a.u.length;b++){var c=b,d=a.u[b].Ka();
c=a.D[c];var e=d.shortViewCount?d.shortViewCount:d.author,f=d.lk();g.FC(a.api.T())&&(f=g.Id(f,g.PT({},"emb_rel_err")));c.element.style.display="";var h=c.ga("ytp-suggestion-title");g.nn.test(d.title)?h.dir="rtl":g.UBa.test(d.title)&&(h.dir="ltr");h=c.ga("ytp-suggestion-author");g.nn.test(e)?h.dir="rtl":g.UBa.test(e)&&(h.dir="ltr");h=d.isLivePlayback?"\u0412 \u044d\u0444\u0438\u0440\u0435":d.lengthSeconds?g.VO(d.lengthSeconds):"";c.update({views_or_author:e,duration:h,link:f,hover_title:d.title,title:d.title,
aria_label:d.vo||null,is_live:d.isLivePlayback});c=c.ga("ytp-suggestion-image");d=d.Ud();c.style.backgroundImage=d?"url("+d+")":""}for(;b<a.D.length;b++)a.D[b].element.style.display="none";P4(a)},Q4=function(a){g.RX.call(this,a);
var b=this,c=a.T();c=new g.V({I:"a",L:"ytp-small-redirect",U:{href:g.qD(c),target:c.F,"aria-label":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 YouTube \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u0438\u0434\u0435\u043e"},S:[{I:"svg",U:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},S:[{I:"path",U:{d:"M0 0h24v24H0V0z",fill:"none"}},{I:"path",U:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]}]});
c.fa(this.element);g.D(this,c);this.u=new O4(a);this.u.fa(this.element);g.D(this,this.u);this.R(a,"videodatachange",function(){b.show()});
this.resize(g.MG(this.api).getPlayerSize())},HGa=function(a,b){a.ga("ytp-error-content").style.paddingTop="0px";
var c=a.ga("ytp-error-content"),d=c.clientHeight;a.u.resize(b,b.height-d);c.style.paddingTop=(b.height-a.u.element.clientHeight)/2-d/2+"px"},IGa=function(a,b){var c=a.api.T(),d;
b.reason&&(R4(b.reason)?d=g.OE(b.reason):d=g.SX(g.S(b.reason)),a.sc(d,"content"));var e;b.subreason&&(R4(b.subreason)?e=g.OE(b.subreason):e=g.SX(g.S(b.subreason)),a.sc(e,"subreason"));if(g.Q(c.experiments,"embeds_enable_age_gating_playability_check")&&b.proceedButton&&b.proceedButton.buttonRenderer&&(e=b.proceedButton.buttonRenderer,c=a.ga("ytp-error-content-wrap-subreason"),d=g.Ee("A"),e.text&&e.text.simpleText)){var f=e.text.simpleText;d.textContent=f;a:{for(var h=(c||document).getElementsByTagName("A"),
l=0;l<h.length;l++)if(h[l].textContent===f){f=!0;break a}f=!1}f||(e.navigationEndpoint&&e.navigationEndpoint.urlEndpoint&&((f=e.navigationEndpoint.urlEndpoint.url)&&d.setAttribute("href",f),(e=e.navigationEndpoint.urlEndpoint.target)&&d.setAttribute("target",e)),c.appendChild(d))}},R4=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},S4=function(a,b){g.V.call(this,{I:"a",
ha:["ytp-impression-link"],U:{target:"{{target}}",href:"{{url}}","aria-label":"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 YouTube"},S:[{I:"div",L:"ytp-impression-link-content",U:{"aria-hidden":"true"},S:[{I:"div",L:"ytp-impression-link-text",Z:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430"},{I:"div",L:"ytp-impression-link-logo",S:[E4()]}]}]});this.api=a;this.B=b;this.xa("target",a.T().F);g.rX(this.api,this.element,this,96714);this.R(this.api,
"presentingplayerstatechange",this.Of);this.R(this.api,"videoplayerreset",this.u);this.R(this.element,"click",this.onClick);this.u()},T4=function(a){g.V.call(this,{I:"div",
L:"ytp-muted-autoplay-endscreen-overlay",S:[{I:"div",L:"ytp-muted-autoplay-end-panel",S:[{I:"div",L:"ytp-muted-autoplay-end-text",Z:"{{text}}"}]}]});this.api=a;this.B=this.ga("ytp-muted-autoplay-end-panel");this.u=new g.KX(this.api);g.D(this,this.u);this.u.fa(this.B,0);g.rX(this.api,this.element,this,52428);this.R(this.api,"presentingplayerstatechange",this.C);this.wa("click",this.onClick);this.hide()},U4=function(a){g.V.call(this,{I:"div",
L:"ytp-muted-autoplay-overlay",S:[{I:"div",L:"ytp-muted-autoplay-bottom-buttons",S:[{I:"button",ha:["ytp-muted-autoplay-equalizer","ytp-button"],S:[{I:"div",ha:["ytp-muted-autoplay-equalizer-icon"],S:[{I:"svg",U:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},S:[{I:"g",U:{fill:"#fff"},S:[{I:"rect",L:"ytp-equalizer-bar-left",U:{height:"9",width:"4",x:"1",y:"7"}},{I:"rect",L:"ytp-equalizer-bar-middle",U:{height:"14",width:"4",x:"6",y:"2"}},{I:"rect",L:"ytp-equalizer-bar-right",U:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.ga("ytp-muted-autoplay-bottom-buttons");this.ga("ytp-muted-autoplay-equalizer");this.C=new g.F(this.B,4E3,this);g.rX(a,this.element,this,39306);this.R(a,"presentingplayerstatechange",this.u);this.R(a,"onMutedAutoplayStarts",this.u);this.wa("click",this.onClick);this.hide()},V4=function(a,b){g.V.call(this,{I:"div",
L:"ytp-pause-overlay"});var c=this;this.api=a;this.N=b;this.animationDelay=1E3;this.B=new g.mR(this);this.G=new g.fO(this,1E3,!1,100);this.D=[];this.u=[];this.F=0;this.K=!1;this.ba=0;this.title=new g.V({I:"h2",L:"ytp-related-title",Z:"{{title}}"});this.previous=new g.V({I:"button",ha:["ytp-button","ytp-previous"],U:{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},
S:[g.NN()]});this.X=new N4(function(m){c.suggestions.element.scrollLeft=-m});
this.Y=this.tileWidth=this.C=0;this.next=new g.V({I:"button",ha:["ytp-button","ytp-next"],U:{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},S:[g.ON()]});this.expandButton=new g.V({I:"button",ha:["ytp-button","ytp-expand"],Z:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e"});g.D(this,this.B);
g.D(this,this.G);var d=a.T();"0"===d.controlsType&&g.H(a.getRootNode(),"ytp-pause-overlay-controls-hidden");this.W=d.B;g.D(this,this.title);this.title.fa(this.element);this.suggestions=new g.V({I:"div",L:"ytp-suggestions"});g.D(this,this.suggestions);this.suggestions.fa(this.element);g.D(this,this.previous);this.previous.fa(this.element);this.previous.wa("click",this.MK,this);var e=g.DB||g.og?{style:"will-change: opacity"}:void 0;g.D(this,this.X);for(var f=0;16>f;f++){var h=new g.V({I:"a",L:"ytp-suggestion-link",
U:{href:"{{link}}",target:d.F,"aria-label":"{{aria_label}}"},S:[{I:"div",L:"ytp-suggestion-image"},{I:"div",L:"ytp-suggestion-overlay",U:e,S:[{I:"div",L:"ytp-suggestion-title",Z:"{{title}}"},{I:"div",L:"ytp-suggestion-author",Z:"{{author_and_views}}"},{I:"div",U:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",Z:"{{duration}}"}]}]});g.D(this,h);h.fa(this.suggestions.element);var l=h.ga("ytp-suggestion-link");g.lg(l,"transitionDelay",f/20+"s");this.B.R(l,"click",g.Va(this.NK,f));this.D.push(h)}g.D(this,
this.next);this.next.fa(this.element);this.next.wa("click",this.LK,this);d=new g.V({I:"button",ha:["ytp-button","ytp-collapse"],U:{"aria-label":"\u0421\u043a\u0440\u044b\u0442\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},S:[{I:"svg",U:{height:"100%",viewBox:"0 0 16 16",width:"100%"},S:[{I:"path",U:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}]});g.D(this,d);d.fa(this.element);d.wa("click",this.pN,this);g.D(this,this.expandButton);
this.expandButton.fa(this.element);this.expandButton.wa("click",this.qN,this);this.B.R(this.api,"appresize",this.Sa);this.B.R(this.api,"fullscreentoggled",this.Gj);this.B.R(this.api,"presentingplayerstatechange",this.Wb);this.B.R(this.api,"videodatachange",this.Na);this.Sa(g.MG(this.api).getPlayerSize());this.Na()},W4=function(a){var b=a.N.Ld()?32:16;
b=a.Y/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.C;var c=a.F-a.u.length*(a.tileWidth+8);g.I(a.element,"ytp-scroll-min",0<=b);g.I(a.element,"ytp-scroll-max",b<=c)},JGa=function(a){for(var b=0;b<a.u.length;b++){var c=a.u[b].Ka(),d=a.D[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.TBa.test(c.title)&&(d.ga("ytp-suggestion-title").dir="rtl");g.TBa.test(e)&&(d.ga("ytp-suggestion-author").dir="rtl");var f=c.isLivePlayback?"\u0412 \u044d\u0444\u0438\u0440\u0435":c.lengthSeconds?g.VO(c.lengthSeconds):"";var h=c.lk();g.FC(a.api.T())&&(h=g.Id(h,g.PT({},"emb_rel_pause")));d.update({author_and_views:e,duration:f,link:h,title:c.title,aria_label:c.vo||null,is_live:c.isLivePlayback});d=d.ga("ytp-suggestion-image");c=c.Ud();d.style.backgroundImage=c?"url("+c+
")":""}for(;b<a.D.length;b++)a.D[b].element.style.display="none";W4(a)},X4=function(a){var b=a.T();
g.V.call(this,{I:"a",ha:["ytp-watermark","yt-uix-sessionlink"],U:{target:b.F,href:"{{url}}","aria-label":g.vK("\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u0442\u043e \u0432\u0438\u0434\u0435\u043e \u043d\u0430\u00a0$WEBSITE",{WEBSITE:g.aD(b)}),"data-sessionlink":"feature=player-watermark"},S:[E4()]});this.api=a;this.u=null;this.B=!1;this.state=g.wJ(a);g.rX(a,this.element,this,76758);this.R(a,"videodatachange",this.pz);this.R(a,"videodatachange",this.Na);this.R(a,"presentingplayerstatechange",
this.RK);this.R(a,"appresize",this.Sa);b=this.state;this.state!==b&&(this.state=b);this.pz();this.Na();this.Sa(g.MG(a).getPlayerSize())},Y4=function(a){g.AS.call(this,a);
this.J=a;this.B=new g.mR(this);g.D(this,this.B);this.load()};g.k=F4.prototype;g.k.MQ=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.Km.set(this.CB(c),[new iGa(a)])};
g.k.uB=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.CB(b);return this.Km.has(b)?this.Km.get(b):void 0};
g.k.WI=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.uB(b))&&b.length?b[0]:void 0};
g.k.clear=function(){this.Km.clear()};
g.k.CB=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};g.u(G4,F4);G4.prototype.C=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.WI(c);e&&(d=e.DA);this.MQ(d+a,c)};g.k=kGa.prototype;g.k.VF=function(){var a=this.B.values();a=[].concat(g.la(a)).filter(function(b){return b.Km.size});
a.length&&this.G.flush(a);mGa(a);this.C=0;this.u.enabled&&this.u.stop()};
g.k.gI=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.B.has(a)||this.B.set(a,new G4(a,c))};
g.k.rK=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.sK.apply(this,[a,1].concat(g.la(c)))};
g.k.sK=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=lGa(this,a))&&e instanceof G4&&(e.C(b,d),this.u.enabled||this.u.start(),this.C++,this.C>=this.D&&this.VF())};
g.k.BF=function(a,b,c){for(var d=2;d<arguments.length;++d);lGa(this,a)};g.Xa(pGa,g.Af);g.Xa(qGa,g.Af);var oGa=[1];g.Xa(uGa,g.Af);g.Xa(wGa,g.Af);g.Xa(xGa,g.Af);g.Xa(yGa,g.Af);g.Xa(I4,g.Af);g.Xa(K4,g.Af);g.Xa(M4,g.Af);var tGa=[3,6,4],vGa=[[1,2]],zGa=[1],J4=[[1,2,3]],L4=[[1,2,3]];jGa.prototype.flush=function(a){a=void 0===a?[]:a;if(g.Zn("enable_client_streamz_web")){a=g.q(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new uGa;c=g.If(c,1,b.D);for(var d=b,e=[],f=0;f<d.u.length;f++)e.push(d.u[f].O3);c=g.If(c,3,e||[]);d=[];e=[];f=g.q(b.Km.keys());for(var h=f.next();!h.done;h=f.next())e.push(h.value.split(","));for(f=0;f<e.length;f++){h=e[f];var l=b.B;for(var m=b.uB(h)||[],n=[],p=0;p<m.length;p++){var r=m[p];r=r&&r.DA;var t=new M4;switch(l){case 3:D4(t,1,L4[0],Number(r));
break;case 2:D4(t,2,L4[0],Number(r))}n.push(t)}l=n;for(m=0;m<l.length;m++){p=l[m];n=new I4;n.u||(n.u={});r=p?p.yf:p;n.u[2]=p;n=g.If(n,2,r);p=h;r=[];t=b;for(var w=[],y=0;y<t.u.length;y++)w.push(t.u[y].P3);t=w;for(w=0;w<t.length;w++){y=t[w];var x=p[w],C=new K4;switch(y){case 3:D4(C,1,J4[0],String(x));break;case 2:D4(C,2,J4[0],Number(x));break;case 1:D4(C,3,J4[0],"true"==x)}r.push(C)}hGa(n,1,r);d.push(n)}}hGa(c,4,d);d=b=new g.tf;e=g.Gf(c,1);null!=e&&z4(d,1,e);e=g.Gf(c,5);null!=e&&fGa(d,5,e);e=C4(c,wGa,
2);null!=e&&A4(d,2,e,CGa);e=g.Gf(c,3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)z4(d,3,e[f]);e=g.Gf(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)fGa(d,6,e[f]);e=g.Kf(c,I4,4);0<e.length&&B4(d,4,e,FGa);b=g.uf(b);b={serializedIncrementBatch:g.nf(b)};g.hq("streamzIncremented",b)}}};var H4;g.u(N4,g.B);N4.prototype.start=function(a,b,c){this.from=a;this.u=b;this.duration=c;this.startTime=(0,g.N)();this.next()};
N4.prototype.next=function(){var a=(0,g.N)()-this.startTime;var b=this.B;a=gGa(b,a/this.duration);if(0==a)b=b.F;else if(1==a)b=b.P;else{var c=g.be(b.F,b.G,a),d=g.be(b.G,b.K,a);b=g.be(b.K,b.P,a);c=g.be(c,d,a);d=g.be(d,b,a);b=g.be(c,d,a)}b=g.$d(b,0,1);this.callback((this.u-this.from)*b+this.from);1>b&&this.delay.start()};g.u(O4,g.V);g.k=O4.prototype;g.k.hide=function(){this.K=!0;g.V.prototype.hide.call(this)};
g.k.show=function(){this.K=!1;g.V.prototype.show.call(this)};
g.k.isHidden=function(){return this.K};
g.k.OK=function(){this.scrollTo(this.C-this.F)};
g.k.PK=function(){this.scrollTo(this.C+this.F)};
g.k.QK=function(a,b){var c=this.u[a],d=c.dd;g.MX(b,this.api,this.W,d||void 0)&&g.YW(this.api,c.Ka().videoId,d,c.getPlaylistId())};
g.k.resize=function(a,b){var c=this.api.T(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,h=Math.min(this.u.length,this.D.length);if(150>=Math.min(a.width,a.height)||0===h||!c.qb)this.hide();else{var l;if(e){var m=l=28;this.B=16}else this.B=m=l=8;if(f){var n=6;e=14;var p=12;f=24;c=12}else n=8,e=18,p=16,f=36,c=16;l=a.width-(48+l+m);m=Math.ceil(l/150);m=Math.min(3,m);m=l/m-this.B;var r=Math.floor(m/d);b&&r+100>b&&50<m&&(r=Math.max(b,50/d),m=Math.ceil(l/(d*(r-100)+this.B)),m=l/m-this.B,r=Math.floor(m/
d));50>m||g.dX(this.api)?this.hide():this.show();for(d=0;d<h;d++){var t=this.D[d],w=t.ga("ytp-suggestion-image");w.style.width=m+"px";w.style.height=r+"px";t.ga("ytp-suggestion-title").style.width=m+"px";t.ga("ytp-suggestion-author").style.width=m+"px";t=t.ga("ytp-suggestion-duration");t.style.display=t&&100>m?"none":""}h=e+n+p+4;this.G=h+c+(r-f)/2;this.suggestions.element.style.height=r+h+"px";this.tileWidth=m;this.F=l;this.C=0;this.suggestions.element.scrollLeft=-0;P4(this)}};
g.k.Na=function(){var a=this,b=this.api.getVideoData(),c=this.api.T();this.W=b.Nc?!1:c.B;if(b.suggestions){var d=g.Je(b.suggestions,function(e){return e&&!e.list});
this.u=g.Pc(d,function(e){e=g.EZ(c,e);g.D(a,e);return e})}else this.u.length=0;
GGa(this);b.Nc?this.title.update({title:g.vK('\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 \u043a\u0430\u043d\u0430\u043b\u0435 "$DNI_RELATED_CHANNEL"',{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u044d\u0442\u0438 \u0440\u043e\u043b\u0438\u043a\u0438"})};
g.k.scrollTo=function(a){a=g.$d(a,this.F-this.u.length*(this.tileWidth+this.B),0);this.X.start(this.C,a,this.animationDelay);this.C=a;P4(this)};g.u(Q4,g.RX);Q4.prototype.show=function(){g.RX.prototype.show.call(this);HGa(this,g.MG(this.api).getPlayerSize())};
Q4.prototype.resize=function(a){g.RX.prototype.resize.call(this,a);HGa(this,a);g.I(this.element,"related-on-error-overlay-visible",!this.u.isHidden())};
Q4.prototype.B=function(a){g.RX.prototype.B.call(this,a);var b=this.api.getVideoData();if(g.Q(this.api.T().experiments,"embed_parse_error_renderer_killswitch")||!b.fB&&!b.playerErrorMessageRenderer){var c;a.di&&(b.Lr?R4(b.Lr)?c=g.OE(b.Lr):c=g.SX(g.S(b.Lr)):c=g.SX(a.di),this.sc(c,"subreason"))}else(a=b.fB)?IGa(this,a):b.playerErrorMessageRenderer&&IGa(this,b.playerErrorMessageRenderer)};g.u(S4,g.V);S4.prototype.Of=function(){g.wJ(this.api).isCued()||(this.hide(),g.HN(this.api,this.element,!1))};
S4.prototype.u=function(){var a=this.api.getVideoData(),b=this.api.T(),c=this.api.getVideoData().Nc,d=b.eb;b=!b.qb;var e=this.B.qe();d||e||c||b||!a.videoId?(this.hide(),g.HN(this.api,this.element,!1)):(a=g.Id(this.api.getVideoUrl(),g.PT({},"emb_imp_woyt")),this.xa("url",a),this.show())};
S4.prototype.onClick=function(a){var b=g.Id(this.api.getVideoUrl(),g.PT({},"emb_imp_woyt"));g.NX(b,this.api,a);g.sX(this.api,this.element)};
S4.prototype.show=function(){g.wJ(this.api).isCued()&&(g.V.prototype.show.call(this),g.GN(this.api,this.element)&&g.HN(this.api,this.element,!0))};g.u(T4,g.V);T4.prototype.C=function(){var a=g.wJ(this.api),b=this.api.getVideoData();g.Q(this.api.T().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.U(a,2)&&!this.Xa?(this.show(),this.u.show(),a=this.api.getVideoData(),this.xa("text",a.OD),g.I(this.element,"ytp-muted-autoplay-show-end-panel",!0),g.HN(this.api,this.element,this.Xa),this.api.va("onMutedAutoplayEnds")):this.hide())};
T4.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;a.Pg();this.api.loadVideoById(a.videoId,b);g.sX(this.api,this.element);this.hide()};g.u(U4,g.V);U4.prototype.u=function(){var a=g.wJ(this.api),b=this.api.getVideoData();g.Q(this.api.T().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.U(a,2)?this.Xa||(g.V.prototype.show.call(this),this.C.start(),g.HN(this.api,this.element,this.Xa)):this.hide()};
U4.prototype.B=function(){g.I(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
U4.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;a.Pg();this.api.loadVideoById(a.videoId,b);g.sX(this.api,this.element)};g.u(V4,g.V);g.k=V4.prototype;g.k.hide=function(){g.en(this.api.getRootNode(),"ytp-expand-pause-overlay");g.V.prototype.hide.call(this)};
g.k.pN=function(){this.K=!0;g.en(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.k.qN=function(){this.K=!1;g.H(this.api.getRootNode(),"ytp-expand-pause-overlay")};
g.k.LK=function(){this.scrollTo(this.C-this.F)};
g.k.MK=function(){this.scrollTo(this.C+this.F)};
g.k.NK=function(a,b){if(1E3>(0,g.N)()-this.ba)g.No(b),document.activeElement.blur();else{var c=this.u[a],d=c.dd;g.MX(b,this.api,this.W,d||void 0)&&g.YW(this.api,c.Ka().videoId,d,c.getPlaylistId())}};
g.k.Gj=function(){this.Sa(g.MG(this.api).getPlayerSize())};
g.k.Wb=function(a){if(!(g.U(a.state,1)||g.U(a.state,16)||g.U(a.state,32))){var b=!g.Q(this.api.T().experiments,"embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.U(a.state,2048);!g.U(a.state,4)||g.U(a.state,2)||b?this.G.hide():this.u.length&&(this.K||(g.H(this.api.getRootNode(),"ytp-expand-pause-overlay"),W4(this)),this.G.show(),this.ba=(0,g.N)())}};
g.k.Sa=function(a){var b=16/9,c=this.N.Ld();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.D.length;d++){var e=this.D[d].ga("ytp-suggestion-image");e.style.width=c+"px";e.style.height=b+"px"}this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.Y=b;this.F=a;this.C=0;this.suggestions.element.scrollLeft=-0;W4(this)};
g.k.Na=function(){var a=this,b=this.api.T(),c=this.api.getVideoData();this.W=c.Nc?!1:b.B;if(c.suggestions){var d=g.Je(c.suggestions,function(e){return e&&!e.list});
this.u=g.Pc(d,function(e){e=g.EZ(b,e);g.D(a,e);return e})}else this.u.length=0;
JGa(this);c.Nc?this.title.update({title:g.vK('\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 \u043a\u0430\u043d\u0430\u043b\u0435 "$DNI_RELATED_CHANNEL"',{DNI_RELATED_CHANNEL:c.author})}):this.title.update({title:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e"})};
g.k.scrollTo=function(a){a=g.$d(a,this.F-this.u.length*(this.tileWidth+8),0);this.X.start(this.C,a,this.animationDelay);this.C=a;W4(this)};g.u(X4,g.V);g.k=X4.prototype;g.k.pz=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).Nc,c=this.api.T();a=(a.mutedAutoplay||c.eb&&!g.U(this.state,2))&&!(b&&c.pfpChazalUi);g.yN(this,a);g.HN(this.api,this.element,a)};
g.k.RK=function(a){a=a.state;this.state!==a&&(this.state=a);this.pz()};
g.k.Na=function(){if(this.api.getVideoData().videoId){var a=this.api.getVideoUrl(!0,!1,!1,!0);this.xa("url",a);this.u||(this.u=this.wa("click",this.onClick))}else this.u&&(this.xa("url",null),this.Fb(this.u),this.u=null)};
g.k.onClick=function(a){var b=this.api.getVideoUrl(!g.WO(a),!1,!0,!0);g.NX(b,this.api,a);g.sX(this.api,this.element)};
g.k.Sa=function(a){if((a=480>a.width)&&!this.B||!a&&this.B){var b=new g.V(E4()),c=this.ga("ytp-watermark");g.I(c,"ytp-watermark-small",a);g.Ge(c);b.fa(c);this.B=a}};g.u(Y4,g.AS);g.k=Y4.prototype;g.k.Gh=function(){return!1};
g.k.create=function(){var a=this.J.T(),b=g.TW(this.J);a.qb&&(this.F=new V4(this.J,b),g.D(this,this.F),g.uP(this.J,this.F.element,4));g.Q(a.experiments,"embeds_enable_muted_autoplay")&&(this.u=new U4(this.J),g.D(this,this.u),g.uP(this.J,this.u.element,4),this.D=new T4(this.J),g.D(this,this.D),g.uP(this.J,this.D.element,4));if(a.eb||this.u)this.watermark=new X4(this.J),g.D(this,this.watermark),g.uP(this.J,this.watermark.element,7);g.Q(a.experiments,"embeds_impression_link")&&(this.C=new S4(this.J,b),
g.D(this,this.C),g.uP(this.J,this.C.element,7));this.B.R(this.J,"appresize",this.Sa);this.B.R(this.J,"presentingplayerstatechange",this.Of);this.B.R(this.J,"videodatachange",this.wR);this.B.R(this.J,"onMutedAutoplayStarts",this.sO);this.Rd(g.wJ(this.J));g.pX(this.player,"embed");g.Q(a.experiments,"enable_cookie_reissue_iframe")&&a.ie&&!g.aq("__Secure-3PAPISID")&&((new nGa).u.rK("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe"),a=g.Ee("IFRAME"),a.src="/signin?go=true",a.style.display=
"none",document.body.appendChild(a))};
g.k.Sa=function(){var a=g.MG(this.J).getPlayerSize();this.sd&&this.sd.resize(a)};
g.k.Of=function(a){this.Rd(a.state)};
g.k.Rd=function(a){g.U(a,128)?(this.sd||(this.sd=new Q4(this.J),g.D(this,this.sd),g.uP(this.J,this.sd.element,4)),this.sd.B(a.getData()),this.sd.show(),g.H(this.J.getRootNode(),"ytp-embed-error")):this.sd&&(this.sd.dispose(),this.sd=null,g.en(this.J.getRootNode(),"ytp-embed-error"))};
g.k.sO=function(){this.J.getVideoData().mutedAutoplay&&this.u&&this.watermark&&this.watermark.fa(this.u.bottomButtons,0)};
g.k.wR=function(){var a=this.J.getVideoData();this.watermark&&this.u&&!a.mutedAutoplay&&g.Le(this.u.element,this.watermark.element)&&g.uP(this.J,this.watermark.element,7)};g.CX.embed=Y4;})(_yt_player);
