const HeroRepository = require('../Models/HeroRepository'),
      path = require('path');

var heroRepository = new HeroRepository(path.resolve('./Metadata/Heroes'));

var heroes = heroRepository.getAll();

function selectMany(sequences) {
    return sequences.reduce(function(reduced, next) {
        return reduced.concat(next);
    }, []);
}

var luisList = selectMany(heroes.map(function(hero) {
    var skills = hero.skills || [];

    return hero.skills.map(function(skill) {
        return {
            canonicalForm: skill.name,
            list: [
                skill.localized_name
            ]
        }
    });
}));

console.log(JSON.stringify(luisList));
