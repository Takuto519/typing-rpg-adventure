const arena = document.querySelector("#arena");
const arenaWrap = document.querySelector(".arena-wrap");
const laserLayer = document.querySelector("#laserLayer");
const input = document.querySelector("#typeInput");
const stageLabelEl = document.querySelector("#stageLabel");
const enemyCountEl = document.querySelector("#enemyCount");
const pointsEl = document.querySelector("#points");
const gearLabelEl = document.querySelector("#gearLabel");
const livesEl = document.querySelector("#lives");
const targetWordEl = document.querySelector("#targetWord");
const questTitle = document.querySelector("#questTitle");
const questText = document.querySelector("#questText");
const feed = document.querySelector("#feed");
const statusBar = document.querySelector(".status-bar");
const startBtn = document.querySelector("#startBtn");
const nextStageBtn = document.querySelector("#nextStageBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const soundBtn = document.querySelector("#soundBtn");
const volumeSlider = document.querySelector("#volumeSlider");
const restartBtn = document.querySelector("#restartBtn");
const rulesBtn = document.querySelector("#rulesBtn");
const startModal = document.querySelector("#startModal");
const modalStartBtn = document.querySelector("#modalStartBtn");
const modalGameStartBtn = document.querySelector("#modalGameStartBtn");
const modalCloseRulesBtn = document.querySelector("#modalCloseRulesBtn");
const rulesPanel = document.querySelector("#rulesPanel");
const heroAvatar = document.querySelector("#heroAvatar");
const stageMap = document.querySelector("#stageMap");
const worldTabs = document.querySelector("#worldTabs");
const gearPanel = document.querySelector("#gearPanel");
const topShopBtn = document.querySelector("#topShopBtn");
const shopPanel = document.querySelector("#shopPanel");
const shopToggleBtn = document.querySelector("#shopToggleBtn");
const shopGrid = document.querySelector("#shopGrid");
const commandPanel = document.querySelector(".command-panel");
const gameOverPanel = document.querySelector("#gameOverPanel");
const retryBtn = document.querySelector("#retryBtn");
const stageClearPanel = document.querySelector("#stageClearPanel");
const clearRewardText = document.querySelector("#clearRewardText");
const clearNextBtn = document.querySelector("#clearNextBtn");

const wordPools = [
  ["slime", "river", "bridge", "grass", "sword", "potion", "shield", "quest", "hero", "treasure", "adventure", "forest", "castle", "magic", "brave", "spark", "stone", "crown", "meadow", "stream", "flower", "silver", "journey", "campfire", "backpack", "morning", "pathfinder", "woodland", "treasuremap", "braveheart"],
  ["forest", "magic", "golem", "crystal", "attack", "rescue", "castle", "knight", "spirit", "lantern", "wizard", "silver", "arrow", "secret", "mirror", "gate", "torch", "wild", "monster", "ancient", "moonlight", "spellbook", "guardian", "enchanted", "darkforest", "crystalgate", "royalknight", "mysticlantern"],
  ["desert", "mirage", "pirate", "cannon", "anchor", "oasis", "sandstorm", "falcon", "ruins", "compass", "sailor", "island", "storm", "gold", "map", "skull", "blade", "tide", "harbor", "captain", "treasure", "shipwreck", "navigation", "goldenanchor", "piratecaptain", "desertmirage", "stormyvoyage", "forgottenruins"],
  ["volcano", "dragon", "ember", "hammer", "barrier", "phoenix", "obsidian", "thunder", "guardian", "inferno", "flame", "magma", "ash", "armor", "meteor", "claw", "roar", "forge", "eruption", "firestorm", "dragonfire", "moltenblade", "phoenixwing", "volcanicforge", "thunderstrike", "burningbarrier", "obsidianguardian", "infernodragon"],
  ["legend", "kingdom", "starlight", "nightmare", "ultimate", "dimension", "overlord", "victory", "destiny", "champion", "galaxy", "shadow", "oracle", "final", "future", "miracle", "glory", "eternal", "constellation", "darkdimension", "ultimatechampion", "legendarykingdom", "nightmareoverlord", "starlightdestiny", "miraclevictory", "eternalguardian", "dimensionbreaker", "galacticemperor"]
];

const japaneseWordPools = [
  ["ゆうしゃ", "くさむら", "かわ", "はし", "たからばこ", "まほう", "けん", "ぼうけん", "たて", "ひかり", "あさひ", "みどり", "ちいさなはし", "ひみつのちず", "ゆうきのしるし"],
  ["もり", "こじょう", "きし", "せいれい", "まどうし", "とびら", "みち", "たいまつ", "すいしょう", "かげ", "つきあかり", "まほうのほん", "ふるいしろ", "しずかなもり", "まどうのとびら"],
  ["さばく", "かいぞく", "たいほう", "いかり", "オアシス", "いせき", "すなあらし", "ほうせき", "ちず", "ふね", "きんのいかり", "なぞのいせき", "かいぞくせん", "すなのめいきゅう", "ぼうけんのらしんばん"],
  ["かざん", "ドラゴン", "ほのお", "かみなり", "まもり", "ようがん", "ふしちょう", "けっかい", "つめ", "よろい", "りゅうのほのお", "ようがんのつるぎ", "ふしちょうのはね", "かみなりのけっかい", "しゃくねつのまもり"],
  ["でんせつ", "おうこく", "ほしぞら", "まおう", "しょうり", "うんめい", "さいご", "きぼう", "ゆめ", "きせき", "でんせつのおうこく", "ほしぞらのうんめい", "まおうのしれん", "きせきのしょうり", "さいごのきぼう"]
];

wordPools[0].push("sunrise", "raindrop", "wildflower", "greenfield", "riverstone", "littlebridge", "goldencrown", "morningquest", "silverpotion", "hiddenmeadow");
wordPools[1].push("mooncastle", "shadowgate", "ancientmirror", "spiritarrow", "forestwizard", "secretpassage", "crystalmonster", "enchantedtorch", "knightlyrescue", "lanternkeeper");
wordPools[2].push("sandyharbor", "miragecastle", "compassneedle", "oasisguardian", "falconflight", "treasureisland", "cannonmaster", "anchorshadow", "forgottencompass", "desertnavigator");
wordPools[3].push("emberstorm", "lavashield", "dragonhammer", "meteorarmor", "phoenixflame", "obsidianclaw", "infernoguardian", "volcanothunder", "burningphoenix", "magmafortress");
wordPools[4].push("celestialoracle", "destinykeeper", "shadowchampion", "futurekingdom", "overlordnightmare", "starlightmiracle", "eternalvictory", "ultimateguardian", "dimensionallegend", "galacticdestiny");

japaneseWordPools[0].push("あおいかわ", "ひかるけん", "ゆうしゃのたて", "みどりのへいげん", "ちいさなたからばこ");
japaneseWordPools[1].push("まほうのかがみ", "こじょうのきし", "もりのせいれい", "ひみつのとびら", "すいしょうのかげ");
japaneseWordPools[2].push("さばくのほうせき", "かいぞくのちず", "いせきのらしんばん", "すなあらしのふね", "オアシスのまもり");
japaneseWordPools[3].push("ドラゴンのつめ", "ほのおのよろい", "ようがんのたて", "かみなりのつるぎ", "ふしちょうのけっかい");
japaneseWordPools[4].push("まおうのうんめい", "ほしぞらのきせき", "でんせつのゆうしゃ", "さいごのしれん", "きぼうのしょうり");

const worldNames = ["草原と川の国", "森と古城の国", "砂漠と海賊の国", "火山と竜の国", "天空と魔王の国"];
const stageNames = ["はじまりの道", "小さな橋", "森の入口", "古い洞窟", "中ボスの砦", "水辺の回廊", "宝箱の丘", "城門前", "王家の橋", "ボスの間"];
const rewardItems = ["薬草", "旅人の地図", "小さな鍵", "光る石", "中ボスの勲章", "回復薬", "宝箱メダル", "騎士の証", "王家のコイン", "ボスの宝玉"];
const bossWords = ["river guardian", "ancient castle beast", "pirate cannon king", "volcano dragon emperor", "dark typing overlord"];
const midBossWords = ["big slime knight", "forest ogre mage", "desert scorpion lord", "lava armor brute", "sky phantom knight"];

const rewardCycle = ["bronzeBlade", "leatherArmor", "shortGun", "ironSword", "bossKey", "silverGun", "mageRobe", "battleAxe", "dragonMail", "worldGem"];

const stages = Array.from({ length: 50 }, (_, index) => {
  const world = Math.floor(index / 10) + 1;
  const step = index % 10 + 1;
  const isMidBoss = step === 5;
  const isBoss = step === 10;
  const difficulty = index + 1;
  const normalEnemyTotal = 7 + step + world;
  const midBossEnemyTotal = 12 + world * 2;
  const bossEnemyTotal = 16 + world * 3;
  const spawnInterval = Math.max(0.12, (1.2 - (world - 1) * 0.1 - (step - 1) * 0.045 - (isMidBoss ? 0.08 : 0) - (isBoss ? 0.12 : 0)) / 4);
  const speedRate = 0.13 + (world - 1) * 0.028 + (step - 1) * 0.01 + (isMidBoss ? 0.024 : 0) + (isBoss ? 0.048 : 0);
  return {
    id: `${world}-${step}`,
    world,
    step,
    name: stageNames[step - 1],
    worldName: worldNames[world - 1],
    text: isBoss
      ? `${worldNames[world - 1]}の支配者が待つ最終戦。長いワードと高いHPに注意。`
      : isMidBoss
        ? `${worldNames[world - 1]}の中間地点。中ボスを倒すと大きな報酬が手に入ります。`
        : `${worldNames[world - 1]}を進む通常ステージ。敵を全て倒して次へ進みましょう。`,
    enemyTotal: isBoss ? bossEnemyTotal : isMidBoss ? midBossEnemyTotal : normalEnemyTotal,
    spawn: spawnInterval,
    speed: speedRate,
    pointRate: 1 + difficulty * 0.09,
    reward: rewardCycle[(step - 1) % rewardCycle.length],
    rewardItem: `${worldNames[world - 1]}の${rewardItems[step - 1]}`,
    rewardPoints: 90 + difficulty * 28 + (isMidBoss ? 220 : 0) + (isBoss ? 520 : 0),
    boss: isBoss ? bossWords[world - 1] : isMidBoss ? midBossWords[world - 1] : "",
    words: wordPools[world - 1],
    jpWords: japaneseWordPools[world - 1]
  };
});

const gear = {
  none: { label: "素手", type: "初期", damage: 1, bonus: 1, beam: "none", description: "最初の装備" },
  bronzeBlade: { label: "銅の剣", type: "武器", damage: 2, bonus: 1.08, beam: "sword", description: "序盤向けの剣" },
  leatherArmor: { label: "革のよろい", type: "防具", damage: 1, bonus: 1.05, lives: 1, beam: "none", description: "ライフ +1" },
  shortGun: { label: "古式ピストル", type: "銃", damage: 3, bonus: 1.16, beam: "gun", description: "一撃が重い銃" },
  ironSword: { label: "鉄の剣", type: "武器", damage: 3, bonus: 1.22, beam: "sword", description: "安定した攻撃力" },
  bossKey: { label: "砦の紋章", type: "装備品", damage: 2, bossDamage: 5, bonus: 1.28, beam: "light", description: "ボスに強い" },
  silverGun: { label: "銀の銃", type: "銃", damage: 4, bonus: 1.36, beam: "gun", description: "高速射撃" },
  mageRobe: { label: "魔導ローブ", type: "防具", damage: 2, bonus: 1.38, lives: 2, beam: "magic", description: "ライフ +2" },
  battleAxe: { label: "戦斧", type: "武器", damage: 5, bonus: 1.5, beam: "axe", description: "強敵向け" },
  dragonMail: { label: "竜の鎧", type: "防具", damage: 3, bonus: 1.58, lives: 3, beam: "fire", description: "ライフ +3" },
  worldGem: { label: "世界樹の宝玉", type: "秘宝", damage: 4, bossDamage: 8, bonus: 1.8, beam: "light", description: "ボス特効" }
};

const shopItems = {
  potionSmall: { label: "小さな回復薬", type: "回復", cost: 180, consumable: true, heal: 25 },
  potionLarge: { label: "大きな回復薬", type: "回復", cost: 520, consumable: true, heal: 60 },
  elixir: { label: "エリクサー", type: "回復", cost: 1200, consumable: true, heal: 100 },
  katana: { label: "月影の刀", type: "武器", cost: 900, gearKey: "katana", data: { label: "月影の刀", type: "武器", damage: 6, bonus: 1.72, beam: "sword", description: "ショップ限定の刀" } },
  rifle: { label: "冒険者ライフル", type: "銃", cost: 1400, gearKey: "rifle", data: { label: "冒険者ライフル", type: "銃", damage: 7, bonus: 1.86, beam: "gun", description: "長いワードに強い" } },
  armor: { label: "王国プレート", type: "防具", cost: 1800, gearKey: "royalArmor", data: { label: "王国プレート", type: "防具", damage: 4, bonus: 1.7, lives: 4, beam: "light", description: "ライフ +4" } },
  blaster: { label: "星屑ブラスター", type: "課金風", cost: 2600, gearKey: "starBlaster", data: { label: "星屑ブラスター", type: "銃", damage: 9, bossDamage: 12, bonus: 2.1, beam: "magic", description: "最高級の遠距離装備" } },
  boots: { label: "旅人のブーツ", type: "靴", cost: 320, apply: () => { state.shoes = "boots"; state.powerBoost += 1; } },
  wingBoots: { label: "羽根つきブーツ", type: "靴", cost: 950, apply: () => { state.shoes = "wing"; state.powerBoost += 1; } },
  cape: { label: "赤いマント", type: "服", cost: 450, apply: () => { state.outfit = "cape"; } },
  royalCape: { label: "王者のマント", type: "服", cost: 1250, apply: () => { state.outfit = "royal"; state.color = "gold"; } },
  crown: { label: "金の王冠", type: "装飾", cost: 1600, apply: () => { state.accessory = "crown"; } },
  aura: { label: "勇者のオーラ", type: "装飾", cost: 2100, apply: () => { state.accessory = "aura"; state.powerBoost += 1; } },
  style: { label: "姫騎士スタイル", type: "服", cost: 700, apply: () => { state.hero = "princess"; state.color = "red"; } },
  tuxedo: { label: "黒騎士コート", type: "服", cost: 1150, apply: () => { state.hero = "adventurer"; state.color = "black"; state.outfit = "coat"; } },
  halo: { label: "星の髪飾り", type: "装飾", cost: 780, apply: () => { state.accessory = "star"; } },
  gloves: { label: "魔法の手袋", type: "装飾", cost: 680, apply: () => { state.powerBoost += 1; state.accessory = "gloves"; } }
};

const state = {
  currentStage: 0,
  selectedWorld: 1,
  unlockedStage: 0,
  stageRunning: false,
  paused: false,
  pausedForRules: false,
  spawnTimer: 0,
  lastTime: 0,
  spawnedInStage: 0,
  defeatedInStage: 0,
  resolvedInStage: 0,
  points: 0,
  lifePercent: 100,
  equipped: "none",
  ownedGear: new Set(["none"]),
  ownedShop: new Set(),
  inventory: new Set(),
  hero: "adventurer",
  color: "blue",
  outfit: "plain",
  shoes: "plain",
  accessory: "none",
  powerBoost: 0,
  muted: false,
  volume: 0.75,
  nextWord: "",
  recentWords: [],
  nextSpawnQueued: false,
  enemies: [],
  bossCasterEl: null,
  laneCursor: 0,
  frameId: 0
};

const audio = {
  ctx: null,
  master: null,
  timer: 0,
  step: 0,
  notes: [261.63, 329.63, 392, 523.25, 392, 329.63, 293.66, 392]
};

function renderWorldTabs() {
  worldTabs.innerHTML = worldNames.map((name, index) => {
    const world = index + 1;
    return `<button class="world-tab ${world === state.selectedWorld ? "active" : ""}" type="button" data-world="${world}">第${world}ステージ<span>${name}</span></button>`;
  }).join("");
  worldTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedWorld = Number(button.dataset.world);
      renderWorldTabs();
      renderStageMap();
    });
  });
}

function renderStageMap() {
  const start = (state.selectedWorld - 1) * 10;
  const visibleStages = stages.slice(start, start + 10);
  stageMap.innerHTML = visibleStages.map((stage, offset) => {
    const index = start + offset;
    const type = stage.step === 10 ? "boss" : stage.step === 5 ? "midboss" : "";
    const locked = index > state.unlockedStage ? "locked" : "";
    const active = index === state.currentStage ? "active" : "";
    const cleared = index < state.unlockedStage ? "cleared" : "";
    return `<button class="stage-node ${type} ${locked} ${active} ${cleared}" type="button" data-stage="${index}"><span>${stage.id}</span><small>${stage.step === 10 ? "ボス" : stage.step === 5 ? "中ボス" : stage.name}</small></button>`;
  }).join("");
  stageMap.querySelectorAll("button").forEach((node) => {
    node.addEventListener("click", () => chooseStage(Number(node.dataset.stage)));
  });
}

function renderGear() {
  gearPanel.innerHTML = Object.entries(gear).map(([key, item]) => {
    const locked = state.ownedGear.has(key) ? "" : "locked";
    const active = state.equipped === key ? "active" : "";
    return `<button class="weapon-card ${locked} ${active}" type="button" data-gear="${key}"><span>${item.type}</span><strong>${item.label}</strong><small>${item.description} / 攻撃 ${item.damage}</small></button>`;
  }).join("");
  gearPanel.querySelectorAll("button").forEach((card) => {
    card.addEventListener("click", () => equipGear(card.dataset.gear));
  });
}

function renderShop() {
  shopGrid.innerHTML = Object.entries(shopItems).map(([key, item]) => {
    const owned = !item.consumable && state.ownedShop.has(key) ? "owned" : "";
    const detail = item.heal ? `ライフ ${item.heal}% 回復` : item.data ? item.data.description : item.type;
    return `<button class="shop-card ${owned}" type="button" data-shop="${key}"><span>${owned ? "購入済み" : `${item.cost} coin`}</span><strong>${item.label}</strong><small>${detail}</small></button>`;
  }).join("");
  shopGrid.querySelectorAll("button").forEach((card) => {
    card.addEventListener("click", () => buyShopItem(card.dataset.shop));
  });
}

function startStage() {
  if (state.frameId) cancelAnimationFrame(state.frameId);
  const stage = stages[state.currentStage];
  document.body.classList.add("playing");
  gameOverPanel.hidden = true;
  stageClearPanel.hidden = true;
  clearNextBtn.hidden = false;
  preparePlayArea();
  clearEnemies();
  renderBossCaster(stage);
  state.stageRunning = true;
  state.paused = false;
  state.spawnTimer = 0;
  state.nextSpawnQueued = false;
  state.nextWord = pickNextWord(stage);
  state.recentWords = [];
  state.laneCursor = 0;
  state.lastTime = performance.now();
  state.spawnedInStage = 0;
  state.defeatedInStage = 0;
  state.resolvedInStage = 0;
  state.lifePercent = 100;
  try {
    startBgm();
  } catch (error) {
    console.warn("BGM could not start", error);
  }
  input.disabled = false;
  input.value = "";
  startBtn.textContent = "やり直す";
  nextStageBtn.disabled = true;
  pauseBtn.textContent = "II";
  startModal.classList.remove("show");
  updateHud();
  log(`${stage.id} ${stage.name} 開始。${stage.enemyTotal}体の敵を倒してください。`);
  targetWordEl.textContent = state.nextWord;
  keepPlayView(true);
  window.setTimeout(() => input.focus({ preventScroll: true }), 180);
  ensureFirstEnemy();
  state.lastTime = performance.now();
  state.frameId = requestAnimationFrame(tick);
  window.setTimeout(ensureFirstEnemy, 240);
}

function restartStage() {
  if (state.frameId) cancelAnimationFrame(state.frameId);
  stopBgm();
  startStage();
}

function tick(now) {
  if (!state.stageRunning) return;
  const delta = Math.min(0.05, (now - state.lastTime) / 1000);
  state.lastTime = now;
  if (!state.paused) {
    const stage = stages[state.currentStage];
    state.spawnTimer -= delta;
    while (state.spawnedInStage < stage.enemyTotal && state.enemies.length < getMaxActiveEnemies(stage) && state.spawnTimer <= 0) {
      spawnEnemy();
      state.spawnTimer += stage.spawn;
    }
    moveEnemies(delta);
  }
  if (state.stageRunning) state.frameId = requestAnimationFrame(tick);
}

function spawnEnemy() {
  const stage = stages[state.currentStage];
  const rect = getArenaRect();
  if (state.spawnedInStage >= stage.enemyTotal) return;
  const isBossStage = stage.step === 5 || stage.step === 10;
  const isBoss = isBossStage && state.spawnedInStage === stage.enemyTotal - 1;
  const word = state.nextWord || pickNextWord(stage);
  state.nextWord = "";
  const type = isBossStage ? (stage.step === 10 ? "boss-shot" : "midboss-shot") : state.spawnedInStage % 4 === 2 ? "tough" : state.spawnedInStage % 3 === 1 ? "fast" : "normal";
  const enemy = document.createElement("div");
  enemy.className = `enemy ${isBossStage ? "fireball" : ""} ${type}`;
  enemy.innerHTML = `<div class="enemy-word">${word}</div>`;
  arena.appendChild(enemy);
  const hp = isBoss
    ? stage.step === 10
      ? 5 + stage.world * 3 + Math.floor(stage.step / 2)
      : 3 + stage.world * 2
    : type === "tough"
      ? Math.max(1, Math.floor((stage.world + stage.step) / 4))
      : 1 + Math.floor((stage.world - 1) / 3);
  const model = {
    el: enemy,
    word,
    x: getSpawnX(rect, isBossStage, stage),
    y: getSpawnY(isBossStage, type),
    speed: getEnemySpeed(stage, type, isBossStage),
    hp,
    maxHp: hp,
    boss: isBoss || isBossStage
  };
  state.spawnedInStage += 1;
  state.enemies.push(model);
  positionEnemy(model);
  selectTarget();
  updateHud();
}

function getNextWord(stage) {
  return pickNextWord(stage);
}

function pickNextWord(stage) {
  const isBoss = stage.boss && state.spawnedInStage === stage.enemyTotal - 1;
  const isMidBoss = stage.step === 5;
  const basePool = isBoss || isMidBoss
    ? [...stage.words, ...stage.jpWords, stage.boss].filter(Boolean)
    : stage.words;
  const pool = filterWordsByDifficulty(basePool, stage);
  const freshPool = pool.filter((word) => !state.recentWords.includes(word));
  const candidates = freshPool.length ? freshPool : pool;
  const word = candidates[Math.floor(Math.random() * candidates.length)];
  state.recentWords = [word, ...state.recentWords].slice(0, 14);
  return word;
}

function filterWordsByDifficulty(pool, stage) {
  const level = (stage.world - 1) * 10 + stage.step;
  let min = 0;
  let max = 8;
  if (level >= 11) {
    min = 5;
    max = 11;
  }
  if (level >= 26) {
    min = 7;
    max = 14;
  }
  if (stage.step === 5 || stage.step === 10) {
    min += 1;
    max += 4;
  }
  const filtered = pool.filter((word) => word.length >= min && word.length <= max);
  return filtered.length >= 8 ? filtered : pool;
}

function getSpawnX(rect, isBossStage, stage) {
  if (!isBossStage) {
    return 54 + Math.random() * Math.max(80, rect.width - 108);
  }
  const lanes = stage.step === 10 ? 5 : 4;
  const minX = Math.max(82, rect.width * 0.18);
  const maxX = Math.min(rect.width - 82, rect.width * 0.82);
  const lane = state.laneCursor % lanes;
  state.laneCursor += 1;
  if (lanes === 1) return rect.width / 2;
  return minX + (maxX - minX) * (lane / (lanes - 1));
}

function getSpawnY(isBossStage, type) {
  if (isBossStage) return type === "boss-shot" ? 126 : 116;
  return 56;
}

function getEnemySpeed(stage, type, isBossStage) {
  if (isBossStage) {
    const base = stage.step === 10 ? 250 : 210;
    return base * stage.speed;
  }
  const base = type === "fast" ? 190 : type === "tough" ? 145 : 160;
  return base * stage.speed;
}

function ensureFirstEnemy() {
  if (!state.stageRunning || state.paused || state.spawnedInStage > 0) return;
  const stage = stages[state.currentStage];
  const firstWave = Math.min(getMaxActiveEnemies(stage), stage.enemyTotal);
  for (let index = 0; index < firstWave; index += 1) {
    spawnEnemy();
  }
  state.spawnTimer = stages[state.currentStage].spawn;
  selectTarget();
}

function getMaxActiveEnemies(stage) {
  if (stage.step === 10) return 6;
  if (stage.step === 5) return 4;
  return stage.world >= 4 || stage.step >= 7 ? 3 : 2;
}

function moveEnemies(delta) {
  const stage = stages[state.currentStage];
  const breachLine = getArenaRect().height - 92;
  for (const enemy of [...state.enemies]) {
    enemy.y += enemy.speed * delta;
    positionEnemy(enemy);
    if (enemy.y >= breachLine) {
      removeEnemy(enemy);
      state.resolvedInStage += 1;
      damageLife(enemy);
      arenaWrap.classList.remove("shake");
      void arenaWrap.offsetWidth;
      arenaWrap.classList.add("shake");
      log(enemy.boss ? "ボスに突破されました。" : `${enemy.word} に突破されました。`);
      updateHud();
      if (state.lifePercent <= 0) {
        failStage("敵に突破されました。");
        return;
      }
    }
  }
  if (state.resolvedInStage >= stage.enemyTotal && state.enemies.length === 0) {
    if (state.lifePercent > 0) {
      clearStage();
    } else {
      failStage("ライフがなくなりました。");
    }
    return;
  }
  selectTarget();
}

function damageLife(enemy) {
  const stage = stages[state.currentStage];
  const damage = calculateMissDamage(stage, enemy);
  state.lifePercent = Math.max(0, state.lifePercent - damage);
}

function getBaseMissLimit(stage) {
  if (stage.step === 10) return 1;
  if (stage.step === 5) return 2;
  if (stage.world >= 5) return 2;
  if (stage.world >= 3) return 3;
  return 4;
}

function getDefenseRate() {
  const item = gear[state.equipped] || gear.none;
  const armorBonus = item.lives || 0;
  const shopDefense = state.ownedShop.has("armor") ? 0.08 : 0;
  const robeDefense = state.ownedGear.has("mageRobe") ? 0.04 : 0;
  const dragonDefense = state.ownedGear.has("dragonMail") ? 0.08 : 0;
  return Math.min(0.42, armorBonus * 0.06 + shopDefense + robeDefense + dragonDefense);
}

function calculateMissDamage(stage) {
  const limit = getBaseMissLimit(stage);
  if (stage.step === 10) return 100;
  const baseDamage = Math.ceil(100 / limit);
  const reduced = Math.round(baseDamage * (1 - getDefenseRate()));
  return Math.max(8, reduced);
}

function handleSubmit() {
  if (!state.stageRunning || state.paused) return;
  const typed = input.value.trim().toLowerCase().replace(/\s+/g, " ");
  if (!typed) return;
  const exact = state.enemies.find((enemy) => enemy.word === typed);
  if (exact) {
    hitEnemy(exact);
    input.value = "";
    return;
  }
  const partial = state.enemies.find((enemy) => enemy.word.startsWith(typed));
  log(partial ? "途中までは合っています。最後まで入力してEnter。" : `"${typed}" はターゲットにありません。`);
  input.value = "";
  paintProgress();
}

function hitEnemy(enemy) {
  const item = gear[state.equipped];
  const damage = (enemy.boss && item.bossDamage ? item.bossDamage : item.damage) + state.powerBoost;
  enemy.hp -= damage;
  playSfx("attack");
  drawAttack(enemy, item);
  enemy.el.classList.remove("hit-pop");
  void enemy.el.offsetWidth;
  enemy.el.classList.add("hit-pop");
  if (enemy.hp > 0) {
    log(`${enemy.word} に命中。残りHP ${Math.max(0, enemy.hp)} / ${enemy.maxHp}`);
    return;
  }
  const earned = calculateEnemyPoints(enemy);
  playSfx("defeat");
  state.points += earned;
  state.defeatedInStage += 1;
  state.resolvedInStage += 1;
  removeEnemy(enemy);
  log(`${enemy.word} 撃破 +${earned} coin`);
  spawnNextEnemySmoothly();
  updateHud();
  selectTarget();
  checkStageClear();
}

function spawnNextEnemySmoothly() {
  const stage = stages[state.currentStage];
  if (!state.stageRunning || state.spawnedInStage >= stage.enemyTotal) return;
  state.nextWord = pickNextWord(stage);
  targetWordEl.textContent = state.nextWord;
  state.spawnTimer = Math.min(state.spawnTimer, 0.04);
  if (state.nextSpawnQueued) return;
  state.nextSpawnQueued = true;
  window.setTimeout(() => {
    state.nextSpawnQueued = false;
    if (!state.stageRunning || state.paused || state.spawnedInStage >= stage.enemyTotal) return;
    while (state.enemies.length < getMaxActiveEnemies(stage) && state.spawnedInStage < stage.enemyTotal) {
      spawnEnemy();
    }
    state.spawnTimer = Math.min(state.spawnTimer, stage.spawn);
  }, 40);
}

function calculateEnemyPoints(enemy) {
  const stage = stages[state.currentStage];
  const item = gear[state.equipped];
  const base = enemy.boss ? 260 : 70;
  const earlyBonus = Math.max(0, Math.round((320 - enemy.y) / 5));
  return Math.round((base + earlyBonus) * stage.pointRate * item.bonus);
}

function checkStageClear() {
  const stage = stages[state.currentStage];
  if (state.resolvedInStage >= stage.enemyTotal && state.enemies.length === 0 && state.lifePercent > 0) clearStage();
}

function clearStage() {
  const stage = stages[state.currentStage];
  state.stageRunning = false;
  stopBgm();
  playSfx("clear");
  state.points += stage.rewardPoints;
  state.inventory.add(stage.rewardItem);
  state.ownedGear.add(stage.reward);
  state.unlockedStage = Math.max(state.unlockedStage, Math.min(stages.length - 1, state.currentStage + 1));
  input.disabled = true;
  nextStageBtn.disabled = state.currentStage >= stages.length - 1;
  startBtn.textContent = "もう一度";
  state.selectedWorld = stage.world;
  updateAll();
  const rewardName = gear[stage.reward].label;
  const nextText = state.currentStage >= stages.length - 1 ? "全50ステージをクリアしました。" : "次のステージが開放されました。";
  clearRewardText.textContent = `${stage.id} クリア！ ${stage.rewardItem}、${rewardName}、${stage.rewardPoints} coin を獲得`;
  clearNextBtn.textContent = state.currentStage >= stages.length - 1 ? "ワールドマップへ" : "次へ進む";
  stageClearPanel.hidden = false;
  log(`${stage.id} クリア。報酬 ${stage.rewardItem}、${rewardName}、${stage.rewardPoints} coin を獲得。${nextText}`);
}

function failStage(reason = "ライフがなくなりました。") {
  state.stageRunning = false;
  stopBgm();
  input.disabled = true;
  startBtn.textContent = "再挑戦";
  nextStageBtn.disabled = true;
  clearEnemies();
  gameOverPanel.querySelector("span").textContent = reason;
  gameOverPanel.hidden = false;
  log(`${reason} 同じステージに再挑戦できます。`);
  updateHud();
}

function goNextStage() {
  stageClearPanel.hidden = true;
  document.body.classList.remove("playing");
  arenaWrap.style.height = "";
  if (state.currentStage < state.unlockedStage) {
    state.currentStage += 1;
    state.selectedWorld = stages[state.currentStage].world;
    state.defeatedInStage = 0;
    state.spawnedInStage = 0;
    state.resolvedInStage = 0;
    clearEnemies();
    startBtn.textContent = "ステージ開始";
    nextStageBtn.disabled = true;
    input.disabled = true;
    updateAll();
    log(`${stages[state.currentStage].id} が開放されました。`);
  } else {
    updateAll();
    log("ワールドマップに戻りました。");
  }
}

function chooseStage(index) {
  if (index > state.unlockedStage || state.stageRunning) return;
  state.currentStage = index;
  state.selectedWorld = stages[index].world;
  stageClearPanel.hidden = true;
  document.body.classList.remove("playing");
  arenaWrap.style.height = "";
  state.defeatedInStage = 0;
  state.spawnedInStage = 0;
  state.resolvedInStage = 0;
  clearEnemies();
  startBtn.textContent = "ステージ開始";
  nextStageBtn.disabled = true;
  input.disabled = true;
  updateAll();
  log(`${stages[index].id} ${stages[index].name} を選択しました。`);
}

function removeEnemy(enemy) {
  state.enemies = state.enemies.filter((item) => item !== enemy);
  enemy.el.remove();
}

function clearEnemies() {
  state.enemies.forEach((enemy) => enemy.el.remove());
  state.enemies = [];
  if (state.bossCasterEl) {
    state.bossCasterEl.remove();
    state.bossCasterEl = null;
  }
  targetWordEl.textContent = "なし";
}

function renderBossCaster(stage) {
  if (state.bossCasterEl) {
    state.bossCasterEl.remove();
    state.bossCasterEl = null;
  }
  if (stage.step !== 5 && stage.step !== 10) return;
  const caster = document.createElement("div");
  caster.className = `boss-caster ${stage.step === 10 ? "final" : "middle"}`;
  caster.innerHTML = `<span class="boss-eye left"></span><span class="boss-eye right"></span><span class="boss-mouth"></span>`;
  arena.appendChild(caster);
  state.bossCasterEl = caster;
}

function selectTarget() {
  if (!state.enemies.length) {
    targetWordEl.textContent = "なし";
    return;
  }
  const target = [...state.enemies].sort((a, b) => {
    if (a.boss !== b.boss) return Number(b.boss) - Number(a.boss);
    return b.y - a.y;
  })[0];
  targetWordEl.textContent = target.word;
  state.enemies.forEach((enemy) => enemy.el.classList.toggle("active", enemy === target));
  paintProgress();
}

function paintProgress() {
  const typed = input.value.trim().toLowerCase().replace(/\s+/g, " ");
  state.enemies.forEach((enemy) => {
    const wordEl = enemy.el.querySelector(".enemy-word");
    if (typed && enemy.word.startsWith(typed)) {
      wordEl.innerHTML = `<span>${escapeHtml(typed)}</span>${escapeHtml(enemy.word.slice(typed.length))}`;
    } else {
      wordEl.textContent = enemy.word;
    }
  });
}

function positionEnemy(enemy) {
  enemy.el.style.left = `${enemy.x}px`;
  enemy.el.style.top = `${enemy.y}px`;
}

function getArenaRect() {
  const rect = arena.getBoundingClientRect();
  if (rect.width > 20 && rect.height > 20) {
    return rect;
  }
  const wrapRect = arenaWrap.getBoundingClientRect();
  return {
    width: Math.max(320, wrapRect.width || window.innerWidth),
    height: Math.max(320, wrapRect.height || Math.round(window.innerHeight * 0.55))
  };
}

function drawAttack(enemy, item) {
  const wrapRect = arenaWrap.getBoundingClientRect();
  const fromX = wrapRect.width / 2;
  const fromY = wrapRect.height - 78;
  const dx = enemy.x - fromX;
  const dy = enemy.y - fromY;
  const beam = document.createElement("div");
  beam.className = `laser ${item.beam}`;
  beam.style.left = `${fromX}px`;
  beam.style.top = `${fromY}px`;
  beam.style.width = `${Math.hypot(dx, dy)}px`;
  beam.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
  laserLayer.appendChild(beam);
  window.setTimeout(() => beam.remove(), 210);
}

function buyShopItem(key) {
  const item = shopItems[key];
  if (!item) return;
  if (item.consumable) {
    if (state.points < item.cost) {
      log(`${item.label} は ${item.cost} coin 必要です。`);
      return;
    }
    state.points -= item.cost;
    state.lifePercent = Math.min(100, state.lifePercent + item.heal);
    playSfx("heal");
    log(`${item.label}を使ってライフが ${state.lifePercent}% になりました。`);
    updateHud();
    renderShop();
    return;
  }
  if (state.ownedShop.has(key)) {
    if (item.apply) item.apply();
    if (item.gearKey) equipGear(item.gearKey);
    log(`${item.label}を使用しました。`);
    updateAll();
    return;
  }
  if (state.points < item.cost) {
    log(`${item.label} は ${item.cost} coin 必要です。`);
    return;
  }
  state.points -= item.cost;
  state.ownedShop.add(key);
  if (item.gearKey) {
    gear[item.gearKey] = item.data;
    state.ownedGear.add(item.gearKey);
    state.equipped = item.gearKey;
  }
  if (item.apply) item.apply();
  log(`${item.label}を購入しました。`);
  updateAll();
}

function equipGear(key) {
  if (!state.ownedGear.has(key)) {
    log(`${gear[key].label} はまだ持っていません。ステージ報酬かショップで入手できます。`);
    return;
  }
  state.equipped = key;
  updateAll();
  log(`${gear[key].label}を装備しました。`);
  input.focus({ preventScroll: true });
}

function updateHud() {
  const stage = stages[state.currentStage];
  stageLabelEl.textContent = stage.id;
  enemyCountEl.textContent = String(Math.max(0, stage.enemyTotal - state.resolvedInStage));
  pointsEl.textContent = String(state.points);
  gearLabelEl.textContent = gear[state.equipped].label;
  livesEl.textContent = `${state.lifePercent}%`;
  livesEl.style.setProperty("--life", `${state.lifePercent}%`);
  questTitle.textContent = `第${stage.world}ステージ ${stage.worldName}`;
  questText.textContent = `${stage.id} ${stage.name}: ${stage.text}`;
}

function updateHero() {
  heroAvatar.className = `hero-avatar hero-${state.hero} outfit-${state.outfit} shoes-${state.shoes} accessory-${state.accessory} weapon-${state.equipped} color-${state.color}`;
}

function updateAll() {
  renderWorldTabs();
  renderStageMap();
  renderGear();
  renderShop();
  updateHud();
  updateHero();
}

function preparePlayArea() {
  const statusHeight = statusBar.getBoundingClientRect().height || 76;
  const commandHeight = commandPanel.getBoundingClientRect().height || 88;
  const shellGap = 28;
  const height = Math.max(340, window.innerHeight - statusHeight - commandHeight - shellGap);
  arenaWrap.style.height = `${height}px`;
}

function startBgm() {
  if (audio.timer || state.muted) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  if (!audio.ctx) {
    audio.ctx = new AudioContext();
    audio.master = audio.ctx.createGain();
    audio.master.gain.value = getAudioGain();
    audio.master.connect(audio.ctx.destination);
  }
  audio.master.gain.value = getAudioGain();
  audio.ctx.resume();
  playBgmNote();
  audio.timer = window.setInterval(playBgmNote, 420);
}

function stopBgm() {
  if (!audio.timer) return;
  window.clearInterval(audio.timer);
  audio.timer = 0;
}

function playBgmNote() {
  if (!audio.ctx || state.muted) return;
  const now = audio.ctx.currentTime;
  const note = audio.notes[audio.step % audio.notes.length];
  const osc = audio.ctx.createOscillator();
  const gain = audio.ctx.createGain();
  osc.type = "square";
  osc.frequency.value = note;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
  osc.connect(gain);
  gain.connect(audio.master);
  osc.start(now);
  osc.stop(now + 0.24);
  audio.step += 1;
}

function ensureAudioContext() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  if (!audio.ctx) {
    audio.ctx = new AudioContext();
    audio.master = audio.ctx.createGain();
    audio.master.gain.value = getAudioGain();
    audio.master.connect(audio.ctx.destination);
  }
  audio.ctx.resume();
  return audio.ctx;
}

function playTone(freq, start, duration, type = "square", volume = 0.16) {
  const ctx = ensureAudioContext();
  if (!ctx || state.muted) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume * state.volume, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

function playSfx(kind) {
  const ctx = ensureAudioContext();
  if (!ctx || state.muted) return;
  const now = ctx.currentTime;
  if (kind === "attack") {
    playTone(620, now, 0.08, "square", 0.18);
    playTone(930, now + 0.035, 0.07, "square", 0.12);
  } else if (kind === "defeat") {
    playTone(740, now, 0.09, "triangle", 0.18);
    playTone(1040, now + 0.08, 0.14, "triangle", 0.16);
  } else if (kind === "clear") {
    [523.25, 659.25, 783.99, 1046.5].forEach((note, index) => {
      playTone(note, now + index * 0.12, 0.18, "triangle", 0.18);
    });
  } else if (kind === "heal") {
    playTone(392, now, 0.11, "sine", 0.14);
    playTone(587.33, now + 0.09, 0.16, "sine", 0.16);
  }
}

function toggleSound() {
  state.muted = !state.muted;
  soundBtn.classList.toggle("muted", state.muted);
  soundBtn.textContent = state.muted ? "×" : "♪";
  soundBtn.setAttribute("aria-label", state.muted ? "音を出す" : "音を消す");
  if (state.muted) {
    stopBgm();
  } else if (state.stageRunning) {
    startBgm();
  }
}

function getAudioGain() {
  return state.muted ? 0 : 0.16 * state.volume;
}

function updateVolume(value) {
  state.volume = Number(value) / 100;
  if (audio.master) {
    audio.master.gain.value = getAudioGain();
  }
  if (state.volume > 0 && state.muted) {
    state.muted = false;
    soundBtn.classList.remove("muted");
    soundBtn.textContent = "♪";
    soundBtn.setAttribute("aria-label", "音を消す");
  }
}

function toggleShop() {
  const collapsed = shopPanel.classList.toggle("collapsed");
  shopToggleBtn.setAttribute("aria-expanded", String(!collapsed));
}

function openShopFromTop() {
  const wasPlaying = state.stageRunning;
  if (wasPlaying) {
    state.paused = true;
    pauseBtn.textContent = "▶";
    stopBgm();
    document.body.classList.remove("playing");
    arenaWrap.style.height = "";
  }
  shopPanel.classList.remove("collapsed");
  shopToggleBtn.setAttribute("aria-expanded", "true");
  updateAll();
  shopPanel.scrollIntoView({ behavior: "smooth", block: "center" });
  log(wasPlaying ? "ショップを開きました。再開するときは一時停止ボタンを押してください。" : "ショップを開きました。");
}

function openRules() {
  state.pausedForRules = state.stageRunning && !state.paused;
  if (state.stageRunning) {
    state.paused = true;
    pauseBtn.textContent = "▶";
    stopBgm();
  }
  startModal.classList.add("show", "rules-visible");
  rulesPanel.hidden = false;
  modalGameStartBtn.hidden = true;
  modalStartBtn.hidden = true;
  modalCloseRulesBtn.hidden = false;
  modalCloseRulesBtn.focus();
}

function closeRules() {
  startModal.classList.remove("show");
  modalCloseRulesBtn.hidden = true;
  if (state.pausedForRules && state.stageRunning) {
    state.paused = false;
    pauseBtn.textContent = "II";
    startBgm();
    input.focus({ preventScroll: true });
  }
  state.pausedForRules = false;
}

function keepPlayView(instant = false) {
  if (!document.body.classList.contains("playing")) return;
  arenaWrap.scrollIntoView({ behavior: instant ? "auto" : "smooth", block: "start" });
}

function log(message) {
  feed.innerHTML = `<p>${message}</p>`;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

startBtn.addEventListener("click", startStage);
modalStartBtn.addEventListener("click", () => {
  startModal.classList.add("rules-visible");
  rulesPanel.hidden = false;
  modalGameStartBtn.hidden = false;
  modalCloseRulesBtn.hidden = true;
  modalStartBtn.hidden = true;
  modalGameStartBtn.focus();
});
modalGameStartBtn.addEventListener("click", startStage);
nextStageBtn.addEventListener("click", goNextStage);
soundBtn.addEventListener("click", toggleSound);
volumeSlider.addEventListener("input", () => updateVolume(volumeSlider.value));
restartBtn.addEventListener("click", restartStage);
rulesBtn.addEventListener("click", openRules);
modalCloseRulesBtn.addEventListener("click", closeRules);
shopToggleBtn.addEventListener("click", toggleShop);
topShopBtn.addEventListener("click", openShopFromTop);

pauseBtn.addEventListener("click", () => {
  if (!state.stageRunning) return;
  state.paused = !state.paused;
  pauseBtn.textContent = state.paused ? "▶" : "II";
  if (state.paused) {
    stopBgm();
  } else {
    ensureFirstEnemy();
    startBgm();
  }
  log(state.paused ? "一時停止中です。" : "再開しました。");
  input.focus({ preventScroll: true });
});

input.addEventListener("input", () => {
  paintProgress();
  window.requestAnimationFrame(() => keepPlayView(true));
});
input.addEventListener("focus", () => keepPlayView(true));
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleSubmit();
  }
});

arena.addEventListener("click", () => input.focus({ preventScroll: true }));
retryBtn.addEventListener("click", startStage);
clearNextBtn.addEventListener("click", goNextStage);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") pauseBtn.click();
});
window.addEventListener("resize", () => {
  if (!state.stageRunning) return;
  preparePlayArea();
  keepPlayView(true);
});

input.disabled = true;
updateAll();
