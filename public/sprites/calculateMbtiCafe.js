function calculateMbtiCafe(){
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
  if(!document.getElementById('q1_cafe').checked){
    //1번 선택
  }else{
    //2번 선택
    j++
  }

  if(!document.getElementById('q2_cafe').checked){ t++ }else{ f++ }
  if(!document.getElementById('q3_cafe').checked){ t++ }else{ f++ }
  if(!document.getElementById('q4_cafe').checked){ s++ }else{ n++ }
  if(!document.getElementById('q5_cafe').checked){ s++ }else{ n++ }
  if(!document.getElementById('q6_cafe').checked){ p++ }else{ j++ }
  if(!document.getElementById('q7_cafe').checked){ e++ }else{ i++ }
  if(!document.getElementById('q8_cafe').checked){ j++ }else{ p++ }
  if(!document.getElementById('q9_cafe').checked){ e++ }else{ i++ }
  if(!document.getElementById('q10_cafe').checked){ s++ }else{ n++ }
  if(!document.getElementById('q11_cafe').checked){ t++ }else{ f++ }
  if(!document.getElementById('q12_cafe').checked){ e++ }else{ i++ }
  
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
      window.location.href = '/result_enfj_cafe';
    }else if(mbti == "enfp"){
      window.location.href = '/result_enfp_cafe';
    }else if(mbti == "entj"){
      window.location.href = '/result_entj_cafe';
    }else if(mbti == "entp"){
      window.location.href = '/result_entp_cafe';
    }else if(mbti == "esfj"){
      window.location.href = '/result_esfj_cafe';
    }else if(mbti == "esfp"){
      window.location.href = '/result_esfp_cafe';
    }else if(mbti == "estj"){
      window.location.href = '/result_estj_cafe';
    }else if(mbti == "estp"){
      window.location.href = '/result_estp_cafe';
    }else if(mbti == "infj"){
      window.location.href = '/result_infj_cafe';
    }else if(mbti == "infp"){
      window.location.href = '/result_infp_cafe';
    }else if(mbti == "intj"){
      window.location.href = '/result_intj_cafe';
    }else if(mbti == "intp"){
      window.location.href = '/result_intp_cafe';
    }else if(mbti == "isfj"){
      window.location.href = '/result_isfj_cafe';
    }else if(mbti == "isfp"){
      window.location.href = '/result_isfp_cafe';
    }else if(mbti == "istj"){
      window.location.href = '/result_istj_cafe';
    }else if(mbti == "istp"){
      window.location.href = '/result_istp_cafe';
    }
  }
  
  document.getElementById("submitButtonCafe").addEventListener("click", function(){
    calculateMbtiCafe()
  });


  
 