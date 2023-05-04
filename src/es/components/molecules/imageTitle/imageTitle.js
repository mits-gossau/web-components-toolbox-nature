// @ts-check
import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'


/**
 * @export
 * @type {CustomElementConstructor}
 */
export default class ImageTitle extends Shadow() {
  constructor (...args) {
    super(...args)
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
  }

  /**
   * evaluates if a render is necessary
   *
   * @return {boolean}
   */
  shouldRenderCSS () {
    return !this.root.querySelector('style[_css]')
  }

  renderCSS () {
    this.css = /* css */`
      :host {
        display: grid;
        grid-template-columns: 50% 50%;
      }
      :host > div {
        padding: calc(var(--content-spacing) * 2) calc(var(--content-spacing) * 4);
      }
      :host > div > * {
        position: relative;
        z-index: 101;
      }
      :host > div.title {
        background-color: ${this.getAttribute("background-color")};
        --h2-font-size: 2.75em;
      }
      :host > div.text {
        color: ${this.getAttribute("color")};
        --h-color: ${this.getAttribute("color")};
      }
      :host a-emotion-pictures {
        grid-column-end: span 2;
      }
      @media only screen and (max-width: _max-width_) {
        :host {
            grid-template-columns: unset;
        }
        :host > div {
            padding: var(--content-spacing-mobile);
        }
        :host a-emotion-pictures {
            grid-row: 2;
            grid-column-end: 1;
        }
      }
    `
    /** @type {import("../../web-components-toolbox/src/es/components/prototypes/Shadow.js").fetchCSSParams[]} */
    const styles = [
        {
            path: `${import.meta.url.replace(/(.*\/)(.*)$/, '$1')}../../web-components-toolbox/src/css/reset.css`, // no variables for this reason no namespace
            namespace: false
        },
        {
            path: `${import.meta.url.replace(/(.*\/)(.*)$/, '$1')}../../web-components-toolbox/src/css/style.css`, // apply namespace and fallback to allow overwriting on deeper level
            namespaceFallback: true
        }
        ]
        return this.fetchCSS(styles, false).then(() => this.calcColumnWidth())
  }

}
