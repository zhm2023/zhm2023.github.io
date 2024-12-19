"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8704],{8704:(e,t,r)=>{r.r(t),r.d(t,{GoogleCastLoader:()=>i});var a=r(6207),o=r(4630),n=r(511),s=r(7933);class i{name="google-cast";target;#e;get cast(){return(0,n.vY)()}mediaType(){return"video"}canPlay(e){return a.G_&&!a.pz&&(0,a.jx)(e)}async prompt(e){let t,r,a;try{t=await this.#t(e),this.#e||(this.#e=new cast.framework.RemotePlayer,new cast.framework.RemotePlayerController(this.#e)),r=e.player.createEvent("google-cast-prompt-open",{trigger:t}),e.player.dispatchEvent(r),this.#r(e,"connecting",r),await this.#a((0,s.se)(e.$props.googleCast)),e.$state.remotePlaybackInfo.set({deviceName:(0,n.aQ)()?.getCastDevice().friendlyName}),(0,n.br)()&&this.#r(e,"connected",r)}catch(o){const s=o instanceof Error?o:this.#o((o+"").toUpperCase(),"Prompt failed.");throw a=e.player.createEvent("google-cast-prompt-error",{detail:s,trigger:r??t,cancelable:!0}),e.player.dispatch(a),this.#r(e,(0,n.br)()?"connected":"disconnected",a),s}finally{e.player.dispatch("google-cast-prompt-close",{trigger:a??r??t})}}async load(e){if(!this.#e)throw Error("[vidstack] google cast player was not initialized");return new((await r.e(3981).then(r.bind(r,3981))).GoogleCastProvider)(this.#e,e)}async#t(e){if((0,n.r2)())return;const t=e.player.createEvent("google-cast-load-start");e.player.dispatch(t),await(0,o.k0)((0,n.xk)()),await customElements.whenDefined("google-cast-launcher");const r=e.player.createEvent("google-cast-loaded",{trigger:t});if(e.player.dispatch(r),!(0,n.Lx)())throw this.#o("CAST_NOT_AVAILABLE","Google Cast not available on this platform.");return r}async#a(e){this.#n(e);const t=await this.cast.requestSession();if(t)throw this.#o(t.toUpperCase(),(0,n.tM)(t))}#n(e){this.cast?.setOptions({...(0,n.fk)(),...e})}#r(e,t,r){const a={type:"google-cast",state:t};e.notify("remote-playback-change",a,r)}#o(e,t){const r=Error(t);return r.code=e,r}}},511:(e,t,r)=>{r.d(t,{Cs:()=>p,It:()=>u,Lx:()=>s,Qg:()=>g,aQ:()=>l,br:()=>i,fk:()=>d,r2:()=>n,tM:()=>h,vY:()=>c,xk:()=>o});var a=r(7933);function o(){return"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"}function n(){return!!window.cast?.framework}function s(){return!!window.chrome?.cast?.isAvailable}function i(){return c().getCastState()===cast.framework.CastState.CONNECTED}function c(){return window.cast.framework.CastContext.getInstance()}function l(){return c().getCurrentSession()}function p(){return l()?.getSessionObj().media[0]}function g(e){const t=p()?.media.contentId;return t===e?.src}function d(){return{language:"en-US",autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,receiverApplicationId:chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,resumeSavedSession:!0,androidReceiverCompatible:!0}}function h(e){return`Google Cast Error Code: ${e}`}function u(e,t){return(0,a.k6)(c(),e,t)}}}]);