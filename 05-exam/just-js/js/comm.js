// html 페이지를 로드한 후 실행
// $(document).ready(function() {})
$(function () {
    // gnb
    // 변수 선언
    const $gnb = $('#gnb');
    const $gnbDepth1 = $gnb.find('.depth1 > li');

    $gnbDepth1.on('mouseenter', function () {
        $(this).find('.depth2').slideDown(500);
        // key 값이 2개 이상일 때는 {}로 묶어서 처리
        // {key1: value1, key2: value2}
        $(this).children('a').css({
            'background-color': '#333',
            color: '#fff',
        });
        // key 값이 1개일 때는 {} 생략 가능
        // key, value
        // $(this).children('a').css('background-color', '#333');
    });

    $gnbDepth1.on('mouseleave', function () {
        $(this).find('.depth2').slideUp(500);
        $(this).children('a').css({
            backgroundColor: '#fff',
            color: '#333',
        });
    });

    // modal
    const $modal = $('#modal');
    // 모달창 열기
    // .list-bbs li:first-child 클릭했을 때
    $('.list-bbs li:first-child').on('click', function () {
        // modal 열기
        // #modal 보이게
        $modal.show();
    });
    // #modal .btn-close 클릭했을 때
    // $('#modal .btn-close')
    $modal.find('.btn-close').on('click', function () {
        // modal 닫기
        // #modal 감추기
        $modal.hide();
    });

    // tabs
    const $tabs = $('#tabs');

    // 기본셋팅
    // #tabs .sec-g 에 있는 .active 를 찾아서 삭제해라
    $tabs.find('.sec-g').removeClass('active');
    // #tabs .sec-g:first-child 에 .active 추가
    $tabs.find('.sec-g:first-child').addClass('active');

    // .sec-tit 클릭했을 때
    $tabs.find('.sec-tit').on('click', function () {
        // 기존에 있던 .active 삭제
        $tabs.find('.sec-g').removeClass('active');
        // this(그 아이)의 부모에게 .active 추가
        $(this).parent().addClass('active');
    });
});
