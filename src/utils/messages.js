/**
 * Mensagens do bot
 *
 * @author Dev Gui
 */
const { BOT_NAME, PREFIX } = require("../config");

exports.waitMessage = "Carregando dados...";

exports.menuMessage = () => {
  const date = new Date();

  return `┏━━⫸ ✮BEM VINDO!✮ ⫷━━┓
┃                       
┃➤ ${BOT_NAME}              
┃➤ Data: ${date.toLocaleDateString("pt-br")}              
┃➤ Hora: ${date.toLocaleTimeString("pt-br")}              
┃➤ Prefixo: ${PREFIX}           
┃                       
┗━━━━━「🪐」━━━━━┛

┏━━⫸ ★DONO (DN)★ ⫷━━┓
┃                      
┃➤ ${PREFIX}off               
┃➤ ${PREFIX}on                
┃                      
┗━━━━━「🌌」━━━━━┛

┏━━⫸ ✮ADMINS✮ ⫷━━┓
┃                      
┃➤ ${PREFIX}anti-link (1/0)    
┃➤ ${PREFIX}auto-responder (1/0)┃
┃➤ ${PREFIX}ban                
┃➤ ${PREFIX}hidetag            
┃➤ ${PREFIX}welcome (1/0)      
┃                      
┗━━━━━「⭐」━━━━━┛

┏━━⫸ ✮MENU✮ ⫷━━┓
┃                        
┃➤ ${PREFIX}attp       
┃➤ ${PREFIX}cep         
┃➤ ${PREFIX}gpt-4       
┃➤ ${PREFIX}ia-sticker  
┃➤ ${PREFIX}image       
┃➤ ${PREFIX}ping        
┃➤ ${PREFIX}play-audio  
┃➤ ${PREFIX}play-video  
┃➤ ${PREFIX}sticker     
┃➤ ${PREFIX}to-image    
┃                 
┗━━━━━「🚀」━━━━━┛`;
};
