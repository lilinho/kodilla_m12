/*
TODO
* variables for api response
* variables for DOM
* create DOM
*/

$(function() {
    
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countryList = $("#countries");
    console.log(countryList.children()[1].innerText);
    $("#search").click(searchCountries);
    
    function searchCountries() {
        var countryVal = $("#countryName").val();
        
        if(!countryVal.length) {
            countryVal = "Poland"
        }
        
        $.ajax({
            url: url + countryVal,
            method: 'GET',
            success: showCountryList
            
        })
    }
    /*
    <div class="row">
    <div class="col-sm-4>FLAG</div>
    <div class=col-sm-8>COUNTRY NAME</div>
    </div>
    
    
    */
    function showCountryList(input) {
        
        // check if there were any country searched for
        
        if(countryList.children()[0].innerText == "No data") {
            countryList.empty();
        }
        
        // building DOM
        var domRow = $('<div>').addClass("row"); // row for Bootstrap Grid
        var domFlag = $('<div>').addClass("col-sm-4 flag"); // column for flag
        var domCountryName = $('<div>').addClass("col-sm-8 country-name"); // column for country name
        
        
        
    }
})