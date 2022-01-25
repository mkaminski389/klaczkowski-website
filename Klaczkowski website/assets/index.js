
ScrollReveal().reveal('body' , { delay: 300 });
ScrollReveal().reveal('.scroll-animation', { delay: 200 });
$('a.salonP').click(function changeGallery () {
    $('p.targetP').text("SALON")});

  $('a.bathP').click(function changeGallery () {
    $('p.targetP').text("ŁAZIENKA")});

  $('a.topP').click(function changeGallery () {
    $('p.targetP').text("SUFITY")});

  $('a.floorP').click(function changeGallery () {
    $('p.targetP').text("PODŁOGA")});

  $('a.wallP').click(function changeGallery () {
    $('p.targetP').text("PŁYTY")});

  $('a.kitchenP').click(function changeGallery () {
    $('p.targetP').text("KUCHNIA")});

// Kitchen gallery
  // Funkcja umożliwiająca zmianę jednego zdjęcia po kolei
      let kitch = 1;                                                                    // Zmienia potrzebna do implementacji
      function setPic (){
      let corKitchen = kitch++;                                                         // Implementacja
      String(corKitchen);                                                               // Konwersja z number na string
      console.log(corKitchen);                                                          // Sprawdzenie implementacji
      $('img.pic' + corKitchen).attr("src" , "assets/kitchen/k" + corKitchen +".jpg" ); //Połączenie implementacji z nazwą klasy oraz z nazwą zdjęcia
      };
  // Pętla zapewniająca odpowiednią zmianę wszystkich zdjęć za jednym razem
      $('a.kitchenP').click(function changeGallery () {                                 //Namierzenie przycisku do zmiany galerii
      for (let i = 0; i<6; i++) {                                                       //Nadanie pętli umożliwiające wielorazowe użycie funkcji
      setPic(); 
      }
// Wyzerowanie kitch do ponownej implementacji
      if (kitch = 7) {
      let t;
      kitch = t;
      let r = 1;
      kitch = r;
    }
    });
//Analogicznie robię to samo dla innych kategorii
// Bathroom gallery
    let bath = 1;
    function setBath () {
    let corBath = bath++;
    String(corBath);
    console.log(corBath);
    $('img.pic' + corBath).attr("src" , "assets/bath/bath" + corBath +".jpg");
    };
    $('a.bathP').click(function changeBath () {
    for (let a = 0; a<6; a++) {
    setBath (); 
    }
   if (bath = 7) {
    let bucketBath;
    bath = bucketBath;
    let secondBucketBath = 1;
    bath = secondBucketBath;
  }
  });
// Salon gallery 
  let salon = 1;
  function setSalon () {
  let corSalon = salon++;
  String(corSalon);
  console.log(corSalon);
  $('img.pic' + corSalon).attr("src" , "assets/salon/salon" + corSalon + ".jpg");
  };
  $('a.salonP').click(function changeSalon () {
  for (let a = 0; a<6; a++) {
    setSalon();
  }
  if (salon = 7) {
    let bucketSalon;
    salon = bucketSalon;
    let secondBucketSalon = 1;
    salon = secondBucketSalon;
  }
  });


 