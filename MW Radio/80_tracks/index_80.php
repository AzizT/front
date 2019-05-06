<?php
require_once("../include/header.php");
?>

<?php
        if(empty($_GET))
        {
    ?>

<div class="container-fluid">

    <h1>80' Albums</h1>

    <h2 class="indication">Rangés chronologiquement.<br>
    Cliquez sur l' album pour<br>
    accéder aux titres.</h2>

    <div class="container">

        <div class="tile-wrap">
            <a href="?title=Coming In From The Cold&album=Uprising&annee=1980&interprete=Bob Marley&photo=img_lp/comingInFromTheCold.jpg&mp3=&genre1=Reggae">
                <img src="img_lp/comingInFromTheCold.jpg" alt="album Uprising de Bob Marley (reggae)"
                    class="tile-image" />
                <div class="tile-text">
                    <h2 class="tile-title">Bob Marley</h2>
                    <p class="tile-description">Coming In From The Cold<br>1980<br>Uprising<br>Reggae</p>
                </div>
            </a>
        </div>
        <div class="tile-wrap">
            <a href="?title=Gimme Some Lovin - Peter Gunn Theme&album=Soudtrack du film Blues Brothers&annee=1980&interprete=Blues Brothers&photo=img_lp/gimmeSomeLovin.jpg&mp3=&genre1=Rythme & Blues">
                <img src="img_lp/gimmeSomeLovin.jpg" alt="album Blues Brothers du film du même nom (Rhythme and Blues)" class="tile-image" />
                <div class="tile-text">
                    <h2 class="tile-title">Blues Brothers</h2>
                    <p class="tile-description">Gimme Some Lovin - Peter Gunn Theme<br>1980<br>Rhythme & Blues</p>
                </div>
            </a>
        </div>
        <div class="tile-wrap">
            <a href="?title=Um Canto de Afoxé&album=Cores Nomes&annee=1982&interprete=Caetano Veloso&photo=img_lp/umCantoDeAfoxe.jpg&mp3=&genre1=Bossa Nova">
                <img src="img_lp/umCantoDeAfoxe.jpg" alt="album Cores Nomes de Caetano Velose (Bossa Nova)" class="tile-image" />
                <div class="tile-text">
                    <h2 class="tile-title">Caetano Veloso</h2>
                    <p class="tile-description">Um Canto de Afoxé<br>1982<br>Cores Nomes<br>Bossa Nova</p>
                </div>
            </a>
        </div>
        <div class="tile-wrap">
            <a href="?title=Beverly Hills Blues - Another Night In Tunisia&album=Spontaneous Inventions&annee=1986&interprete=Bobby Mcferrin&photo=img_lp/beverlyHillsBlues.jpg&mp3=&genre1=Jazz - Scat">
                <img src="img_lp/beverlyHillsBlues.jpg" alt="album Spontaneous Inventions de Bobby Mcferrin (Jazz, scat)" class="tile-image" />
                <div class="tile-text">
                    <h2 class="tile-title">Bobby Mcferrin</h2>
                    <p class="tile-description">Beverly Hills Blues - Another Night ...<br>1986<br>Spontaneous Inventions<br>Jazz - Scat</p>
                </div>
            </a>
        </div>
        <div class="tile-wrap">
            <a href="?title=Girls&album=Licenced To Ill&annee=1987&interprete=Beastie Boys&photo=img_lp/girls.jpg&mp3=&genre1=Hip Hop">
                <img src="img_lp/girls.jpg" alt="album Licenced to Ill des Beastie Boys (Hip Hop)" class="tile-image" />
                <div class="tile-text">
                    <h2 class="tile-title">Beastie Boys</h2>
                    <p class="tile-description">Girls<br>1987<br>Licenced To Ill<br>Hip Hop</p>
                </div>
            </a>
        </div>
        <div class="tile-wrap">
            <a href="?title=Santa Barbara&album=Celina Con Franck Y Adalberto&annee=1987&interprete=Celina Gonzales&photo=img_lp/santaBarbara.jpg&mp3=&genre1=Afro Cubain">
                <img src="img_lp/santaBarbara.jpg" alt="album Celina Con Franck Y Adalberto de Celina Gonzales" class="tile-image" />
                <div class="tile-text">
                    <h2 class="tile-title">Celina Gonzales</h2>
                    <p class="tile-description">Santa Barbara<br>1987<br>Celina con Franck y...<br>Afro Cubain</p>
                </div>
            </a>
        </div>
        <!-- <div class="tile-wrap">
            <a href="?title=&album=&annee=&interprete=&photo=&mp3=&genre1=">
                <img src="img_lp/" alt="album" class="tile-image" />
                <div class="tile-text">
                    <h2 class="tile-title"></h2>
                    <p class="tile-description"></p>
                </div>
            </a>
        </div> -->
    </div>

    <?php
        } else {
    ?>

    <!-- ***********************************************les éléments random qui doivent apparaitrent après selection d' un album********************************* -->

    <h1><?php echo $interprete; ?></h1>

    <p class="year"><?php echo $annee; ?></p>
    
    <!-- la section qui va accueillir le lecteur mp3 -->
    <section class="col-md-6 offset-3 lecteur_mp3">

        <!-- une row par titre -->
        <div class="row">

            <!-- première colonne pour le titre -->
                <div class="col-md-6 ml-4 pt-1 title_tracks">
                    <span><?php echo $title; ?></span>
                </div>

            <!-- deuxieme colonne pour le lecteur -->
                <div class="">
                    <div id="sm2-container"></div>
                    <div class="song ui360 exclude button-exclude inline-exclude"><a
                            href="http://techhouse.org/~dmorris/music/mp3/bluebird.mp3"><span class="titre_album"><?php echo $album; ?></span></a></div>
                </div>

            <!-- troisieme colonne pour link vers les lyrics -->
                <!-- <div class="col-md-1 title_tracks">
                    <span>lyrics</span>
                </div> -->

        </div>
        <!-- fermeture de row -->
    
    </section>
    <!-- ******************************************fin du lecteur mp3***************************** -->

    <!-- la  section, qui va accueillir l' image de l' album random -->
    <section class="container">

    

        

        <div class="tile-wrap">
            <a href="#">
                <img src="<?php echo $photo; ?>" alt="" class="tile-image-random" />
                <div class="tile-text-random">
                    <h2 class="tile-title-random"><?php echo $interprete; ?></h2>
                    <p class="tile-description-random"><?php echo $title; ?><br><?php echo $annee; ?><br><?php echo $album; ?><br><?php echo $genre1; ?></p>
                </div>
            </a>
        </div>
    
    </section>

    

    <!-- **************************************************************************fin de l' album aléatoire*************************************************************************** -->

    <?php
        }
    ?>
    
   
    <?php
require_once("../include/footer.php");
?>