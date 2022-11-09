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


let battlePetsData=[
    {
        battlePetId:1,
        battlePetName:"small Worm",
        attackSkill:[{
            name:"nothing",
            damage:0
        },{
            name: "bite",
            damage: 3
        }],
    }
]

