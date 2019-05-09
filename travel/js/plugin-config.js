;
(function () {
    // jQueryUI
    $(function () {
        // 开启tabs
        $("#tabs").tabs();
        // 开启日期选择器
        $(".datepicker").datepicker();

        // 开启slider
        ui = $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            // 滑动过程中读取滑块值
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " --$" + ui.values[1]);

            }

        });
        // 读取默认滑块值
        $("#amount").val("$" + $("#slider-range").slider("values", 0) + "--$" + $("#slider-range").slider("values",
            1));


        // 开启表单验证myForm
        $('#myForm').validate({
            // 标签内部可以写属性来定义规则，也能写在配置对象中
            rules: {
                username: {
                    required: true,
                    minlength: 6
                },
                email:{
                    required:true,
                    email:true
                },
                title: {
                    required: true,
                }
            },

            // 提示信息，
            messages: {
                // 每个input的name为标识
                username: {
                    required: '这是必须填的，请您填上',
                    minlength: '您输入的用户名至少6位'
                },
                email: '邮箱错误',
                title: {
                    required: '这是必须填的，请您填上'
                }
            }
           
        })

    })

    // // wow
    // var wow = new WOW()
    // wow.init()



})()