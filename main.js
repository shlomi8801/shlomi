const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '';

const robot = require("kbm-robot");







client.once('ready', () =>{
    
console.log('bot is online');


});







//כאן לכתוב פקודות לבוט//


//אם לא מתחיל ב   (prefix) אז...
client.on('message', message =>{
 if(!message.content.startsWith(prefix) || message.author.bot) return;

 const args = message.content.slice(prefix.length).split(" ");
 var commend = args.shift().toLowerCase();
 var whileOutputData = {};
 



//אם שלחו

if(commend === 'w', 's', 'a', 'd', 'space', 'ENTER'){
    //אז תעשה...
    console.log(commend);
    robot.startJar();

    robot.press(commend)
        .sleep(500)
        .release(commend)
        
        
    .go()
    .then(robot.stopJar);
  
     }

    
    
    
    
    
    });














//Bot token
client.login('');