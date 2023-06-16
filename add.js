function remove() {
    food_type = document.getElementById('ranks');
    food_type.options.length = 1;
}


function remove_other() {
    food_type = document.getElementById('other');
    food_type.options.length = 1;
}


function add_option(list) {
    food_type = document.getElementById('ranks');

    list.forEach(item => {
        food_type.options[food_type.options.length] = new Option(item[0], item[1]);
    });
}

function add_other(list) {
    food_type = document.getElementById('other');

    list.forEach(item => {
        food_type.options[food_type.options.length] = new Option(item[0], item[1]);
    });
}

function change_type() {
    games = document.getElementById('games').value;

    remove();
    remove_other();
    
    switch (games) {
        case 'chomk':
            add_chomk();
            break;

        case 'hali':
            add_hali();
            break;

        case 'bang':
            add_bang();
            break;

        case 'davin':
            add_davin();
            break;

        case 'rumi':
            add_rumi();
            break;

        case 'dalmu':
            add_dalmu();
            add_dalmu_other();
            break;

        case 'scoreA':
            add_a()
            break;

        case 'scoreB':
            add_b()
            break;
    }

}

function add_a() {
    listed = [
        ["증가 (5점)", "5"],
        ["증가 (4점)", "4"],
        ["증가 (3점)", "3"],
        ["증가 (2점)", "2"],
        ["증가 (1점)", "1"]
    ]; add_option(listed);
}

function add_b() {
    listed = [
        ["감소 (-5점)", "-5"],
        ["감소 (-4점)", "-4"],
        ["감소 (-3점)", "-3"],
        ["감소 (-2점)", "-2"],
        ["감소 (-1점)", "-1"]
    ]; add_option(listed);
}

function add_chomk() {
    listed = [
        ["승리 (4점)", "4"],
        ["패배 (2점)", "2"],
        ["무승부 (3점)", "3"]
    ]; add_option(listed);
}

function add_hali() {
    listed = [
        ["1등 (5점)", "5"],
        ["2등 (4점)", "4"],
        ["3등 (3점)", "3"],
        ["4등 (2점)", "2"]
    ]; add_option(listed);
}

function add_bang() {
    listed = [
        ["승리 (7점)", "7"],
        ["패배 (3점)", "3"],
        ["배신자 (10점)", "10"]
    ]; add_option(listed);
}

function add_davin() {
    listed = [
        ["1등 (4점)", "4"],
        ["2등 (3점)", "3"],
        ["3등 (2점)", "2"],
        ["4등 (1점)", "1"]
    ]; add_option(listed);
}


function add_rumi() {
    listed = [
        ["1등 (6점)", "6"],
        ["2등 (5점)", "5"],
        ["3등 (4점)", "4"],
        ["4등 (3점)", "3"]
    ]; add_option(listed);
}


function add_dalmu() {
    listed = [
        ["1등 (10점)", "10"],
        ["2등 (9점)", "9"],
        ["3등 (8점)", "8"],
        ["4등 (6점)", "6"],
        ["5등 (4점)", "4"],
        ["6등 (3점)", "3"],
        ["7등 (1점)", "1"]
    ]; add_option(listed);
}



function add_dalmu_other() {
    listed = [
        ["1~3계급 (-2점)", "-2"],
        ["4계급 (-1점)", "-1"],
        ["5계급 (0점)", "0"],
        ["6계급 (+1점)", "1"],
        ["7~8계급 (+2점)", "2"]
    ]; add_other(listed);
}
