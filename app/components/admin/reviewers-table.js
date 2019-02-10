import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  actions: {
    create() {
      this.set("createMode", true);
      // let newReviewer = this.store.createRecord('reviewer', {});
      // this.set("newReviewer", newReviewer);
    },
    onSaveCreate(firstname, familyName){
      this.set("createMode", false);
      this.store.createRecord('reviewer', {firstname, familyName}).save();
    }
  }
});
