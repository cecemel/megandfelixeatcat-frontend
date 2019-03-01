import Component from '@ember/component';
import { sort } from '@ember/object/computed';

export default Component.extend({
  ratingsSort: Object.freeze(['created']),
  sortedRatings: sort('establishment.ratings', 'ratingsSort'),

  actions: {
    details(){
      this.onDetails(this.establishment);
    }
  }
});
