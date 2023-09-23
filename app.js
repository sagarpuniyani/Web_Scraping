/*Extracting the data set from the Flipkart  */
/*  name : $('div._2kHMtA div._4rR01T') 
    desc : $(`._2kHMtA .fMghEO ._1xgFaf`)
    price : $('._2kHMtA ._3tbKJL ._1_WHN1')*/

import request from "request-promise";
import cheerio from "cheerio";
import fs from "fs";

const searchItem = 'laptop';

const url1 = `https://www.flipkart.com/search?q=${searchItem}+&as=on&as-show=on&otracker=AS_Query_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_2_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=laptops+&requestId=901acbb6-82f5-48e9-929b-7bece0a14d3a`;


(async () => {
    let ScrapedDataUrl1 = [];
    const response = await request({
        uri : url1,
        headers : {
            "Accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Encoding" : "gzip, deflate, br",
            "Accept-Language":"en-US,en;q=0.9"
        } , 
        gzip : true
    })

    const $ = cheerio.load(response);
    const NumberofData = $('div._2kHMtA div._4rR01T').length
    console.log("NumberofData " , NumberofData);

    for (let i = 0; i < NumberofData ; i++) {
        const Product_name = $('div._2kHMtA div._4rR01T').eq(i).text();
        const Product_desc = $('._2kHMtA .fMghEO ._1xgFaf').eq(i).text();
        const price = $('._2kHMtA ._3tbKJL ._1_WHN1').eq(i).text();
        const ImageUrl = $('._2kHMtA .MIXNux .CXW8mj ._396cs4').eq(i).attr('src');
        const Product_Url = `https://www.flipkart.com` + $('._2kHMtA ._1fQZEK').eq(i).attr('href');
    
        ScrapedDataUrl1.push({
            Product_name,
            Product_desc,
            price,
            ImageUrl,
            Product_Url
        });
    }
    


    console.log("ScrapedDataUrl1  : ", ScrapedDataUrl1)
    fs.writeFileSync('./data/data1.json', JSON.stringify(ScrapedDataUrl1), (err) => {
        if (err) {
            console.error("Error", err);
        } else {
            // Read and log the contents of the JSON file
            const jsonData = fs.readFileSync("./data/data.json", "utf8");
            console.log(jsonData);
        }
    });
} )();