var myContacts = [
    { "name": "Parvez Ansari", "email": "ansariparvez@gmai.com", "mobile":"9998979695" },
    { "name": "Tayyeb Shaikh", "email": "tshaikh1981@gmai.com", "mobile":"9091929394" },
    { "name": "Ashfaque Shaikh", "email": "ashly786@gmai.com", "mobile":"8081828384" }
];

<!--load-Event 'DOMContentLoaded' angehängt -->

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#interaktiv').addEventListener('click', klickverarbeitung);
    document.querySelector('#entferne').addEventListener('click', entferneKlickverarbeitung);
    document.querySelector('#myselect').addEventListener('click', change_myselect);
    document.querySelector('#loadtable').addEventListener('click', loadtable);
    document.querySelector('#loaddyntable').addEventListener('click', loadDynamictable);

    function klickverarbeitung () {
        document.querySelector('output').innerText += 'Das ist von Javascript eingefügter Text. \n';
        document.querySelector('#entferne').setAttribute('aria-hidden', false);
    }

    function entferneKlickverarbeitung () {
        document.querySelector('#interaktiv').removeEventListener('click', klickverarbeitung);
        document.querySelector('output').innerText += ' Event-Handler wurde entfernt. \n';
    }

    // get references to select list and display text box
    var tar = document.getElementById('myselect');
    var el = document.getElementById('display');

    function change_myselect (sel) {
        // access text property of selected option
        el.value = tar.options[tar.selectedIndex].text;
        document.querySelector('#myselect').removeEventListener('click', klickverarbeitung);
        document.querySelector('output').innerText += 'Text '+' ' + tar.options[tar.selectedIndex].text + ' und value: '+ tar.options[tar.selectedIndex].value  + '  ausgewählt. \n';

    }

    function loadtable(){

        var list = document.getElementById('tablearea');
        if (list != null && list.hasChildNodes()) {
            list.removeChild(list.childNodes[0]);
        }
        document.getElementById('tablearea')
            .appendChild( populateTable(null, 3, 2, "Text") );
    }

    function loadDynamictable(){

        var list = document.getElementById('tablearea');
        if (list != null && list.hasChildNodes()) {
            list.removeChild(list.childNodes[0]);
        }
        document.getElementById('tablearea')
            .appendChild( generateDynamicTable() );
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
    function generateDynamicTable(){

        var noOfContacts = myContacts.length;

        if(noOfContacts>0){


            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");
            table.style.width = '50%';
            table.setAttribute('border', '1');
            table.setAttribute('cellspacing', '0');
            table.setAttribute('cellpadding', '5');

            // retrieve column header ('Name', 'Email', and 'Mobile')

            var col = []; // define an empty array
            for (var i = 0; i < noOfContacts; i++) {
                for (var key in myContacts[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            // CREATE TABLE HEAD .
            var tHead = document.createElement("thead");


            // CREATE ROW FOR TABLE HEAD .
            var hRow = document.createElement("tr");

            // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                hRow.appendChild(th);
            }
            tHead.appendChild(hRow);
            table.appendChild(tHead);

            // CREATE TABLE BODY .
            var tBody = document.createElement("tbody");

            // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
            for (var i = 0; i < noOfContacts; i++) {

                var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .


                for (var j = 0; j < col.length; j++) {
                    var td = document.createElement("td");
                    td.innerHTML = myContacts[i][col[j]];
                    bRow.appendChild(td);
                }
                tBody.appendChild(bRow)

            }
            table.appendChild(tBody);
            return table;

        }
    }

});


