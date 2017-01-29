// 読み込むJSONデータをurlに設定
var url = "https://itunes.apple.com/jp/rss/topmovies/limit=10/genre=4401/json";

fetch(url).then(function (data) {

  return data.json();

}).then(function(json) {

  var jsonEntry = json.feed.entry;

  // 取得した情報分だけ繰り返して表示
  for(var i=0; i<jsonEntry.length; i++) {

    // 画像URLをオブジェクトから取得
    var imgUrl = jsonEntry[i][img:image][0].label;

    // アプリタイトルを取得
    var appTitle = jsonEntry[i].title.label;

    // アプリのダウンロードURLを取得
    var appLink = jsonEntry[i].link[0].attributes.href;

    // 販売価格を取得
    var appPrice = jsonEntry[i].[im:price].attributes.label;

    // 詳細説明を取得
    var appSummary = jsonEntry[i].summary.label;

    // 著作権を取得
    var appCredit = jsonEntry[i].rights.label;

  }

});
