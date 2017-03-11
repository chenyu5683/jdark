<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";

	request.setAttribute("basePath", basePath);
%>

<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!-- Set render engine for 360 browser -->
<meta name="renderer" content="webkit">
<meta charset="utf-8">
<title>后台管理中心</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="${basePath}assets/bootstrap3/css/bootstrap.min.css" rel="stylesheet">
<link href="${basePath}assets/Content/admin.css" rel="stylesheet">
<link href="${basePath}assets/Content/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<!--[if IE 7]> <link rel="stylesheet" href="${basePath}assets/Content/font-awesome/4.4.0/css/font-awesome-ie7.min.css"> <![endif]-->
<!--[if lte IE 8]> <link rel="stylesheet" href="${basePath}assets/Content/admin-ie.css?" /> <![endif]-->

<script src="${basePath}assets/Scripts/jquery.min.js"></script>
<script src="${basePath}assets/Scripts/jquery.form.js"></script>
<script src="${basePath}assets/bootstrap3/js/bootstrap.min.js"></script>

<link href="${basePath}assets/Content/kendo/2015.2.624/kendo.ht.common.css" rel="stylesheet" type="text/css" />
<link href="${basePath}assets/Content/kendo/2015.2.624/kendo.ht.default.css" rel="stylesheet" type="text/css" />
<!--link href="${basePath}assets/Content/kendo/2015.2.624/kendo.dataviz.min.css" rel="stylesheet" type="text/css" />
<link href="${basePath}assets/Content/kendo/2015.2.624/kendo.dataviz.default.min.css" rel="stylesheet" type="text/css" /-->
<script src="${basePath}assets/Scripts/kendo/2015.2.624/kendo.all.min.js"> </script>
<script src="${basePath}assets/Scripts/kendo/2015.2.624/kendo.aspnetmvc.min.js"> </script>
<script src="${basePath}assets/Scripts/kendo/2015.2.624/cultures/kendo.culture.zh-CN.min.js"> </script>

<script src="${basePath}assets/Scripts/admin.js"></script>
<script src="${basePath}assets/Scripts/kendo.extends.js"></script>

<script type="text/javascript">
	var basePath = '${basePath}';

	$(function(){
		if(typeof iv !="undefined" && typeof iv.init !== "undefined"){
			iv.init();
		}
	})
</script>
