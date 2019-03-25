<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ACCUEIL VOYAGES</title>

    <!-- link bootstrap -->

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- link pour fontawesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <link rel="stylesheet" href="css/style.css">

    <link href="https://fonts.googleapis.com/css?family=Bangers" rel="stylesheet">

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
                <button type="submit" class="btn btn-outline-warning">Connexion</button>
                <button type="submit" class="btn btn-outline-warning">Inscription</button>
            </nav>

        </div>


        <h1>
            <p> TONTON & Fils</p>
        </h1>
        <h4>
            <p>Voyagistes de Père en Fils</p>
        </h4>


        <div class="row">

            <div class="barre_recherche offset-md-1">

                <select name="depart" id="depart">
                    <option value="">Ville au départ</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

                <select name="nb_passagers" id="nb_paassagers">
                    <option value="">1 passager</option>
                    <option value="">2 passagers</option>
                    <option value="">3 passagers</option>
                    <option value="">4 passagers</option>
                </select>


                <input type="date" id="depart" name="date-depart" value="2018-07-22">

                <button type="submit" class="btn btn-warning">Réserver maintenant !</button>

            </div>

        </div>

    </header>

    <main>

        <div class="container">

            <div class="row">

                <div class="col-md-8 circuit">

                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="image/bus_1.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="image/bus_2.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="image/bus_3.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="image/bus_4.jpg" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                    <p class="text_slider">Decouvrez nos autocars. Tout confort, grand luxe !</p>

                </div>

                <div class="col-md-3 offset-md-1 circuit">

                    <img class="villes_circuit" src="image/abidjan3.jpg" alt="">

                    <p class="text_ville">Dakar - Abidjan, pour pas cher, 85€ !</p>
                    <button type="submit" class="btn btn-warning">Réserver maintenant !</button>

                </div>

            </div>

            <div class="row">

                <!-- Momentanement je neutralise cette disposition, pour des tests sur le bg<div class="col-md-4">

        </div>

        <div class="col-md-4">

        </div>

        <div class="col-md-4">

        </div> -->

                <div class="col-md-8 circuit">

                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="image/bus_1.jpg" class="d-block w-100" alt="Autocar Dolphin">
                            </div>
                            <div class="carousel-item">
                                <img src="image/bus_2.jpg" class="d-block w-100" alt="Autocar Tawfiq">
                            </div>
                            <div class="carousel-item">
                                <img src="image/bus_3.jpg" class="d-block w-100" alt="Autocar Simba">
                            </div>
                            <div class="carousel-item">
                                <img src="image/bus_4.jpg" class="d-block w-100" alt="Autocar Spider">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                    <p class="text_slider">Decouvrez nos autocars. Tout confort, grand luxe !</p>

                </div>

                <div class="col-md-3 offset-md-1 circuit">

                    <img class="villes_circuit" src="image/abidjan3.jpg" alt="">

                    <p>Dakar - Abidjan, pour pas cher, 85€ !</p>
                    <button type="submit" class="btn btn-warning">Réserver maintenant !</button>

                </div>

            </div>

        </div>



    </main>

    <footer>



    </footer>


    <!-- bibliotheque pour bootstrap -->

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>

</body>

</html> 