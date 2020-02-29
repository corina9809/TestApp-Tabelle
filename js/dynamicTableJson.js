// default initialisierung
var myContacts = [
    {"name": "Lilly Protz", "email": "lilly@gmai.com", "mobile": "9998979695"}
];

var xmlhttp = new XMLHttpRequest();
var url = "person.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myContacts = JSON.parse(this.responseText);
        var length = myContacts.length;
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

<!--load-Event 'DOMContentLoaded' angehängt -->

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#interaktiv').addEventListener('click', klickverarbeitung);
    document.querySelector('#entferne').addEventListener('click', entferneKlickverarbeitung);
    document.querySelector('#myselect').addEventListener('click', change_myselect);
    document.querySelector('#loadtable').addEventListener('click', loadtable);
    document.querySelector('#loaddyntable').addEventListener('click', loadDynamictable);

    function klickverarbeitung() {
        document.querySelector('output').innerText += 'Das ist von Javascript eingefügter Text. \n';
        document.querySelector('#entferne').setAttribute('aria-hidden', false);
    }

    function entferneKlickverarbeitung() {
        document.querySelector('#interaktiv').removeEventListener('click', klickverarbeitung);
        document.querySelector('output').innerText += ' Event-Handler wurde entfernt. \n';
    }

    // get references to select list and display text box
    var tar = document.getElementById('myselect');
    var el = document.getElementById('display');

    function change_myselect(sel) {
        // access text property of selected option
        el.value = tar.options[tar.selectedIndex].text;
        document.querySelector('#myselect').removeEventListener('click', klickverarbeitung);
        document.querySelector('output').innerText += ' ' + tar.options[tar.selectedIndex].text + ' ausgewählt. \n';

    }

    function loadtable() {

        var list = document.getElementById('tablearea');
        if (list != null && list.hasChildNodes()) {
            list.removeChild(list.childNodes[0]);
        }
        document.getElementById('tablearea')
            .appendChild(populateTable(null, 3, 2, "Text"));
    }

    function loadDynamictable() {

        var list = document.getElementById('tablearea');
        if (list != null && list.hasChildNodes()) {
            list.removeChild(list.childNodes[0]);
        }
        document.getElementById('tablearea')
            .appendChild(generateDynamicTable());
    }

    function populateTable(table, rows, cells, content) {
        if (!table) table = document.createElement('table');
        table.style.width = '50%';
        table.setAttribute('border', '1');
        table.setAttribute('cellspacing', '0');
        table.setAttribute('cellpadding', '5');
        for (var i = 0; i < rows; ++i) {
            var row = document.createElement('tr');
            for (var j = 0; j < cells; ++j) {
                row.appendChild(document.createElement('td'));
                row.cells[j].appendChild(document.createTextNode(content + (j + 1)));
            }
            table.appendChild(row);
        }
        return table;
    }


});


