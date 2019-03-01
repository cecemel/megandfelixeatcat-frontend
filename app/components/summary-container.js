import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';


export default Component.extend({
  router: service(),
  store: service(),
  fastboot: service(),

  loadData: task(function*(){
    let establishments = yield this.store.query('food-establishment', {include: 'ratings,reviews,photos,address'} );
    this.set('establishments', establishments);

  }),

  didReceiveAttrs() {
    this._super(...arguments);
    let promise = this.loadData.perform();

    if (this.get('fastboot.isFastBoot')) {
      this.get('fastboot').deferRendering(promise);
    }
  },

  actions: {
    details(foodEstablishment){
      this.get('router').transitionTo('food-establishments.details', foodEstablishment.id);
    }
  }
});
