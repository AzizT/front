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

    <!-- mon css -->
    <link rel="stylesheet" href="css/style.css">

</head>

<body>

    <main>
        <div class="container mt-5">

            <form method="post">
                <div class="col-auto">
                    <label class="sr-only" for="inlineFormInput">Nom</label>
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="...">
                </div>

                <div class="col-auto">
                    <label class="sr-only" for="inlineFormInput">Prénom</label>
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="...">
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Votre Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="...">
                    <small id="emailHelp" class="form-text text-muted">Soyez rassuré(e), nous ne partagerons aucune de vos données personnelles. Elles resteront confidentielles !</small>
                </div>

                <div class="form-group col-md-6">
                    <label for="inputPassword4">Votre Mot de passe</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="...">
                </div>

                <div class="form-group">
                    <label for="inputAddress">Votre adresse</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="...">
                </div>

                <div class="form-row">

                    <div class="form-group col-md-6">
                        <label for="inputCity">Ville</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>

                    <div class="form-group col-md-4">
                        <label for="inputState">Pays</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>Algérie</option>
                            <option>Côte d' Ivoire</option>
                            <option>Zaïre</option>...</option>
                            <option>Sénégal</option>
                            <option>Maroc</option>
                            <option>Mali</option>
                        </select>
                    </div>

                </div>

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