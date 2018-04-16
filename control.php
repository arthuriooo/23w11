<?php 

include ("./includes/head.php");
include ("./includes/classes/DB.php");

$posts = "";





if (isset($_POST["addNewPost"])) {
	$dtz = new DateTimeZone("Europe/Moscow"); //Your timezone
	$now = new DateTime(date("Y-m-d"), $dtz);
	$date = $now->format("Y-m-d");

	$postbody = $_POST["postbody"];
	$posttitle = $_POST["posttitle"];
	$tags = $_POST["posttags"];



	$getMaxId = "SELECT id from posts ORDER BY id DESC";
	$rez = mysqli_query($conn, $getMaxId);
	$row = $rez->fetch_assoc();
	$newId = $row['id'];

	$newId++;


    $sql = "INSERT INTO posts(id,day,title,body,tags)VALUES ('".$newId."','".$date."','".$_POST["postbody"]."','".$_POST["posttitle"]."','".$_POST["posttags"]."')";

    if (mysqli_query($conn, $sql)) {
       echo "New record created successfully";
    } else {
       echo "Error: " . $sql . "" . mysqli_error($conn);
    }
    $conn->close();


}


$dbposts = "SELECT * FROM posts ORDER BY id DESC";






// $stmt = $pdo->query('SELECT * FROM posts');

?>
<head>
	<title>Панель управления</title>
	<link rel="stylesheet" type="text/css" href="controlStyle.css">
	<script type="text/javascript" src="./scripts/controlJS.js"></script>
</head>

<div id="controlBack">
	<div id="controlWhole">
		<div id="controlTop">
			<p id='panelTitle'>панель управления</p>
		</div>
		<div id="controlMain">
			<div id="controlSidebar">
				<p id="eventsBtn">события</p>
				<p id="postsBtn">статьи</p>
				<p id="paintingsBtn">картины</p>
				<p id="musicBtn">музыка</p>
				<p id="auctionBtn">аукцион</p>
			</div>
			<div id="controlSelf">
				<div id="events">
					<p>текущее событие</p>
				</div>

				<div id="posts">
					<div id="alreadyPosted">
						<p id='alreadyPostedTitle'>размещенные статьи</p>

						<div class="post">
							
						</div>
						<p id='toAddNewPost'>добавить новую статью</p>
					</div>
					<div id="addNewPost">
						<form id="newPost" action="control.php" method="post">
							Заголовок статьи:
							<textarea name="posttitle" rows="1" cols="80"></textarea>
							Текст статьи:
							<textarea name="postbody" rows="8" cols="80"></textarea>
							Теги:
							<textarea name="posttags" rows="1" cols="80"></textarea>
							<input type="submit" name="addNewPost" value="ДОБАВИТЬ" id="submitNewPost">
							<input type="submit" value="ОТМЕНА" id="cancelNewPost">
						</form>
					</div>
					
				
				</div>

				<div id="paintings">

				</div>

				<div id="music">

				</div>

				<div id="auction">

				</div>
			</div>
		</div>
	</div>
</div>







