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
        // TODO: More reliable HTML entity decode
        var localizedName = skill.localizedName.replace("&#39;", "'");

        return {
            canonicalForm: skill.name,
            list: [
                localizedName
            ]
        }
    });
}));

console.log(JSON.stringify(luisList));
