$(function(){
	$(".myaccount-btn").on("mouseover", function(e){
   $(this).next(".myaccount-content").show();

    $(document).one("mouseover", function(){
        $(".myaccount-content").hide();
    });
    e.stopPropagation();
});
$(".myaccount-content").on("mouseover", function(e){
    e.stopPropagation();
});
//我的账户下拉效果
$(".menu-section>ul>li").on("mouseover", function(e){
   $(this).find(".sub-menu").show();

    $(document).one("mouseover", function(){
        $(".sub-menu").hide();
        $(".menu-section>ul>li a").removeClass("active");
    });
    e.stopPropagation();
});
$(".sub-menu").on("mouseover", function(e){
	e.stopPropagation();
	 $(this).prev("a").addClass("active");
});
//首页1菜单效果	
$(".menu-section02 .sub-menu>li").on("mouseover", function(e){
   $(this).find("ul").show();
   $(this).children("a").addClass("active");
   $(this).parents(".sub-menu").prev(".sub-menu-btn").addClass("active");
   
    $(document).one("mouseover", function(){
        $(".menu-section02 .sub-menu>li>ul").hide();
        $(".menu-section02 .sub-menu>li>a").removeClass("active");

    });
    e.stopPropagation();
});
$(".menu-section02 .sub-menu>li").siblings("li").mouseover(function(){
	$(this).siblings("li").find("ul").hide();
   $(this).siblings("li").children("a").removeClass("active");
})
$(".menu-section02 .sub-menu>li>ul").on("mouseover", function(e){
	e.stopPropagation();
	$(this).parents(".sub-menu").prev(".sub-menu-btn").addClass("active");
});
//首页2菜单效果
})
