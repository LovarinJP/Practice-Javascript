//じゃんけんの手を入力してもらうプロンプト欄を作成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

//グーチョキパー以外の文字列が入力された場合の条件分岐
while ((user_hand != "グー") && (user_hand != "パー") && (user_hand != "チョキ") && (user_hand != null)){
  alert('グー、チョキ、パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

//じゃんけんの手をランダムに生成する関数を呼び出す
let js_hand = getJShand();

//ユーザとJavascriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeにいれる
let judge = winLose(user_hand, js_hand);

//キャンセルとそれ以外で結果の表示を分岐
if (user_hand != null){
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

//ランダムでじゃんけんの手を生成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

//ユーザーとJavascriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr == "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr == "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr == "あいこ";
    }
  }

  return winLoseStr;
}