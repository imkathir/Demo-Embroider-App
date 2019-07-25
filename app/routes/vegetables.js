import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return ['Onion', 'Tomato', 'Ladies Finger'];
  }
});
