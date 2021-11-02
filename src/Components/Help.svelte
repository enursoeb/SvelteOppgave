<script>
</script>

<div>
    Siden består av to hovedelementer: <b>Filmoversikt</b> og <a href="#moviesearch"><b>Finn filmer</b> </a>
</div>

<h3>Filmoversikt</h3>
<div>
    Filmer kan filtreres etter hvilke hyller man har registrert de på. <br />
    Dette gjøres ved å velge hylle i nedtrekksmenyen under 'Filtrer samling etter
    hylle'.
</div>
<img class="image" src="Images/DropDown.png" alt="velg hylle" />

<div>
    Hvis du ønsker å ikke filtrere på hylle, velg <b>Alle</b> i nedtrekkslista.
</div>
<img class="image" src="Images/DropDownAll.png" alt="vis alle filmer" />

<div>
    Etter at man har valgt foretrukket visningsmetode, vil det for hver film i <br>
    samlingen vises  informasjon og bilde av filmplakaten. <br /> For hver film kan man velge å
    knytte filmen til ny hylle ved å klikke <edit class="edit">endre hylle-knappen </edit> <br>
    eller fjerne filmen ved å klikke <delete class="deleteMovie">slett-knappen.</delete>.

    Ved klikk på <b>endre hylle</b>, vil det dukke opp en dialogboks. Se <a href="#modal">her </a> for instruksjoner om hvordan
    den virker.


</div>
<img class="image" src="Images/MovieOptions.png" alt="movieoptions" />

<a name="moviesearch"><h3 id="findmovies">Finn filmer</h3></a>
<div>
Dette er siden hvor man kan legge til nye filmer i sin samling. <br>
Plasser markøren i søkefeltet og skriv inn tittel på film du ønsker å finne <br> 
(det er foreløpig ikke støtte for avansert søk.) <br>Etter at man har søkt ved å klikk på søk-knappen, 
vil det vises filminfo for alle treff, <br> tilsvarende oversikt-siden.
Klikk <edit class="edit"> grønn knapp </edit> for å flytte en film til samlingen, 
eller <br> <delete class="deleteMovie">rød knapp</delete> for å fjerne film fra søkeresultater. <br>
</div>


<img class="image" src="Images/MovieSearch.png" alt="moviesearch" />


<a name="modal">

<h4>Endre hylle / Flytt til samling</h4>


</a>


<style>
    .image {
        display: inline-block;
        align-content: center;
        border: 5px solid #555;
        margin-top: 12px;
        margin-bottom: 12px;
        max-width: 420px;
        max-height: 380px;
    }

    .edit {
        color: green;
    }

    .deleteMovie {
        color: red;
    }
</style>
