/*Extracting the data set from the Flipkart  */
/*  name : $('div._2kHMtA div._4rR01T') 
    desc : $(`._2kHMtA .fMghEO ._1xgFaf`)
    price : $('._2kHMtA ._3tbKJL ._1_WHN1')*/

import request from "request-promise";
import cheerio from "cheerio";
import fs from "fs";

const searchItem = 'mobile';

const url = `https://www.flipkart.com/search?q=${searchItem}+&as=on&as-show=on&otracker=AS_Query_HistoryAutoSuggest_1_2_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_2_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=laptops+&requestId=901acbb6-82f5-48e9-929b-7bece0a14d3a`;


(async () => {
    let ScrapedData = [];
    const response = await request({
        uri : url,
        headers : {
            "Accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Encoding" : "gzip, deflate, br",
            "Accept-Language":"en-US,en;q=0.9"
        } , 
        gzip : true
    })

    const $ = cheerio.load(response);
    const Product_name = $('div._2kHMtA div._4rR01T').eq(0).text();
    const Product_desc = $('._2kHMtA .fMghEO ._1xgFaf').eq(0).text();
    const price = $('._2kHMtA ._3tbKJL ._1_WHN1').eq(0).text();
    const ImageUrl = $('._2kHMtA .MIXNux .CXW8mj ._396cs4').attr('src');
    const Product_Url = `https://www.flipkart.com` + $('._2kHMtA ._1fQZEK').attr('href');
    

    ScrapedData.push({
        Product_name,
        Product_desc,
        price,
        ImageUrl,
        Product_Url
    });

    // console.log("ScrapedData  : ", ScrapedData)
    fs.writeFileSync('./data/data1.json', JSON.stringify(ScrapedData), (err) => {
        if (err) {
            console.error("Error", err);
        } else {
            // Read and log the contents of the JSON file
            const jsonData = fs.readFileSync("./data/data.json", "utf8");
            console.log(jsonData);
        }
    });
} )();