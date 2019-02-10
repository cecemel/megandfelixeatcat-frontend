import Component from '@ember/component';

export default Component.extend({
  tagName: 'tr',
  actions: {
    save(){
      this.onSave(this.firstname, this.familyName);
    }
  }
});
