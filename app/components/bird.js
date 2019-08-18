import Component from '@ember/component';
export default Component.extend({
tagName: '',
altText: 'Category',
init() {
  this._super(...arguments);
  // console.log("In bird : ",...arguments);
}
});
