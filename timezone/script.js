var update = function () {
  // Set Timezones
  currentTime = moment(new Date());
  orlandoTime = moment.tz("America/Los_Angeles");
  kielTime = orlandoTime.clone().tz("America/Puerto_Rico");
  dubaiTime = orlandoTime.clone().tz("Europe/Madrid");
  bogotaTime = orlandoTime.clone().tz("America/Mexico_City").subtract(1, 'hour');
  chicagoTime = orlandoTime.clone().tz("Europe/Kiev");
  torontoTime = orlandoTime.clone().tz("Europe/Moscow");
  dhakaTime = orlandoTime.clone().tz("Asia/Dhaka");
  londonTime = orlandoTime.clone().tz("Europe/London");
  aguadillaTime = orlandoTime.clone().tz("America/Puerto_Rico");
  
  // Orlando
  $('.location-orlando .time-24 .hour').html(orlandoTime.format('HH'));
  $('.location-orlando .time-24 .minute').html(orlandoTime.format('mm'));
  $('.location-orlando .time-12').html(orlandoTime.format('LT'));
  $('.location-orlando .day').html(orlandoTime.format('ddd.'));
  $('.location-orlando .date').html(orlandoTime.format('Do'))
 
  // Kiel
  $('.location-kiel .time-24 .hour').html(kielTime.format('HH'));
  $('.location-kiel .time-24 .minute').html(kielTime.format('mm'));
  $('.location-kiel .time-12').html(kielTime.format('LT'));
  $('.location-kiel .day').html(kielTime.format('ddd.'));
  $('.location-kiel .date').html(kielTime.format('Do'))
  
  // Dubai
  $('.location-dubai .time-24 .hour').html(dubaiTime.format('HH'));
  $('.location-dubai .time-24 .minute').html(dubaiTime.format('mm'));
  $('.location-dubai .time-12').html(dubaiTime.format('LT'));
  $('.location-dubai .day').html(dubaiTime.format('ddd.'));
  $('.location-dubai .date').html(dubaiTime.format('Do'))
  
  // Bogota
  $('.location-bogota .time-24 .hour').html(bogotaTime.format('HH'));
  $('.location-bogota .time-24 .minute').html(bogotaTime.format('mm'));
  $('.location-bogota .time-12').html(bogotaTime.format('LT'));
  $('.location-bogota .day').html(bogotaTime.format('ddd.'));
  $('.location-bogota .date').html(bogotaTime.format('Do'))
  
  // Chicago
  $('.location-chicago .time-24 .hour').html(chicagoTime.format('HH'));
  $('.location-chicago .time-24 .minute').html(chicagoTime.format('mm'));
  $('.location-chicago .time-12').html(chicagoTime.format('LT'));
  $('.location-chicago .day').html(chicagoTime.format('ddd.'));
  $('.location-chicago .date').html(chicagoTime.format('Do'))
  
  // Toronto
  $('.location-toronto .time-24 .hour').html(torontoTime.format('HH'));
  $('.location-toronto .time-24 .minute').html(torontoTime.format('mm'));
  $('.location-toronto .time-12').html(torontoTime.format('LT'));
  $('.location-toronto .day').html(torontoTime.format('ddd.'));
  $('.location-toronto .date').html(torontoTime.format('Do'));
  
  // Dhaka
  $('.location-dhaka .time-24 .hour').html(dhakaTime.format('HH'));
  $('.location-dhaka .time-24 .minute').html(dhakaTime.format('mm'));
  $('.location-dhaka .time-12').html(dhakaTime.format('LT'));
  $('.location-dhaka .day').html(dhakaTime.format('ddd.'));
  $('.location-dhaka .date').html(dhakaTime.format('Do'))
  
  // London
  $('.location-london .time-24 .hour').html(londonTime.format('HH'));
  $('.location-london .time-24 .minute').html(londonTime.format('mm'));
  $('.location-london .time-12').html(londonTime.format('LT'));
  $('.location-london .day').html(londonTime.format('ddd.'));
  $('.location-london .date').html(londonTime.format('Do'));
  
  // Aguadilla
  $('.location-aguadilla .time-24 .hour').html(aguadillaTime.format('HH'));
  $('.location-aguadilla .time-24 .minute').html(aguadillaTime.format('mm'));
  $('.location-aguadilla .time-12').html(aguadillaTime.format('LT'));
  $('.location-aguadilla .day').html(aguadillaTime.format('ddd.'));
  $('.location-aguadilla .date').html(aguadillaTime.format('Do'))
};

// Update Time
$(function(){
  update();
  setInterval(update, 1000);
});




// Toggle Switch
var highlightBtn = $('#switch');
var locationContainer = $('.location');
var locationBg = $('.bg');

function toggleView() {
  locationBg.toggleClass('bg-img');
  locationContainer.toggleClass('white');
}

toggleView();

highlightBtn.click(function() {
  toggleView();
});
