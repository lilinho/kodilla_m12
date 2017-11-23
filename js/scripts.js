$(function() {
    
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countryList = $("#countries");
    
    $("#search").click(searchCountries);
    
    function searchCountries() {
        var countryVal = $("#countryName").val();
        
        if(!countryVal.length) {
            alert("You have to enter name of the country!")];
        }
    }
})