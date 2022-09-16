var link = {

    //亚博

    yaboPc: 'http://353leyuvip.com',                //亚博电脑

    yaboH5: 'https://www.8nh1j.com:6001/entry/register/?i_code=4985798',          //亚博h5

    yaboApp: 'http://353leyuvip.com',                        //亚博aap


    //乐鱼

    leyuPc: 'http://353leyuvip.com',              //乐鱼电脑

    leyuH5: 'https://www.8nh1j.com:6001/entry/register/?i_code=4985798',        //乐鱼h5

    leyuApp: 'http://353leyuvip.com',                     //乐鱼app


}


function getDevice() {

    if (/(Android|IOS|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry)/i.test(navigator.userAgent)) {

        return 'mobile'

    } else {

        return 'pc'

    }

}

const device = getDevice();


function register(key) {

    if (key === 'yabo') {

        window.location.href = device == 'pc' ? link.yaboPc : link.yaboH5;

    } else if (key === 'leyu') {

        window.location.href = device == 'pc' ? link.leyuPc : link.leyuH5;

    } else {

        window.location.href = link[key]

    }

}


function contact() {

    window.open(link.contact);

}
