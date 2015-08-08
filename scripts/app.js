$(document).ready(function(){
  $('.r').hover( function(){
    $('body').addClass('red');
  }, function() {
    $('body').removeClass('red');
  });

  $('.o').hover( function(){
    $('body').addClass('orange');
  }, function() {
    $('body').removeClass('orange');
  });

  $('.y').hover( function(){
    $('body').addClass('yellow');
  }, function() {
    $('body').removeClass('yellow');
  });

  $('.b').hover( function(){
    $('body').addClass('blue');
  }, function() {
    $('body').removeClass('blue');
  });

  $('.g').hover( function(){
    $('body').addClass('green');
  }, function() {
    $('body').removeClass('green');
  });

  $('.i').hover( function(){
    $('body').addClass('indigo');
  }, function() {
    $('body').removeClass('indigo');
  });

  $('.v').hover( function(){
    $('body').addClass('violet');
  }, function() {
    $('body').removeClass('violet');
  });
});

peekaboo({
  titles: ["A", "AR", "ARR", "ARRA", "ARRAY", "ARRAYN", "ARRAYNB", "ARRAYNBO", "ARRAYNBOW", "RRAYNBOW", "RAYNBOW", "AYNBOW", "YNBOW", "NBOW", "BOW", "OW", "W", " " ],
  welcomeBack: "Welcome back!",
  defaultDelay: 200,
  initialDelay: 200,
  mode: "ordered"
});
