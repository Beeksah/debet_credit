function VK_Widget_Init(){
    document.getElementById('vk_groups').innerHTML = "";
    var vk_width = document.getElementById('vk_widget').clientWidth;
   //VK.Widgets.Group("vk_groups", {mode: 0, width: vk_width, height: "241", color1: "2B2B2B", color2: "FFFFFF", color3: "2B2B2B"}, 26292363);
    
   VK.Widgets.Group("vk_groups", {mode: 3, width: vk_width, height: "250"}, 171112525);
};
window.addEventListener('load', VK_Widget_Init, false);
window.addEventListener('resize', VK_Widget_Init, false);

var initOK = function(){
    var id = "ok_group_widget";
    var did = "59248406822964";
    var ok_width = document.getElementById('ok_widget').clientWidth;
    var st = '{"width":'+ok_width+',"height":240}';
    document.getElementById('ok_group_widget').innerHTML = "";
    OK.CONNECT.insertGroupWidget(id,did,st);

}

var f = function(d, id, did, st) {
    var js = d.createElement("script");
    js.src = "https://connect.ok.ru/connect.js";
    js.onload = js.onreadystatechange = function () {
      if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
        if (!this.executed) {
        this.executed = true;
        setTimeout(function () {
          OK.CONNECT.insertGroupWidget(id,did,st);
        }, 0);
      }
    }
  };
    d.documentElement.appendChild(js);
  }
f(document);
window.addEventListener('load', initOK, false);
window.addEventListener('resize', initOK, false);

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

$(".regular").slick({
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:"<button class='a-left control-c prev slick-prev page previous-page shadow' rel='prev'><img src='assets/img/arrow-right.svg'></button>",
  nextArrow:"<button class='a-right control-c next slick-next page next-page shadow' rel='prev'><img src='assets/img/arrow-right.svg'></button>"
});