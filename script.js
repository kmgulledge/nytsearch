function log(e){
	console.log(e);
}



log("Document is Ready!");

$("#submit").on("click", function(){

	log("Submit was clicked");

	var search = $("#search").val();
	var startDate = $("#startDate").text();
	var endDate = $("#endDate").text();
	var responseLimit = $("#recordLimit").val();


	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	queryURL += '?' + $.param({
	'api-key': "7bb3225128f24a01b5bd49404f2f3653",
	'q': search,
	// 'begin_date': startDate,
	// 'end_date': endDate,
	});

	log(queryURL);
	log(responseLimit);

	$.ajax({
	url: queryURL,
	method: 'GET',
	}).done(function(response) {
	console.log(response);

	for(var i=0;i<responseLimit;i++){
		var articleDiv = $("<div>");
		articleDiv.addClass("article");
		var articleTitle = response.response.docs[i].headline.main;
		var snippet = response.response.docs[i].snippet;
		var webURL = response.response.docs[i].web_url;
		var pub_date = response.response.docs[i].pub_date;
		var paragraph = response.response.docs[i].lead_paragraph;
		articleDiv.append("<h1>" + articleTitle + "</h1>");
		articleDiv.append(snippet);
		articleDiv.append(pub_date);
		articleDiv.append(paragraph);
		articleDiv.append(pub_date);
		articleDiv.append(webURL);
		$("#results").append(articleDiv);
		log("Posted Article");
	};



	}).fail(function(err) {
	throw err;
	});

});
