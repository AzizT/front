<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulaire d' insertion</title>

    <!-- link bootstrap -->

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

</head>
<body>

<?php
    require_once("include/init.php");

    if ($_POST) {

    $insert_bdd = $bdd->prepare("INSERT INTO tracks (title, mp3) VALUES(:title, :mp3)");



        $insert_bdd->bindValue(":title", $_POST['title'], PDO::PARAM_STR);

        $insert_bdd->bindValue(":mp3", $_POST['mp3'], PDO::PARAM_STR);

        $insert_bdd->execute();

    }
?>

<form class="mt-4 mb-4 ml-4" method="post" action="">

        <!-- le titre -->
        <div class="form-group col-md-2">
            <label for="title">Titre du morceau</label>
            <input type="text" class="form-control" id="title" name="title">
        </div>

        <!-- l' album' 
        <div class="form-group col-md-2">
            <label for="album">Titre de l' album</label>
            <input type="text" class="form-control" id="album" name="album">
        </div>-->
        
        <!-- année de sortie 
        <div class="form-group col-md-2">
            <label for="annee">Année du morceau</label><br>
            <input type="date" id="annee" name="annee" value="">
        </div>-->

        <!-- le groupe ou interprete 
        <div class="form-group col-md-2">
            <label for="interprete">Interprète principal</label>
            <input type="text" class="form-control" id="interprete" name="interprete">
        </div>-->

        <!-- l' auteur 
        <div class="form-group col-md-2">
            <label for="auteur">Auteur (parolier)</label>
            <input type="text" class="form-control" id="auteur" name="auteur">
        </div>-->

        <!-- le compositeur 
        <div class="form-group col-md-2">
            <label for="compositeur">Compositeur (musique)</label>
            <input type="text" class="form-control" id="compositeur" name="compositeur">
        </div>-->

        <!-- upload du mp3 -->
        <div class="form-group col-md-2">
                <label for="mp3">Upload du mp3</label>
                <input type="file" class="form-control" id="mp3" aria-describedby="" name="mp3">
        </div>

        <!-- genre principal 
        <div class="form-group col-md-2">
            <label for="genre1">Genre principal du morceau</label>
            <input type="text" class="form-control" id="genre1" name="genre1">
        </div>-->

        <!-- genre secondaire 
        <div class="form-group col-md-2">
            <label for="genre2">Genre secondaire du morceau (non obligatoire)</label>
            <input type="text" class="form-control" id="genre2" name="genre2">
        </div>-->

        <!-- j' ouvre 15 inputs pour l' insertion de 15 musiciens au maximum, selon les cas de figure ( 12 musiciens pour le concert Make a Jazz Noise Here de Zappa ) mais si il n y en a qu' un seul ( morceau de Dollar Brand par exemple, seul au piano), on ne remplit que le premier champs-->

        <!-- Musicien 1 
        <div class="form-group col-md-2">
            <label for="musicien1">Musicien 1</label>
            <input type="text" class="form-control" name="musicien1" id="musicien1">
        </div>-->

        <!-- Musicien 2 
        <div class="form-group col-md-2">
            <label for="musicien2">Musicien 2</label>
            <input type="text" class="form-control" name="musicien2" id="musicien2">
        </div>-->

        <!-- Musicien 3 
        <div class="form-group col-md-2">
            <label for="musicien3">Musicien 3</label>
            <input type="text" class="form-control" name="musicien3" id="musicien3">
        </div>-->

        <!-- Musicien 4 
        <div class="form-group col-md-2">
            <label for="musicien4">Musicien 4</label>
            <input type="text" class="form-control" name="musicien4" id="musicien4">
        </div>-->

        <!-- Musicien 5 
        <div class="form-group col-md-2">
            <label for="musicien5">Musicien 5</label>
            <input type="text" class="form-control" name="musicien5" id="musicien5">
        </div>-->

        <!-- Musicien 6 
        <div class="form-group col-md-2">
            <label for="musicien6">Musicien 6</label>
            <input type="text" class="form-control" name="musicien6" id="musicien6">
        </div>-->

        <!-- Musicien 7 
        <div class="form-group col-md-2">
            <label for="musicien7">Musicien 7</label>
            <input type="text" class="form-control" name="musicien7" id="musicien7">
        </div>-->

        <!-- Musicien 8 
        <div class="form-group col-md-2">
            <label for="musicien8">Musicien 8</label>
            <input type="text" class="form-control" name="musicien8" id="musicien8">
        </div>-->

        <!-- Musicien 9 
        <div class="form-group col-md-2">
            <label for="musicien9">Musicien 9</label>
            <input type="text" class="form-control" name="musicien9" id="musicien9">
        </div>-->

        <!-- Musicien 10 
        <div class="form-group col-md-2">
            <label for="musicien10">Musicien 10</label>
            <input type="text" class="form-control" name="musicien10" id="musicien10">
        </div>-->

        <!-- Musicien 11 
        <div class="form-group col-md-2">
            <label for="musicien11">Musicien 11</label>
            <input type="text" class="form-control" name="musicien11" id="musicien11">
        </div>-->

        <!-- Musicien 12 
        <div class="form-group col-md-2">
            <label for="musicien12">Musicien 12</label>
            <input type="text" class="form-control" name="musicien12" id="musicien12">
        </div>-->

        <!-- Musicien 13 
        <div class="form-group col-md-2">
            <label for="musicien13">Musicien 13</label>
            <input type="text" class="form-control" name="musicien13" id="musicien13">
        </div>-->

        <!-- Musicien 14 
        <div class="form-group col-md-2">
            <label for="musicien14">Musicien 14</label>
            <input type="text" class="form-control" name="musicien14" id="musicien14">
        </div>-->

        <!-- Musicien 15 
        <div class="form-group col-md-2">
            <label for="musicien15">Musicien 15</label>
            <input type="text" class="form-control" name="musicien15" id="musicien15">
        </div>-->

        


        <!-- le bouton submit -->
        <button type="submit" class="btn btn-primary">Sign in</button>

    </form>
    
</body>
</html>