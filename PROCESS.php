<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>보드게임 랭크</title>

    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <!-- 가운데 정렬 -->
    <div class="center">
        <!-- 제목 -->
        <div class="ffP title">등록되었습니다!</div>
        <a class="ffP textctr" href="./score.php">다시 등록하기</a>
        <a class="ffP textctr" href="./index.php">돌아가기</a>
    </div>

    <?php

        $uid = $_POST['select_uid'];

        $score = $_POST['rank'];
        $other = $_POST['other'];
        
        $result = (int)$score + (int)$other;

        $DB = mysqli_connect("localhost", "backgwa", "dbpass1120?");
        mysqli_select_db($DB, "backgwa");

        $query = "update board set score = (score + $result) where uid = $uid";

        $result = mysqli_query($DB, $query);
        mysqli_close($DB);

    ?>

</body>

</html>