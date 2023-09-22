import * as cheerio from 'cheerio';

const extractComentary = (html) => {
    const $ = cheerio.load(html);
    const elementArr = $("#main-container > div.lg\\:ds-container.lg\\:ds-mx-auto.lg\\:ds-px-5.lg\\:ds-pt-4 > div > div > div:nth-child(2) > div:nth-child(4) > div.ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 > div.ds-p-0 > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div.ds-select-none.lg\\:hover\\:ds-bg-ui-fill-translucent.ds-hover-parent.ds-relative > div.ds-text-tight-m.ds-font-regular.ds-flex.ds-px-3.ds-py-2.lg\\:ds-px-4.lg\\:ds-py-\\[10px\\].ds-items-start.ds-select-none.lg\\:ds-select-auto > div.xl\\:ds-w-\\[730px\\] > div > div > div.first-letter\\:ds-capitalize > p");
    const textdata = $(elementArr).textContent
    const HTMLData  = $(elementArr[0]).html()
    console.log('Text data is:', textdata);
    console.log('Text HTML  data is:', HTMLData);
    
};

export default extractComentary;
