<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://www.iptv.com/UrlUtil" prefix="u"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%@include file="/assets/inc_tv.jsp"%>
<link rel="stylesheet" href="${basePath}assets/Content/common.css" type="text/css" />
<link rel="stylesheet" href="${basePath}assets/Content/videoDetails.css" type="text/css" />
<script type='text/javascript' src='${basePath}assets/Scripts/epg.util.js'></script>
<script type='text/javascript'>
	$(function() {
		// 获取焦点
		$('.btn a').on('focus', function() {
			$('.btn-p').addClass('focus');
		});
		$('.videos a').on('focus', function() {
			$('.video').addClass('focus');
		});
		$('.btn a').blur('focus', function() {
			$('.btn-p').removeClass('focus');
		});
		$('.videos a').blur('focus', function() {
			$('.video').removeClass('focus');
		});
		// 弹框
		$(".btn a").click(function() {
			$(".pop").show();
			$(".pop a").focus();
		})
		$(".pop a").click(function() {
			$(".pop").hide();
		})

		$(".videos a").click(function() {
			full_play('${DxCode}','${basePath}video/detail?id=${Id}')
		})

		$(document).on('keydown', function(e) {
			if (e.keyCode == 0x0008) { // 返回
				window.location.href = basePath + "home/index";
			}
		});

		//$('.video').css('background','url(${basePath}image/index?p=${u:urlEncode(ImageUrl)}) center center no-repeat');

		var left = $('#win-player').offset().left;
		var top = $('#win-player').offset().top;
		small_play('${DxCode}', top, left, 768, 430);
	})
</script>
</head>
<body>
	<!---->
	<div class="main">
		<div class="title">${Name}</div>
		<div class="videos">
			<a href="javascript:void(0)"></a>
			<div class="video">
				<iframe id="win-player" width="768" height="430"
					src="javascript:void(0);" marginwidth="0" marginheight="0"
					scrolling="no"></iframe>
			</div>
		</div>
		<div class="content">
			<div class="introduce">
				<h3>视频简介</h3>
				<div class="intro-text">${Description}</div>
			</div>
			<div class="position">
				<h3>联系电话：</h3>
				<div class="intro-text">${Tel}</div>
				<h3>联系地址：</h3>
				<div class="intro-text">${Address}</div>
			</div>
			<div class="btn">
				<a href="#">1111</a>
				<p class="btn-p">二维码</p>
			</div>

			<div class="pop">
				<a href="javascript:void(0)">1111</a>
				<div class="pop-con">
					<div class="pop-t">${SellerName}</div>
					<div class="code-pic">
						<img src="${basePath}image/index?p=${u:urlEncode(QrCode)}">
					</div>
					<div class="pop-notes">
						打开<span>微信</span>扫描二维码
					</div>
				</div>
			</div>

		</div>
	</div>
</body>
</html>
