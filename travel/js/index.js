;
(function () {
    // 滚动出现导航条
    $(window).scroll(function () {
        var $scrollTop = $(window).scrollTop();
        if ($scrollTop >= 200) {
            $('#nav').addClass('navbar-fixed-top-scorlling')
        } else {
            $('#nav').removeClass('navbar-fixed-top-scorlling')
        }
        if ($scrollTop >= 400) {
            $('#nav').addClass('navbar-fixed-top-scorlled')
            $('.navColor a').addClass('navbar-fixed-top-scorlled-c');
        } else {
            $('#nav').removeClass('navbar-fixed-top-scorlled')
            $('.navColor a').removeClass('navbar-fixed-top-scorlled-c');
        }

    })

    // section-7计数器，等待单独封装
    
    var numg = 6;
    var flag = true;
    var $s7 = $('#section-7')
    var $s7num1 = $('#section-7 .num-g1')
    var $s7num2 = $('#section-7 .num-g2')
    var $s7num3 = $('#section-7 .num-g3')
    var $s7num4 = $('#section-7 .num-g4')
    var numend1 = 100000
    var numend2 = 40000
    var numend3 = 87000
    var numend4 = 56000
  
    $(window).scroll(function () {
        // 当块出现时，开启定时器
        if ($s7.css("visibility") === 'visible' && flag === true) {
            flag = false
            numgf($s7num1,numend1)
            numgf($s7num2,numend2)
            numgf($s7num3,numend3)
            numgf($s7num4,numend4)
        }
    })
    // 数字增长函数
    function numgf(obj,numend) {
        if (numg > 6) {
            return
        }

        var numxg = 0;
        var numxs = 0;
        var numxb = 0;
        var timer2 = setInterval(() => {
            numxg = parseInt(Math.random() * 10)
            numxs = parseInt(Math.random() * 10)
            numxb = parseInt(Math.random() * 10)
            numx = '' + numxg + numxs + numxb
           
        }, 10);

        var timer3 = setInterval(() => {
            numg += 1;
           
        }, 500);
        var timer1 = setInterval(() => {
            obj.html(numg + ',' + numx + '名')
            // 当增长到目标 值时，清除定时器
            // console.log(numg, numend);
            if (numg * 1000 >= numend) {
                clearInterval(timer1)
                clearInterval(timer2)
                clearInterval(timer3)
                obj.html(numg + ',000名')
            }
        }, 10);
    }


})()