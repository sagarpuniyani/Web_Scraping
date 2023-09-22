/* Commentary at the last Ball */
import request from  "request";
import ExtractComentary  from "./ExtarctData.js";
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"

const fetchComentary = (err , response , html ) => {
    if ( err ) console.log(" there is err " , err );
    else {
        // console.log(html);
        ExtractComentary(html)
    }
}
// calling through the request 
request(url , fetchComentary)
