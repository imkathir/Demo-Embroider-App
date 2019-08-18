import Route from '@ember/routing/route';

export default Route.extend({
  imageSrc:'assets/images/bird',
  altText:'bird',

  model () {
    let model = [
      {name:'Crow',isWild:true},
      {name:'Parrot',isWild: true},
      {name:'Hen',isWild:false},
      {name:'cock', isWild: false},
      {name:'Peacock',isWild: true}
    ], i=0;
    model.forEach((bird)=>{
      i++;
      bird.alt=this.altText+i;
      bird.src=this.imageSrc+i+'.jpg';
    });
    return model;
  }
});
