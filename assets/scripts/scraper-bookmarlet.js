/*
this is a bookmarklet I wrote for my utterly contrived method of scraping data from tolkiengateway while bypassing their bor filter.
currently, it's set up to scrape the "in real life" section of each day, but you can change it to scrape "in arda" by simply changing toScrape to 'citizen-section-2'
for more instructions, refer to the usage and setup section of the readme, which I haven't actually written yet by the time im writing this, but will soon
*/

javascript:(
function(){
    const toScrape = 'citizen-section-1';
    const sectionText = document.getElementById(toScrape).textContent;
    var url = document.URL;
    var arr = url.split('/');
    var date = arr[arr.length-1];
    var [day, month] = date.split('_');
    day = +day;
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "September",
        "October",
        "November",
        "December"
    ];
    if(
        (['January','March','May','July','August','October','December'].includes(month) && day==31)
        ||
        (['April','June','September','November'].includes(month) && day==30)
        ||
        (month=='February' && day==29)
    ){
        let newmonth = months.findIndex((element)=>element==month)+1;
        console.log(newmonth);
        month = months[newmonth];
        day = 1;
    }else {day++};
    navigator.clipboard.writeText(date+'\n'+sectionText);
    open(`https://tolkiengateway.net/wiki/${day.toString()}_${month}`, '_self');
})()