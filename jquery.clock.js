(function($) {
    jQuery.fn.extend({
        naozhong:function(parameters)
        {
          if (this.length===0) return;
          if (typeof parameters=="number") parameters={angle:parameters};
          var returned=[];
		  var timestamp = parameters.timestamp;
		  var back = parameters.back;
		  var rand = parameters.rand;
		 
		  var date = new Date();
		  date.setTime(timestamp * 1000);
		  var h = date.getHours();
		  var m = date.getMinutes();
		  var s = date.getSeconds();
		  var md = ( s - 15 ) / 60 * 360 ;
		  var sd =  ( h - 3 ) / 12 * 360 ;
		  var fd = ( m - 15 ) / 60 * 360 ;
		
          for (var i=0,i0=this.length;i<i0;i++)
          {
            var element = this.get(i);
		 
			var width = $(element).width();
			var height = width * 1.364;
			
			var zhongxinbili_x = 213 / 420;
			var zhongxinbili_y = 337 / 573;

			if($('.miaozhen',element).length == 0)
			{
				$(element).append('<img class="miaozhen" src="http://siteapi.cctv.com/weiphp/Public/Share/miaozhen.png?v=3" />');
			}
		
			var miaozhen_width = width * 0.5;
			var miaozhen_zhongxin_bilv = 109 / 472;
		
			var miaozhen_pianyi_x = miaozhen_width * miaozhen_zhongxin_bilv;
			var miaozhen_pianyi_y = miaozhen_width * 31 / 472 / 2; // ;
			
			$('.miaozhen',element).css({
				"position" : "absolute",
				"transform-origin" : miaozhen_pianyi_x +"px "+ miaozhen_pianyi_y +"px",
				"ransform" : "rotate("+md+"deg)",
				"-ms-transform" : "rotate("+md+"deg)",
				"-moz-transform" : "rotate("+md+"deg)",
				"-webkit-transform" : "rotate("+md+"deg)",
				"-o-transform" : "rotate("+md+"deg)",
				"width" : miaozhen_width + "px",
				"left" : width * zhongxinbili_x - miaozhen_pianyi_x + "px",
				"top" : height * zhongxinbili_y  - miaozhen_pianyi_y + "px"
			});
			
			//document.title = width;
			
			if($('.fenzhen',element).length == 0)
			{
				$(element).append('<img class="fenzhen" src="http://siteapi.cctv.com/weiphp/Public/Share/fenzhen.png?v=3" />');
			}
			
			var fenzhen_width = miaozhen_width * 0.8;
			var fenzhen_zhongxin_bilv = 62 / 373;
		
			var fenzhen_pianyi_x = fenzhen_width * fenzhen_zhongxin_bilv;
			var fenzhen_pianyi_y = fenzhen_width * 18 / 373 / 2; // ;
			
			$('.fenzhen',element).css({
				"position" : "absolute",
				"transform-origin" : fenzhen_pianyi_x +"px "+ fenzhen_pianyi_y +"px",
				"ransform" : "rotate("+fd+"deg)",
				"-ms-transform" : "rotate("+fd+"deg)",
				"-moz-transform" : "rotate("+fd+"deg)",
				"-webkit-transform" : "rotate("+fd+"deg)",
				"-o-transform" : "rotate("+fd+"deg)",
				"width" : fenzhen_width + "px",
				"left" : width * zhongxinbili_x - fenzhen_pianyi_x + "px",
				"top" : height * zhongxinbili_y  - fenzhen_pianyi_y + "px"
			});
			
			if($('.shizhen',element).length == 0)
			{
				$(element).append('<img class="shizhen" src="http://siteapi.cctv.com/weiphp/Public/Share/shizhen.png?v=3" />');
			}
			
			var shizhen_width = fenzhen_width * 0.8;
			var shizhen_zhongxin_bilv = 62 / 277;
		
			var shizhen_pianyi_x = shizhen_width * shizhen_zhongxin_bilv + 4 ;
			var shizhen_pianyi_y = shizhen_width * 21 / 277 / 2; // ;
			
			$('.shizhen',element).css({
				"position" : "absolute",
				"transform-origin" : shizhen_pianyi_x +"px "+ shizhen_pianyi_y +"px",
				"ransform" : "rotate("+sd+"deg)",
				"-ms-transform" : "rotate("+sd+"deg)",
				"-moz-transform" : "rotate("+sd+"deg)",
				"-webkit-transform" : "rotate("+sd+"deg)",
				"-o-transform" : "rotate("+sd+"deg)",
				"width" : shizhen_width + "px",
				"left" : width * zhongxinbili_x - shizhen_pianyi_x + "px",
				"top" : height * zhongxinbili_y  - shizhen_pianyi_y + "px"
			});
			
			if($('.naozhongbg',element).length == 0)
			{
				$(element).append('<img class="naozhongbg" style="width:'+width+'px;" src="http://siteapi.cctv.com/weiphp/Public/Share/naozhong.png?v=3" />');
			}
			
			element.goon = true;
			 
			var ctimestamp = timestamp ;
			var st = setInterval(function(){
				if(!element.goon) return;
				
				if(rand)
				{
					timestamp = timestamp + Math.floor(Math.random()*100);	
				}
				else
				{
					timestamp = timestamp + 1;
				}
				var date = new Date();
				date.setTime(timestamp * 1000);
				var h = date.getHours();
				var m = date.getMinutes();
				var s = date.getSeconds();
				
				if( h > 12 )
				{
					h = h - 12;
				}
			 
				var md = ( s - 15 ) / 60 * 360 ;
				$(".miaozhen" , element ).rotate( {
				  angle: md ,
				  center:  [miaozhen_pianyi_x + "px", miaozhen_pianyi_y + "px"],
				  animateTo:  md ,
				  duration:1000,
				});
				
				var fd = ( m - 15 ) / 60 * 360 ;
			 
				$(".fenzhen" , element ).rotate( {
				  angle: fd + 1 ,
				  center: [fenzhen_pianyi_x + "px", fenzhen_pianyi_y + "px"],
				  animateTo: fd  + 1 ,
				  duration:1000,
				});
				
				var sd =  ( h - 3 ) / 12 * 360 ;
				
				$(".shizhen" , element ).rotate( {
				  angle: sd +  ( m / 60 * 30 ) ,
				  center: [shizhen_pianyi_x + "px", shizhen_pianyi_y + "px"],
				  animateTo: sd +  ( m / 60 * 30 ) ,
				  duration:1000,
				});
				
			},1000);
			
			element.back = function(time){
				element.goon = false;
				var st2 = setInterval(function(){
					if(element.goon) return;
					timestamp = timestamp - 100;
					if(ctimestamp - time > timestamp  )
					{
						element.goon = true;
						return;
					}
					
					var date = new Date();
					date.setTime(timestamp * 1000);
					var h = date.getHours();
					var m = date.getMinutes();
					var s = date.getSeconds();
					
					if( h > 12 )
					{
						h = h - 12;
					}
				 
					var md = ( s - 15 ) / 60 * 360 ;
					$(".miaozhen" , element ).rotate( {
					  angle: md ,
					  center:  [miaozhen_pianyi_x + "px", miaozhen_pianyi_y + "px"],
					  animateTo:  md ,
					  duration:1000,
					});
					
					var fd = ( m - 15 ) / 60 * 360 ;
				 
					$(".fenzhen" , element ).rotate( {
					  angle: fd + 1 ,
					  center: [fenzhen_pianyi_x + "px", fenzhen_pianyi_y + "px"],
					  animateTo: fd  + 1 ,
					  duration:1000,
					});
					
					var sd =  ( h - 3 ) / 12 * 360 ;
					
					$(".shizhen" , element ).rotate( {
					  angle: sd +  ( m / 60 * 30 ) ,
					  center: [shizhen_pianyi_x + "px", shizhen_pianyi_y + "px"],
					  animateTo: sd +  ( m / 60 * 30 ) ,
					  duration:1000,
					});
					
				},100);
				return 1;
			}
			
			returned.push( element );
          }
		  
          return returned;
        }
    });
})(jQuery);
