$(document).ready(function() {

    $('#showUsers').hide();
    $('#showApartments').show();
    $('#showReservations').hide();
    $('#showComments').hide();
    
    $.ajax({
        type : "get",
        url : "rest/users",
        contentType : "application/json",
        success : function(response){
            $('#tableUsers tbody').empty();
            console.log(response);
            for(var user of response){
               
                addUser(user);
              
         }
     }
    }); 
    $.ajax({
        type : "get",
        url : "rest/apartments",
        contentType : "application/json",
        success : function(response){
            $('#tableApartments tbody').empty();
            console.log(response);
            for(var apartment of response){
                if(apartment.apartmentStatus == 'ACTIVE'){
                addApartment(apartment);
            }   
         }
     }
  });
  $.ajax({
    type : "get",
    url : "rest/reservations",
    contentType : "application/json",
    success : function(response){
        $('#tableReservations tbody').empty();
        console.log(response);
        for(var reservation of response){
            
            addReservation(reservation);
           
     }
 }
});
$.ajax({
    type : "get",
    url : "rest/comments",
    contentType : "application/json",
    success : function(response){
        $('#tableComments tbody').empty();
        console.log(response);
        for(var comment of response){
            
            addComment(comment);
           
     }
 }
});
 
    $('#openUsers').click(function(){
    $('#showUsers').show();
    $('#showApartments').hide();
    $('#showReservations').hide();
    $('#showComments').hide();
});
    
    $('#openApratments').click(function(){
        $('#showUsers').hide();
        $('#showApartments').show();
        $('#showReservations').hide();
        $('#showComments').hide();
       
        }); 
    $('#homePage').click(function(){
        $('#showUsers').hide();
        $('#showApartments').show();
        $('#showReservations').hide();
        $('#showComments').hide();
    });
    $('#openReservations').click(function(){
        $('#showUsers').hide();
        $('#showApartments').hide();
        $('#showReservations').show();
        $('#showComments').hide();
    });
    $('#openComments').click(function(){
        $('#showUsers').hide();
        $('#showApartments').hide();
        $('#showReservations').hide();
        $('#showComments').show();
    });
});

function addComment(comment){
    var tr = $('<tr class="tableRow"></tr>');	
    var id = $('<td class="tableData">'+comment.id+'</td>');
    var guest = $('<td class="tableData">'+comment.guest.firstname+ '<br>' + comment.guest.lastname + '</td>');
    var apartment = $('<td class="tableData">'+comment.apartment.name+'</td>');
    var content = $('<td class="tableData">'+comment.commentText +'</td>');     
    var grade = $('<td class="tableData">'+comment.grade+'</td>');  
     tr.append(id).append(guest).append(apartment).append(content).append(grade);
     $('#tableComments tbody').append(tr);
}
function addReservation(reservation){
    var tr = $('<tr class="tableRow"></tr>');	
    var id = $('<td class="tableData">'+reservation.id+'</td>');
    var apartment = $('<td class="tableData">'+reservation.apartment.name+'</td>');
    var startDate = $('<td class="tableData">'+reservation.startDate+'</td>');
    var nightsNumber = $('<td class="tableData">'+reservation.nightsNumber +'</td>');     
    var totalPrice = $('<td class="tableData">'+reservation.totalPrice+'</td>');
    var guest = $('<td class="tableData">'+reservation.guest.firstname + '<br>' + reservation.guest.lastname +'</td>');
    var status = $('<td class="tableData">'+reservation.status +'</td>');
     tr.append(id).append(apartment).append(startDate).append(nightsNumber).append(totalPrice).append(guest).append(status);
     $('#tableReservations tbody').append(tr);
}
function addUser(user){
    var tr = $('<tr class="tableRow"></tr>');	
    var id = $('<td class="tableData">'+user.id+'</td>');
    var username = $('<td class="tableData">'+user.username+'</td>');
    var password = $('<td class="tableData">'+user.password+'</td>');
    var firstname = $('<td class="tableData">'+user.firstname +'</td>');     
    var lastname = $('<td class="tableData">'+user.lastname+'</td>');
    var gender = $('<td class="tableData">'+user.gender+'</td>');
    var typeOfAccount = $('<td class="tableData">'+user.accountType +'</td>');
    var brisanje = $('<td class="tableData"><a href="#" style="color: white;"><span class="glyphicon glyphicon-trash"></span>Brisanje</a></td> ');
    var izmena = $('<td class="tableData"><a href="#" style="color: white;"><span class="glyphicon glyphicon-edit"></span>Izmena</a></td> ');
    tr.append(id).append(username).append(password).append(firstname).append(lastname).append(gender).append(typeOfAccount).append(brisanje).append(izmena);
     $('#tableUsers tbody').append(tr);
}

function addApartment(apartment){
    var tr = $('<tr class="tableRow"></tr>');	
    var image = $('<td><img class="img-fluid img-thumbnail" alt="Slika" src="'+apartment.imagePaths[0]+'"</img></td>');
    var name = $('<td class="tableData">'+apartment.name+'</td>');
    var roomNumber = $('<td class="tableData">'+apartment.roomNumber+'</td>');
    var guestNumber = $('<td class="tableData">'+apartment.guestNumber+'</td>');
    var location = $('<td class="tableData">'+apartment.location.address.street +'<br>'+
        apartment.location.address.city+ '<br>'+
        apartment.location.address.zipCode+ '<br>'+
        apartment.location.latitude	 + '<br>'+
        apartment.location.longitude +'</td>');
        
    var apartmentType = $('<td class="tableData">'+apartment.apartmentType+'</td>');
    var price = $('<td class="tableData">'+apartment.priceByNight+'</td>');
    var host = $('<td class="tableData">'+apartment.host.firstname + '<br>' + apartment.host.lastname +'</td>');
    var brisanje = $('<td class="tableData"><a href="#" style="color: white;"><span class="glyphicon glyphicon-trash"></span>Brisanje</a></td> ');
    var izmena = $('<td class="tableData"><a href="#" style="color: white;"><span class="glyphicon glyphicon-edit"></span>Izmena</a></td> ');
    tr.append(image).append(name).append(roomNumber).append(guestNumber).append(location).append(apartmentType).append(price).append(host).append(brisanje).append(izmena);
     $('#tableApartments tbody').append(tr);
}
