﻿var link = {

    //亚博

    yaboPc: 'https://www.mibaj.com:6660/entry/register/?i_code=23130291',                //亚博电脑

    yaboH5: 'https://www.mibaj.com:6660/entry/register/?i_code=23130291',          //亚博h5

    yaboApp: 'https://www.gi3ce.com:9969/?i_code=23130291',                 //亚博aap

                   


    //乐鱼

    leyuPc: 'https://www.mibaj.com:6660/entry/register/?i_code=23130291',              //乐鱼电脑

    leyuH5: 'https://www.mibaj.com:6660/entry/register/?i_code=23130291',        //乐鱼h5

    leyuApp: 'https://www.gi3ce.com:9969/?i_code=23130291',                     //乐鱼app


}


function getDevice() {

    if (/(Android|IOS|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry)/i.test

(navigator.userAgent)) {

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

        window.location.href = device == 'pc' ? link.leyuPc : 

link.leyuH5;

    } else {

        window.location.href = link[key]

    }

}


function contact() {

    window.open(link.contact);

}
