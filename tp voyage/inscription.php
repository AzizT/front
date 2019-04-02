<?php

$msg = "";

if ($_POST) {
    // Je vérifie que chaque champs n'esxistent pas ou bien qu'il ne correspondent pas à ce que j'attend. Dans ce cas un message d'erreur sera affiché.

    // le nom
    if (!isset($_POST['nom']) || strlen($_POST['nom']) < 2 || strlen($_POST['nom']) > 100) {
        $msg .= '<div class="alert alert-warning text-danger"> Veuillez saisir votre nom ( entre 3 et 100 caractères)</div>';
    }

    // le prenom
    if (!isset($_POST['prenom']) || strlen($_POST['prenom']) < 2 || strlen($_POST['prenom']) > 100) {
        $msg .= '<div class="alert alert-warning text-danger"> Veuillez saisir votre prénom ( entre 3 et 100 caractères)</div>';
    }

    // le mail
    if (!isset($_POST['email']) || strlen($_POST['email']) < 3 || strlen($_POST['email']) > 50) {
        $msg .= '<div class="alert alert-warning text-danger"> Veuillez ecrire votre email ( entre 3 et 50 caractères)</div>';
    }

    // le mot de passe
    if (!isset($_POST['mdp']) || strlen($_POST['mdp']) < 3 || strlen($_POST['mdp']) > 30) {
        $msg .= '<div class="alert alert-warning text-danger"> Veuillez choisir choisir un pot de passe compris entre 3 et 30 caracteres</div>';
    }

    // l' adresse
    if (!isset($_POST['adresse']) || strlen($_POST['adresse']) < 3 || strlen($_POST['adresse']) > 100) {
        $msg .= '<div class="alert alert-warning text-danger"> Veuillez ecrire votre adresse, entre 3 et 100 caracteres</div>';
    }

    // le téléphone
    if (!isset($_POST['telephone']) || !preg_match('#^[0-9]{10}$#', $_POST['telephone'])) {
        // méthode preg_match pour obliger un caractere spécifique (ici des chiffres). Dans le premier crochet, on spécifie lesquels, et dans le second, le nombre de ces caracteres
        $msg .= '<div class="alert alert-warning text-danger"> Veuillez entrer votre numéro de téléphone de 10 chiffres</div>';
    }

    // la ville
    if (!isset($_POST['ville']) || strlen($_POST['ville']) < 3 || strlen($_POST['ville']) > 50) {
        $msg .= '<div class="alert alert-warning text-danger"> Veuillez ecrire votre ville, entre 3 et 50 caracteres</div>';
    }

    // le pays
    if (!isset($_POST['pays']) || $_POST['pays'] != "Algérie" && $_POST['pays'] != "Côte d' Ivoire" && $_POST['pays'] != "Zaïre" && $_POST['pays'] != "Sénégal" && $_POST['pays'] != "Maroc" && $_POST['pays'] != "Mali" && $_POST['pays'] != "France") {
        $msg .= '<div class="alert alert-warning text-danger"> Veuillez choisir un Pays</div>';
    }

    // la carte bancaire
    if (!isset($_POST['numeroCb']) || !preg_match('#^[0-9]{16}$#', $_POST['numeroCb'])) {
        $msg .= '<div class="alert alert-warning text-danger"> Veuillez entrer les 16 chiffres de votre carte bancaire</div>';
    }

    // si Je n'ai pas de messaged'erreur j'effectue l'insertion à ma BDD 

    if (empty($msg)) {

        // 1 - Je me connect
        $pdo = new PDO(
            'mysql:host=localhost;dbname=voyage',
            'root',
            '',
            array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
                PDO::MYSQL_ATTR_INIT_COMMAND => 'set NAMES utf8'
            )
        );

        //2 - Je prépare l'insertion des valeur saisies dans les champs du formulaire
        $requet = $pdo->prepare("INSERT INTO client (nom,prenom,email,mdp,adresse,telephone,ville,pays,numeroCb) VALUES (:nom,:prenom,:email,:mdp,:adresse,:telephone,:ville,:pays,:numeroCb)");
        // J'associe les les valeurs saisies dans le  formulaire avec les marqueurs de securité php (:prenom,:yeux,:genre) 
        $requet->bindParam(':nom', $_POST['nom']);
        $requet->bindParam(':prenom', $_POST['prenom']);
        $requet->bindParam(':email', $_POST['email']);
        $requet->bindParam(':mdp', $_POST['mdp']);
        $requet->bindParam(':adresse', $_POST['adresse']);
        $requet->bindParam(':telephone', $_POST['telephone']);
        $requet->bindParam(':ville', $_POST['ville']);
        $requet->bindParam(':pays', $_POST['pays']);
        $requet->bindParam(':numeroCb', $_POST['numeroCb']);
        // J'execute l'insertion en BDD
        $requet->execute();
        // Je redirige vers la page qui affiche la liste des apprenants. 
        // header('location:liste.php');
    }
} // FIN if ($_POST)

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Inscription</title>

    <!-- lien Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="">

    <!-- link pour fontawesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <link href="https://fonts.googleapis.com/css?family=Bangers" rel="stylesheet">

    <!-- mon css -->
    <link rel="stylesheet" href="css/style.css">

</head>

<body>

    <header class="container-fluid">

        <div class="row">

            <!-- <div class="col">

            <nav>


            </nav>

        </div> -->

            <nav class="navbar navbar-expand-lg col-md-12 navbar-dark bg-dark">
                <a class="navbar-brand" href="#"><button type="button" class="btn btn-warning">MENU</button></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">

                        <a class="nav-item nav-link" href="#"><button type="button" class="btn btn-outline-warning">Reserver</button></a>
                        <a class="nav-item nav-link" href="#"><button type="button" class="btn btn-outline-warning">Destinations et Escales</button></a>
                        <a class="nav-item nav-link" href="#"><button type="button" class="btn btn-outline-warning">Les + de TONTON & Fils</button></a>
                        <a class="nav-item nav-link" href="#"><button type="button" class="btn btn-outline-warning">Aide et Contact</button></a>
                        <a class="nav-item nav-link" href="#"><button type="button" class="btn btn-outline-warning">Offres d' emplois</button></a>
                        <a class="nav-item nav-link" href="#"><button type="button" class="btn btn-outline-warning">Mes billets</button></a>
                    </div>
                </div>
            </nav>

        </div>

    </header>

    <main>
        <div class="container mt-5">

            <form method="post">
                <?php 
                echo $msg;
                ?>
                <div class="form-group col-md-6">
                    <input type="text" class="form-control mb-2" id="inlineFormInput" name="nom" placeholder="Nom...">
                </div>

                <div class="form-group col-md-6">
                    <input type="text" class="form-control mb-2" id="inlineFormInput" name="prenom" placeholder="Prénom...">
                </div>

                <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="exampleInputEmail1" name="email" placeholder="Votre Email...">
                    <small id="emailHelp" class="form-text text-warning">Soyez rassuré(e), nous ne partagerons aucune de vos données personnelles. Elles resteront confidentielles !</small>
                </div>

                <div class="form-group col-md-4">
                    <input type="password" class="form-control" id="inputPassword4" name="mdp" placeholder="Votre Mot de passe...">
                </div>

                <div class="form-group col-md-6">
                    <input type="text" class="form-control" name="adresse" id="inputAddress" placeholder="Votre adresse...">
                </div>

                <div class="form-group col-md-4">
                    <input type="tel" class="form-control" id="inputPhone" name="telephone" placeholder="Votre numéro de télephone...">
                </div>

                <div class="form-group col-md-4">
                    <input type="text" class="form-control" id="inputCity" name="ville" placeholder="Votre ville...">
                </div>

                <div class="form-group col-md-4">
                    <select id="inputState" class="form-control" name="pays">
                        <option selected>Choisissez votre pays...</option>
                        <option>Algérie</option>
                        <option>Côte d' Ivoire</option>
                        <option>France</option>
                        <option>Mali</option>
                        <option>Maroc</option>
                        <option>Sénégal</option>
                        <option>Zaïre</option>
                    </select>
                </div>

                <div class="form-group col-md-4">
                    <input type="text" class="form-control" id="inputCb" name="numeroCb" placeholder="Numéro de carte bancaire a débiter...">
                </div>

                <button type="submit" class="offset-5 btn btn-warning">Envoyer</button>

            </form>

        </div>




    </main>


    <!-- liens vers les bibliotheques necessaires a bootstrap -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
        < /scri pt> < /
        body >

            <
            /html>               