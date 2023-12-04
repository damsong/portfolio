$(document).ready(function(){
        
    //    회원가입 개인정보 동의 ------------------------------------
    
    $('.check_agree').on('click',check_agree);
    //이름이 똑같으면 배열 name=agree
    function check_agree(e){
        e.preventDefault();
                                                    //  .length => 자바스크립트 / .size(); => 제이쿼리
        var checkboxLength=$('input[type="checkbox"]').length;  //5
			            // 체크박스의 총개수
        var checkedLength=$('input[type="checkbox"]:checked').length;   //체크가 되어있는 체그박스 개
         //console.log(checkboxLength,$('input[type="checkbox"]:checked').length)
        
        if(checkboxLength != checkedLength){//체크박스의 총 개수와 체크된 개수가 not일때
            alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");
        }else{  //모드 체크 되었다면
            location.href="./join.html";   //회원가입 폼 입력 페이지로 이동
            //java script의 a태그 = /href
        }
    }

       //모두 체크/해제
    $('.allcheck').toggle(function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',true);   //체크
        // (인풋에 체크박스인 요소들) checked라는 속성에 true => 다 체크돼!
    },function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',false);   //해제
        // (인풋에 체크박스인 요소들) checked라는 속성에 false => 다 체크해제!
    });    

    
   });


/* function join_cancel(){
    history.go(-1);
}*/

















