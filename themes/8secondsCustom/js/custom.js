

/*!
 * VERSION: 1.18.5
 * DATE: 2016-05-24
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
 var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,i){var s,r,n=t.cycle;for(s in n)r=n[s],t[s]="function"==typeof r?r.call(e[i],i):r[i%r.length];delete t.cycle},n=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=n.prototype.render},a=1e-10,o=i._internals,l=o.isSelector,h=o.isArray,_=n.prototype=i.to({},.1,{}),u=[];n.version="1.18.5",_.constructor=n,_.kill()._gc=!1,n.killTweensOf=n.killDelayedCallsTo=i.killTweensOf,n.getTweensOf=i.getTweensOf,n.lagSmoothing=i.lagSmoothing,n.ticker=i.ticker,n.render=i.render,_.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},_.updateTo=function(t,e){var s,r=this.ratio,n=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted||n)if(e)this._initted=!1,n&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var a=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(a,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||n)for(var o,l=1/(1-r),h=this._firstPT;h;)o=h.s+h.c,h.c*=l,h.s=o-h.c,h=h._next;return this},_.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,n,l,h,_,u,f,c=this._dirty?this.totalDuration():this._totalDuration,p=this._time,m=this._totalTime,d=this._cycle,g=this._duration,v=this._rawPrevTime;if(t>=c-1e-7?(this._totalTime=c,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===g&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0>v||0>=t&&t>=-1e-7||v===a&&"isPause"!==this.data)&&v!==t&&(i=!0,v>a&&(r="onReverseComplete")),this._rawPrevTime=f=!e||t||v===t?t:a)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&v>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===g&&(this._initted||!this.vars.lazy||i)&&(v>=0&&(i=!0),this._rawPrevTime=f=!e||t||v===t?t:a)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(l=g+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&t>=m&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:this._time<0&&(this._time=0)),this._easeType?(h=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&h>=.5)&&(h=1-h),3===_&&(h*=2),1===u?h*=h:2===u?h*=h*h:3===u?h*=h*h*h:4===u&&(h*=h*h*h*h),1===_?this.ratio=1-h:2===_?this.ratio=h:this._time/g<.5?this.ratio=h/2:this.ratio=1-h/2):this.ratio=this._ease.getRatio(this._time/g)),p===this._time&&!i&&d===this._cycle)return void(m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=p,this._totalTime=m,this._rawPrevTime=v,this._cycle=d,o.lazyTweens.push(this),void(this._lazy=[t,e]);this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==p&&t>=0&&(this._active=!0),0===m&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==m||r)&&this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===g&&this._rawPrevTime===a&&f!==a&&(this._rawPrevTime=0))},n.to=function(t,e,i){return new n(t,e,i)},n.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new n(t,e,i)},n.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new n(t,e,s)},n.staggerTo=n.allTo=function(t,e,a,o,_,f,c){o=o||0;var p,m,d,g,v=0,y=[],T=function(){a.onComplete&&a.onComplete.apply(a.onCompleteScope||this,arguments),_.apply(c||a.callbackScope||this,f||u)},x=a.cycle,b=a.startAt&&a.startAt.cycle;for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),l(t)&&(t=s(t))),t=t||[],0>o&&(t=s(t),t.reverse(),o*=-1),p=t.length-1,d=0;p>=d;d++){m={};for(g in a)m[g]=a[g];if(x&&(r(m,t,d),null!=m.duration&&(e=m.duration,delete m.duration)),b){b=m.startAt={};for(g in a.startAt)b[g]=a.startAt[g];r(m.startAt,t,d)}m.delay=v+(m.delay||0),d===p&&_&&(m.onComplete=T),y[d]=new n(t[d],e,m),v+=o}return y},n.staggerFrom=n.allFrom=function(t,e,i,s,r,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,n.staggerTo(t,e,i,s,r,a,o)},n.staggerFromTo=n.allFromTo=function(t,e,i,s,r,a,o,l){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,n.staggerTo(t,e,s,r,a,o,l)},n.delayedCall=function(t,e,i,s,r){return new n(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:r,overwrite:0})},n.set=function(t,e){return new n(t,0,e)},n.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var f=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(f(n,e)),r=s.length),n=n._next;return s},c=n.getAllTweens=function(e){return f(t._rootTimeline,e).concat(f(t._rootFramesTimeline,e))};n.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,l=c(0!=r),h=l.length,_=i&&s&&r;for(o=0;h>o;o++)a=l[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},n.killChildTweensOf=function(t,e){if(null!=t){var r,a,_,u,f,c=o.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),l(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)n.killChildTweensOf(t[u],e);else{r=[];for(_ in c)for(a=c[_].target.parentNode;a;)a===t&&(r=r.concat(c[_].tweens)),a=a.parentNode;for(f=r.length,u=0;f>u;u++)e&&r[u].totalTime(r[u].totalDuration()),r[u]._enabled(!1,!1)}}};var p=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=c(r),l=i&&s&&r,h=o.length;--h>-1;)a=o[h],(l||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return n.pauseAll=function(t,e,i){p(!0,t,e,i)},n.resumeAll=function(t,e,i){p(!1,t,e,i)},n.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||a,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},_.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},_.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},_.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},_.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},_.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},_.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},_.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},_.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},n},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],l(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));l(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,l=n.isArray,h=n.lazyTweens,_=n.lazyRender,u=_gsScope._gsDefine.globals,f=function(t){var e,i={};for(e in t)i[e]=t[e];return i},c=function(t,e,i){var s,r,n=t.cycle;for(s in n)r=n[s],t[s]="function"==typeof r?r.call(e[i],i):r[i%r.length];delete t.cycle},p=a.pauseCallback=function(){},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.18.5",d.constructor=s,d.kill()._gc=d._forcingPlayhead=d._hasPause=!1,d.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,l,h,_){var u,p,d=new s({onComplete:l,onCompleteParams:h,callbackScope:_,smoothChildTiming:this.smoothChildTiming}),g=r.cycle;for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),p=0;p<t.length;p++)u=f(r),u.startAt&&(u.startAt=f(u.startAt),u.startAt.cycle&&c(u.startAt,t,p)),g&&(c(u,t,p),null!=u.duration&&(e=u.duration,delete u.duration)),d.to(t[p],e,u,p*n);return this.add(d,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,l){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,l)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var h,_,u,f,c,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&l(r)){for(a=a||"normal",o=o||0,h=n,_=r.length,u=0;_>u;u++)l(f=r[u])&&(f=new s({tweens:f})),this.add(f,h),"string"!=typeof f&&"function"!=typeof f&&("sequence"===a?h=f._startTime+f.totalDuration()/f._timeScale:"start"===a&&(f._startTime-=f.delay())),h+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,p=c.rawTime()>r._startTime;c._timeline;)p&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},d.remove=function(e){if(e instanceof t){this._remove(e,!1);var i=e._timeline=e.vars.useFrames?t._rootFramesTimeline:t._rootTimeline;return e._startTime=(e._paused?e._pauseTime:i._time)-(e._reversed?e.totalDuration()-e._totalTime:e._totalTime)/e._timeScale,this}if(e instanceof Array||e&&e.push&&l(e)){for(var s=e.length;--s>-1;)this.remove(e[s]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,s,r||this);return n.vars.onComplete=n.vars.onReverseComplete=e,n.data="isPause",this._hasPause=!0,this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&l(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,l,u,f,c=this._dirty?this.totalDuration():this._totalDuration,p=this._time,m=this._startTime,d=this._timeScale,g=this._paused;if(t>=c-1e-7)this._totalTime=this._time=c,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",l=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=t&&t>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(l=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=c+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==p||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(l=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(l=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!e){if(t>=p)for(s=this._first;s&&s._startTime<=t&&!u;)s._duration||"isPause"!==s.data||s.ratio||0===s._startTime&&0===this._rawPrevTime||(u=s),s=s._next;else for(s=this._last;s&&s._startTime>=t&&!u;)s._duration||"isPause"===s.data&&s._rawPrevTime>0&&(u=s),s=s._prev;u&&(this._time=t=u._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=t}if(this._time!==p&&this._first||i||l||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==p&&t>0&&(this._active=!0),0===p&&this.vars.onStart&&(0===this._time&&this._duration||e||this._callback("onStart")),f=this._time,f>=p)for(s=this._first;s&&(a=s._next,f===this._time&&(!this._paused||g));)(s._active||s._startTime<=f&&!s._paused&&!s._gc)&&(u===s&&this.pause(),s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,f===this._time&&(!this._paused||g));){if(s._active||s._startTime<=p&&!s._paused&&!s._gc){if(u===s){for(u=s._prev;u&&u.endTime()>this._time;)u.render(u._reversed?u.totalDuration()-(t-u._startTime)*u._timeScale:(t-u._startTime)*u._timeScale,e,i),u=u._prev;u=null,this.pause()}s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)}s=a}this._onUpdate&&(e||(h.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(m===this._startTime||d!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(n&&(h.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)a._startTime<r||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(e,i,s){this._forcingPlayhead=!0;var r=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,r},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,r._startTime<0&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return t&&this.totalDuration()?this.timeScale(this._totalDuration/t):this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=e._internals,a=n.lazyTweens,o=n.lazyRender,l=new i(null,null,1,0),h=s.prototype=new t;return h.constructor=s,h.kill()._gc=!1,s.version="1.18.5",h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},h.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},h.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},h.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},h.tweenTo=function(t,i){i=i||{};var s,r,n,a={ease:l,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)a[r]=i[r];return a.time=this._parseTimeOrLabel(t),s=Math.abs(Number(a.time)-this._time)/this._timeScale||.001,n=new e(this,s,a),a.onStart=function(){n.target.paused(!0),n.vars.time!==n.target.time()&&s===n.duration()&&n.duration(Math.abs(n.vars.time-n.target.time())/n.target._timeScale),i.onStart&&n._callback("onStart")},n},h.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],callbackScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},h.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,l,h,_,u,f,c,p=this._dirty?this.totalDuration():this._totalDuration,m=this._duration,d=this._time,g=this._totalTime,v=this._startTime,y=this._timeScale,T=this._rawPrevTime,x=this._paused,b=this._cycle;if(t>=p-1e-7)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,h="onComplete",_=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=t&&t>=-1e-7||0>T||T===r)&&T!==t&&this._first&&(_=!0,T>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=m,t=m+1e-4);else if(1e-7>t)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==d||0===m&&T!==r&&(T>0||0>t&&T>=0)&&!this._locked)&&(h="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(_=n=!0,h="onReverseComplete"):T>=0&&this._first&&(_=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=m||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(_=!0)}else if(0===m&&0>T&&(_=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(u=m+this._repeatDelay,this._cycle=this._totalTime/u>>0,0!==this._cycle&&this._cycle===this._totalTime/u&&t>=g&&this._cycle--,this._time=this._totalTime-this._cycle*u,this._yoyo&&0!==(1&this._cycle)&&(this._time=m-this._time),this._time>m?(this._time=m,t=m+1e-4):this._time<0?this._time=t=0:t=this._time)),this._hasPause&&!this._forcingPlayhead&&!e){if(t=this._time,t>=d)for(s=this._first;s&&s._startTime<=t&&!f;)s._duration||"isPause"!==s.data||s.ratio||0===s._startTime&&0===this._rawPrevTime||(f=s),s=s._next;else for(s=this._last;s&&s._startTime>=t&&!f;)s._duration||"isPause"===s.data&&s._rawPrevTime>0&&(f=s),s=s._prev;f&&(this._time=t=f._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==b&&!this._locked){var w=this._yoyo&&0!==(1&b),P=w===(this._yoyo&&0!==(1&this._cycle)),O=this._totalTime,S=this._cycle,k=this._rawPrevTime,R=this._time;if(this._totalTime=b*m,this._cycle<b?w=!w:this._totalTime+=m,this._time=d,this._rawPrevTime=0===m?T-1e-4:T,this._cycle=b,this._locked=!0,d=w?0:m,this.render(d,e,0===m),e||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),d!==this._time)return;if(P&&(d=w?m+1e-4:-1e-4,this.render(d,!0,!1)),this._locked=!1,this._paused&&!x)return;this._time=R,this._totalTime=O,this._cycle=S,this._rawPrevTime=k}if(!(this._time!==d&&this._first||i||_||f))return void(g!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==g&&t>0&&(this._active=!0),0===g&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||e||this._callback("onStart")),c=this._time,c>=d)for(s=this._first;s&&(l=s._next,c===this._time&&(!this._paused||x));)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(f===s&&this.pause(),s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;else for(s=this._last;s&&(l=s._prev,c===this._time&&(!this._paused||x));){if(s._active||s._startTime<=d&&!s._paused&&!s._gc){if(f===s){for(f=s._prev;f&&f.endTime()>this._time;)f.render(f._reversed?f.totalDuration()-(t-f._startTime)*f._timeScale:(t-f._startTime)*f._timeScale,e,i),f=f._prev;f=null,this.pause()}s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)}s=l}this._onUpdate&&(e||(a.length&&o(),this._callback("onUpdate"))),h&&(this._locked||this._gc||(v===this._startTime||y!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(n&&(a.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this._callback(h)))},h.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,l=a.length;for(s=0;l>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},h.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},h.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(e[i].time<t)return e[i].name;return null},h.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},h.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},h.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},h.totalDuration=function(e){return arguments.length?-1!==this._repeat&&e?this.timeScale(this.totalDuration()/e):this:(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},h.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},h.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},h.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},h.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},h.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=_gsScope._gsDefine.globals,a=function(t,e,i,s){i===s&&(i=s-(s-e)/1e6),t===e&&(e=t+(i-t)/1e6),this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",l=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},l=(t+e)/2,h=(e+i)/2,_=(i+s)/2,u=(l+h)/2,f=(h+_)/2,c=(f-u)/8;return r.b=l+(t-l)/4,n.b=u+c,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+f)/2,a.b=f-c,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,o){var h,_,u,f,c,p,m,d,g,v,y,T,x,b=t.length-1,w=0,P=t[0].a;for(h=0;b>h;h++)c=t[w],_=c.a,u=c.d,f=t[w+1].d,o?(y=e[h],T=i[h],x=(T+y)*r*.25/(a?.5:s[h]||.5),p=u-(u-_)*(a?.5*r:0!==y?x/y:0),m=u+(f-u)*(a?.5*r:0!==T?x/T:0),d=u-(p+((m-p)*(3*y/(y+T)+.5)/4||0))):(p=u-(u-_)*r*.5,m=u+(f-u)*r*.5,d=u-(p+m)/2),p+=d,m+=d,c.c=g=p,0!==h?c.b=P:c.b=P=c.a+.6*(c.c-c.a),c.da=u-_,c.ca=g-_,c.ba=P-_,n?(v=l(_,P,g,u),t.splice(w,1,v[0],v[1],v[2],v[3]),w+=4):w++,P=m;c=t[w],c.b=P,c.c=P+.4*(c.d-P),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=P-c.a,n&&(v=l(c.a,P,c.c,c.d),t.splice(w,1,v[0],v[1],v[2],v[3]))},_=function(t,s,r,n){var o,l,h,_,u,f,c=[];if(n)for(t=[n].concat(t),l=t.length;--l>-1;)"string"==typeof(f=t[l][s])&&"="===f.charAt(1)&&(t[l][s]=n[s]+Number(f.charAt(0)+f.substr(2)));if(o=t.length-2,0>o)return c[0]=new a(t[0][s],0,0,t[-1>o?0:1][s]),c;for(l=0;o>l;l++)h=t[l][s],_=t[l+1][s],c[l]=new a(h,0,0,_),r&&(u=t[l+2][s],e[l]=(e[l]||0)+(_-h)*(_-h),i[l]=(i[l]||0)+(u-_)*(u-_));return c[l]=new a(t[l][s],0,0,t[l+1][s]),c},u=function(t,n,a,l,u,f){var c,p,m,d,g,v,y,T,x={},b=[],w=f||t[0];u="string"==typeof u?","+u+",":o,null==n&&(n=1);for(p in t[0])b.push(p);if(t.length>1){for(T=t[t.length-1],y=!0,c=b.length;--c>-1;)if(p=b[c],Math.abs(w[p]-T[p])>.05){y=!1;break}y&&(t=t.concat(),f&&t.unshift(f),t.push(t[1]),f=t[t.length-3])}for(e.length=i.length=s.length=0,c=b.length;--c>-1;)p=b[c],r[p]=-1!==u.indexOf(","+p+","),x[p]=_(t,p,r[p],f);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!l){for(c=b.length;--c>-1;)if(r[p])for(m=x[b[c]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d]||0,s[d]=(s[d]||0)+g*g;for(c=s.length;--c>-1;)s[c]=Math.sqrt(s[c])}for(c=b.length,d=a?4:1;--c>-1;)p=b[c],m=x[p],h(m,n,a,l,r[p]),y&&(m.splice(0,d),m.splice(m.length-d,d));return x},f=function(t,e,i){e=e||"soft";var s,r,n,o,l,h,_,u,f,c,p,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||t.length<d+1)throw"invalid Bezier data";for(f in t[0])v.push(f);for(h=v.length;--h>-1;){for(f=v[h],m[f]=l=[],c=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][f]:"string"==typeof(p=t[_][f])&&"="===p.charAt(1)?i[f]+Number(p.charAt(0)+p.substr(2)):Number(p),g&&_>1&&u-1>_&&(l[c++]=(s+l[c-2])/2),l[c++]=s;for(u=c-d+1,c=0,_=0;u>_;_+=d)s=l[_],r=l[_+1],n=l[_+2],o=2===d?0:l[_+3],l[c++]=p=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);l.length=c}return m},c=function(t,e,i){for(var s,r,n,a,o,l,h,_,u,f,c,p=1/i,m=t.length;--m>-1;)for(f=t[m],n=f.a,a=f.d-n,o=f.c-n,l=f.b-n,s=r=0,_=1;i>=_;_++)h=p*_,u=1-h,s=r-(r=(h*h*a+3*u*(h*o+u*l))*h),c=m*i+_-1,e[c]=(e[c]||0)+s*s},p=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],l=0,h=0,_=e-1,u=[],f=[];for(i in t)c(t[i],a,e);for(r=a.length,s=0;r>s;s++)l+=Math.sqrt(a[s]),n=s%e,f[n]=l,n===_&&(h+=l,n=s/e>>0,u[n]=f,o[n]=h,l=0,f=[]);return{length:h,lengths:o,segments:u}},m=_gsScope._gsDefine.plugin({propName:"bezier",
 	priority:-1,version:"1.3.6",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,l=e.values||[],h={},_=l[0],c=e.autoRotate||i.vars.orientToBezier;this._autoRotate=c?c instanceof Array?c:[["x","y","rotation",c===!0?0:Number(c)||0]]:null;for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],h[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||h[s]!==l[0][s]&&(o=h);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(l,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):f(l,e.type,h),this._segCount=this._beziers[s].length,this._timeRes){var m=p(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(c=this._autoRotate)for(this._initialRotations=[],c[0]instanceof Array||(this._autoRotate=c=[c]),n=c.length;--n>-1;){for(a=0;3>a;a++)s=c[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=c[n][2],this._initialRotations[n]=(this._func[s]?this._func[s].call(this._target):this._target[s])||0}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,l,h,_,u,f=this._segCount,c=this._func,p=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&f-1>r){for(h=f-1;h>r&&(this._l2=_[++r])<=e;);this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(e<this._l1&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&e<this._l1?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&r<u.length-1){for(h=u.length-1;h>r&&(this._s2=u[++r])<=e;);this._s1=u[r-1],this._si=r}else if(e<this._s1&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&e<this._s1?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec||0}else i=0>e?0:e>=1?f-1:f*e>>0,o=(e-i*(1/f))*f;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],l=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(l=Math.round(l)),c[n]?p[n](l):p[n]=l;if(this._autoRotate){var d,g,v,y,T,x,b,w=this._autoRotate;for(r=w.length;--r>-1;)n=w[r][2],x=w[r][3]||0,b=w[r][4]===!0?1:t,a=this._beziers[w[r][0]],d=this._beziers[w[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,l=m?Math.atan2(T-v,y-g)*b+x:this._initialRotations[r],c[n]?p[n](l):p[n]=l)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=l,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,l){e instanceof Array&&(e={values:e}),l=new m;var h,_,u,f=e.values,c=f.length-1,p=[],d={};if(0>c)return o;for(h=0;c>=h;h++)u=i(t,f[h],a,o,l,c!==h),p[h]=u.end;for(_ in e)d[_]=e[_];return d.values=p,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=l,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(h=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",h,!1]]:null!=u.end.x?[["x","y","rotation",h,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform,u.proxy.rotation=u.autoRotate.rotation||0),l._onInitTween(u.proxy,d,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,l={},h=a.prototype=new t("css");h.constructor=a,a.version="1.18.5",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var _,u,f,c,p,m,d=/(?:\-|\.|\b)(\d|\.|e\-)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,b=/opacity:([^;]*)/i,w=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,O=/([A-Z])/g,S=/-([a-z])/gi,k=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,R=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,D=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,z=/[\s,\(]/i,F=Math.PI/180,X=180/Math.PI,I={},N=document,L=function(t){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",t):N.createElement(t)},E=L("div"),B=L("img"),Y=a._internals={_specialProps:l},j=navigator.userAgent,U=function(){var t=j.indexOf("Android"),e=L("a");return f=-1!==j.indexOf("Safari")&&-1===j.indexOf("Chrome")&&(-1===t||Number(j.substr(t+8,1))>3),p=f&&Number(j.substr(j.indexOf("Version/")+8,1))<6,c=-1!==j.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j))&&(m=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),V=function(t){return x.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},W="",Z="",G=function(t,e){e=e||E;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(Z=3===s?"ms":i[s],W="-"+Z.toLowerCase()+"-",Z+t):null},$=N.defaultView?N.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return U||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||$(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(O,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):V(t)},H=Y.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,l,h,_=A.test(i),u=t,f=E.style,c=0>s,p=1===s;if(c&&(s=-s),p&&(s*=100),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(f.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==r&&u.appendChild&&"v"!==r.charAt(0)&&"rem"!==r)f[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||N.body,l=u._gsCache,h=e.ticker.frame,l&&_&&l.time===h)return l.width*s/100;f[_?"width":"height"]=s+r}u.appendChild(E),o=parseFloat(E[_?"offsetWidth":"offsetHeight"]),u.removeChild(E),_&&"%"===r&&a.cacheWidths!==!1&&(l=u._gsCache=u._gsCache||{},l.time=h,l.width=o/s*100),0!==o||n||(o=H(t,i,s,r,!0))}return p&&(o/=100),c?-o:o},K=Y.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-(H(t,e,parseFloat(r),r.replace(T,""))||0)},J=function(t,e){var i,s,r,n={};if(e=e||$(t,null))if(i=e.length)for(;--i>-1;)r=e[i],(-1===r.indexOf("-transform")||St===r)&&(n[r.replace(S,R)]=e.getPropertyValue(r));else for(i in e)(-1===i.indexOf("Transform")||Ot===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(S,R)]=e[i]);return U||(n.opacity=V(t)),s=Et(t,e,!1),n.rotation=s.rotation,n.skewX=s.skewX,n.scaleX=s.scaleX,n.scaleY=s.scaleY,n.x=s.x,n.y=s.y,Rt&&(n.z=s.z,n.rotationX=s.rotationX,n.rotationY=s.rotationY,n.scaleZ=s.scaleZ),n.filters&&delete n.filters,n},tt=function(t,e,i,s,r){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:K(t,a),void 0!==h[a]&&(o=new mt(h,a,h[a],o)));if(s)for(a in s)"className"!==a&&(l[a]=s[a]);return{difs:l,firstMPT:o}},et={width:["Left","Right"],height:["Top","Bottom"]},it=["marginLeft","marginRight","marginTop","marginBottom"],st=function(t,e,i){if("svg"===(t.nodeName+"").toLowerCase())return(i||$(t))[e]||0;if(t.getBBox&&It(t))return t.getBBox()[e]||0;var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=et[e],n=r.length;for(i=i||$(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},rt=function(t,e){if("contain"===t||"auto"===t||"auto auto"===t)return t+" ";(null==t||""===t)&&(t="0 0");var i,s=t.split(" "),r=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":s[0],n=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":s[1];if(s.length>3&&!e){for(s=t.split(", ").join(",").split(","),t=[],i=0;i<s.length;i++)t.push(rt(s[i]));return t.join(",")}return null==n?n="center"===r?"50%":"0":"center"===n&&(n="50%"),("center"===r||isNaN(parseFloat(r))&&-1===(r+"").indexOf("="))&&(r="50%"),t=r+" "+n+(s.length>2?" "+s[2]:""),e&&(e.oxp=-1!==r.indexOf("%"),e.oyp=-1!==n.indexOf("%"),e.oxr="="===r.charAt(1),e.oyr="="===n.charAt(1),e.ox=parseFloat(r.replace(y,"")),e.oy=parseFloat(n.replace(y,"")),e.v=t),e||t},nt=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)||0},at=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)||0},ot=function(t,e,i,s){var r,n,a,o,l,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),l="="===t.charAt(1),a=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:X)-(l?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(a/r|0)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(a/r|0)*r)),o=e+a),h>o&&o>-h&&(o=0),o},lt={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ht=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,255*(1>6*t?e+(i-e)*t*6:.5>t?i:2>3*t?e+(i-e)*(2/3-t)*6:e)+.5|0},_t=a.parseColor=function(t,e){var i,s,r,n,a,o,l,h,_,u,f;if(t)if("number"==typeof t)i=[t>>16,t>>8&255,255&t];else{if(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),lt[t])i=lt[t];else if("#"===t.charAt(0))4===t.length&&(s=t.charAt(1),r=t.charAt(2),n=t.charAt(3),t="#"+s+s+r+r+n+n),t=parseInt(t.substr(1),16),i=[t>>16,t>>8&255,255&t];else if("hsl"===t.substr(0,3))if(i=f=t.match(d),e){if(-1!==t.indexOf("="))return t.match(g)}else a=Number(i[0])%360/360,o=Number(i[1])/100,l=Number(i[2])/100,r=.5>=l?l*(o+1):l+o-l*o,s=2*l-r,i.length>3&&(i[3]=Number(t[3])),i[0]=ht(a+1/3,s,r),i[1]=ht(a,s,r),i[2]=ht(a-1/3,s,r);else i=t.match(d)||lt.transparent;i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),i.length>3&&(i[3]=Number(i[3]))}else i=lt.black;return e&&!f&&(s=i[0]/255,r=i[1]/255,n=i[2]/255,h=Math.max(s,r,n),_=Math.min(s,r,n),l=(h+_)/2,h===_?a=o=0:(u=h-_,o=l>.5?u/(2-h-_):u/(h+_),a=h===s?(r-n)/u+(n>r?6:0):h===r?(n-s)/u+2:(s-r)/u+4,a*=60),i[0]=a+.5|0,i[1]=100*o+.5|0,i[2]=100*l+.5|0),i},ut=function(t,e){var i,s,r,n=t.match(ft)||[],a=0,o=n.length?"":t;for(i=0;i<n.length;i++)s=n[i],r=t.substr(a,t.indexOf(s,a)-a),a+=r.length+s.length,s=_t(s,e),3===s.length&&s.push(1),o+=r+(e?"hsla("+s[0]+","+s[1]+"%,"+s[2]+"%,"+s[3]:"rgba("+s.join(","))+")";return o+t.substr(a)},ft="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(h in lt)ft+="|"+h+"\\b";ft=new RegExp(ft+")","gi"),a.colorStringFilter=function(t){var e,i=t[0]+t[1];ft.test(i)&&(e=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),t[0]=ut(t[0],e),t[1]=ut(t[1],e)),ft.lastIndex=0},e.defaultStringFilter||(e.defaultStringFilter=a.colorStringFilter);var ct=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(ft)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,f,c,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(p=t.replace(M,"|").split("|"),c=0;c<p.length;c++)p[c]=r(p[c]);return p.join(",")}if(e=(t.match(ft)||[n])[0],f=t.split(e).join("").match(v)||[],c=f.length,_>c--)for(;++c<_;)f[c]=i?f[(c-1)/2|0]:a[c];return o+f.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,f;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),f=0;f<n.length;f++)n[f]=r(n[f]);return n.join(",")}if(e=t.match(v)||[],f=e.length,_>f--)for(;++f<_;)e[f]=i?e[(f-1)/2|0]:a[f];return o+e.join(h)+l}:function(t){return t}},pt=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return r.parse(e,o,n,a)}},mt=(Y._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n,a=this.data,o=a.proxy,l=a.firstMPT,h=1e-6;l;)e=o[l.v],l.r?e=Math.round(e):h>e&&e>-h&&(e=0),l.t[l.p]=e,l=l._next;if(a.autoRotate&&(a.autoRotate.rotation=o.rotation),1===t||0===t)for(l=a.firstMPT,n=1===t?"e":"b";l;){if(i=l.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;s<i.l;s++)r+=i["xn"+s]+i["xs"+(s+1)];i[n]=r}}else i[n]=i.s+i.xs0;l=l._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),dt=(Y._parseToProxy=function(t,e,i,s,r,n){var a,o,l,h,_,u=s,f={},c={},p=i._transform,m=I;for(i._transform=null,I=e,s=_=i.parse(t,e,s,r),I=m,n&&(i._transform=p,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(s.type<=1&&(o=s.p,c[o]=s.s+s.c,f[o]=s.s,n||(h=new mt(s,"s",o,h,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)l="xn"+a,o=s.p+"_"+l,c[o]=s.data[l],f[o]=s[l],n||(h=new mt(s,l,o,h,s.rxp[l]));s=s._next}return{proxy:f,end:c,firstMPT:h,pt:_}},Y.CSSPropTween=function(t,e,s,r,a,o,l,h,_,u,f){this.t=t,this.p=e,this.s=s,this.c=r,this.n=l||e,t instanceof dt||n.push(this.n),this.r=h,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===f?s+r:f,a&&(this._next=a,a._prev=this)}),gt=function(t,e,i,s,r,n){var a=new dt(t,e,i,s-i,r,-1,n);return a.b=i,a.e=a.xs0=s,a},vt=a.parseComplex=function(t,e,i,s,r,n,o,l,h,u){i=i||n||"",o=new dt(t,e,0,0,o,u?2:1,null,!1,l,i,s),s+="",r&&ft.test(s+i)&&(s=[i,s],a.colorStringFilter(s),i=s[0],s=s[1]);var f,c,p,m,v,y,T,x,b,w,P,O,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,C=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),o.plugin=h,o.setRatio=u,ft.lastIndex=0,f=0;A>f;f++)if(m=k[f],v=R[f],x=parseFloat(m),x||0===x)o.appendXtra("",x,nt(v,x),v.replace(g,""),C&&-1!==v.indexOf("px"),!0);else if(r&&ft.test(m))O=v.indexOf(")")+1,O=")"+(O?v.substr(O):""),S=-1!==v.indexOf("hsl")&&U,m=_t(m,S),v=_t(v,S),b=m.length+v.length>6,b&&!U&&0===v[3]?(o["xs"+o.l]+=o.l?" transparent":"transparent",o.e=o.e.split(R[f]).join("transparent")):(U||(b=!1),S?o.appendXtra(b?"hsla(":"hsl(",m[0],nt(v[0],m[0]),",",!1,!0).appendXtra("",m[1],nt(v[1],m[1]),"%,",!1).appendXtra("",m[2],nt(v[2],m[2]),b?"%,":"%"+O,!1):o.appendXtra(b?"rgba(":"rgb(",m[0],v[0]-m[0],",",!0,!0).appendXtra("",m[1],v[1]-m[1],",",!0).appendXtra("",m[2],v[2]-m[2],b?",":O,!0),b&&(m=m.length<4?1:m[3],o.appendXtra("",m,(v.length<4?1:v[3])-m,O,!1))),ft.lastIndex=0;else if(y=m.match(d)){if(T=v.match(g),!T||T.length!==y.length)return o;for(p=0,c=0;c<y.length;c++)P=y[c],w=m.indexOf(P,p),o.appendXtra(m.substr(p,w-p),Number(P),nt(T[c],P),"",C&&"px"===m.substr(w+P.length,2),0===c),p=w+P.length;o["xs"+o.l]+=m.substr(p)}else o["xs"+o.l]+=o.l||o["xs"+o.l]?" "+v:v;if(-1!==s.indexOf("=")&&o.data){for(O=o.xs0+o.data.s,f=1;f<o.l;f++)O+=o["xs"+f]+o.data["xn"+f];o.e=O+o["xs"+f]}return o.l||(o.type=-1,o.xs0=o.e),o.xfirst||o},yt=9;for(h=dt.prototype,h.l=h.pr=0;--yt>0;)h["xn"+yt]=0,h["xs"+yt]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&(o||a["xs"+o])?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new dt(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var Tt=function(t,e){e=e||{},this.p=e.prefix?G(t)||t:t,l[t]=l[this.p]=this,this.format=e.formatter||ct(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},xt=Y._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;s<n.length;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new Tt(n[s],e)},bt=function(t){if(!l[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";xt(t,{parser:function(t,i,s,r,n,a,h){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),l[s].parse(t,i,s,r,n,a,h)):(q("Error: "+e+" js file not loaded."),n)}})}};h=Tt.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,l,h,_,u,f=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),l=i.replace(M,"|").split("|")):f&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,f&&(_=e.indexOf(f),u=i.indexOf(f),_!==u&&(-1===u?o[a]=o[a].split(f).join(""):-1===_&&(o[a]+=" "+f)));e=o.join(", "),i=l.join(", ")}return vt(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a,o){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){xt(t,{parser:function(t,s,r,n,a,o,l){var h=new dt(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})},a.useSVGTransformAttr=f||c;var wt,Pt="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ot=G("transform"),St=W+"transform",kt=G("transformOrigin"),Rt=null!==G("perspective"),At=Y.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Rt?a.defaultForce3D||"auto":!1},Ct=window.SVGElement,Dt=function(t,e,i){var s,r=N.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},Mt=N.documentElement,zt=function(){var t,e,i,s=m||/Android/i.test(j)&&!window.chrome;return N.createElementNS&&!s&&(t=Dt("svg",Mt),e=Dt("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[kt]="50% 50%",e.style[Ot]="scaleX(0.5)",s=i===e.getBoundingClientRect().width&&!(c&&Rt),Mt.removeChild(t)),s}(),Ft=function(t,e,i,s,r,n){var o,l,h,_,u,f,c,p,m,d,g,v,y,T,x=t._gsTransform,b=Lt(t,!0);x&&(y=x.xOrigin,T=x.yOrigin),(!s||(o=s.split(" ")).length<2)&&(c=t.getBBox(),e=rt(e).split(" "),o=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*c.width:parseFloat(e[0]))+c.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*c.height:parseFloat(e[1]))+c.y]),i.xOrigin=_=parseFloat(o[0]),i.yOrigin=u=parseFloat(o[1]),s&&b!==Nt&&(f=b[0],c=b[1],p=b[2],m=b[3],d=b[4],g=b[5],v=f*m-c*p,l=_*(m/v)+u*(-p/v)+(p*g-m*d)/v,h=_*(-c/v)+u*(f/v)-(f*g-c*d)/v,_=i.xOrigin=o[0]=l,u=i.yOrigin=o[1]=h),x&&(n&&(i.xOffset=x.xOffset,i.yOffset=x.yOffset,x=i),r||r!==!1&&a.defaultSmoothOrigin!==!1?(l=_-y,h=u-T,x.xOffset+=l*b[0]+h*b[2]-l,x.yOffset+=l*b[1]+h*b[3]-h):x.xOffset=x.yOffset=0),n||t.setAttribute("data-svg-origin",o.join(" "))},Xt=function(t){try{return t.getBBox()}catch(t){}},It=function(t){return!!(Ct&&t.getBBox&&t.getCTM&&Xt(t)&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Nt=[1,0,0,1,0,0],Lt=function(t,e){var i,s,r,n,a,o,l=t._gsTransform||new At,h=1e5,_=t.style;if(Ot?s=Q(t,St,null,!0):t.currentStyle&&(s=t.currentStyle.filter.match(C),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),l.x||0,l.y||0].join(","):""),i=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,i&&Ot&&((o="none"===$(t).display)||!t.parentNode)&&(o&&(n=_.display,_.display="block"),t.parentNode||(a=1,Mt.appendChild(t)),s=Q(t,St,null,!0),i=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,n?_.display=n:o&&Ut(_,"display"),a&&Mt.removeChild(t)),(l.svg||t.getBBox&&It(t))&&(i&&-1!==(_[Ot]+"").indexOf("matrix")&&(s=_[Ot],i=0),r=t.getAttribute("transform"),i&&r&&(-1!==r.indexOf("matrix")?(s=r,i=0):-1!==r.indexOf("translate")&&(s="matrix(1,0,0,1,"+r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Nt;for(r=(s||"").match(d)||[],yt=r.length;--yt>-1;)n=Number(r[yt]),r[yt]=(a=n-(n|=0))?(a*h+(0>a?-.5:.5)|0)/h+n:n;return e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r},Et=Y.getTransform=function(t,i,s,r){if(t._gsTransform&&s&&!r)return t._gsTransform;var n,o,l,h,_,u,f=s?t._gsTransform||new At:new At,c=f.scaleX<0,p=2e-5,m=1e5,d=Rt?parseFloat(Q(t,kt,i,!1,"0 0 0").split(" ")[2])||f.zOrigin||0:0,g=parseFloat(a.defaultTransformPerspective)||0;if(f.svg=!(!t.getBBox||!It(t)),f.svg&&(Ft(t,Q(t,kt,i,!1,"50% 50%")+"",f,t.getAttribute("data-svg-origin")),wt=a.useSVGTransformAttr||zt),n=Lt(t),n!==Nt){if(16===n.length){var v,y,T,x,b,w=n[0],P=n[1],O=n[2],S=n[3],k=n[4],R=n[5],A=n[6],C=n[7],D=n[8],M=n[9],z=n[10],F=n[12],I=n[13],N=n[14],L=n[11],E=Math.atan2(A,z);f.zOrigin&&(N=-f.zOrigin,F=D*N-n[12],I=M*N-n[13],N=z*N+f.zOrigin-n[14]),f.rotationX=E*X,E&&(x=Math.cos(-E),b=Math.sin(-E),v=k*x+D*b,y=R*x+M*b,T=A*x+z*b,D=k*-b+D*x,M=R*-b+M*x,z=A*-b+z*x,L=C*-b+L*x,k=v,R=y,A=T),E=Math.atan2(-O,z),f.rotationY=E*X,E&&(x=Math.cos(-E),b=Math.sin(-E),v=w*x-D*b,y=P*x-M*b,T=O*x-z*b,M=P*b+M*x,z=O*b+z*x,L=S*b+L*x,w=v,P=y,O=T),E=Math.atan2(P,w),f.rotation=E*X,E&&(x=Math.cos(-E),b=Math.sin(-E),w=w*x+k*b,y=P*x+R*b,R=P*-b+R*x,A=O*-b+A*x,P=y),f.rotationX&&Math.abs(f.rotationX)+Math.abs(f.rotation)>359.9&&(f.rotationX=f.rotation=0,f.rotationY=180-f.rotationY),f.scaleX=(Math.sqrt(w*w+P*P)*m+.5|0)/m,f.scaleY=(Math.sqrt(R*R+M*M)*m+.5|0)/m,f.scaleZ=(Math.sqrt(A*A+z*z)*m+.5|0)/m,f.rotationX||f.rotationY?f.skewX=0:(f.skewX=k||R?Math.atan2(k,R)*X+f.rotation:f.skewX||0,Math.abs(f.skewX)>90&&Math.abs(f.skewX)<270&&(c?(f.scaleX*=-1,f.skewX+=f.rotation<=0?180:-180,f.rotation+=f.rotation<=0?180:-180):(f.scaleY*=-1,f.skewX+=f.skewX<=0?180:-180))),f.perspective=L?1/(0>L?-L:L):0,f.x=F,f.y=I,f.z=N,f.svg&&(f.x-=f.xOrigin-(f.xOrigin*w-f.yOrigin*k),f.y-=f.yOrigin-(f.yOrigin*P-f.xOrigin*R))}else if(!Rt||r||!n.length||f.x!==n[4]||f.y!==n[5]||!f.rotationX&&!f.rotationY){var B=n.length>=6,Y=B?n[0]:1,j=n[1]||0,U=n[2]||0,V=B?n[3]:1;f.x=n[4]||0,f.y=n[5]||0,l=Math.sqrt(Y*Y+j*j),h=Math.sqrt(V*V+U*U),_=Y||j?Math.atan2(j,Y)*X:f.rotation||0,u=U||V?Math.atan2(U,V)*X+_:f.skewX||0,Math.abs(u)>90&&Math.abs(u)<270&&(c?(l*=-1,u+=0>=_?180:-180,_+=0>=_?180:-180):(h*=-1,u+=0>=u?180:-180)),f.scaleX=l,f.scaleY=h,f.rotation=_,f.skewX=u,Rt&&(f.rotationX=f.rotationY=f.z=0,f.perspective=g,f.scaleZ=1),f.svg&&(f.x-=f.xOrigin-(f.xOrigin*Y+f.yOrigin*U),f.y-=f.yOrigin-(f.xOrigin*j+f.yOrigin*V))}f.zOrigin=d;for(o in f)f[o]<p&&f[o]>-p&&(f[o]=0)}return s&&(t._gsTransform=f,f.svg&&(wt&&t.style[Ot]?e.delayedCall(.001,function(){Ut(t.style,Ot)}):!wt&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),f},Bt=function(t){var e,i,s=this.data,r=-s.rotation*F,n=r+s.skewX*F,a=1e5,o=(Math.cos(r)*s.scaleX*a|0)/a,l=(Math.sin(r)*s.scaleX*a|0)/a,h=(Math.sin(n)*-s.scaleY*a|0)/a,_=(Math.cos(n)*s.scaleY*a|0)/a,u=this.t.style,f=this.t.currentStyle;if(f){i=l,l=-h,h=-i,e=f.filter,u.filter="";var c,p,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==f.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+_,b=s.x+d*s.xPercent/100,w=s.y+g*s.yPercent/100;if(null!=s.ox&&(c=(s.oxp?d*s.ox*.01:s.ox)-d/2,p=(s.oyp?g*s.oy*.01:s.oy)-g/2,b+=c-(c*o+p*l),w+=p-(c*h+p*_)),v?(c=d/2,p=g/2,y+=", Dx="+(c-(c*o+p*l)+b)+", Dy="+(p-(c*h+p*_)+w)+")"):y+=", sizingMethod='auto expand')",-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?u.filter=e.replace(D,y):u.filter=y+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||x.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf(e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,O,S,k=8>m?1:-1;for(c=s.ieOffsetX||0,p=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>l?-l:l)*g))/2+b),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>h?-h:h)*d))/2+w),yt=0;4>yt;yt++)O=it[yt],P=f[O],i=-1!==P.indexOf("px")?parseFloat(P):H(this.t,O,parseFloat(P),P.replace(T,""))||0,S=i!==s[O]?2>yt?-s.ieOffsetX:-s.ieOffsetY:2>yt?c-s.ieOffsetX:p-s.ieOffsetY,u[O]=(s[O]=Math.round(i-S*(0===yt||2===yt?1:k)))+"px"}}},Yt=Y.set3DTransformRatio=Y.setTransformRatio=function(t){var e,i,s,r,n,a,o,l,h,_,u,f,p,m,d,g,v,y,T,x,b,w,P,O=this.data,S=this.t.style,k=O.rotation,R=O.rotationX,A=O.rotationY,C=O.scaleX,D=O.scaleY,M=O.scaleZ,z=O.x,X=O.y,I=O.z,N=O.svg,L=O.perspective,E=O.force3D;if(((1===t||0===t)&&"auto"===E&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!E)&&!I&&!L&&!A&&!R&&1===M||wt&&N||!Rt)return void(k||O.skewX||N?(k*=F,w=O.skewX*F,P=1e5,e=Math.cos(k)*C,r=Math.sin(k)*C,i=Math.sin(k-w)*-D,n=Math.cos(k-w)*D,w&&"simple"===O.skewType&&(v=Math.tan(w),v=Math.sqrt(1+v*v),i*=v,n*=v,O.skewY&&(e*=v,r*=v)),N&&(z+=O.xOrigin-(O.xOrigin*e+O.yOrigin*i)+O.xOffset,X+=O.yOrigin-(O.xOrigin*r+O.yOrigin*n)+O.yOffset,wt&&(O.xPercent||O.yPercent)&&(m=this.t.getBBox(),z+=.01*O.xPercent*m.width,X+=.01*O.yPercent*m.height),m=1e-6,m>z&&z>-m&&(z=0),m>X&&X>-m&&(X=0)),T=(e*P|0)/P+","+(r*P|0)/P+","+(i*P|0)/P+","+(n*P|0)/P+","+z+","+X+")",N&&wt?this.t.setAttribute("transform","matrix("+T):S[Ot]=(O.xPercent||O.yPercent?"translate("+O.xPercent+"%,"+O.yPercent+"%) matrix(":"matrix(")+T):S[Ot]=(O.xPercent||O.yPercent?"translate("+O.xPercent+"%,"+O.yPercent+"%) matrix(":"matrix(")+C+",0,0,"+D+","+z+","+X+")");if(c&&(m=1e-4,m>C&&C>-m&&(C=M=2e-5),m>D&&D>-m&&(D=M=2e-5),!L||O.z||O.rotationX||O.rotationY||(L=0)),k||O.skewX)k*=F,d=e=Math.cos(k),g=r=Math.sin(k),O.skewX&&(k-=O.skewX*F,d=Math.cos(k),g=Math.sin(k),"simple"===O.skewType&&(v=Math.tan(O.skewX*F),v=Math.sqrt(1+v*v),d*=v,g*=v,O.skewY&&(e*=v,r*=v))),i=-g,n=d;else{if(!(A||R||1!==M||L||N))return void(S[Ot]=(O.xPercent||O.yPercent?"translate("+O.xPercent+"%,"+O.yPercent+"%) translate3d(":"translate3d(")+z+"px,"+X+"px,"+I+"px)"+(1!==C||1!==D?" scale("+C+","+D+")":""));e=n=1,i=r=0}h=1,s=a=o=l=_=u=0,f=L?-1/L:0,p=O.zOrigin,m=1e-6,x=",",b="0",k=A*F,k&&(d=Math.cos(k),g=Math.sin(k),o=-g,_=f*-g,s=e*g,a=r*g,h=d,f*=d,e*=d,r*=d),k=R*F,k&&(d=Math.cos(k),g=Math.sin(k),v=i*d+s*g,y=n*d+a*g,l=h*g,u=f*g,s=i*-g+s*d,a=n*-g+a*d,h*=d,f*=d,i=v,n=y),1!==M&&(s*=M,a*=M,h*=M,f*=M),1!==D&&(i*=D,n*=D,l*=D,u*=D),1!==C&&(e*=C,r*=C,o*=C,_*=C),(p||N)&&(p&&(z+=s*-p,X+=a*-p,I+=h*-p+p),N&&(z+=O.xOrigin-(O.xOrigin*e+O.yOrigin*i)+O.xOffset,X+=O.yOrigin-(O.xOrigin*r+O.yOrigin*n)+O.yOffset),m>z&&z>-m&&(z=b),m>X&&X>-m&&(X=b),m>I&&I>-m&&(I=0)),T=O.xPercent||O.yPercent?"translate("+O.xPercent+"%,"+O.yPercent+"%) matrix3d(":"matrix3d(",T+=(m>e&&e>-m?b:e)+x+(m>r&&r>-m?b:r)+x+(m>o&&o>-m?b:o),T+=x+(m>_&&_>-m?b:_)+x+(m>i&&i>-m?b:i)+x+(m>n&&n>-m?b:n),R||A||1!==M?(T+=x+(m>l&&l>-m?b:l)+x+(m>u&&u>-m?b:u)+x+(m>s&&s>-m?b:s),T+=x+(m>a&&a>-m?b:a)+x+(m>h&&h>-m?b:h)+x+(m>f&&f>-m?b:f)+x):T+=",0,0,0,0,1,0,",T+=z+x+X+x+I+x+(L?1+-I/L:1)+")",S[Ot]=T};h=At.prototype,h.x=h.y=h.z=h.skewX=h.skewY=h.rotation=h.rotationX=h.rotationY=h.zOrigin=h.xPercent=h.yPercent=h.xOffset=h.yOffset=0,h.scaleX=h.scaleY=h.scaleZ=1,xt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,s,n,o,l){if(s._lastParsedTransform===l)return n;s._lastParsedTransform=l;var h,_,u,f,c,p,m,d,g,v=t._gsTransform,y=t.style,T=1e-6,x=Pt.length,b=l,w={},P="transformOrigin",O=Et(t,r,!0,l.parseTransform);if(s._transform=O,"string"==typeof b.transform&&Ot)_=E.style,_[Ot]=b.transform,_.display="block",_.position="absolute",N.body.appendChild(E),h=Et(E,null,!1),O.svg&&(m=O.xOrigin,d=O.yOrigin,h.x-=O.xOffset,h.y-=O.yOffset,(b.transformOrigin||b.svgOrigin)&&(u={},Ft(t,rt(b.transformOrigin),u,b.svgOrigin,b.smoothOrigin,!0),m=u.xOrigin,d=u.yOrigin,h.x-=u.xOffset-O.xOffset,h.y-=u.yOffset-O.yOffset),(m||d)&&(g=Lt(E,!0),h.x-=m-(m*g[0]+d*g[2]),h.y-=d-(m*g[1]+d*g[3]))),N.body.removeChild(E),h.perspective||(h.perspective=O.perspective),null!=b.xPercent&&(h.xPercent=at(b.xPercent,O.xPercent)),null!=b.yPercent&&(h.yPercent=at(b.yPercent,O.yPercent));else if("object"==typeof b){if(h={scaleX:at(null!=b.scaleX?b.scaleX:b.scale,O.scaleX),scaleY:at(null!=b.scaleY?b.scaleY:b.scale,O.scaleY),scaleZ:at(b.scaleZ,O.scaleZ),x:at(b.x,O.x),y:at(b.y,O.y),z:at(b.z,O.z),xPercent:at(b.xPercent,O.xPercent),yPercent:at(b.yPercent,O.yPercent),perspective:at(b.transformPerspective,O.perspective)},p=b.directionalRotation,null!=p)if("object"==typeof p)for(_ in p)b[_]=p[_];else b.rotation=p;"string"==typeof b.x&&-1!==b.x.indexOf("%")&&(h.x=0,h.xPercent=at(b.x,O.xPercent)),"string"==typeof b.y&&-1!==b.y.indexOf("%")&&(h.y=0,h.yPercent=at(b.y,O.yPercent)),h.rotation=ot("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:O.rotation-O.skewY,O.rotation-O.skewY,"rotation",w),Rt&&(h.rotationX=ot("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":O.rotationX||0,O.rotationX,"rotationX",w),h.rotationY=ot("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":O.rotationY||0,O.rotationY,"rotationY",w)),h.skewX=ot(b.skewX,O.skewX-O.skewY),(h.skewY=ot(b.skewY,O.skewY))&&(h.skewX+=h.skewY,h.rotation+=h.skewY)}for(Rt&&null!=b.force3D&&(O.force3D=b.force3D,c=!0),O.skewType=b.skewType||O.skewType||a.defaultSkewType,f=O.force3D||O.z||O.rotationX||O.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,f||null==b.scale||(h.scaleZ=1);--x>-1;)i=Pt[x],u=h[i]-O[i],(u>T||-T>u||null!=b[i]||null!=I[i])&&(c=!0,n=new dt(O,i,O[i],u,n),i in w&&(n.e=w[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return u=b.transformOrigin,O.svg&&(u||b.svgOrigin)&&(m=O.xOffset,d=O.yOffset,Ft(t,rt(u),h,b.svgOrigin,b.smoothOrigin),n=gt(O,"xOrigin",(v?O:h).xOrigin,h.xOrigin,n,P),n=gt(O,"yOrigin",(v?O:h).yOrigin,h.yOrigin,n,P),(m!==O.xOffset||d!==O.yOffset)&&(n=gt(O,"xOffset",v?m:O.xOffset,O.xOffset,n,P),n=gt(O,"yOffset",v?d:O.yOffset,O.yOffset,n,P)),u=wt?null:"0px 0px"),(u||Rt&&f&&O.zOrigin)&&(Ot?(c=!0,i=kt,u=(u||Q(t,i,r,!1,"50% 50%"))+"",n=new dt(y,i,0,0,n,-1,P),n.b=y[i],n.plugin=o,Rt?(_=O.zOrigin,u=u.split(" "),O.zOrigin=(u.length>2&&(0===_||"0px"!==u[2])?parseFloat(u[2]):_)||0,
 		n.xs0=n.e=u[0]+" "+(u[1]||"50%")+" 0px",n=new dt(O,"zOrigin",0,0,n,-1,n.n),n.b=_,n.xs0=n.e=O.zOrigin):n.xs0=n.e=u):rt(u+"",O)),c&&(s._transformType=O.svg&&wt||!f&&3!==this._transformType?2:3),n},prefix:!0}),xt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),xt("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a,o){e=this.format(e);var l,h,_,u,f,c,p,m,d,g,v,y,T,x,b,w,P=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],O=t.style;for(d=parseFloat(t.offsetWidth),g=parseFloat(t.offsetHeight),l=e.split(" "),h=0;h<P.length;h++)this.p.indexOf("border")&&(P[h]=G(P[h])),f=u=Q(t,P[h],r,!1,"0px"),-1!==f.indexOf(" ")&&(u=f.split(" "),f=u[0],u=u[1]),c=_=l[h],p=parseFloat(f),y=f.substr((p+"").length),T="="===c.charAt(1),T?(m=parseInt(c.charAt(0)+"1",10),c=c.substr(2),m*=parseFloat(c),v=c.substr((m+"").length-(0>m?1:0))||""):(m=parseFloat(c),v=c.substr((m+"").length)),""===v&&(v=s[i]||y),v!==y&&(x=H(t,"borderLeft",p,y),b=H(t,"borderTop",p,y),"%"===v?(f=x/d*100+"%",u=b/g*100+"%"):"em"===v?(w=H(t,"borderLeft",1,"em"),f=x/w+"em",u=b/w+"em"):(f=x+"px",u=b+"px"),T&&(c=parseFloat(f)+m+v,_=parseFloat(u)+m+v)),a=vt(O,P[h],f+" "+u,c+" "+_,!1,"0px",a);return a},prefix:!0,formatter:ct("0px 0px 0px 0px",!1,!0)}),xt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(t,e,i,s,n,a){return vt(t.style,i,this.format(Q(t,i,r,!1,"0px 0px")),this.format(e),!1,"0px",n)},prefix:!0,formatter:ct("0px 0px",!1,!0)}),xt("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,l,h,_,u,f,c="background-position",p=r||$(t,null),d=this.format((p?m?p.getPropertyValue(c+"-x")+" "+p.getPropertyValue(c+"-y"):p.getPropertyValue(c):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&g.split(",").length<2&&(f=Q(t,"backgroundImage").replace(k,""),f&&"none"!==f)){for(o=d.split(" "),l=g.split(" "),B.setAttribute("src",f),h=2;--h>-1;)d=o[h],_=-1!==d.indexOf("%"),_!==(-1!==l[h].indexOf("%"))&&(u=0===h?t.offsetWidth-B.width:t.offsetHeight-B.height,o[h]=_?parseFloat(d)/100*u+"px":parseFloat(d)/u*100+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:rt}),xt("backgroundSize",{defaultValue:"0 0",formatter:rt}),xt("perspective",{defaultValue:"0px",prefix:!0}),xt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),xt("transformStyle",{prefix:!0}),xt("backfaceVisibility",{prefix:!0}),xt("userSelect",{prefix:!0}),xt("margin",{parser:pt("marginTop,marginRight,marginBottom,marginLeft")}),xt("padding",{parser:pt("paddingTop,paddingRight,paddingBottom,paddingLeft")}),xt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,l,h;return 9>m?(l=t.currentStyle,h=8>m?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),xt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),xt("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),xt("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){var o=Q(t,"borderTopWidth",r,!1,"0px"),l=this.format(e).split(" "),h=l[0].replace(T,"");return"px"!==h&&(o=parseFloat(o)/H(t,"borderTopWidth",1,h)+h),this.parseComplex(t.style,this.format(o+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),l.join(" "),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(ft)||["#000"])[0]}}),xt("borderWidth",{parser:pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),xt("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r,n){var a=t.style,o="cssFloat"in a?"cssFloat":"styleFloat";return new dt(a,o,0,0,r,-1,i,!1,0,a[o],e)}});var jt=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=this.s+this.c*t|0;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(w,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(x,"opacity="+r))};xt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),U?n=new dt(l,"opacity",o,e-o,n):(n=new dt(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=jt),h&&(n=new dt(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ut=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(O,"-$1").toLowerCase())):t.removeAttribute(e))},Vt=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ut(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};xt("className",{parser:function(t,e,s,n,a,o,l){var h,_,u,f,c,p=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new dt(t,s,0,0,a,2),a.setRatio=Vt,a.pr=-11,i=!0,a.b=p,_=J(t,r),u=t._gsClassPT){for(f={},c=u.data;c;)f[c.p]=1,c=c._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:p.replace(new RegExp("(?:\\s|^)"+e.substr(2)+"(?![\\w-])"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),h=tt(t,_,J(t),l,f),t.setAttribute("class",p),a.data=h.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,h.difs,a,o)}});var qt=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n,a=this.t.style,o=l.transform.parse;if("all"===this.e)a.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],l[i]&&(l[i].parse===o?r=!0:i="transformOrigin"===i?kt:l[i].p),Ut(a,i);r&&(Ut(a,Ot),n=this.t._gsTransform,n&&(n.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(xt("clearProps",{parser:function(t,e,s,r,n){return n=new dt(t,s,0,0,n,2),n.setRatio=qt,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),yt=h.length;yt--;)bt(h[yt]);h=a.prototype,h._firstPT=h._lastParsedTransform=h._transform=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=$(t,""),n=this._overwriteProps;var h,c,m,d,g,v,y,T,x,w=t.style;if(u&&""===w.zIndex&&(h=Q(t,"zIndex",r),("auto"===h||""===h)&&this._addLazySet(w,"zIndex",0)),"string"==typeof e&&(d=w.cssText,h=J(t,r),w.cssText=d+";"+e,h=tt(t,h,J(t)).difs,!U&&b.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,w.cssText=d),e.className?this._firstPT=c=l.className.parse(t,e.className,"className",this,null,null,e):this._firstPT=c=this.parse(t,e,null),this._transformType){for(x=3===this._transformType,Ot?f&&(u=!0,""===w.zIndex&&(y=Q(t,"zIndex",r),("auto"===y||""===y)&&this._addLazySet(w,"zIndex",0)),p&&this._addLazySet(w,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):w.zoom=1,m=c;m&&m._next;)m=m._next;T=new dt(t,"transform",0,0,null,2),this._linkCSSP(T,null,m),T.setRatio=Ot?Yt:Bt,T.data=this._transform||Et(t,r,!0),T.tween=o,T.pr=-1,n.pop()}if(i){for(;c;){for(v=c._next,m=d;m&&m.pr>c.pr;)m=m._next;(c._prev=m?m._prev:g)?c._prev._next=c:d=c,(c._next=m)?m._prev=c:g=c,c=v}this._firstPT=d}return!0},h.parse=function(t,e,i,n){var a,o,h,u,f,c,p,m,d,g,v=t.style;for(a in e)c=e[a],o=l[a],o?i=o.parse(t,c,a,this,i,n,e):(f=Q(t,a,r)+"",d="string"==typeof c,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(c)?(d||(c=_t(c),c=(c.length>3?"rgba(":"rgb(")+c.join(",")+")"),i=vt(v,a,f,c,!0,"transparent",i,0,n)):d&&z.test(c)?i=vt(v,a,f,c,!0,null,i,0,n):(h=parseFloat(f),p=h||0===h?f.substr((h+"").length):"",(""===f||"auto"===f)&&("width"===a||"height"===a?(h=st(t,a,r),p="px"):"left"===a||"top"===a?(h=K(t,a,r),p="px"):(h="opacity"!==a?0:1,p="")),g=d&&"="===c.charAt(1),g?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),m=c.replace(T,"")):(u=parseFloat(c),m=d?c.replace(T,""):""),""===m&&(m=a in s?s[a]:p),c=u||0===u?(g?u+h:u)+m:e[a],p!==m&&""!==m&&(u||0===u)&&h&&(h=H(t,a,h,p),"%"===m?(h/=H(t,a,100,"%")/100,e.strictUnits!==!0&&(f=h+"%")):"em"===m||"rem"===m||"vw"===m||"vh"===m?h/=H(t,a,1,m):"px"!==m&&(u=H(t,a,u,m),m="px"),g&&(u||0===u)&&(c=u+h+m)),g&&(u+=h),!h&&0!==h||!u&&0!==u?void 0!==v[a]&&(c||c+""!="NaN"&&null!=c)?(i=new dt(v,a,u||h||0,0,i,-1,a,!1,0,f,c),i.xs0="none"!==c||"display"!==a&&-1===a.indexOf("Style")?c:f):q("invalid "+a+" tween value: "+e[a]):(i=new dt(v,a,h,u-h,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,f,c),i.xs0=m))),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;s<r.l;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;){if(2!==r.type)if(r.r&&-1!==r.type)if(e=Math.round(r.s+r.c),r.type){if(1===r.type){for(s=r.l,i=r.xs0+e+r.xs1,s=1;s<r.l;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}}else r.t[r.p]=e+r.xs0;else r.t[r.p]=r.e;else r.setRatio(t);r=r._next}},h._enableTransforms=function(t){this._transform=this._transform||Et(this._target,r,!0),this._transformType=this._transform.svg&&wt||!t&&3!==this._transformType?2:3};var Wt=function(t){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var s=this._firstPT=new dt(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Wt,s.data=this},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Zt=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)Zt(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(J(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Zt(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o,l=e.to(t,i,s),h=[l],_=[],u=[],f=[],c=e._internals.reservedProps;for(t=l._targets||l.target,Zt(t,_,f),l.render(i,!0,!0),Zt(t,u),l.render(0,!0,!0),l._enabled(!0),r=f.length;--r>-1;)if(n=tt(f[r],_[r],u[r]),n.firstMPT){n=n.difs;for(a in s)c[a]&&(n[a]=s[a]);o={};for(a in n)o[a]=_[r][a];h.push(e.fromTo(f[r],i,o,n))}return h},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=function(t){for(;t;)t.f||t.blob||(t.r=1),t=t._next},i=t.prototype;i._onInitAllProps=function(){for(var t,i,s,r=this._tween,n=r.vars.roundProps.join?r.vars.roundProps:r.vars.roundProps.split(","),a=n.length,o={},l=r._propLookup.roundProps;--a>-1;)o[n[a]]=1;for(a=n.length;--a>-1;)for(t=n[a],i=r._firstPT;i;)s=i._next,i.pg?i.t._roundProps(o,!0):i.n===t&&(2===i.f&&i.t?e(i.t._firstPT):(this._add(i.t,t,i.s,i.c),s&&(s._prev=i._prev),i._prev?i._prev._next=s:r._firstPT===i&&(r._firstPT=s),i._next=i._prev=null,r._propLookup[t]=l)),i=s;return!1},i._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function(t,e,i){var s;if("function"!=typeof t.setAttribute)return!1;for(s in e)this._addTween(t,"setAttribute",t.getAttribute(s)+"",e[s]+"",s,!1,s),this._overwriteProps.push(s);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e,i){"object"!=typeof e&&(e={rotation:e}),this.finals={};var s,r,n,a,o,l,h=e.useRadians===!0?2*Math.PI:360,_=1e-6;for(s in e)"useRadians"!==s&&(l=(e[s]+"").split("_"),r=l[0],n=parseFloat("function"!=typeof t[s]?t[s]:t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]()),a=this.finals[s]="string"==typeof r&&"="===r.charAt(1)?n+parseInt(r.charAt(0)+"1",10)*Number(r.substr(2)):Number(r)||0,o=a-n,l.length&&(r=l.join("_"),-1!==r.indexOf("short")&&(o%=h,o!==o%(h/2)&&(o=0>o?o+h:o-h)),-1!==r.indexOf("_cw")&&0>o?o=(o+9999999999*h)%h-(o/h|0)*h:-1!==r.indexOf("ccw")&&o>0&&(o=(o-9999999999*h)%h-(o/h|0)*h)),(o>_||-_>o)&&(this._addTween(t,s,n,n+o,s),this._overwriteProps.push(s)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,l=n._class,h=function(e,i){var s=l("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s,r){var n=l("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(n,t),n},f=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},c=function(e,i){var s=l("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",c("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),c("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),c("BackInOut",function(t){return(t*=2)<1?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=l("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return t<this._p1?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=l("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=l("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,l=e.taper||"none",h=[],_=0,u=0|(e.points||20),c=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--c>-1;)i=p?Math.random():1/u*c,s=d?d.getRatio(i):i,"none"===l?r=g:"out"===l?(n=1-i,r=n*n*g):"in"===l?r=i*i*g:.5>i?(n=2*i,r=n*n*.5*g):(n=2*(1-i),r=n*n*.5*g),p?s+=Math.random()*r-.5*r:c%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),h[_++]={x:i,y:s};for(h.sort(function(t,e){return t.x-e.x}),o=new f(1,1,null),c=u;--c>-1;)a=h[c],o=new f(a.x,a.y,o);this._prev=new f(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&t<=e.t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",h("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),h("BounceIn",function(t){return(t=1-t)<1/2.75?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),h("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",h("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),h("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),h("CircInOut",function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=l("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return(t*=2)<1?-.5*(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)*.5+1},.45)),u("Expo",h("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),h("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),h("ExpoInOut",function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",h("SineOut",function(t){return Math.sin(t*o)}),h("SineIn",function(t){return-Math.cos(t*o)+1}),h("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),l("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i={},s=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!s.TweenLite){var r,n,a,o,l,h=function(t){var e,i=t.split("."),r=s;for(e=0;e<i.length;e++)r[i[e]]=r=r[i[e]]||{};return r},_=h("com.greensock"),u=1e-10,f=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},c=function(){},p=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),m={},d=function(r,n,a,o){this.sc=m[r]?m[r].sc:[],m[r]=this,this.gsClass=null,this.func=a;var l=[];this.check=function(_){for(var u,f,c,p,g,v=n.length,y=v;--v>-1;)(u=m[n[v]]||new d(n[v],[])).gsClass?(l[v]=u.gsClass,y--):_&&u.sc.push(this);if(0===y&&a){if(f=("com.greensock."+r).split("."),c=f.pop(),p=h(f.join("."))[c]=this.gsClass=a.apply(a,l),o)if(s[c]=p,g="undefined"!=typeof module&&module.exports,!g&&"function"==typeof define&&define.amd)define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+r.split(".").pop(),[],function(){return p});else if(g)if(r===e){module.exports=i[e]=p;for(v in i)p[v]=i[v]}else i[e]&&(i[e][c]=p);for(v=0;v<this.sc.length;v++)this.sc[v].check()}},this.check(!0)},g=t._gsDefine=function(t,e,i,s){return new d(t,e,i,s)},v=_._class=function(t,e,i){return e=e||function(){},g(t,[],function(){return e},i),e};g.globals=s;var y=[0,0,1,1],T=[],x=v("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?y.concat(e):y},!0),b=x.map={},w=x.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),h=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--h>-1;)for(n=l[h],r=s?v("easing."+n,null,!0):_.easing[n]||{},a=u.length;--a>-1;)o=u[a],b[n+"."+o]=b[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(a=x.prototype,a._calcEnd=!1,a.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},r=["Linear","Quad","Cubic","Quart","Quint,Strong"],n=r.length;--n>-1;)a=r[n]+",Power"+n,w(new x(null,null,1,n),a,"easeOut",!0),w(new x(null,null,2,n),a,"easeIn"+(0===n?",easeNone":"")),w(new x(null,null,3,n),a,"easeInOut");b.linear=_.easing.Linear.easeIn,b.swing=_.easing.Quad.easeInOut;var P=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});a=P.prototype,a.addEventListener=function(t,e,i,s,r){r=r||0;var n,a,h=this._listeners[t],_=0;for(this!==o||l||o.wake(),null==h&&(this._listeners[t]=h=[]),a=h.length;--a>-1;)n=h[a],n.c===e&&n.s===i?h.splice(a,1):0===_&&n.pr<r&&(_=a+1);h.splice(_,0,{c:e,s:i,up:s,pr:r})},a.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return void s.splice(i,1)},a.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var O=t.requestAnimationFrame,S=t.cancelAnimationFrame,k=Date.now||function(){return(new Date).getTime()},R=k();for(r=["ms","moz","webkit","o"],n=r.length;--n>-1&&!O;)O=t[r[n]+"RequestAnimationFrame"],S=t[r[n]+"CancelAnimationFrame"]||t[r[n]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,s,r,n,a,h=this,_=k(),f=e!==!1&&O?"auto":!1,p=500,m=33,d="tick",g=function(t){var e,o,l=k()-R;l>p&&(_+=l-m),R+=l,h.time=(R-_)/1e3,e=h.time-a,(!i||e>0||t===!0)&&(h.frame++,a+=e+(e>=n?.004:n-e),o=!0),t!==!0&&(r=s(g)),o&&h.dispatchEvent(d)};P.call(h),h.time=h.frame=0,h.tick=function(){g(!0)},h.lagSmoothing=function(t,e){p=t||1/u,m=Math.min(e,p,0)},h.sleep=function(){null!=r&&(f&&S?S(r):clearTimeout(r),s=c,r=null,h===o&&(l=!1))},h.wake=function(t){null!==r?h.sleep():t?_+=-R+(R=k()):h.frame>10&&(R=k()-p+5),s=0===i?c:f&&O?O:function(t){return setTimeout(t,1e3*(a-h.time)+1|0)},h===o&&(l=!0),g(2)},h.fps=function(t){return arguments.length?(i=t,n=1/(i||60),a=this.time+n,void h.wake()):i},h.useRAF=function(t){return arguments.length?(h.sleep(),f=t,void h.fps(i)):f},h.fps(t),setTimeout(function(){"auto"===f&&h.frame<5&&"hidden"!==document.visibilityState&&h.useRAF(!1)},1500)}),a=_.Ticker.prototype=new _.events.EventDispatcher,a.constructor=_.Ticker;var A=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,G){l||o.wake();var i=this.vars.useFrames?Z:G;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});o=A.ticker=new _.Ticker,a=A.prototype,a._dirty=a._gc=a._initted=a._paused=!1,a._totalTime=a._time=0,a._rawPrevTime=-1,a._next=a._last=a._onUpdate=a._timeline=a.timeline=null,a._paused=!1;var C=function(){l&&k()-R>2e3&&o.wake(),setTimeout(C,2e3)};C(),a.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},a.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},a.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},a.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},a.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},a.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},a.render=function(t,e,i){},a.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},a.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&t<i+this.totalDuration()/this._timeScale},a._enabled=function(t,e){return l||o.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},a._kill=function(t,e){return this._enabled(!1,!1)},a.kill=function(t,e){return this._kill(t,e),this},a._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},a._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},a._callback=function(t){var e=this.vars;e[t].apply(e[t+"Scope"]||e.callbackScope||this,e[t+"Params"]||T)},a.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=p(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},a.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},a.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},a.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},a.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},a.totalTime=function(t,e,i){if(l||o.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(X.length&&Q(),this.render(t,e,!1),X.length&&Q())}return this},a.progress=a.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},a.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},a.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},a.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||u,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},a.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},a.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(l||t||o.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&(e=s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var D=v("core.SimpleTimeline",function(t){A.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});a=D.prototype=new A,a.constructor=D,a.kill()._gc=!1,a._first=a._last=a._recent=null,a._sortChildren=!1,a.add=a.insert=function(t,e,i,s){var r,n;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),r=this._last,this._sortChildren)for(n=t._startTime;r&&r._startTime>n;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=r,this._recent=t,this._timeline&&this._uncache(!0),this},a._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},a.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},a.rawTime=function(){return l||o.wake(),this._totalTime};var M=v("TweenLite",function(e,i,s){if(A.call(this,i,s),this.render=M.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:M.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?W[M.defaultOverwrite]:"number"==typeof l?l>>0:W[l],(o||e instanceof Array||e.push&&p(e))&&"number"!=typeof e[0])for(this._targets=a=f(e),this._propLookup=[],this._siblings=[],r=0;r<a.length;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(f(n))):(this._siblings[r]=H(n,this,!1),1===l&&this._siblings[r].length>1&&J(n,this,null,1,this._siblings[r])):(n=a[r--]=M.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=H(e,this,!1),1===l&&this._siblings.length>1&&J(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-u,this.render(Math.min(0,-this._delay)))},!0),z=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},F=function(t,e){var i,s={};for(i in t)q[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!j[i]||j[i]&&j[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};a=M.prototype=new A,a.constructor=M,a.kill()._gc=!1,a.ratio=0,a._firstPT=a._targets=a._overwrittenProps=a._startAt=null,a._notifyPluginsOfEnabled=a._lazy=!1,M.version="1.18.5",M.defaultEase=a._ease=new x(null,null,1,1),M.defaultOverwrite="auto",M.ticker=o,M.autoSleep=120,M.lagSmoothing=function(t,e){o.lagSmoothing(t,e)},M.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(M.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var X=[],I={},N=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.blob?t?this.join(""):this.start:i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},E=function(t,e,i,s){var r,n,a,o,l,h,_,u=[t,e],f=0,c="",p=0;for(u.start=t,i&&(i(u),t=u[0],e=u[1]),u.length=0,r=t.match(N)||[],n=e.match(N)||[],s&&(s._next=null,
 		s.blob=1,u._firstPT=s),l=n.length,o=0;l>o;o++)_=n[o],h=e.substr(f,e.indexOf(_,f)-f),c+=h||!o?h:",",f+=h.length,p?p=(p+1)%5:"rgba("===h.substr(-5)&&(p=1),_===r[o]||r.length<=o?c+=_:(c&&(u.push(c),c=""),a=parseFloat(r[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*parseFloat(_.substr(2)):parseFloat(_)-a)||0,f:0,r:p&&4>p}),f+=_.length;return c+=e.substr(f),c&&u.push(c),u.setRatio=L,u},B=function(t,e,i,s,r,n,a,o){var l,h,_="get"===i?t[e]:i,u=typeof t[e],f="string"==typeof s&&"="===s.charAt(1),c={t:t,p:e,s:_,f:"function"===u,pg:0,n:r||e,r:n,pr:0,c:f?parseInt(s.charAt(0)+"1",10)*parseFloat(s.substr(2)):parseFloat(s)-_||0};return"number"!==u&&("function"===u&&"get"===i&&(h=e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),c.s=_=a?t[h](a):t[h]()),"string"==typeof _&&(a||isNaN(_))?(c.fp=a,l=E(_,s,o||M.defaultStringFilter,c),c={t:l,p:"setRatio",s:0,c:1,f:2,pg:0,n:r||e,pr:0}):f||(c.s=parseFloat(_),c.c=parseFloat(s)-c.s||0)),c.c?((c._next=this._firstPT)&&(c._next._prev=c),this._firstPT=c,c):void 0},Y=M._internals={isArray:p,isSelector:z,lazyTweens:X,blobDif:E},j=M._plugins={},U=Y.tweenLookup={},V=0,q=Y.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},W={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},Z=A._rootFramesTimeline=new D,G=A._rootTimeline=new D,$=30,Q=Y.lazyRender=function(){var t,e=X.length;for(I={};--e>-1;)t=X[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);X.length=0};G._startTime=o.time,Z._startTime=o.frame,G._active=Z._active=!0,setTimeout(Q,1),A._updateRoot=M.render=function(){var t,e,i;if(X.length&&Q(),G.render((o.time-G._startTime)*G._timeScale,!1,!1),Z.render((o.frame-Z._startTime)*Z._timeScale,!1,!1),X.length&&Q(),o.frame>=$){$=o.frame+(parseInt(M.autoSleep,10)||120);for(i in U){for(e=U[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete U[i]}if(i=G._first,(!i||i._paused)&&M.autoSleep&&!Z._first&&1===o._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||o.sleep()}}},o.addEventListener("tick",A._updateRoot);var H=function(t,e,i){var s,r,n=t._gsTweenID;if(U[n||(t._gsTweenID=n="t"+V++)]||(U[n]={target:t,tweens:[]}),e&&(s=U[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return U[n].tweens},K=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=M.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},J=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var h,_=e._startTime+u,f=[],c=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||tt(e,0,p),0===tt(o,h,p)&&(f[c++]=o)):o._startTime<=_&&o._startTime+o.totalDuration()/o._timeScale>_&&((p||!o._initted)&&_-o._startTime<=2e-10||(f[c++]=o)));for(n=c;--n>-1;)if(o=f[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!K(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},tt=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*u>n-e?u:(n+=t.totalDuration()/t._timeScale/r)>e+u?0:n-e-u};a._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,l=!!n.immediateRender,h=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=l&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=M.to(this.target,0,r),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(s in n)q[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&n.lazy!==!1,i.immediateRender=l,this._startAt=M.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof x?h:"function"==typeof h?new x(h,n.easeParams):b[h]||M.defaultEase:M.defaultEase,n.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&M._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},a._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;I[e._gsTweenID]&&Q(),this.vars.css||e.style&&e!==t&&e.nodeType&&j.css&&this.vars.autoCSS!==!1&&F(this.vars,e);for(n in this.vars)if(_=this.vars[n],q[n])_&&(_ instanceof Array||_.push&&p(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(j[n]&&(l=new j[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:1,n:n,pg:1,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0),h._next&&(h._next._prev=h)}else i[n]=B.call(this,e,n,"get",_,n,0,null,this.vars.stringFilter);return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&J(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(I[e._gsTweenID]=!0),o)},a.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l-1e-7)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0>h||0>=t&&t>=-1e-7||h===u&&"isPause"!==this.data)&&h!==t&&(i=!0,h>u&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:u);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(h!==u||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:u)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/l,f=this._easeType,c=this._easePower;(1===f||3===f&&_>=.5)&&(_=1-_),3===f&&(_*=2),1===c?_*=_:2===c?_*=_*_:3===c?_*=_*_*_:4===c&&(_*=_*_*_*_),1===f?this.ratio=1-_:2===f?this.ratio=_:.5>t/l?this.ratio=_/2:this.ratio=1-_/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,X.push(this),void(this._lazy=[t,e]);this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s||i)&&this._callback("onUpdate")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===l&&this._rawPrevTime===u&&a!==u&&(this._rawPrevTime=0))}},a._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:M.selector(e)||e;var s,r,n,a,o,l,h,_,u,f=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((p(e)||z(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(M.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u||(u=[]),u.push(n));if((u||!t)&&!K(this,i,e,u))return!1}for(n in h)(a=o[n])&&(f&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},a.invalidate=function(){return this._notifyPluginsOfEnabled&&M._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],A.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-u,this.render(Math.min(0,-this._delay))),this},a._enabled=function(t,e){if(l||o.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=H(s[i],this,!0);else this._siblings=H(this.target,this,!0)}return A.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?M._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},M.to=function(t,e,i){return new M(t,e,i)},M.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new M(t,e,i)},M.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new M(t,e,s)},M.delayedCall=function(t,e,i,s,r){return new M(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},M.set=function(t,e){return new M(t,0,e)},M.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:M.selector(t)||t;var i,s,r,n;if((p(t)||z(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(M.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=H(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},M.killTweensOf=M.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=M.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var et=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=et.prototype},!0);if(a=et.prototype,et.version="1.18.0",et.API=2,a._firstPT=null,a._addTween=B,a.setRatio=L,a._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},a._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},M._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},et.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===et.API&&(j[(new t[e])._propName]=t[e]);return!0},g.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){et.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new et(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,et.activate([a]),a},r=t._gsQueue){for(n=0;n<r.length;n++)r[n]();for(a in m)m[a].func||t.console.log("GSAP encountered missing dependency: com.greensock."+a)}l=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");








/*!
 * VERSION: 0.14.1
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 *draggable
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
 var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite","plugins.CSSPlugin"],function(t,e,i){var r,s,n,a,o,l,h,u,_={css:{}},c={css:{}},f={css:{}},p={css:{}},d=_gsScope._gsDefine.globals,m={},g=document,v=g.documentElement||{},y=function(t){return g.createElementNS?g.createElementNS("http://www.w3.org/1999/xhtml",t):g.createElement(t)},T=y("div"),x=[],w=function(){return!1},b=180/Math.PI,P=999999999999999,S=Date.now||function(){return(new Date).getTime()},k=!(g.addEventListener||!g.all),C=g.createElement("div"),R=[],O={},A=0,D=/^(?:a|input|textarea|button|select)$/i,M=0,L=-1!==navigator.userAgent.toLowerCase().indexOf("android"),N=0,F={},E={},I=function(t){if("string"==typeof t&&(t=e.selector(t)),!t||t.nodeType)return[t];var i,r=[],s=t.length;for(i=0;i!==s;r.push(t[i++]));return r},z=function(){for(var t=R.length;--t>-1;)R[t]()},X=function(t){R.push(t),1===R.length&&e.ticker.addEventListener("tick",z,this,!1,1)},B=function(t){for(var i=R.length;--i>-1;)R[i]===t&&R.splice(i,1);e.to(Y,0,{overwrite:"all",delay:15,onComplete:Y})},Y=function(){R.length||e.ticker.removeEventListener("tick",z)},W=function(t,e){var i;for(i in e)void 0===t[i]&&(t[i]=e[i]);return t},j=function(){return null!=window.pageYOffset?window.pageYOffset:null!=g.scrollTop?g.scrollTop:v.scrollTop||g.body.scrollTop||0},U=function(){return null!=window.pageXOffset?window.pageXOffset:null!=g.scrollLeft?g.scrollLeft:v.scrollLeft||g.body.scrollLeft||0},V=function(t,e){Me(t,"scroll",e),q(t.parentNode)||V(t.parentNode,e)},G=function(t,e){Le(t,"scroll",e),q(t.parentNode)||G(t.parentNode,e)},q=function(t){return!(t&&t!==v&&t!==g&&t!==g.body&&t!==window&&t.nodeType&&t.parentNode)},H=function(t,e){var i="x"===e?"Width":"Height",r="scroll"+i,s="client"+i,n=g.body;return Math.max(0,q(t)?Math.max(v[r],n[r])-(window["inner"+i]||v[s]||n[s]):t[r]-t[s])},Q=function(t){var e=q(t),i=H(t,"x"),r=H(t,"y");e?t=E:Q(t.parentNode),t._gsMaxScrollX=i,t._gsMaxScrollY=r,t._gsScrollX=t.scrollLeft||0,t._gsScrollY=t.scrollTop||0},Z=function(t,e){return t=t||window.event,m.pageX=t.clientX+g.body.scrollLeft+v.scrollLeft,m.pageY=t.clientY+g.body.scrollTop+v.scrollTop,e&&(t.returnValue=!1),m},$=function(t){return t?("string"==typeof t&&(t=e.selector(t)),t.length&&t!==window&&t[0]&&t[0].style&&!t.nodeType&&(t=t[0]),t===window||t.nodeType&&t.style?t:null):t},K=function(t,e){var i,s,n,a=t.style;if(void 0===a[e]){for(n=["O","Moz","ms","Ms","Webkit"],s=5,i=e.charAt(0).toUpperCase()+e.substr(1);--s>-1&&void 0===a[n[s]+i];);if(0>s)return"";r=3===s?"ms":n[s],e=r+i}return e},J=function(t,e,i){var r=t.style;r&&(void 0===r[e]&&(e=K(t,e)),null==i?r.removeProperty?r.removeProperty(e.replace(/([A-Z])/g,"-$1").toLowerCase()):r.removeAttribute(e):void 0!==r[e]&&(r[e]=i))},te=g.defaultView?g.defaultView.getComputedStyle:w,ee=/(?:Left|Right|Width)/i,ie=/(?:\d|\-|\+|=|#|\.)*/g,re=function(t,e,i,r,s){if("px"===r||!r)return i;if("auto"===r||!i)return 0;var n,a=ee.test(e),o=t,l=T.style,h=0>i;return h&&(i=-i),"%"===r&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(l.cssText="border:0 solid red;position:"+ne(t,"position",!0)+";line-height:0;","%"!==r&&o.appendChild?l[a?"borderLeftWidth":"borderTopWidth"]=i+r:(o=t.parentNode||g.body,l[a?"width":"height"]=i+r),o.appendChild(T),n=parseFloat(T[a?"offsetWidth":"offsetHeight"]),o.removeChild(T),0!==n||s||(n=re(t,e,i,r,!0))),h?-n:n},se=function(t,e){if("absolute"!==ne(t,"position",!0))return 0;var i="left"===e?"Left":"Top",r=ne(t,"margin"+i,!0);return t["offset"+i]-(re(t,e,parseFloat(r),(r+"").replace(ie,""))||0)},ne=function(t,e,i){var r,s=(t._gsTransform||{})[e];return s||0===s?s:(t.style[e]?s=t.style[e]:(r=te(t))?(s=r.getPropertyValue(e.replace(/([A-Z])/g,"-$1").toLowerCase()),s=s||r.length?s:r[e]):t.currentStyle&&(s=t.currentStyle[e]),"auto"!==s||"top"!==e&&"left"!==e||(s=se(t,e)),i?s:parseFloat(s)||0)},ae=function(t,e,i){var r=t.vars,s=r[i],n=t._listeners[e];"function"==typeof s&&s.apply(r[i+"Scope"]||r.callbackScope||t,r[i+"Params"]||[t.pointerEvent]),n&&t.dispatchEvent(e)},oe=function(t,e){var i,r,s,n=$(t);return n?Ce(n,e):void 0!==t.left?(s=xe(e),{left:t.left-s.x,top:t.top-s.y,width:t.width,height:t.height}):(r=t.min||t.minX||t.minRotation||0,i=t.min||t.minY||0,{left:r,top:i,width:(t.max||t.maxX||t.maxRotation||0)-r,height:(t.max||t.maxY||0)-i})},le=function(){if(!g.createElementNS)return a=0,o=!1,void 0;var t,e,i,r,s=y("div"),n=g.createElementNS("http://www.w3.org/2000/svg","svg"),u=y("div"),_=s.style,c=g.body||v;g.body&&_e&&(_.position=u.style.position="absolute",c.appendChild(u),u.appendChild(s),_.height="10px",r=s.offsetTop,u.style.border="5px solid red",h=r!==s.offsetTop,c.removeChild(u)),_=n.style,n.setAttributeNS(null,"width","400px"),n.setAttributeNS(null,"height","400px"),n.setAttributeNS(null,"viewBox","0 0 400 400"),_.display="block",_.boxSizing="border-box",_.border="0px solid red",_.transform="none",s.style.cssText="width:100px;height:100px;overflow:scroll",c.appendChild(s),s.appendChild(n),i=n.createSVGPoint().matrixTransform(n.getScreenCTM()),e=i.y,s.scrollTop=100,i.x=i.y=0,i=i.matrixTransform(n.getScreenCTM()),l=100.1>e-i.y?0:e-i.y-150,s.removeChild(n),c.removeChild(s),c.appendChild(n),t=n.getScreenCTM(),e=t.e,_.border="50px solid red",t=n.getScreenCTM(),0===e&&0===t.e&&0===t.f&&1===t.a?(a=1,o=!0):(a=e!==t.e?1:0,o=1!==t.a),c.removeChild(n)},he=""!==K(T,"perspective"),ue=K(T,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),_e=K(T,"transform"),ce=_e.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),fe={},pe={},de=window.SVGElement,me=function(t){return!!(de&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},ge=(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent))&&11>parseFloat(RegExp.$1),ve=[],ye=[],Te=function(t){if(!t.getBoundingClientRect||!t.parentNode||!_e)return{offsetTop:0,offsetLeft:0,scaleX:1,scaleY:1,offsetParent:v};if(We.cacheSVGData!==!1&&t._gsCache&&t._gsCache.lastUpdate===e.ticker.frame)return t._gsCache;var i,r,s,n,h,u,_,c,f,p,d,m,y=t,T=we(t);if(T.lastUpdate=e.ticker.frame,t.getBBox&&!T.isSVGRoot){for(y=t.parentNode,i=t.getBBox();y&&"svg"!==(y.nodeName+"").toLowerCase();)y=y.parentNode;return n=Te(y),T.offsetTop=i.y*n.scaleY,T.offsetLeft=i.x*n.scaleX,T.scaleX=n.scaleX,T.scaleY=n.scaleY,T.offsetParent=y||v,T}for(s=T.offsetParent,s===g.body&&(s=v),ye.length=ve.length=0;y&&(h=ne(y,_e,!0),"matrix(1, 0, 0, 1, 0, 0)"!==h&&"none"!==h&&"translate3d(0px, 0px, 0px)"!==h&&(ye.push(y),ve.push(y.style[_e]),y.style[_e]="none"),y!==s);)y=y.parentNode;for(r=s.getBoundingClientRect(),h=t.getScreenCTM(),c=t.createSVGPoint(),_=c.matrixTransform(h),c.x=c.y=10,c=c.matrixTransform(h),T.scaleX=(c.x-_.x)/10,T.scaleY=(c.y-_.y)/10,void 0===a&&le(),T.borderBox&&!o&&t.getAttribute("width")&&(n=te(t)||{},f=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth)||0,p=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)||0,d=parseFloat(n.width)||0,m=parseFloat(n.height)||0,T.scaleX*=(d-f)/d,T.scaleY*=(m-p)/m),l?(i=t.getBoundingClientRect(),T.offsetLeft=i.left-r.left,T.offsetTop=i.top-r.top):(T.offsetLeft=_.x-r.left,T.offsetTop=_.y-r.top),T.offsetParent=s,u=ye.length;--u>-1;)ye[u].style[_e]=ve[u];return T},xe=function(t,i){if(i=i||{},!t||t===v||!t.parentNode||t===window)return{x:0,y:0};var r=te(t),s=ue&&r?r.getPropertyValue(ue):"50% 50%",n=s.split(" "),a=-1!==s.indexOf("left")?"0%":-1!==s.indexOf("right")?"100%":n[0],o=-1!==s.indexOf("top")?"0%":-1!==s.indexOf("bottom")?"100%":n[1];return("center"===o||null==o)&&(o="50%"),("center"===a||isNaN(parseFloat(a)))&&(a="50%"),t.getBBox&&me(t)?(t._gsTransform||(e.set(t,{x:"+=0",overwrite:!1}),void 0===t._gsTransform.xOrigin&&console.log("Draggable requires at least GSAP 1.17.0")),s=t.getBBox(),i.x=t._gsTransform.xOrigin-s.x,i.y=t._gsTransform.yOrigin-s.y):(t.getBBox&&!t.offsetWidth&&-1!==(a+o).indexOf("%")&&(t=t.getBBox(),t={offsetWidth:t.width,offsetHeight:t.height}),i.x=-1!==a.indexOf("%")?t.offsetWidth*parseFloat(a)/100:parseFloat(a),i.y=-1!==o.indexOf("%")?t.offsetHeight*parseFloat(o)/100:parseFloat(o)),i},we=function(t){if(We.cacheSVGData!==!1&&t._gsCache&&t._gsCache.lastUpdate===e.ticker.frame)return t._gsCache;var i,r=t._gsCache=t._gsCache||{},s=te(t),n=t.getBBox&&me(t),a="svg"===(t.nodeName+"").toLowerCase();if(r.isSVG=n,r.isSVGRoot=a,r.borderBox="border-box"===s.boxSizing,r.computedStyle=s,a)(r.offsetParent=t.offsetParent)||(i=t.parentNode||v,i.insertBefore(T,t),r.offsetParent=T.offsetParent||v,i.removeChild(T));else if(n){for(i=t.parentNode;i&&"svg"!==(i.nodeName+"").toLowerCase();)i=i.parentNode;r.offsetParent=i}return r},be=function(t,e,i,r){if(t===window||!t||!t.style||!t.parentNode)return[1,0,0,1,0,0];var s,n,o,l,u,_,c,f,p,d,m,y,T,x,w=t._gsCache||we(t),b=t.parentNode,P=b._gsCache||we(b),S=w.computedStyle,k=w.isSVG?P.offsetParent:b.offsetParent;return s=w.isSVG&&-1!==(t.style[_e]+"").indexOf("matrix")?t.style[_e]:S?S.getPropertyValue(ce):t.currentStyle?t.currentStyle[_e]:"1,0,0,1,0,0",t.getBBox&&-1!==(t.getAttribute("transform")+"").indexOf("matrix")&&(s=t.getAttribute("transform")),s=(s+"").match(/(?:\-|\b)[\d\-\.e]+\b/g)||[1,0,0,1,0,0],s.length>6&&(s=[s[0],s[1],s[4],s[5],s[12],s[13]]),r?s[4]=s[5]=0:w.isSVG&&(u=t._gsTransform)&&(u.xOrigin||u.yOrigin)&&(s[0]=parseFloat(s[0]),s[1]=parseFloat(s[1]),s[2]=parseFloat(s[2]),s[3]=parseFloat(s[3]),s[4]=parseFloat(s[4])-(u.xOrigin-(u.xOrigin*s[0]+u.yOrigin*s[2])),s[5]=parseFloat(s[5])-(u.yOrigin-(u.xOrigin*s[1]+u.yOrigin*s[3]))),e&&(void 0===a&&le(),o=w.isSVG||w.isSVGRoot?Te(t):t,w.isSVG?(l=t.getBBox(),d=P.isSVGRoot?{x:0,y:0}:b.getBBox(),o={offsetLeft:l.x-d.x,offsetTop:l.y-d.y,offsetParent:w.offsetParent}):w.isSVGRoot?(m=parseInt(S.borderTopWidth,10)||0,y=parseInt(S.borderLeftWidth,10)||0,T=(s[0]-a)*y+s[2]*m,x=s[1]*y+(s[3]-a)*m,_=e.x,c=e.y,f=_-(_*s[0]+c*s[2]),p=c-(_*s[1]+c*s[3]),s[4]=parseFloat(s[4])+f,s[5]=parseFloat(s[5])+p,e.x-=f,e.y-=p,_=o.scaleX,c=o.scaleY,e.x*=_,e.y*=c,s[0]*=_,s[1]*=c,s[2]*=_,s[3]*=c,ge||(e.x+=T,e.y+=x)):!h&&t.offsetParent&&(e.x+=parseInt(ne(t.offsetParent,"borderLeftWidth"),10)||0,e.y+=parseInt(ne(t.offsetParent,"borderTopWidth"),10)||0),n=b===v||b===g.body,s[4]=Number(s[4])+e.x+(o.offsetLeft||0)-i.x-(n?0:b.scrollLeft||0),s[5]=Number(s[5])+e.y+(o.offsetTop||0)-i.y-(n?0:b.scrollTop||0),b&&"fixed"===ne(t,"position",S)&&(s[4]+=U(),s[5]+=j()),b&&b!==v&&k===o.offsetParent&&(s[4]-=b.offsetLeft||0,s[5]-=b.offsetTop||0,h||!b.offsetParent||w.isSVG||w.isSVGRoot||(s[4]-=parseInt(ne(b.offsetParent,"borderLeftWidth"),10)||0,s[5]-=parseInt(ne(b.offsetParent,"borderTopWidth"),10)||0))),s},Pe=function(t,e){if(!t||t===window||!t.parentNode)return[1,0,0,1,0,0];for(var i,r,s,n,a,o,l,h,u=xe(t,fe),_=xe(t.parentNode,pe),c=be(t,u,_);(t=t.parentNode)&&t.parentNode&&t!==v;)u=_,_=xe(t.parentNode,u===fe?pe:fe),l=be(t,u,_),i=c[0],r=c[1],s=c[2],n=c[3],a=c[4],o=c[5],c[0]=i*l[0]+r*l[2],c[1]=i*l[1]+r*l[3],c[2]=s*l[0]+n*l[2],c[3]=s*l[1]+n*l[3],c[4]=a*l[0]+o*l[2]+l[4],c[5]=a*l[1]+o*l[3]+l[5];return e&&(i=c[0],r=c[1],s=c[2],n=c[3],a=c[4],o=c[5],h=i*n-r*s,c[0]=n/h,c[1]=-r/h,c[2]=-s/h,c[3]=i/h,c[4]=(s*o-n*a)/h,c[5]=-(i*o-r*a)/h),c},Se=function(t,e,i,r,s){t=$(t);var n=Pe(t,!1,s),a=e.x,o=e.y;return i&&(xe(t,e),a-=e.x,o-=e.y),r=r===!0?e:r||{},r.x=a*n[0]+o*n[2]+n[4],r.y=a*n[1]+o*n[3]+n[5],r},ke=function(t,e,i){var r=t.x*e[0]+t.y*e[2]+e[4],s=t.x*e[1]+t.y*e[3]+e[5];return t.x=r*i[0]+s*i[2]+i[4],t.y=r*i[1]+s*i[3]+i[5],t},Ce=function(t,e,i){if(!(t=$(t)))return null;e=$(e);var r,s,n,a,o,l,h,u,_,c,f,p,d,m,y,T,x,w,b,P,S,C,R=t.getBBox&&me(t);if(t===window)a=j(),s=U(),n=s+(v.clientWidth||t.innerWidth||g.body.clientWidth||0),o=a+((t.innerHeight||0)-20<v.clientHeight?v.clientHeight:t.innerHeight||g.body.clientHeight||0);else{if(void 0===e||e===window)return t.getBoundingClientRect();r=xe(t),s=-r.x,a=-r.y,R?(p=t.getBBox(),d=p.width,m=p.height):t.offsetWidth?(d=t.offsetWidth,m=t.offsetHeight):(S=te(t),d=parseFloat(S.width),m=parseFloat(S.height)),n=s+d,o=a+m,"svg"!==t.nodeName.toLowerCase()||k||(y=Te(t),C=y.computedStyle||{},w=(t.getAttribute("viewBox")||"0 0").split(" "),b=parseFloat(w[0]),P=parseFloat(w[1]),T=parseFloat(C.borderLeftWidth)||0,x=parseFloat(C.borderTopWidth)||0,n-=d-(d-T)/y.scaleX-b,o-=m-(m-x)/y.scaleY-P,s-=T/y.scaleX-b,a-=x/y.scaleY-P,S&&(n+=(parseFloat(C.borderRightWidth)+T)/y.scaleX,o+=(x+parseFloat(C.borderBottomWidth))/y.scaleY))}return t===e?{left:s,top:a,width:n-s,height:o-a}:(l=Pe(t),h=Pe(e,!0),u=ke({x:s,y:a},l,h),_=ke({x:n,y:a},l,h),c=ke({x:n,y:o},l,h),f=ke({x:s,y:o},l,h),s=Math.min(u.x,_.x,c.x,f.x),a=Math.min(u.y,_.y,c.y,f.y),F.x=F.y=0,i&&xe(e,F),{left:s+F.x,top:a+F.y,width:Math.max(u.x,_.x,c.x,f.x)-s,height:Math.max(u.y,_.y,c.y,f.y)-a})},Re=function(t){return t&&t.length&&t[0]&&(t[0].nodeType&&t[0].style&&!t.nodeType||t[0].length&&t[0][0])?!0:!1},Oe=function(t){var e,i,r,s=[],n=t.length;for(e=0;n>e;e++)if(i=t[e],Re(i))for(r=i.length,r=0;i.length>r;r++)s.push(i[r]);else i&&0!==i.length&&s.push(i);return s},Ae="ontouchstart"in v&&"orientation"in window,De=function(t){for(var e=t.split(","),i=(void 0!==T.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==T.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":t).split(","),r={},s=8;--s>-1;)r[e[s]]=i[s],r[i[s]]=e[s];return r}("touchstart,touchmove,touchend,touchcancel"),Me=function(t,e,i,r){t.addEventListener?t.addEventListener(De[e]||e,i,r):t.attachEvent&&t.attachEvent("on"+e,i)},Le=function(t,e,i){t.removeEventListener?t.removeEventListener(De[e]||e,i):t.detachEvent&&t.detachEvent("on"+e,i)},Ne=function(t,e){for(var i=t.length;--i>-1;)if(t[i].identifier===e)return!0;return!1},Fe=function(t){s=t.touches&&t.touches.length>M,Le(t.target,"touchend",Fe)},Ee=function(t){s=t.touches&&t.touches.length>M,Me(t.target,"touchend",Fe)},Ie=function(t,e,i,r,s,n){var a,o,l,h={};if(e)if(1!==s&&e instanceof Array){for(h.end=a=[],l=e.length,o=0;l>o;o++)a[o]=e[o]*s;i+=1.1,r-=1.1}else h.end="function"==typeof e?function(i){return e.call(t,i)*s}:e;return(i||0===i)&&(h.max=i),(r||0===r)&&(h.min=r),n&&(h.velocity=0),h},ze=function(t){var e;return t&&t.getAttribute&&"BODY"!==t.nodeName?"true"===(e=t.getAttribute("data-clickable"))||"false"!==e&&(t.onclick||D.test(t.nodeName+"")||"true"===t.getAttribute("contentEditable"))?!0:ze(t.parentNode):!1},Xe=function(t,e){for(var i,r=t.length;--r>-1;)i=t[r],i.ondragstart=i.onselectstart=e?null:w,J(i,"userSelect",e?"text":"none")},Be=function(){var t,e=g.createElement("div"),i=g.createElement("div"),r=i.style,s=g.body||T;return r.display="inline-block",r.position="relative",e.style.cssText=i.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",e.appendChild(i),s.appendChild(e),u=i.offsetHeight+18>e.scrollHeight,r.width="100%",_e||(r.paddingRight="500px",t=e.scrollLeft=e.scrollWidth-e.clientWidth,r.left="-90px",t=t!==e.scrollLeft),s.removeChild(e),t}(),Ye=function(t,i){t=$(t),i=i||{};var r,s,n,a,o,l,h=g.createElement("div"),_=h.style,c=t.firstChild,f=0,p=0,d=t.scrollTop,m=t.scrollLeft,v=t.scrollWidth,y=t.scrollHeight,T=0,x=0,w=0;he&&i.force3D!==!1?(o="translate3d(",l="px,0px)"):_e&&(o="translate(",l="px)"),this.scrollTop=function(t,e){return arguments.length?(this.top(-t,e),void 0):-this.top()},this.scrollLeft=function(t,e){return arguments.length?(this.left(-t,e),void 0):-this.left()},this.left=function(r,s){if(!arguments.length)return-(t.scrollLeft+p);var n=t.scrollLeft-m,a=p;return(n>2||-2>n)&&!s?(m=t.scrollLeft,e.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-m),i.onKill&&i.onKill(),void 0):(r=-r,0>r?(p=0|r-.5,r=0):r>x?(p=0|r-x,r=x):p=0,(p||a)&&(o?this._suspendTransforms||(_[_e]=o+-p+"px,"+-f+l):_.left=-p+"px",Be&&p+T>=0&&(_.paddingRight=p+T+"px")),t.scrollLeft=0|r,m=t.scrollLeft,void 0)},this.top=function(r,s){if(!arguments.length)return-(t.scrollTop+f);var n=t.scrollTop-d,a=f;return(n>2||-2>n)&&!s?(d=t.scrollTop,e.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-d),i.onKill&&i.onKill(),void 0):(r=-r,0>r?(f=0|r-.5,r=0):r>w?(f=0|r-w,r=w):f=0,(f||a)&&(o?this._suspendTransforms||(_[_e]=o+-p+"px,"+-f+l):_.top=-f+"px"),t.scrollTop=0|r,d=t.scrollTop,void 0)},this.maxScrollTop=function(){return w},this.maxScrollLeft=function(){return x},this.disable=function(){for(c=h.firstChild;c;)a=c.nextSibling,t.appendChild(c),c=a;t===h.parentNode&&t.removeChild(h)},this.enable=function(){if(c=t.firstChild,c!==h){for(;c;)a=c.nextSibling,h.appendChild(c),c=a;t.appendChild(h),this.calibrate()}},this.calibrate=function(e){var i,a,o=t.clientWidth===r;d=t.scrollTop,m=t.scrollLeft,(!o||t.clientHeight!==s||h.offsetHeight!==n||v!==t.scrollWidth||y!==t.scrollHeight||e)&&((f||p)&&(i=this.left(),a=this.top(),this.left(-t.scrollLeft),this.top(-t.scrollTop)),(!o||e)&&(_.display="block",_.width="auto",_.paddingRight="0px",T=Math.max(0,t.scrollWidth-t.clientWidth),T&&(T+=ne(t,"paddingLeft")+(u?ne(t,"paddingRight"):0))),_.display="inline-block",_.position="relative",_.overflow="visible",_.verticalAlign="top",_.width="100%",_.paddingRight=T+"px",u&&(_.paddingBottom=ne(t,"paddingBottom",!0)),k&&(_.zoom="1"),r=t.clientWidth,s=t.clientHeight,v=t.scrollWidth,y=t.scrollHeight,x=t.scrollWidth-r,w=t.scrollHeight-s,n=h.offsetHeight,_.display="block",(i||a)&&(this.left(i),this.top(a)))},this.content=h,this.element=t,this._suspendTransforms=!1,this.enable()},We=function(r,a){t.call(this,r),r=$(r),n||(n=d.com.greensock.plugins.ThrowPropsPlugin),this.vars=a=a||{},this.target=r,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(a.dragResistance)||0,this.edgeResistance=isNaN(a.edgeResistance)?1:parseFloat(a.edgeResistance)||0,this.lockAxis=a.lockAxis,this.autoScroll=a.autoScroll||0,this.lockedAxis=null,this.allowEventDefault=!!a.allowEventDefault;var o,l,h,u,m,y,T,w,R,D,F,z,Y,j,U,H,K,te,ee,ie,re,se,le,he,ue,_e,ce,fe,pe,de,me,ge,ve=(a.type||(k?"top,left":"x,y")).toLowerCase(),ye=-1!==ve.indexOf("x")||-1!==ve.indexOf("y"),Te=-1!==ve.indexOf("rotation"),xe=Te?"rotation":ye?"x":"left",we=ye?"y":"top",be=-1!==ve.indexOf("x")||-1!==ve.indexOf("left")||"scroll"===ve,ke=-1!==ve.indexOf("y")||-1!==ve.indexOf("top")||"scroll"===ve,Ce=a.minimumMovement||2,Re=this,Oe=I(a.trigger||a.handle||r),Fe={},Be=0,je=!1,Ue=a.clickableTest||ze,Ve=function(t){if(Re.autoScroll&&Re.isDragging&&(te||je)){var e,i,s,n,a,o,h,u,_=r,c=15*Re.autoScroll;for(je=!1,E.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=v.scrollTop?v.scrollTop:g.body.scrollTop,E.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=v.scrollLeft?v.scrollLeft:g.body.scrollLeft,n=Re.pointerX-E.scrollLeft,a=Re.pointerY-E.scrollTop;_&&!i;)i=q(_.parentNode),e=i?E:_.parentNode,s=i?{bottom:Math.max(v.clientHeight,window.innerHeight||0),right:Math.max(v.clientWidth,window.innerWidth||0),left:0,top:0}:e.getBoundingClientRect(),o=h=0,ke&&(a>s.bottom-40&&(u=e._gsMaxScrollY-e.scrollTop)?(je=!0,h=Math.min(u,0|c*(1-Math.max(0,s.bottom-a)/40))):s.top+40>a&&e.scrollTop&&(je=!0,h=-Math.min(e.scrollTop,0|c*(1-Math.max(0,a-s.top)/40))),h&&(e.scrollTop+=h)),be&&(n>s.right-40&&(u=e._gsMaxScrollX-e.scrollLeft)?(je=!0,o=Math.min(u,0|c*(1-Math.max(0,s.right-n)/40))):s.left+40>n&&e.scrollLeft&&(je=!0,o=-Math.min(e.scrollLeft,0|c*(1-Math.max(0,n-s.left)/40))),o&&(e.scrollLeft+=o)),i&&(o||h)&&(window.scrollTo(e.scrollLeft,e.scrollTop),si(Re.pointerX+o,Re.pointerY+h)),_=e}if(te){var f=Re.x,p=Re.y,d=1e-6;d>f&&f>-d&&(f=0),d>p&&p>-d&&(p=0),Te?(pe.data.rotation=Re.rotation=f,pe.setRatio(1)):l?(ke&&l.top(p),be&&l.left(f)):ye?(ke&&(pe.data.y=p),be&&(pe.data.x=f),pe.setRatio(1)):(ke&&(r.style.top=p+"px"),be&&(r.style.left=f+"px")),!w||t||ge||(ge=!0,ae(Re,"drag","onDrag"),ge=!1)}te=!1},qe=function(t,i){var s,n=Re.x,a=Re.y;r._gsTransform||!ye&&!Te||e.set(r,{x:"+=0",overwrite:!1}),ye?(Re.y=r._gsTransform.y,Re.x=r._gsTransform.x):Te?Re.x=Re.rotation=r._gsTransform.rotation:l?(Re.y=l.top(),Re.x=l.left()):(Re.y=parseInt(r.style.top,10)||0,Re.x=parseInt(r.style.left,10)||0),!ie&&!re||i||(ie&&(s=ie(Re.x),s!==Re.x&&(Re.x=s,Te&&(Re.rotation=s))),re&&(s=re(Re.y),s!==Re.y&&(Re.y=s))),(n!==Re.x||a!==Re.y)&&Ve(!0),t||ae(Re,"throwupdate","onThrowUpdate")},He=function(){var t,e,i,s;T=!1,l?(l.calibrate(),Re.minX=D=-l.maxScrollLeft(),Re.minY=z=-l.maxScrollTop(),Re.maxX=R=Re.maxY=F=0,T=!0):a.bounds&&(t=oe(a.bounds,r.parentNode),Te?(Re.minX=D=t.left,Re.maxX=R=t.left+t.width,Re.minY=z=Re.maxY=F=0):void 0!==a.bounds.maxX||void 0!==a.bounds.maxY?(t=a.bounds,Re.minX=D=t.minX,Re.minY=z=t.minY,Re.maxX=R=t.maxX,Re.maxY=F=t.maxY):(e=oe(r,r.parentNode),Re.minX=D=ne(r,xe)+t.left-e.left,Re.minY=z=ne(r,we)+t.top-e.top,Re.maxX=R=D+(t.width-e.width),Re.maxY=F=z+(t.height-e.height)),D>R&&(Re.minX=R,Re.maxX=R=D,D=Re.minX),z>F&&(Re.minY=F,Re.maxY=F=z,z=Re.minY),Te&&(Re.minRotation=D,Re.maxRotation=R),T=!0),a.liveSnap&&(i=a.liveSnap===!0?a.snap||{}:a.liveSnap,s=i instanceof Array||"function"==typeof i,Te?(ie=ei(s?i:i.rotation,D,R,1),re=null):(be&&(ie=ei(s?i:i.x||i.left||i.scrollLeft,D,R,l?-1:1)),ke&&(re=ei(s?i:i.y||i.top||i.scrollTop,z,F,l?-1:1))))},Qe=function(){Re.isThrowing=!1,ae(Re,"throwcomplete","onThrowComplete")},Ze=function(){Re.isThrowing=!1},$e=function(t,e){var i,s,o,h;t&&n?(t===!0&&(i=a.snap||{},s=i instanceof Array||"function"==typeof i,t={resistance:(a.throwResistance||a.resistance||1e3)/(Te?10:1)},Te?t.rotation=Ie(Re,s?i:i.rotation,R,D,1,e):(be&&(t[xe]=Ie(Re,s?i:i.x||i.left||i.scrollLeft,R,D,l?-1:1,e||"x"===Re.lockedAxis)),ke&&(t[we]=Ie(Re,s?i:i.y||i.top||i.scrollTop,F,z,l?-1:1,e||"y"===Re.lockedAxis)))),Re.isThrowing=!0,h=isNaN(a.overshootTolerance)?1===a.edgeResistance?0:1-Re.edgeResistance+.2:a.overshootTolerance,Re.tween=o=n.to(l||r,{throwProps:t,ease:a.ease||d.Power3.easeOut,onComplete:Qe,onOverwrite:Ze,onUpdate:a.fastMode?ae:qe,onUpdateParams:a.fastMode?[Re,"onthrowupdate","onThrowUpdate"]:x},isNaN(a.maxDuration)?2:a.maxDuration,isNaN(a.minDuration)?0===h?0:.5:a.minDuration,h),a.fastMode||(l&&(l._suspendTransforms=!0),o.render(o.duration(),!0,!0),qe(!0,!0),Re.endX=Re.x,Re.endY=Re.y,Te&&(Re.endRotation=Re.x),o.play(0),qe(!0,!0),l&&(l._suspendTransforms=!1))):T&&Re.applyBounds()},Ke=function(){he=Pe(r.parentNode,!0),he[1]||he[2]||1!=he[0]||1!=he[3]||0!=he[4]||0!=he[5]||(he=null)},Je=function(){var t=1-Re.edgeResistance;Ke(),l?(He(),y=l.top(),m=l.left()):(ti()?(qe(!0,!0),He()):Re.applyBounds(),Te?(K=Se(r,{x:0,y:0}),qe(!0,!0),m=Re.x,y=Re.y=Math.atan2(K.y-u,h-K.x)*b):(ce=r.parentNode?r.parentNode.scrollTop||0:0,fe=r.parentNode?r.parentNode.scrollLeft||0:0,y=ne(r,we),m=ne(r,xe))),T&&t&&(m>R?m=R+(m-R)/t:D>m&&(m=D-(D-m)/t),Te||(y>F?y=F+(y-F)/t:z>y&&(y=z-(z-y)/t)))},ti=function(){return Re.tween&&Re.tween.isActive()},ei=function(t,e,i,r){return"function"==typeof t?function(s){var n=Re.isPressed?1-Re.edgeResistance:1;return t.call(Re,s>i?i+(s-i)*n:e>s?e+(s-e)*n:s)*r}:t instanceof Array?function(r){for(var s,n,a=t.length,o=0,l=P;--a>-1;)s=t[a],n=s-r,0>n&&(n=-n),l>n&&s>=e&&i>=s&&(o=a,l=n);return t[o]}:isNaN(t)?function(t){return t}:function(){return t*r}},ii=function(t){var i,s;if(o&&!Re.isPressed&&t&&!("mousedown"===t.type&&30>S()-_e&&De[Re.pointerEvent.type])){if(ue=ti(),Re.pointerEvent=t,De[t.type]?(le=-1!==t.type.indexOf("touch")?t.currentTarget||t.target:g,Me(le,"touchend",ni),Me(le,"touchmove",ri),Me(le,"touchcancel",ni),Me(g,"touchstart",Ee)):(le=null,Me(g,"mousemove",ri)),me=null,Me(g,"mouseup",ni),t&&t.target&&Me(t.target,"mouseup",ni),se=Ue.call(Re,t.target)&&!a.dragClickables)return Me(t.target,"change",ni),ae(Re,"press","onPress"),Xe(Oe,!0),void 0;if(de=!le||be===ke||l||Re.vars.allowNativeTouchScrolling===!1?!1:be?"y":"x",k?t=Z(t,!0):de||Re.allowEventDefault||(t.preventDefault(),t.preventManipulation&&t.preventManipulation()),t.changedTouches?(t=U=t.changedTouches[0],H=t.identifier):t.pointerId?H=t.pointerId:U=H=null,M++,X(Ve),u=Re.pointerY=t.pageY,h=Re.pointerX=t.pageX,(de||Re.autoScroll)&&Q(r.parentNode),!Re.autoScroll||Te||l||!r.parentNode||r.getBBox||!r.parentNode._gsMaxScrollX||C.parentNode||(C.style.width=r.parentNode.scrollWidth+"px",r.parentNode.appendChild(C)),Je(),he&&(i=h*he[0]+u*he[2]+he[4],u=h*he[1]+u*he[3]+he[5],h=i),Re.tween&&Re.tween.kill(),Re.isThrowing=!1,e.killTweensOf(l||r,!0,Fe),l&&e.killTweensOf(r,!0,{scrollTo:1}),Re.tween=Re.lockedAxis=null,(a.zIndexBoost||!Te&&!l&&a.zIndexBoost!==!1)&&(r.style.zIndex=We.zIndex++),Re.isPressed=!0,w=!(!a.onDrag&&!Re._listeners.drag),!Te)for(s=Oe.length;--s>-1;)J(Oe[s],"cursor",a.cursor||"move");ae(Re,"press","onPress")}},ri=function(t){var e,i,r,n,a=t;if(o&&!s&&Re.isPressed&&t){if(Re.pointerEvent=t,e=t.changedTouches){if(t=e[0],t!==U&&t.identifier!==H){for(n=e.length;--n>-1&&(t=e[n]).identifier!==H;);if(0>n)return}}else if(t.pointerId&&H&&t.pointerId!==H)return;if(k)t=Z(t,!0);else{if(le&&de&&!me&&(i=t.pageX,r=t.pageY,he&&(n=i*he[0]+r*he[2]+he[4],r=i*he[1]+r*he[3]+he[5],i=n),me=Math.abs(i-h)>Math.abs(r-u)&&be?"x":"y",Re.vars.lockAxisOnTouchScroll!==!1&&(Re.lockedAxis="x"===me?"y":"x","function"==typeof Re.vars.onLockAxis&&Re.vars.onLockAxis.call(Re,a)),L&&de===me))return ni(a),void 0;Re.allowEventDefault||de&&(!me||de===me)||a.cancelable===!1||(a.preventDefault(),a.preventManipulation&&a.preventManipulation())}Re.autoScroll&&(je=!0),si(t.pageX,t.pageY)}},si=function(t,e){var i,r,s,n,a,o,l=1-Re.dragResistance,_=1-Re.edgeResistance;Re.pointerX=t,Re.pointerY=e,Te?(n=Math.atan2(K.y-e,t-K.x)*b,a=Re.y-n,Re.y=n,a>180?y-=360:-180>a&&(y+=360),s=m+(y-n)*l):(he&&(o=t*he[0]+e*he[2]+he[4],e=t*he[1]+e*he[3]+he[5],t=o),r=e-u,i=t-h,Ce>r&&r>-Ce&&(r=0),Ce>i&&i>-Ce&&(i=0),(Re.lockAxis||Re.lockedAxis)&&(i||r)&&(o=Re.lockedAxis,o||(Re.lockedAxis=o=be&&Math.abs(i)>Math.abs(r)?"y":ke?"x":null,o&&"function"==typeof Re.vars.onLockAxis&&Re.vars.onLockAxis.call(Re,Re.pointerEvent)),"y"===o?r=0:"x"===o&&(i=0)),s=m+i*l,n=y+r*l),ie||re?(ie&&(s=ie(s)),re&&(n=re(n))):T&&(s>R?s=R+(s-R)*_:D>s&&(s=D+(s-D)*_),Te||(n>F?n=F+(n-F)*_:z>n&&(n=z+(n-z)*_))),Te||(s=Math.round(s),n=Math.round(n)),(Re.x!==s||Re.y!==n&&!Te)&&(Te?Re.endRotation=Re.x=Re.endX=s:(ke&&(Re.y=Re.endY=n),be&&(Re.x=Re.endX=s)),te=!0,Re.isDragging||(Re.isDragging=!0,ae(Re,"dragstart","onDragStart")))},ni=function(t,e){if(o&&Re.isPressed&&(!t||null==H||e||!(t.pointerId&&t.pointerId!==H||t.changedTouches&&!Ne(t.changedTouches,H)))){Re.isPressed=!1;var i,s,n,l,h=t,u=Re.isDragging;if(le?(Le(le,"touchend",ni),Le(le,"touchmove",ri),Le(le,"touchcancel",ni),Le(g,"touchstart",Ee)):Le(g,"mousemove",ri),Le(g,"mouseup",ni),t&&t.target&&Le(t.target,"mouseup",ni),te=!1,C.parentNode&&C.parentNode.removeChild(C),se)return t&&Le(t.target,"change",ni),Xe(Oe,!1),ae(Re,"release","onRelease"),ae(Re,"click","onClick"),se=!1,void 0;if(B(Ve),!Te)for(s=Oe.length;--s>-1;)J(Oe[s],"cursor",a.cursor||"move");if(u&&(Be=N=S(),Re.isDragging=!1),M--,t){if(k&&(t=Z(t,!1)),i=t.changedTouches,i&&(t=i[0],t!==U&&t.identifier!==H)){for(s=i.length;--s>-1&&(t=i[s]).identifier!==H;);if(0>s)return}Re.pointerEvent=h,Re.pointerX=t.pageX,Re.pointerY=t.pageY}return h&&!u?(ue&&(a.snap||a.bounds)&&$e(a.throwProps),ae(Re,"release","onRelease"),L&&"touchmove"===h.type||(ae(Re,"click","onClick"),l=h.target||h.srcElement||r,l.click?l.click():g.createEvent&&(n=g.createEvent("MouseEvents"),n.initEvent("click",!0,!0),l.dispatchEvent(n)),_e=S())):($e(a.throwProps),k||Re.allowEventDefault||!h||!a.dragClickables&&Ue.call(Re,h.target)||!u||de&&(!me||de!==me)||h.cancelable===!1||(h.preventDefault(),h.preventManipulation&&h.preventManipulation()),ae(Re,"release","onRelease")),u&&ae(Re,"dragend","onDragEnd"),!0}},ai=function(t){if(t&&Re.isDragging){var e=t.target||t.srcElement||r.parentNode,i=e.scrollLeft-e._gsScrollX,s=e.scrollTop-e._gsScrollY;(i||s)&&(h-=i,u-=s,e._gsScrollX+=i,e._gsScrollY+=s,si(Re.pointerX,Re.pointerY))}},oi=function(t){var e=S(),i=40>e-_e,r=40>e-Be;(Re.isPressed||r||i)&&(t.preventDefault?(t.preventDefault(),(i||r&&Re.vars.suppressClickOnDrag!==!1)&&t.stopImmediatePropagation()):t.returnValue=!1,t.preventManipulation&&t.preventManipulation())};ee=We.get(this.target),ee&&ee.kill(),this.startDrag=function(t){ii(t),Re.isDragging||(Re.isDragging=!0,ae(Re,"dragstart","onDragStart"))},this.drag=ri,this.endDrag=function(t){ni(t,!0)},this.timeSinceDrag=function(){return Re.isDragging?0:(S()-Be)/1e3},this.hitTest=function(t,e){return We.hitTest(Re.target,t,e)},this.getDirection=function(t,e){var i,r,s,a,o,l,h="velocity"===t&&n?t:"object"!=typeof t||Te?"start":"element";return"element"===h&&(o=Ge(Re.target),l=Ge(t)),i="start"===h?Re.x-m:"velocity"===h?n.getVelocity(this.target,xe):o.left+o.width/2-(l.left+l.width/2),Te?0>i?"counter-clockwise":"clockwise":(e=e||2,r="start"===h?Re.y-y:"velocity"===h?n.getVelocity(this.target,we):o.top+o.height/2-(l.top+l.height/2),s=Math.abs(i/r),a=1/e>s?"":0>i?"left":"right",e>s&&(""!==a&&(a+="-"),a+=0>r?"up":"down"),a)},this.applyBounds=function(t){var e,i;return t&&a.bounds!==t?(a.bounds=t,Re.update(!0)):(qe(!0),He(),T&&(e=Re.x,i=Re.y,T&&(e>R?e=R:D>e&&(e=D),i>F?i=F:z>i&&(i=z)),(Re.x!==e||Re.y!==i)&&(Re.x=Re.endX=e,Te?Re.endRotation=e:Re.y=Re.endY=i,te=!0,Ve())),Re)},this.update=function(t,e){var i=Re.x,r=Re.y;return Ke(),t?Re.applyBounds():(te&&e&&Ve(),qe(!0)),Re.isPressed&&(be&&Math.abs(i-Re.x)>.01||ke&&Math.abs(r-Re.y)>.01&&!Te)&&Je(),Re},this.enable=function(t){var s,h,u;if("soft"!==t){for(h=Oe.length;--h>-1;)u=Oe[h],Me(u,"mousedown",ii),Me(u,"touchstart",ii),Me(u,"click",oi,!0),Te||J(u,"cursor",a.cursor||"move"),J(u,"touchCallout","none"),J(u,"touchAction",be===ke||l?"none":be?"pan-y":"pan-x");Xe(Oe,!1)}return V(Re.target,ai),o=!0,n&&"soft"!==t&&n.track(l||r,ye?"x,y":Te?"rotation":"top,left"),l&&l.enable(),r._gsDragID=s="d"+A++,O[s]=this,l&&(l.element._gsDragID=s),e.set(r,{x:"+=0",overwrite:!1}),pe={t:r,data:k?j:r._gsTransform,tween:{},setRatio:k?function(){e.set(r,Y)}:i._internals.setTransformRatio||i._internals.set3DTransformRatio},Re.update(!0),Re},this.disable=function(t){var e,i,s=Re.isDragging;if(!Te)for(e=Oe.length;--e>-1;)J(Oe[e],"cursor",null);if("soft"!==t){for(e=Oe.length;--e>-1;)i=Oe[e],J(i,"touchCallout",null),J(i,"touchAction",null),Le(i,"mousedown",ii),Le(i,"touchstart",ii),Le(i,"click",oi);Xe(Oe,!0),le&&(Le(le,"touchcancel",ni),Le(le,"touchend",ni),Le(le,"touchmove",ri)),Le(g,"mouseup",ni),Le(g,"mousemove",ri)}return G(r,ai),o=!1,n&&"soft"!==t&&n.untrack(l||r,ye?"x,y":Te?"rotation":"top,left"),l&&l.disable(),B(Ve),Re.isDragging=Re.isPressed=se=!1,s&&ae(Re,"dragend","onDragEnd"),Re},this.enabled=function(t,e){return arguments.length?t?Re.enable(e):Re.disable(e):o},this.kill=function(){return Re.isThrowing=!1,e.killTweensOf(l||r,!0,Fe),Re.disable(),delete O[r._gsDragID],Re},-1!==ve.indexOf("scroll")&&(l=this.scrollProxy=new Ye(r,W({onKill:function(){Re.isPressed&&ni(null)}},a)),r.style.overflowY=ke&&!Ae?"auto":"hidden",r.style.overflowX=be&&!Ae?"auto":"hidden",r=l.content),a.force3D!==!1&&e.set(r,{force3D:!0}),Te?Fe.rotation=1:(be&&(Fe[xe]=1),ke&&(Fe[we]=1)),Te?(Y=p,j=Y.css,Y.overwrite=!1):ye&&(Y=be&&ke?_:be?c:f,j=Y.css,Y.overwrite=!1),this.enable()},je=We.prototype=new t;je.constructor=We,je.pointerX=je.pointerY=0,je.isDragging=je.isPressed=!1,We.version="0.14.1",We.zIndex=1e3,Me(g,"touchcancel",function(){}),Me(g,"contextmenu",function(){var t;for(t in O)O[t].isPressed&&O[t].endDrag()}),We.create=function(t,i){"string"==typeof t&&(t=e.selector(t));for(var r=t&&0!==t.length?Re(t)?Oe(t):[t]:[],s=r.length;--s>-1;)r[s]=new We(r[s],i);return r},We.get=function(t){return O[($(t)||{})._gsDragID]},We.timeSinceDrag=function(){return(S()-N)/1e3};var Ue={},Ve=function(t){var e=0,i=0,r=t.offsetWidth,s=t.offsetHeight;for(t=$(t);t;)e+=t.offsetTop,i+=t.offsetLeft,t=t.offsetParent;return{top:e,left:i,width:r,height:s}},Ge=function(t,e){if(t===window)return Ue.left=Ue.top=0,Ue.width=Ue.right=v.clientWidth||t.innerWidth||g.body.clientWidth||0,Ue.height=Ue.bottom=(t.innerHeight||0)-20<v.clientHeight?v.clientHeight:t.innerHeight||g.body.clientHeight||0,Ue;var i=t.pageX!==e?{left:t.pageX-U(),top:t.pageY-j(),right:t.pageX-U()+1,bottom:t.pageY-j()+1}:t.nodeType||t.left===e||t.top===e?k?Ve(t):$(t).getBoundingClientRect():t;
 	return i.right===e&&i.width!==e?(i.right=i.left+i.width,i.bottom=i.top+i.height):i.width===e&&(i={width:i.right-i.left,height:i.bottom-i.top,right:i.right,left:i.left,bottom:i.bottom,top:i.top}),i};return We.hitTest=function(t,e,i){if(t===e)return!1;var r,s,n,a=Ge(t),o=Ge(e),l=o.left>a.right||o.right<a.left||o.top>a.bottom||o.bottom<a.top;return l||!i?!l:(n=-1!==(i+"").indexOf("%"),i=parseFloat(i)||0,r={left:Math.max(a.left,o.left),top:Math.max(a.top,o.top)},r.width=Math.min(a.right,o.right)-r.left,r.height=Math.min(a.bottom,o.bottom)-r.top,0>r.width||0>r.height?!1:n?(i*=.01,s=r.width*r.height,s>=a.width*a.height*i||s>=o.width*o.height*i):r.width>i&&r.height>i)},C.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",We},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),require("../plugins/CSSPlugin.js"),module.exports=e())}("Draggable");

/*!
 * VERSION: 1.7.6
 * DATE: 2015-12-10
 * UPDATES AND DOCS AT: http://greensock.com
 *scrollto
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
 var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=document.documentElement,b=window,c=function(c,d){var e="x"===d?"Width":"Height",f="scroll"+e,g="client"+e,h=document.body;return c===b||c===a||c===h?Math.max(a[f],h[f])-(b["inner"+e]||a[g]||h[g]):c[f]-c["offset"+e]},d=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.6",init:function(a,d,e){return this._wdw=a===b,this._target=a,this._tween=e,"object"!=typeof d&&(d={y:d}),this.vars=d,this._autoKill=d.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=d.x?(this._addTween(this,"x",this.x,"max"===d.x?c(a,"x"):d.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=d.y?(this._addTween(this,"y",this.y,"max"===d.y?c(a,"y"):d.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(a){this._super.setRatio.call(this,a);var d=this._wdw||!this.skipX?this.getX():this.xPrev,e=this._wdw||!this.skipY?this.getY():this.yPrev,f=e-this.yPrev,g=d-this.xPrev;this.x<0&&(this.x=0),this.y<0&&(this.y=0),this._autoKill&&(!this.skipX&&(g>7||-7>g)&&d<c(this._target,"x")&&(this.skipX=!0),!this.skipY&&(f>7||-7>f)&&e<c(this._target,"y")&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?b.scrollTo(this.skipX?d:this.x,this.skipY?e:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),e=d.prototype;d.max=c,e.getX=function(){return this._wdw?null!=b.pageXOffset?b.pageXOffset:null!=a.scrollLeft?a.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},e.getY=function(){return this._wdw?null!=b.pageYOffset?b.pageYOffset:null!=a.scrollTop?a.scrollTop:document.body.scrollTop:this._target.scrollTop},e._kill=function(a){return a.scrollTo_x&&(this.skipX=!0),a.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,a)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();


 /*Mousewheel*/
 !function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var s=t||window.event,a=h.call(arguments,1),r=0,f=0,d=0,c=0,m=0,g=0;if(t=e.event.fix(s),t.type="mousewheel","detail"in s&&(d=-1*s.detail),"wheelDelta"in s&&(d=s.wheelDelta),"wheelDeltaY"in s&&(d=s.wheelDeltaY),"wheelDeltaX"in s&&(f=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(f=-1*d,d=0),r=0===d?f:d,"deltaY"in s&&(d=-1*s.deltaY,r=d),"deltaX"in s&&(f=s.deltaX,0===d&&(r=-1*f)),0!==d||0!==f){if(1===s.deltaMode){var w=e.data(this,"mousewheel-line-height");r*=w,d*=w,f*=w}else if(2===s.deltaMode){var v=e.data(this,"mousewheel-page-height");r*=v,d*=v,f*=v}if(c=Math.max(Math.abs(d),Math.abs(f)),(!l||l>c)&&(l=c,i(s,c)&&(l/=40)),i(s,c)&&(r/=40,f/=40,d/=40),r=Math[r>=1?"floor":"ceil"](r/l),f=Math[f>=1?"floor":"ceil"](f/l),d=Math[d>=1?"floor":"ceil"](d/l),u.settings.normalizeOffset&&this.getBoundingClientRect){var p=this.getBoundingClientRect();m=t.clientX-p.left,g=t.clientY-p.top}return t.deltaX=f,t.deltaY=d,t.deltaFactor=l,t.offsetX=m,t.offsetY=g,t.deltaMode=0,a.unshift(t,r,f,d),o&&clearTimeout(o),o=setTimeout(n,200),(e.event.dispatch||e.event.handle).apply(this,a)}}function n(){l=null}function i(e,t){return u.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var o,l,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],h=Array.prototype.slice;if(e.event.fixHooks)for(var r=s.length;r;)e.event.fixHooks[s[--r]]=e.event.mouseHooks;var u=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var n=a.length;n;)this.addEventListener(a[--n],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",u.getLineHeight(this)),e.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var n=a.length;n;)this.removeEventListener(a[--n],t,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height"),e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var n=e(t),i=n["offsetParent"in e.fn?"offsetParent":"parent"]();return i.length||(i=e("body")),parseInt(i.css("fontSize"),10)||parseInt(n.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});


//fastclick
!function(){"use strict";function t(e,o){function i(t,e){return function(){return t.apply(e,arguments)}}var r;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],c=this,s=0,u=a.length;u>s;s++)c[a[s]]=i(c[a[s]],c);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(r=e.onclick,e.addEventListener("click",function(t){r(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,r;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,c,s,u,l=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(u=t.changedTouches[0],l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),c=l.tagName.toLowerCase(),"label"===c){if(e=this.findControl(l)){if(this.focus(l),n)return!1;l=e}}else if(this.needsFocus(l))return t.timeStamp-a>100||o&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),o&&"select"===c||(this.targetElement=null,t.preventDefault()),!1);return o&&!i&&(s=l.fastClickScrollParent,s&&s.fastClickLastScrollTop!==s.scrollTop)?!0:(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o,i,r;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction?!0:(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],r>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1)},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}();

/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.8.0
*/
!function(o){"object"==typeof module&&"object"==typeof module.exports?o(require("jquery"),window,document):o(jQuery,window,document)}(function(o,t,e,i){var s=[],l=function(){return s.length?s[s.length-1]:null},n=function(){var o,t=!1;for(o=s.length-1;o>=0;o--)s[o].$blocker&&(s[o].$blocker.toggleClass("current",!t).toggleClass("behind",t),t=!0)};o.modal=function(t,e){var i,n;if(this.$body=o("body"),this.options=o.extend({},o.modal.defaults,e),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),this.$blocker=null,this.options.closeExisting)for(;o.modal.isActive();)o.modal.close();if(s.push(this),t.is("a"))if(n=t.attr("href"),/^#/.test(n)){if(this.$elm=o(n),1!==this.$elm.length)return null;this.$body.append(this.$elm),this.open()}else this.$elm=o("<div>"),this.$body.append(this.$elm),i=function(o,t){t.elm.remove()},this.showSpinner(),t.trigger(o.modal.AJAX_SEND),o.get(n).done(function(e){if(o.modal.isActive()){t.trigger(o.modal.AJAX_SUCCESS);var s=l();s.$elm.empty().append(e).on(o.modal.CLOSE,i),s.hideSpinner(),s.open(),t.trigger(o.modal.AJAX_COMPLETE)}}).fail(function(){t.trigger(o.modal.AJAX_FAIL);var e=l();e.hideSpinner(),s.pop(),t.trigger(o.modal.AJAX_COMPLETE)});else this.$elm=t,this.$body.append(this.$elm),this.open()},o.modal.prototype={constructor:o.modal,open:function(){var t=this;this.block(),this.options.doFade?setTimeout(function(){t.show()},this.options.fadeDuration*this.options.fadeDelay):this.show(),o(e).off("keydown.modal").on("keydown.modal",function(o){var t=l();27==o.which&&t.options.escapeClose&&t.close()}),this.options.clickClose&&this.$blocker.click(function(t){t.target==this&&o.modal.close()})},close:function(){s.pop(),this.unblock(),this.hide(),o.modal.isActive()||o(e).off("keydown.modal")},block:function(){this.$elm.trigger(o.modal.BEFORE_BLOCK,[this._ctx()]),this.$body.css("overflow","hidden"),this.$blocker=o('<div class="jquery-modal blocker current"></div>').appendTo(this.$body),n(),this.options.doFade&&this.$blocker.css("opacity",0).animate({opacity:1},this.options.fadeDuration),this.$elm.trigger(o.modal.BLOCK,[this._ctx()])},unblock:function(t){!t&&this.options.doFade?this.$blocker.fadeOut(this.options.fadeDuration,this.unblock.bind(this,!0)):(this.$blocker.children().appendTo(this.$body),this.$blocker.remove(),this.$blocker=null,n(),o.modal.isActive()||this.$body.css("overflow",""))},show:function(){this.$elm.trigger(o.modal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=o('<a href="#close-modal" rel="modal:close" class="close-modal '+this.options.closeClass+'">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker),this.options.doFade?this.$elm.css("opacity",0).show().animate({opacity:1},this.options.fadeDuration):this.$elm.show(),this.$elm.trigger(o.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(o.modal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove();var t=this;this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}):this.$elm.hide(0,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}),this.$elm.trigger(o.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||o('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},_ctx:function(){return{elm:this.$elm,$blocker:this.$blocker,options:this.options}}},o.modal.close=function(t){if(o.modal.isActive()){t&&t.preventDefault();var e=l();return e.close(),e.$elm}},o.modal.isActive=function(){return s.length>0},o.modal.getCurrent=l,o.modal.defaults={closeExisting:!0,escapeClose:!0,clickClose:!0,closeText:"Close",closeClass:"",modalClass:"modal",spinnerHtml:null,showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},o.modal.BEFORE_BLOCK="modal:before-block",o.modal.BLOCK="modal:block",o.modal.BEFORE_OPEN="modal:before-open",o.modal.OPEN="modal:open",o.modal.BEFORE_CLOSE="modal:before-close",o.modal.CLOSE="modal:close",o.modal.AFTER_CLOSE="modal:after-close",o.modal.AJAX_SEND="modal:ajax:send",o.modal.AJAX_SUCCESS="modal:ajax:success",o.modal.AJAX_FAIL="modal:ajax:fail",o.modal.AJAX_COMPLETE="modal:ajax:complete",o.fn.modal=function(t){return 1===this.length&&new o.modal(this,t),this},o(e).on("click.modal",'a[rel~="modal:close"]',o.modal.close),o(e).on("click.modal",'a[rel~="modal:open"]',function(t){t.preventDefault(),o(this).modal()})});


/*! pace 1.0.0 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],f.push(null==a[d]&&"function"!=typeof e?a[d]=e:void 0)}catch(g){c=g}return f},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);



// hammertime

!function(){var a=window.MutationObserver||window.WebKitMutationObserver,b="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,c=void 0!==document.documentElement.style["touch-action"]||document.documentElement.style["-ms-touch-action"];if(!c&&b&&a){window.Hammer=window.Hammer||{};var d=/touch-action[:][\s]*(none)[^;'"]*/,e=/touch-action[:][\s]*(manipulation)[^;'"]*/,f=/touch-action/,g=navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?!0:!1,h=function(){try{var a=document.createElement("canvas");return!(!window.WebGLRenderingContext||!a.getContext("webgl")&&!a.getContext("experimental-webgl"))}catch(b){return!1}}(),i=h&&g;window.Hammer.time={getTouchAction:function(a){return this.checkStyleString(a.getAttribute("style"))},checkStyleString:function(a){return f.test(a)?d.test(a)?"none":e.test(a)?"manipulation":!0:void 0},shouldHammer:function(a){var b=this.hasParent(a.target);return b&&(!i||Date.now()-a.target.lastStart<125)?b:!1},touchHandler:function(a){var b=a.target.getBoundingClientRect(),c=b.top!==this.pos.top||b.left!==this.pos.left,d=this.shouldHammer(a);("none"===d||c===!1&&"manipulation"===d)&&("touchend"===a.type&&(a.target.focus(),setTimeout(function(){a.target.click()},0)),a.preventDefault()),this.scrolled=!1,delete a.target.lastStart},touchStart:function(a){this.pos=a.target.getBoundingClientRect(),i&&this.hasParent(a.target)&&(a.target.lastStart=Date.now())},styleWatcher:function(a){a.forEach(this.styleUpdater,this)},styleUpdater:function(a){if(a.target.updateNext)return void(a.target.updateNext=!1);var b=this.getTouchAction(a.target);return b?void("none"!==b&&(a.target.hadTouchNone=!1)):void(!b&&(a.oldValue&&this.checkStyleString(a.oldValue)||a.target.hadTouchNone)&&(a.target.hadTouchNone=!0,a.target.updateNext=!1,a.target.setAttribute("style",a.target.getAttribute("style")+" touch-action: none;")))},hasParent:function(a){for(var b,c=a;c&&c.parentNode;c=c.parentNode)if(b=this.getTouchAction(c))return b;return!1},installStartEvents:function(){document.addEventListener("touchstart",this.touchStart.bind(this)),document.addEventListener("mousedown",this.touchStart.bind(this))},installEndEvents:function(){document.addEventListener("touchend",this.touchHandler.bind(this),!0),document.addEventListener("mouseup",this.touchHandler.bind(this),!0)},installObserver:function(){this.observer=new a(this.styleWatcher.bind(this)).observe(document,{subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["style"]})},install:function(){this.installEndEvents(),this.installStartEvents(),this.installObserver()}},window.Hammer.time.install()}}();



// AOS

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=o(1),r=(n(a),o(5)),c=n(r),u=o(6),s=n(u),d=o(7),f=n(d),l=o(8),m=n(l),p=o(9),b=n(p),v=o(10),g=n(v),y=o(13),w=n(y),h=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length<=0||void 0===arguments[0]?!1:arguments[0];return e&&(k=!0),k?(h=(0,g["default"])(h,j),(0,b["default"])(h,j.once),h):void 0},_=function(){h=(0,w["default"])(),O()},z=function(){h.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},A=function(e){return e===!0||"mobile"===e&&m["default"].mobile()||"phone"===e&&m["default"].phone()||"tablet"===e&&m["default"].tablet()||"function"==typeof e&&e()===!0},E=function(e){return j=i(j,e),h=(0,w["default"])(),A(j.disable)||x?z():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,s["default"])(O,50,!0)),window.addEventListener("orientationchange",(0,s["default"])(O,50,!0)),window.addEventListener("scroll",(0,c["default"])(function(){(0,b["default"])(h,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,s["default"])(_,50,!0)}),(0,f["default"])("[data-aos]",_),h)};e.exports={init:E,refresh:O,refreshHard:_}},function(e,t){},,,,function(e,t,o){"use strict";function n(e,t,o){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return i(o)&&(n="leading"in o?!!o.leading:n,a="trailing"in o?!!o.trailing:a),r(e,t,{leading:n,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r=o(6),c="Expected a function";e.exports=n},function(e,t){"use strict";function o(e,t,o){function n(t){var o=b,n=v;return b=v=void 0,O=t,y=e.apply(n,o)}function a(e){return O=e,w=setTimeout(d,t),_?n(e):y}function r(e){var o=e-h,n=e-O,i=t-o;return z?x(i,g-n):i}function u(e){var o=e-h,n=e-O;return!h||o>=t||0>o||z&&n>=g}function d(){var e=j();return u(e)?f(e):void(w=setTimeout(d,r(e)))}function f(e){return clearTimeout(w),w=void 0,A&&b?n(e):(b=v=void 0,y)}function l(){void 0!==w&&clearTimeout(w),h=O=0,b=v=w=void 0}function m(){return void 0===w?y:f(j())}function p(){var e=j(),o=u(e);if(b=arguments,v=this,h=e,o){if(void 0===w)return a(h);if(z)return clearTimeout(w),w=setTimeout(d,t),n(h)}return void 0===w&&(w=setTimeout(d,t)),y}var b,v,g,y,w,h=0,O=0,_=!1,z=!1,A=!0;if("function"!=typeof e)throw new TypeError(s);return t=c(t)||0,i(o)&&(_=!!o.leading,z="maxWait"in o,g=z?k(c(o.maxWait)||0,t):g,A="trailing"in o?!!o.trailing:A),p.cancel=l,p.flush=m,p}function n(e){var t=i(e)?h.call(e):"";return t==f||t==l}function i(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||a(e)&&h.call(e)==m}function c(e){if("number"==typeof e)return e;if(r(e))return d;if(i(e)){var t=n(e.valueOf)?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var o=v.test(e);return o||g.test(e)?y(e.slice(2),o?2:8):b.test(e)?d:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s="Expected a function",d=NaN,f="[object Function]",l="[object GeneratorFunction]",m="[object Symbol]",p=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,g=/^0o[0-7]+$/i,y=parseInt,w=Object.prototype,h=w.toString,k=Math.max,x=Math.min,j=Date.now;e.exports=o},function(e,t){"use strict";function o(e,t){r.push({selector:e,fn:t}),!c&&a&&(c=new a(n),c.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),n()}function n(){for(var e,t,o=0,n=r.length;n>o;o++){e=r[o],t=i.querySelectorAll(e.selector);for(var a,c=0,u=t.length;u>c;c++)a=t[c],a.ready||(a.ready=!0,e.fn.call(a,a))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,a=window.MutationObserver||window.WebKitMutationObserver,r=[],c=void 0;t["default"]=o},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=function(){function e(){o(this,e)}return n(e,[{key:"phone",value:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{key:"mobile",value:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t["default"]=new i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,a){o(e,i+n,t)})};t["default"]=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(11),a=n(i),r=function(e,t){return e.forEach(function(e,o){e.node.classList.add("aos-init"),e.position=(0,a["default"])(e.node,t.offset)}),e};t["default"]=r},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(12),a=n(i),r=function(e,t){var o=0,n=0,i=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,a["default"])(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=i/2;break;case"bottom-center":o+=i/2+e.offsetHeight;break;case"center-center":o+=i/2+e.offsetHeight/2;break;case"top-top":o+=i;break;case"bottom-top":o+=e.offsetHeight+i;break;case"center-top":o+=e.offsetHeight/2+i}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),o+n};t["default"]=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t["default"]=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,o){t.push({node:e})}),t};t["default"]=o}])});
//# sourceMappingURL=aos.js.map

//custom script

mainScrollUnlocked = false;
jumpScrollUnlocked = true;

jQuery(window).on('load', function($) { // makes sure the whole site is loaded
  // var heightsAligned = false;
  // function alignHeights() {
  //   jQuery('#zero-content').css({'height':(jQuery('#overlay-content').height()+'px')});
  //   // heightsAligned = true;
  //   // console.log("second");
  //   // console.log(heightsAligned);
  // }
  // setTimeout(alignHeights, 0500);
  // setTimeout(jQuery('#zero-content').css({'height':(jQuery('#modal-content').height()+'px')}), 0250);
  jQuery('#status').fadeOut(); // will first fade out the loading animation
  jQuery('#preloader').delay(350).fadeOut('slow', function () {
    var AgeGateFadeIn = new TimelineMax({paused: true});
    AgeGateFadeIn.to($ageGateContent, 2, {opacity: 1, ease: Power4.easeInOut});
    AgeGateFadeIn.play();

    var ageGateVideo = document.getElementById('age-gate-video');
    ageGateVideo.play(); // ageGate won't automatically play on chrome unless forced to
  }); // will fade out the white DIV that covers the website.
  // /****************
  // AOS
  // ****************/
  //
  // AOS.init();
  // console.log("first");
  // console.log(heightsAligned);
})

jQuery(document).ready(function( $ ) {
  jQuery('#six, #five, #four, #three, #two, #one').fadeOut(); // prep slides for scrolling
  /***************
  Variables
  ***************/
  $body = $('body');
  $mainPageContainer = $('.main-page-container');
  $mainPageAll = $mainPageContainer.children(); //.addBack();
  $breadcrumbGroup = $('#breadcrumb-group');
  $ajaxAboutSection = $('.ajaxAboutSection');
  $ajaxRecipesSection = $('.ajaxRecipesSection');
  $noMobileCol = $('.no-mobile-col');
  $aboutImg = $('#four-img');
  $aboutBreadcrumbs = $('#about-ajax-breadcrumb-group');
  $aboutBreadcrumbText = $('.about-breadcrumb-text');
  $recipesImg = $('#five-img');
  $recipesBreadcrumbs = $('#recipes-ajax-breadcrumb-group');
  $recipesBreadcrumbText = $('.recipes-breadcrumb-text');
  $menuContainer = $('.menu-container');
  $menuLeft = $('.menu-left');
  $menuGrey = $('.menu-grey');
  $allTitles = $('.main-page-title-group');
  $aboutBtn = $('.about-btn');
  $btnAbout = $('#btn-about');
  $recipesBtn = $('.recipes-btn');
  $btnRecipes = $('#btn-recipes');
  $aboutSection = $('.about');
  $recipesSection = $('.recipes');
  $ageGateContent = $('.age-gate-content');
  $boots = $('#boots');
  $vintagebull = $('#vintagebull');
  $gloves = $('#gloves');
  $bullrider = $('#bullrider');
  $matador = $('#matador');
  $cola = $('#cola');
  $oldfashioned = $('#oldfashioned');
  $cowboyjulep = $('#cowboyjulep');
  $ginger = $('#ginger');
  $shooter = $('#shooter');
  $neat = $('#neat');
  $slideButton = $('.slide-button');
  $hideContainer = $('.hide-container');
  $pBtn = $('.p-btn');
  $firstHtwo = $('#first-h2-child');
  $pMoBtn = $('.p-mobile-btn');
  $secondaryStoryImageGroup = $('#secondary-story-image-group');
  $secondaryDrinksImageGroup = $('#secondary-drinks-image-group');
  $menuVeil = $('#menu-veil');
  $zeroContent = $('#zero-content');
  $modalContent = $('#overlay-content');



  var mainIdx = 0;

  var onMainPage = true;
  var onAboutPage = false;
  var onRecipesPage = false;
  var deskClassAdded = false;
  var startingSideWidth = null;

  aboutOne = $('#about-one').offset().top;
  aboutTwo = $('#about-two').offset().top;
  aboutThree = $('#about-three').offset().top;
  aboutFour = $('#about-four').offset().top;
  aboutFive = $('#about-five').offset().top;
  recipesOne = $('#recipes-one').offset().top;
  recipesTwo = $('#recipes-two').offset().top;
  recipesThree = $('#recipes-three').offset().top;
  recipesFour = $('#recipes-four').offset().top;
  recipesFive = $('#recipes-five').offset().top;
  recipesSix = $('#recipes-six').offset().top;
  recipesSeven = $('#recipes-seven').offset().top;

  /***************
  Hammer
  ***************/
  var mainPageContainerHammer = document.getElementById('the-container');
  var htmlHammer = document.getElementById('html-id');
  var ajaxAboutSectionHammer = document.getElementById('ajax-about');
  var ajaxRecipesSectionHammer = document.getElementById('ajax-recipes');
  var hammertime = new Hammer(mainPageContainerHammer);
  hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
  hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  hammertime.on('swipeup swipedown', function(event) {
    if (onMainPage) {
      handleMainPageScroll(event.deltaY);
    } else {
      hammertime.destroy();
    }
  })
  hammertime.on('swipeleft', function(event) {
    if (mainIdx === 4) {
      if ($(window).width() > 991) {
        handleAboutTrigger();
      } else {
        aboutAreaTlMobile.play();
        triggerSection("about");
        hammertime.destroy();
      }
    } else if (mainIdx === 5) {
      if ($(window).width() > 991) {
        handleRecipesTrigger();
      } else {
        recipesAreaTlMobile.play();
        triggerSection("recipes");
        hammertime.destroy();
      }
    }
  })

/***************
Mousewheel
***************/

  $body.mousewheel(function(event) {
    if (onMainPage) {
      handleMainPageScroll(event.deltaY);
    } else if (onAboutPage) {
      handleOtherScrolling($ajaxAboutSection, event.deltaY, event.deltaFactor);
    } else if (onRecipesPage) {
      handleOtherScrolling($ajaxRecipesSection, event.deltaY, event.deltaFactor);
    }
  });

  /***************
  remove aos for ie
  ***************/

  // function msieversion() {
  //
  //    var ua = window.navigator.userAgent;
  //    var msie = ua.indexOf(“MSIE “);
  //
  //    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
  //    {
  //        $('.s-text').removeAttr("data-aos");
  //    }
  //    else  // If another browser, return 0
  //    {
  //      //
  //    }
  //
  //    return false;
  // }

  var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        ms_ie = true;
    }

    if ( ms_ie ) {
      $('.s-text').removeAttr("data-aos");
      $('#about-five').removeAttr("data-aos");
      $('.fade-top').removeAttr("data-aos");
        //IE specific code goes here
    } else {
    }


/***************
Main Scroll Logic
***************/

function handleMainPageScroll(scrollDir, newMainIdx) {
  if (mainScrollUnlocked && jumpScrollUnlocked) {
    mainScrollUnlocked = false;
    setTimeout(unlockMainScroll, 1200);
    if (mainIdx === 0 && scrollDir > 0) { // can't scroll up at first slide
      return;
    } else if (scrollDir > 0) { // scroll up
      if (newMainIdx >= 0) { // user clicked a breadcrumb
        jumpToSlide(mainIdx, newMainIdx);
        mainIdx = newMainIdx;
      } else { // user scrolled normally
        mainIdx -= 1;
        previousSlide(mainIdx);
      }
      updateBreadcrumb(mainIdx);
    } else if (scrollDir < 0 && mainIdx === 6) { // can't scroll down at last slide
      return;
    } else { // scroll down
      if (newMainIdx) { // user clicked a breadcrumb
        jumpToSlide(mainIdx, newMainIdx);
        mainIdx = newMainIdx;
      } else { // user scrolled normally
        mainIdx += 1;
        nextSlide(mainIdx);
      }
      updateBreadcrumb(mainIdx);
    }
    nextButton(scrollDir, mainIdx);
  }
}

/***************
Main Scroll Functions
***************/

function nextButton(scrollDir, mainIdx) {
  if (scrollDir < 0) {
    $pBtn.eq(mainIdx - 1).fadeOut();
    if (mainIdx === 6) {
      $pMoBtn.eq(1).fadeOut();

    } else {
      $pBtn.eq(mainIdx).fadeIn();
    }
    if (mainIdx === 4) {
      $pMoBtn.eq(0).fadeIn();
    } else if (mainIdx === 5) {
      $pMoBtn.eq(0).fadeOut();
      $pMoBtn.eq(1).fadeIn();
    }
  } else if (scrollDir > 0) {
    $pBtn.eq(mainIdx + 1).fadeOut();
    $pBtn.eq(mainIdx).fadeIn();
    if (mainIdx === 4) {
      $pMoBtn.eq(0).fadeIn();
      $pMoBtn.eq(1).fadeOut();
    } else if (mainIdx === 3) {
      $pMoBtn.eq(0).fadeOut();
    } else if (mainIdx === 5) {
      $pMoBtn.eq(1).fadeIn();
    }
  }
}



function nextSlide(idx, callback) {
  TweenMax.to($allTitles.find(".h2-child").eq(idx - 1), 1.5, {yPercent:-100, force3D: true, onComplete: nextTitle(idx, callback)});
  TweenMax.to($hideContainer.eq(idx - 1), .6, {opacity: 0, ease: Power4.easeInOut});
  $('.main-page-slide-group').children().eq(idx).fadeIn(1200);
  TweenMax.to($hideContainer.eq(idx), 1.5, {opacity: 1, ease: Power4.easeIn});

  if(TweenMax.isTweening( $(".h2-child.zero"))){
  		TweenMax.to($('.age-gate-icon-v2'), 1.5, {autoAlpha: 0, ease: Power4.easeInOut, onComplete: function(){
  			TweenMax.set($zeroContent,{display:"none"});
  		}});
  	}
}

function previousSlide(idx, callback) {
  if (idx === 0) {
    TweenMax.to($firstHtwo, .6, {opacity: 0, onComplete: nextTitle(idx, callback)});
  } else {
    TweenMax.to($allTitles.find(".h2-child").eq(idx + 1), 1.5, {yPercent:100, force3D: true, onComplete: nextTitle(idx, callback)});
  }
  TweenMax.to($hideContainer.eq(idx + 1), .6, {opacity: 0, ease: Power4.easeInOut});
  $('.main-page-slide-group').children().eq(idx + 1).fadeOut(1200);
  TweenMax.to($hideContainer.eq(idx), 1.5, {opacity: 1, ease: Power4.easeIn});


    if(TweenMax.isTweening( $(".h2-child.zero"))){
  		TweenMax.to($('.age-gate-icon-v2'), 1.5, {autoAlpha: 1, ease: Power4.easeInOut, onStart:function(){
  			TweenMax.set($zeroContent,{display:"block"});
  		}});
  	}
}


function jumpToSlide(oldIdx, newIdx, callback) {
  jumpScrollUnlocked = false;
  if (oldIdx < newIdx) {
    var nextTitles = $allTitles.find(".h2-child").slice(oldIdx + 1, newIdx);
    nextTitles.css("visibility", "hidden");
    for (var i = oldIdx + 1; i <= newIdx; i++) {
      if (i === newIdx) {
        nextSlide(i, function() {revealTitles(nextTitles)});
      } else {
        nextSlide(i);
      }
      nextButton(-1, i);
    }
  } else if (oldIdx > newIdx) {
    var previousTitles = $allTitles.find(".h2-child").slice(newIdx + 1, oldIdx);
    previousTitles.css("visibility", "hidden");
    for (var j = oldIdx; j >= newIdx; j--) {
      if (j === newIdx) {
        previousSlide(j, function() {revealTitles(previousTitles)});
      } else {
        previousSlide(j);
      }
      nextButton(1, j);
    }
  }
  if (typeof callback === "function") {
    setTimeout(callback, 1000);
  }
  setTimeout(unlockJumpScroll, 2000);
}

function nextTitle(idx, callback) {
  if (idx === 1) {
    TweenMax.to($firstHtwo, 1.5, {opacity: 1});
  }
  TweenMax.to($allTitles.find(".h2-child").eq(idx), 1.5, {y:"0%", onComplete: function () {
    if (typeof callback === "function") {
      callback();
    }
  }});
}

function updateBreadcrumb(idx) {
  $('.breadcrumb-active').removeClass('breadcrumb-active');
  $breadcrumbGroup.children().eq(idx).addClass('breadcrumb-active');
}

function unlockMainScroll() {
  mainScrollUnlocked = true;
}

function unlockJumpScroll() {
  jumpScrollUnlocked = true;
}

$('.breadcrumb').click(function(e) {
  var clickedIdx = $(this).index();
  if (mainIdx < clickedIdx) {
    handleMainPageScroll(-1, clickedIdx);
  } else if (mainIdx > clickedIdx) {
    handleMainPageScroll(1, clickedIdx);
  }
})

function revealTitles(titles) {
  titles.css("visibility", "visible");
}

/*****************************
Delay
*****************************/
var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

/******************************
Secondary Section Slide Tweens
*******************************/
var aboutAreaTl = new TimelineMax({paused: true});
aboutAreaTl.to($($mainPageAll), 1.75, {ease: Power4.easeInOut, xPercent: -50, onComplete: triggerSection.bind("about")}, 0);
aboutAreaTl.to($breadcrumbGroup, .2, {ease: Power4.easeInOut, display: "none"}, 0);
aboutAreaTl.to($mainPageContainer, 1.7, {ease: Power4.easeInOut, paddingLeft: 0, marginLeft: 0}, 0);
aboutAreaTl.to($aboutBreadcrumbs, .1, {display: "block"}, 0);
aboutAreaTl.to($aboutBreadcrumbs, 1, {ease: Power4.easeInOut, opacity: 1}, 0);
aboutAreaTl.to($btnAbout, 1, {ease: Power4.easeInOut, left: "4%"}, 0);

var aboutAreaTlMobile = new TimelineMax({paused: true});
aboutAreaTlMobile.to($mainPageAll, 1.25, {ease: Power4.easeInOut, xPercent: -100, onComplete: triggerSection.bind("about")}, 0);
aboutAreaTlMobile.to($breadcrumbGroup, .2, {ease: Power4.easeInOut, display: "none"}, 0);
aboutAreaTlMobile.to($mainPageContainer, 1.7, {ease: Power4.easeInOut, paddingLeft: 0, marginLeft: 0}, 0);
aboutAreaTlMobile.to($('#s-about-mobile-nav'), .2, {display: "none"}, 0);
aboutAreaTlMobile.to($('.button_container'), .2, {display: "none"}, 0);
aboutAreaTlMobile.to($('#about-btn-bk-mobile'), .2, {display: "block"}, 0);
aboutAreaTlMobile.to($('.mobile-main-title'), 1, {ease: Power4.easeInOut, opacity: 0}, 0);
aboutAreaTlMobile.to($('#about-btn-bk-mobile'), 1, {force3D: true, ease: Power4.easeInOut, height: "62px"}, 1);
aboutAreaTlMobile.to($('.mobile-back-arrow'), 1, {ease: Power4.easeInOut, opacity: 1}, 2);

var recipesAreaTl = new TimelineMax({paused: true});
recipesAreaTl.to($mainPageAll, 1.75, {ease: Power4.easeInOut, xPercent: -50, onComplete: triggerSection.bind("recipes")}, 0);
recipesAreaTl.to($breadcrumbGroup, .2, {ease: Power4.easeInOut, display: "none"}, 0);
recipesAreaTl.to($mainPageContainer, 1.7, {ease: Power4.easeInOut, paddingLeft: 0, marginLeft: 0}, 0);
recipesAreaTl.to($recipesBreadcrumbs, .1, {display: "block"}, 0);
recipesAreaTl.to($recipesBreadcrumbs, 1, {ease: Power4.easeInOut, opacity: 1}, 0);
recipesAreaTl.to($btnRecipes, 1, {ease: Power4.easeInOut, left: "4%"}, 0);

var recipesAreaTlMobile = new TimelineMax({paused: true});
recipesAreaTlMobile.to($mainPageAll, 1.25, {ease: Power4.easeInOut, xPercent: -100, onComplete: triggerSection.bind("recipes")}, 0);
recipesAreaTlMobile.to($breadcrumbGroup, .2, {ease: Power4.easeInOut, display: "none"}, 0);
recipesAreaTlMobile.to($mainPageContainer, 1.7, {ease: Power4.easeInOut, paddingLeft: 0, marginLeft: 0}, 0);
recipesAreaTlMobile.to($('#s-recipes-mobile-nav'), .2, {display: "none"}, 0);
recipesAreaTlMobile.to($('.button_container'), .2, {display: "none"}, 0);
recipesAreaTlMobile.to($('#recipes-btn-bk-mobile'), .2, {display: "block"}, 0);
recipesAreaTlMobile.to($('.story-plus'), .2, {display: "none"}, 0);
recipesAreaTlMobile.to($('.mobile-main-title'), 1, {ease: Power4.easeInOut, opacity: 0}, 0);
recipesAreaTlMobile.to($('#recipes-btn-bk-mobile'), 1, {force3D: true, ease: Power4.easeInOut, height: "62px"}, 1);
recipesAreaTlMobile.to($('.mobile-back-arrow'), 1, {ease: Power4.easeInOut, opacity: 1}, 2);

/******************************
About - Main to Secondary Section
*******************************/

$aboutBtn.click(function () {
  handleAboutTrigger();
})

$('#about-btn-bk-mobile').click(function () {
  aboutBackMobile();
})

$('#about-btn-fwd-mobile').click(function () {
  aboutAreaTlMobile.play();
  triggerSection("about");
  hammertime.destroy();
  var hammerbros = new Hammer(ajaxAboutSectionHammer);
  hammerbros.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
  hammerbros.on('swiperight', function(event) {
    if ($(window).width() > 991) {
      handleAboutTrigger();
      hammerbros.destroy();
    } else {
      aboutBackMobile();
      hammerbros.destroy();
    }
  });
})

function aboutBackMobile() {
  TweenMax.to($('.secondary-image-group').children(), 1, {opacity: 0});
  aboutAreaTlMobile.reverse();
  triggerSection("main");
  TweenMax.to($ajaxAboutSection[0], 1.75, {ease: Power4.easeInOut, scrollTop: 0});
  var hammertime = new Hammer(mainPageContainerHammer);
  hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
  hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  hammertime.on('swipeup swipedown', function(event) {
      if (onMainPage) {
      handleMainPageScroll(event.deltaY);
    } else {
      hammertime.destroy();
    }
  })
  hammertime.on('swipeleft', function(event) {
    if (mainIdx === 4) {
      if ($(window).width() > 991) {
        handleAboutTrigger();
      } else {
        aboutAreaTlMobile.play();
        triggerSection("about");
        hammertime.destroy();
      }
    } else if (mainIdx === 5) {
      if ($(window).width() > 991) {
        handleRecipesTrigger();
      } else {
        recipesAreaTlMobile.play();
        triggerSection("recipes");
        hammertime.destroy();
      }
    }
  })
}

function handleAboutTrigger() {
  if ($btnAbout.hasClass("fwd")) {
    if ($(window).width() > 991) {
      aboutAreaTl.play();
    } else if ($(window).width() <= 991) {
      aboutAreaTlMobile.play();
    }

    triggerSection("about");
    $aboutBtn.removeClass("fwd");
    $aboutBtn.addClass("bk");
    $btnAbout.children().removeClass("fa-chevron-right");
    $btnAbout.children().addClass("fa-chevron-left");
    $aboutImg.addClass('lateral-img');
    TweenMax.to($('.secondary-image-group').children(), 1, {opacity: 0});
    aboutOne = $('#about-one').offset().top;
    aboutTwo = $('#about-two').offset().top;
    aboutThree = $('#about-three').offset().top;
    aboutFour = $('#about-four').offset().top;
    aboutFive = $('#about-five').offset().top;
    var hammerbros = new Hammer(htmlHammer);
    hammerbros.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammerbros.on('swiperight', function(event) {
      if ($(window).width() > 991) {
        handleAboutTrigger();
        hammerbros.destroy();
      } else {
        aboutBackMobile();
        hammerbros.destroy();
      }
    });
  } else if ($btnAbout.hasClass("bk")) {
    if ($(window).width() > 991) {
      aboutAreaTl.reverse();
    } else if ($(window).width() <= 991) {
      aboutAreaTlMobile.reverse();
    }
    var hammertime = new Hammer(mainPageContainerHammer);
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammertime.on('swipeup swipedown', function(event) {
        if (onMainPage) {
        handleMainPageScroll(event.deltaY);
      } else {
        hammertime.destroy();
      }
    })
    hammertime.on('swipeleft', function(event) {
      if (mainIdx === 4) {
        if ($(window).width() > 991) {
          handleAboutTrigger();
        } else {
          aboutAreaTlMobile.play();
          triggerSection("about");
          hammertime.destroy();
        }
      } else if (mainIdx === 5) {
        if ($(window).width() > 991) {
          handleRecipesTrigger();
        } else {
          recipesAreaTlMobile.play();
          triggerSection("recipes");
          hammertime.destroy();
        }
      }
    })
    triggerSection("main");
    TweenMax.to($ajaxAboutSection[0], 1.75, {ease: Power4.easeInOut, scrollTop: 0});
    aboutBreadcrumbFive.reverse();
    aboutBreadcrumbFour.reverse();
    aboutBreadcrumbThree.reverse();
    aboutBreadcrumbTwo.reverse();
    aboutBreadcrumbOne.reverse();
    $aboutBtn.removeClass("bk");
    $aboutBtn.addClass("fwd");
    $btnAbout.children().removeClass("fa-chevron-left");
    $btnAbout.children().addClass("fa-chevron-right");
    $aboutImg.removeClass('lateral-img');
    TweenMax.to($('.secondary-image-group').children(), 1, {opacity: 0});

  }
}

/******************************
Recipes - Main to Secondary Section
*******************************/

$recipesBtn.click(function () {
  handleRecipesTrigger();
})

$('#recipes-btn-fwd-mobile').click(function () {
  recipesAreaTlMobile.play();
  triggerSection("recipes");
  hammertime.destroy();
  var mc = new Hammer(ajaxRecipesSectionHammer);
  mc.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
  mc.on('swiperight', function(event) {
    if ($(window).width() > 991) {
      handleRecipesTrigger();
      mc.destroy();
    } else {
      recipeBackMobile();
      mc.destroy();
    }
  });
})

$('#recipes-btn-bk-mobile').click(function () {
  recipeBackMobile();
})

function recipeBackMobile() {
  TweenMax.to($('.secondary-image-group').children(), 1, {opacity: 0});
  recipesAreaTlMobile.reverse();
  triggerSection("main");
  TweenMax.to($ajaxRecipesSection[0], 1.75, {ease: Power4.easeInOut, scrollTop: 0});
  var hammertime = new Hammer(mainPageContainerHammer);
  hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
  hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  hammertime.on('swipeup swipedown', function(event) {
      if (onMainPage) {
      handleMainPageScroll(event.deltaY);
    } else {
      hammertime.destroy();
    }
  })
  hammertime.on('swipeleft', function(event) {
    if (mainIdx === 4) {
      if ($(window).width() > 991) {
        handleAboutTrigger();
      } else {
        aboutAreaTlMobile.play();
        triggerSection("about");
        hammertime.destroy();
      }
      var hammerbros = new Hammer(ajaxAboutSectionHammer);
      hammerbros.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
      hammerbros.on('swiperight', function(event) {
        if ($(window).width() > 991) {
          handleAboutTrigger();
          hammerbros.destroy();
        } else {
          aboutBackMobile();
          hammerbros.destroy();
        }
      });
    } else if (mainIdx === 5) {
      if ($(window).width() > 991) {
        handleRecipesTrigger();
      } else {
        recipesAreaTlMobile.play();
        triggerSection("recipes");
        hammertime.destroy();
      }
      var mc = new Hammer(ajaxRecipesSectionHammer);
      mc.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
      mc.on('swiperight', function(event) {
        if ($(window).width() > 991) {
          handleRecipesTrigger();
          mc.destroy();
        } else {
          recipeBackMobile();
          mc.destroy();
        }
      });
    }
  })
}

function handleRecipesTrigger() {
  if ($recipesBtn.hasClass("fwd")) {
    if ($(window).width() > 991) {
      recipesAreaTl.play();
    } else if ($(window).width() <= 991) {
      recipesAreaTlMobile.play();
    }
    triggerSection("recipes");
    // wip: all of these below should be in GSAP
    $recipesBtn.removeClass("fwd");
    $recipesBtn.addClass("bk");
    $btnRecipes.children().removeClass("fa-chevron-right");
    $btnRecipes.children().addClass("fa-chevron-left");
    $recipesImg.addClass('lateral-img');
    TweenMax.to($('.secondary-image-group').children(), 1, {opacity: 0});
    recipesOne = $('#recipes-one').offset().top;
    recipesTwo = $('#recipes-two').offset().top;
    recipesThree = $('#recipes-three').offset().top;
    recipesFour = $('#recipes-four').offset().top;
    recipesFive = $('#recipes-five').offset().top;
    recipesSix = $('#recipes-six').offset().top;
    recipesSeven = $('#recipes-seven').offset().top;
    var mc = new Hammer(ajaxRecipesSectionHammer);
    mc.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    mc.on('swiperight', function(event) {
      if ($(window).width() > 991) {
        handleRecipesTrigger();
        mc.destroy();
      } else {
        recipeBackMobile();
        mc.destroy();
      }
    });
  } else if ($btnRecipes.hasClass("bk")) {
    if ($(window).width() > 991) {
      recipesAreaTl.reverse();
    } else if ($(window).width() <= 991) {
      recipesAreaTlMobile.reverse();
    }
    var hammertime = new Hammer(mainPageContainerHammer);
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammertime.on('swipeup swipedown', function(event) {
        if (onMainPage) {
        handleMainPageScroll(event.deltaY);
      } else {
        hammertime.destroy();
      }
    })
    hammertime.on('swipeleft', function(event) {
      if (mainIdx === 4) {
        if ($(window).width() > 991) {
          handleAboutTrigger();
        } else {
          aboutAreaTlMobile.play();
          triggerSection("about");
          hammertime.destroy();
        }
      } else if (mainIdx === 5) {
        if ($(window).width() > 991) {
          handleRecipesTrigger();
        } else {
          recipesAreaTlMobile.play();
          triggerSection("recipes");
          hammertime.destroy();
        }
      }
    })
    triggerSection("main");
    TweenMax.to($ajaxRecipesSection[0], 1.75, {ease: Power4.easeInOut, scrollTop: 0});
    recipesBreadcrumbSeven.reverse();
    recipesBreadcrumbSix.reverse();
    recipesBreadcrumbFive.reverse();
    recipesBreadcrumbFour.reverse();
    recipesBreadcrumbThree.reverse();
    recipesBreadcrumbTwo.reverse();
    recipesBreadcrumbOne.reverse();
    $recipesBtn.removeClass("bk");
    $recipesBtn.addClass("fwd");
    $btnRecipes.children().removeClass("fa-chevron-left");
    $btnRecipes.children().addClass("fa-chevron-right");
    $recipesImg.removeClass('lateral-img');
    TweenMax.to($('.secondary-image-group').children(), 1, {opacity: 0});
  }
}

/******************************
General Logic - Main to Secondary Section
*******************************/

function triggerSection(section) {
  if (section === "main") {
    onMainPage = true;
    onAboutPage = false;
    onRecipesPage = false;
    startingSideWidth = null;
    TweenMax.to($menuContainer, 1.75, {ease: Power4.easeOut, left: 0});
    TweenMax.to($menuLeft, 1.75, {ease: Power4.easeOut, left: "-100%"});
  } else if (section === "about") {
    onMainPage = false;
    onAboutPage = true;
    onRecipesPage =  false;
    startingSideWidth = $(window).width();
    var hammerbros = new Hammer(htmlHammer);
    hammerbros.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammerbros.on('swiperight', function(event) {
      if ($(window).width() > 991) {
        handleAboutTrigger();
        hammerbros.destroy();
      } else {
        aboutBackMobile();
        hammerbros.destroy();
      }
    });
    TweenMax.to($menuContainer, 1.75, {ease: Power4.easeOut, left: "50%"});
    TweenMax.to($menuLeft, 1.75, {ease: Power4.easeOut, left: "-52%"});
    AOS.refreshHard();
    // console.log(AOS);
    // var newAos = AOS.init();
  } else if (section === "recipes") {
    onMainPage = false;
    onAboutPage = false;
    onRecipesPage =  true;
    startingSideWidth = $(window).width();
    var hammerbros = new Hammer(htmlHammer);
    hammerbros.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammerbros.on('swiperight', function(event) {
      if ($(window).width() > 991) {
        handleRecipesTrigger();
        hammerbros.destroy();
      } else {
        recipeBackMobile();
        hammerbros.destroy();
      }
    });
    TweenMax.to($menuContainer, 1.75, {ease: Power4.easeOut, left: "50%"});
    TweenMax.to($menuLeft, 1.75, {ease: Power4.easeOut, left: "-52%"});
    AOS.refreshHard();
  }
}

/******************************
Click to Scroll buttons
*******************************/
$('.swipe-chevron-container').click(function() {
  handleMainPageScroll(-50);
})


$('#story-down').click(function () {
  var matadorTag = (-($('#story-down').offset().top / 2));
  TweenMax.to($('.ajaxAboutSection'), 1.5, {scrollTop: $(this).offset().top, ease: Power4.easeInOut});
  aboutBreadcrumbTwo.reverse();
  aboutBreadcrumbOne.play();
  TweenMax.to($matador, 1, {opacity: 1, ease: Power1.easeOut});
  TweenMax.to($bullrider, 1, {opacity: 0, ease: Power1.easeOut});
  $('#first-story-s-text-mobile').attr('data-aos', '');
})

/******************************
Breadcrumb Tweens
*******************************/

var aboutBreadcrumbOne = new TimelineMax({paused: true});
aboutBreadcrumbOne.to($aboutBreadcrumbs.children()[0], 1, {ease: Power4.easeInOut, marginRight: 0, opacity: 1}, 0);
aboutBreadcrumbOne.to($aboutBreadcrumbText[0], 1, {ease: Power4.easeInOut, opacity: 1}, 0);

var aboutBreadcrumbTwo = new TimelineMax({paused: true});
aboutBreadcrumbTwo.to($aboutBreadcrumbs.children()[1], 1, {ease: Power4.easeInOut, marginRight: 0, opacity: 1}, 0);
aboutBreadcrumbTwo.to($aboutBreadcrumbText[1], 1, {ease: Power4.easeInOut, opacity: 1}, 0);

var aboutBreadcrumbThree = new TimelineMax({paused: true});
aboutBreadcrumbThree.to($aboutBreadcrumbs.children()[2], 1, {ease: Power4.easeInOut, marginRight: 0, opacity: 1}, 0);
aboutBreadcrumbThree.to($aboutBreadcrumbText[2], 1, {ease: Power4.easeInOut, opacity: 1}, 0);

var aboutBreadcrumbFour = new TimelineMax({paused: true});
aboutBreadcrumbFour.to($aboutBreadcrumbs.children()[3], 1, {ease: Power4.easeInOut, marginRight: 0, opacity: 1}, 0);
aboutBreadcrumbFour.to($aboutBreadcrumbText[3], 1, {ease: Power4.easeInOut, opacity: 1}, 0);

var aboutBreadcrumbFive = new TimelineMax({paused: true});
aboutBreadcrumbFive.to($aboutBreadcrumbs.children()[4], 1, {ease: Power4.easeInOut, marginRight: 0, opacity: 1}, 0);
aboutBreadcrumbFive.to($aboutBreadcrumbText[4], 1, {ease: Power4.easeInOut, opacity: 1}, 0);

var recipesBreadcrumbOne = new TimelineMax({paused: true});
recipesBreadcrumbOne.to($recipesBreadcrumbs.children()[0], 1, {ease: Power4.easeInOut, marginRight: 0, opacity: 1}, 0);
recipesBreadcrumbOne.to($recipesBreadcrumbText[0], 1, {ease: Power4.easeInOut, opacity: 1}, 0);

var recipesBreadcrumbTwo = new TimelineMax({paused: true});
recipesBreadcrumbTwo.to($recipesBreadcrumbs.children()[1], 1, {ease: Power4.easeInOut, marginRight: 0, opacity: 1}, 0);
recipesBreadcrumbTwo.to($recipesBreadcrumbText[1], 1, {ease: Power4.easeInOut, opacity: 1}, 0);

var recipesBreadcrumbThree = new TimelineMax({paused: true});
recipesBreadcrumbThree.to($recipesBreadcrumbs.children()[2], 1, {ease: Power4.easeInOut, marginRight: 0, opacity: 1}, 0);
recipesBreadcrumbThree.to($recipesBreadcrumbText[2], 1, {ease: Power4.easeInOut, opacity: 1}, 0);

var recipesBreadcrumbFour = new TimelineMax({paused: true});
recipesBreadcrumbFour.to($recipesBreadcrumbs.children()[3], 1, {ease: Power4.easeInOut, marginRight: 0, opacity: 1}, 0);
recipesBreadcrumbFour.to($recipesBreadcrumbText[3], 1, {ease: Power4.easeInOut, opacity: 1}, 0);

var recipesBreadcrumbFive = new TimelineMax({paused: true});
recipesBreadcrumbFive.to($recipesBreadcrumbs.children()[4], 1, {ease: Power4.easeInOut, marginRight: 0, opacity: 1}, 0);
recipesBreadcrumbFive.to($recipesBreadcrumbText[4], 1, {ease: Power4.easeInOut, opacity: 1}, 0);

var recipesBreadcrumbSix = new TimelineMax({paused: true});
recipesBreadcrumbSix.to($recipesBreadcrumbs.children()[5], 1, {ease: Power4.easeInOut, marginRight: 0, opacity: 1}, 0);
recipesBreadcrumbSix.to($recipesBreadcrumbText[5], 1, {ease: Power4.easeInOut, opacity: 1}, 0);

var recipesBreadcrumbSeven = new TimelineMax({paused: true});
recipesBreadcrumbSeven.to($recipesBreadcrumbs.children()[6], 1, {ease: Power4.easeInOut, marginRight: 0, opacity: 1}, 0);
recipesBreadcrumbSeven.to($recipesBreadcrumbText[6], 1, {ease: Power4.easeInOut, opacity: 1}, 0);

/***************
Other scrolling
***************/

function handleOtherScrolling(section, dY, dF) {
  AOS.refresh();
  // $(".fade-top").css("opacity", 1 - $(window).scrollTop() / 250);
  // AOS.refreshHard();
  var scrollPosition = section[0].scrollTop += (-dY * dF);
  if (section === $ajaxAboutSection) {
    if ((scrollPosition + $(window).height()) > aboutFive) {
      aboutBreadcrumbFour.reverse();
      aboutBreadcrumbFive.play();
      TweenMax.to($boots, 1, {opacity: 1, ease: Power1.easeOut});
    } else if ((scrollPosition + $(window).height()) > aboutFour) {
      aboutBreadcrumbFive.reverse();
      aboutBreadcrumbThree.reverse();
      aboutBreadcrumbFour.play();
      TweenMax.to($vintagebull, 1, {opacity: 1, ease: Power1.easeOut});
      TweenMax.to($boots, 1, {opacity: 0, ease: Power1.easeOut});
    } else if ((scrollPosition + $(window).height()) > aboutThree) {
      aboutBreadcrumbTwo.reverse();
      aboutBreadcrumbFour.reverse();
      aboutBreadcrumbThree.play();
      TweenMax.to($gloves, 1, {opacity: 1, ease: Power1.easeOut});
      TweenMax.to($vintagebull, 1, {opacity: 0, ease: Power1.easeOut});
    } else if ((scrollPosition + $(window).height()) > aboutTwo) {
      aboutBreadcrumbOne.reverse()
      aboutBreadcrumbThree.reverse();
      aboutBreadcrumbTwo.play();
      TweenMax.to($bullrider, 1, {opacity: 1, ease: Power1.easeOut});
      TweenMax.to($gloves, 1, {opacity: 0, ease: Power1.easeOut});
    } else if ((scrollPosition + $(window).height()) > aboutOne) {
      aboutBreadcrumbTwo.reverse();
      aboutBreadcrumbOne.play();
      TweenMax.to($matador, 1, {opacity: 1, ease: Power1.easeOut});
      TweenMax.to($bullrider, 1, {opacity: 0, ease: Power1.easeOut});
    } else {
      aboutBreadcrumbOne.reverse();
      TweenMax.to($matador, 1, {opacity: 0, ease: Power1.easeOut});
    }
  } else if (section === $ajaxRecipesSection) {
    if ((scrollPosition + $(window).height()) > recipesSeven){
      recipesBreadcrumbSix.reverse();
      recipesBreadcrumbSeven.play();
      TweenMax.to($neat, 1, {opacity: 1, ease: Power1.easeOut});
    } else if ((scrollPosition + $(window).height()) > recipesSix) {
      recipesBreadcrumbSeven.reverse();
      recipesBreadcrumbFive.reverse();
      recipesBreadcrumbSix.play();
      TweenMax.to($shooter, 1, {opacity: 1, ease: Power1.easeOut});
      TweenMax.to($neat, 1, {opacity: 0, ease: Power1.easeOut});
    } else if ((scrollPosition + $(window).height()) > recipesFive) {
      recipesBreadcrumbSix.reverse();
      recipesBreadcrumbFour.reverse();
      recipesBreadcrumbFive.play();
      TweenMax.to($ginger, 1, {opacity: 1, ease: Power1.easeOut});
      TweenMax.to($shooter, 1, {opacity: 0, ease: Power1.easeOut});
    } else if ((scrollPosition + $(window).height()) > recipesFour) {
      recipesBreadcrumbFive.reverse();
      recipesBreadcrumbThree.reverse();
      recipesBreadcrumbFour.play();
      TweenMax.to($cowboyjulep, 1, {opacity: 1, ease: Power1.easeOut});
      TweenMax.to($ginger, 1, {opacity: 0, ease: Power1.easeOut});
    } else if ((scrollPosition + $(window).height()) > recipesThree) {
      recipesBreadcrumbFour.reverse();
      recipesBreadcrumbTwo.reverse();
      recipesBreadcrumbThree.play();
      TweenMax.to($oldfashioned, 1, {opacity: 1, ease: Power1.easeOut});
      TweenMax.to($cowboyjulep, 1, {opacity: 0, ease: Power1.easeOut});
    } else if ((scrollPosition + $(window).height()) > recipesTwo) {
      recipesBreadcrumbThree.reverse();
      recipesBreadcrumbOne.reverse()
      recipesBreadcrumbTwo.play();
      TweenMax.to($cola, 1, {opacity: 1, ease: Power1.easeOut});
      TweenMax.to($oldfashioned, 1, {opacity: 0, ease: Power1.easeOut});
    } else {
      recipesBreadcrumbTwo.reverse();
      recipesBreadcrumbOne.play();
      TweenMax.to($cola, 1, {opacity: 0, ease: Power1.easeOut});
    }
  }
}

/******************************
Back to Top buttons
*******************************/

$('.back-to-top').click(function () {
  if (onAboutPage) {
    TweenMax.to($ajaxAboutSection[0], 1.75, {ease: Power4.easeInOut, scrollTop: 0});
    aboutBreadcrumbFive.reverse();
    aboutBreadcrumbFour.reverse();
    aboutBreadcrumbThree.reverse();
    aboutBreadcrumbTwo.reverse();
    aboutBreadcrumbOne.reverse();
    TweenMax.to($secondaryStoryImageGroup.children(), 1.75, {ease: Power4.easeInOut, opacity: 0});
  } else if (onRecipesPage) {
    TweenMax.to($ajaxRecipesSection[0], 1.75, {ease: Power4.easeInOut, scrollTop: 0});
    recipesBreadcrumbSeven.reverse();
    recipesBreadcrumbSix.reverse();
    recipesBreadcrumbFive.reverse();
    recipesBreadcrumbFour.reverse();
    recipesBreadcrumbThree.reverse();
    recipesBreadcrumbTwo.reverse();
    recipesBreadcrumbOne.reverse();
    TweenMax.to($secondaryDrinksImageGroup.children(), 1.75, {ease: Power4.easeInOut, opacity: 0});
  }
})


/***************
Resize
***************/

// run test on initial page load
 checkSize();
// // run test on resize of the window
 $(window).resize(checkSize);



function checkSize(){

 // console.log($(window).width() / $(window).height());
	sortMenu();

  //$zeroContent.css({'height':($modalContent.height()+'px')});



  if (mainIdx === 6) {
    $('.slide-button').fadeOut();
  } else if (mainIdx === 5) {
    $btnAbout.fadeOut();
  }

	if (deskClassAdded && $(window).innerWidth() <= 991){
		$noMobileCol.each(function () {
		  $(this).removeClass('col-md-6');
		})
    deskClassAdded = false;



	}else if (!deskClassAdded && $(window).innerWidth() > 991) {
    $noMobileCol.each(function () {
		  $(this).addClass('col-md-6');
		})
    deskClassAdded = true;
	}

  if (onAboutPage) {
    handleAboutTrigger();
  } else if (onRecipesPage) {
    handleRecipesTrigger();
  }

  aboutOne = $('#about-one').offset().top;
  aboutTwo = $('#about-two').offset().top;
  aboutThree = $('#about-three').offset().top;
  aboutFour = $('#about-four').offset().top;
  aboutFive = $('#about-five').offset().top;
  recipesOne = $('#recipes-one').offset().top;
  recipesTwo = $('#recipes-two').offset().top;
  recipesThree = $('#recipes-three').offset().top;
  recipesFour = $('#recipes-four').offset().top;
  recipesFive = $('#recipes-five').offset().top;
  recipesSix = $('#recipes-six').offset().top;
  recipesSeven = $('#recipes-seven').offset().top;
}

/***************
Menu
***************/

var menuOpened = false;

var toggleMenuVeil = new TimelineLite({paused: true});
toggleMenuVeil.to($menuVeil, 0, {display: "block"});
toggleMenuVeil.to($menuVeil, .2, {ease: Power4.easeInOut, opacity: 1});

var openMenu = new TimelineLite({paused: true});
openMenu.to($menuLeft, 1.75, {ease: Power4.easeOut, left: "0%"}, 0);
openMenu.to($menuContainer, 0, {display: "block"}, 0);
openMenu.to($menuContainer, .2, {ease: Power4.easeInOut, opacity: 1, visibility: "visible"}, 0);
openMenu.to($menuGrey, 1, {opacity: 1}, "-=1.2");

var openMenuSecondary = new TimelineLite({paused: true});
openMenuSecondary.to($menuContainer, 0, {display: "block"}, 0);
openMenuSecondary.to($menuContainer, .2, {ease: Power4.easeInOut, opacity: 1, visibility: "visible"}, 0);
// openMenuSecondary.to($menuContainer, 1.75, {ease: Power4.easeOut, left: "50%"}, 1);
openMenuSecondary.to($menuLeft, 1.75, {ease: Power4.easeOut, left: "0%"}, 1);
openMenuSecondary.to($menuGrey, 1, {left: "50%"}, "-=1.2");
openMenuSecondary.to($menuGrey, 1, {opacity: 1}, "-=1.2");



function removeMenuVeil() {
  toggleMenuVeil.reverse();
}


function toggleMenu() {
  $('#toggle').toggleClass('active');
  mainScrollUnlocked = !mainScrollUnlocked;
  if (menuOpened) {
    onMainPage ? openMenu.reverse() : openMenuSecondary.reverse();
  } else {
    onMainPage ? openMenu.play() : openMenuSecondary.play();
  }
  menuOpened = !menuOpened;
}

$('#toggle').click(function() {
  toggleMenu();
 });

$('.square').click(function() {
  toggleMenu();
  if (onAboutPage) {
    toggleMenuVeil.play();
    handleAboutTrigger();
  } else if (onRecipesPage) {
    toggleMenuVeil.play();
    handleRecipesTrigger();
  }
  if (this.id === "premium-square") {
    jumpToSlide(mainIdx, 1, removeMenuVeil);
    mainIdx = 1;
  } else if (this.id === "black-square") {
    jumpToSlide(mainIdx, 2, removeMenuVeil);
    mainIdx = 2;
  } else if (this.id === "honey-cinnamon-square") {
    jumpToSlide(mainIdx, 3, removeMenuVeil);
    mainIdx = 3;
  } else if (this.id === "story-square") {
    jumpToSlide(mainIdx, 4, removeMenuVeil);
    mainIdx = 4;
    } else if (this.id === "cocktails-square") {
    jumpToSlide(mainIdx, 5, removeMenuVeil);
    mainIdx = 5;
  } else if (this.id === "contact-square") {
    jumpToSlide(mainIdx, 6, removeMenuVeil);
    mainIdx = 6;
  }
  updateBreadcrumb(mainIdx);
})

/***************
Preload images
***************/

// function preload(arrayOfImages) {
//     $(arrayOfImages).each(function () {
//         $('<img />').attr('src',this).appendTo('body').css('display','none');
//     });
// }
//
// preload([
//     'url(/wp-content/uploads/2017/03/home-story-boots.jpg)',
//     'url(/wp-content/uploads/2017/03/story-vintagebull.jpg)',
//     'url(/wp-content/uploads/2017/03/story-gloves.jpg)',
// ]);



/***************
Age Gate
***************/
// var AgeGateFadeIn = new TimelineMax({paused: true});
// AgeGateFadeIn.to($ageGateContent, 2, {opacity: 1, ease: Power4.easeInOut});
//console.log(Cookies.get());

// AgeGateFadeIn.play();

Cookies.remove('drinkingAge');
if(Cookies.get('drinkingAge') == 'over21'){
	//don't do anything
 }
else{
	$('#ageGate').modal({
		fadeDuration: 250,
		escapeClose: false,      // Allows the user to close the modal by pressing `ESC`
  		clickClose: false,       // Allows the user to close the modal by clicking the overlay
  		showClose: false
	});

	// $(.fn.fullpage).setAllowScrolling(false);
	// $(.fn.fullpage).setKeyboardScrolling(false);

	// $('.fullpage-wrapper,#the-nav').addClass('blur');

	$('#over21, #under21').click(function () {
		if (this.id == 'over21') {
      var oldHeight = $zeroContent.height();
			Cookies.set('drinkingAge','over21', { expires: 31 });
			// $(".fullpage-wrapper,#the-nav").removeClass('blur');
			$.modal.close();
      TweenMax.to($('#landing-text'), 1.5, {opacity: 1, ease: Power4.easeInOut});
      TweenMax.to($breadcrumbGroup, 1.5, {opacity: 1, ease: Power4.easeInOut});
      TweenMax.to($('.button_container'), 1.5, {opacity: 1, ease: Power4.easeInOut});
     // TweenMax.set($zeroContent, {height: 'auto'});
     // TweenMax.from($zeroContent, 1.5, {height: oldHeight, ease: Power4.easeInOut});
     	TweenMax.to($('.age-gate-icon-v2'), 1.5, {yPercent: 50, ease: Power4.easeInOut, onComplete: function(){

     		//$zeroContent.attr('style','z-index: 0');
     	}});

      mainScrollUnlocked = true;
      // debugger;

		}
		else if (this.id == 'under21') {
			Cookies.set('drinkingAge','under21');
			window.location.replace("http://responsibility.org/");
		}
	});//click function
} //end else

/***************
	Sort menu items mobile
***************/
$('#toggle').on('click', function(){

	sortMenu();

})


	function sortMenu(){


		if($(window).innerWidth() <= 991){
			$('#nav-menu .menu-row').each(function(){
				var storyDetach = $(this).find('#story-square').detach();
				var recipeDetach = $(this).find('#cocktails-square').detach();
				var contactDetach = $(this).find('#contact-square').detach();
				$('#menu-row-last').append(storyDetach).append(recipeDetach).append(contactDetach);

			}); //each function
		}else{

			$('#nav-menu .menu-row').each(function(){
				var storyDetach = $(this).find('#story-square').detach();
				var recipeDetach = $(this).find('#cocktails-square').detach();
				var contactDetach = $(this).find('#contact-square').detach();
				$('#menu-row-first').append(storyDetach);
				$('#menu-row-middle').append(recipeDetach);
				$('#menu-row-last').append(contactDetach);

			}); //each function
		}


	}

/***************
Modal set up
***************/



$('.plus-button').on('click', function(){

		$(this).toggleClass('is-open is-closed')
		//$('.mobile-nav').css('z-index','-1');
		//$(this).css('z-index','1500');
	if($(this).hasClass('is-open')){
		$(this).find('.btn-image').attr({src:'/wp-content/uploads/2017/03/module-minus.svg'}).addClass('close-modal-btn'); // find the button, make it minus, and add close class



			if($(this).hasClass('whiskey-modal')){
				//$('#mobile-modal').empty();
				var getIcons = $(this).parent('.no-mobile-col').closest('.main-page-slide').find('.icon-section').clone();
				var getImage = $(this).parent('.no-mobile-col').closest('.main-page-slide').attr('img-attr');
				$('#mobile-modal').append('<img src=' + getImage + '>').append(getIcons);
				$('#mobile-modal').modal({
					escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
		  			clickClose: true,       // Allows the user to close the modal by clicking the overlay
		  			showClose: false,
		  			fadeDuration: 250,
		  			fadeDelay: .4
				});


			}else if($(this).hasClass('about-modal')){

				var getDateImage = $(this).prevAll('.s-text').find('.s-text-button').attr('src');
				var getTitle = $(this).prevAll('.s-text').find('.s-header').html();
				var getParagraph = $(this).prevAll('.s-text').find('.s-paragraph').html();
				$('#mobile-modal-story').append('<img src=' + getDateImage + '>').append('<h1>' +getTitle+'</h1>').append('<p>' +getParagraph+'<p>');
				$('#mobile-modal-story').modal({
					escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
		  			clickClose: true,       // Allows the user to close the modal by clicking the overlay
		  			showClose: false,
		  			fadeDuration: 250,
		  			fadeDelay: .4
				});
			}else if($(this).hasClass('drink-modal')){

				var getDateImage = $(this).prevAll('.s-text').find('.s-text-button').attr('src');
				var getTitle = $(this).prevAll('.s-text').find('.s-header').html();
				var getParagraph = $(this).prevAll('.s-text').find('.s-paragraph').html();
				var getGuide = $(this).prevAll('.drink-guide').html();
				$('#mobile-modal-drinks').append('<img src=' + getDateImage + '>').append('<h1>' +getTitle+'</h1>').append('<p>' +getParagraph+'<p>').append(getGuide);
				$('#mobile-modal-drinks').modal({
					escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
		  			clickClose: true,       // Allows the user to close the modal by clicking the overlay
		  			showClose: false,
		  			fadeDuration: 250,
		  			fadeDelay: .4
				});
			}

	}else{
		//$('.mobile-nav').css('z-index','20');

		$.modal.close();
		$(this).find('.close-modal-btn').attr({src:'/wp-content/uploads/2017/03/module-plus.svg'}).removeClass('close-modal-btn');// find the minus btn image, switch it to plus and remove close btn class
		$('#mobile-modal').empty();
		$('#mobile-modal-story').empty();
		$('#mobile-modal-drinks').empty();
	}

});


$body.mousewheel(function(event) {

	if($('.plus-button').hasClass('is-open')){
		$.modal.close();
		$(this).find('.close-modal-btn').attr({src:'/wp-content/uploads/2017/03/module-plus.svg'}).removeClass('close-modal-btn');// find the minus btn image, switch it to plus and remove close btn class
		$('#mobile-modal').empty();
		$('#mobile-modal-story').empty();
		$('#mobile-modal-drinks').empty();
	}

});


$('div[id*="modal"]').on('click', function(){
	$.modal.close();
	$('body').find('.close-modal-btn').attr({src:'/wp-content/uploads/2017/03/module-plus.svg'}).removeClass('close-modal-btn');// find the minus btn image, switch it to plus and remove close btn class
	$('#mobile-modal').empty();
	$('#mobile-modal-story').empty();
	$('#mobile-modal-drinks').empty();
});



var selScrollable = '.ajaxSection';
// Uses document because document will be topmost level in bubbling
$(document).on('touchmove',function(e){
  e.preventDefault();
});
// Uses body because jQuery on events are called off of the element they are
// added to, so bubbling would not work if we used document instead.
$('body').on('touchstart', selScrollable, function(e) {
  if (e.currentTarget.scrollTop === 0) {
    e.currentTarget.scrollTop = 1;
  } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
    e.currentTarget.scrollTop -= 1;
  }
});
// Stops preventDefault from being called on document if it sees a scrollable div
$('body').on('touchmove', selScrollable, function(e) {
  e.stopPropagation();
});


/***************
animated chevrons - mobile
***************/

// TweenMax method :
var chevys = $('.swipe-chevron-container').children();

TweenMax.staggerFromTo(chevys,1.5,{opacity:0, scale:0},{opacity:1, scale:1.05, repeat: -1, repeatDelay: 0,ease: Power1.easeOut, yoyo:true}, .5)

/****************
AOS
****************/

// AOS.init();
var newAos = AOS.init({
  disable: 'phone'
});

// var modalIcon = $('#modal-icon');
// console.log(modalContent.height());
// console.log(modalContent.width());
// console.log(modalIcon.position());
// console.log(modalIcon.outerWidth());

// $(window).scroll(function(){
//     $(".fade-top").css("opacity", 1 - $(window).scrollTop() / 250);
//   });

// $('.age-gate-content').click(function (e) {
//   e.preventDefault();
//   return false;
// })

});// jquery document ready
