var UITree = function () {
//  var handleSample2 = function (ids) { 
//  	   var e=$(ids) ;
//         e.jstree({        	
//          'plugins': ["wholerow", "checkbox", "types"],
//          'core': {
//              "themes" : {
//                  "responsive": false
//              },    
//              'data': [{
//                      "text": "一级菜单【有子集】",
//                      "children": [{
//                          "text": "二级菜单1",
//                          "state": {
//                              "selected": true
//                          }
//                      }, {
//                          "text": "二级菜单2",
//                          "icon": "fa fa-warning icon-state-danger"
//                      }, {
//                          "text": "二级菜单3【有子集】",
//                          "icon" : "fa fa-folder icon-state-default",
//                          "state": {
//                              "opened": true
//                          },
//                          "children": ["三级菜单"]
//                      }, {
//                          "text": "二级菜单4",
//                          "icon": "fa fa-warning icon-state-warning"
//                      }, {
//                          "text": "不可选择二级",
//                          "icon": "fa fa-check icon-state-success",
//                          "state": {
//                              "disabled": true
//                          }
//                      }]
//                  },
//                  "一级菜单【无子集】"
//              ]
//          },
//          "types" : {
//              "default" : {
//                  "icon" : "fa fa-folder icon-state-warning icon-lg"
//              },
//              "file" : {
//                  "icon" : "fa fa-file icon-state-warning icon-lg"
//              }
//          }
//      });
//  }
     var handleSample1 = function (ids) { 
    	   var e=$(ids) ;
           e.jstree({        	
            'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },    
                'data': [
                    {
                        "text": "系统管理",
                        "state": {
                                "selected": false,
                                "opened": true
                        },                       
                        "icon": "fa fa-warning icon-home",
                        "children": [
                        {
                            "text": "用户角色管理",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-user"
                        }, {
                            "text": "角色权限管理",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-bulb"
                        }, {
                            "text": "数据字典",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-bar-chart"
                        }, {
                            "text": "APP管理",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-settings"
                        }, {
                            "text": "系统日志",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-graph"
                        }, {
                            "text": "数据备份",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-folder"
                        }]
                    },
                    {
                        "text": "农庄管理",
                        "state": {
                                "selected": false,
                                "opened": true
                        },                       
                        "icon": "fa fa-warning icon-home",
                        "children": [
                        {
                            "text": "农庄信息管理",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-user"
                        }, {
                            "text": "农庄用户管理",
                            "state": {
                                "selected": false,
                                "disabled": true
                            },
                            "icon": "fa fa-warning icon-bulb"
                        }]
                    },
//                  "一级菜单【无子集】"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            }
        });
    }
     var handleSample2 = function (ids) {
//   console.log(222 ,$(ids))
    	var e=$(ids) ;
        $tree=e.jstree({        	
//          'plugins': ["wholerow", "checkbox", "types"],
           
            'core': {
                "check_callback" : true,//设置为true,当用户修改数时,允许所有的交互和更好的控制(例如增删改)
                'multiple': false,  // 是否可以选择多个节点
               
                "themes" : {
                    "responsive": false,
                    "stripes" : true//主题配置对象,表示树背景是否有条带
                },    
                'data': [
                {
                        "text": "数据类型--字典编码",
                        "state": {
                                "selected": false,
                                "opened": true
                        },                       
                        "icon": "glyphicon glyphicon-folder-open",
                        "children": [
		                    {
		                        "text": "地块类型：DKLX",
		                        "state": {
		                                "selected": false,
		                                "opened": true
		                        },                       
//		                        "icon": "icon-briefcase",
		                        "children": []                       
		                    },
		                    {
		                         "text": "控制器类型：KZQLX",
		                        "state": {
		                                "selected": false,
		                                "opened": true
		                        },                       
//		                        "icon": "icon-briefcase",
		                        "children": []                       
		                    },
		                    {
		                        "text": "传感器类型：CGQLX",
		                        "state": {
		                                "selected": false,
		                                "opened": true
		                        },                       
//		                        "icon": "icon-briefcase",
		                        "children": []                       
		                    },
		                   
		                    {
		                        "text": "传感器单位：CGQDW",
		                        "state": {
		                                "selected": false,
		                                "opened": true
		                        },                       
//		                        "icon": "icon-briefcase",
		                        "children": []                       
		                    },
		                     {
		                         "text": "种植方式：ZZFS",
		                        "state": {
		                                "selected": false,
		                                "opened": true
		                        },                       
//		                        "icon": "icon-briefcase",
		                        "children": []                       
		                    },
		                    {
		                         "text": "所在地区：SZDQ",
		                        "state": {
		                                "selected": false,
		                                "opened": true, "disabled": true
		                        },                       
//		                        "icon": "icon-briefcase",
		                        "children": []                       
		                    },
                        ]
                },
                   

//
//                  {
//                      "text": "地块类型：DKLX",
//                      "state": {
//                              "selected": false,
//                              "opened": true
//                      },                       
//                      "icon": "glyphicon glyphicon-folder-open",
//                      "children": [
//                      {
//                          "text": "字典编号1：水田",
//                          "state": {
////                              "selected": false,
////                              "disabled": true
//                          },
//                          "icon": "fa fa-warning icon-user"
//                      }, {
//                          "text": "字典编号2：旱地",
//                          "state": {
////                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bulb"
//                      }, {
//                          "text": "字典编号3：设施",
//                          "state": {
////                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bar-chart"
//                      }]
//                  },
//                  {
//                      "text": "控制器类型：KZQLX",
//                      "state": {
//                              "selected": false,
//                              "opened": false
//                      },                       
//                      "icon": "glyphicon glyphicon-folder-close",
//                      "children": [
//                      {
//                          "text": "字典编号1：温度",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-user"
//                      }, {
//                          "text": "字典编号2：电动阀",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bulb"
//                      }, {
//                          "text": "字典编号3：湿度",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bar-chart"
//                      },{
//                          "text": "字典编号4：雨量",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-user"
//                      }, {
//                          "text": "字典编号5：风向",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bulb"
//                      }, {
//                          "text": "字典编号6：雪量",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bar-chart"
//                      },{
//                          "text": "字典编号7：光照",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-user"
//                      }, {
//                          "text": "字典编号8：最大风速",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bulb"
//                      }, {
//                          "text": "字典编号9：平均风速",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bar-chart"
//                      },]
//                  },
//                  {
//                      "text": "传感器类型：CGQLX",
//                      "state": {
//                              "selected": false,
//                              "opened": false
//                      },                       
//                      "icon": "glyphicon glyphicon-folder-close",
//                      "children": [
//                      {
//                          "text": "字典编号1：大气温度",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-user"
//                      }, {
//                          "text": "字典编号2：大气湿度",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bulb"
//                      }, {
//                          "text": "字典编号3：页面温度",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bar-chart"
//                      }, {
//                          "text": "字典编号4：页面湿度",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bar-chart"
//                      }]
//                  },
//                  {
//                      "text": "传感器单位：CGQDW",
//                      "state": {
//                              "selected": false,
//                              "opened": false
//                      },                       
//                      "icon": "glyphicon glyphicon-folder-close",
//                      "children": [
//                      {
//                          "text": "字典编号1：℃",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-user"
//                      }, {
//                          "text": "字典编号2：%RH",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bulb"
//                      }, {
//                          "text": "字典编号3：MPa",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bar-chart"
//                      }, {
//                          "text": "字典编号4：页面湿度",
//                          "state": {
//                              "selected": false
//                          },
//                          "icon": "fa fa-warning icon-bar-chart"
//                      }]
//                  },
//                  
//                  "一级菜单【无子集】"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "icon-briefcase"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            }
        });
//  $tree.on("open_node.jstree", function(e,data){ //监听打开事件
//  	 console.log('监听打开事件')
//      var currentNode = data.node;  
//      data.instance.set_icon(currentNode, "glyphicon glyphicon-folder-open"); 
//  });
//  $tree.on("close_node.jstree", function(e,data){ //监听关闭事件 
//  	 console.log('监听关闭事件')
//      var currentNode = data.node;  
//      data.instance.set_icon(currentNode, "glyphicon glyphicon-folder-close"); 
//  });
    

        
        
        
    }
     var handleSample3 = function (ids) { 
    	   var e=$(ids) ;
           e.jstree({        	
            'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },    
                'data': [
                    {
                        "text": "基地",
                        "state": {
                                "selected": false,
                                "opened": true
                        },                       
                        "icon": "fa fa-warning icon-home",
                        "children": [
                        {
                            "text": "蓝莓基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-user"
                        }, {
                            "text": "中经基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-bulb"
                        }, {
                            "text": "航宇基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-bar-chart"
                        }, {
                            "text": "平洋基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-settings"
                        }, {
                            "text": "上市基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-graph"
                        }]
                    },
                    {
                        "text": "展厅",
                        "state": {
                                "selected": false,
                                "opened": true
                        },                       
                        "icon": "fa fa-warning icon-home",
                        "children": [
                        {
                            "text": "昆明会展",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-user"
                        }, {
                            "text": "会展",
                            "state": {
                                "selected": false,
                               
                            },
                            "icon": "fa fa-warning icon-bulb"
                        }]
                    },
                    {
                        "text": "合作社",
                        "state": {
                                "selected": false,
                                "opened": true
                        },                       
                        "icon": "fa fa-warning icon-home",
                        "children": [
                        {
                            "text": "书院庭绕合作社",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-warning icon-user"
                        }, {
                            "text": "静婕合作社",
                            "state": {
                                "selected": false,
                               
                            },
                            "icon": "fa fa-warning icon-bulb"
                        }]
                    },
                    {
                        "text": "其他",
                        "state": {
                                "selected": false,
                                "opened": true
                        },                       
                        "icon": "fa fa-warning icon-home",
                        "children": [
                      {
                            "text": "南京绿航猕猴园",
                            "state": {
                                "selected": false,
                               
                            },
                            "icon": "fa fa-warning icon-bulb"
                        }, {
                            "text": "泾川大米",
                            "state": {
                                "selected": false,
                                "disabled": true,
//                              "chockboxshow":false
                            },
                            "icon": "fa fa-warning icon-bulb"
                        }]
                    },
//                  "一级菜单【无子集】"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            }
        });
    }
     var handleSample4 = function (ids) { 
    	   var e=$(ids) ;
           e.jstree({        	
//          'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },    
                'data': [
                    {
                        "text": "农庄信息",
                        "state": {
                                "selected": false,
                                "opened": true
                        },                       
                        "icon": "fa fa-home",
                        "children": [
                        {
                            "text": "蓝莓基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user-times"
                        }, {
                            "text": "中经基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        }, {
                            "text": "航宇基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        }, {
                            "text": "平洋基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user-times"
                        }, {
                            "text": "上市基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        },{
                            "text": "书院庭绕合作社",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        }, {
                            "text": "静婕合作社",
                            "state": {
                                "selected": false,
                               
                            },
                            "icon": "fa fa-user"
                        },{
                            "text": "书院庭绕合作社",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        }, {
                            "text": "静婕合作社",
                            "state": {
                                "selected": false,
                               
                            },
                            "icon": "fa fa-user"
                        },{
                            "text": "书院庭绕合作社",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        }, {
                            "text": "静婕合作社",
                            "state": {
                                "selected": false,
                               
                            },
                            "icon": "fa fa-user"
                        },{
                            "text": "书院庭绕合作社",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        }, {
                            "text": "静婕合作社",
                            "state": {
                                "selected": false,
                               
                            },
                            "icon": "fa fa-user"
                        }, {
                            "text": "航宇基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        }, {
                            "text": "平洋基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user-times"
                        }, {
                            "text": "上市基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        },{
                            "text": "书院庭绕合作社",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        }, {
                            "text": "静婕合作社",
                            "state": {
                                "selected": false,
                               
                            },
                            "icon": "fa fa-user"
                        }, {
                            "text": "航宇基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        }, {
                            "text": "平洋基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user-times"
                        }, {
                            "text": "上市基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        },{
                            "text": "书院庭绕合作社",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user"
                        }, {
                            "text": "静婕合作社",
                            "state": {
                                "selected": false,
                               
                            },
                            "icon": "fa fa-user"
                        }]
                    },
            
           
                  
//                  "一级菜单【无子集】"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder icon-state-warning icon-lg"
                },
                "file" : {
                    "icon" : "fa fa-file icon-state-warning icon-lg"
                }
            }
        });
    }
     var handleSample5 = function (ids) { 
    	   var e=$(ids) ;
           e.jstree({        	
//          'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },    
                'data': [
                    {
                        "text": "农庄基地/地块/传感器",
                        "state": {
                                "selected": false,
                                "opened": true
                        },                       
                        "icon": "fa fa-home",
                        "children": [
                        {
                            "text": "蓝莓基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-video-camera",
                            "children": [
		                    {
	                            "text": "大棚一",	                           
	                            "icon": "fa fa-warning icon-bar-chart",	
                                "children": [
			                    {
		                            "text": "大气温度",	                           
		                            "icon": "fa fa-warning icon-graph",		                            
			                    },
                                {
		                            "text": "大气湿度",	                           
		                            "icon": "fa fa-warning icon-graph",		                            
			                    },
                                {
		                            "text": "土壤温度",	                           
		                            "icon": "fa fa-warning icon-graph",		                            
			                    },
                                {
		                            "text": "土壤湿度",	                           
		                            "icon": "fa fa-warning icon-graph",		                            
			                    },
                                {
		                            "text": "光照强度",	                           
		                            "icon": "fa fa-warning icon-graph",		                            
			                    },
                                {
		                            "text": "二氧化碳",	                           
		                            "icon": "fa fa-warning icon-graph",		                            
			                    }]
		                    }]
                        }, {
                            "text": "航育基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-video-camera",
                            "children": [
			                    {
		                            "text": "大棚",	                           
		                            "icon": "fa fa-warning icon-bar-chart",	
		                            "children": [
					                    {
				                            "text": "大气温度",	                           
				                            "icon": "fa fa-warning icon-graph",		                            
					                    },
		                                {
				                            "text": "大气湿度",	                           
				                            "icon": "fa fa-warning icon-graph",		                            
					                    },
		                                {
				                            "text": "土壤温度",	                           
				                            "icon": "fa fa-warning icon-graph",		                            
					                    },
		                                {
				                            "text": "土壤湿度",	                           
				                            "icon": "fa fa-warning icon-graph",		                            
					                    },
		                                {
				                            "text": "光照强度",	                           
				                            "icon": "fa fa-warning icon-graph",		                            
					                    },
		                                {
				                            "text": "二氧化碳",	                           
				                            "icon": "fa fa-warning icon-graph",		                            
					                    }]
			                    },
                                {
		                            "text": "气象站",	                           
		                            "icon": "fa fa-warning icon-bar-chart",	
		                            "children": [
					                    {
				                            "text": "风速",	                           
				                            "icon": "fa fa-warning icon-graph",		                            
					                    },
		                                {
				                            "text": "雨量",	                           
				                            "icon": "fa fa-warning icon-graph",		                            
					                    },
		                                {
				                            "text": "土壤温度",	                           
				                            "icon": "fa fa-warning icon-graph",		                            
					                    },
		                                {
				                            "text": "土壤湿度",	                           
				                            "icon": "fa fa-warning icon-graph",		                            
					                    },
		                                {
				                            "text": "风向",	                           
				                            "icon": "fa fa-warning icon-graph",		                            
					                    },
		                                {
				                            "text": "空气湿度",	                           
				                            "icon": "fa fa-warning icon-graph",		                            
					                    }]
			                    }]
                        }, {
                            "text": "航宇基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-video-camera",
                        }, {
                            "text": "平洋基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa  fa-plug",	
                        }, {
                            "text": "上市基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa  fa-plug",		
                        }]
                    }

                ]
            }
          
        })
    //事件切换
// e.on("changed.jstree", function (e, data) {
//  // 	ajax(page);
//  console.log(data.node.id);               //选择的node id  
//  console.log(data.node.text);            //选择的node text  
//  var page=data.node.id;
//  var boxcont=$("#container_right #ajaxbox")
//  ajax(page);  //内容切换   	
//	function ajax(page){
//			$.ajax({
//				type:"get",
//				url:page+".html",
//				async:true,
//				success:function(data){
//					boxcont.empty();
//					boxcont.html(data);			
//				}
//			});
//	}	
//
//
//}); 
     
     }
      var handleSample7 = function (ids) { 
    	   var e=$(ids) ;
           e.jstree({        	
//          'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },    
                'data': [
                    {
                        "text": "农庄基地/地块/传感器",
                        "state": {
                                "selected": false,
                                "opened": true
                        },                       
                        "icon": "fa fa-home",
                        "children": [
                        {
                            "text": "蓝莓基地",
                            "state": {
                                "selected": false,"opened": true
                            },
                            "icon": "fa fa-user",
                            "children": [
		                    {
	                            "text": "大棚一",	                           
	                            "icon": "fa fa-warning icon-bar-chart",	
                                
		                    }]
                        }, {
                            "text": "航育基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user",
                            "children": [
			                    {
		                            "text": "大棚",	                           
		                            "icon": "fa fa-warning icon-bar-chart",	
		                           
			                    },
                                {
		                            "text": "气象站",	                           
		                            "icon": "fa fa-warning icon-bar-chart",	
		                          
			                    }]
                        }, {
                            "text": "航宇基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user",
                             "children": [
		                    {
	                            "text": "大棚一",	                           
	                            "icon": "fa fa-warning icon-bar-chart",	
                                
		                    }]
                        }, {
                            "text": "平洋基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user-times",
                             "children": [
		                    {
	                            "text": "大棚一",	                           
	                            "icon": "fa fa-warning icon-bar-chart",	
                                
		                    }]
                        }, {
                            "text": "上市基地",
                            "state": {
                                "selected": false
                            },
                            "icon": "fa fa-user-times",
                             "children": [
		                    {
	                            "text": "大棚一",	                           
	                            "icon": "fa fa-warning icon-bar-chart",	
                                
		                    }]
                        }]
                    }

                ]
            }          
        })
           
    }
    return {
        init1: function (ids) {  
        	  handleSample1(ids);
        },
         init2: function (ids) { 
            handleSample2(ids);
        },
        init3: function (ids) { 
            handleSample3(ids);
        },
        init4: function (ids) { 
            handleSample4(ids);
        },
        init5: function (ids) { 
            handleSample5(ids);
        },
         init7: function (ids) { 
            handleSample7(ids);
        }
    };

}();

