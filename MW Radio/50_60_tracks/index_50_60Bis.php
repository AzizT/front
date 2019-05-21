<?php
require_once("../include/header.php");
require_once("../include/init.php");

if(isset($_GET['annee'])):

    $resultat = $bdd->prepare("SELECT * FROM tracks WHERE annee = :annee");
    $resultat->bindValue(':annee', $_GET['annee'], PDO::PARAM_STR);
    $resultat->execute();
    
    $tracks = $resultat->fetch(PDO::FETCH_ASSOC);
?>

<?php
        if(empty($_GET))
        {
    ?>

    <h1>50' 60' Albums</h1>

    <div class="container">
        
        
        <div class="tile-wrap">
            <a href="#">
                <img src="<?= $tracks['photo'] ?>" alt="<?= $tracks['album'] . $tracks['genre1'] ?>"  class="tile-image" />
                <div class="tile-text">
                    <h2 class="tile-title"><?= $tracks['title'] ?></h2>
                    <p class="tile-description"><?= $tracks['interprete'] . '<br>' . $tracks['annee'] . '<br>' . $tracks['album'] . '<br>' . $tracks['genre1'] ?></p>
                </div>
            </a>
        </div>
    </div>

    <?php
        } else {
    ?>

    <!-- ***********************************************les éléments random qui doivent apparaitrent après selection d' un album********************************* -->

    <h1><?php echo $interprete; ?></h1>

    <p class="year"><?php echo $annee; ?></p>

    <p class="genre"><?php echo $genre1; ?></p>
    
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
                            href=<?php echo $mp3 ?> ><span class="titre_album"><?php echo $album; ?></span></a></div>
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
    <section class="container col-md-12">

            <div class="col-md-5">
            
            <p class="personnel"><?php echo $musician1; ?></p>
            <p class="personnel"><?php echo $musician2; ?></p>
            <p class="personnel"><?php echo $musician3; ?></p>
            <p class="personnel"><?php echo $musician4; ?></p>
            <p class="personnel"><?php echo $musician5; ?></p>
            <p class="personnel"><?php echo $musician6; ?></p>
            
            </div>

            <div class="col-md-5 mt-3">

            <img src="<?php echo $photo; ?>" alt="" class="image-random" />

            </div>
                
    </section>

    <!-- *******************************************fin de la section infos + image *********************************** -->

    <!-- **********************************************début de la zone commentaire************************************ -->
    <section class="container-fluid commentaire">
    <div class="form-group text-center">
    <label for="comment">Laissez un commentaire</label>
        <textarea class="form-control col-md-6 mx-auto comment" id="comment" rows="1" placeholder="..."></textarea>
    </div>
    </section>
    <!-- **********************************************fin de la zone commentaire*************************************** -->
    

    

    <!-- **************************************************************************fin de l' album aléatoire*************************************************************************** -->

    <?php
        }
    ?>
<?php
 endif;
?>
   
    <?php
require_once("../include/footer.php");
?>