import{e as i,f as o,g as r,i as c,l as a,n as l,o as u}from"./chunk-7ZXYUCNL.js";import{a as n}from"./chunk-HWU6EPZU.js";import{a as e}from"./chunk-JFKSI6I7.js";var t=class extends u{constructor(){super(...arguments);this.showCheckmark=!1;this.label="Copy code";this.successLabel="Copy successful";this.buttonTitle="Copy code"}render(){return n`
      <slot></slot>
      <md-icon-button
        toggle
        @click=${this.onClick}
        @input=${this.onInput}
        title=${this.buttonTitle}
        .selected=${this.showCheckmark}
        aria-label=${this.label}
        aria-label-selected=${this.successLabel}>
        <md-icon>content_copy</md-icon>
        <md-icon slot="selected">check</md-icon>
      </md-icon-button>
    `}async onClick(){await navigator.clipboard.writeText(this.getCopyText()),this.onCopySuccess()}onInput(){this.showCheckmark=this.copyButton.selected}getCopyText(){let s="";for(let d of this.slottedEls)s+=d.textContent;return s}onCopySuccess(){this.showCheckmark=!0,this.timeoutId&&window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>{this.showCheckmark=!1},2e3)}};t.styles=l`
    :host {
      display: block;
      position: relative;
      --_border-radius: calc(var(--catalog-code-block-border-radius) / 4);
    }

    md-icon-button {
      color: red;
      position: absolute;
      inset: var(
        --catalog-copy-code-button-inset,
        var(--_border-radius) var(--_border-radius) auto auto
      );
      --md-sys-color-on-surface-variant: var(--md-sys-color-on-surface);
      --md-sys-color-primary: var(--md-sys-color-on-surface);
    }
  `,e([r()],t.prototype,"showCheckmark",2),e([o()],t.prototype,"label",2),e([o({attribute:"success-label"})],t.prototype,"successLabel",2),e([o({attribute:"button-title"})],t.prototype,"buttonTitle",2),e([c("md-icon-button")],t.prototype,"copyButton",2),e([a({flatten:!0,selector:"*"})],t.prototype,"slottedEls",2),t=e([i("copy-code-button")],t);
