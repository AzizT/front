<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Inscription membre</title>

    <!-- link bootstrap -->

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

</head>
<body>

<?php
    require_once("include/init.php");
    extract($_POST);

    if (internauteEstConnecte())
        // si' l 'utilisateur est déjà connecté, il n' a donc rien a faire n page connexion => on le redirige vers l' accueil, en attendant de créer un profil vers lequel le diriger éventuellement, ou autre ???
        {
            header("Location: accueil.html");
        }

    if ($_POST) {



        
        // on vérifie que le pseudo choisi n' est pas déjà pris par un autre membre
        $verif_pseudo = $bdd->prepare("SELECT*FROM membre WHERE pseudo = :pseudo");
        $verif_pseudo->bindvalue(':pseudo', $pseudo, PDO::PARAM_STR);
        $verif_pseudo->execute();
        if ($verif_pseudo->rowCount() > 0)
            // si le résultat de la requete est supérieur a 0, cela veut dire qu' un pseudo est bien existant en bdd, alors on affiche le mssage d' erreur
            {
                $error .= '<div class="col-md-6 offset-md-3 text-center alert alert-danger">Le pseudo <strong>' . $pseudo . '</strong> est déjà pris. Merci d\' en saisir un autre</div>';
            }
        $verif_mdp = $bdd->prepare("SELECT*FROM membre WHERE pseudo = :pseudo");
        $verif_mdp->bindvalue(':pseudo', $pseudo, PDO::PARAM_STR);
        $verif_mdp->execute();


        // vérification que la seconde saisie du mdp est conforme a la première
        if ($mdp !== $confirm_mdp) {
            $error1 .= '<div class="col-md-6 offset-md-3 text-center alert alert-danger">Ce mot de passe doit etre identique au premier entré.</div>';
        }

        if (empty($error || $error1)) {
            // si notre variable $error est vide (empty), c' est a dire qu' elle n' a stocké aucune valeur, donc aucune erreur, alors c' est que tout est ok
            echo '<div class="alert alert-success text-dark">Félicitations, votre formulaire est valide et par conséquent transmis</div>';
        }

        if (empty($error) && empty($error1)) {

            // $_POST['mdp'] = password_hash($_POST['mdp'], PASSWORD_DEFAULT); 
            // on ne conserve jamais de mdp en clair dans la bdd. password_hash permet de créer une clé de hashage ( cryptage)

            $data_insert = $bdd->prepare("INSERT INTO membre (nom, prenom, pseudo, email, mdp) VALUES (:nom, :prenom, :pseudo, :email, :mdp)");
            foreach ($_POST as $key => $value) {
                // cette boucle va nous permettre d' éviter de taper toutes les lignes bindValue une a une
                if ($key != 'confirm_mdp') {
                        $data_insert->bindValue(":$key", $value, PDO::PARAM_STR);
                    }
            }
        }
        $data_insert->execute();

        // header("Location: connexion.php?action=validate");
        // redirige vers le fichier connexion, une fois validé
        // header est une fonction prédéfinie, qui permet d' effectuer une redirection de page/ URL
    }
    // require_once("include/header.php");
    ?>

<h1 class="display-4 text-center">Inscription</h1>

<?= $error ?>

<form class="mt-4 mb-4 ml-4" method="post" action="">

        <!-- le nom -->
        <div class="form-group col-md-2">
            <label for="nom">Votre nom</label>
            <input type="text" class="form-control" id="nom" name="nom" placeholder="Votre nom">
        </div>
        
        <!-- le prenom -->
        <div class="form-group col-md-2">
            <label for="prenom">Votre prenom</label>
            <input type="text" class="form-control" id="prenom" name="prenom" placeholder="Votre prenom">
        </div>

        <!-- le pseudo -->

        <div class="form-group col-md-2">
            <label for="pseudo">Votre pseudo</label>
            <input type="text" class="form-control" id="pseudo" name="pseudo" placeholder="Votre pseudo">
        </div>
        
        <!-- le mail -->
        <div class="form-group col-md-2">
            <label for="email">Votre adresse mail</label>
            <input type="text" class="form-control" id="email" name="email" placeholder="Adresse mail">
            <!-- pour le type, mettre un text au lieu de email, pour pouvoir faire une vérification php sur le navigateur -->
        </div>

        <!-- mdp -->
        <div class="form-group col-md-2">
            <label for="mdp">Votre mot de passe</label>
            <input type="text" class="form-control" id="mdp" name="mdp" placeholder="Votre mdp">
        </div>

        <?= $error1 ?>

        <!-- confirmation mdp -->
        <div class="form-group col-md-2">
            <label for="confirm_mdp">Confirmez votre mot de passe</label>
            <input type="text" class="form-control" id="confirm_mdp" name="confirm_mdp" placeholder="Confirmation">
        </div>

        <!-- le bouton submit -->
        <button type="submit" class="btn btn-primary">Validez votre inscription</button>

    </form>
    
</body>
</html>