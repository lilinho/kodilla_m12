$(function() {
    
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countryList = $("#countries");
    
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

    function showCountryList(response) {
        
        
        countryList.empty();
        
        response.forEach(function(data) {
            
        var htmlContent = '';
            
        htmlContent += '<div class="row">';
        htmlContent += '<div class="col-sm-4 flag d-flex align-items-center"><img src="https://restcountries.eu/data/' + data.alpha3Code.toLowerCase() + '.svg" alt="Flag of ' + data.name + '"></div>';
        htmlContent += '<div class="col-sm-8 country-name d-flex align-items-center"><p class="c-name">' + data.name + '</p></div></div>';
        htmlContent += '<div class="row"><div class="col-sm-12"></div></div>';
        
        htmlContent += '<div class="row"><div class="col-sm-6 title"><p>Native name:</p></div>';
        htmlContent += '<div class="col-sm-6 value"><p>' + data.nativeName + '</p></div></div>';
            
        htmlContent += '<div class="row"><div class="col-sm-6 title"><p>Capital:</p></div>';
        htmlContent += '<div class="col-sm-6 value"><p>' + data.capital + '</p></div></div>';
            
        htmlContent += '<div class="row"><div class="col-sm-6 title"><p>Population:</p></div>';
        htmlContent += '<div class="col-sm-6 value"><p>' + data.population + '</p></div></div>';
            
        htmlContent += '<div class="row"><div class="col-sm-6 title"><p>Area:</p></div>';
        htmlContent += '<div class="col-sm-6 value"><p>' + data.area + ' km<sup>2</sup></p></div></div>';
        
        htmlContent += '<div class="row"><div class="col-sm-6 title"><p>Region:</p></div>';
        htmlContent += '<div class="col-sm-6 value"><p>' + data.region + '</p></div></div>';
            
        htmlContent += '<div class="row"><div class="col-sm-6 title"><p>Currency:</p></div>';
        htmlContent += '<div class="col-sm-6 value"><p>' + data.currencies + '</p></div></div>';
            
        htmlContent += '<div class="row"><div class="col-sm-6 title"><p>Internet domain:</p></div>';
        htmlContent += '<div class="col-sm-6 value"><p>' + data.topLevelDomain[0] + '</p></div></div>';
            
        htmlContent += '<div class="row"><div class="col-sm-12"></div></div></div>';
            
        countryList.append($('<li>').html(htmlContent));
        
        
    })
    }
})