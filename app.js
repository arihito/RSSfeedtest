// 読み込むJSONデータをurlに設定
var url = "https://itunes.apple.com/jp/rss/topmovies/limit=10/genre=4401/json";

fetch(url).then(function (data) {

  return data.json();

}).then(function(json) {

  console.log(json.feed.entry[0].category.attributes.label);

});
