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
                <div class="form-group col-md-6">
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Nom...">
                </div>

                <div class="form-group col-md-6">
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Prénom...">
                </div>

                <div class="form-group col-md-6">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Votre Email...">
                    <small id="emailHelp" class="form-text text-warning">Soyez rassuré(e), nous ne partagerons aucune de vos données personnelles. Elles resteront confidentielles !</small>
                </div>

                <div class="form-group col-md-4">
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Votre Mot de passe...">
                </div>

                <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="inputAddress" placeholder="Votre adresse...">
                </div>

                <div class="form-group col-md-4">
                    <input type="text" class="form-control" id="inputCity" placeholder="Votre ville...">
                </div>

                <div class="form-group col-md-4">
                    <select id="inputState" class="form-control">
                        <option selected>Choisissez votre pays...</option>
                        <option>Algérie</option>
                        <option>Côte d' Ivoire</option>
                        <option>Zaïre</option>...</option>
                        <option>Sénégal</option>
                        <option>Maroc</option>
                        <option>Mali</option>
                    </select>
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
    </script>
</body>

</html> 