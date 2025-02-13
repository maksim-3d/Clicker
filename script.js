var clickBtnElement = document.getElementById('clickBtn')
var sumElement = document.getElementById('sum')
var zElement = document.getElementById('z')
var yElement = document.getElementById('y')
var qElement = document.getElementById('q')
var yclick = document.getElementById('yclick');
var a = 0;
var sumCick = 0;
var Plus = 1;
clickBtnElement.onclick = function() {
  a = Number(localStorage.heroLevel);
  a += Plus;
  sumElement.innerHTML = a;
  localStorage.heroLevel = a;

}
yElement.onclick = function() {
  if (sumCick >= 100){
    Plus += 1;
    sumCick -= 100;
    sumElement.innerHTML = sumCick;
}
}
zElement.onclick = function(){
if (sumCick >= 1000){
  Plus += 10;
  sumCick -= 1000;
  sumElement.innerHTML = sumCick;
}
}
qElement.onclick = function() {
  if (sumCick >= 10000){
    Plus += 100;
    sumCick -= 10000;
    sumElement.innerHTML = sumCick;
}
}
uElement.onclick = function() {
  if (sumCick >= 100000){
    Plus += 1000;
    sumCick -= 100000;
    sumElement.innerHTML = sumCick;
}
}
function yClick() {
  document.getElementById('y').style.display='block';
  document.getElementById('yclick').style.display='none';
  document.getElementById('sum').style.display='none';
  document.getElementById('clickBtn').style.display='none';
  document.getElementById('x').style.display='block';
  document.getElementById('z').style.display='block';
  document.getElementById('q').style.display='block';
  document.getElementById('u').style.display='block';
  }
  function off() {
  document.getElementById('y').style.display='none';
  document.getElementById('yclick').style.display='block';
  document.getElementById('sum').style.display='block';
  document.getElementById('clickBtn').style.display='block';
  document.getElementById('x').style.display='none';
  document.getElementById('z').style.display='none';
  document.getElementById('q').style.display='none';
  document.getElementById('u').style.display='none';
  }
