$(document).ready(function () {

    var winCount = 0;
    var drawCount = 0;
    var loseCount = 0;

    $("#scissors").click(function () {
        var result = compare('scissors', computerChoice());
        $("#result h1").html(result);
    });

    $('#rock').click('click', function () {
        var result = compare('rock', computerChoice());
        $("#result h1").html(result);
    });

    $('#paper').click('click', function () {
        var result = compare('paper', computerChoice());
        $("#result h1").html(result);
    });

    $('#reset').click('click', function () {
        winCount = 0;
        drawCount = 0;
        loseCount = 0;
        $("#win").html(winCount);
        $("#draw").html(drawCount);
        $("#lose").html(loseCount);
        $("#result h1").html("Válassz:");
        $("#enemyChoice").html("");
    });

    var win = function () {
        winCount++;
        $("#win").html(winCount);
    }
    var draw = function () {
        drawCount++;
        $("#draw").html(drawCount);
    }
    var lose = function () {
        loseCount++;
        $("#lose").html(loseCount);
    }

    var compare = function (me, opponent) {
        if (me === 'rock') {

            if (opponent === 'rock') {
                draw();
                return 'Döntetlen!';
            } else if (opponent === 'paper') {
                lose();
                return 'Vesztettél :(';
            } else if (opponent === 'scissors') {
                win();
                return 'Nyertél :)';
            }

        } else if (me === 'paper') {

            if (opponent === 'paper') {
                draw();
                return 'Döntetlen!';
            } else if (opponent === 'rock') {
                win();
                return 'Nyertél :)';
            } else if (opponent === 'scissors') {
                lose();
                return 'Vesztettél :(';
            }
        } else if (me === 'scissors') {

            if (opponent === 'scissors') {
                draw();
                return 'Döntetlen!';
            } else if (opponent === 'paper') {
                win();
                return 'Nyertél :)';
            } else if (opponent === 'rock') {
                lose();
                return 'Vesztettél :(';
            }
        } else {
            return "That doesn't make any sense!"
        }
    };
    var computerChoice = function () {
        var random = Math.random();
        if (random < 0.333) {
            $("#enemyChoice").html("<img src='images/rock.jpg' alt='rock'></img>");
            return 'rock';
        } else if (random < 0.67777) {
            $("#enemyChoice").html("<img src='images/paper.png' alt='paper'></img>");
            return 'paper';
        } else {
            $("#enemyChoice").html("<img src='images/scissor.jpg' alt='scissor'></img>");
            return 'scissors';
        }
    };

});