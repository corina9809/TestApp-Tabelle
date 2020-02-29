function readJsonFile(url) {
    var myArr;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myArr = JSON.parse(this.responseText);
            var length = myArr.length;
            return myArr;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}