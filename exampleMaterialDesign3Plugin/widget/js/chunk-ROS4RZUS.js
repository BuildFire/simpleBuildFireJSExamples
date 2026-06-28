import{a as v,b as x,c as y}from"./chunk-H2BEZHA7.js";import{b as m,e as g}from"./chunk-WDRFGVP3.js";import{a as n,b as _}from"./chunk-7HS7QXLY.js";import{c as b}from"./chunk-4N3YMIRZ.js";import{c as r,f as s,g as h,n as p,o as f,p as u}from"./chunk-7ZXYUCNL.js";import{a,d as t}from"./chunk-HWU6EPZU.js";function d(l,e=!0){return e&&getComputedStyle(l).getPropertyValue("direction").trim()==="rtl"}var L=b(y(g(m(f)))),i=class extends L{constructor(){super(),this.softDisabled=!1,this.flipIconInRtl=!1,this.href="",this.download="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.flipIcon=d(this,this.flipIconInRtl),!!1&&(x(this,"click"),this.addEventListener("click",e=>{if(this.softDisabled||this.disabled&&this.href){e.stopImmediatePropagation(),e.preventDefault();return}let o=this.selected;v(e,()=>{!this.toggle||this.disabled||e.defaultPrevented||(this.selected=!o,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))})}))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){let e=this.href?n`div`:n`button`,{ariaLabel:o,ariaHasPopup:$,ariaExpanded:w}=this,I=o&&this.ariaLabelSelected,k=this.toggle?this.selected:t,c=t;return this.href||(c=I&&this.selected?this.ariaLabelSelected:o),_`<${e}
        class="icon-button ${u(this.getRenderClasses())}"
        id="button"
        aria-label="${c||t}"
        aria-haspopup="${!this.href&&$||t}"
        aria-expanded="${!this.href&&w||t}"
        aria-pressed="${k}"
        aria-disabled=${!this.href&&this.softDisabled||t}
        ?disabled="${!this.href&&this.disabled}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?t:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():t}
        ${this.href?this.renderLink():this.renderTouchTarget()}
  </${e}>`}renderLink(){let{ariaLabel:e}=this;return a`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||t}"
        target="${this.target||t}"
        aria-label="${e||t}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return a`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return a`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return a`<span class="touch"></span>`}renderFocusRing(){return a`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){let e=!this.href&&(this.disabled||this.softDisabled);return a`<md-ripple
      for=${this.href?"link":t}
      ?disabled="${e}"></md-ripple>`}connectedCallback(){this.flipIcon=d(this,this.flipIconInRtl),super.connectedCallback()}};i.shadowRootOptions={mode:"open",delegatesFocus:!0};r([s({type:Boolean,attribute:"soft-disabled",reflect:!0})],i.prototype,"softDisabled",void 0);r([s({type:Boolean,attribute:"flip-icon-in-rtl"})],i.prototype,"flipIconInRtl",void 0);r([s()],i.prototype,"href",void 0);r([s()],i.prototype,"download",void 0);r([s()],i.prototype,"target",void 0);r([s({attribute:"aria-label-selected"})],i.prototype,"ariaLabelSelected",void 0);r([s({type:Boolean})],i.prototype,"toggle",void 0);r([s({type:Boolean,reflect:!0})],i.prototype,"selected",void 0);r([h()],i.prototype,"flipIcon",void 0);var D=p`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`,X=D.styleSheet;export{i as a,D as b};
