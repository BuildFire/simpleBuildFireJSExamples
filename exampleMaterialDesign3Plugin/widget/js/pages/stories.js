import"../chunk-NOH2WKZ7.js";import{a as p}from"../chunk-JXSZ5JVN.js";import{e as n,g as a,i as s,n as d,o as c,p as g}from"../chunk-7ZXYUCNL.js";import{a as h}from"../chunk-HWU6EPZU.js";import{a as t}from"../chunk-JFKSI6I7.js";var r=class extends c{constructor(){super(...arguments);this.isDragging=!1;this.editorHeightPercent=0;this.pointerIds=new Set}render(){return h`<div
      id="wrapper"
      style=${p({"--editor-percentage":`${this.editorHeightPercent}%`})}
    >
      <slot name="preview"></slot>
      <div
        id="drag-bar"
        tabindex="0"
        role="slider"
        aria-orientation="vertical"
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow="${this.editorHeightPercent}"
        aria-valuetext="${this.editorHeightPercent} percent"
        aria-label="Editor height"
        @focus=${this.onFocus}
        @blur=${this.onBlur}
        @keydown=${this.onKeydown}
        @pointerdown=${this.onPointerdown}
        @pointerup=${this.onPointerup}
        @pointermove=${this.onPointermove}
        class=${g({isDragging:this.isDragging})}
      >
        <md-icon>drag_handle</md-icon>
      </div>
      <slot name="editor"></slot>
    </div>`}onFocus(){this.isDragging=!0}onBlur(){this.isDragging=!1}onKeydown(e){let{key:i}=e;switch(i){case"ArrowRight":case"ArrowUp":this.editorHeightPercent=Math.min(this.editorHeightPercent+1,100);break;case"ArrowLeft":case"ArrowDown":this.editorHeightPercent=Math.max(this.editorHeightPercent-1,0);break;case"PageUp":this.editorHeightPercent=Math.min(this.editorHeightPercent+10,100);break;case"PageDown":this.editorHeightPercent=Math.max(this.editorHeightPercent-10,0);break;case"Home":this.editorHeightPercent=0;break;case"End":this.editorHeightPercent=100;break;default:break}}onPointerdown(e){this.isDragging=!0,!this.pointerIds.has(e.pointerId)&&(this.pointerIds.add(e.pointerId),e.target.setPointerCapture(e.pointerId))}onPointerup(e){this.pointerIds.delete(e.pointerId),e.target.releasePointerCapture(e.pointerId),this.pointerIds.size===0&&(this.isDragging=!1)}onPointermove(e){if(!this.isDragging)return;let{clientY:i}=e,{top:o,bottom:l}=this.wrapperEl.getBoundingClientRect(),m=l-o,b=100-(i-o)/m*100;this.editorHeightPercent=Math.min(Math.max(b,0),100)}};r.styles=d`
    :host {
      display: block;
      --_drag-bar-height: 24px;
      --_drag-bar-border-width: 1px;
      --_half-drag-bar-height: calc(
        (var(--_drag-bar-height) / 2) + var(--_drag-bar-border-width)
      );
    }

    #wrapper {
      display: flex;
      flex-direction: column;
    }

    :host,
    #wrapper,
    ::slotted(*) {
      height: 100%;
    }

    slot {
      display: block;
      overflow: hidden;
    }

    [name='preview'] {
      height: max(
        calc(
          100% - var(--editor-percentage, 0%) - var(--_half-drag-bar-height)
        ),
        0px
      );
    }

    [name='editor'] {
      height: max(
        calc(var(--editor-percentage, 0px) - var(--_half-drag-bar-height)),
        0px
      );
    }

    #drag-bar {
      touch-action: none;
      background-color: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
      border: var(--_drag-bar-border-width) solid var(--md-sys-color-outline);
      border-radius: 12px;
      height: var(--_drag-bar-height);
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-user-select: none;
      user-select: none;
    }

    #drag-bar:hover {
      background-color: var(--md-sys-color-surface-container-high);
      cursor: grab;
    }

    #drag-bar.isDragging {
      background-color: var(--md-sys-color-inverse-surface);
      color: var(--md-sys-color-inverse-on-surface);
      cursor: grabbing;
    }
  `,t([a()],r.prototype,"isDragging",2),t([a()],r.prototype,"editorHeightPercent",2),t([s("#wrapper")],r.prototype,"wrapperEl",2),r=t([n("drag-playground")],r);
