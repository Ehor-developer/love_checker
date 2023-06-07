function result() {
    document.getElementById("result").style.display = "block" 
    // 1から10までのランダムな数字を生成
    var number = Math.floor(Math.random() * 10) + 3;

    // 恋愛運とアドバイスを設定
    var fortune, advice, luckyItem;

    if (number <= 1) {
        fortune = "初心者";
        advice = "恋愛経験がほとんどなく、恋愛に対する知識や自信が不足している。";
        luckyItem = "幸運アイテム：自己啓発の本";
    } else if (number <= 2) {
        fortune = "修行中:";
        advice = "恋愛について学び、経験を積みながら成長している。";
        luckyItem = "幸運アイテム：お気に入りのアクセサリー";
    } else if (number <= 3) {
        fortune = "平均的";
        advice = "恋愛において順調であり、異性からの関心も高い。";
        luckyItem = "幸運アイテム：幸せを象徴するアイテム";
    }else if (number <= 4) {
        fortune = "高確率";
        advice = "恋愛において成功率が高く、出会いも多い。";
        luckyItem = "幸運アイテム：トマト";
    } else if (number <= 5) {
        fortune = "運命的";
        advice = "恋愛運が絶好調です！思い描いていた恋愛が実る時期ですので、積極的に行動しましょう。チャンスを逃さず、勇気を持って自分の気持ちを伝えることが成功の鍵です。";
        luckyItem = "幸運アイテム：愛のシンボルを持つアイテム";
    }else if (number <= 6) {
        fortune = "悩み多き";
        advice = "恋愛において悩みや困難が多く、成果を上げるのに苦労している。";
        luckyItem = "幸運アイテム：愛のシンボルを持つアイテム";
    }else if (number <= 8) {
        fortune = "安定感";
        advice = "着実に恋愛関係を築き、安定感のあるパートナーシップを持っている。";
        luckyItem = "幸運アイテム：パソコン";
    }else if (number <= 9) {
        fortune = "焦り";
        advice = "恋愛に対して焦っており、相手を見極めるのに時間がかかる。";
        luckyItem = "幸運アイテム：駅前で配ってるティッシュ";
    }else if (number <= 10) {
        fortune = "冷静沈着";
        advice = "恋愛において冷静な判断力を持ち、感情に流されずに行動できる。";
        luckyItem = "幸運アイテム：イヤホン";
    }else if (number <= 10) {
        fortune = "理想的";
        advice = "自分の理想に近いパートナーを見つけることができる。";
        luckyItem = "幸運アイテム：ねぎ";
    }else if (number <= 11) {
        fortune = "情熱的";
        advice = "恋愛に情熱を傾け、相手との関係を深めることが得意。";
        luckyItem = "幸運アイテム：スマホケース";
    }else if (number <= 12) {
        fortune = "悪循環";
        advice = "恋愛においてトラブルや失敗が続き、前向きな展望が持ちにくい。";
        luckyItem = "幸運アイテム：エナジードリンク";
    }else if (number <= 13) {
        fortune = "自己中心";
        advice = "自分の欲求や都合を優先し、相手の気持ちに十分に配慮できない。";
        luckyItem = "幸運アイテム：バナナ";
    }else {
        fortune = "ラッキー";
        advice = "恋愛において幸運が重なり、思わぬチャンスがあるかもしれない。";
        luckyItem = "幸運アイテム：一人で撮影したプリクラ";
    }



    // 結果をHTMLに差し込む
    document.getElementById("fortune").innerHTML = fortune;
    document.getElementById("advice").innerHTML = advice;
    document.getElementById("lucky-item").innerHTML = luckyItem;
}