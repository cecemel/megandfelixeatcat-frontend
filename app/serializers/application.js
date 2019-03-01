import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serializeAttribute(snapshot, json, key, attributes) {
    if (key !== 'uri')
      this._super(snapshot, json, key, attributes);
  }
});
