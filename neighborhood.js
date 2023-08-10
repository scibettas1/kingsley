<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

$(document).ready(function(){
    var img = $('img')
    img.attr("src", img.attr("src").replace('https://maps.gstatic.com/mapfiles/transparent.png', 'https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/logo-color.png'));
    console.log("this is running")    
});