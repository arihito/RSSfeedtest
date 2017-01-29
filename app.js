// JSONデータの取得

function getJsonList() {

  // 読み込むJSONデータをurlに設定
  var url = "https://itunes.apple.com/jp/rss/topmovies/limit=10/genre=4401/json";

  fetch(url).then(function (data) {

    return data.json();

  }).then(function(json) {

    var jsonEntry = json.feed.entry;

    creatTableList(jsonEntry);
  });
}

// JSONデータをテーブルに出力

function creatTableList(jsonEntry) {

  // table要素をhtmlから取得
  var table = document.getElementById('ranking');

  // 取得した情報分だけ繰り返して表示
  for(var i=0; i<jsonEntry.length; i++) {

    // 画像URLをオブジェクトから取得
    var imgUrl = jsonEntry[i]['im:image'][2].label;

    // カテゴリーを取得
    var appCategory = jsonEntry[i].category.attributes['label'];

    // アプリタイトルを取得
    var appTitle = jsonEntry[i]['im:name'].label;

    // リリース日を取得
    var appRelease = jsonEntry[i]['im:releaseDate'].attributes.label;

    // アプリのダウンロードURLを取得
    var appLink = jsonEntry[i].link[0].attributes.href;

    // 販売価格を取得
    var appPrice = jsonEntry[i]['im:price'].label;

    // 詳細説明を取得
    var appSummary = jsonEntry[i].summary.label;

    // 行を追加
    var row = table.insertRow();

    // 順位をセルに追加
    row.insertCell().innerHTML = i+1;

    // アイコン画像をセルに追加
    row.insertCell().innerHTML = '<img src="' + imgUrl +'">';

    // タイトルをセルに追加
    row.insertCell().innerHTML = appCategory + '<h3><a href="' + appLink + '">' + appTitle + '</a></h3>' + appRelease + '<strong>' + appPrice + '</strong>';

    // 詳細説明や販売価格を追加
    row.insertCell().innerHTML = '<p>' + appSummary + '</p>';
  }
}
getJsonList();
