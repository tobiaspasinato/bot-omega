import bot from "@bot-whatsapp/bot";
import delay from "../app";
import flowMenuMain from "./flowMenuMain.js";

/*
Mensaje de saludo predeterminado (solo inicia el bot con la palabra clave y lo redirecciona con el menu).
*/

const flowBienvenidaMain = bot.addKeyword("asd").addAction(
    [
        'Bienvenido a 0800web, le gustaria probar alguno de nuestros bots 🤖?'
    ],
    {capture : true, delay : 1000, media : "https://i.ibb.co/FzkyrXY/Whatsapp-cover-1.webp"},
    async({ gotoFlow }) => {
        return await gotoFlow(flowMenuMain);
    }
);
export default flowBienvenidaMain;