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

                    mysqli_select_db($DB, "ranker");

                    $query = ""
                    $resultA = mysqli_query($DB, $query);

                    $query = ""
                    $resultB = mysqli_query($DB, $query);

                    while($name = mysqli_fetch_array($resultA)){
                        $score = mysqli_fetch_array($resultB)
                    }
                ?>    


                <div class="rank">
                    <div clsss="rankname">
                        <li>1111 홍길동</li>
                    </div>
                    <div clsss="rankscore">1,000점</div>
                </div><hr>

            </ol>
        </div>
    </div>
</body>

</html>