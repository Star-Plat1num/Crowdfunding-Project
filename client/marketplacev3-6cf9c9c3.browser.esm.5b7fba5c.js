var u=Object.defineProperty;var g=(a,t,r)=>t in a?u(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;var p=(a,t,r)=>(g(a,typeof t!="symbol"?t+"":t,r),r);import{a as s}from"./assertEnabled-bf987093.browser.esm.b8916aaa.js";import{C as f,a as l,G as W,b as C,d as n}from"./contract-appuri-2a88c8fb.browser.esm.25c28503.js";import{bD as E,bH as A,bI as w,bJ as I,al as R,am as b,bE as T,ao as L,as as O}from"./index.0708ba85.js";import{C as S}from"./contract-interceptor-6f8989ff.browser.esm.bab3be8e.js";import{C as F}from"./contract-platform-fee-36bf5ae3.browser.esm.d72a8814.js";import{C as _}from"./contract-roles-fa8ea1ef.browser.esm.b9f06d57.js";import{M as D,a as U,b as M}from"./marketplacev3-offers-e9e3c6ec.browser.esm.d89ed2b9.js";import"./cleanCurrencyAddress-8974f106.browser.esm.cb0313ba.js";import"./setErc20Allowance-f181219a.browser.esm.a541b727.js";import"./marketplace-3340c263.browser.esm.a49ee8c6.js";import"./QueryParams-8a30379b.browser.esm.10f5a076.js";const c=class{get directListings(){return s(this.detectDirectListings(),A)}get englishAuctions(){return s(this.detectEnglishAuctions(),w)}get offers(){return s(this.detectOffers(),I)}get chainId(){return this._chainId}constructor(t,r,e){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,m=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new R(t,r,o,h,e);this._chainId=d,this.abi=b.parse(o||[]),this.contractWrapper=m,this.storage=e,this.metadata=new f(this.contractWrapper,T,this.storage),this.app=new l(this.contractWrapper,this.metadata,this.storage),this.roles=new _(this.contractWrapper,c.contractRoles),this.encoder=new L(this.contractWrapper),this.estimator=new W(this.contractWrapper),this.events=new C(this.contractWrapper),this.platformFees=new F(this.contractWrapper),this.interceptor=new S(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async prepare(t,r,e){return O.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}detectDirectListings(){if(n(this.contractWrapper,"DirectListings"))return new D(this.contractWrapper,this.storage)}detectEnglishAuctions(){if(n(this.contractWrapper,"EnglishAuctions"))return new U(this.contractWrapper,this.storage)}detectOffers(){if(n(this.contractWrapper,"Offers"))return new M(this.contractWrapper,this.storage)}};let i=c;p(i,"contractRoles",E);export{i as MarketplaceV3};
