var count = 140;
var now = 0;
var  distance = count - now;
var countInterval;
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000* 60));
  var seconds = Math.floor(distance % (1000 * 60)/1000) ;
var start = function () {
  countInterval = setInterval(function (){
    
    Cookies.set('count',count)
    document.getElementById('timer').innerHTML = minutes + "m " + seconds + "s ";
    document.getElementsByClassName('reset')[0].disabled = false
    document.getElementsByClassName('start')[0].disabled = true
    document.getElementsByClassName('pause')[0].disabled = false
    count -=1
    Cookies.set('state','started')
    console.log('count',count)
  },1000)
  
}
var pause = function() {
  Cookies.set('state','paused')

  document.getElementsByClassName('start')[0].disabled = false
  document.getElementsByClassName('pause')[0].disabled = true
  clearInterval(countInterval)
}
var reset = function() {
  
  document.getElementsByClassName('reset')[0].disabled = true
  document.getElementById('timer').innerHTML = 120
  pause ()
  clearInterval(countInterval)
  count = 120 ;
  Cookies.set('count',count)
}
 var onLoadcounter = function(){
  previousState = Cookies.get('state')
  if (previousState === ('started')){
    start()
  }
 count = Number(Cookies.get('count'))
 document.getElementById('timer').innerHTML = count
 };