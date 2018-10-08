const yaml = require('js-yaml');
const fs = require('fs');

function hoge(a) {
    const url = encodeURI(`https://2018.scala-kansai.org/session/#${a['name']}`);
    const body = `Scala関西Summit2018 当日のセッションをご紹介します！スピーカー: ${a['name']}さん タイトル: ${a['title']} ${url} #scala_ks`;
    console.log(body);
}

try {
    var doc = yaml.safeLoad(fs.readFileSync('./contents/speakers.yml', 'utf8'));
    doc['speakers'].map(a => hoge(a));
} catch (e) {
  console.log(e);
}
