export const data = [{
    characterName: "Doggo",
    nickName: "introDog",
    dialog: "welcome player ",
    dialogBoxCss: "dialogCenter",
    characterImg: require("./images/introDog.png"),
    characterCss: "centerImage",
    attack1: "",
    attack2: "",
    battleReady: false,
    dialogBox: true,
    showCharacterImg: true,    
}, {
    characterName: "Doggo",
    nickName: "introDog",
    dialog: "this is a  demo for battle pets",
    dialogBoxCss: "dialogCenter",
    characterImg: require("./images/introDog.png"), 
    characterCss: "centerImage",
    attack1: "",
    attack2: "",
    battleReady: false,
    dialogBox: true,
    showCharacterImg: true,
},
{
        characterName: "Doggo",
        nickName: "introDog",
        dialog: "lets start",
        dialogBoxCss: "dialogCenter",
        characterImg: require("./images/introDog.png"),
        characterCss: "centerImage",
        attack1: "Peck",
        attack2: "jump Attack",
        battleReady: false,
        showDialogBox: true,
        showCharacterImg:false,        
    },
    {
        characterName: "smallChicken",
        nickName: "introDog",
        dialog: "lets start",
        dialogBoxCss: "dialogCenter",
        characterImg: require("./images/smallChicken.png"),
        characterCss: "leftImage",
        attack1: "Peck",
        attack2: "jump Attack",
        battleReady: true,
        showDialogBox: true,
        showCharacterImg: false,
        enemyImg: require("./images/smallWorm.png"),
        enemyCss: "rightImage",
    }
]


export const battlePetsData=[
    {
        battlePetId:1,
        battlePetName:" Worm",
        attackList:[{
            name:"tailAttack",
            damage:0
        },{
            name: "bite",
            damage: 3
        }],
        lifeCount:20,
        characterImg: require("./images/smallWorm.png"),
        characterCss: "rightImage",
    },
    {
        battlePetId:2,
        battlePetName:" Chicken",
        attackList:[{
            name:"Peck",
            damage:5
        },{
            name: "Jump Attack",
            damage: 6
        }],
        lifeCount:30,
        characterImg: require("./images/smallChicken.png"),
        characterCss: "leftImage",
    },
    {
        battlePetId: 3,
        battlePetName: "intro Dog",
        attackList: [{
            name: "bark",
            damage: 0
        }, {
            name: "bite",
            damage: 3
        }],
        lifeCount: 20,
        characterImg: require("./images/introDog.png"), 
        characterCss: "rightImage",
    },
    {
        battlePetId: 4,
        battlePetName: "physch",
        attackList: [{
            name: "stare",
            damage: 0
        }, {
            name: "freeze",
            damage: 3
        }],
        lifeCount: 20,
        characterImg: require("./images/eye.png"), 
        characterCss: "rightImage",
    },
    {
        battlePetId: 5,
        battlePetName: "fox",
        attackList: [{
            name: "fast attack",
            damage: 0
        }, {
            name: "bite",
            damage: 3
        }],
        lifeCount: 20,
        characterImg: require("./images/fox.png"), 
        characterCss: "rightImage",
    },
    {
        battlePetId: 6,
        battlePetName: "pike",
        attackList: [{
            name: "ear lash",
            damage: 0
        }, {
            name: "fast attack",
            damage: 3
        }],
        lifeCount: 20,
        characterImg: require("./images/pika.png"), 
        characterCss: "rightImage",
    },
    {
        battlePetId: 7,
        battlePetName: "puspa",
        attackList: [{
            name: "radiate",
            damage: 0
        }, {
            name: "stun",
            damage: 3
        }],
        lifeCount: 20,
        characterImg: require("./images/sunFlower.png"), 
        characterCss: "rightImage",
    },
    {
        battlePetId: 8,
        battlePetName: "turtle",
        attackList: [{
            name: "harden",
            damage: 0
        }, {
            name: "head butt",
            damage: 3
        }],
        lifeCount: 20,
        characterImg: require("./images/turtle.png"), 
        characterCss: "rightImage",
    },
    {
        battlePetId: 9,
        battlePetName: "Magnett",
        attackList: [{
            name: "push",
            damage: 0
        }, {
            name: "pull",
            damage: 3
        }],
        lifeCount: 20,
        characterImg: require("./images/magnet.png"), 
        characterCss: "rightImage",
    },
    {
        battlePetId: 10,
        battlePetName: "cell fone",
        attackList: [{
            name: "new message",
            damage: 0
        }, {
            name: "office call",
            damage: 3
        }],
        lifeCount: 20,
        characterImg: require("./images/cellPhone.png"), 
        characterCss: "rightImage",
    },
]

