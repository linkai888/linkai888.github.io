var link = {

    //亚博

    yaboPc: 'https://y92ki.wcsxh.com:9018/entry/register/?i_code=23130291',                //亚博电脑

    yaboH5: 'https://y92ki.wcsxh.com:9018/entry/register/?i_code=23130291',          //亚博h5

    yaboApp: 'https://www.gbdzh.com:1432/?i_code=23130291',                 //亚博aap

                   


    //乐鱼

    leyuPc: 'https://y92ki.wcsxh.com:9018/entry/register/?i_code=23130291',              //乐鱼电脑

    leyuH5: 'https://y92ki.wcsxh.com:9018/entry/register/?i_code=23130291',        //乐鱼h5

    leyuApp: 'https://www.gbdzh.com:1432/?i_code=23130291',                     //乐鱼app


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
