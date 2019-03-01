import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';
import { A } from '@ember/array';

export default Component.extend({
  store: service(),

  searchByName: task(function*(data){
    yield timeout(300);
    if(!data) return [];
    return yield this.store.query('food-establishment', {filter: data, include: 'ratings,reviews'} );
  }),

  actions: {
    select(establishment){
      this.set('_establishment', establishment);
    },

    async addFile(fileData){
      if(!this._establishment){
        alert('no establishment');
        return;
      }
      this._establishment.set('photos', [fileData]);
      this._establishment.save();
    }

  }
});
