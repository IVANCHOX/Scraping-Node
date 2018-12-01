 const cheerio = require('cheerio');
 const fs = require('fs');
 const request = require('request');

 request('https://www.reddit.com/', (err, res, body) => {
 	if(!err & res.statusCode == 200){
 	let $ =	cheerio.load(body);
 	$('img._2_tDEnGMLxpM6uOa2kaDB3 media-element','2x-container').each(function(){
 	var urlImg = $(this).attr('src');
 	console.log(urlImg);
 	})
 	}
 });