import Component from '@ember/component';
import { computed } from '@ember/object';
export default Component.extend({
tagName: '',
model: computed( function() {
  return [
    { name:'Animals', route: 'animals' },
    { name:'Vegetables', route: 'vegetables' },
    { name:'Birds', route: 'birds' }
  ];
})
});
