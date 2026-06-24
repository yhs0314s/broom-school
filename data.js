// ═══════════════════════════════════════════
// data.js — 부릉부릉 학교 커리큘럼 데이터
// ═══════════════════════════════════════════

const CURRICULUM = {

  korean: {
    subject: '국어',
    icon: '🚌',
    color: '#FFB800',
    zones: [

      // ─────────────────────────────
      // Zone 1. 자음 정류장 (28장)
      // ─────────────────────────────
      {
        id: 'ko-z1',
        name: '자음 정류장',
        desc: 'ㄱ~ㅎ 자음 14개',
        vehicle: '고속버스',
        items: [
          { char:'ㄱ', name:'기역',  sound:'그', emoji:'🚌', audio:'01_기역', audioSound:'15_그' },
          { char:'ㄴ', name:'니은',  sound:'느', emoji:'🚗', audio:'02_니은', audioSound:'16_느' },
          { char:'ㄷ', name:'디귿',  sound:'드', emoji:'🚛', audio:'03_디귿', audioSound:'17_드' },
          { char:'ㄹ', name:'리을',  sound:'르', emoji:'🚚', audio:'04_리을', audioSound:'18_르' },
          { char:'ㅁ', name:'미음',  sound:'므', emoji:'🚎', audio:'05_미음', audioSound:'19_므' },
          { char:'ㅂ', name:'비읍',  sound:'브', emoji:'🚍', audio:'06_비읍', audioSound:'20_브' },
          { char:'ㅅ', name:'시옷',  sound:'스', emoji:'🚒', audio:'07_시옷', audioSound:'21_스' },
          { char:'ㅇ', name:'이응',  sound:'으', emoji:'🏍️', audio:'08_이응', audioSound:'22_으' },
          { char:'ㅈ', name:'지읒',  sound:'즈', emoji:'🏗️', audio:'09_지읒', audioSound:'23_즈' },
          { char:'ㅊ', name:'치읓',  sound:'츠', emoji:'🚜', audio:'10_치읓', audioSound:'24_츠' },
          { char:'ㅋ', name:'키읔',  sound:'크', emoji:'🚕', audio:'11_키읔', audioSound:'25_크' },
          { char:'ㅌ', name:'티읕',  sound:'트', emoji:'🚖', audio:'12_티읕', audioSound:'26_트' },
          { char:'ㅍ', name:'피읖',  sound:'프', emoji:'🚧', audio:'13_피읖', audioSound:'27_프' },
          { char:'ㅎ', name:'히읗',  sound:'흐', emoji:'🚁', audio:'14_히읗', audioSound:'28_흐' },
        ]
      },

      // ─────────────────────────────
      // Zone 2. 모음 정류장 (20장)
      // ─────────────────────────────
      {
        id: 'ko-z2',
        name: '모음 정류장',
        desc: 'ㅏ~ㅣ 모음 10개',
        vehicle: '마을버스',
        items: [
          { char:'ㅏ', name:'아', sound:'아', emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'ㅑ', name:'야', sound:'야', emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'ㅓ', name:'어', sound:'어', emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'ㅕ', name:'여', sound:'여', emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'ㅗ', name:'오', sound:'오', emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'ㅛ', name:'요', sound:'요', emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'ㅜ', name:'우', sound:'우', emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'ㅠ', name:'유', sound:'유', emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'ㅡ', name:'으', sound:'으', emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'ㅣ', name:'이', sound:'이', emoji:'🚌', audio:'tts', audioSound:'tts' },
        ]
      },

      // ─────────────────────────────
      // Zone 3. 글자 조합 (24장)
      // ─────────────────────────────
      {
        id: 'ko-z3',
        name: '글자 조합 놀이',
        desc: '자음+모음 합치기',
        vehicle: '기차',
        items: [
          { char:'가', name:'가', sound:'가', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'나', name:'나', sound:'나', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'다', name:'다', sound:'다', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'라', name:'라', sound:'라', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'마', name:'마', sound:'마', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'바', name:'바', sound:'바', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'사', name:'사', sound:'사', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'아', name:'아', sound:'아', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'자', name:'자', sound:'자', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'차', name:'차', sound:'차', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'카', name:'카', sound:'카', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'타', name:'타', sound:'타', emoji:'🚂', audio:'tts', audioSound:'tts' },
        ]
      },

      // ─────────────────────────────
      // Zone 4. 단어 카드 (50장)
      // ─────────────────────────────
      {
        id: 'ko-z4',
        name: '단어 카드',
        desc: '그림 단어 50개',
        vehicle: '택시',
        items: [
          { char:'버스', name:'버스',   sound:'버스', emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'차',   name:'차',     sound:'차',   emoji:'🚗', audio:'tts', audioSound:'tts' },
          { char:'기차', name:'기차',   sound:'기차', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'배',   name:'배',     sound:'배',   emoji:'⛵', audio:'tts', audioSound:'tts' },
          { char:'비행기',name:'비행기',sound:'비행기',emoji:'✈️', audio:'tts', audioSound:'tts' },
          { char:'나무', name:'나무',   sound:'나무', emoji:'🌳', audio:'tts', audioSound:'tts' },
          { char:'꽃',   name:'꽃',     sound:'꽃',   emoji:'🌸', audio:'tts', audioSound:'tts' },
          { char:'해',   name:'해',     sound:'해',   emoji:'☀️', audio:'tts', audioSound:'tts' },
          { char:'달',   name:'달',     sound:'달',   emoji:'🌙', audio:'tts', audioSound:'tts' },
          { char:'별',   name:'별',     sound:'별',   emoji:'⭐', audio:'tts', audioSound:'tts' },
          { char:'물',   name:'물',     sound:'물',   emoji:'💧', audio:'tts', audioSound:'tts' },
          { char:'불',   name:'불',     sound:'불',   emoji:'🔥', audio:'tts', audioSound:'tts' },
          { char:'집',   name:'집',     sound:'집',   emoji:'🏠', audio:'tts', audioSound:'tts' },
          { char:'산',   name:'산',     sound:'산',   emoji:'⛰️', audio:'tts', audioSound:'tts' },
          { char:'강',   name:'강',     sound:'강',   emoji:'🌊', audio:'tts', audioSound:'tts' },
          { char:'개',   name:'개',     sound:'개',   emoji:'🐶', audio:'tts', audioSound:'tts' },
          { char:'고양이',name:'고양이',sound:'고양이',emoji:'🐱', audio:'tts', audioSound:'tts' },
          { char:'곰',   name:'곰',     sound:'곰',   emoji:'🐻', audio:'tts', audioSound:'tts' },
          { char:'토끼', name:'토끼',   sound:'토끼', emoji:'🐰', audio:'tts', audioSound:'tts' },
          { char:'사자', name:'사자',   sound:'사자', emoji:'🦁', audio:'tts', audioSound:'tts' },
          { char:'사과', name:'사과',   sound:'사과', emoji:'🍎', audio:'tts', audioSound:'tts' },
          { char:'바나나',name:'바나나',sound:'바나나',emoji:'🍌', audio:'tts', audioSound:'tts' },
          { char:'포도', name:'포도',   sound:'포도', emoji:'🍇', audio:'tts', audioSound:'tts' },
          { char:'딸기', name:'딸기',   sound:'딸기', emoji:'🍓', audio:'tts', audioSound:'tts' },
          { char:'수박', name:'수박',   sound:'수박', emoji:'🍉', audio:'tts', audioSound:'tts' },
        ]
      },

      // ─────────────────────────────
      // Zone 5. 짧은 문장 (20장)
      // ─────────────────────────────
      {
        id: 'ko-z5',
        name: '첫 문장',
        desc: '짧은 문장 읽기',
        vehicle: '소방차',
        items: [
          { char:'버스가 가요.', name:'버스가 가요.', sound:'버스가 가요.', emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'차가 빨라요.', name:'차가 빨라요.', sound:'차가 빨라요.', emoji:'🚗', audio:'tts', audioSound:'tts' },
          { char:'기차가 와요.', name:'기차가 와요.', sound:'기차가 와요.', emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'곰이 자요.',   name:'곰이 자요.',   sound:'곰이 자요.',   emoji:'🐻', audio:'tts', audioSound:'tts' },
          { char:'꽃이 예뻐요.',name:'꽃이 예뻐요.',sound:'꽃이 예뻐요.',emoji:'🌸', audio:'tts', audioSound:'tts' },
          { char:'해가 떠요.',   name:'해가 떠요.',   sound:'해가 떠요.',   emoji:'☀️', audio:'tts', audioSound:'tts' },
          { char:'비가 와요.',   name:'비가 와요.',   sound:'비가 와요.',   emoji:'🌧️', audio:'tts', audioSound:'tts' },
          { char:'개가 짖어요.',name:'개가 짖어요.',sound:'개가 짖어요.',emoji:'🐶', audio:'tts', audioSound:'tts' },
          { char:'사과가 맛있어요.',name:'사과가 맛있어요.',sound:'사과가 맛있어요.',emoji:'🍎', audio:'tts', audioSound:'tts' },
          { char:'집에 가요.',   name:'집에 가요.',   sound:'집에 가요.',   emoji:'🏠', audio:'tts', audioSound:'tts' },
        ]
      },
    ]
  },

  // ════════════════════════════════
  // 수학
  // ════════════════════════════════
  math: {
    subject: '수학',
    icon: '🚒',
    color: '#FF5252',
    zones: [
      {
        id: 'ma-z1',
        name: '숫자 1~5 차고',
        desc: '숫자 1부터 5까지',
        vehicle: '소방차',
        items: [
          { char:'1', name:'일', sound:'일', emoji:'🚒', audio:'tts', audioSound:'tts' },
          { char:'2', name:'이', sound:'이', emoji:'🚒', audio:'tts', audioSound:'tts' },
          { char:'3', name:'삼', sound:'삼', emoji:'🚒', audio:'tts', audioSound:'tts' },
          { char:'4', name:'사', sound:'사', emoji:'🚒', audio:'tts', audioSound:'tts' },
          { char:'5', name:'오', sound:'오', emoji:'🚒', audio:'tts', audioSound:'tts' },
        ]
      },
      {
        id: 'ma-z2',
        name: '숫자 6~10 차고',
        desc: '숫자 6부터 10까지',
        vehicle: '경찰차',
        items: [
          { char:'6',  name:'육',  sound:'육',  emoji:'🚓', audio:'tts', audioSound:'tts' },
          { char:'7',  name:'칠',  sound:'칠',  emoji:'🚓', audio:'tts', audioSound:'tts' },
          { char:'8',  name:'팔',  sound:'팔',  emoji:'🚓', audio:'tts', audioSound:'tts' },
          { char:'9',  name:'구',  sound:'구',  emoji:'🚓', audio:'tts', audioSound:'tts' },
          { char:'10', name:'십',  sound:'십',  emoji:'🚓', audio:'tts', audioSound:'tts' },
        ]
      },
      {
        id: 'ma-z3',
        name: '크다 작다 도로',
        desc: '크기 비교하기',
        vehicle: '덤프트럭',
        items: [
          { char:'크다',  name:'크다',  sound:'크다',  emoji:'🚛', audio:'tts', audioSound:'tts' },
          { char:'작다',  name:'작다',  sound:'작다',  emoji:'🚗', audio:'tts', audioSound:'tts' },
          { char:'많다',  name:'많다',  sound:'많다',  emoji:'🚛', audio:'tts', audioSound:'tts' },
          { char:'적다',  name:'적다',  sound:'적다',  emoji:'🚗', audio:'tts', audioSound:'tts' },
          { char:'길다',  name:'길다',  sound:'길다',  emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'짧다',  name:'짧다',  sound:'짧다',  emoji:'🚕', audio:'tts', audioSound:'tts' },
        ]
      },
      {
        id: 'ma-z4',
        name: '도형 교차로',
        desc: '동그라미·세모·네모',
        vehicle: '포클레인',
        items: [
          { char:'○', name:'동그라미', sound:'동그라미', emoji:'⭕', audio:'tts', audioSound:'tts' },
          { char:'△', name:'세모',     sound:'세모',     emoji:'🔺', audio:'tts', audioSound:'tts' },
          { char:'□', name:'네모',     sound:'네모',     emoji:'🟦', audio:'tts', audioSound:'tts' },
          { char:'★', name:'별모양',   sound:'별모양',   emoji:'⭐', audio:'tts', audioSound:'tts' },
          { char:'♥', name:'하트',     sound:'하트',     emoji:'❤️', audio:'tts', audioSound:'tts' },
        ]
      },
      {
        id: 'ma-z5',
        name: '더하기 출동',
        desc: '1~5 더하기',
        vehicle: '소방차',
        items: [
          { char:'1+1=2', name:'일 더하기 일은 이', sound:'일 더하기 일은 이', emoji:'🚒', audio:'tts', audioSound:'tts' },
          { char:'1+2=3', name:'일 더하기 이는 삼', sound:'일 더하기 이는 삼', emoji:'🚒', audio:'tts', audioSound:'tts' },
          { char:'2+2=4', name:'이 더하기 이는 사', sound:'이 더하기 이는 사', emoji:'🚒', audio:'tts', audioSound:'tts' },
          { char:'2+3=5', name:'이 더하기 삼은 오', sound:'이 더하기 삼은 오', emoji:'🚒', audio:'tts', audioSound:'tts' },
          { char:'3+3=6', name:'삼 더하기 삼은 육', sound:'삼 더하기 삼은 육', emoji:'🚒', audio:'tts', audioSound:'tts' },
          { char:'4+1=5', name:'사 더하기 일은 오', sound:'사 더하기 일은 오', emoji:'🚒', audio:'tts', audioSound:'tts' },
        ]
      },
    ]
  },

  // ════════════════════════════════
  // 영어
  // ════════════════════════════════
  english: {
    subject: '영어',
    icon: '🚓',
    color: '#4285F4',
    zones: [
      {
        id: 'en-z1',
        name: '알파벳 A~M',
        desc: 'A부터 M까지',
        vehicle: '경찰차',
        items: [
          { char:'A', name:'에이', sound:'에이', emoji:'🚑', audio:'tts', audioSound:'tts' },
          { char:'B', name:'비',   sound:'비',   emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'C', name:'씨',   sound:'씨',   emoji:'🚗', audio:'tts', audioSound:'tts' },
          { char:'D', name:'디',   sound:'디',   emoji:'🚛', audio:'tts', audioSound:'tts' },
          { char:'E', name:'이',   sound:'이',   emoji:'⚡', audio:'tts', audioSound:'tts' },
          { char:'F', name:'에프', sound:'에프', emoji:'🚒', audio:'tts', audioSound:'tts' },
          { char:'G', name:'지',   sound:'지',   emoji:'🏎️', audio:'tts', audioSound:'tts' },
          { char:'H', name:'에이치',sound:'에이치',emoji:'🚁', audio:'tts', audioSound:'tts' },
          { char:'I', name:'아이', sound:'아이', emoji:'🛻', audio:'tts', audioSound:'tts' },
          { char:'J', name:'제이', sound:'제이', emoji:'🚙', audio:'tts', audioSound:'tts' },
          { char:'K', name:'케이', sound:'케이', emoji:'🛺', audio:'tts', audioSound:'tts' },
          { char:'L', name:'엘',   sound:'엘',   emoji:'🚐', audio:'tts', audioSound:'tts' },
          { char:'M', name:'엠',   sound:'엠',   emoji:'🛵', audio:'tts', audioSound:'tts' },
        ]
      },
      {
        id: 'en-z2',
        name: '알파벳 N~Z',
        desc: 'N부터 Z까지',
        vehicle: '경찰차',
        items: [
          { char:'N', name:'엔',   sound:'엔',   emoji:'🚓', audio:'tts', audioSound:'tts' },
          { char:'O', name:'오',   sound:'오',   emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'P', name:'피',   sound:'피',   emoji:'🚓', audio:'tts', audioSound:'tts' },
          { char:'Q', name:'큐',   sound:'큐',   emoji:'🚗', audio:'tts', audioSound:'tts' },
          { char:'R', name:'알',   sound:'알',   emoji:'🚕', audio:'tts', audioSound:'tts' },
          { char:'S', name:'에스', sound:'에스', emoji:'🚒', audio:'tts', audioSound:'tts' },
          { char:'T', name:'티',   sound:'티',   emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'U', name:'유',   sound:'유',   emoji:'🚛', audio:'tts', audioSound:'tts' },
          { char:'V', name:'브이', sound:'브이', emoji:'🚐', audio:'tts', audioSound:'tts' },
          { char:'W', name:'더블유',sound:'더블유',emoji:'🚚', audio:'tts', audioSound:'tts' },
          { char:'X', name:'엑스', sound:'엑스', emoji:'🚧', audio:'tts', audioSound:'tts' },
          { char:'Y', name:'와이', sound:'와이', emoji:'🏎️', audio:'tts', audioSound:'tts' },
          { char:'Z', name:'지',   sound:'지',   emoji:'🚁', audio:'tts', audioSound:'tts' },
        ]
      },
      {
        id: 'en-z3',
        name: '기초 단어 순찰',
        desc: '영어 단어 20개',
        vehicle: '경찰차',
        items: [
          { char:'bus',    name:'버스',   sound:'bus',    emoji:'🚌', audio:'tts', audioSound:'tts' },
          { char:'car',    name:'자동차', sound:'car',    emoji:'🚗', audio:'tts', audioSound:'tts' },
          { char:'train',  name:'기차',   sound:'train',  emoji:'🚂', audio:'tts', audioSound:'tts' },
          { char:'ship',   name:'배',     sound:'ship',   emoji:'⛵', audio:'tts', audioSound:'tts' },
          { char:'plane',  name:'비행기', sound:'plane',  emoji:'✈️', audio:'tts', audioSound:'tts' },
          { char:'dog',    name:'개',     sound:'dog',    emoji:'🐶', audio:'tts', audioSound:'tts' },
          { char:'cat',    name:'고양이', sound:'cat',    emoji:'🐱', audio:'tts', audioSound:'tts' },
          { char:'bear',   name:'곰',     sound:'bear',   emoji:'🐻', audio:'tts', audioSound:'tts' },
          { char:'apple',  name:'사과',   sound:'apple',  emoji:'🍎', audio:'tts', audioSound:'tts' },
          { char:'banana', name:'바나나', sound:'banana', emoji:'🍌', audio:'tts', audioSound:'tts' },
          { char:'sun',    name:'해',     sound:'sun',    emoji:'☀️', audio:'tts', audioSound:'tts' },
          { char:'moon',   name:'달',     sound:'moon',   emoji:'🌙', audio:'tts', audioSound:'tts' },
          { char:'star',   name:'별',     sound:'star',   emoji:'⭐', audio:'tts', audioSound:'tts' },
          { char:'house',  name:'집',     sound:'house',  emoji:'🏠', audio:'tts', audioSound:'tts' },
          { char:'water',  name:'물',     sound:'water',  emoji:'💧', audio:'tts', audioSound:'tts' },
        ]
      },
      {
        id: 'en-z4',
        name: '인사 표현',
        desc: '영어 인사 10개',
        vehicle: '경찰차',
        items: [
          { char:'Hello!',     name:'헬로',     sound:'Hello',     emoji:'👋', audio:'tts', audioSound:'tts' },
          { char:'Bye!',       name:'바이',     sound:'Bye',       emoji:'✋', audio:'tts', audioSound:'tts' },
          { char:'Yes!',       name:'예스',     sound:'Yes',       emoji:'✅', audio:'tts', audioSound:'tts' },
          { char:'No!',        name:'노',       sound:'No',        emoji:'❌', audio:'tts', audioSound:'tts' },
          { char:'Thank you!', name:'땡큐',     sound:'Thank you', emoji:'🙏', audio:'tts', audioSound:'tts' },
          { char:'Sorry!',     name:'쏘리',     sound:'Sorry',     emoji:'😅', audio:'tts', audioSound:'tts' },
          { char:'Good!',      name:'굿',       sound:'Good',      emoji:'👍', audio:'tts', audioSound:'tts' },
          { char:'Help!',      name:'헬프',     sound:'Help',      emoji:'🆘', audio:'tts', audioSound:'tts' },
          { char:'Go!',        name:'고',       sound:'Go',        emoji:'🚦', audio:'tts', audioSound:'tts' },
          { char:'Stop!',      name:'스탑',     sound:'Stop',      emoji:'🛑', audio:'tts', audioSound:'tts' },
        ]
      },
    ]
  }
};

// ═══════════════════════════════════════════
// 페이지 빌더 — 아이템 → 학습 페이지 자동 생성
// ═══════════════════════════════════════════
function buildPages(zone, subjectKey) {
  const pages = [];
  const items = zone.items;

  items.forEach((item, i) => {
    // 페이지 1: 듣기 (listen)
    pages.push({
      id: `${zone.id}-${i}-listen`,
      type: 'listen',
      char: item.char,
      label: item.name,
      hint: `"${item.name}" 들어봐요! 🔊`,
      emoji: item.emoji,
      audio: item.audio === 'tts' ? null : `audio/${item.audio}.mp3`,
      ttsText: item.sound,
    });

    // 페이지 2: 고르기 (choose) — 3개 중 정답
    const others = items.filter((_, j) => j !== i);
    const picks = others.sort(() => Math.random() - 0.5).slice(0, 2);
    const opts = [item.char, picks[0]?.char, picks[1]?.char]
      .filter(Boolean)
      .sort(() => Math.random() - 0.5);

    pages.push({
      id: `${zone.id}-${i}-choose`,
      type: 'choose',
      char: item.char,
      label: item.name,
      hint: `"${item.name}" 찾아봐요! 👀`,
      emoji: item.emoji,
      audio: item.audio === 'tts' ? null : `audio/${item.audio}.mp3`,
      ttsText: item.sound,
      options: opts,
      answer: item.char,
    });
  });

  return pages;
}

// ZONES 형태로 변환 (엔진 호환)
const ZONES = {};
Object.entries(CURRICULUM).forEach(([subjectKey, subject]) => {
  ZONES[subjectKey] = subject.zones.map(zone => ({
    ...zone,
    pages: buildPages(zone, subjectKey)
  }));
});
