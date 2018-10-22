	
	$(function(){
		// fullpage的animate效果
			$('#dowebok').fullpage({
				'navigation': true,
				afterLoad: function(anchorLink, index){
					if(index == 1){
						$('.section1').find('.s1_xiazai').animate({
							right: '8px'
						}, 500, 'easeOutExpo');
					}
					if(index == 2){
						$('.section2').find('.sec2_dong').animate({
							left: '35px'
						}, 500, 'easeOutExpo');
						$('.section2').find('.s_xiazai').animate({
							right: '8px'
						}, 500, 'easeOutExpo');
					}
					if(index == 3){
						$('.section3').find('.sec3_dong').animate({
							left: '35px'
						}, 500, 'easeOutExpo');
						$('.section3').find('.s_xiazai').animate({
							right: '8px'
						}, 500, 'easeOutExpo');
						$('.section3').find('img').fadeIn(1500);
					}
					if(index == 4){
						$('.section4').find('.sec4_dong').animate({
							left: '35px'
						}, 500, 'easeOutExpo');
						$('.section4').find('.s_xiazai').animate({
							right: '8px'
						}, 500, 'easeOutExpo');
					}
				},
				onLeave: function(index, direction){
					if(index == 1){
						$('.section1').find('.s1_xiazai').animate({
							right: '-10%'
						}, 500, 'easeOutExpo');
					}
					if(index == '2'){
						$('.section2').find('.sec2_dong').animate({
							left: '-10%'
						}, 500, 'easeOutExpo');
						$('.section2').find('.s_xiazai').animate({
							right: '-100px'
						}, 500, 'easeOutExpo');
					}
					if(index == '3'){
						$('.section3').find('.sec3_dong').animate({
							left: '-10%'
						}, 500, 'easeOutExpo');
						$('.section3').find('.s_xiazai').animate({
							right: '-100px'
						}, 500, 'easeOutExpo');
						$('.section3').find('img').fadeOut(1500);
					}
					if(index == '4'){
						$('.section4').find('.sec4_dong').animate({
							left: '-10%'
						}, 500, 'easeOutExpo');
						$('.section4').find('.s_xiazai').animate({
							right: '-10%'
						}, 500, 'easeOutExpo');
					}
				}
			});
			
		// 注册的动态选择
			$('#sjzc').click( function() {
				$('#sjzc').css('backgroundColor','#2E5472');
				$('#gxzc').css('backgroundColor','#38A4D6');
				$('#form1').addClass('formhidden');
				$('#form2').removeClass('formhidden');
			});
			$('#gxzc').click(function() {
				$('#sjzc').css('backgroundColor','#38A4D6');
				$('#gxzc').css('backgroundColor','#2E5472');
				$('#form2').addClass('formhidden');
				$('#form1').removeClass('formhidden');
			});

	});