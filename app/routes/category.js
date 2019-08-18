import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    let arr = [
      { name:'Vegetables', route: 'vegetables' },
      { name:'Birds', route: 'birds' },
      { name:'Cow', route: 'animals' },
      { name:'Goat', route: 'goats' },
      { name:'Tools' }
    ];
    // eslint-disable-next-line no-console
    console.log(arr.filterBy('route'));
    return arr.filterBy('route');
  }
});
