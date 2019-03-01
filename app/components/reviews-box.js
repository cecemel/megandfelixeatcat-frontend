import Component from '@ember/component';
import { sort } from '@ember/object/computed';

export default Component.extend({
  reviewSort: Object.freeze(['created']),
  sortedReviews: sort('reviews', 'reviewSort')
});
