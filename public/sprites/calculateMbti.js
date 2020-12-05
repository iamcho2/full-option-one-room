function calculateMbti(){
  //변수 선언
  var e = 0
  var i = 0
  var n = 0
  var s = 0
  var f = 0
  var t = 0
  var p = 0
  var j = 0

  //MBTI 계산
  if(!document.getElementById('q1').checked){
    //1번 선택
  }else{
    //2번 선택
    j++
  }

  if(!document.getElementById('q2').checked){ t++ }else{ f++ }
  if(!document.getElementById('q3').checked){ t++ }else{ f++ }
  if(!document.getElementById('q4').checked){ s++ }else{ n++ }
  if(!document.getElementById('q5').checked){ s++ }else{ n++ }
  if(!document.getElementById('q6').checked){ p++ }else{ j++ }
  if(!document.getElementById('q7').checked){ e++ }else{ i++ }
  if(!document.getElementById('q8').checked){ j++ }else{ p++ }
  if(!document.getElementById('q9').checked){ e++ }else{ i++ }
  if(!document.getElementById('q10').checked){ s++ }else{ n++ }
  if(!document.getElementById('q11').checked){ t++ }else{ f++ }
  if(!document.getElementById('q12').checked){ e++ }else{ i++ }

  //MBTI 결과
  var isE = false
  var isN = false
  var isF = false
  var isP = false
  var mbti = ""
  if(e > i){ isE = true; mbti += "e" }else{ mbti += "i" }
  if(n > s){ isN = true; mbti += "n" }else{ mbti += "s" }
  if(f > t){ ifF = true; mbti += "f" }else{ mbti += "t" }
  if(p > j){ isP = true; mbti += "p" }else{ mbti += "j" }

  console.log(mbti)

  if(mbti == "entj"){
    window.location.href = '/result_enfj';
  }else if(mbti == "enfp"){
    window.location.href = '/result_enfp';
  }else if(mbti == "entj"){
    window.location.href = '/result_entj';
  }else if(mbti == "entp"){
    window.location.href = '/result_entp';
  }else if(mbti == "esfj"){
    window.location.href = '/result_esfj';
  }else if(mbti == "esfp"){
    window.location.href = '/result_esfp';
  }else if(mbti == "estj"){
    window.location.href = '/result_estj';
  }else if(mbti == "estp"){
    window.location.href = '/result_estp';
  }else if(mbti == "infj"){
    window.location.href = '/result_infj';
  }else if(mbti == "infp"){
    window.location.href = '/result_infp';
  }else if(mbti == "intj"){
    window.location.href = '/result_intj';
  }else if(mbti == "intp"){
    window.location.href = '/result_intp';
  }else if(mbti == "isfj"){
    window.location.href = '/result_isfj';
  }else if(mbti == "isfp"){
    window.location.href = '/result_isfp';
  }else if(mbti == "istj"){
    window.location.href = '/result_istj';
  }else if(mbti == "istp"){
    window.location.href = '/result_istp';
  }
}

document.getElementById("submitButton").addEventListener("click", function(){
  calculateMbti()
});