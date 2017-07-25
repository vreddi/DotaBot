const HeroRepository = require('../Models/HeroRepository'),
      path = require('path');

var heroRepository = new HeroRepository(path.resolve('./Metadata/Heroes'));

var heroes = heroRepository.getAll();

var luisList = heroes.map(function(hero) {
    return {
        canonicalForm: hero.name,
        list: hero.aliases
    };
});

console.log(JSON.stringify(luisList));
