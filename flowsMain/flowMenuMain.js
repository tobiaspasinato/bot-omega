import bot from "@bot-whatsapp/bot";

const flowMenuMain = bot.addKeyword('asd').addAnswer(
    [
        '1️⃣ bot1 "1".',
        '2️⃣ bot2 "2".',
        '0️⃣ Para salir.',
    ],
    {capture : true, delay : 1000},
    async (ctx, { gotoFlow, endFlow }) => {
        if(ctx.body == 1){
            return await gotoFlow();
        }
        else if(ctx.body == 2){
            return await gotoFlow();
        }
        else if(ctx.body == 0){
            return await endFlow({body : '👋Nos vemos pronto!'});
        }
        else{
            return await endFlow({body : 'ERROR!!! No tengo este comando. Por favor vuelva a comunicarse.'});
        }
    }
)
export default flowMenuMain;