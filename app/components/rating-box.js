import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  image: computed('isVeggie', function(){
    if(this.isVeggie) return "https://cdn3.iconfinder.com/data/icons/food-nutrition/92/carrot-512.png";
    return "https://cdn3.iconfinder.com/data/icons/catcommerce-ginger/120/add-512.png";
  }),
  ratingArray: computed('rating', function(){
    if(!this.rating) return [];
    let maxStars = 5;
    let filledStars = Array(Math.round(this.rating)).fill(1);
    if(filledStars.length >= maxStars)
      return filledStars;
    let greyStars = Array(maxStars - filledStars.length).fill(0);
    return [...filledStars, ...greyStars];
  })
});
