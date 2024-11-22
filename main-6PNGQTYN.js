import{a as R,c as Fe}from"./chunk-HVHJHHNO.js";import{B as T,C,D as s,E as l,F as p,G as d,K as u,L as pe,O as me,P as ge,Q as ve,R as j,S as G,W as _e,X as ye,Y as Ce,Z as J,_ as Ve,a as g,b as D,c as ue,ca as De,d as de,e as ce,ea as be,f as k,fa as Me,g as F,ga as Ae,h as v,ha as m,i as f,ia as H,j as he,ja as B,k as O,ka as Q,l as b,m as _,n as y,p as fe,q as E,r as w,s as Y,t as X,u as P,w as h,x as o,y as K,z as M}from"./chunk-S6EJ743M.js";var I=new f("app.constants"),Ee={provide:I,useValue:{appVersion:"1.0.0",appName:"It's You - Sanoj C R"}};var Ie=(()=>{class e{ngOnInit(){m()}ngAfterViewInit(){m()}constructor(i,n){this.translationService=i,this.constants=n,this.title="frontend",console.log(n.appName)}static{this.\u0275fac=function(n){return new(n||e)(o(R),o(I))}}static{this.\u0275cmp=b({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(n,r){n&1&&p(0,"router-outlet")},dependencies:[H]})}}return e})();var L=(()=>{class e{constructor(){}setItem(i,n){sessionStorage.setItem(i,n)}getItem(i){return sessionStorage.getItem(i)}removeItem(i){sessionStorage.removeItem(i)}clear(){sessionStorage.clear()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var U=(()=>{class e{constructor(i){this.session=i}get isDarkMode(){return this.session.getItem("theme-is-dark")=="true"}set isDarkMode(i){this.session.setItem("theme-is-dark",`${i}`)}static{this.\u0275fac=function(n){return new(n||e)(he(L))}}static{this.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Re=(()=>{class e{constructor(i,n){this._renderer=i,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(i,n){this._renderer.setProperty(this._elementRef.nativeElement,i,n)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}static{this.\u0275fac=function(n){return new(n||e)(o(K),o(X))}}static{this.\u0275dir=y({type:e})}}return e})(),He=(()=>{class e extends Re{static{this.\u0275fac=(()=>{let i;return function(r){return(i||(i=Y(e)))(r||e)}})()}static{this.\u0275dir=y({type:e,features:[M]})}}return e})(),re=new f(""),st={provide:re,useExisting:k(()=>oe),multi:!0},oe=(()=>{class e extends He{writeValue(i){this.setProperty("checked",i)}static{this.\u0275fac=(()=>{let i;return function(r){return(i||(i=Y(e)))(r||e)}})()}static{this.\u0275dir=y({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,r){n&1&&d("change",function(c){return r.onChange(c.target.checked)})("blur",function(){return r.onTouched()})},features:[j([st]),M]})}}return e})(),at={provide:re,useExisting:k(()=>Be),multi:!0};function lt(){let e=J()?J().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var ut=new f(""),Be=(()=>{class e extends Re{constructor(i,n,r){super(i,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!lt())}writeValue(i){let n=i??"";this.setProperty("value",n)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}static{this.\u0275fac=function(n){return new(n||e)(o(K),o(X),o(ut,8))}}static{this.\u0275dir=y({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&d("input",function(c){return r._handleInput(c.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(c){return r._compositionEnd(c.target.value)})},features:[j([at]),M]})}}return e})();var dt=new f(""),ct=new f("");function Le(e){return e!=null}function Ue(e){return _e(e)?ue(e):e}function We(e){let t={};return e.forEach(i=>{t=i!=null?g(g({},t),i):t}),Object.keys(t).length===0?null:t}function $e(e,t){return t.map(i=>i(e))}function ht(e){return!e.validate}function qe(e){return e.map(t=>ht(t)?t:i=>t.validate(i))}function ft(e){if(!e)return null;let t=e.filter(Le);return t.length==0?null:function(i){return We($e(i,t))}}function ze(e){return e!=null?ft(qe(e)):null}function pt(e){if(!e)return null;let t=e.filter(Le);return t.length==0?null:function(i){let n=$e(i,t).map(Ue);return ce(n).pipe(de(We))}}function Ze(e){return e!=null?pt(qe(e)):null}function xe(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function mt(e){return e._rawValidators}function gt(e){return e._rawAsyncValidators}function ee(e){return e?Array.isArray(e)?e:[e]:[]}function $(e,t){return Array.isArray(e)?e.includes(t):e===t}function ke(e,t){let i=ee(t);return ee(e).forEach(r=>{$(i,r)||i.push(r)}),i}function Oe(e,t){return ee(t).filter(i=>!$(e,i))}var q=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=ze(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Ze(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,i){return this.control?this.control.hasError(t,i):!1}getError(t,i){return this.control?this.control.getError(t,i):null}},te=class extends q{get formDirective(){return null}get path(){return null}},x=class extends q{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ie=class{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},vt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},li=D(g({},vt),{"[class.ng-submitted]":"isSubmitted"}),Ye=(()=>{class e extends ie{constructor(i){super(i)}static{this.\u0275fac=function(n){return new(n||e)(o(x,2))}}static{this.\u0275dir=y({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&C("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[M]})}}return e})();var S="VALID",W="INVALID",A="PENDING",N="DISABLED";function _t(e){return(z(e)?e.validators:e)||null}function yt(e){return Array.isArray(e)?ze(e):e||null}function Ct(e,t){return(z(t)?t.asyncValidators:e)||null}function Vt(e){return Array.isArray(e)?Ze(e):e||null}function z(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var ne=class{constructor(t,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===W}get pending(){return this.status==A}get disabled(){return this.status===N}get enabled(){return this.status!==N}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(ke(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(ke(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Oe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Oe(t,this._rawAsyncValidators))}hasValidator(t){return $(this._rawValidators,t)}hasAsyncValidator(t){return $(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=A,t.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){let i=this._parentMarkedDirty(t.onlySelf);this.status=N,this.errors=null,this._forEachChild(n=>{n.disable(D(g({},t),{onlySelf:!0}))}),this._updateValue(),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(D(g({},t),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(t={}){let i=this._parentMarkedDirty(t.onlySelf);this.status=S,this._forEachChild(n=>{n.enable(D(g({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(D(g({},t),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===A)&&this._runAsyncValidator(t.emitEvent)),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;let i=Ue(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,i={}){this.errors=t,this._updateControlsErrors(i.emitEvent!==!1)}get(t){let i=t;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(t,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[t]:null}hasError(t,i){return!!this.getError(t,i)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new P,this.statusChanges=new P}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?W:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(W)?W:S}_anyControlsHaveStatus(t){return this._anyControls(i=>i.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){z(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let i=this._parent&&this._parent.dirty;return!t&&!!i&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=yt(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Vt(this._rawAsyncValidators)}};var se=new f("CallSetDisabledState",{providedIn:"root",factory:()=>Z}),Z="always";function Dt(e,t){return[...t.path,e]}function bt(e,t,i=Z){At(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||i==="always")&&t.valueAccessor.setDisabledState?.(e.disabled),Ft(e,t),wt(e,t),Et(e,t),Mt(e,t)}function Pe(e,t){e.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(t)})}function Mt(e,t){if(t.valueAccessor.setDisabledState){let i=n=>{t.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(i),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(i)})}}function At(e,t){let i=mt(e);t.validator!==null?e.setValidators(xe(i,t.validator)):typeof i=="function"&&e.setValidators([i]);let n=gt(e);t.asyncValidator!==null?e.setAsyncValidators(xe(n,t.asyncValidator)):typeof n=="function"&&e.setAsyncValidators([n]);let r=()=>e.updateValueAndValidity();Pe(t._rawValidators,r),Pe(t._rawAsyncValidators,r)}function Ft(e,t){t.valueAccessor.registerOnChange(i=>{e._pendingValue=i,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Xe(e,t)})}function Et(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Xe(e,t),e.updateOn!=="submit"&&e.markAsTouched()})}function Xe(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function wt(e,t){let i=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n)};e.registerOnChange(i),t._registerOnDestroy(()=>{e._unregisterOnChange(i)})}function It(e,t){if(!e.hasOwnProperty("model"))return!1;let i=e.model;return i.isFirstChange()?!0:!Object.is(t,i.currentValue)}function St(e){return Object.getPrototypeOf(e.constructor)===He}function Nt(e,t){if(!t)return null;Array.isArray(t);let i,n,r;return t.forEach(a=>{a.constructor===Be?i=a:St(a)?n=a:r=a}),r||n||i||null}function Te(e,t){let i=e.indexOf(t);i>-1&&e.splice(i,1)}function je(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var xt=class extends ne{constructor(t=null,i,n){super(_t(i),Ct(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(i)&&(i.nonNullable||i.initialValueIsDefault)&&(je(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,i={}){this.value=this._pendingValue=t,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(t,i={}){this.setValue(t,i)}reset(t=this.defaultValue,i={}){this._applyFormState(t),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Te(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Te(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){je(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var kt={provide:x,useExisting:k(()=>ae)},Ge=Promise.resolve(),ae=(()=>{class e extends x{constructor(i,n,r,a,c,rt){super(),this._changeDetectorRef=c,this.callSetDisabledState=rt,this.control=new xt,this._registered=!1,this.name="",this.update=new P,this._parent=i,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Nt(this,a)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let n=i.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),It(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){bt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Ge.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let n=i.isDisabled.currentValue,r=n!==0&&Ce(n);Ge.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Dt(i,this._parent):[i]}static{this.\u0275fac=function(n){return new(n||e)(o(te,9),o(dt,10),o(ct,10),o(re,10),o(ye,8),o(se,8))}}static{this.\u0275dir=y({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[O.None,"disabled","isDisabled"],model:[O.None,"ngModel","model"],options:[O.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[j([kt]),M,fe]})}}return e})();var Ot=new f("");var Ke=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=_({type:e})}static{this.\u0275inj=v({})}}return e})();var Je=(()=>{class e{static withConfig(i){return{ngModule:e,providers:[{provide:se,useValue:i.callSetDisabledState??Z}]}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=_({type:e})}static{this.\u0275inj=v({imports:[Ke]})}}return e})(),Qe=(()=>{class e{static withConfig(i){return{ngModule:e,providers:[{provide:Ot,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:se,useValue:i.callSetDisabledState??Z}]}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=_({type:e})}static{this.\u0275inj=v({imports:[Ke]})}}return e})();var le=e=>({"active-nav ":e}),et=(()=>{class e{constructor(i,n,r,a){this.translationService=i,this.constants=n,this.router=r,this.theme=a,this.selectedLanguage="en",console.log(n.appName)}ngOnInit(){m(),this.isDarkMode=!0,this.toggleDarkMode()}ngAfterViewInit(){m()}setLanguage(i){this.selectedLanguage=i,this.translationService.setLanguage(i)}toggleDarkMode(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}navigateToRoute(i){this.router.navigate([i]).then(()=>{document.querySelector("[drawer-backdrop]").click(),console.log(`navigated to ${i}`)}).catch(n=>{console.error(`error navigating to ${i}:`,n)})}isActive(i){return this.router.url===`/${i}`}get isDarkMode(){return this.theme.isDarkMode}set isDarkMode(i){this.theme.isDarkMode=i}static{this.\u0275fac=function(n){return new(n||e)(o(R),o(I),o(B),o(U))}}static{this.\u0275cmp=b({type:e,selectors:[["app-main-nav"]],decls:48,vars:31,consts:[["data-drawer-target","default-sidebar","data-drawer-toggle","default-sidebar","aria-controls","default-sidebar","type","button",1,"inline-flex","items-center","p-2","mt-2","ms-3","text-sm","text-gray-500","rounded-lg","sm:hidden","hover:bg-gray-100","focus:outline-none","focus:ring-2","focus:ring-gray-200","dark:text-gray-400","dark:hover:bg-gray-700","dark:focus:ring-gray-600"],[1,"sr-only"],["aria-hidden","true","fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6"],["clip-rule","evenodd","fill-rule","evenodd","d","M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"],["id","default-sidebar","aria-label","Sidebar",1,"fixed","top-0","left-0","z-40","h-screen","transition-transform","-translate-x-full","sm:translate-x-0"],[1,"its-you","side-bar","pb-3rem","h-full","py-4","overflow-y-auto","bg-gray-50","dark:bg-gray-800"],[1,"space-y-2","font-medium"],[1,"its-you","nav-menu"],["href","javascript:void(0)",1,"nav-item","flex","items-center","p-2","text-gray-900","rounded-lg","dark:text-white","hover:bg-gray-100","dark:hover:bg-gray-700","group",3,"click","ngClass"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 22 21",1,"w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-white"],["d","M10.707 1.293a1 1 0 0 0-1.414 0L1 9.586V18a1 1 0 0 0 1 1h6v-5h4v5h6a1 1 0 0 0 1-1V9.586l-8.293-8.293Z"],["d","M12 3.414V8a1 1 0 1 1-2 0V3.414L4.414 9H3v8h4v-4h6v4h4V9h-1.414L12 3.414Z"],[1,"m-auto"],["d","M2 2a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm0 2h16v13H2V4Zm18 13V4h-2v13h2ZM4 6h10v2H4V6Zm0 4h10v2H4v-2Zm0 4h10v2H4v-2Z"],[1,"m-auto","whitespace-nowrap"],["d","M5 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM13 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM0 9a1 1 0 0 1 1-1h2.182l.6-2.4A3 3 0 0 1 6.696 3h8.608a3 3 0 0 1 2.915 2.6l.6 2.4H21a1 1 0 0 1 1 1v4a3 3 0 0 1-3 3v1a1 1 0 1 1-2 0v-1H5v1a1 1 0 1 1-2 0v-1a3 3 0 0 1-3-3V9Zm3 0h16v4a1 1 0 0 0 1 1h1V9h-2.636l-.8-3.2A1 1 0 0 0 15.304 5H6.696a1 1 0 0 0-.961.8L4.936 9H3v5h1a1 1 0 0 0 1-1V9ZM5 14a2 2 0 1 1 4 0H5Zm8 0a2 2 0 1 1 4 0H13Z"],[1,"its-you","nav-menu","mt-30"],[1,"nav-item","inline-flex","items-center","cursor-pointer"],["type","checkbox",1,"sr-only",3,"input","ngModelChange","ngModel"],[1,"w-10","h-6","bg-gray-200","rounded-full","p-1","duration-300","ease-in-out"],[1,"bg-white","w-4","h-4","rounded-full","shadow-md","transform","duration-300","ease-in-out"],[1,"ml-3","text-gray-700"],["role","group",1,"nav-item","inline-flex","rounded-md","shadow-sm"],[1,"px-4","py-2","text-sm","font-medium","rounded-l-md","border","border-gray-300",3,"click"],[1,"px-4","py-2","text-sm","font-medium","rounded-r-md","border","border-gray-300",3,"click"],[1,"p-4","sm:ml-64","dark:bg-gray-800"],[1,"absolute","top-0","left-1/2","transform","-translate-x-1/2","p-4","sm:p-0","sm:static","sm:transform-none","sm:translate-x-0"],[1,"its-you","logo"],[1,"p-4","border-2","border-gray-200","border-dashed","rounded-lg","dark:border-gray-700","dark:bg-gray-800"]],template:function(n,r){n&1&&(s(0,"button",0)(1,"span",1),u(2,"Open sidebar"),l(),E(),s(3,"svg",2),p(4,"path",3),l()(),w(),s(5,"aside",4)(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),d("click",function(){return r.navigateToRoute("home")}),E(),s(10,"svg",9),p(11,"path",10)(12,"path",11),l(),w(),s(13,"span",12),u(14,"Home"),l()()(),s(15,"li",7)(16,"a",8),d("click",function(){return r.navigateToRoute("blog")}),E(),s(17,"svg",9),p(18,"path",13),l(),w(),s(19,"span",14),u(20,"Blog"),l()()(),s(21,"li",7)(22,"a",8),d("click",function(){return r.navigateToRoute("passion")}),E(),s(23,"svg",9),p(24,"path",15),l(),w(),s(25,"span",14),u(26,"Passion"),l()()()(),s(27,"ul",6)(28,"li",16)(29,"label",17)(30,"input",18),d("input",function(){return r.toggleDarkMode()}),ve("ngModelChange",function(c){return ge(r.isDarkMode,c)||(r.isDarkMode=c),c}),l(),s(31,"div",19),p(32,"div",20),l(),s(33,"span",21),u(34),l()()(),s(35,"li",16)(36,"div",22)(37,"button",23),d("click",function(){return r.setLanguage("en")}),u(38," en "),l(),s(39,"button",24),d("click",function(){return r.setLanguage("mal")}),u(40," mal "),l()()()()()(),s(41,"div",25)(42,"div",26)(43,"div",27)(44,"span"),u(45,"S"),l()()(),s(46,"div",28),p(47,"router-outlet"),l()()),n&2&&(h(9),T("ngClass",G(25,le,r.isActive("home"))),h(7),T("ngClass",G(27,le,r.isActive("blog"))),h(6),T("ngClass",G(29,le,r.isActive("passion"))),h(8),me("ngModel",r.isDarkMode),h(),C("bg-green-500",r.isDarkMode),h(),C("translate-x-4",r.isDarkMode),h(2),pe(r.isDarkMode?"Dark":"Light"),h(3),C("bg-indigo-600",r.selectedLanguage==="en")("text-white",r.selectedLanguage==="en")("bg-gray-200",r.selectedLanguage!=="en")("text-gray-700",r.selectedLanguage!=="en"),h(2),C("bg-indigo-600",r.selectedLanguage==="mal")("text-white",r.selectedLanguage==="mal")("bg-gray-200",r.selectedLanguage!=="mal")("text-gray-700",r.selectedLanguage!=="mal"))},dependencies:[Ve,oe,Ye,ae,H],styles:[".its-you.nav-menu[_ngcontent-%COMP%]{transform:rotate(-90deg);padding-top:2rem;padding-bottom:2rem}.its-you.nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin-left:-33px}.its-you.side-bar[_ngcontent-%COMP%]{overflow-x:hidden}.its-you.mt-30[_ngcontent-%COMP%]{margin-top:30px}.its-you.m-auto[_ngcontent-%COMP%]{margin:auto}@media (min-width: 640px){.sm\\:ml-64[_ngcontent-%COMP%]{margin-left:4.5rem}}.its-you.pb-3rem[_ngcontent-%COMP%]{padding-bottom:3rem}"]})}}return e})();var tt=(()=>{class e{constructor(i,n,r){this.route=i,this.theme=n,this.session=r,this.setDarkMode(n.isDarkMode)}ngOnInit(){m()}ngAfterViewInit(){m()}setDarkMode(i){i?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}redirectToHome(){this.route.navigate(["/"])}static{this.\u0275fac=function(n){return new(n||e)(o(B),o(U),o(L))}}static{this.\u0275cmp=b({type:e,selectors:[["app-not-found"]],decls:11,vars:0,consts:[[1,"grid","min-h-full","place-items-center","bg-white","px-6","py-24","sm:py-32","lg:px-8","dark:bg-gray-800"],[1,"text-center","dark:bg-gray-800"],[1,"text-base","font-semibold","text-indigo-600"],[1,"mt-4","text-3xl","font-bold","tracking-tight","text-gray-900","sm:text-5xl","dark:text-white"],[1,"mt-6","text-base","leading-7","text-gray-600"],[1,"mt-10","flex","items-center","justify-center","gap-x-6"],["href","javascript:void(0)",1,"rounded-md","bg-indigo-600","px-3.5","py-2.5","text-sm","font-semibold","text-white","shadow-sm","hover:bg-indigo-500","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"click"]],template:function(n,r){n&1&&(s(0,"main",0)(1,"div",1)(2,"p",2),u(3,"404"),l(),s(4,"h1",3),u(5,"Page not found"),l(),s(6,"p",4),u(7,"Sorry, we couldn\u2019t find the page you\u2019re looking for."),l(),s(8,"div",5)(9,"a",6),d("click",function(){return r.redirectToHome()}),u(10,"Go back to home"),l()()()())}})}}return e})();var Tt=[{path:"",component:et,children:[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-EYC5FY7J.js").then(e=>e.HomeModule)},{path:"blog",loadChildren:()=>import("./chunk-6SV2NIPB.js").then(e=>e.BlogModule)},{path:"passion",loadChildren:()=>import("./chunk-7EIPV6CC.js").then(e=>e.PassionModule)}]},{path:"**",pathMatch:"full",component:tt}],it=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=_({type:e})}static{this.\u0275inj=v({imports:[Q.forRoot(Tt,{useHash:!0}),Q]})}}return e})();var nt=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=_({type:e,bootstrap:[Ie]})}static{this.\u0275inj=v({providers:[Ee],imports:[Ae,De,Je,Qe,be,it,Fe]})}}return e})();Me().bootstrapModule(nt).catch(e=>console.error(e));