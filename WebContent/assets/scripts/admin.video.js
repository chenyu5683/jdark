iv = {
	init:function(){
		this.bind();
		this.getInfo();
		
		$('#btn-add').click(function(){
			iv.edit();
		})
		$('#btn-edit').click(function(){
			var param = $("#grid").gridSelectedCols("Id");
			if(param.Id.length >0) iv.edit(param.Id[0]);
		})
		$('#btn-del').click(function(){
			iv.delete();
		})
		$('#btn-online').click(function(){
			iv.online();
		})
		$('#btn-offline').click(function(){
			iv.offline();
		});
		$('#btn-detail').click(function(){
			var param = $("#grid").gridSelectedCols("Id");
			if(param.Id.length >0) iv.workOrderDetail(param.Id[0]);
		});
	},
	bind:function(){
		$("#grid").kendoGrid({
	        columns: [
	        {
	            title: "序号",
	            width: "80px",
	            field: "Id",
	            encoded: false,
				attributes:{ 'class':'center'},
				filterable:false,
				sortable:false,
				template: "<span class='row-number'></span>" 
	        },
	        {
	            title: "视频编号",
	            width: "120px",
	            field: "Code",
	            encoded: false,
				attributes:{ 'class':'center'}
	        },
	        {
	            title: "视频名称",
	            width: "165px",
	            field: "Name",
	            encoded: false
	        },
	        {
	            title: "所属商家",
	            width: "120px",
	            field: "SellerKeyId",
	            encoded: false,
				attributes:{ 'class':'center'},
				values:sellers
	        },
	        {
	            title: "商家家服网ID",
	            width: "120px",
	            field: "SellerId",
	            encoded: false,
				attributes:{ 'class':'center'}
	        },
	        {
	            title: "省",
	            width: "75px",
	            field: "Province",
	            encoded: false,
				attributes:{ 'class':'center'},
				values: provinces
	        },
	        {
	            title: "城市",
	            width: "75px",
	            field: "City",
	            encoded: false,
				attributes:{ 'class':'center'},
				values: provinces
	        },
	        {
	            title: "区域",
	            width: "75px",
	            field: "Area",
	            encoded: false,
				attributes:{ 'class':'center'},
				values: provinces
	        },
	        {
	            title: "视频状态",
	            width: "100px",
	            field: "Status",
	            encoded: false,
				attributes:{ 'class':'center text-danger'},
				values: videoStatus
	        },
	        {
	            title: "视频分类",
	            width: "100px",
	            field: "CategoryId",
	            encoded: false,
				attributes:{ 'class':'center'},
				values:category
	        },
	        {
	            title: "视频收费",
	            width: "100px",
	            field: "CostFZ",
	            encoded: false,
				attributes:{ 'class':'center'},
				values:costFZ
	        },
	        {
	            title: "到期时间",
	            width: "145px",
	            field: "EndDate",
	            encoded: false,
				attributes:{ 'class':'center'},
				format:'{0:yyyy-MM-dd HH:mm:ss}'
	        },
	        {
	            title: "电信code",
	            width: "160px",
	            field: "DxCode",
	            encoded: false
	        },
	        {
	            title: "工单ID",
	            width: "160px",
	            field: "CorrelateID",
	            encoded: false
	        }],
			page:1,
	        filterable: true,
	        selectable: "Multiple, Row",
	        scrollable: true,
	        sortable:true,
	        resizable:true,
			pageable: {
				"refresh": true,
				"autoBind": false,
				"input": true,
				"buttonCount": 10
			},
			autoBind:false,
	        dataSource: createDataSource(basePath + 'admin/video/videoList',{
				EndDate: {type: "date", parse: function(value) { return new Date(value);}},
				VedioCount: {type: "number"},
				Province: {type: "number"},
				SellerKeyId:{type: "number"},
				CategoryId:{type: "number"},
				Status:{type: "number"},
				CostFZ:{type: "number"} 
			}),
			dataBound:function(){
				var rows = this.items();  
                var page = this.pager.page() - 1;  
                var pagesize = this.pager.pageSize();  
                $(rows).each(function () {  
                    var index = $(this).index() + 1 + page * pagesize;  
                    var rowLabel = $(this).find(".row-number");  
                    $(rowLabel).html(index);  
                });  	
			}
	    });	
	},
	getInfo:function(){
	    var grid = $('#grid').data('kendoGrid');
	    grid.dataSource.filter({});
	},
	bindSellerInfo:function(id){
		$.get(basePath + 'admin/seller/getSeller',{Id:id},function(data){
			$('#txt-sel-code').val(data.Code);
			$('#txt-sel-tel').val(data.Tel);
			$('#txt-sel-sid').val(data.SellerId);
			$('#txt-sel-addr').val(data.Address);
			$('#txt-sel-sdate').val(new Date(data.SetUpDate).format('yyyy-MM-dd'));

			$('input[name="IsInstall"]').prop('checked','false');
			$('input[value="'+data.IsInstall+'"][name="IsInstall"]').prop('checked','true');
		});
	},
	bindDropDownList:function(){
		$('#txt-sel-name').kendoDropDownList({
			dataTextField: "text",
			dataValueField: "value",
			optionLabel:'==请选择商家==',
			filter: "contains",
			dataSource: createDataSource(basePath+'admin/video/sellerOptions',{}),
			change:function(){
				var id = $('#txt-sel-name').data('kendoDropDownList').value();
				iv.bindSellerInfo(id);
				$('input[name="SellerKeyId"]').val(id);
			}
		});
		$('#txt-cost').kendoDropDownList({
			dataTextField: "text",
			dataValueField: "value",
			optionLabel:'==请选择视频制作费==',
			dataSource: cost
		});
		$('#txt-costfz').kendoDropDownList({
			dataTextField: "text",
			dataValueField: "value",
			optionLabel:'==请选择视放置费==',
			dataSource: costFZ
		});
		$('#txt-style').kendoDropDownList({
			dataTextField: "text",
			dataValueField: "value",
			optionLabel:'==请选择视频风格==',
			dataSource: videoStyle
		});
		$('#txt-category').kendoDropDownList({
			dataTextField: "text",
			dataValueField: "value",
			optionLabel:'==请选择视频分类==',
			dataSource: category
		});
		$('input[name="Provider"]').kendoDropDownList({
			dataTextField: "text",
			dataValueField: "value",
			optionLabel:'==请选择视频来源==',
			dataSource: videoSource
		});
		$('input[name="Maker"]').kendoDropDownList({
			dataTextField: "text",
			dataValueField: "value",
			optionLabel:'==请选择视频制作商==',
			filter:'contains',
			dataSource: createDataSource(basePath+'admin/video/makerOptions',{})
		});

		$('#txt-province').kendoDropDownList({
			dataTextField: "text",
			dataValueField: "value",
			optionLabel:'==请选择省==',
			dataSource: createDataSource(basePath+'region/getRegions'),
			change:function(){
				var urlCity = basePath+'region/getRegions?parentId=' + $('#txt-province').data('kendoDropDownList').value();

				$('#txt-city').kendoDropDownList({
					dataTextField: "text",
					dataValueField: "value",
					optionLabel:'==请选择市==',
					dataSource: createDataSource(urlCity),
					change:function(){
						var urlArea = basePath+'region/getRegions?parentId=' + $('#txt-city').data('kendoDropDownList').value();
						
						$('#txt-area').kendoDropDownList({
							dataTextField: "text",
							dataValueField: "value",
							optionLabel:'==请选择区／县==',
							dataSource: createDataSource(urlArea),
						});
					}
				});

				$('#txt-area').data("kendoDropDownList").setDataSource(null);
			}
		});
	},
	edit:function(id){
		$.mdlg({
			title:'商家',
			width:'850px',
			content:function(){
				return $('#data-tmpl').html();
			},
			onShow:function(){
				iv.bindDropDownList();

				$('#txt-city,#txt-area').kendoDropDownList({});

				$('input[name="StartDate"],input[name="EndDate"]').kendoDateTimePicker({
					format:"yyyy-MM-dd HH:mm:ss"
				});

				$('#txt-order,#txt-playTime').kendoNumericTextBox({
					 format: "#",
                     decimals: 0,
                     min: 1,
                     max:99999999,
                     value:1
				});

				if(id){
					$.get(basePath + 'admin/video/getVideo',{Id:id},function(data){
						$('#form-video').formData(data);
						iv.bindDropDownList();
						iv.bindSellerInfo(data.SellerKeyId);

						var seller = $('#txt-sel-name').data("kendoDropDownList");
						seller.value(data.SellerKeyId);
						
						var province = $('#txt-province').data("kendoDropDownList");
						province.value(data.Province);
						province.trigger("change");

						var city = $('#txt-city').data("kendoDropDownList");
						city.value(data.City);
						city.trigger("change");

						$('#txt-area').data("kendoDropDownList").value(data.Area);

						$('input[name="StartDate"]').kendoDateTimePicker({
							format:"yyyy-MM-dd HH:mm:ss",
							value: new Date(data.StartDate)
						});
						$('input[name="EndDate"]').kendoDateTimePicker({
							format:"yyyy-MM-dd HH:mm:ss",
							value: new Date(data.EndDate)
						});
						
						$('#info-status').getTextField(data.Status,videoStatus);
						$('#info-remark').html(data.Remark);
					});
				}
			},
			showCloseButton:false,
			buttons:["保存","取消"],
			buttonStyles:['btn-success','btn-default'],
			onButtonClick:function(sender,modal,index){
				var self = this;

				if(index == 0){
					var params = $("#form-video").serializeJson();

					$.post(basePath + 'admin/video/save',JSON.stringify(params) , function(data) {
						if(data.result == true){
							$.mdlg.alert('提示',data.message);
							$('#form-menu').clearForm();
							iv.getInfo();
							$(this).closeDialog(modal);
						}else{
							$.mdlg.error('错误',data.message);
						}
					})
				}else{
					$(this).closeDialog(modal);
				}
			}
		});
	},
	
	delete:function(){
		$.mdlg.confirm("删除","您确认要将所选择的视删除么？",function(){
			var params = $("#grid").gridSelectedCols('Id');

			$.post(basePath + 'admin/video/delete', JSON.stringify(params), function (data) {
				if (data.result) {
					$.mdlg.alert('提示',data.message);
					iv.getInfo();
				} else {
					$.mdlg.error('错误',data.message);
				}
			});
		});
	},
	online:function(){
		$.mdlg.confirm("上线","您确认要将所选择的视频上线么？<br/>上线前请线确实该视频是否已经通过电信的审核。",function(){
			var params = $("#grid").gridSelectedCols('Id');
			var params2 = $("#grid").gridSelectedCols('Status');
			params.Status = params2.Status;

			$.post(basePath + 'admin/video/online', JSON.stringify(params), function (data) {
				if (data.result) {
					$.mdlg.alert('提示',data.message);
					iv.getInfo();
				} else {
					$.mdlg.error('错误',data.message);
				}
			}).fail(errors);
		})
	},
	offline:function(){
		$.mdlg.confirm("下线","您确认要将所选择的视频下线么？",function(){
			var params = $("#grid").gridSelectedCols('Id');

			$.post(basePath + 'admin/video/offline', JSON.stringify(params), function (data) {
				if (data.result) {
					$.mdlg.alert('提示',data.message);
					iv.getInfo();
				} else {
					$.mdlg.error('错误',data.message);
				}
			}).fail(errors);
		})
	},
	submit:function(){
		$.mdlg.confirm("审核","您确认要将所选择的视频提交到电信进行审核么？",function(){
			var params = $("#grid").gridSelectedCols('Id');
			var params2 = $("#grid").gridSelectedCols('Status');
			params.Status = params2.Status;

			$.post(basePath + 'admin/video/submit', JSON.stringify(params), function (data) {
				if (data.result) {
					$.mdlg.alert('提示',data.message);
					iv.getInfo();
				} else {
					$.mdlg.error('错误',data.message);
				}
			}).fail(errors);
		});
	},	
	workOrderDetail:function(id){//工单详情
		$.mdlg({
			title:'工单详情',
			width:'850px',
			content:function(){
				return $('#data-Detail').html();
			},
			onShow:function(){

				if(id){
					$.get(basePath + 'admin/video/getWorkOrderDetail',{Id:id},function(data){
						$('#txt-correlate-id').html(data.CorrelateID);
						$('#txt-xmlfor-add').html(iv.htmlEncode(data.XmlForAdd));
						$('#txt-xmlfor-del').html(iv.htmlEncode(data.XmlForDel));
					});
				}
			},
			showCloseButton:false,
		});
	},
	htmlEncode:function (str){  
		var s = "";   
		if (str.length == 0) return "";   
		s = str.replace(/&/g, "&gt;");   
		s = s.replace(/</g, "&lt;");   
		s = s.replace(/>/g, "&gt;");   
		s = s.replace(/ /g, "&nbsp;");   
		s = s.replace(/\'/g, "&#39;");   
		s = s.replace(/\"/g, "&quot;");   
		s = s.replace(/\n/g, "<br>");   
		return s;  
	} 
}