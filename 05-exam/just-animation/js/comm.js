// html페이지를 로드한 후 실행 = defer
// $(document).ready(function() {})
$(function () {
  //  modal
  //  모달창 열기
  // .list-bbs li:first-child 클릭했을 때
  $(".list-bbs li:first-child").on("click", function () {
    // modal 열기
    //.dimmed 보이게
    $("#modal").show();
  });

  // 모달창 닫기
  $("#modal .btn-close").on("click", function () {
    // modal 닫기
    $("#modal").hide();
  });

  // tabs
  // 기본 세팅
  // #tabs .sec-g에 있는 .active를 찾아서 삭제해라
  $("#tabs .sec-g").removeClass("active");
  // #tabs .sec-g에 있는 .active를 추가
  $("#tabs .sec-g:first-child").addClass("active");

  // sec-tit 클릭했을 때
  $("#tabs .sec-tit").on("click", function () {
    // 기존 .active 삭제
    $("#tabs .sec-g").removeClass(".active");
    // this (그 아이)의 부모에게 .active 추가
    $(this).parent().addClass("active");
  });
});
