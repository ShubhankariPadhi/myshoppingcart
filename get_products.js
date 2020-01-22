

$(document).ready(function () {
 /*declaring  arrays of subTypes*/
    var mobile=new Array(Object);
    var biography=new Array(Object);
    var fiction=new Array(Object);
    var comic=new Array(Object);

    /*declaring variables*/
    var mob=0,fic=0,bio=0,com=0;

    var empdata='' ;
    var ratings=0;
    var n=0;
    var subType_prod='';

   /*////////// fetching json data and store them in arrays of subtypes & append them on events call //////////*/
    $.getJSON("products.json",function(data){
        n=data.length;

        for(var i=0;i<n;i++){
            ratings=data[i].rating;
            subType_prod=data[i].subType;

            /*  appending json data to home page with highly rated products */
                if(ratings>=4){
                empdata += "<ul type='none'><li>"+"<img style='height: 300px;width: 200px' src='"+data[i].imgPath+"'>"+"</li>";
                empdata += "<li>" + data[i].name + "</li>";
                empdata += "<li> <span><i class='fa fa-inr' aria-hidden='true'></i> </span>" + data[i].price + "</li><li>"+ "<span class='btn btn-success'>"+data[i].rating+"<i class='fa fa-star' aria-hidden='true'></i></span> "+  "</li></ul>";
                }

            /* storing electronic type products from json obj into arrays of its corresponding subTypes*/

            if( subType_prod.localeCompare("mobile")==0){
                mobile[mob] = "<ul type='none'><li>" + "<img style='height: 300px;width: 200px' src='" + data[i].imgPath + "'>" + "</li>"
                             + "<li>" + data[i].name + "</li>" + "<li> <span><i class='fa fa-inr' aria-hidden='true'></i> </span> " + data[i].price +"</li><li><span class='btn btn-success'>"+data[i].rating+"<i class='fa fa-star' aria-hidden='true'></i></span> "+"</li></ul>";
                mob++;
            }

            /*  storing book type products from json obj into  arrays of its corresponding subTypes */

            if(subType_prod.localeCompare("biography")==0){
                biography[bio] = "<ul type='none'><li>" + "<img style='height: 300px;width: 200px' src='" + data[i].imgPath + "'>" + "</li>"
                    + "<li>" + data[i].name + "</li>" + "<li> <span><i class='fa fa-inr' aria-hidden='true'></i> </span>" + data[i].price +"</li><li><span class='btn btn-success'>"+data[i].rating+"<i class='fa fa-star' aria-hidden='true'></i></span>"+ "</li></ul>";
                bio++;
            }
            if(subType_prod.localeCompare("fiction")==0){
                fiction[fic] = "<ul type='none'><li>" + "<img style='height: 300px;width: 200px' src='" + data[i].imgPath + "'>" + "</li>"
                    + "<li>" + data[i].name + "</li>" + "<li> <span><i class='fa fa-inr' aria-hidden='true'></i> </span>" + data[i].price +"</li><li><span class='btn btn-success'>"+data[i].rating+"<i class='fa fa-star' aria-hidden='true'></i></span>" +"</li></ul>";
                fic++;
            }
            if(subType_prod.localeCompare("comic")==0){
                comic[com] = "<ul type='none'><li>" + "<img style='height: 300px;width: 200px' src='" + data[i].imgPath + "'>" + "</li>"
                    + "<li>" + data[i].name + "</li>" + "<li> <span><i class='fa fa-inr' aria-hidden='true'></i> </span>" + data[i].price +"</li><li><span class='btn btn-success'>"+data[i].rating+"<i class='fa fa-star' aria-hidden='true'></i></span>"+ "</li></ul>";
                com++;
            }

        }


        /*  appending highly rated  products to home page  */

         $("#emp").append(empdata);

        /* appending subtype arrays on hover on types of products */

        $("#elec_tab").hover(function () {
            $("#emp").empty();
            $("#emp").append(mobile);
        });
        $("#books_tab").hover(function () {

            $("#emp").empty();
            $("#emp").append(fiction);
            $("#emp").append(biography);
        });
        $('#navbarDropdownElectronics').mouseenter(function () {
            $('#electronics_dropdown').toggle('medium');
            $('#electronics_dropdown').hide();
        });

        $('#navbarDropdownBooks').mouseenter(function () {
            $('#showbooks').toggle('medium');
            $('#showbooks').hide();
        });

      /* appending data to home page on home click button*/

        $("#home_id").click(function () {
            $("#emp").empty();
            $("#emp").append(empdata);
        });

        /* appending electronic subtypes on clicking the particular subtypes */

        $("#mobile_id").click(function () {
            $("#emp").empty();
            for(var i=0;i<mobile.length;i++){
                $("#emp").append(mobile[i]);
            }

        });

        /*appending book subtypes on clicking the particular subtypes */

        $("#biography_id").click(function () {
            $("#emp").empty();
            $("#emp").append(biography);
        });


        $("#fiction_id").click(function () {
            $("#emp").empty();
            $("#emp").append(fiction);
        });
        $("#Comic_id").click(function () {
            $("#emp").empty();
            $("#emp").append(comic);
        });




    });
});












//empdata += "<tr><td>"+"<img style='height: 100px;width: 70px' src='"+data[i].imgPath+"'>"+"</td></tr>";
// empdata += "<tr><td>" + data[i].id + "</td>";
// empdata += "<td>" + data[i].name + "</td>";
// empdata += "<td>" + data[i].price + "</td>";
//empdata += "<td>" + data[i].description + "</td>";
//empdata += "<td>" + data[i].type + "</td>";
//empdata += "<td>" + data[i].subType + "</td>";
// empdata += "<td>" + data[i].brand + "</td>";
// empdata += "<td>" + data[i].RAM + "</td>";
// empdata += "<td>" + data[i].modelName + "</td>";
//empdata += "<td>" + data[i].color + "</td>";

// empdata += "<td>" + data[i].rating + "</td>";


//empdata += "<td>" + data[i].camera.front + "</td>";
// empdata += "<td>" + data[i].camera.rear + "</td>";

// empdata += "<td>" + data[i].comments[0].text + "</td>";
//empdata += "<td>" + data[i].comments[0].rating + "</td>";
//empdata += "<td>" + data[i].comments[0].commentedOn + "</td>";
//empdata += "<td>" + data[i].comments[0].username + "</td>";


// empdata += "<td>" + data[i].offers[0].type + "</td>";
// empdata += "<td>" + data[i].offers[0].percentage + "</td>";




