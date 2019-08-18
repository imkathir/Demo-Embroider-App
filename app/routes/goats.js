import Route from '@ember/routing/route';

export default Route.extend({
  imageSrc:'assets/images/goat',
  altText:'Goat',
  model () {
    let model = [
      {name:'Goat Female'},
      {name:'Goat Male'},
      {name:'Goats'},
    ], i=0;
    model.forEach((goat) => {
      i++;
      goat.alt=this.altText+i;
      goat.src=this.imageSrc+i+'.jpg';
    });
      return model;
  }
});
