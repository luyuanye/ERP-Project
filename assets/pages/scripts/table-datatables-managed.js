var TableDatatablesManaged = function() {

	var initTable1 = function(ids) {
		//			console.log(ids)
		var e = $(ids);
		e.dataTable({
			"language": {
				"lengthMenu": "每页 _MENU_ 条记录",
				"search": "搜索:",
				"zeroRecords": "没有找到记录",
				"info": "第 _PAGE_ 页 ( 总共 _PAGES_ 页 )",
				"infoEmpty": "无记录",
				"infoFiltered": "(从 _MAX_ 条记录过滤)",

				"oPaginate": {
					"sFirst": "<<",
					"sPrevious": "<",
					"sNext": ">",
					"sLast": ">>",
					"sJump": "跳转"
				},
			},
			"bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.
			"dom": '<"top">rt<"bottom"ilp><"clear">',
			"lengthMenu": [
				[5, 15, 20, -1],
				[5, 15, 20, "All"] // change per page values here
			],
			// set the initial value
			"pageLength": 5,
			/*	"pagingType": "bootstrap_full_number",*/
			"columnDefs": [{ // set default column settings
					'orderable': false,
					'targets': [0]
				},
				{
					"searchable": false,
					"targets": [0]
				},
				{
					"className": "dt-right",
					//"targets": [2]
				}
			],
			// scroller extension: http://datatables.net/extensions/scroller/
			/*  scrollY:200,*/
			scrollX: true,
			"order": [
				[1, "asc"]
			]
		});

		var tableWrapper = jQuery(ids + '_wrapper');
		tableWrapper.find('.group-checkable').change(function() { //全选全部选					
			var set = jQuery(this).attr("data-set");
			var checked = jQuery(this).is(":checked");
			jQuery(set).each(function() {
				if(checked) {
					$(this).prop("checked", true);
					$(this).parents('tr').addClass("active");
				} else {
					$(this).prop("checked", false);
					$(this).parents('tr').removeClass("active");
				}
			});
		});
		e.on('change', 'tbody tr .checkboxes', function() { //部分选，当行复选框选==>当行高亮
			if($(this).prop("checked")) {
				$(this).parents('tr').addClass("active");
			} else {
				$(this).parents('tr').removeClass("active");
			}
			compareTr();
		});
		e.on('click', 'tbody tr td:not(".td-manage")', function() { //部分选，当行高亮==>复选框选
			var ck = $(this).parents("tr").find("td:first .checkboxes");
			if(ck.prop("checked")) {
				$(this).parents('tr').removeClass("active");
				ck.prop("checked", false);
			} else {
				ck.parents('tr').addClass("active");
				ck.prop("checked", true);
			}
			compareTr();

		});

		function compareTr() { //判断反选函数【每次触发tr做一次判断】

			var cklist = e.find("tbody tr .checkboxes").length;
			var ckedlist = e.find("tbody tr.active").length;
			/*	console.log(cklist, ckedlist)*/
			//       debugger
			if(ckedlist == cklist) {

				tableWrapper.find('.group-checkable').prop("checked", true);
			} else {
				tableWrapper.find('.group-checkable').prop("checked", false);
			}

		}

	}

	return {
		//main function to initiate the module
		init: function(ids) {
			if(!jQuery().dataTable) {
				return;
			}

			initTable1(ids);

		}

	};

}();