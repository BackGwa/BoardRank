
let users = [
    "강찬영", "김나현",
    "김민서", "김준수", "김지환",
    "김현호", "박종현", "배민제",
    "신태호", "유차빈", "이세훈",
    "이학남", "전우영", "정원진",
    "한창희", "홍지민", "곽병준"
];

let games = [
    ["체스", 2], ["오목", 2], ["할리갈리", 3],
    ["할리갈리", 4], ["뱅", 6], ["뱅", 7],
    ["다빈치 코드", 3], ["다빈치 코드", 4], ["루미큐브", 3],
    ["루미큐브", 4], ["달무티", 8]
];

// TODO : 게임 캐시 리스트에 랜덤 배정 시 배정 인원을 삽입
// 각 캐시 배열에는 사람의 이름이 삽입 됨
// 또한, 게임 캐시 리스트의 인덱스는 games 배열의 게임 번호에 뜻함
// EXAM : ['강찬영', '곽병준', '한창희']

let gamecache = [
    [], [], [],
    [], [], [],
    [], [], [],
    [], []
]

const result = document.getElementById("gamelist");
const click = document.getElementById("clicksfx");
const hover = document.getElementById("hoversfx");

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    array.sort(() => Math.random() - 0.5);
  }


// TODO : 게임 캐시 리스트의 사람과 비교하여 일치하면 재배정

function randchoice(games){
    playclick();
    shuffle(users);
    if(games[1] > users.length){
        Swal.fire({
            title: '인원이 부족해서 즐기지 못해요!',
            text: `남은 인원 (${users.length}명) : ${users}`,
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: '무시할래요',
            cancelButtonText: '알겠어요',
            cancelButtonColor: '#5274ff',
            confirmButtonColor: '#6e7881'
        }).then(ret => {
            if (ret.isConfirmed) {
                randgogo(games);
            } else {
                return 0;
            }
         });
    } else {
        randgogo(games);
    }
}

function randgogo(games){
    printlog = []
    for (let i = 0; i < games[1]; i++) {
        randint = rand(0, (users.length - 1));
        printlog.push(users[randint]);
        users.splice(randint, 1);
    }


    result.innerHTML = result.innerHTML + (`
    <div class="gameitem">
        <div class="gametitle">${games[0]}</div>
        <div class="gamehuman">${printlog}</div>
    </div>
    `);
}

function reset(){
    result.innerHTML = "";
    users = [
        "강찬영", "김나현",
        "김민서", "김준수", "김지환",
        "김현호", "박종현", "배민제",
        "신태호", "유차빈", "이세훈",
        "이학남", "전우영", "정원진",
        "한창희", "홍지민", "곽병준"
    ];
    playclick();
    cache_remove();
}

function cache_remove(){
    // TODO : 캐시 리스트 비움
}

function retry(){
    result.innerHTML = "";
    users = [
        "강찬영", "김나현",
        "김민서", "김준수", "김지환",
        "김현호", "박종현", "배민제",
        "신태호", "유차빈", "이세훈",
        "이학남", "전우영", "정원진",
        "한창희", "홍지민", "곽병준"
    ];
    playclick();
}

function phver(){
    hover.play();
}

function playclick(){
    click.play();
}