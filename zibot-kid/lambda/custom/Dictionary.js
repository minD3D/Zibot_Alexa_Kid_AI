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
    KoreanWord: [
    {
    English: "a, an",
    Korean: "하나의"
     },
    {
    English: "about",
    Korean: "~에 관하여"
     },
    {
    English: "across",
    Korean: "~를 가로질러"
     },
    {
    English: "act",
    Korean: "행동"
     },
    {
    English: "address",
    Korean: "주소"
     },
    {
    English: "afraid",
    Korean: "두려워하다"
     },
    {
    English: "after",
    Korean: "~후에"
     },
    {
    English: "afternoon",
    Korean: "오후"
     },
    {
    English: "again",
    Korean: "다시"
     },
    {
    English:"age",
    Korean: "나이"
     },
    {
    English:"ago",
    Korean: "~전에"
     },
    {
    English:"air",
    Korean: "공기"
     },
    {
    English:"airport",
    Korean: "공항"
     },
    {
    English:"album",
    Korean: "사진첩"
     },
    {
    English:"all",
    Korean: "모두"
     },
    {
    English:"along",
    Korean: "~을 따라서"
     },
    {
    English:"always",
    Korean: "항상"
     },
    {
    English:"among",
    Korean: "~사이에서"
     },
    {
    English:"and",
    Korean: "그리고"
     },
    {
    English:"angry",
    Korean: "성난"
     },
    {
    English:"animal",
    Korean: "동물"
     },
    {
    English:"answer",
    Korean: "대답"
     },
    {
    English:"any",
    Korean: "어떤"
     },
    {
    English:"apartment",
    Korean: "아파트"
     },
    {
    English:"apple",
    Korean: "사과"
     },
    {
    English:"arm",
    Korean: "팔"
     },
    {
    English:"around",
    Korean: "~주위에"
     },
    {
    English:"arrive",
    Korean: "도착하다"
     },
    {
    English:"as",
    Korean: "~같은/~로서"
     },
    {
    English:"ask",
    Korean: "묻다"
     },
    {
    English:"at",
    Korean: "~에"
     },
    {
    English:"aunt",
    Korean: "이모, 고모"
     },
    {
    English:"autumn",
    Korean: "가을"
     },
    {
    English:"away",
    Korean: "떨어져"
     },
    {
    English:"baby",
    Korean: "아기"
     },
    {
    English:"back",
    Korean: "뒤에"
     },
    {
    English:"bad",
    Korean: "나쁜"
     },
    {
    English:"bag",
    Korean: "가방"
     },
    {
    English:"ball",
    Korean: "공"
     },
    {
    English:"balloon",
    Korean: "풍선"
     },
    {
    English:"banana",
    Korean: "바나나"
     },
    {
    English:"band",
    Korean: "끈/악단"
     },
    {
    English:"bank",
    Korean: "은행"
     },
    {
    English:"base",
    Korean: "기초"
     },
    {
    English:"basket",
    Korean: "바구니"
     },
    {
    English:"bath",
    Korean: "목욕"
     },
    {
    English:"be",
    Korean: "~이다"
     },
    {
    English:"beach",
    Korean: "해변"
     },
    {
    English:"bear",
    Korean: "공"
     },
    {
    English:"beautiful",
    Korean: "아름다운"
     },
    {
    English:"because",
    Korean: "~때문에"
     },
    {
    English:"become",
    Korean: "~이되다"
     },
    {
    English:"bed",
    Korean: "침대"
     },
    {
    English:"before",
    Korean: "~이전"
     },
    {
    English:"begin",
    Korean: "시작하다"
     },
    {
    English:"behind",
    Korean: "~뒤에"
     },
    {
    English:"bell",
    Korean: "종"
     },
    {
    English:"below",
    Korean: "~아래"
     },
    {
    English:"bench",
    Korean: "긴의자"
     },
    {
    English:"beside",
    Korean: "~옆에"
     },
    {
    English:"between",
    Korean: "~사이에"
     },
    {
    English:"bike",
    Korean: "자전거"
     },
    {
    English:"big",
    Korean: "큰"
     },
    {
    English:"bird",
    Korean: "새"
     },
    {
    English:"birthday",
    Korean: "생일"
     },
    {
    English:"black",
    Korean: "검정색"
     },
    {
    English:"blow",
    Korean: "물다"
     },
    {
    English:"blue",
    Korean: "푸른"
     },
    {
    English:"board",
    Korean: "판자"
     },
    {
    English:"boat",
    Korean: "배"
     },
    {
    English:"body",
    Korean: "몸"
     },
    {
    English:"book",
    Korean: "책"
     },
    {
    English:"bottle",
    Korean: "병"
     },
    {
    English:"bowl",
    Korean: "사발"
     },
    {
    English:"box",
    Korean: "상자"
     },
    {
    English:"boy",
    Korean: "소년"
     },
    {
    English:"bread",
    Korean: "빵"
     },
    {
    English:"break",
    Korean: "깨뜨리다"
     },
    {
    English:"breakfast",
    Korean: "아침식사"
     },
    {
    English:"bridge",
    Korean: "다리"
     },
    {
    English:"bright",
    Korean: "밝은"
     },
    {
    English:"bring",
    Korean: "가져오다"
     },
    {
    English:"brother",
    Korean: "형제"
     },
    {
    English:"brown",
    Korean: "갈색"
     },
    {
    English:"brush",
    Korean: "솔"
     },
    {
    English:"build",
    Korean: "세우다"
     },
    {
    English:"burn",
    Korean: "불타다"
     },
    {
    English:"bus",
    Korean: "버스"
     },
    {
    English:"busy",
    Korean: "바쁜"
     },
    {
    English:"but",
    Korean: "그러나"
     },
    {
    English:"butter",
    Korean: "버터"
     },
    {
    English:"button",
    Korean: "단추"
     },
    {
    English:"buy",
    Korean: "사다"
     },
    {
    English:"by",
    Korean: "~옆에"
     },
    {
    English:"bye",
    Korean: "안녕"
     },
    {
    English:"calendar",
    Korean: "달력"
     },
    {
    English:"cake",
    Korean: "케이크"
     },
    {
    English:"call",
    Korean: "부르다"
     },
    {
    English:"camera",
    Korean: "카메라"
     },
    {
    English: "camp",
    Korean: "야영지"
     },
    {
    English: "can",
    Korean: "할수있다"
     },
    {
    English: "candle",
    Korean: "양초"
     },
    {
    English: "candy",
    Korean: "사탕"
     },
    {
    English: "cap",
    Korean: "모자"
     },
    {
    English: "capital",
    Korean: "수도/대문자"
     },
    {
    English: "captain",
    Korean: "우두머리"
     },
    {
    English: "car",
    Korean: "자동차"
     },
    {
    English: "card",
    Korean: "카드"
     },
    {
    English: "care",
    Korean: "걱정/돌보다"
     },
    {
    English: "carry",
    Korean: "나르다"
     },
    {
    English: "case",
    Korean: "경우"
     },
    {
    English: "cassette",
    Korean: "카세트"
     },
    {
    English: "cat",
    Korean: "고양이"
     },
    {
    English: "catch",
    Korean: "붙잡다"
     },
    {
    English: "ceilling",
    Korean: "천장"
     },
    {
    English: "center",
    Korean: "중앙"
     },
    {
    English: "chair",
    Korean: "의자"
     },
    {
    English: "chalk",
    Korean: "분필"
     },
    {
    English: "chance",
    Korean: "기회"
     },
    {
    English: "change",
    Korean: "바꾸다"
     },
    {
    English: "cheap",
    Korean: "값싼"
     },
    {
    English: "cheese",
    Korean: "치즈"
     },
    {
    English: "chicken",
    Korean: "닭"
     },
    {
    English: "child",
    Korean: "어린이"
     },
    {
    English: "chopstick",
    Korean: "젓가락"
     },
    {
    English: "church",
    Korean: "교회"
     },
    {
    English: "circle",
    Korean: "원"
     },
    {
    English: "city",
    Korean: "도시"
     },
    {
    English: "class",
    Korean: "학급"
     },
    {
    English: "classmate",
    Korean: "동급생"
     },
    {
    English: "clean",
    Korean: "깨끗한"
     },
    {
    English: "climb",
    Korean: "오르다"
     },
    {
    English: "clock",
    Korean: "시계"
     },
    {
    English: "close",
    Korean: "닫다"
     },
    {
    English: "clothes",
    Korean: "옷"
     },
    {
    English: "cloud",
    Korean: "구름"
     },
    {
    English: "club",
    Korean: "클럽"
     },
    {
    English: "coat",
    Korean: "코트"
     },
    {
    English: "coffee",
    Korean: "커피"
     },
    {
    English: "coin",
    Korean: "동전"
     },
    {
    English: "cold",
    Korean: "추운"
     },
    {
    English: "color",
    Korean: "색깔"
     },
    {
    English: "come",
    Korean: "오다"
     },
    {
    English: "computer",
    Korean: "컴퓨터"
     },
    {
    English: "cook",
    Korean: "요리하다"
     },
    {
    English: "cool",
    Korean: "시원한"
     },
    {
    English: "copy",
    Korean: "사본/베끼다"
     },
    {
    English: "corner",
    Korean: "모퉁이"
     },
    {
    English: "count",
    Korean: "세다"
     },
    {
    English: "country",
    Korean: "지역"
     },
    {
    English: "course",
    Korean: "과정"
     },
    {
    English: "cousin",
    Korean: "사촌"
     },
    {
    English: "cover",
    Korean: "덮다"
     },
    {
    English: "cow",
    Korean: "암소"
     },
    {
    English: "crayon",
    Korean: "크레용"
     },
    {
    English: "cream",
    Korean: "크림"
     },
    {
    English: "cross",
    Korean: "가로지르다"
     },
    {
    English: "cry",
    Korean: "울다"
     },
    {
    English: "cup",
    Korean: "컵"
     },
    {
    English: "curtain",
    Korean: "커튼"
     },
    {
    English: "cut",
    Korean: "자르다"
     },
    {
    English: "dad",
    Korean: "아빠/아버지"
     },
    {
    English: "dance",
    Korean: "춤추다"
     },
    {
    English: "danger",
    Korean: "위험한"
     },
    {
    English: "dark",
    Korean: "어두운"
     },
    {
    English: "date",
    Korean: "날짜"
     },
    {
    English: "daughter",
    Korean: "딸"
     },
    {
    English: "day",
    Korean: "낮/하루"
     },
    {
    English: "dead",
    Korean: "죽은"
     },
    {
    English: "deep",
    Korean: "깊은"
     },
    {
    English: "deer",
    Korean: "사슴"
     },
    {
    English: "desk",
    Korean: "책상"
     },
    {
    English: "dial",
    Korean: "다이얼"
     },
    {
    English: "diary",
    Korean: "일기"
     },
    {
    English: "dictionary",
    Korean: "사전"
     },
    {
    English: "die",
    Korean: "죽다"
     },
    {
    English: "dinner",
    Korean: "저녁"
     },
    {
    English: "dirty",
    Korean: "더러운"
     },
    {
    English: "dish",
    Korean: "큰접시"
     },
    {
    English: "do",
    Korean: "하다"
     },
    {
    English: "doctor",
    Korean: "의사"
     },
    {
    English: "dog",
    Korean: "개"
     },
    {
    English: "doll",
    Korean: "인형"
     },
    {
    English: "dollar",
    Korean: "달러"
     },
    {
    English: "dolphin",
    Korean: "돌고래"
     },
    {
    English: "door",
    Korean: "문"
     },
    {
    English: "down",
    Korean: "아래에"
     },
    {
    English: "draw",
    Korean: "그리다"
     },
    {
    English: "dream",
    Korean: "꿈"
     },
    {
    English: "dress",
    Korean: "드레스"
     },
    {
    English: "drink",
    Korean: "마시다"
     },
    {
    English: "drive",
    Korean: "운전하다"
     },
    {
    English: "drop",
    Korean: "떨어지다/방울"
     },
    {
    English: "drum",
    Korean: "북"
     },
    {
    English: "dry",
    Korean: "마른"
     },
    {
    English: "duck",
    Korean: "오리"
     },
    {
    English: "ear",
    Korean: "귀"
     },
    {
    English: "early",
    Korean: "일찍"
     },
    {
    English: "earth",
    Korean: "지구"
     },
    {
    English: "east",
    Korean: "동쪽"
     },
    {
    English: "easy",
    Korean: "쉬운"
     },
    {
    English: "eat",
    Korean: "먹다"
     },
    {
    English: "egg",
    Korean: "계란"
     },
    {
    English: "empty",
    Korean: "텅빈"
     },
    {
    English: "end",
    Korean: "끝"
     },
    {
    English: "engine",
    Korean: "엔진"
     },
    {
    English: "enjoy",
    Korean: "즐기다"
     },
    {
    English: "enough",
    Korean: "충분한"
     },
    {
    English: "eraser",
    Korean: "지우개"
     },
    {
    English: "evening",
    Korean: "저녁"
     },
    {
    English: "every",
    Korean: "모든/모든이"
     },
    {
    English: "example",
    Korean: "예/보기"
     },
    {
    English: "excellent",
    Korean: "뛰어난"
     },
    {
    English: "excite",
    Korean: "흥분시키다"
     },
    {
    English: "excuse",
    Korean: "용서하다"
     },
    {
    English: "exercise",
    Korean: "연습"
     },
    {
    English: "eye",
    Korean: "눈"
     },
    {
    English: "face",
    Korean: "얼굴"
     },
    {
    English: "fact",
    Korean: "사실"
     },
    {
    English: "fair",
    Korean: "공정한"
     },
    {
    English: "fall",
    Korean: "떨어지다/가을"
     },
    {
    English: "family",
    Korean: "가족"
     },
    {
    English: "far",
    Korean: "멀리떨어진"
     },
    {
    English: "farm",
    Korean: "농장"
     },
    {
    English: "fast",
    Korean: "빠른"
     },
    {
    English: "fat",
    Korean: "살찐"
     },
    {
    English: "famous",
    Korean: "유명한"
     },
    {
    English: "father",
    Korean: "아버지"
     },
    {
    English: "feel",
    Korean: "느끼다"
     },
    {
    English: "few",
    Korean: "다소/양이적은"
     },
    {
    English: "field",
    Korean: "들판/경기장"
     },
    {
    English: "fight",
    Korean: "싸움"
     },
    {
    English: "fill",
    Korean: "채우다"
     },
    {
    English: "film",
    Korean: "필름"
     },
    {
    English: "find",
    Korean: "찾다"
     },
    {
    English: "fine",
    Korean: "좋은/맞은"
     },
    {
    English: "finger",
    Korean: "손가락"
     },
    {
    English: "finish",
    Korean: "끝내다"
     },
    {
    English: "fire",
    Korean: "불"
     },
    {
    English: "fish",
    Korean: "물고기/낚시하다"
     },
    {
    English: "fix",
    Korean: "고정시키다"
     },
    {
    English: "flag",
    Korean: "깃발"
     },
    {
    English: "floor",
    Korean: "마룻바닥"
     },
    {
    English: "flower",
    Korean: "꽃"
     },
    {
    English: "fly",
    Korean: "날다/파리"
     },
    {
    English: "follow",
    Korean: "뒤를 따르다"
     },
    {
    English: "food",
    Korean: "음식"
     },
    {
    English: "fool",
    Korean: "바보"
     },
    {
    English: "foot",
    Korean: "발"
     },
    {
    English: "for",
    Korean: "~을 위하여/~동안"
     },
    {
    English: "forget",
    Korean: "잊다"
     },
    {
    English: "fork",
    Korean: "포크"
     },
    {
    English: "free",
    Korean: "자유로운"
     },
    {
    English: "fresh",
    Korean: "신선한"
     },
    {
    English: "friend",
    Korean: "친구"
     },
    {
    English: "from",
    Korean: "~로 부터"
     },
    {
    English: "front",
    Korean: "앞/정면"
     },
    {
    English: "fruit",
    Korean: "과일"
     },
    {
    English: "full",
    Korean: "가득 찬"
     },
    {
    English: "fun",
    Korean: "즐거움"
     },
    {
    English: "game",
    Korean: "놀이"
     },
    {
    English: "garden",
    Korean: "정원"
     },
    {
    English: "gas",
    Korean: "가스/휘발유"
     },
    {
    English: "gate",
    Korean: "문"
     },
    {
    English: "gentle",
    Korean: "온화한"
     },
    {
    English: "get",
    Korean: "얻다"
     },
    {
    English: "girl",
    Korean: "소녀"
     },
    {
    English: "give",
    Korean: "주다"
     },
    {
    English: "glad",
    Korean: "기쁜"
     },
    {
    English: "glass",
    Korean: "유리/컵"
     },
    {
    English: "glove",
    Korean: "장갑"
     },
    {
    English: "go",
    Korean: "가다"
     },
    {
    English: "god",
    Korean: "신,하느님"
     },
    {
    English: "gold",
    Korean: "금"
     },
    {
    English: "good",
    Korean: "좋은"
     },
    {
    English: "grandmother",
    Korean: "할머니"
     },
    {
    English: "grape",
    Korean: "포도"
     },
    {
    English: "grass",
    Korean: "풀/잔디"
     },
    {
    English: "gray",
    Korean: "회색"
     },
    {
    English: "great",
    Korean: "큰"
     },
    {
    English: "green",
    Korean: "녹색"
     },
    {
    English: "ground",
    Korean: "땅/기초"
     },
    {
    English: "group",
    Korean: "단체"
     },
    {
    English: "grow",
    Korean: "성장하다"
     },
    {
    English: "guitar",
    Korean: "기타"
     },
    {
    English: "hair",
    Korean: "머리카락"
     },
    {
    English: "half",
    Korean: "절반"
     },
    {
    English: "hall",
    Korean: "회관/넓은방"
     },
    {
    English: "hamburger",
    Korean: "햄버거"
     },
    {
    English: "hand",
    Korean: "손"
     },
    {
    English: "handle",
    Korean: "손잡이"
     },
    {
    English: "happen",
    Korean: "발생하다"
     },
    {
    English: "happy",
    Korean: "행복한"
     },
    {
    English: "hard",
    Korean: "단단한/열심히"
     },
    {
    English: "hat",
    Korean: "모자"
     },
    {
    English: "hate",
    Korean: "미워하다"
     },
    {
    English: "have",
    Korean: "가지고 있다"
     },
    {
    English: "he",
    Korean: "그/남자"
     },
    {
    English: "head",
    Korean: "머리"
     },
    {
    English: "hear",
    Korean: "듣다"
     },
    {
    English: "heart",
    Korean: "마음/심장"
     },
    {
    English: "heavy",
    Korean: "무거운"
     },
    {
    English: "hello",
    Korean: "여보세요"
     },
    {
    English: "help",
    Korean: "돕다"
     },
    {
    English: "hen",
    Korean: "암탉"
     },
    {
    English: "here",
    Korean: "여기에서"
     },
    {
    English: "hi",
    Korean: "안녕하세요!"
     },
    {
    English: "hide",
    Korean: "숨기다"
     },
    {
    English: "high",
    Korean: "높은"
     },
    {
    English: "hiking",
    Korean: "하이킹/도보여행"
     },
    {
    English: "hill",
    Korean: "언덕"
     },
    {
    English: "hit",
    Korean: "때리다"
     },
    {
    English: "hold",
    Korean: "잡다"
     },
    {
    English: "hole",
    Korean: "구멍"
     },
    {
    English: "holiday",
    Korean: "휴일"
     },
    {
    English: "home",
    Korean: "집"
     },
    {
    English: "hope",
    Korean: "희망"
     },
    {
    English: "hose",
    Korean: "호스"
     },
    {
    English: "horse",
    Korean: "말"
     },
    {
    English: "hospital",
    Korean: "병원"
     },
    {
    English: "hot",
    Korean: "뜨거운"
     },
    {
    English: "hotel",
    Korean: "호텔"
     },
    {
    English: "hour",
    Korean: "시간"
     },
    {
    English: "house",
    Korean: "주택"
     },
    {
    English: "how",
    Korean: "어떻게"
     },
    {
    English: "hungry",
    Korean: "배고픈"
     },
    {
    English: "hurry",
    Korean: "서두르다"
     },
    {
    English: "hurt",
    Korean: "다치게하다"
     },
    {
    English: "I",
    Korean: "나"
     },
    {
    English: "ice",
    Korean: "얼음"
     },
    {
    English: "idea",
    Korean: "생각"
     },
    {
    English: "if",
    Korean: "만약"
     },
    {
    English: "ill",
    Korean: "만약병든"
     },
    {
    English: "in",
    Korean: "~속"
     },
    {
    English: "ink",
    Korean: "잉크"
     },
    {
    English: "interest",
    Korean: "흥미"
     },
    {
    English: "into",
    Korean: "~속으로"
     },
    {
    English: "introduce",
    Korean: "소개하다"
     },
    {
    English: "island",
    Korean: "그것"
     },
    {
    English: "it",
    Korean: "그것"
     },
    {
    English: "job",
    Korean: "직업"
     },
    {
    English: "join",
    Korean: "가입하다"
     },
    {
    English: "juice",
    Korean: "주스"
     },
    {
    English: "jump",
    Korean: "뛰어오르다"
     },
    {
    English: "jungle",
    Korean: "밀림지대"
     },
    {
    English: "just",
    Korean: "오직/겨우"
     },
    {
    English: "keep",
    Korean: "지키다/견디다"
     },
    {
    English: "key",
    Korean: "열쇠"
     },
    {
    English: "kick",
    Korean: "차다"
     },
    {
    English: "kid",
    Korean: "아이"
     },
    {
    English: "kill",
    Korean: "죽이다"
     },
    {
    English: "kind",
    Korean: "친절한/종류"
     },
    {
    English: "king",
    Korean: "왕"
     },
    {
    English: "kitchen",
    Korean: "부엌"
     },
    {
    English: "knee",
    Korean: "무릎"
     },
    {
    English: "knife",
    Korean: "칼"
     },
    {
    English: "knock",
    Korean: "두드리다"
     },
    {
    English: "know",
    Korean: "알다"
     },
    {
    English: "lady",
    Korean: "숙녀"
     },
    {
    English: "lake",
    Korean: "호수"
     },
    {
    English: "lamp",
    Korean: "등불"
     },
    {
    English: "land",
    Korean: "땅"
     },
    {
    English: "large",
    Korean: "큰/넓은"
     },
    {
    English: "last",
    Korean: "마지막/최근"
     },
    {
    English: "late",
    Korean: "늦은"
     },
    {
    English: "laugh",
    Korean: "웃다"
     },
    {
    English: "lead",
    Korean: "인도하다"
     },
    {
    English: "leaf",
    Korean: "잎"
     },
    {
    English: "learn",
    Korean: "배우다"
     },
    {
    English: "leave",
    Korean: "떠나다"
     },
    {
    English: "left",
    Korean: "왼쪽"
     },
    {
    English: "leg",
    Korean: "다리"
     },
    {
    English: "lesson",
    Korean: "학과"
     },
    {
    English: "let",
    Korean: "허락하다"
     },
    {
    English: "letter",
    Korean: "편지/글자"
     },
    {
    English: "library",
    Korean: "도서관"
     },
    {
    English: "lie",
    Korean: "눕다/거짓말하다"
     },
    {
    English: "light",
    Korean: "빛"
     },
    {
    English: "like",
    Korean: "좋아하다/~같은"
     },
    {
    English: "line",
    Korean: "선/줄"
     },
    {
    English: "lion",
    Korean: "사자"
     },
    {
    English: "lip",
    Korean: "입술"
     },
    {
    English: "list",
    Korean: "목록"
     },
    {
    English: "listen",
    Korean: "듣다"
     },
    {
    English: "little",
    Korean: "작은"
     },
    {
    English: "live",
    Korean: "살다/생생한"
     },
    {
    English: "long",
    Korean: "긴"
     },
    {
    English: "look",
    Korean: "바라보다"
     },
    {
    English: "lose",
    Korean: "잃다"
     },
    {
    English: "lot",
    Korean: "많은"
     },
    {
    English: "loud",
    Korean: "소리가 큰"
     },
    {
    English: "love",
    Korean: "사랑하다"
     },
    {
    English: "low",
    Korean: "낮은"
     },
    {
    English: "luck",
    Korean: "행운"
     },
    {
    English: "lunch",
    Korean: "점심식사"
     },
    {
    English: "ma'am",
    Korean: "아주머니"
     },
    {
    English: "mad",
    Korean: "미친"
     },
    {
    English: "mail",
    Korean: "우편"
     },
    {
    English: "make",
    Korean: "만들다"
     },
    {
    English: "man",
    Korean: "사람/남자"
     },
    {
    English: "many",
    Korean: "많은"
     },
    {
    English: "map",
    Korean: "지도"
     },
    {
    English: "march",
    Korean: "행진/"
     },
    {
    English: "market",
    Korean: "상점"
     },
    {
    English: "marry",
    Korean: "결혼하다"
     },
    {
    English: "matter",
    Korean: "문제"
     },
    {
    English: "may",
    Korean: "~해도좋다/"
     },
    {
    English: "meat",
    Korean: "고기"
     },
    {
    English: "meal",
    Korean: "메달"
     },
    {
    English: "meet",
    Korean: "만나다"
     },
    {
    English: "melon",
    Korean: "멜론"
     },
    {
    English: "meter",
    Korean: "미터"
     },
    {
    English: "middle",
    Korean: "한가운데"
     },
    {
    English: "milk",
    Korean: "우유"
     },
    {
    English: "million",
    Korean: ""
     },
    {
    English: "minute",
    Korean: "분/순간"
     },
    {
    English: "mirror",
    Korean: "거울"
     },
    {
    English: "Miss",
    Korean: "~양/호칭"
     },
    {
    English: "model",
    Korean: "무형"
     },
    {
    English: "mom",
    Korean: "엄마"
     },
    {
    English: "money",
    Korean: "돈"
     },
    {
    English: "monkey",
    Korean: "아침"
     },
    {
    English: "month",
    Korean: "달/월"
     },
    {
    English: "moon",
    Korean: "달"
     },
    {
    English: "morning",
    Korean: "아침"
     },
    {
    English: "mother",
    Korean: "어머니"
     },
    {
    English: "mountain",
    Korean: "산"
     },
    {
    English: "mouth",
    Korean: "입"
     },
    {
    English: "move",
    Korean: "움직이다"
     },
    {
    English: "movie",
    Korean: "영화"
     },
    {
    English: "Mr.",
    Korean: "~씨"
     },
    {
    English: "Mrs.",
    Korean: "~여사"
     },
    {
    English: "much",
    Korean: "많은"
     },
    {
    English: "music",
    Korean: "음악"
     },
    {
    English: "must",
    Korean: "~해야한다"
     },
    {
    English: "name",
    Korean: "이름"
     },
    {
    English: "narrow",
    Korean: "좁은"
     },
    {
    English: "near",
    Korean: "가까운"
     },
    {
    English: "neck",
    Korean: "목"
     },
    {
    English: "need",
    Korean: "필요하다"
     },
    {
    English: "never",
    Korean: "결코~않다"
     },
    {
    English: "new",
    Korean: "새로운"
     },
    {
    English: "news",
    Korean: "뉴스"
     },
    {
    English: "next",
    Korean: "다음의"
     },
    {
    English: "nice",
    Korean: "좋은"
     },
    {
    English: "night",
    Korean: "밤"
     },
    {
    English: "no",
    Korean: "아니다/없다"
     },
    {
    English: "noise",
    Korean: "소음"
     },
    {
    English: "north",
    Korean: "북쪽"
     },
    {
    English: "nose",
    Korean: "코"
     },
    {
    English: "not",
    Korean: "아니다"
     },
    {
    English: "note",
    Korean: "공책"
     },
    {
    English: "now",
    Korean: "지금"
     },
    {
    English: "number",
    Korean: "숫자"
     },
    {
    English: "nurse",
    Korean: "간호원"
     },
    {
    English: "o'clock",
    Korean: "~시 정각"
     },
    {
    English: "of",
    Korean: "~의"
     },
    {
    English: "off",
    Korean: "떨어진/끄다"
     },
    {
    English: "office",
    Korean: "사무실"
     },
    {
    English: "often",
    Korean: "흔히/종종"
     },
    {
    English: "oh",
    Korean: "오!"
     },
    {
    English: "oil",
    Korean: "기름"
     },
    {
    English: "okay",
    Korean: "좋아"
     },
    {
    English: "old",
    Korean: "늙은"
     },
    {
    English: "on",
    Korean: "~위에"
     },
    {
    English: "once",
    Korean: "한 번"
     },
    {
    English: "only",
    Korean: "오직"
     },
    {
    English: "open",
    Korean: "열린"
     },
    {
    English: "or",
    Korean: "또는"
     },
    {
    English: "orange",
    Korean: "오렌지"
     },
    {
    English: "other",
    Korean: "그밖의"
     },
    {
    English: "out",
    Korean: "밖에"
     },
    {
    English: "over",
    Korean: "~위쪽에"
     },
    {
    English: "page",
    Korean: "쪽"
     },
    {
    English: "paint",
    Korean: "칠하다"
     },
    {
    English: "pair",
    Korean: "짝"
     },
    {
    English: "pants",
    Korean: "바지"
     },
    {
    English: "paper",
    Korean: "종이"
     },
    {
    English: "pardon",
    Korean: "용서하다"
     },
    {
    English: "parent",
    Korean: "부모"
     },
    {
    English: "park",
    Korean: "공원"
     },
    {
    English: "party",
    Korean: "파티"
     },
    {
    English: "pass",
    Korean: "통과하다"
     },
    {
    English: "pay",
    Korean: "지불하다"
     },
    {
    English: "peace",
    Korean: "평화"
     },
    {
    English: "pear",
    Korean: "배"
     },
    {
    English: "pen",
    Korean: "펜/만년필"
     },
    {
    English: "pencil",
    Korean: "연필"
     },
    {
    English: "people",
    Korean: "사람들"
     },
    {
    English: "piano",
    Korean: "피아노"
     },
    {
    English: "pick",
    Korean: "따다/골라내다"
     },
    {
    English: "picnic",
    Korean: "소풍"
     },
    {
    English: "picture",
    Korean: "그림"
     },
    {
    English: "piece",
    Korean: "조각"
     },
    {
    English: "pig",
    Korean: "돼지"
     },
    {
    English: "pilot",
    Korean: "조종사"
     },
    {
    English: "pin",
    Korean: "핀"
     },
    {
    English: "pine",
    Korean: "소나무"
     },
    {
    English: "pink",
    Korean: "분홍"
     },
    {
    English: "pipe",
    Korean: "파이프/관"
     },
    {
    English: "place",
    Korean: "장소"
     },
    {
    English: "plan",
    Korean: "계획"
     },
    {
    English: "plane",
    Korean: "비행기"
     },
    {
    English: "plant",
    Korean: "식물"
     },
    {
    English: "play",
    Korean: "놀다"
     },
    {
    English: "please",
    Korean: "기쁘게하다/제발"
     },
    {
    English: "pocket",
    Korean: "주머니"
     },
    {
    English: "point",
    Korean: "점수/요점"
     },
    {
    English: "police",
    Korean: "경찰"
     },
    {
    English: "pool",
    Korean: "웅덩이"
     },
    {
    English: "poor",
    Korean: "가난한"
     },
    {
    English: "post",
    Korean: "기둥/우편"
     },
    {
    English: "poster",
    Korean: "포스터"
     },
    {
    English: "potato",
    Korean: "감자"
     },
    {
    English: "practice",
    Korean: "연습/습관"
     },
    {
    English: "prsent",
    Korean: "현재/선물"
     },
    {
    English: "pretty",
    Korean: "예쁜"
     },
    {
    English: "print",
    Korean: "인쇄하다"
     },
    {
    English: "problem",
    Korean: "문제"
     },
    {
    English: "pull",
    Korean: "끌다"
     },
    {
    English: "push",
    Korean: "밀다"
     },
    {
    English: "put",
    Korean: "놓다"
     },
    {
    English: "queen",
    Korean: "여왕"
     },
    {
    English: "question",
    Korean: "질문"
     },
    {
    English: "quick",
    Korean: "빠른"
     },
    {
    English: "quiet",
    Korean: "조용한"
     },
    {
    English: "radio",
    Korean: "라디오"
     },
    {
    English: "rain",
    Korean: "비"
     },
    {
    English: "rainbow",
    Korean: "무지개"
     },
    {
    English: "read",
    Korean: "읽다"
     },
    {
    English: "ready",
    Korean: "준비가 된"
     },
    {
    English: "real",
    Korean: "실제하는"
     },
    {
    English: "record",
    Korean: "기록하다"
     },
    {
    English: "red",
    Korean: "빨강"
     },
    {
    English: "remember",
    Korean: "기억하다"
     },
    {
    English: "repeat",
    Korean: "반복하다"
     },
    {
    English: "rest",
    Korean: "휴식"
     },
    {
    English: "restaurant",
    Korean: "식당"
     },
    {
    English: "return",
    Korean: "되돌아가다"
     },
    {
    English: "ribbon",
    Korean: "리본"
     },
    {
    English: "rice",
    Korean: "쌀"
     },
    {
    English: "rich",
    Korean: "부유하다"
     },
    {
    English: "ride",
    Korean: "타다"
     },
    {
    English: "right",
    Korean: "오른쪽/옳은"
     },
    {
    English: "ring",
    Korean: "반지/고리"
     },
    {
    English: "river",
    Korean: "강"
     },
    {
    English: "road",
    Korean: "길"
     },
    {
    English: "robot",
    Korean: "로보트"
     },
    {
    English: "rock",
    Korean: "바위"
     },
    {
    English: "rocket",
    Korean: "로켓"
     },
    {
    English: "roll",
    Korean: "구르다"
     },
    {
    English: "roof",
    Korean: "지붕"
     },
    {
    English: "room",
    Korean: "방"
     },
    {
    English: "rose",
    Korean: "장미"
     },
    {
    English: "round",
    Korean: "둥근"
     },
    {
    English: "ruler",
    Korean: "자"
     },
    {
    English: "run",
    Korean: "달리다"
     },
    {
    English: "sad",
    Korean: "슬픈"
     },
    {
    English: "safe",
    Korean: "안전한"
     },
    {
    English: "salt",
    Korean: "소금"
     },
    {
    English: "salad",
    Korean: "샐러드"
     },
    {
    English: "same",
    Korean: "같은"
     },
    {
    English: "sand",
    Korean: "모래"
     },
    {
    English: "say",
    Korean: "말하다"
     },
    {
    English: "school",
    Korean: "학교"
     },
    {
    English: "score",
    Korean: "점수"
     },
    {
    English: "sea",
    Korean: "바다"
     },
    {
    English: "season",
    Korean: "계절"
     },
    {
    English: "seat",
    Korean: "의자/좌석"
     },
    {
    English: "see",
    Korean: "보다"
     },
    {
    English: "sell",
    Korean: "팔다"
     },
    {
    English: "send",
    Korean: "보내다"
     },
    {
    English: "service",
    Korean: "봉사하다"
     },
    {
    English: "set",
    Korean: "놓다"
     },
    {
    English: "shall",
    Korean: "~인 것이다"
     },
    {
    English: "shape",
    Korean: "모양"
     },
    {
    English: "she",
    Korean: "그녀"
     },
    {
    English: "sheep",
    Korean: "양"
     },
    {
    English: "sheet",
    Korean: "시트/한 장"
     },
    {
    English: "ship",
    Korean: "배"
     },
    {
    English: "shirt",
    Korean: "셔츠"
     },
    {
    English: "shoe",
    Korean: "구두"
     },
    {
    English: "shoot",
    Korean: "쏘다"
     },
    {
    English: "shop",
    Korean: "가게"
     },
    {
    English: "short",
    Korean: "짧은"
     },
    {
    English: "shoulder",
    Korean: "어깨"
     },
    {
    English: "shout",
    Korean: "외치다"
     },
    {
    English: "show",
    Korean: "보이다"
     },
    {
    English: "shower",
    Korean: "소나기/샤워"
     },
    {
    English: "shut",
    Korean: "닫다"
     },
    {
    English: "sick",
    Korean: "아픈"
     },
    {
    English: "side",
    Korean: "옆/측면"
     },
    {
    English: "sign",
    Korean: "기호/신호"
     },
    {
    English: "silver",
    Korean: "은"
     },
    {
    English: "sing",
    Korean: "노래하다"
     },
    {
    English: "sir",
    Korean: "~님/~씨"
     },
    {
    English: "sister",
    Korean: "자매"
     },
    {
    English: "sit",
    Korean: "앉다"
     },
    {
    English: "size",
    Korean: "크기"
     },
    {
    English: "skate",
    Korean: "스케이트"
     },
    {
    English: "skirt",
    Korean: "치마"
     },
    {
    English: "sky",
    Korean: "하늘"
     },
    {
    English: "sleep",
    Korean: "잠자다"
     },
    {
    English: "slide",
    Korean: "미끄러지다"
     },
    {
    English: "slow",
    Korean: "느린"
     },
    {
    English: "small",
    Korean: "작은"
     },
    {
    English: "smell",
    Korean: "냄새나다"
     },
    {
    English: "smile",
    Korean: "웃다"
     },
    {
    English: "smoke",
    Korean: "연기"
     },
    {
    English: "snow",
    Korean: "눈"
     },
    {
    English: "so",
    Korean: "그와같이"
     },
    {
    English: "soap",
    Korean: "비누"
     },
    {
    English: "soccer",
    Korean: "축구"
     },
    {
    English: "sock",
    Korean: "양말"
     },
    {
    English: "soft",
    Korean: "부드러운"
     },
    {
    English: "some",
    Korean: "약간의"
     },
    {
    English: "son",
    Korean: "아들"
     },
    {
    English: "song",
    Korean: "노래"
     },
    {
    English: "soon",
    Korean: "곧"
     },
    {
    English: "sorry",
    Korean: "슬픈/유감의"
     },
    {
    English: "sound",
    Korean: "남쪽"
     },
    {
    English: "soup",
    Korean: "스프"
     },
    {
    English: "south",
    Korean: "남쪽"
     },
    {
    English: "space",
    Korean: "공간/우주"
     },
    {
    English: "speak",
    Korean: "이야기하다"
     },
    {
    English: "speed",
    Korean: "속력"
     },
    {
    English: "spell",
    Korean: "철자"
     },
    {
    English: "spend",
    Korean: "낭비하다"
     },
    {
    English: "spoon",
    Korean: "숟가락"
     },
    {
    English: "sport",
    Korean: "운동경기"
     },
    {
    English: "spring",
    Korean: "봉/용수철"
     },
    {
    English: "square",
    Korean: "정사각형"
     },
    {
    English: "stairs",
    Korean: "계단/사닥다리"
     },
    {
    English: "stamp",
    Korean: "우표"
     },
    {
    English: "stand",
    Korean: "서다"
     },
    {
    English: "star",
    Korean: "별"
     },
    {
    English: "start",
    Korean: "출발하다"
     },
    {
    English: "station",
    Korean: "정거장"
     },
    {
    English: "stay",
    Korean: "머물다"
     },
    {
    English: "steam",
    Korean: "증기"
     },
    {
    English: "step",
    Korean: "한걸음"
     },
    {
    English: "stick",
    Korean: "막대기"
     },
    {
    English: "stone",
    Korean: "돌"
     },
    {
    English: "stop",
    Korean: "멈추다"
     },
    {
    English: "store",
    Korean: "가게"
     },
    {
    English: "storm",
    Korean: "폭풍우"
     },
    {
    English: "story",
    Korean: "이야기"
     },
    {
    English: "stove",
    Korean: "스토브/난로"
     },
    {
    English: "straight",
    Korean: "곧은"
     },
    {
    English: "strange",
    Korean: "이상한/낯선"
     },
    {
    English: "strawberry",
    Korean: "딸기"
     },
    {
    English: "street",
    Korean: "거리"
     },
    {
    English: "strike",
    Korean: "치다"
     },
    {
    English: "strong",
    Korean: "강한"
     },
    {
    English: "student",
    Korean: "학생"
     },
    {
    English: "study",
    Korean: "공부"
     },
    {
    English: "stupid",
    Korean: "어리석은"
     },
    {
    English: "subway",
    Korean: "지하철"
     },
    {
    English: "sugar",
    Korean: "설탕"
     },
    {
    English: "summer",
    Korean: "여름"
     },
    {
    English: "sun",
    Korean: "태양"
     },
    {
    English: "supermarket",
    Korean: "슈퍼마켓"
     },
    {
    English: "supper",
    Korean: "저녁식사"
     },
    {
    English: "sure",
    Korean: "확실한"
     },
    {
    English: "surprise",
    Korean: "놀라운"
     },
    {
    English: "sweater",
    Korean: "스웨터"
     },
    {
    English: "sweet",
    Korean: "달콤한"
     },
    {
    English: "swim",
    Korean: "수영"
     },
    {
    English: "swing",
    Korean: "흔들리다"
     },
    {
    English: "switch",
    Korean: "스위치"
     },
    {
    English: "table",
    Korean: "탁자/식탁"
     },
    {
    English: "take",
    Korean: "잡다/가져가다"
     },
    {
    English: "talk",
    Korean: "말하다"
     },
    {
    English: "tall",
    Korean: "키가 큰"
     },
    {
    English: "tape",
    Korean: "테이프"
     },
    {
    English: "taste",
    Korean: "맛보다"
     },
    {
    English: "taxi",
    Korean: "택시"
     },
    {
    English: "tea",
    Korean: "차"
     },
    {
    English: "teach",
    Korean: "가르치다"
     },
    {
    English: "team",
    Korean: "팀"
     },
    {
    English: "telephone",
    Korean: "전화기"
     },
    {
    English: "television",
    Korean: "텔레비전"
     },
    {
    English: "tell",
    Korean: "이야기하다"
     },
    {
    English: "temp",
    Korean: "절"
     },
    {
    English: "tennis",
    Korean: "테니스"
     },
    {
    English: "test",
    Korean: "시험"
     },
    {
    English: "than",
    Korean: "~보다"
     },
    {
    English: "thank",
    Korean: "감사하다"
     },
    {
    English: "that",
    Korean: "그것"
     },
    {
    English: "the",
    Korean: "그"
     },
    {
    English: "then",
    Korean: "그때"
     },
    {
    English: "there",
    Korean: "그곳에"
     },
    {
    English: "they",
    Korean: "그들"
     },
    {
    English: "thick",
    Korean: "두꺼운"
     },
    {
    English: "thin",
    Korean: "얇은"
     },
    {
    English: "thing",
    Korean: "사물"
     },
    {
    English: "think",
    Korean: "생각하다"
     },
    {
    English: "thirsty",
    Korean: "목마른/갈망"
     },
    {
    English: "this",
    Korean: "이것"
     },
    {
    English: "through",
    Korean: "통해서"
     },
    {
    English: "throw",
    Korean: "던지다"
     },
    {
    English: "ticket",
    Korean: "표"
     },
    {
    English: "tie",
    Korean: "메다"
     },
    {
    English: "tiger",
    Korean: "호랑이"
     },
    {
    English: "till",
    Korean: "~까지"
     },
    {
    English: "time",
    Korean: "시간"
     },
    {
    English: "tired",
    Korean: "피곤한"
     },
    {
    English: "to",
    Korean: "~으로/~까지"
     },
    {
    English: "today",
    Korean: "오늘/현재"
     },
    {
    English: "toghether",
    Korean: "함께"
     },
    {
    English: "tomato",
    Korean: "토마토"
     },
    {
    English: "tomorrow",
    Korean: "내일"
     },
    {
    English: "tonight",
    Korean: "오늘밤"
     },
    {
    English: "too",
    Korean: "또한/많은"
     },
    {
    English: "tooth",
    Korean: "이"
     },
    {
    English: "top",
    Korean: "꼭대기"
     },
    {
    English: "touch",
    Korean: "만지다"
     },
    {
    English: "town",
    Korean: "도시"
     },
    {
    English: "toy",
    Korean: "장난감"
     },
    {
    English: "train",
    Korean: "훈련"
     },
    {
    English: "travel",
    Korean: "여행하다"
     },
    {
    English: "tree",
    Korean: "나무"
     },
    {
    English: "trip",
    Korean: "여행"
     },
    {
    English: "truck",
    Korean: "화물차"
     },
    {
    English: "true",
    Korean: "참된/진짜의"
     },
    {
    English: "try",
    Korean: "노력/시도하다"
     },
    {
    English: "tulip",
    Korean: "튤립"
     },
    {
    English: "turn",
    Korean: "돌다"
     },
    {
    English: "twice",
    Korean: "두 번"
     },
    {
    English: "umbrella",
    Korean: "우산"
     },
    {
    English: "uncle",
    Korean: "삼촌"
     },
    {
    English: "under",
    Korean: "~아래에"
     },
    {
    English: "understand",
    Korean: "이해하다"
     },
    {
    English: "until",
    Korean: "~까지"
     },
    {
    English: "up",
    Korean: "위에"
     },
    {
    English: "use",
    Korean: "사용하다"
     },
    {
    English: "usual",
    Korean: "보통의"
     },
    {
    English: "vacation",
    Korean: "휴가"
     },
    {
    English: "vegitable",
    Korean: "야채"
     },
    {
    English: "very",
    Korean: "대단희/몹시"
     },
    {
    English: "video",
    Korean: "비디오"
     },
    {
    English: "vilage",
    Korean: "마을"
     },
    {
    English: "visit",
    Korean: "방문하다"
     },
    {
    English: "violin",
    Korean: "바이올린"
     },
    {
    English: "wait",
    Korean: "기다리다"
     },
    {
    English: "wake",
    Korean: "잠이깨다"
     },
    {
    English: "walk",
    Korean: "걷다"
     },
    {
    English: "wall",
    Korean: "벽"
     },
    {
    English: "want",
    Korean: "원하다"
     },
    {
    English: "war",
    Korean: "전쟁"
     },
    {
    English: "warm",
    Korean: "따뜻한"
     },
    {
    English: "wash",
    Korean: "씻다"
     },
    {
    English: "waste",
    Korean: "낭비하다"
     },
    {
    English: "watch",
    Korean: "시계"
     },
    {
    English: "water",
    Korean: "물"
     },
    {
    English: "way",
    Korean: "길"
     },
    {
    English: "we",
    Korean: "우리"
     },
    {
    English: "weak",
    Korean: "약한"
     },
    {
    English: "wear",
    Korean: "옷입다"
     },
    {
    English: "weather",
    Korean: "날씨"
     },
    {
    English: "week",
    Korean: "주"
     },
    {
    English: "welcome",
    Korean: "환영하다"
     },
    {
    English: "well",
    Korean: "상당히"
     },
    {
    English: "west",
    Korean: "서쪽"
     },
    {
    English: "wet",
    Korean: "젖은"
     },
    {
    English: "what",
    Korean: "무엇"
     },
    {
    English: "when",
    Korean: "언제"
     },
    {
    English: "where",
    Korean: "어디"
     },
    {
    English: "which",
    Korean: "백색"
     },
    {
    English: "white",
    Korean: "누구"
     },
    {
    English: "who",
    Korean: "어느쪽"
     },
    {
    English: "why",
    Korean: "왜"
     },
    {
    English: "wide",
    Korean: "넓은"
     },
    {
    English: "will",
    Korean: "~할 것이다"
     },
    {
    English: "win",
    Korean: "이기다"
     },
    {
    English: "wind",
    Korean: "바람"
     },
    {
    English: "window",
    Korean: "창문"
     },
    {
    English: "wing",
    Korean: "날개"
     },
    {
    English: "winter",
    Korean: "겨울"
     },
    {
    English: "with",
    Korean: "~와 함께"
     },
    {
    English: "woman",
    Korean: "여자"
     },
    {
    English: "wonder",
    Korean: "놀라다"
     },
    {
    English: "wood",
    Korean: "나무"
     },
    {
    English: "word",
    Korean: "낱말/말"
     },
    {
    English: "work",
    Korean: "일"
     },
    {
    English: "world",
    Korean: "세상"
     },
    {
    English: "write",
    Korean: "쓰다"
     },
    {
    English: "wrong",
    Korean: "나쁜"
     },
    {
    English: "yeah",
    Korean: "예"
     },
    {
    English: "year",
    Korean: "해/"
     },
    {
    English: "yellow",
    Korean: "노랑색"
     },
    {
    English: "yes",
    Korean: "네"
     },
    {
    English: "yesterday",
    Korean: "어제"
     },
    {
    English: "yet",
    Korean: "아직"
     },
    {
    English: "you",
    Korean: "당신"
     },
    {
    English: "young",
    Korean: "젊은"
     },
    {
    English: "zero",
    Korean: "영"
     },
    {
    English: "zoo",
    Korean: "동물원"
     },
],



ChineseWord:[
  {
  English: "about",
  Chinese: "差不多",
  },
  {
  English: "across",
  Chinese: "横过，穿过",
  },
  {
  English: "after",
  Chinese: "在…之后",
  },
  {
  English: "afternoon",
  Chinese: "下午",
  },
  {
  English: "again",
  Chinese: "再一次",
  },
  {
  English: "airport",
  Chinese: "机场",
  },
  {
  English: "alive",
  Chinese: "活着的",
  },
  {
  English: "all",
  Chinese: "所有的",
  },
  {
  English: "altogether",
  Chinese: "完全",
  },
  {
  English: "always",
  Chinese: "总是",
  },
  {
  English: "am",
  Chinese: "我是",
  },
  {
  English: "ambulance",
  Chinese: "救护车",
  },
  {
  English: "America",
  Chinese: "美国",
  },
  {
  English: "American",
  Chinese: "美国的",
  },
  {
  English: "an",
  Chinese: "冠词",
  Chinese: "一",
  },
  {
  English: "and",
  Chinese: "和，与",
  },
  {
  English: "animal",
  Chinese: "动物",
  },
  {
  English: "answer",
  Chinese: "回答",
  },
  {
  English: "any",
  Chinese: "任一的",
  },
  {
  English: "apple",
  Chinese: "苹果",
  },
  {
  English: "April",
  Chinese: "四月",
  },
  {
  English: "are",
  Chinese: "是",
  },
  {
  English: "arm",
  Chinese: "手臂",
  },
  {
  English: "arrive",
  Chinese: "到达",
  },
  {
  English: "art",
  Chinese: "艺术",
  },
  {
  English: "ask",
  Chinese: "问，询问",
  },
  {
  English: "at",
  Chinese: "在",
  },
  {
  English: "August",
  Chinese: "八月",
  },
  {
  English: "aunt",
  Chinese: "姨，姑",
  },
  {
  English: "autumn",
  Chinese: "秋天",
  },
  {
  English: "baby",
  Chinese: "婴儿",
  },
  {
  English: "back",
  Chinese: "向后",
  },
  {
  English: "bad",
  Chinese: "坏的",
  },
  {
  English: "bag",
  Chinese: "皮包",
  },
  {
  English: "ball",
  Chinese: "球",
  },
  {
  English: "balloon",
  Chinese: "气球",
  },
  {
  English: "ball pen",
  Chinese: "圆珠笔",
  },
  {
  English: "bamboo",
  Chinese: "竹",
  },
  {
  English: "banana",
  Chinese: "香蕉",
  },
  {
  English: "bank",
  Chinese: "银行",
  },
  {
  English: "be",
  Chinese: "是，在，",
  Chinese: "成为",
  },
  {
  English: "bear",
  Chinese: "熊",
  },
  {
  English: "beautiful",
  Chinese: "美丽的",
  },
  {
  English: "bed",
  Chinese: "床",
  },
  {
  English: "bee",
  Chinese: "蜜蜂",
  },
  {
  English: "behind",
  Chinese: "在后"
  },
  {
  English: "BeiJing",
  Chinese: "北京",
  },
  {
  English: "bell",
  Chinese: "钟，铃",
  },
  {
  English: "beside",
  Chinese: "在……….旁边",
  },
  {
  English: "better",
  Chinese: "比较好的",
  },
  {
  English: "big",
  Chinese: "大的",
  },
  {
  English: "bike",
  Chinese: "自行车",
  },
  {
  English: "bird",
  Chinese: "鸟",
  },
  {
  English: "birthday",
  Chinese: "生日",
  },
  {
  English: "biscuit",
  Chinese: "饼干",
  },
  {
  English: "black",
  Chinese: "黑色的",
  },
  {
  English: "blackboard",
  Chinese: "黑板",
  },
  {
  English: "blue",
  Chinese: "蓝色的",
  },
  {
  English: "blouse",
  Chinese: "女用短上衣",
  },
  {
  English: "body",
  Chinese: "身体",
  },
  {
  English: "book",
  Chinese: "书",
  },
  {
  English: "borrow",
  Chinese: "借",
  },
  {
  English: "both",
  Chinese: "两者都",
  },
  {
  English: "bottle",
  Chinese: "瓶子",
  },
  {
  English: "box",
  Chinese: "箱子，盒子",
  },
  {
  English: "boy",
  Chinese: "男孩",
  },
  {
  English: "bread",
  Chinese: "面包",
  },
  {
  English: "breakfast",
  Chinese: "早餐",
  },
  {
  English: "bridge",
  Chinese: "桥",
  },
  {
  English: "brother",
  Chinese: "兄，弟",
  },
  {
  English: "brown",
  Chinese: "棕色的",
  },
  {
  English: "brush",
  Chinese: "刷子",
  },
  {
  English: "bus",
  Chinese: "公共汽车",
  },
  {
  English: "busy",
  Chinese: "忙碌的",
  },
  {
  English: "butter",
  Chinese: "黄油",
  },
  {
  English: "by",
  Chinese: "乘坐，通过",
  },
  {
  English: "bye-bye",
  Chinese: "再见",
  },
  {
  English: "cake",
  Chinese: "蛋糕",
  },
  {
  English: "can",
  Chinese: "会，能够",
  },
  {
  English: "can’t",
  Chinese: "不会，不能够",
  },
  {
  English: "car",
  Chinese: "小汽车",
  },
  {
  English: "card",
  Chinese: "卡片",
  },
  {
  English: "careful",
  Chinese: "小心的，仔细的",
  },
  {
  English: "cat",
  Chinese: "猫",
  },
  {
  English: "cave",
  Chinese: "煽动",
  },
  {
  English: "certainly",
  Chinese: "当然",
  },
  {
  English: "chair",
  Chinese: "椅子",
  },
  {
  English: "change",
  Chinese: "找头，零钱",
  },
  {
  English: "cheap",
  Chinese: "廉价的，便宜的",
  },
  {
  English: "chick",
  Chinese: "小鸡",
  },
  {
  English: "child",
  Chinese: "孩子",
  },
  {
  English: "children",
  Chinese: "孩子们",
  },
  {
  English: "China",
  Chinese: "中国",
  },
  {
  English: "Chinese",
  Chinese: "中国人",
  },
  {
  English: "chocolate",
  Chinese: "巧克力",
  },
  {
  English: "cinema",
  Chinese: "电影院",
  },
  {
  English: "class",
  Chinese: "班，级",
  },
  {
  English: "classroom",
  Chinese: "教室",
  },
  {
  English: "clean",
  Chinese: "打扫",
  },
  {
  English: "clever",
  Chinese: "聪明的",
  },
  {
  English: "clock",
  Chinese: "钟",
  },
  {
  English: "cloth",
  Chinese: "布，抹布",
  },
  {
  English: "clothes",
  Chinese: "衣服",
  },
  {
  English: "cloud",
  Chinese: "云",
  },
  {
  English: "cloudy",
  Chinese: "多云的",
  },
  {
  English: "coat",
  Chinese: "上衣，外套",
  },
  {
  English: "coffee",
  Chinese: "咖啡",
  },
  {
  English: "coke",
  Chinese: "可口可乐",
  },
  {
  English: "cold",
  Chinese: "冷的",
  },
  {
  English: "colour",
  Chinese: "颜色",
  },
  {
  English: "come",
  Chinese: "来，到",
  },
  {
  English: "computer",
  Chinese: "计算机",
  },
  {
  English: "cook",
  Chinese: "厨师",
  },
  {
  English: "cooker",
  Chinese: "炊具",
  },
  {
  English: "cool",
  Chinese: "凉的",
  },
  {
  English: "corner",
  Chinese: "角，角落",
  },
  {
  English: "count",
  Chinese: "数",
  },
  {
  English: "course",
  Chinese: "过程",
  },
  {
  English: "cow",
  Chinese: "母牛",
  },
  {
  English: "cream",
  Chinese: "奶油",
  },
  {
  English: "crisp",
  Chinese: "炸薯片",
  },
  {
  English: "cry",
  Chinese: "喊叫，哭",
  },
  {
  English: "cup",
  Chinese: "杯子",
  },
  {
  English: "cupboard",
  Chinese: "橱，柜",
  },
  {
  English: "dad",
  Chinese: "爸爸",
  },
  {
  English: "daily",
  Chinese: "日常的",
  },
  {
  English: "dance",
  Chinese: "跳舞",
  },
  {
  English: "dark",
  Chinese: "暗的",
  },
  {
  English: "day",
  Chinese: "一天",
  },
  {
  English: "dear",
  Chinese: "贵的，亲爱的",
  },
  {
  English: "December",
  Chinese: "十二月",
  },
  {
  English: "deer",
  Chinese: "鹿",
  },
  {
  English: "desk",
  Chinese: "书桌",
  },
  {
  English: "dialogue",
  Chinese: "对话",
  },
  {
  English: "dictionary",
  Chinese: "辞典",
  },
  {
  English: "difficult",
  Chinese: "难的，困难的",
  },
  {
  English: "dinner",
  Chinese: "正餐",
  },
  {
  English: "dirty",
  Chinese: "脏的",
  },
  {
  English: "dish",
  Chinese: "盘",
  },
  {
  English: "dive",
  Chinese: "跳水",
  },
  {
  English: "do",
  Chinese: "做，干",
  },
  {
  English: "doctor",
  Chinese: "医生",
  },
  {
  English: "dog",
  Chinese: "狗",
  },
  {
  English: "door",
  Chinese: "门",
  },
  {
  English: "down",
  Chinese: "往下",
  },
  {
  English: "draw",
  Chinese: "画，绘",
  },
  {
  English: "dress",
  Chinese: "服装",
  },
  {
  English: "drink",
  Chinese: "喝，饮",
  },
  {
  English: "drive",
  Chinese: "驾驶",
  },
  {
  English: "driver",
  Chinese: "驾驶员",
  },
  {
  English: "duck",
  Chinese: "鸭子",
  },
  {
  English: "ear",
  Chinese: "耳朵",
  },
  {
  English: "early",
  Chinese: "早的",
  },
  {
  English: "east",
  Chinese: "东方的",
  },
  {
  English: "easy",
  Chinese: "容易的",
  },
  {
  English: "eat",
  Chinese: "吃",
  },
  {
  English: "egg",
  Chinese: "蛋",
  },
  {
  English: "eight",
  Chinese: "八",
  },
  {
  English: "elephant",
  Chinese: "大象",
  },
  {
  English: "eleven",
  Chinese: "十一",
  },
  {
  English: "empty",
  Chinese: "空的",
  },
  {
  English: "enjoy",
  Chinese: "喜爱",
  },
  {
  English: "evening",
  Chinese: "晚上",
  },
  {
  English: "every",
  Chinese: "每一",
  },
  {
  English: "exam",
  Chinese: "考试",
  },
  {
  English: "excuse",
  Chinese: "原谅",
  },
  {
  English: "exercise",
  Chinese: "练习",
  },
  {
  English: "eye",
  Chinese: "眼睛"},
  {
  English: "factory",
  Chinese: "工厂",
  },
  {
  English: "face",
  Chinese: "脸，面孔",
  },
  {
  English: "family",
  Chinese: "家庭",
  },
  {
  English: "fan",
  Chinese: "扇子",
  },
  {
  English: "farmer",
  Chinese: "农民",
  },
  {
  English: "fat",
  Chinese: "胖的",
  },
  {
  English: "father",
  Chinese: "父亲",
  },
  {
  English: "February",
  Chinese: "二月",
  },
  {
  English: "film",
  Chinese: "电影",
  },
  {
  English: "find",
  Chinese: "找到",
  },
  {
  English: "fine",
  Chinese: "很好的",
  },
  {
  English: "finger",
  Chinese: "手指",
  },
  {
  English: "finish",
  Chinese: "完成，结束",
  },
  {
  English: "fireman",
  Chinese: "消防队员",
  },
  {
  English: "fish",
  Chinese: "鱼",
  },
  {
  English: "five",
  Chinese: "五",
  },
  {
  English: "flag",
  Chinese: "旗",
  },
  {
  English: "floor",
  Chinese: "地板",
  },
  {
  English: "flower",
  Chinese: "花",
  },
  {
  English: "fly",
  Chinese: "苍蝇",
  },
  {
  English: "food",
  Chinese: "食物，食品",
  },
  {
  English: "foot",
  Chinese: "脚，足",
  },
  {
  English: "football",
  Chinese: "足球",
  },
  {
  English: "for",
  Chinese: "给",
  },
  {
  English: "four",
  Chinese: "四",
  },
  {
  English: "fox",
  Chinese: "狐狸",
  },
  {
  English: "free",
  Chinese: "自由的，空闲的",
  },
  {
  English: "Friday",
  Chinese: "星期五",
  },
  {
  English: "fridge",
  Chinese: "冰箱",
  },
  {
  English: "friend",
  Chinese: "朋友",
  },
  {
  English: "frog",
  Chinese: "青蛙",
  },
  {
  English: "from",
  Chinese: "从…地方来",
  },
  {
  English: "front",
  Chinese: "前面",
  },
  {
  English: "fruit",
  Chinese: "水果",
  },
  {
  English: "full",
  Chinese: "满的"
},
  {
  English: "game",
  Chinese: "游戏",
  },
  {
  English: "garden",
  Chinese: "花园",
  },
  {
  English: "get",
  Chinese: "得到",
  },
  {
  English: "gift",
  Chinese: "礼物",
  },
  {
  English: "girl",
  Chinese: "女孩",
  },
  {
  English: "give",
  Chinese: "给，送给",
  },
  {
  English: "glad",
  Chinese: "高兴的",
  },
  {
  English: "glass",
  Chinese: "玻璃杯",
  },
  {
  English: "go",
  Chinese: "去，走",
  },
  {
  English: "good",
  Chinese: "另人满意的",
  },
  {
  English: "goodbye",
  Chinese: "再见",
  },
  {
  English: "goose",
  Chinese: "鹅",
  },
  {
  English: "grade",
  Chinese: "年级",
  },
  {
  English: "grandfather",
  Chinese: "外祖父",
  },
  {
  English: "grandmother",
  Chinese: "外祖母",
  },
  {
  English: "grass",
  Chinese: "草",
  },
  {
  English: "great",
  Chinese: "大的",
  },
  {
  English: "green",
  Chinese: "绿色的",
  },
  {
  English: "guess",
  Chinese: "猜，猜测",
  },
  {
  English: "gun",
  Chinese: "枪",
  },
  {
  English: "hair",
  Chinese: "头发",
  },
  {
  English: "half",
  Chinese: "一半",
  },
  {
  English: "hall",
  Chinese: "礼堂",
  },
  {
  English: "hand",
  Chinese: "手",
  },
  {
  English: "happy",
  Chinese: "高兴的",
  },
  {
  English: "hard",
  Chinese: "用功",
  },
  {
  English: "has",
  Chinese: "有",
  },
  {
  English: "hat",
  Chinese: "帽子",
  },
  {
  English: "have",
  Chinese: "有",
  },
  {
  English: "haven",
  Chinese: "他",
  },
  {
  English: "head",
  Chinese: "头",
  },
  {
  English: "hear",
  Chinese: "听",
  },
  {
  English: "hello",
  Chinese: "喂",
  },
  {
  English: "help",
  Chinese: "帮助",
  },
  {
  English: "hem",
  Chinese: "母鸡",
  },
  {
  English: "her",
  Chinese: "她",
  },
  {
  English: "here",
  Chinese: "这里",
  },
  {
  English: "hey",
  Chinese: "嗨",
  },
  {
  English: "hi",
  Chinese: "嘿",
  },
  {
  English: "hill",
  Chinese: "小山",
  },
  {
  English: "him",
  Chinese: "他",
  },
  {
  English: "his",
  Chinese: "他的",
  },
  {
  English: "home",
  Chinese: "家",
  },
  {
  English: "homework",
  Chinese: "家庭作业",
  },
  {
  English: "honey",
  Chinese: "蜂蜜",
  },
  {
  English: "horse",
  Chinese: "马",
  },
  {
  English: "hospital",
  Chinese: "医院",
  },
  {
  English: "hot",
  Chinese: "热的",
  },
  {
  English: "house",
  Chinese: "房屋",
  },
  {
  English: "how",
  Chinese: "怎么样",
  },
  {
  English: "hundred",
  Chinese: "百",
  },
  {
  English: "hungry",
  Chinese: "饿的",
  },
  {
  English: "hurry",
  Chinese: "赶快",
  },
  {
  English: "hurt",
  Chinese: "弄痛",
  },
  {
  English: "I",
  Chinese: "我",
  },
  {
  English: "ice",
  Chinese: "冰",
  },
  {
  English: "ice-cream冰激凌",
  },
  {
  English: "ill",
  Chinese: "有病的",
  },
  {
  English: "in",
  Chinese: "在地方",
  },
  {
  English: "ink",
  Chinese: "墨水",
  },
  {
  English: "interesting",
  Chinese: "有趣的",
  },
  {
  English: "is",
  Chinese: "是",
  },
  {
  English: "isn’t",
  Chinese: "不是",
  },
  {
  English: "it",
  Chinese: "它，这个",
  },
  {
  English: "it’s",
  Chinese: "它的",
  },
  {
  English: "jacket",
  Chinese: "短上衣",
  },
  {
  English: "jam",
  Chinese: "果酱",
  },
  {
  English: "January",
  Chinese: "一月",
  },
  {
  English: "jeep",
  Chinese: "吉普车",
  },
  {
  English: "jet",
  Chinese: "喷气式飞机",
  },
  {
  English: "join",
  Chinese: "参加，加入",
  },
  {
  English: "juice",
  Chinese: "果汁，菜汁",
  },
  {
  English: "July",
  Chinese: "七月",
  },
  {
  English: "jump",
  Chinese: "跳，跳跃",
  },
  {
  English: "June",
  Chinese: "六月",
  },
  {
  English: "just",
  Chinese: "正好",
  },
  {
  English: "key",
  Chinese: "钥匙",
  },
  {
  English: "kind",
  Chinese: "友好的",
  },
  {
  English: "kitchen",
  Chinese: "厨房",
  },
  {
  English: "kite",
  Chinese: "风筝",
  },
  {
  English: "knee",
  Chinese: "膝，膝盖",
  },
  {
  English: "knife",
  Chinese: "刀",
  },
  {
  English: "knock",
  Chinese: "敲",
  },
  {
  English: "know",
  Chinese: "懂得",
  },
  {
  English: "lamp",
  Chinese: "灯",
  },
  {
  English: "large",
  Chinese: "大的",
  },
  {
  English: "late",
  Chinese: "迟的",
  },
  {
  English: "laugh",
  Chinese: "笑",
  },
  {
  English: "left",
  Chinese: "左边的",
  },
  {
  English: "leg",
  Chinese: "腿",
  },
  {
  English: "lemon",
  Chinese: "柠檬",
  },
  {
  English: "lemonade",
  Chinese: "柠檬汽水",
  },
  {
  English: "lesson",
  Chinese: "课",
  },
  {
  English: "let",
  Chinese: "让，允许",
  },
  {
  English: "letter",
  Chinese: "字母，信",
  },
  {
  English: "library",
  Chinese: "图书馆",
  },
  {
  English: "life",
  Chinese: "生命",
  },
  {
  English: "like",
  Chinese: "喜欢",
  },
  {
  English: "line",
  Chinese: "一排",
  },
  {
  English: "lion",
  Chinese: "狮子",
  },
  {
  English: "listen",
  Chinese: "听",
  },
  {
  English: "little",
  Chinese: "小的",
  },
  {
  English: "long",
  Chinese: "长",
  },
  {
  English: "look",
  Chinese: "看",
  },
  {
  English: "lot",
  Chinese: "很多",
  },
  {
  English: "love",
  Chinese: "爱，喜爱",
  },
  {
  English: "lovely",
  Chinese: "可爱的",
  },
  {
  English: "lunch",
  Chinese: "午餐",
  },
  {
  English: "make",
  Chinese: "制造",
  },
  {
  English: "man",
  Chinese: "成年男子",
  },
  {
  English: "many",
  Chinese: "很多的",
  },
  {
  English: "map",
  Chinese: "地图",
  },
  {
  English: "march",
  Chinese: "三月",
  },
  {
  English: "market",
  Chinese: "市场",
  },
  {
  English: "mask",
  Chinese: "面罩",
  },
  {
  English: "maths",
  Chinese: "数学",
  },
  {
  English: "May",
  Chinese: "五月",
  },
  {
  English: "may",
  Chinese: "可以",
  },
  {
  English: "me",
  Chinese: "我",
  },
  {
  English: "meat",
  Chinese: "肉",
  },
  {
  English: "meet",
  Chinese: "遇见",
  },
  {
  English: "meeting",
  Chinese: "会议",
  },
  {
  English: "melon",
  Chinese: "瓜",
  },
  {
  English: "mention",
  Chinese: "谈到",
  },
  {
  English: "middle",
  Chinese: "中间的，中部的",
  },
  {
  English: "milk",
  Chinese: "牛奶",
  },
  {
  English: "mind",
  Chinese: "介意",
  },
  {
  English: "minute",
  Chinese: "分钟",
  },
  {
  English: "miss",
  Chinese: "小姐",
  },
  {
  English: "mistake",
  Chinese: "错误",
  },
  {
  English: "monday",
  Chinese: "星期一",
  },
  {
  English: "money",
  Chinese: "钱",
  },
  {
  English: "monkey",
  Chinese: "猴子",
  },
  {
  English: "month",
  Chinese: "月",
  },
  {
  English: "moon",
  Chinese: "月亮",
  },
  {
  English: "morning",
  Chinese: "早晨",
  },
  {
  English: "mother",
  Chinese: "母亲",
  },
  {
  English: "mouth",
  Chinese: "口，",
  Chinese: "嘴",
  },
  {
  English: "Mr.",
  Chinese: "先生",
  },
  {
  English: "Mrs.",
  Chinese: "太太",
  },
  {
  English: "much",
  Chinese: "许多的",
  },
  {
  English: "Mum",
  Chinese: "妈妈",
  },
  {
  English: "music",
  Chinese: "音乐",
  },
  {
  English: "must",
  Chinese: "必须",
  },
  {
  English: "my",
  Chinese: "我的",
  },
  {
  English: "name",
  Chinese: "名字",
  },
  {
  English: "near",
  Chinese: "近的",
  },
  {
  English: "need",
  Chinese: "需要",
  },
  {
  English: "never",
  Chinese: "从不",
  },
  {
  English: "new",
  Chinese: "新的",
  },
  {
  English: "news",
  Chinese: "新闻",
  },
  {
  English: "newspaper",
  Chinese: "报纸",
  },
  {
  English: "next",
  Chinese: "下一个",
  },
  {
  English: "nice",
  Chinese: "令人愉快的",
  },
  {
  English: "night",
  Chinese: "晚上",
  },
  {
  English: "nine",
  Chinese: "九",
  },
  {
  English: "no",
  Chinese: "不，没有",
  },
  {
  English: "north",
  Chinese: "北方",
  },
  {
  English: "northeast",
  Chinese: "东北的",
  },
  {
  English: "nose",
  Chinese: "鼻子",
  },
  {
  English: "not",
  Chinese: "不",
  },
  {
  English: "notebook",
  Chinese: "笔记本",
  },
  {
  English: "November",
  Chinese: "十一月",
  },
  {
  English: "now",
  Chinese: "现在",
  },
  {
  English: "number",
  Chinese: "数字",
  },
  {
  English: "nurse",
  Chinese: "护士",
  },
  {
  English: "o’clock",
  Chinese: "点钟",
  },
  {
  English: "October",
  Chinese: "十月",
  },
  {
  English: "of",
  Chinese: "……的",
  },
  {
  English: "office",
  Chinese: "办公室",
  },
  {
  English: "often",
  Chinese: "常常",
  },
  {
  English: "oh",
  Chinese: "啊",
  },
  {
  English: "Ok",
  Chinese: "好的",
  },
  {
  English: "old",
  Chinese: "旧的",
  },
  {
  English: "on",
  Chinese: "在……上",
  },
  {
  English: "once",
  Chinese: "一次",
  },
  {
  English: "one",
  Chinese: "一个",
  },
  {
  English: "only",
  Chinese: "唯一的",
  },
  {
  English: "open",
  Chinese: "开着的",
  },
  {
  English: "or",
  Chinese: "或者，还是",
  },
  {
  English: "orange",
  Chinese: "橙子",
  },
  {
  English: "other",
  Chinese: "别的",
  },
  {
  English: "our",
  Chinese: "我们的",
  },
  {
  English: "out",
  Chinese: "不在，在外",
  },
  {
  English: "over",
  Chinese: "在……的上方",
  },
  {
  English: "panda",
  Chinese: "熊猫",
  },
  {
  English: "paper",
  Chinese: "纸",
  },
  {
  English: "parent",
  Chinese: "父亲",
  },
  {
  English: "park",
  Chinese: "公园",
  },
  {
  English: "parrot",
  Chinese: "鹦鹉",
  },
  {
  English: "party",
  Chinese: "聚会",
  },
  {
  English: "past",
  Chinese: "时间过了",
  },
  {
  English: "PE",
  Chinese: "体育",
  },
  {
  English: "peach",
  Chinese: "桃子",
  },
  {
  English: "pear",
  Chinese: "梨子",
  },
  {
  English: "pen",
  Chinese: "钢笔",
  },
  {
  English: "pencil",
  Chinese: "铅笔",
  },
  {
  English: "pencil-box",
  Chinese: "铅笔盒",
  },
  {
  English: "people",
  Chinese: "人人民",
  },
  {
  English: "picture",
  Chinese: "图画",
  },
  {
  English: "pineapple",
  Chinese: "菠萝",
  },
  {
  English: "ping-pong",
  Chinese: "乒乓",
  },
  {
  English: "pink",
  Chinese: "粉红色的",
  },
  {
  English: "plane",
  Chinese: "飞机",
  },
  {
  English: "plate",
  Chinese: "碟子",
  },
  {
  English: "play",
  Chinese: "玩",
  },
  {
  English: "playground",
  Chinese: "操场",
  },
  {
  English: "please",
  Chinese: "使人高兴",
  },
  {
  English: "pleasure",
  Chinese: "快乐",
  },
  {
  English: "pocket",
  Chinese: "口袋",
  },
  {
  English: "polite",
  Chinese: "有礼貌的",
  },
  {
  English: "postman",
  Chinese: "邮递员",
  },
  {
  English: "potato",
  Chinese: "土豆",
  },
  {
  English: "pupil",
  Chinese: "小学生",
  },
  {
  English: "quarter",
  Chinese: "四分之一",
  },
  {
  English: "queen",
  Chinese: "王后",
  },
  {
  English: "question",
  Chinese: "问题",
  },
  {
  English: "quilt",
  Chinese: "被子",
  },
  {
  English: "rabbit",
  Chinese: "兔子",
  },
  {
  English: "radio",
  Chinese: "收音机",
  },
  {
  English: "rain",
  Chinese: "雨",
  },
  {
  English: "rainy",
  Chinese: "下雨的",
  },
  {
  English: "read",
  Chinese: "读念",
  },
  {
  English: "ready",
  Chinese: "准备好的",
  },
  {
  English: "rectangle",
  Chinese: "长方形",
  },
  {
  English: "red",
  Chinese: "红色的",
  },
  {
  English: "rice",
  Chinese: "米",
  },
  {
  English: "rich",
  Chinese: "富有的",
  },
  {
  English: "ride",
  Chinese: "骑",
  },
  {
  English: "right",
  Chinese: "正确的",
  },
  {
  English: "river",
  Chinese: "河流",
  },
  {
  English: "road",
  Chinese: "道路",
  },
  {
  English: "room",
  Chinese: "房间",
  },
  {
  English: "rope",
  Chinese: "绳子",
  },
  {
  English: "round",
  Chinese: "圆的",
  },
  {
  English: "rubber",
  Chinese: "橡皮",
  },
  {
  English: "ruler",
  Chinese: "尺",
  },
  {
  English: "run",
  Chinese: "跑",
  },
  {
  English: "runner",
  Chinese: "赛跑的人",
  },
  {
  English: "same",
  Chinese: "一样的，相同的",
  },
  {
  English: "Saturday",
  Chinese: "星期六",
  },
  {
  English: "school",
  Chinese: "学校",
  },
  {
  English: "schoolbag",
  Chinese: "书包",
  },
  {
  English: "schoolboy",
  Chinese: "男学生",
  },
  {
  English: "schoolgirl",
  Chinese: "女学生",
  },
  {
  English: "seat",
  Chinese: "座位",
  },
  {
  English: "see",
  Chinese: "看见",
  },
  {
  English: "September",
  Chinese: "九月",
  },
  {
  English: "seven",
  Chinese: "七",
  },
  {
  English: "Shanghai",
  Chinese: "上海",
  },
  {
  English: "she",
  Chinese: "她",
  },
  {
  English: "sheep",
  Chinese: "羊",
  },
  {
  English: "shelf",
  Chinese: "搁板，架子",
  },
  {
  English: "shine",
  Chinese: "照耀，发光",
  },
  {
  English: "ship",
  Chinese: "船",
  },
  {
  English: "shirt",
  Chinese: "男式衬衫",
  },
  {
  English: "shoe",
  Chinese: "鞋",
  },
  {
  English: "shop",
  Chinese: "商店",
  },
  {
  English: "short",
  Chinese: "短裤",
  Chinese: "短的，矮的",
  },
  {
  English: "shoulder",
  Chinese: "肩膀，",
  },
  {
  English: "show",
  Chinese: "给…看",
  },
  {
  English: "shut",
  Chinese: "关上，闭上，关闭",
  },
  {
  English: "sing",
  Chinese: "唱",
  },
  {
  English: "singing",
  Chinese: "唱歌",
  },
  {
  English: "sir",
  Chinese: "先生",
  },
  {
  English: "sister",
  Chinese: "姐妹",
  },
  {
  English: "sit",
  Chinese: "坐，",
  Chinese: "就坐",
  },
  {
  English: "six",
  Chinese: "六",
  },
  {
  English: "skateboard滑板，溜冰板",
  },
  {
  English: "skirt",
  Chinese: "裙子，女裙",
  },
  {
  English: "sky",
  Chinese: "天",
  Chinese: "天空",
  },
  {
  English: "sleep",
  Chinese: "睡觉",
  },
  {
  English: "small",
  Chinese: "小的",
  },
  {
  English: "smell",
  Chinese: "气味；闻到",
  },
  {
  English: "smile",
  Chinese: "微笑",
  },
  {
  English: "snake",
  Chinese: "蛇",
  },
  {
  English: "snow",
  Chinese: "雪",
  },
  {
  English: "snowy",
  Chinese: "下雪的，雪白的",
  },
  {
  English: "sofa",
  Chinese: "沙发",
  },
  {
  English: "so",
  Chinese: "非常.很",
  },
  {
  English: "soldier",
  Chinese: "士兵",
  },
  {
  English: "some",
  Chinese: "一些",
  Chinese: "某些，一部分的",
  },
  {
  English: "table",
  Chinese: "桌子",
  },
  {
  English: "take",
  Chinese: "拿",
  },
  {
  English: "tall",
  Chinese: "高的",
  },
  {
  English: "tape",
  Chinese: "磁带",
  },
  {
  English: "tea",
  Chinese: "茶",
  },
  {
  English: "teach",
  Chinese: "教",
  },
  {
  English: "teacher",
  Chinese: "老师",
  },
  {
  English: "teeth",
  Chinese: "牙齿（复数）",
  },
  {
  English: "ten",
  Chinese: "十",
  },
  {
  English: "tennis",
  Chinese: "网球",
  },
  {
  English: "text",
  Chinese: "课文",
  },
  {
  English: "thank",
  Chinese: "感谢",
  },
  {
  English: "that",
  Chinese: "那,",
  Chinese: "那个",
  },
  {
  English: "the",
  Chinese: "这",
  },
  {
  English: "their",
  Chinese: "他们的",
  },
  {
  English: "them",
  Chinese: "他们",
  },
  {
  English: "then",
  Chinese: "当时",
  },
  {
  English: "there",
  Chinese: "在那里",
  },
  {
  English: "these",
  Chinese: "这些",
  },
  {
  English: "they",
  Chinese: "他们",
  },
  {
  English: "thin",
  Chinese: "瘦的",
  },
  {
  English: "thing",
  Chinese: "物",
  },
  {
  English: "think",
  Chinese: "想",
  },
  {
  English: "third",
  Chinese: "第三",
  },
  {
  English: "thirsty",
  Chinese: "渴的",
  },
  {
  English: "this",
  Chinese: "这，这个",
  },
  {
  English: "those",
  Chinese: "那些",
  },
  {
  English: "three",
  Chinese: "三",
  },
  {
  English: "Thursday",
  Chinese: "星期四",
  },
  {
  English: "tiger",
  Chinese: "老虎",
  },
  {
  English: "time",
  Chinese: "时间",
  },
  {
  English: "tired",
  Chinese: "疲倦的",
  },
  {
  English: "to",
  Chinese: "到，往，去",
  },
  {
  English: "today",
  Chinese: "今天",
  },
  {
  English: "toe",
  Chinese: "脚趾",
  },
  {
  English: "together",
  Chinese: "一起",
  },
  {
  English: "toilet",
  Chinese: "厕所",
  },
  {
  English: "tomato",
  Chinese: "番茄",
  },
  {
  English: "tomorrow",
  Chinese: "明天",
  },
  {
  English: "too",
  Chinese: "也",
  },
  {
  English: "tooth",
  Chinese: "牙齿",
  },
  {
  English: "toy",
  Chinese: "玩具",
  },
  {
  English: "train",
  Chinese: "火车",
  },
  {
  English: "tree",
  Chinese: "树",
  },
  {
  English: "trousers",
  Chinese: "裤子",
  },
  {
  English: "truck",
  Chinese: "卡车",
  },
  {
  English: "try",
  Chinese: "试",
  },
  {
  English: "Tuesday",
  Chinese: "星期二",
  },
  {
  English: "turn",
  Chinese: "转",
  },
  {
  English: "TV",
  Chinese: "电视",
  },
  {
  English: "twelve",
  Chinese: "十二",
  },
  {
  English: "twenty",
  Chinese: "二十",
  },
  {
  English: "two",
  Chinese: "二个",
  },
  {
  English: "umbrella",
  Chinese: "伞",
  },
  {
  English: "uncle",
  Chinese: "伯父",
  },
  {
  English: "under",
  Chinese: "在……下面",
  },
  {
  English: "up",
  Chinese: "向上",
  },
  {
  English: "us",
  Chinese: "我们",
  },
  {
  English: "use",
  Chinese: "用",
  },
  {
  English: "vase",
  Chinese: "花瓶",
  },
  {
  English: "very",
  Chinese: "非常",
  },
  {
  English: "vest",
  Chinese: "汗衫",
  },
  {
  English: "video",
  Chinese: "录像带",
  },
  {
  English: "visit",
  Chinese: "探访",
  },
  {
  English: "volleyball",
  Chinese: "排球",
  },
  {
  English: "walk",
  Chinese: "行走",
  },
  {
  English: "wall",
  Chinese: "墙",
  },
  {
  English: "want",
  Chinese: "想要",
  },
  {
  English: "war",
  Chinese: "战争",
  },
  {
  English: "ward",
  Chinese: "病房",
  },
  {
  English: "warm",
  Chinese: "温暖的",
  },
  {
  English: "wash",
  Chinese: "洗",
  },
  {
  English: "washer",
  Chinese: "洗衣机",
  },
  {
  English: "washing",
  Chinese: "洗",
  },
  {
  English: "watch",
  Chinese: "手表",
  },
  {
  English: "water",
  Chinese: "水",
  },
  {
  English: "we",
  Chinese: "我们",
  },
  {
  English: "weak",
  Chinese: "虚弱的",
  },
  {
  English: "weather",
  Chinese: "天气",
  },
  {
  English: "Wednesday星期三",
  },
  {
  English: "week",
  Chinese: "星期",
  },
  {
  English: "welcome",
  Chinese: "欢迎",
  },
  {
  English: "well",
  Chinese: "健康的",
  },
  {
  English: "west",
  Chinese: "西方",
  },
  {
  English: "what",
  Chinese: "什么",
  },
  {
  English: "when",
  Chinese: "什么时候",
  },
  {
  English: "where",
  Chinese: "哪里",
  },
  {
  English: "which",
  Chinese: "哪一个",
  },
  {
  English: "white",
  Chinese: "白色的",
  },
  {
  English: "who",
  Chinese: "谁",
  },
  {
  English: "why",
  Chinese: "为什么",
  },
  {
  English: "will",
  Chinese: "将，会",
  },
  {
  English: "wind",
  Chinese: "风",
  },
  {
  English: "window",
  Chinese: "窗",
  },
  {
  English: "windy",
  Chinese: "刮风的",
  },
  {
  English: "winter",
  Chinese: "冬天",
  },
  {
  English: "with",
  Chinese: "有，带有",
  },
  {
  English: "wolf",
  Chinese: "狼",
  },
  {
  English: "wonderful",
  Chinese: "精彩的，很好的",
  },
  {
  English: "work",
  Chinese: "工作",
  },
  {
  English: "worker",
  Chinese: "工人",
  },
  {
  English: "worry",
  Chinese: "担心",
  },
  {
  English: "would",
  Chinese: "将，会",
  },
  {
  English: "write",
  Chinese: "写，写作",
  },
  {
  English: "wrong",
  Chinese: "错误的",
  },
  {
  English: "year",
  Chinese: "年",
  },
  {
  English: "yellow",
  Chinese: "黄色的",
  },
  {
  English: "yes",
  Chinese: "是，是的",
  },
  {
  English: "yesterday",
  Chinese: "昨天",
  },
  {
  English: "you",
  Chinese: "你，你们",
  },
  {
  English: "young",
  Chinese: "年轻的",
  },
  {
  English: "your",
  Chinese: "你的，你们的",
  },
  {
  English: "yours",
  Chinese: "你的，你们的",
  },
  {
  English: "zoo",
  Chinese: "动物园"
  }
]
}
