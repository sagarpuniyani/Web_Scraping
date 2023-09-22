import * as cheerio from 'cheerio';

const extractComentary = (html) => {
    const $ = cheerio.load(html);
    const elementArr = $('/html/body/div[1]/section/section/div[3]/div/div/div[2]/div[4]/div[1]/div[2]/div/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div/div/div[2]/p');
    const textdata = $(elementArr[0])
    console.log('Text data is:', textdata);
};

export default extractComentary;
