"use strict";

module.exports= {
  dataSearch: function dataSearch(word,language){
        var val;
        if(language=='Mandarin'){
          for (let i = 0; i < data.ChineseWord.length; i += 1) {
              if (data.ChineseWord[i].English.search(word) > -1) {
                  val=data.ChineseWord[i];
              }
            }
        }
        else if(language=='Korean'){
          for (let i = 0; i < data.KoreanWord.length; i += 1) {
              if (data.KoreanWord[i].English.search(word) > -1) {
                  val=data.KoreanWord[i];
              }
            }
        }
        return val;
    }
}
const data={
    ChineseWord: [{
      ChineseCharacter: "我",
    Mandarin: "wǒ",
    English: "I"
    },
    {
      ChineseCharacter: "我们",
    Mandarin: "wǒmen",
    English: "we"
    },
    {
      ChineseCharacter: "你",
    Mandarin: "nǐ",
    English: "you"
    },
    {
      ChineseCharacter: "你们",
    Mandarin: "nǐmen",
    English: "you"
    },
    {
      ChineseCharacter: "他",
    Mandarin: "tā",
    English: "he"
    },
    {
      ChineseCharacter: "她",
    Mandarin: "tā",
    English: "she"
    },
    {
      ChineseCharacter: "他们",
    Mandarin: "tāmen",
    English: "they"
    },
    {
      ChineseCharacter: "她们",
    Mandarin: "tāmen",
    English: "they"
    },

    {
      ChineseCharacter: "这 (这儿)",
    Mandarin: "zhè ( zhèr)",
    English: "here"
    },
    {
      ChineseCharacter: "那 (那儿)",
    Mandarin: "nà (nàr)",
    English: "there"
    },

    {
      ChineseCharacter: "哪（哪儿）",
    Mandarin: "nǎ (nǎr)",
    English: "where"
    },
    {
      ChineseCharacter: "谁",
    Mandarin: "shéi",
    English: "who"
    },
    {
      ChineseCharacter: "什么",
    Mandarin: "shěnme",
    English: "what"
    },
    {
      ChineseCharacter: "多少",
    Mandarin: "duōshǎo",
    English: "how many"
    },
    {
      ChineseCharacter: "几",
    Mandarin: "jǐ",
    English: "a few"
    },
    {
      ChineseCharacter: "怎么",
    Mandarin: "zěnme",
    English: "how"
    },
    {
      ChineseCharacter: "怎么样",
    Mandarin: "zěnmeyàng",
    English: "how about"
    },

    {
      ChineseCharacter: "一",
    Mandarin: "yī",
    English: "one"
    },
    {
      ChineseCharacter: "二",
    Mandarin: "èr",
    English: "two"
    },
    {
      ChineseCharacter: "三",
    Mandarin: "sān",
    English: "three"
    },
    {
      ChineseCharacter: "四",
    Mandarin: "sì",
    English: "four"
    },
    {
      ChineseCharacter: "五",
    Mandarin: "wǔ",
    English: "five"
    },
    {
      ChineseCharacter: "六",
    Mandarin: "liù",
    English: "six"
    },
    {
      ChineseCharacter: "七",
    Mandarin: "qī",
    English: "seven"
    },
    {
      ChineseCharacter: "八",
    Mandarin: "bā",
    English: "eight"
    },
    {
      ChineseCharacter: "九",
    Mandarin: "jiǔ",
    English: "nine"
    },
    {
      ChineseCharacter: "十",
    Mandarin: "shí",
    English: "ten"
    },
    {
      ChineseCharacter: "零",
    Mandarin: "líng",
    English: "zero"
    },

    {
      ChineseCharacter: "个",
    Mandarin: "gè",
    English: "one"
    },
    {
      ChineseCharacter: "岁",
    Mandarin: "suì",
    English: "year"
    },
    {
      ChineseCharacter: "本",
    Mandarin: "běn",
    English: "volume"
    },
    {
      ChineseCharacter: "些",
    Mandarin: "xiē",
    English: "some"
    },
    {
      ChineseCharacter: "块",
    Mandarin: "kuài",
    English: "piece"
    },

    {
      ChineseCharacter: "不",
    Mandarin: "bù",
    English: "no"
    },
    {
      ChineseCharacter: "没",
    Mandarin: "méi",
    English: "no"
    },
    {
      ChineseCharacter: "很",
    Mandarin: "hěn",
    English: "very"
    },
    {
      ChineseCharacter: "太",
    Mandarin: "tài",
    English: "too"
    },
    {
      ChineseCharacter: "都",
    Mandarin: "dōu",
    English: "all"
    },

    {
      ChineseCharacter: "和",
    Mandarin: "hé",
    English: "and"
    },

    {
      ChineseCharacter: "在",
    Mandarin: "zài",
    English: "in"
    },

    {
      ChineseCharacter: "喂",
    Mandarin: "wèi",
    English: "hello"
    },

    {
      ChineseCharacter: "家",
    Mandarin: "jiā",
    English: "home"
    },
    {
      ChineseCharacter: "学校",
    Mandarin: "xuéxiào",
    English: "school"
    },
    {
      ChineseCharacter: "饭店",
    Mandarin: "fàndiàn",
    English: "restaurant"
    },
    {
      ChineseCharacter: "商店",
    Mandarin: "shāngdiàn",
    English: "store"
    },
    {
      ChineseCharacter: "医院",
    Mandarin: "yīyuàn",
    English: "hospital"
    },
    {
      ChineseCharacter: "火车站",
    Mandarin: "huǒchēzhàn",
    English: "train station"
    },
    {
      ChineseCharacter: "中国",
    Mandarin: "zhōng guó",
    English: "China"
    },
    {
      ChineseCharacter: "北京",
    Mandarin: "běijīng",
    English: "Beijing"
    },
    {
      ChineseCharacter: "上",
    Mandarin: "shàng",
    English: "up"
    },
    {
      ChineseCharacter: "下",
    Mandarin: "xià",
    English: "down"
    },
    {
      ChineseCharacter: "前面",
    Mandarin: "qiánmiàn",
    English: "front"
    },
    {
      ChineseCharacter: "后面",
    Mandarin: "hòumiàn",
    English: "behind"
    },
    {
      ChineseCharacter: "里",
    Mandarin: "lǐmiàn",
    English: "inside"
    },
    {
      ChineseCharacter: "今天",
    Mandarin: "jīntiān",
    English: "today"
    },
    {
      ChineseCharacter: "明天",
    Mandarin: "míngtiān",
    English: "tomorrow"
    },
    {
      ChineseCharacter: "昨天",
    Mandarin: "zuòtiān",
    English: "yesterday"
    },
    {
      ChineseCharacter: "上午",
    Mandarin: "shàngwǔ",
    English: "morning"
    },
    {
      ChineseCharacter: "中午",
    Mandarin: "zhōngwǔ",
    English: "noon"
    },
    {
      ChineseCharacter: "下午",
    Mandarin: "xiàwǔ",
    English: "afternoon"
    },
    {
      ChineseCharacter: "年",
    Mandarin: "nián",
    English: "year"
    },
    {
      ChineseCharacter: "月",
    Mandarin: "yuè",
    English: "month"
    },
    {
      ChineseCharacter: "日",
    Mandarin: "rì",
    English: "day"
    },
    {
      ChineseCharacter: "星期",
    Mandarin: "xīngqī",
    English: "week"
    },
    {
      ChineseCharacter: "点",
    Mandarin: "diǎn",
    English: "dot"
    },
    {
      ChineseCharacter: "分钟",
    Mandarin: "fēnzhōng",
    English: "minute"
    },
    {
      ChineseCharacter: "现在",
    Mandarin: "xiànzài",
    English: "now"
    },
    {
      ChineseCharacter: "时候",
    Mandarin: "shíhóu",
    English: "time"
    },
    {
      ChineseCharacter: "爸爸",
    Mandarin: "bàba",
    English: "father"
    },
    {
      ChineseCharacter: "妈妈",
    Mandarin: "māma",
    English: "mother"
    },
    {
      ChineseCharacter: "儿子",
    Mandarin: "érzi",
    English: "son"
    },
    {
      ChineseCharacter: "女儿",
    Mandarin: "nǚér",
    English: "daughter"
    },
    {
      ChineseCharacter: "老师",
    Mandarin: "lǎoshī",
    English: "teacher"
    },
    {
      ChineseCharacter: "学生",
    Mandarin: "xuéshēng",
    English: "student"
    },
    {
      ChineseCharacter: "同学",
    Mandarin: "tóngxué",
    English: "shoolmate"
    },
    {
      ChineseCharacter: "朋友",
    Mandarin: "péngyǒu",
    English: "friend"
    },
    {
      ChineseCharacter: "医生",
    Mandarin: "yīshēng",
    English: "doctor"
    },
    {
      ChineseCharacter: "先生",
    Mandarin: "xiānshēng",
    English: "sir"
    },
    {
      ChineseCharacter: "小姐",
    Mandarin: "xiǎojiě",
    English: "Miss"
    },
    {
      ChineseCharacter: "衣服",
    Mandarin: "yīfu",
    English: "cloth"
    },
    {
      ChineseCharacter: "水",
    Mandarin: "shuǐ",
    English: "water"
    },
    {
      ChineseCharacter: "菜",
    Mandarin: "cài",
    English: "vegetable"
    },
    {
      ChineseCharacter: "米饭",
    Mandarin: "mǐfàn",
    English: "rice"
    },
    {
      ChineseCharacter: "水果",
    Mandarin: "shuǐguǒ",
    English: "fruit"
    },
    {
      ChineseCharacter: "苹果",
    Mandarin: "píngguǒ",
    English: "apple"
    },
    {
      ChineseCharacter: "茶",
    Mandarin: "chá",
    English: "tea"
    },
    {
      ChineseCharacter: "杯子",
    Mandarin: "bēizi",
    English: "cup"
    },
    {
      ChineseCharacter: "钱",
    Mandarin: "qián",
    English: "money"
    },
    {
      ChineseCharacter: "飞机",
    Mandarin: "fēijī",
    English: "airplane"
    },
    {
      ChineseCharacter: "出租车",
    Mandarin: "chūzūchē",
    English: "taxi"
    },
    {
      ChineseCharacter: "电视",
    Mandarin: "diànshì",
    English: "television"
    },
    {
      ChineseCharacter: "电脑",
    Mandarin: "diànnǎo",
    English: "computer"
    },
    {
      ChineseCharacter: "电影",
    Mandarin: "diànyǐng",
    English: "movie"
    },
    {
      ChineseCharacter: "天气",
    Mandarin: "tiānqì",
    English: "weather"
    },
    {
      ChineseCharacter: "猫",
    Mandarin: "māo",
    English: "cat"
    },
    {
      ChineseCharacter: "狗",
    Mandarin: "gǒu",
    English: "dog"
    },
    {
      ChineseCharacter: "东西",
    Mandarin: "dōngxī",
    English: "thing"
    },
    {
      ChineseCharacter: "人",
    Mandarin: "rén",
    English: "person"
    },
    {
      ChineseCharacter: "名字",
    Mandarin: "míngzi",
    English: "name"
    },
    {
      ChineseCharacter: "书",
    Mandarin: "shū",
    English: "book"
    },
    {
      ChineseCharacter: "汉语",
    Mandarin: "hànyǔ",
    English: "mandarin Chinese"
    },
    {
      ChineseCharacter: "字",
    Mandarin: "zì",
    English: "character"
    },
    {
      ChineseCharacter: "桌子",
    Mandarin: "zhuōzi",
    English: "desk"
    },
    {
      ChineseCharacter: "椅子",
    Mandarin: "yǐzi",
    English: "chair"
    },
    {
      ChineseCharacter: "谢谢",
    Mandarin: "xièxie",
    English: "thank"
    },
    {
      ChineseCharacter: "不客气",
    Mandarin: "búkèqì",
    English: "you are welcome"
    },
    {
      ChineseCharacter: "再见",
    Mandarin: "zàijiàn",
    English: "good-bye"
    },
    {
      ChineseCharacter: "请",
    Mandarin: "qǐng",
    English: "please"
    },
    {
      ChineseCharacter: "对不起",
    Mandarin: "duìbùqǐ",
    English: "sorry"
    },
    {
      ChineseCharacter: "没关系",
    Mandarin: "méiguānxì",
    English: "It doesn’t matter"
    },
    {
      ChineseCharacter: "有",
    Mandarin: "yǒu",
    English: "have"
    },
    {
      ChineseCharacter: "看",
    Mandarin: "kàn",
    English: "look"
    },
    {
      ChineseCharacter: "听",
    Mandarin: "tīng",
    English: "listen"
    },
    {
      ChineseCharacter: "说话",
    Mandarin: "shuōhuà",
    English: "speak"
    },
    {
      ChineseCharacter: "读",
    Mandarin: "dú",
    English: "read"
    },
    {
      ChineseCharacter: "写",
    Mandarin: "xiě",
    English: "write"
    },
    {
      ChineseCharacter: "看见",
    Mandarin: "kànjiàn",
    English: "see"
    },
    {
      ChineseCharacter: "叫",
    Mandarin: "jiào",
    English: "call"
    },
    {
      ChineseCharacter: "来",
    Mandarin: "lái",
    English: "come"
    },
    {
      ChineseCharacter: "回",
    Mandarin: "huí",
    English: "return"
    },
    {
      ChineseCharacter: "去",
    Mandarin: "qù",
    English: "go"
    },
    {
      ChineseCharacter: "吃",
    Mandarin: "chī",
    English: "eat"
    },
    {
      ChineseCharacter: "喝",
    Mandarin: "hē",
    English: "drink"
    },
    {
      ChineseCharacter: "睡觉",
    Mandarin: "shuìjiào",
    English: "sleep"
    },
    {
      ChineseCharacter: "打电话",
    Mandarin: "dǎdiànhuà",
    English: "call up"
    },
    {
      ChineseCharacter: "做",
    Mandarin: "zuò",
    English: "do"
    },
    {
      ChineseCharacter: "买",
    Mandarin: "mǎi",
    English: "buy"
    },
    {
      ChineseCharacter: "开",
    Mandarin: "kāi",
    English: "open"
    },
    {
      ChineseCharacter: "坐",
    Mandarin: "zuò",
    English: "sit"
    },
    {
      ChineseCharacter: "住",
    Mandarin: "zhù",
    English: "live"
    },
    {
      ChineseCharacter: "学习",
    Mandarin: "xuéxí",
    English: "study"
    },
    {
      ChineseCharacter: "工作",
    Mandarin: "gōngzuò",
    English: "work"
    },
    {
      ChineseCharacter: "下雨",
    Mandarin: "xiàyǔ",
    English: "rain"
    },
    {
      ChineseCharacter: "爱",
    Mandarin: "ài",
    English: "love"
    },
    {
      ChineseCharacter: "喜欢",
    Mandarin: "xǐhuān",
    English: "love"
    },
    {
      ChineseCharacter: "想",
    Mandarin: "xiǎng",
    English: "want"
    },
    {
      ChineseCharacter: "认识",
    Mandarin: "rènshi",
    English: "know"
    },
    {
      ChineseCharacter: "会",
    Mandarin: "huì",
    English: "can"
    },
    {
      ChineseCharacter: "能",
    Mandarin: "néng",
    English: "can"
    },

    {
      ChineseCharacter: "好",
    Mandarin: "hǎo",
    English: "good"
    },
    {
      ChineseCharacter: "大",
    Mandarin: "dà",
    English: "big"
    },
    {
      ChineseCharacter: "小",
    Mandarin: "xiǎo",
    English: "small"
    },
    {
      ChineseCharacter: "多",
    Mandarin: "duō",
    English: "many"
    },
    {
      ChineseCharacter: "少",
    Mandarin: "shǎo",
    English: "little"
    },
    {
      ChineseCharacter: "冷",
    Mandarin: "lěng",
    English: "cold"
    },
    {
      ChineseCharacter: "热",
    Mandarin: "rè",
    English: "hot"
    },
    {
      ChineseCharacter: "高兴",
    Mandarin: "gāoxìng",
    English: "happy"
    },
    {
      ChineseCharacter: "漂亮",
    Mandarin: "piàoliàng",
    English: "beautiful"
    }
    ]
}
