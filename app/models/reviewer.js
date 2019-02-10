import DS from 'ember-data';

export default DS.Model.extend({
  familyName: DS.attr('string'),
  firstname: DS.attr('string')
});
