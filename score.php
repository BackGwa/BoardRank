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
        <div class="ffP title">랭크 등록</div>

        <div class="ffP ranklist">




            <!-- GET : naver.com?serach=급식 -->
            <!-- POST : 파일을 전송하는 과정에 같이 포함 -->

            <form action="PROCESS.php" method="post">

                <div class='flexgrid ffP'>
                    <div class="fontresize">학번 / 이름</div>
                        <select name="select_uid">

                            <?php
                            
                                $DB = mysqli_connect("localhost", "backgwa", "dbpass1120?");
                                mysqli_select_db($DB, "backgwa");

                                $query = "select * from board";
                                $result = mysqli_query($DB, $query);

                                while($row = mysqli_fetch_array($result)){
                                    echo '<option value='.$row['uid'].'>'.$row['uid'].' '.$row['name'].'</option>';
                                }

                                mysqli_close($DB);
                            ?>

                    </select>
                    
                    <div class="fontresize">게임 종류</div>
                    <select name="score" id="games" onchange="change_type();">
                        <option>-- 선택 --</option>
                        <option value="chomk">체스 / 오목</option>
                        <option value="hali">할리갈리</option>
                        <option value="bang">뱅</option>
                        <option value="davin">다빈치</option>
                        <option value="rumi">루미큐브</option>
                        <option value="dalmu">달무티</option>
                        <option value="scoreA">+ 점수 증가</option>
                        <option value="scoreB">- 점수 감소</option>
                    </select>

                    <div class="fontresize">순위</div>
                    <select name="rank" id="ranks">
                        <option value="0">-- 선택 --</option>
                    </select>

                    <div class="fontresize">옵션</div>
                    <select name="other" id="other">
                        <option value="0">-- 기타 --</option>
                    </select>

                    <input class="submit ffP" type="submit" value="등록하기">
                </div>
            </form>




        </div>

        <script src="./add.js"></script>

        <a class="ffP textctr" href="./index.php">돌아가기</a>
    </div>
</body>

</html>