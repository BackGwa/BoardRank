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
        <div class="ffP title">보드게임 랭크</div>
        <!-- 랭크 리스트 -->
        <div class="ffP ranklist">
            <!-- 랭크 -->
            <ol>

                <?php
                    $DB = mysqli_connect("localhost", "root", "");

                    mysqli_select_db($DB, "rank");

                    $query = "select * from board order by score desc";
                    $result = mysqli_query($DB, $query);

                    while($row = mysqli_fetch_array($result)){
                        echo '<div class="rank">';
                        echo '<div clsss="rankname">';
                        echo '<li>'.$row['uid'].' '.$row['name'].'</li></div>';
                        echo '<div clsss="rankscore">'.$row['score'].'점</div>';
                        echo '</div><hr>';
                    }

                    mysqli_close($DB);

                ?>    

            </ol>
        </div>
    </div>
</body>

</html>