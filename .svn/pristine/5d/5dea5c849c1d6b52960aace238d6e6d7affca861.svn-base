var UITree = function () {

    var handleSample1 = function () {

        $('#tree_1').jstree({
            "core": {
                "themes": {
                    "responsive": false
                }
            },
            "types": {
                "default": {
                    "icon": "fa fa-folder icon-state-warning icon-lg"
                },
                "file": {
                    "icon": "fa fa-file icon-state-warning icon-lg"
                }
            },
            "plugins": ["types"]
        });

        // handle link clicks in tree nodes(support target="_blank" as well)
        $('#tree_1').on('select_node.jstree', function (e, data) {
            var link = $('#' + data.selected).find('a');
            if (link.attr("href") != "#" && link.attr("href") != "javascript:;" && link.attr("href") != "") {
                if (link.attr("target") == "_blank") {
                    link.attr("href").target = "_blank";
                }
                document.location.href = link.attr("href");
                return false;
            }
        });
    }

    var handleSample2 = function (ids) {
        console.log(111);
        var e = $(ids);
        e.jstree({
            'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes": {
                    "responsive": false
                },
                'data': [{
                    "text": "一级菜单【有子集】",
                    "children": [{
                        "text": "二级菜单1",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "二级菜单2",
                        "icon": "fa fa-warning icon-state-danger"
                    }, {
                        "text": "二级菜单3【有子集】",
                        "icon": "fa fa-folder icon-state-default",
                        "state": {
                            "opened": true
                        },
                        "children": ["三级菜单"]
                    }, {
                        "text": "二级菜单4",
                        "icon": "fa fa-warning icon-state-warning"
                    }, {
                        "text": "不可选择二级",
                        "icon": "fa fa-check icon-state-success",
                        "state": {
                            "disabled": true
                        }
                    }]
                },
                    "一级菜单【无子集】"
                ]
            },
            "types": {
                "default": {
                    "icon": "fa fa-folder icon-state-warning icon-lg"
                },
                "file": {
                    "icon": "fa fa-file icon-state-warning icon-lg"
                }
            }
        });
    }

    var contextualMenuSample = function () {

        $("#tree_3").jstree({
            "core": {
                "themes": {
                    "responsive": false
                },
                // so that create works
                "check_callback": true,
                'data': [{
                    "text": "Parent Node",
                    "children": [{
                        "text": "Initially selected",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "Custom Icon",
                        "icon": "fa fa-warning icon-state-danger"
                    }, {
                        "text": "Initially open",
                        "icon": "fa fa-folder icon-state-success",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {"text": "Another node", "icon": "fa fa-file icon-state-warning"}
                        ]
                    }, {
                        "text": "Another Custom Icon",
                        "icon": "fa fa-warning icon-state-warning"
                    }, {
                        "text": "Disabled Node",
                        "icon": "fa fa-check icon-state-success",
                        "state": {
                            "disabled": true
                        }
                    }, {
                        "text": "Sub Nodes",
                        "icon": "fa fa-folder icon-state-danger",
                        "children": [
                            {"text": "Item 1", "icon": "fa fa-file icon-state-warning"},
                            {"text": "Item 2", "icon": "fa fa-file icon-state-success"},
                            {"text": "Item 3", "icon": "fa fa-file icon-state-default"},
                            {"text": "Item 4", "icon": "fa fa-file icon-state-danger"},
                            {"text": "Item 5", "icon": "fa fa-file icon-state-info"}
                        ]
                    }]
                },
                    "Another Node"
                ]
            },
            "types": {
                "default": {
                    "icon": "fa fa-folder icon-state-warning icon-lg"
                },
                "file": {
                    "icon": "fa fa-file icon-state-warning icon-lg"
                }
            },
            "state": {"key": "demo2"},
            "plugins": ["contextmenu", "dnd", "state", "types"]
        });

    }

    var ajaxTreeSample = function () {

        $("#tree_4").jstree({
            "core": {
                "themes": {
                    "responsive": false
                },
                // so that create works
                "check_callback": true,
                'data': {
                    'url': function (node) {
                        return '../demo/jstree_ajax_data.php';
                    },
                    'data': function (node) {
                        return {'parent': node.id};
                    }
                }
            },
            "types": {
                "default": {
                    "icon": "fa fa-folder icon-state-warning icon-lg"
                },
                "file": {
                    "icon": "fa fa-file icon-state-warning icon-lg"
                }
            },
            "state": {"key": "demo3"},
            "plugins": ["dnd", "state", "types"]
        });

    }


    return {
        //main function to initiate the module
        init: function (ids) {
            handleSample1();
            handleSample2(ids);
            contextualMenuSample();
            ajaxTreeSample();

        }

    };

}();

//if (App.isAngularJsApp() === false) {
//  jQuery(document).ready(function() {    
//     UITree.init();
//  });
//}