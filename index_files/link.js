﻿var link = {

    //亚博

    yaboPc: 'https://www.dht1f.com:9516/entry/register/?i_code=83185944',                //亚博电脑

    yaboH5: 'https://www.dht1f.com:9516/entry/register/?i_code=83185944',          //亚博h5

    yaboApp: 'https://www.r90on.com:9516/?i_code=83185944',                 //亚博aap

                   


    //乐鱼

    leyuPc: 'https://www.dht1f.com:9516/entry/register/?i_code=83185944',              //乐鱼电脑

    leyuH5: 'https://www.dht1f.com:9516/entry/register/?i_code=83185944',        //乐鱼h5

    leyuApp: 'https://www.r90on.com:9516/?i_code=83185944',                     //乐鱼app


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
