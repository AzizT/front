<?php
require_once("../include/header.php");
?>

<?php
        if(empty($_GET))
        {
    ?>

    <h1>50' 60' Albums</h1>

    <h2 class="indication">Rangés chronologiquement.<br>
    Cliquez sur l' album pour<br>
    accéder aux titres.</h2>

    <div class="container">
        <div class="tile-wrap">
            <a href="?title=Babaratini&album=Il Re Del Mambo&annee=1953&interprete=Beny More&photo=img_lp/babaratini.jpg&mp3=&genre1=mambo">
                <img src="img_lp/babaratini.jpg" alt="album Il Re del Mambode Perez Prado (mambo)" class="tile-image" />
                <div class="tile-text">
                    <h2 class="tile-title">Beny Moré & Perez Prado</h2>
                    <p class="tile-description">Babaratini<br>1953<br>Il Re Del mambo<br>Mambo</p>
                </div>
            </a>
        </div>
        <div class="tile-wrap">
            <a href="?title=Powell's prance&album=At Basin Street&annee=1956&interprete=Clifford Brown and Max Roach&photo=img_lp/powellsPrance.jpg&mp3=&genre1=Jazz" target="_blank">
                <img src="img_lp/powellsPrance.jpg" alt="album At Basin street de Clifford Brown et Max Roach (Jazz)" class="tile-image" />
                <div class="tile-text">
                    <h2 class="tile-title">C. Brown & M. Roach</h2>
                    <p class="tile-description">Powell's Prance<br>1956<br>At basin Street<br>Jazz</p>
                </div>
            </a>
        </div>
        <div class="tile-wrap">
            <a href="?title=Stormy Monday Blues&album=Here's The Man&annee=1962&interprete=Bobby Blue Bland&photo=img_lp/stormyMondayBlues.jpg&mp3=&genre1=Soul Blues">
                <img src="img_lp/stormyMondayBlues.jpg" alt="album Here's the man de Bobby Blue Bland (Soul Blues)" class="tile-image" />
                <div class="tile-text">
                    <h2 class="tile-title">Bobby Blue Bland</h2>
                    <p class="tile-description">Stormy Monday Blues<br>1962<br>Here's The Man<br>Soul Blues</p>
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