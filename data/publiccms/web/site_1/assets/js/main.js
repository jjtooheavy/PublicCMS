$(function(){
	// 手机页面导航效果
	$('.nav-icon').click(function(){$('header nav>ul').fadeToggle();return false;});
	var headerHeight=$('header').height();
	$(window).resize(function(){
		$('header nav>ul').removeAttr('style');
	});
	// 头部动态效果
	$(window).scroll(function(){
		if(headerHeight-$(window).scrollTop()>0){
			$('header').removeClass('fixed-position');
			$('main').removeClass('no-header');
		} else {
			$('header').addClass('fixed-position');
			$('main').addClass('no-header');
		}
	});
	$('.wechat').click(function(){
		$('.dialog').show();
	});
	$('.dialog .box').click(function(){
		$('.dialog').hide();
	});
	$('.dialog .background').click(function(){
		$('.dialog').hide();
	});
	// 登陆状态显示
	if (CMS_PATH) {
		$.getJSON(CMS_PATH+'loginStatus', function(data){
			if(data.id){
				$('.user').hide();
				$('.user-logout .nickname').text(data.nickname);
				$('.user-logout').show();
				if(data.superuserAccess&&true==data.superuserAccess){
					$('.user-logout .master').show();
				}
			}			
		});
	}
	// 登陆链接增加返回地址
	if(0>window.location.href.indexOf('returnUrl')){
		$('.tools .user-login a').each(function(){
			$(this).prop('href',$(this).prop('href')+'?returnUrl='+encodeURIComponent(window.location.href));
		});
	}
	// 首页焦点图
	$("#index-focus").owlCarousel({
	    items : 2,
	    itemsDesktop : false,
	    itemsDesktopSmall : false,
	    itemsTablet : [768,1],
	    itemsTabletSmall: false,
	    itemsMobile : false,
	    autoPlay : 4000,
	    stopOnHover : true,
	    paginationSpeed : 1000,
	    goToFirstSpeed : 2000,
	    autoHeight : false,
	    transitionStyle:"fade",
	    lazyLoad:true
	});
	// 右侧图片推荐
	$("#right-images").owlCarousel({
	    items : 1,
	    itemsDesktop : false,
	    itemsDesktopSmall : false,
	    itemsTablet : [1230,3],
	    itemsTabletSmall: [840,2],
	    itemsMobile : [420,1],
	    autoPlay : 4000,
	    stopOnHover : true,
	    paginationSpeed : 1000,
	    autoHeight : false,
	    goToFirstSpeed : 2000,
	    transitionStyle:"fade",
	    lazyLoad:true
	});
});