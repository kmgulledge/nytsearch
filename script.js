function log(e){
	console.log(e);
}

log("Document is Ready!");


var search = $("#search").text();
var startDate = $("#startDate").text();
var endDate = $("#endDate").text();
var responseLimit = 1;
// $("#responseLimit").text();


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
'api-key': "7bb3225128f24a01b5bd49404f2f3653",
'q': search,
'begin_date': startDate,
'end_date': endDate,
});

log(queryURL);

$.ajax({
url: queryURL,
method: 'GET',
}).done(function(response) {
console.log(response);

for(var i=0;i<responseLimit;i++){
	var articleDiv = $("<div>");
	// articleDiv.addClass("article");
	var articleTitle = response.response.docs[i].headline.main;
	articleDiv.append(articleTitle);
	$("#result").append(articleDiv);
	log("Posted Article");
};



}).fail(function(err) {
throw err;
});

