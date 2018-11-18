window.onload=function(){
  var zoom = 16;
  var center = [55.69606777180014,52.30586151829958];
  var marker_position = [55.69606777180014,52.30586151829958];
  var drag = true;
	
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
	
  if(isMobile.any()){
    zoom = 17;
    var center = [55.69606777180014,52.30586151829958];
    var marker_position = [55.69606777180014,52.30586151829958];
    drag = false;
  }
  
  initMap(zoom, center, marker_position, drag);
}

function initMap(zoom,center, marker_position, drag) {
  
  ymaps.ready(function(){
    var map = new ymaps.Map("map", {
      center: center,
      zoom: zoom
    })
		
    var place = new ymaps.Placemark(
      marker_position, {
        hintContent: 'Кроссовки NCshoes',
        balloonContent: '<h4><span style="font-weight:bold;font-size:20px;color:#4a535c;">Кроссовки NCshoes</span></h4><b>Адрес:</b> Республика Татарстан, г. Набережные Челны, п. ГЭС, ТК "Комсомольский", график 9:00-17:00<br><b>Телефон:</b> сотовый: +7 (917) 777-55-55<br><b>Е-mail:</b> feedback@ncshoes.ru'
      },
      {
        iconImageHref: 'http://design-aura.ru/templates/shoes/img/locator.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -83],
        iconLayout: 'default#image',
        balloonShadow: true
      }
    );
		
    place.options.set('visible', true);
    map.geoObjects.add(place);
    map.behaviors.disable('scrollZoom');
    if(!drag){
      map.behaviors.disable('drag');
    }
		
    place.events.add('click', function (e) {
      e.get('target').options.set({iconImageHref: 'http://design-aura.ru/templates/shoes/img/locator.png'});
    });
  });
}