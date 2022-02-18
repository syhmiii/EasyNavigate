function reloadPage(hideElement, load, animation) {
    var x = document.getElementById(hideElement);
    var load = document.getElementById(load);
    var anim = document.getElementById(animation);

    anim.addEventListener('click', () => {
        load.style.display = "block";
        x.style.display = "none";

        setTimeout(() => {
            location.reload();
            load.style.display ="none";
        }, 7000)
    })
    
}

function errorReload() {
    location.reload();
}

function wordSearch() {
    document.getElementById('searchResult').style.visibility = 'visible';

    var word = document.getElementById('word');
    var definition = document.getElementById('definition');
    var example = document.getElementById('example');

    var wordToSearch = document.getElementById('searchBox').value;

    var request1 = new XMLHttpRequest();
    request1.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/definitions?limit=10&includeRelated=false&useCanonical=false&includeTags=false&api_key=dfd7g7h7no3wd9ytjgwa7picrxaapv6kqgxw5zjz5pxsdfmbv', true);
    request1.onload = function () {
        var data = JSON.parse(this.response);
        if (request1.status >= 200 && request1.status < 400) {
            word.innerHTML = data[1].word;      //  get a random definition
            definition.innerHTML = data[1].text;
            while (definition.innerHTML == 'undefined') {
                var i = Math.ceil(Math.random() * 10);
                definition.innerHTML = data[i].text
            }
        } else {
            word.innerHTML = "Word not found.";
            document.getElementById('anim2').style.display = "none";
            document.getElementById('error').style.display = "block";
        }
    }
    request1.send();

    var request2 = new XMLHttpRequest();
    request2.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/topExample?useCanonical=false&api_key=dfd7g7h7no3wd9ytjgwa7picrxaapv6kqgxw5zjz5pxsdfmbv', true);
    request2.onload = function () {
        var data2 = JSON.parse(this.response);
        if (request2.status >= 200 && request2.status < 400) {
            example.innerHTML = data2.text;
        } else {
            document.getElementById('anim2').style.display = "none";
            document.getElementById('error').style.display = "block";
        }
    }
    request2.send();

}
function audioGet() {
    document.getElementById('searchResult').style.visibility = 'visible';
    
    var spell = document.getElementById('spell');

    var wordToSearch = document.getElementById('searchBox').value;

    var request3 = new XMLHttpRequest();
    request3.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/audio?useCanonical=false&limit=50&api_key=dfd7g7h7no3wd9ytjgwa7picrxaapv6kqgxw5zjz5pxsdfmbv ', true);
    request3.onload = function () {
        var data3 = JSON.parse(this.response);
        if (request3.status >= 200 && request3.status < 400) {
            var audio = document.createElement("AUDIO");
            audio.setAttribute("src", data3[0].fileUrl);    //  set the source for audio in html tag
            audio.setAttribute("controls", "controls");
            audio.setAttribute("autoplay", "autoplay");
            spell.appendChild(audio);

        } else {
            document.getElementById('anim2').style.display = "none";
            document.getElementById('error').style.display = "block";
        }
    }
    request3.send();
}
function hideElement(hideElement, showElement, load, animation) {
    
    var x = document.getElementById(hideElement);
    var y = document.getElementById(showElement);
    var load = document.getElementById(load);
    var anim = document.getElementById(animation);

    anim.addEventListener('click', () => {
        load.style.display = "block";
        x.style.display = "none";

        setTimeout(() => {
            y.style.display = "block";
            load.style.display ="none";
        }, 2000)
    })
}



