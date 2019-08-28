import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  title: 'Birds',
  imageComponent: computed(() => {
    let title = 'Birds';
    if (title === 'Birds'){
     return 'image';
    }
    return 'bird';
  })
});