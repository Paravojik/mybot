const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '5438887212:AAHmBGfuCwXXqla7HrxEcs6veZPeoy8Af1w'

const bot = new TelegramBot(TOKEN ,{
    polling:true

})


// bot.on('message', (msg)=>{
//     const chatId = msg.chat.id
//     // bot.sendMessage(chatId, msg.text)
//     if(msg.text%2==0 && "number"===typeof msg.text){
//         bot.sendMessage(chatId, 'Parne')
//     }else if(msg.text%2==1 && "number"==typeof msg.text){
//         bot.sendMessage(chatId, 'Neparne')
//     }
// })

bot.on('message', (msg)=>{
    const chatId = msg.chat.id

    if(msg.text ==='Рандомне число'){
        let rand =Math.floor(Math.random()*100)
        bot.sendMessage(chatId, rand)
    }else if('Підкинь монету'===msg.text){
        let randM =Math.floor(Math.random()*2)
        if(randM==0){
            bot.sendMessage(chatId, 'Орел')
            bot.sendPhoto(chatId, 'https://w7.pngwing.com/pngs/73/614/png-transparent-double-headed-eagle-gold-coin-gold-gold-coin-gold-material.png')
        }else{
            bot.sendMessage(chatId, 'Решка')
            bot.sendPhoto(chatId, 'https://discovered.com.ua/wordpress/wp-content/uploads/2016/03/10UAH_avers.png')
        }
        
    }else if('Подивитися контакт'=== msg.text){
        bot.sendContact(chatId,'+380 66 251 14 27','Віталік')
        // let num=msg.from.first_name
        // bot.sendMessage(chatId,msg.from.userid)
        // bot.sendContact(chatId, msg.from.phone_number, msg.from.first_name)
    }else{
        bot.sendMessage(chatId, 'Hello'+' '+msg.from.first_name, {
            reply_markup: {
                keyboard:[
                    ['Рандомне число','Підкинь монету','Подивитися контакт']
            ],
                resize_keyboard:true
            }
        })
    }
   
    
    
    
})
