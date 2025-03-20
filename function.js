//メイン部分
let alertString;

//作成した関数呼び出し、変数へ格納
alertString = addString("WebCamp");

//変数の内容をアラートで表示
alert(alertString);

//作成した関数
function addString(strA){
  let addStr = "Hello" + strA;
  return addStr
}