import AbstractView from '../../abstract-view.js';
import { logoTemplate, playButtonTemplate } from '../../templates/blocks.js';

class AbstractResultView extends AbstractView {
  get template() {
    return `<section class="main main--result js-main">
               ${logoTemplate}
               ${this.getInfoTemplate()}
               ${playButtonTemplate}
             </section>`;
  }

  getInfoTemplate() {
    throw new Error(`Abstract method called`);
  }
}

export default AbstractResultView;
