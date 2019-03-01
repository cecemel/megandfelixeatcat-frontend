import Component from '@ember/component';
import { sort } from '@ember/object/computed';
import { computed } from '@ember/object';
export default Component.extend({
  ratingsSort: Object.freeze(['created']),
  sortedRatings: sort('establishment.ratings', 'ratingsSort'),
  photoUrl: computed('establishment.photos.[]', function(){
    if(!this.establishment.photos.firstObject) return'';
    return `/files/${this.establishment.photos.firstObject.id}/download`;
  }),

  actions: {
    details(){
      this.onDetails(this.establishment);
    }
  }
});
