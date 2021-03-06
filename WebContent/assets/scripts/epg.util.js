var epgdomain = typeof Authentication == "undefined" ? "" : Authentication.CTCGetConfig("EPGDomain");
var host = epgdomain.replace(/(http:\/\/(\w|\.|:)*\/)(.*)/g, '$1');

function checkPlat(){
	if(epgdomain.indexOf("EPG") != -1){
		return 'hw';
	}else if(epgdomain.indexOf("iptvepg") != -1){
		return 'zte';
	}
}

function small_play(code,top,left,width,height){
	if(typeof top == "undefined"){
		//top = 0;
		top = $('#win-player').offset().top;
	}
	if(typeof left == "undefined"){
		//left = 0;
		left = $('#win-player').offset().left;
	}
	if(typeof width == "undefined"){
		width = 620;
	}
	if(typeof height == "undefined"){
		height = 313;
	}

	var type = checkPlat();
	$('.play .vid').find('img').hide();

	if(type == 'hw'){
		var urlhw = host + "EPG/jsp/tools/playControl/playUrlInVas.jsp?CODE="+code+"&PLAYTYPE=1&CONTENTTYPE=0&BUSINESSTYPE=1&SPID=20001041&USERID=&USERTOKEN=";

		$.get(urlhw, {}, function(data) {
			data = jQuery.parseJSON(data);
			var playurl = data.retDesc.replace(/.*http/, "http");

			var nurl = basePath + "video/player?mediatype=1&playurl=" + escape(playurl) + "&left=" + left + "&top=" + top + "&width="+width+"&height="+height;
			$("#win-player").attr("src", nurl);
		})
	}else{
        var urlzte = host + "iptvepg/frame262/small_play.jsp?mediatype=1&playcode="+code+"&left="+left+"&top="+top+"&width="+width+"&height="+height+"&isloop=0";
		$("#win-player").attr("src", urlzte);
	}

	if(typeof playCode != "undefined"){
		playCode = code;
	}
}

function full_play(code,backurl){
	$("#win-player").attr("src","");

    var backUrl=basePath+"home/index";
    if(typeof backurl != "undefined"){
    	backUrl = backurl;
    }

	var type = checkPlat();
	if(type=='hw'){
		var urlhw = host + "EPG/jsp/tools/playControl/play_pageControl.jsp?CODE="+code+"&PROGID=&PLAYTYPE=1&CONTENTTYPE=0&BUSINESSTYPE=1&PREVIEWFLAG=1&TYPE_ID=&FATHERSERIESID=-1&BOOKMARKTIME=0&SPID=20001041&ISAUTHORIZATION=0&PREVIEWTIME=0&BACKURL="+backUrl+"&ISSWITSONG=0&CONVERTIME=60";
		window.location.href = urlhw;
	}else{
		var urlzte = host + "iptvepg/frame262/uniform_play.jsp?telecomcode="+code+"&playtype=0&backurl="+backUrl;
		window.location.href = urlzte;
	}
}