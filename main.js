function getData(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(xhttp)
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

let url = 'https://picsum.photos/200/300';

// getData(url, (data) => {
//     document.getElementById('img_1').setAttribute('src', data.responseURL)
//     getData(url, (data) => {
//         document.getElementById('img_2').setAttribute('src', data.responseURL)
//         getData(url, (data) => {
//             document.getElementById('img_3').setAttribute('src', data.responseURL)
//         })
//     })
// })

let myPromise = new Promise((resolve, reject)=> {
    getData(url, resolve);
})
let myPromise1 = new Promise((resolve, reject)=> {
    getData(url, resolve);
})
let myPromise2 = new Promise((resolve, reject)=> {
    getData(url, resolve);
})

// myPromise 
//     .then((data) => {
//         document.getElementById('img_1').setAttribute('src', data.responseURL)
//         return myPromise1;
//     })
//     .then((data) => {
//         document.getElementById('img_2').setAttribute('src', data.responseURL)
//         return myPromise2;
//     })
//     .then((data) => {
//         document.getElementById('img_3').setAttribute('src', data.responseURL)
//         return myPromise2;
//     })

let getDataAsync = async () => {
    try {
        let data = await myPromise;
        document.getElementById('img_1').setAttribute('src', data.responseURL);

        let data1 = await myPromise1;
        document.getElementById('img_2').setAttribute('src', data1.responseURL);

        let data2 = await myPromise2 ;
        document.getElementById('img_3').setAttribute('src', data2.responseURL)
    } catch (error) {
        console.log(error);
    }
}