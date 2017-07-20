const Skill = require('../Models/Skill');

let HeroSkills = {
    "npc_dota_hero_antimage": [
        new Skill({
            name: "Mana Break",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/c1/Mana_Break_icon.png?version=0f9ecc20cc314a54d5b23c719f249396",
            link: "http://dota2.gamepedia.com/Anti-Mage#Mana_Break"
        }),
        new Skill({
            name: "Blink",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/ce/Blink_%28Anti-Mage%29_icon.png?version=7c40b943872d402ffaed1749b885e6e4",
            link: "http://dota2.gamepedia.com/Anti-Mage#Blink"
        }),
        new Skill({
            name: "Spell Shield",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/a6/Spell_Shield_icon.png?version=2479009df0c60bfddc3d989fa3e66e68",
            link: "http://dota2.gamepedia.com/Anti-Mage#Spell_Shield"
        }),
        new Skill({
            name: "Mana Void",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/fe/Mana_Void_icon.png?version=74210e75d8c842248b142e23d2f3a621",
            link: "http://dota2.gamepedia.com/Anti-Mage#Mana_Void"
        })
    ],
    "npc_dota_hero_axe": [
        new Skill({
            name: "Berserker's Call",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/d1/Berserker%27s_Call_icon.png?version=f15b2131acf66e1f8ff6d2a4ea8d2c1b",
            link: "http://dota2.gamepedia.com/Axe#Berserker.27s_Call"
        }),
        new Skill({
            name: "Battle Hunger",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/00/Battle_Hunger_icon.png?version=034d7d418ace647b7b24e5b041c6d43b",
            link: "http://dota2.gamepedia.com/Axe#Battle_Hunger"
        }),
        new Skill({
            name: "Counter Helix",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/14/Counter_Helix_icon.png?version=47275d1f40ddbfbe36e91ad03c514891",
            link: "http://dota2.gamepedia.com/Axe#Counter_Helix"
        }),
        new Skill({
            name: "Culling Blade",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/30/Culling_Blade_icon.png?version=f4780cf87ae32493be5393c651156c52",
            link: "http://dota2.gamepedia.com/Axe#Culling_Blade"
        })
    ],
    "npc_dota_hero_bane": [
        new Skill({
            name: "Enfeeble",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/40/Enfeeble_icon.png?version=c278ba13fb3d72a837c1ab28fc87243f",
            link: "http://dota2.gamepedia.com/Bane#Enfeeble"
        }),
        new Skill({
            name: "Brain Sap",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/0c/Brain_Sap_icon.png?version=d5d9c906851321ee3b7fe166419f7ad0",
            link: "http://dota2.gamepedia.com/Bane#Brain_Sap"
        }),
        new Skill({
            name: "Nightmare",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/6e/Nightmare_icon.png?version=528239e01e34939a32efa21c2026dfa7",
            link: "http://dota2.gamepedia.com/Bane#Nightmare"
        }),
        new Skill({
            name: "Fiend's Grip",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/7b/Fiend%27s_Grip_icon.png?version=5de97c308cc781d8c497fe58fb0afa0b",
            link: "http://dota2.gamepedia.com/Bane#Fiend.27s_Grip"
        })
    ],
    "npc_dota_hero_bloodseeker": [
        new Skill({
            name: "Bloodrage",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8a/Bloodrage_icon.png?version=98e8206b5bde918dd92628dac252003a",
            link: "http://dota2.gamepedia.com/Bloodseeker#Bloodrage"
        }),
        new Skill({
            name: "Blood Rite",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/83/Blood_Rite_icon.png?version=935f22be309b0e62888f7e2fd59aae98",
            link: "http://dota2.gamepedia.com/Bloodseeker#Blood_Rite"
        }),
        new Skill({
            name: "Thirst",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8e/Thirst_icon.png?version=41dac051af0c83a08ce154650ecb6b97",
            link: "http://dota2.gamepedia.com/Bloodseeker#Thirst"
        }),
        new Skill({
            name: "Rupture",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/f4/Rupture_icon.png?version=e48144306f0447829f2532b60100208d",
            link: "http://dota2.gamepedia.com/Bloodseeker#Rupture"
        })
    ],
    "npc_dota_hero_crystal_maiden": [
        new Skill({
            name: "Crystal Nova",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/72/Crystal_Nova_icon.png?version=8957b6a54c9ed0741ca4bdc77dca5c7c",
            link: "http://dota2.gamepedia.com/Crystal_Maiden#Crystal_Nova"
        }),
        new Skill({
            name: "Frostbite",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/d6/Frostbite_icon.png?version=4a23faddd60a73919459488572443d38",
            link: "http://dota2.gamepedia.com/Crystal_Maiden#Frostbite"
        }),
        new Skill({
            name: "Arcane Aura",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/5a/Arcane_Aura_icon.png?version=83bbf19281a2e99cf7819575629f9328",
            link: "http://dota2.gamepedia.com/Crystal_Maiden#Arcane_Aura"
        }),
        new Skill({
            name: "Freezing Field",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/de/Freezing_Field_icon.png?version=cdb839eea84cb35baae95023943a96a0",
            link: "http://dota2.gamepedia.com/Crystal_Maiden#Freezing_Field"
        })
    ],
    "npc_dota_hero_drow_ranger": [
        new Skill({
            name: "Frost Arrows",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8f/Frost_Arrows_icon.png?version=3b4326414adb5d8e120f59adc522af8e",
            link: "http://dota2.gamepedia.com/Drow_Ranger#Frost_Arrows"
        }),
        new Skill({
            name: "Gust",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/5b/Gust_icon.png?version=b339598bf597844e7b52412a68039c33",
            link: "http://dota2.gamepedia.com/Drow_Ranger#Gust"
        }),
        new Skill({
            name: "Precision Aura",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/51/Precision_Aura_icon.png?version=0d41f3ac417fdc5c203a926c1abd63db",
            link: "http://dota2.gamepedia.com/Drow_Ranger#Precision_Aura"
        }),
        new Skill({
            name: "Marksmanship",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/af/Marksmanship_icon.png?version=8df2fb32e67f84416beb985bc602b6ad",
            link: "http://dota2.gamepedia.com/Drow_Ranger#Marksmanship"
        })
    ],
    "npc_dota_hero_earthshaker": [
        new Skill({
            name: "Fissure",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/2/24/Fissure_icon.png?version=d01e8f746e75ac4e5b44a0bb8449921a",
            link: "http://dota2.gamepedia.com/Earthshaker#Fissure"
        }),
        new Skill({
            name: "Enchant Totem",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/8f/Enchant_Totem_icon.png?version=1009ee2b7583b7313340360e871a2142",
            link: "http://dota2.gamepedia.com/Earthshaker#Enchant_Totem"
        }),
        new Skill({
            name: "Aftershock",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/f/f1/Aftershock_icon.png?version=6c15d43050afcff5cfc15fbc7cccc47a",
            link: "http://dota2.gamepedia.com/Earthshaker#Aftershock"
        }),
        new Skill({
            name: "Echo Slam",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/0/01/Echo_Slam_icon.png?version=e1f1dd07d78fa2f929a7fed0238dad78",
            link: "http://dota2.gamepedia.com/Earthshaker#Echo_Slam"
        })
    ],
    "npc_dota_hero_juggernaut": [
        new Skill({
            name: "Blade Fury",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/4c/Blade_Fury_icon.png?version=a09b759c41208d9f1deaefc422718a51",
            link: "http://dota2.gamepedia.com/Juggernaut#Blade_Fury"
        }),
        new Skill({
            name: "Healing Ward",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/5/58/Healing_Ward_icon.png?version=ffdd8e37c8d4422a88af230888401de9",
            link: "http://dota2.gamepedia.com/Juggernaut#Healing_Ward"
        }),
        new Skill({
            name: "Blade Dance",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/83/Blade_Dance_icon.png?version=aade8b55e0657114faf0c6d57ff4e1d5",
            link: "http://dota2.gamepedia.com/Juggernaut#Blade_Dance"
        }),
        new Skill({
            name: "Omnislash",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/3/39/Omnislash_icon.png?version=40d59d17876f17ab9e6c06fc47002f73",
            link: "http://dota2.gamepedia.com/Juggernaut#Omnislash"
        })
    ],
    "npc_dota_hero_mirana": [
        new Skill({
            name: "Starstorm",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/9/9e/Starstorm_icon.png?version=18d17f0e3542b7d1f12fd53229b6819d",
            link: "http://dota2.gamepedia.com/Mirana#Starstorm"
        }),
        new Skill({
            name: "Sacred Arrow",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/49/Sacred_Arrow_icon.png?version=7eb555d2d9f7212a5046884af89a831e",
            link: "http://dota2.gamepedia.com/Mirana#Sacred_Arrow"
        }),
        new Skill({
            name: "Leap",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/88/Leap_icon.png?version=11c1fc342212117f16d0cb594a283ca7",
            link: "http://dota2.gamepedia.com/Mirana#Leap"
        }),
        new Skill({
            name: "Moonlight Shadow",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/6/6b/Moonlight_Shadow_icon.png?version=f4ad6deedfc25f87129337fe7fd7636d",
            link: "http://dota2.gamepedia.com/Mirana#Moonlight_Shadow"
        })
    ],
    "npc_dota_hero_morphling": [
        new Skill({
            name: "Waveform",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/9/97/Waveform_icon.png?version=06b1c6deeb112d930a1690237cbf7ff9",
            link: "http://dota2.gamepedia.com/Morphling#Waveform"
        }),
        new Skill({
            name: "Adaptive Strike",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/b/b0/Adaptive_Strike_icon.png?version=41db52b4d018f3d2b2c86a8886c8a6fc",
            link: "http://dota2.gamepedia.com/Morphling#Adaptive_Strike"
        }),
        new Skill({
            name: "Morph (Agility Gain)",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/8/80/Morph_%28Agility_Gain%29_icon.png?version=8d35276815ecf538c62af208c2bd48fa",
            link: "http://dota2.gamepedia.com/Morphling#Morph_Agility"
        }),
        new Skill({
            name: "Morph (Strength Gain)",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/75/Morph_%28Strength_Gain%29_icon.png?version=8802766abf6cf75fc152e5c5b5e1743a",
            link: "http://dota2.gamepedia.com/Morphling#Morph_Strength"
        }),
        new Skill({
            name: "Morph Replicate",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/9/9f/Morph_Replicate_icon.png?version=f927d15731de5d8f977e90782f0032bc",
            link: "http://dota2.gamepedia.com/Morphling#Morph_Replicate"
        }),
        // TODO Add Aghnim's upgrade skill to the card in a better way
        // new Skill({
        //     name: "Hybrid (Aghanim's Scepter)",
        //     image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/db/Hybrid_icon.png?version=0cc401a7de013652b27ec3057e47706c",
        //     link: "http://dota2.gamepedia.com/Morphling#Hybrid"
        // })
    ],
    "npc_dota_hero_nevermore": [
        new Skill({
            name: "Shadowraze (Near)",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/7/7c/Shadowraze_%28Near%29_icon.png?version=18748228f6ea879809eb3d81ca3f34e8",
            link: "http://dota2.gamepedia.com/Shadow_Fiend#Shadowraze"
        }),
        new Skill({
            name: "Shadowraze (Medium)",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/c1/Shadowraze_%28Medium%29_icon.png?version=26b6f254e7e6aee7e622967239917183",
            link: "http://dota2.gamepedia.com/Shadow_Fiend#Shadowraze"
        }),
        new Skill({
            name: "Shadowraze (Far)",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/a6/Shadowraze_%28Far%29_icon.png?version=9e3cbceb0be658af40d07ec253df4e68",
            link: "http://dota2.gamepedia.com/Shadow_Fiend#Shadowraze"
        }),
        new Skill({
            name: "Necromastery",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/9/9d/Necromastery_icon.png?version=44ed7d2493fa37bd7be46d1d3fc900ec",
            link: "http://dota2.gamepedia.com/Shadow_Fiend#Necromastery"
        }),
        new Skill({
            name: "Presence of the Dark Lord",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/a6/Shadowraze_%28Far%29_icon.png?version=9e3cbceb0be658af40d07ec253df4e68",
            link: "http://dota2.gamepedia.com/Shadow_Fiend#Presence_of_the_Dark_Lord"
        }),
        new Skill({
            name: "Requiem of Souls",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/a/a8/Requiem_of_Souls_icon.png?version=a8e8af8f109fd93756cd6b05027fe2e1",
            link: "http://dota2.gamepedia.com/Shadow_Fiend#Requiem_of_Souls"
        }),
    ],
    "npc_dota_hero_witch_doctor": [
        new Skill({
            name: "Paralyzing Cask",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/d/dd/Paralyzing_Cask_icon.png?version=86c507955672ae485c41792a267c330a",
            link: "http://dota2.gamepedia.com/Witch_Doctor#Paralyzing_Cask"
        }),
        new Skill({
            name: "Voodoo Restoration",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/1/11/Voodoo_Restoration_icon.png?version=025efdc8db20837efc6128ee92814b07",
            link: "http://dota2.gamepedia.com/Witch_Doctor#Voodoo_Restoration"
        }),
        new Skill({
            name: "Maledict",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/4/42/Maledict_icon.png?version=ec120aedb0a342091d9e15ccbe2ca0f6",
            link: "http://dota2.gamepedia.com/Witch_Doctor#Maledict"
        }),
        new Skill({
            name: "Death Ward",
            image: "https://hydra-media.cursecdn.com/dota2.gamepedia.com/c/cf/Death_Ward_icon.png?version=76c978406d5ce8f492e1ee4ba5b48342",
            link: "http://dota2.gamepedia.com/Witch_Doctor#Death_Ward"
        })
    ]
}

module.exports = HeroSkills;
