import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
   photoUrl: computed('establishment.photos.[]', function(){
    if(!this.establishment.photos.firstObject) return'';
    return `/files/${this.establishment.photos.firstObject.id}/download`;
  })
});
