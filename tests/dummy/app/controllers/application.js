import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notiflix: service('notiflix'),

  actions: {
    show() {
      this.get('notiflix').open({ title: 'Hello World!' });
    }
  }
});
