<!-- HEADER -->
<div id="menuGauche" class="menu">
  <div class="tablecell">
    <div class="centered">
      <h1>Physique</h1>
      <a href="javascript:;" class="close"></a>
      <ul id="navPhysique">
        <li><a class="accueil" href="<?php echo $_POST['ROOT']; ?>index.html">Accueil</a></li>
        <li><a id="contenuphysique" href="<?php echo $_POST['ROOT']; ?>contenuphysique.html">Présentation</a></li>
        <li><a id="seminaires" href="<?php echo $_POST['ROOT']; ?>Seminaires.html">Séminaires</a></li>
        <li><a id="cours" href="<?php echo $_POST['ROOT']; ?>cours.html">Cours</a></li>
        <li><a id="chroniquesEparses" href="<?php echo $_POST['ROOT']; ?>chroniquesEparses.html">Chroniques éparses</a></li>
        <li>
          <ul id="sousNavPhysique">
            <li><a id="phys" href="<?php echo $_POST['ROOT']; ?>phys.html">Phys</a></li>
            <li><a id="math" href="<?php echo $_POST['ROOT']; ?>math.html">Math</a></li>
            <li><a id="info" href="<?php echo $_POST['ROOT']; ?>info.html">Info</a></li>
          </ul>
        </li>
        <li><a id="feynmania" href="<?php echo $_POST['ROOT']; ?>feynmania.html">Feynmania</a></li>
        <li><a id="wolframania" href="<?php echo $_POST['ROOT']; ?>wolframania.html">Wolframania</a></li>
        <!-- <li><a id="references" href="<?php echo $_POST['ROOT']; ?>references.html">Références</a></li> -->
      </ul>
      </div>
    </div>
</div>

<div id="menuDroite" class="menu">
  <div class="tablecell">
      <div class="centered">
        <h1>Musique</h1>
        <nav id="menuPrincipalMusique">
          <ul id="navMusique">
            <li><a class="accueil" href="<?php echo $_POST['ROOT']; ?>index.html">Accueil</a></li>
            <li><a id="contenumusique" href="<?php echo $_POST['ROOT']; ?>contenumusique.html">Présentation</a></li>
            <li><a id="musique2001" href="<?php echo $_POST['ROOT']; ?>musique2001.html">Musique 2001</a></li>
            <li><a id="crossover" href="<?php echo $_POST['ROOT']; ?>crossover.html">Crossover</a></li>
            <li><a id="chroniques" href="<?php echo $_POST['ROOT']; ?>chroniques.html">Chroniques</a></li>
            <li>
              <ul id="sousNavMusique">
                <li><a id="billetdhumeur" href="<?php echo $_POST['ROOT']; ?>billetdhumeur.html">Billets d'Humeur</a></li> <!-- => (14) -->
                <li><a id="tourdumonde" href="<?php echo $_POST['ROOT']; ?>tourdumondedemusiqueactuelle.html">Tour du monde</a></li> <!-- => (25) -->
                <li><a id="portraitscompositeurs" href="<?php echo $_POST['ROOT']; ?>portraitscompositeurs.html">Compositeurs contemporains</a></li> <!-- compositeurs actuels = portraits actuels => pareils que portraits compo (29) -->
                <li><a id="tiresdeloubli" href="<?php echo $_POST['ROOT']; ?>tiresdeloubli.html">Compositeurs négligés</a></li> <!-- revoir ses classiques => (44) -->
                <li><a id="interpretesActuels" href="<?php echo $_POST['ROOT']; ?>interpretesActuels.html">Interprètes actuels</a></li> <!-- => (7) -->
                <li><a id="grandscycles" href="<?php echo $_POST['ROOT']; ?>grandscycles.html">Genres musicaux</a></li> <!-- => (15) -->
                <li><a id="faitsDivers" href="<?php echo $_POST['ROOT']; ?>faitsDivers.html">Faits divers</a></li> <!-- => (40) -->
              </ul>
            </li>
            <li><a id="quizz" href="<?php echo $_POST['ROOT']; ?>quizz.html">Who's who ?</a></li>
            <!-- <li><a id="feuilletonsAudio" href="feuilletonsAudio.html">Auditions</a></li> -->
          </ul>
        </nav>
      </div>
    </div>
</div>