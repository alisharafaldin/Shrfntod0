
// function initMap() {
//     var sudan = {lat:12.862807 , lng: 30.217636};
//     var map = new google.maps.Map(document.getElementById("map"), {zoom:4, center:sudan});
//     var marker = new google.maps.Marker({position: sudan, map:map})
// }

// التنقل بسلاسة فس أقسام الموقع
$("#navbar a, .btn").on("click", function(event){
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate({scrollTop: $(hash).offset().top -100}, 800)
    }
});

  // شفافية النافبار
  window.addEventListener("scroll", function(){
    if(window.scrollY > 150){
        this.document.querySelector("#navbar").style.opacity = 0.7;
    } else {
        this.document.querySelector("#navbar").style.opacity = 1;
    }
  })