
$(function () {
    //header open/close
    $('.burger').on('click', function () {
        let headerMain = $('header')
        let hideHeader = $('.header__mobile-meny')
        let burgerMenyBtn = $(this);

        hideHeader.slideToggle(500, function () {
            if (hideHeader.is(':visible')) {
                burgerMenyBtn.addClass('activBurger')
                headerMain.addClass('openHideMeny')
                headerMain.addClass('activ-header')
                $('body').css('overflow', 'hidden');
            }
            else {
                burgerMenyBtn.removeClass('activBurger')
                headerMain.removeClass('openHideMeny')
                if (headerMain.hasClass('headerV1')) {
                    headerMain.removeClass('activ-header')
                }

                $('body').css('overflow', 'auto');
            }
        })

        hideHeader.find('a').on('click', function () {
            burgerMenyBtn.removeClass('activBurger')
            headerMain.removeClass('openHideMeny')
            if (headerMain.hasClass('headerV1')) {
                headerMain.removeClass('activ-header')
            }

            $('body').css('overflow', 'auto');
            hideHeader.slideUp(300)
        })
    })


    //graf 

    $(".progress").each(function () {
        var dataProgress = $(this).attr("stroke-dashoffset");
        $(this).attr("stroke-dashoffset", "251.2");
        $(this).animate({
            "stroke-dashoffset": dataProgress
        }, 1500)
    })

});


window.addEventListener('load', function () {

    //fixed header
    function headerFixed() {
        const header = document.querySelector('header');
        if (!header) {

        }
        else {
            let lastPos = 0;
            let defHeaderPosition = window.scrollY;

            if (defHeaderPosition > 100) {
                header.classList.add('activ-header')
            }
            else {
                header.classList.remove('activ-header')
            }
            window.addEventListener('scroll', () => {
                let scrollYvalue = this.scrollY;
                if (window.pageYOffset < lastPos) {
                    showHeader(scrollYvalue);
                }
                if (window.pageYOffset > lastPos) {
                    hideHeader();
                }

                lastPos = window.pageYOffset;



            });

            function hideHeader() {
                header.classList.remove('fixed-header');
            }
            function showHeader(scrollValue) {
                header.classList.add('fixed-header');
                if (scrollValue > 100) {
                    header.classList.add('activ-header')
                }

                else {
                    header.classList.remove('activ-header')
                }
            }
        }

    }
    headerFixed();


    //timer
    // конечная дата
    const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 01);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
        $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);






    // animation scroll link
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }



    function animateController() {
        new Skroll({
            mobile: true,
        })
            .add(".main-sec__info", {
                delay: 300,
                duration: 500,
                animation: "fadeInLeft"
            })
            .add(".main-sec__image", {
                delay: 500,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".timer-sec", {
                delay: 300,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".iso-sec__image", {
                delay: 300,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".main-title", {
                delay: 300,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".green-line", {
                delay: 300,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".iso-sec__text-conteiner", {
                delay: 300,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".partners-sec__element", {
                delay: 100,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".iso-sec__big-text", {
                delay: 300,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".advantages-sec__elemenr", {
                delay: 300,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".game-sec__game-btn-conteiner", {
                delay: 300,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".year-row", {
                delay: 300,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".team-box", {
                delay: 300,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".form-sec", {
                delay: 300,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".grafic-sec__graf-conteiner", {
                delay: 300,
                duration: 500,
                animation: "fadeInUp"
            })



            .init()
            .recalcPosition()
    }

    animateController()


}, false);


