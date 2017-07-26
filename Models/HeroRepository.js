const Hero = require('./Hero'),
    fs = require('fs'),
    path = require('path');

class HeroRepository {
    constructor(metadataFolderPath) {
        this.heroesByCanonicalName = {};
        this.heroesById = {};
        this.heroesBySkill = {};
        this.heroes = [];

        for (let file of fs.readdirSync(metadataFolderPath)) {
            var metadataPath = path.join(metadataFolderPath, file);
            var metadata = JSON.parse(fs.readFileSync(metadataPath));

            var hero = new Hero(metadata);

            this.heroesByCanonicalName[hero.name] = hero;
            this.heroesById[hero.id] = hero;
            this.heroes.push(hero);

            for (var skill of hero.skills) {
                this.heroesBySkill[skill.name] = [
                    hero,
                    skill
                ];
            }
        };
    }

    getByCanonicalName(canonicalName) {
        var hero = this.heroesByCanonicalName[canonicalName];

        if (!hero) {
            throw `Unknown hero '${canonicalName}'`;
        }

        return hero;
    }

    getById(id) {
        var hero = this.heroesById[id];

        if (!hero) { 
            throw `Unknown hero ${id}`
        }

        return hero;
    }

    getBySkillName(skillName) {
        var match = this.heroesBySkill[skillName];

        if (!match) {
            throw `Unknown skill '${skillName}`;
        }

        return match;
    }

    getAll() {
        return this.heroes;
    }
}

module.exports = HeroRepository;
