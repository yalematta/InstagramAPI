var s,app={settings:{},init:function(){s=this.settings,this.initalizers(),this.bindUiActions(),this.fixes(),this.animations()},bindUiActions:function(){$(window).on("scroll",function(){var a=$(window).scrollTop();$(".navbar").toggleClass("active",a>=200)}),$(".scroll").click(function(){var a=$(this).attr("href"),b=$(a).offset().top;return $("html, body").animate({scrollTop:b-50}),!1}),$(".navbar, .scroll").mouseenter(function(){$(".hidden").removeClass("hidden").addClass("animated fadeIn")})},initalizers:function(){$("#recent").pongstgrm({accessId:"497630274",accessToken:"497630274.cf0499d.68d3229347c54ab1b5f906543b0f84cc",count:4}),$("body").scrollspy({target:".navbar",offset:100}),$.stellar({horizontalScrolling:!1,verticalScrolling:!0})},fixes:function(){$(".navbar-collapse").children().children().on("click",function(){$(this).parent().parent().removeClass("in").addClass("collapse")})},animations:function(){$("#about, #quote-block, #latest, #contact").children().addClass("visually-hidden"),$("#about, #quote-block, #latest, #contact").waypoint(function(){$(this).children().removeClass("visually-hidden").addClass("animated fadeInUp")},{offset:"50%"})}};$(document).ready(function(){app.init()});