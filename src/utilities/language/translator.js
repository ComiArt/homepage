import en from "./extracts/en";
import fr from "./extracts/fr";

const translator = (lang, key) =>{
    
    let languages = {
        en : en,
        fr : fr
    }
    
    return languages[lang][key]
}

export default translator