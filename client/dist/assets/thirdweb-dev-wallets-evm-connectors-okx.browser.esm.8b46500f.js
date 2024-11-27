import{b as u,w as p,cp as m}from"./index.0708ba85.js";import{a as w,U as d,R as l}from"./errors-3055a99c.browser.esm.8fe1885c.js";import{InjectedConnector as f}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.ddadbb85.js";import{g}from"./thirdweb-dev-wallets.browser.esm.be035cb1.js";import"./url-bc88b2b6.browser.esm.d6c70971.js";import"./normalizeChainId-e4cc0175.browser.esm.042707b7.js";import"./index.es.f29c2887.js";import"./index.ab0617da.js";import"./constants-1ba9df2b.browser.esm.1400d5f9.js";class j extends f{constructor(t){const i={...{name:"OKX",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:g},...t.options};super({chains:t.chains,options:i,connectorStorage:t.connectorStorage}),u(this,"id",p.okx)}async connect(){var r,i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new w;this.setupListeners(),this.emit("message",{type:"connecting"});let o=null;if(((r=this.options)==null?void 0:r.shimDisconnect)&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))&&(o=await this.getAccount().catch(()=>null),!!o))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(h){if(this.isUserRejectedRequestError(h))throw new d(h)}if(!o){const s=await e.request({method:"eth_requestAccounts"});o=m(s[0])}let n=await this.getChainId(),c=this.isChainUnsupported(n);if(t.chainId&&n!==t.chainId)try{await this.switchChain(t.chainId),n=t.chainId,c=this.isChainUnsupported(t.chainId)}catch(s){console.error(`Could not switch to chain id : ${t.chainId}`,s)}(i=this.options)!=null&&i.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const a={chain:{id:n,unsupported:c},provider:e,account:o};return this.emit("connect",a),a}catch(e){throw this.isUserRejectedRequestError(e)?new d(e):e.code===-32002?new l(e):e}}async switchAccount(){await(await this.getProvider()).request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}export{j as OKXConnector};
