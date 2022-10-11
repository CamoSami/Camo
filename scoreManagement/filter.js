var unique_col_values_dict = {};

function getUniqueValueFromCol() {
    
    //declare

    allFilters = document.querySelectorAll(".tableFilter");
    allFilters.forEach((filter_i) =>  {
        col_index = filter_i.parentElement.getAttribute("col-id");
        //alert(col_index);
        const rows = document.querySelectorAll("div.scoreBoard.extended > table > tbody > tr");

        rows.forEach((row) => {

            cell_value = row.querySelector("td:nth-child("+col_index+")").innerHTML;
            if (col_index in unique_col_values_dict) {

                if (unique_col_values_dict[col_index].includes(cell_value)) {
                    //alert(cell_value + " is in: " + unique_col_values_dict[col_index]);

                }
                else {
                    unique_col_values_dict[col_index].push(cell_value)
                    //alert("the array: " + unique_col_values_dict[col_index]);
                }

            } else {
                unique_col_values_dict[col_index] = new Array(cell_value);
            }

        });

    });

    for (i in unique_col_values_dict) {
        //alert("Col id: " + i + " has Unique values: \n" + unique_col_values_dict[i]);
    };
    
    console.log(unique_col_values_dict);
    updateSelectOptions();
};

function updateSelectOptions() {
    allFilters = document.querySelectorAll(".tableFilter");

    allFilters.forEach((filter_i) => {
        col_index = filter_i.parentElement.getAttribute("col-id")
        //alert(col_index);
        unique_col_values_dict[col_index].forEach((i) => {
             if(col_index != 6)  filter_i.innerHTML = filter_i.innerHTML + `\n<option value="${i}">${i}</option>`;
            
        });

        /*
        var test = unique_col_values_dict[col_index];

        test.forEach((i) => {
            alert(i);
        });
        */

    });

};

function filterOfFilter() {
    allFilters = document.querySelectorAll(".tableFilter");
    console.log(allFilters);

    filter_5 = allFilters[1];
    filter_6 = allFilters[2];

    //alert(filter_5);
    //alert(filter_5.value);
    
    filter_6.innerHTML = `\n<option value="all"></option>`;;


    unique_col_values_dict[6].forEach((i) => {
        

        if(i.indexOf(filter_5.value) != -1 && filter_5.value != "all") {
            
            filter_6.innerHTML = filter_6.innerHTML + `\n<option value="${i}">${i}</option>`;
            //alert(i + " " + filter_5.value);

        }

        if (filter_5.value == "all") {

            filter_6.innerHTML = filter_6.innerHTML + `\n<option value="${i}">${i}</option>`;
            //alert(i + " " + filter_5.value);

        }
    });
    filterRows();
}

function filterRows() {
    allFilters = document.querySelectorAll(".tableFilter");
    var filter_value_dict = {};

    allFilters.forEach((filter_i) => {
        col_index = filter_i.parentElement.getAttribute('col-id');

        value = filter_i.value;
        //alert(filter_i);
        if (value != "all") {
            filter_value_dict[col_index] = value;
        }
    });

    var col_cell_value_dict = {};

    const rows = document.querySelectorAll("div.scoreBoard.extended > table > tbody tr");
    rows.forEach((row) => {
        var display_row = true;

        allFilters.forEach((filter_i) => {
            col_index = filter_i.parentElement.getAttribute("col-id");
            col_cell_value_dict[col_index] = row.querySelector("td:nth-child("+col_index+")").innerHTML;    
        
        });

        for (var col_i in filter_value_dict) {
            filter_value = filter_value_dict[col_i];
            row_cell_value = col_cell_value_dict[col_i];

            if (row_cell_value.indexOf(filter_value) == -1 && filter_value != "all") {
                display_row = false;
                break;
            }

        }

        //alert(display_row);
        if (display_row == true) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    });

}