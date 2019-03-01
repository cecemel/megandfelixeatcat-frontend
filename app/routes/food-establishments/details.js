import Route from '@ember/routing/route';

export default Route.extend({
  async model(id){
    let res = await this.store.query('food-establishment', {'filter':id, include: 'ratings,reviews,aggregate-rating,reviews.authors'});
    return res.firstObject;
  }
});
