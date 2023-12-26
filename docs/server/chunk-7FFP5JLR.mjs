import './polyfills.server.mjs';
import{A as h,B as f,C as j,D as Me,E as Ee,F as p,G as Ae,H as v,I as we,J as Fe,K as w,R as Ie,S as te,U as Se,V as G,W as xe,X as Ne,_ as Oe,a as ge,b as ye,c as ve,d as E,e as k,ea as ie,f as K,g as c,h as A,i as D,j as d,k as m,l as Y,m as _e,n as Ce,o as T,p as J,q as Q,r as _,s,t as Ve,u as C,v as V,w as De,x as b,y as ee,z as be}from"./chunk-HHM6BYC2.mjs";import{a as y,b as M}from"./chunk-KRLCULJA.mjs";var Pe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();var ke=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({imports:[G]});let t=e;return t})();var We=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(Q),s(J))},e.\u0275dir=m({type:e});let t=e;return t})(),ze=(()=>{let e=class e extends We{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=T(e)))(o||e)}})(),e.\u0275dir=m({type:e,features:[V]});let t=e;return t})(),re=new A("NgValueAccessor");var yt={provide:re,useExisting:E(()=>W),multi:!0};function vt(){let t=te()?te().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var _t=new A("CompositionEventMode"),W=(()=>{let e=class e extends We{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!vt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(Q),s(J),s(_t,8))},e.\u0275dir=m({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[w([yt]),V]});let t=e;return t})();function Te(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}var oe=new A("NgValidators"),qe=new A("NgAsyncValidators");function Ct(t){return e=>{if(Te(e.value)||Te(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function je(t){return null}function Ze(t){return t!=null}function Xe(t){return Ee(t)?ge(t):t}function Ke(t){let e={};return t.forEach(n=>{e=n!=null?y(y({},e),n):e}),Object.keys(e).length===0?null:e}function Ye(t,e){return e.map(n=>n(t))}function Vt(t){return!t.validate}function Je(t){return t.map(e=>Vt(e)?e:n=>e.validate(n))}function Dt(t){if(!t)return null;let e=t.filter(Ze);return e.length==0?null:function(n){return Ke(Ye(n,e))}}function se(t){return t!=null?Dt(Je(t)):null}function bt(t){if(!t)return null;let e=t.filter(Ze);return e.length==0?null:function(n){let i=Ye(n,e).map(Xe);return ve(i).pipe(ye(Ke))}}function ae(t){return t!=null?bt(Je(t)):null}function Ge(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Mt(t){return t._rawValidators}function Et(t){return t._rawAsyncValidators}function ne(t){return t?Array.isArray(t)?t:[t]:[]}function H(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ue(t,e){let n=ne(e);return ne(t).forEach(r=>{H(n,r)||n.push(r)}),n}function He(t,e){return ne(e).filter(n=>!H(t,n))}var B=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=se(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ae(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},I=class extends B{get formDirective(){return null}get path(){return null}},O=class extends B{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},At={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ji=M(y({},At),{"[class.ng-submitted]":"isSubmitted"}),Qe=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(O,2))},e.\u0275dir=m({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[V]});let t=e;return t})(),et=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(I,10))},e.\u0275dir=m({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[V]});let t=e;return t})();var S="VALID",U="INVALID",F="PENDING",x="DISABLED";function tt(t){return(z(t)?t.validators:t)||null}function wt(t){return Array.isArray(t)?se(t):t||null}function it(t,e){return(z(e)?e.asyncValidators:t)||null}function Ft(t){return Array.isArray(t)?ae(t):t||null}function z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function It(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new k(1e3,"");if(!i[n])throw new k(1001,"")}function St(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new k(1002,"")})}var L=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===U}get pending(){return this.status==F}get disabled(){return this.status===x}get enabled(){return this.status!==x}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ue(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ue(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(He(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(He(e,this._rawAsyncValidators))}hasValidator(e){return H(this._rawValidators,e)}hasAsyncValidator(e){return H(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=F,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=x,this.errors=null,this._forEachChild(i=>{i.disable(M(y({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(M(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(i=>{i.enable(M(y({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(M(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===F)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?x:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=F,this._hasOwnPendingAsyncValidator=!0;let n=Xe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?x:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(F)?F:this._anyControlsHaveStatus(U)?U:S}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=wt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ft(this._rawAsyncValidators)}},$=class extends L{constructor(e,n,i){super(tt(n),it(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){St(this,!0,e),Object.keys(e).forEach(i=>{It(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var le=new A("CallSetDisabledState",{providedIn:"root",factory:()=>ue}),ue="always";function xt(t,e){return[...e.path,t]}function nt(t,e,n=ue){rt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Ot(t,e),kt(t,e),Pt(t,e),Nt(t,e)}function Be(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Nt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function rt(t,e){let n=Mt(t);e.validator!==null?t.setValidators(Ge(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Et(t);e.asyncValidator!==null?t.setAsyncValidators(Ge(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Be(e._rawValidators,r),Be(e._rawAsyncValidators,r)}function Ot(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ot(t,e)})}function Pt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ot(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ot(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function kt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Tt(t,e){t==null,rt(t,e)}function jt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Gt(t){return Object.getPrototypeOf(t.constructor)===ze}function Ut(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Ht(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===W?n=o:Gt(o)?i=o:r=o}),r||i||n||null}var Bt={provide:I,useExisting:E(()=>ce)},N=(()=>Promise.resolve())(),ce=(()=>{let e=class e extends I{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new C,this.form=new $({},se(i),ae(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){N.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),nt(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){N.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){N.then(()=>{let r=this._findContainer(i.path),o=new $({});Tt(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){N.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){N.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Ut(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(s(oe,10),s(qe,10),s(le,8))},e.\u0275dir=m({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&p("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[w([Bt]),V]});let t=e;return t})();function Re(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Le(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Rt=class extends L{constructor(e=null,n,i){super(tt(n),it(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Le(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Re(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Re(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Le(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Lt={provide:O,useExisting:E(()=>de)},$e=(()=>Promise.resolve())(),de=(()=>{let e=class e extends O{constructor(i,r,o,u,a,gt){super(),this._changeDetectorRef=a,this.callSetDisabledState=gt,this.control=new Rt,this._registered=!1,this.name="",this.update=new C,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Ht(this,u)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),jt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){nt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){$e.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Ie(r);$e.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?xt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(s(I,9),s(oe,10),s(qe,10),s(re,10),s(Ve,8),s(le,8))},e.\u0275dir=m({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[w([Lt]),V,Y]});let t=e;return t})(),st=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=m({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})(),$t={provide:re,useExisting:E(()=>he),multi:!0},he=(()=>{let e=class e extends ze{writeValue(i){let r=i??"";this.setProperty("value",r)}registerOnChange(i){this.onChange=r=>{i(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=T(e)))(o||e)}})(),e.\u0275dir=m({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,o){r&1&&p("input",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},features:[w([$t]),V]});let t=e;return t})();var Wt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({});let t=e;return t})();function zt(t){return typeof t=="number"?t:parseFloat(t)}var qt=(()=>{let e=class e{constructor(){this._validator=je}ngOnChanges(i){if(this.inputName in i){let r=this.normalizeInput(i[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):je,this._onChange&&this._onChange()}}validate(i){return this._validator(i)}registerOnValidatorChange(i){this._onChange=i}enabled(i){return i!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=m({type:e,features:[Y]});let t=e;return t})();var Zt={provide:oe,useExisting:E(()=>fe),multi:!0},fe=(()=>{let e=class e extends qt{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=i=>zt(i),this.createValidator=i=>Ct(i)}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=T(e)))(o||e)}})(),e.\u0275dir=m({type:e,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(r,o){r&2&&De("min",o._enabled?o.min:null)},inputs:{min:"min"},features:[w([Zt]),V]});let t=e;return t})();var Xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({imports:[Wt]});let t=e;return t})();var at=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:le,useValue:i.callSetDisabledState??ue}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({imports:[Xt]});let t=e;return t})();import Yt from"crypto";var Z=new Uint8Array(256),q=Z.length;function pe(){return q>Z.length-16&&(Yt.randomFillSync(Z),q=0),Z.slice(q,q+=16)}var l=[];for(let t=0;t<256;++t)l.push((t+256).toString(16).slice(1));function lt(t,e=0){return l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]}import Jt from"crypto";var me={randomUUID:Jt.randomUUID};function Qt(t,e,n){if(me.randomUUID&&!e&&!t)return me.randomUUID();t=t||{};let i=t.random||(t.rng||pe)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=i[r];return e}return lt(i)}var P=Qt;var ut=(()=>{let e=class e{constructor(){this.characters=[{id:P(),name:"Krillin",power:1e3},{id:P(),name:"Goku",power:9500}]}onNewCharacter(i){let r=y({id:P()},i);this.characters.push(i)}onDeleteCharacter(i){this.characters=this.characters.filter(r=>r.id!==i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function ti(t,e){if(t&1){let n=Me();h(0,"li",2)(1,"span",3),v(2),f(),v(3),h(4,"button",4),p("click",function(){let o=_e(n).$implicit,u=Ae();return Ce(u.onDeleteCharacter(o.id))}),v(5," X "),f()()}if(t&2){let n=e.$implicit,i=e.index;_(2),we(i+1),_(1),Fe(" ",n.name," - Power: ",n.power," ")}}var ct=(()=>{let e=class e{constructor(){this.characterList=[{name:"Trunks",power:10}],this.onDelete=new C}onDeleteCharacter(i){i&&(console.log(i),this.onDelete.emit(i))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=D({type:e,selectors:[["dbz-list"]],inputs:{characterList:"characterList"},outputs:{onDelete:"onDelete"},decls:4,vars:1,consts:[[1,"list-group"],["class","list-group-item d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"text-primary"],[1,"btn","btn-danger",3,"click"]],template:function(r,o){r&1&&(h(0,"h4"),v(1,"Listado"),f(),h(2,"ul",0),be(3,ti,6,3,"li",1),f()),r&2&&(_(3),b("ngForOf",o.characterList))},dependencies:[Se],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var dt=(()=>{let e=class e{constructor(){this.onNewCharacter=new C,this.character={name:"",power:5}}emitCharacter(){this.character.name.length!==0&&(this.onNewCharacter.emit(this.character),this.character={name:"",power:0})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=D({type:e,selectors:[["dbz-add-character"]],outputs:{onNewCharacter:"onNewCharacter"},decls:7,vars:2,consts:[[1,"row",3,"ngSubmit"],["type","text","name","name","placeholder","Nombre",1,"form-control","mb-2",3,"ngModel","ngModelChange"],["type","number","name","power","min","0","placeholder","Poder",1,"form-control","mb-2",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary"]],template:function(r,o){r&1&&(h(0,"h4"),v(1,"Agregar Personajes"),f(),h(2,"form",0),p("ngSubmit",function(){return o.emitCharacter()}),h(3,"input",1),p("ngModelChange",function(a){return o.character.name=a}),f(),h(4,"input",2),p("ngModelChange",function(a){return o.character.power=a}),f(),h(5,"button",3),v(6,"Agregar"),f()()),r&2&&(_(3),b("ngModel",o.character.name),_(1),b("ngModel",o.character.power))},dependencies:[st,W,he,Qe,et,fe,de,ce]});let t=e;return t})();var ht=(()=>{let e=class e{constructor(i){this.dbzService=i}get characters(){return[...this.dbzService.characters]}onDeleteCharacter(i){this.dbzService.onDeleteCharacter(i)}onNewCharacter(i){this.dbzService.onNewCharacter(i)}};e.\u0275fac=function(r){return new(r||e)(s(ut))},e.\u0275cmp=D({type:e,selectors:[["app-dbz-main-page"]],decls:8,vars:1,consts:[[1,"row"],[1,"col"],[3,"characterList","onDelete"],[3,"onNewCharacter"]],template:function(r,o){r&1&&(h(0,"h1"),v(1,"DBZ Personajes"),f(),j(2,"hr"),h(3,"div",0)(4,"div",1)(5,"dbz-list",2),p("onDelete",function(a){return o.onDeleteCharacter(a)}),f()(),h(6,"div",1)(7,"dbz-add-character",3),p("onNewCharacter",function(a){return o.onNewCharacter(a)}),f()()()),r&2&&(_(5),b("characterList",o.characters))},dependencies:[ct,dt],encapsulation:2});let t=e;return t})();var ft=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({imports:[G,at]});let t=e;return t})();var oi=[],pt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d({type:e}),e.\u0275inj=c({imports:[ie.forRoot(oi),ie]});let t=e;return t})();var X=(()=>{let e=class e{constructor(){this.title="bases",this.counter=10}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=D({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,o){r&1&&j(0,"app-dbz-main-page")},dependencies:[ht]});let t=e;return t})();var mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d({type:e,bootstrap:[X]}),e.\u0275inj=c({providers:[Ne()],imports:[xe,Pe,ke,ft,pt]});let t=e;return t})();var si=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d({type:e,bootstrap:[X]}),e.\u0275inj=c({imports:[mt,Oe]});let t=e;return t})();export{si as a};
