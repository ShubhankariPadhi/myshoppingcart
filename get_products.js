

$(document).ready(function () {

    var mobile=new Array(Object);
    var biography=new Array(Object);
    var fiction=new Array(Object);
    var comic=new Array(Object);

    var mob=0,fic=0,bio=0,com=0;

    var empdata='' ;
    // var ids='';
    var ratings=0;
    var n=0;
    var subType_prod='';
    var m='';
    $.getJSON("products.json",function(data){

        //console.log(data.length);
        n=data.length;

        for(var i=0;i<n;i++){

            ratings=data[i].rating;
            subType_prod=data[i].subType;

            /*  ///////////////////// home page with highly rated products  ////////////////////////////*/


                if(ratings>=4){
                empdata += "<ul type='none'><li>"+"<img style='height: 100px;width: 70px' src='"+data[i].imgPath+"'>"+"</li>";
                empdata += "<li>" + data[i].name + "</li>";
                empdata += "<li> <span>price </span>" + data[i].price + "</li><li>"+ "<span class='btn btn-success'>"+data[i].rating+"<i class='fa fa-star' aria-hidden='true'></i></span> "+  "</li></ul>";



            }

            /* ///////////////////////////     electronics arrays    ///////////////////////////*/
            m=subType_prod.localeCompare("mobile");
            if( m==0){
                mobile[mob] = "<ul type='none'><li>" + "<img style='height: 100px;width: 70px' src='" + data[i].imgPath + "'>" + "</li>"
                             + "<li>" + data[i].name + "</li>" + "<li> <span>price </span> " + data[i].price +"</li><li><span class='btn btn-success'>"+data[i].rating+"<i class='fa fa-star' aria-hidden='true'></i></span> "+"</li></ul>";
                mob++;
            }

            /*  /////////////////////////////////  book arrays //////////////////////  */

            m=subType_prod.localeCompare("biography");
            if(m==0){
                biography[bio] = "<ul type='none'><li>" + "<img style='height: 100px;width: 70px' src='" + data[i].imgPath + "'>" + "</li>"
                    + "<li>" + data[i].name + "</li>" + "<li> <span>price </span>" + data[i].price +"</li><li><span class='btn btn-success'>"+data[i].rating+"<i class='fa fa-star' aria-hidden='true'></i></span>"+ "</li></ul>";
                bio++;
            }


            m=subType_prod.localeCompare("fiction");
            if(m==0){
                fiction[fic] = "<ul type='none'><li>" + "<img style='height: 100px;width: 70px' src='" + data[i].imgPath + "'>" + "</li>"
                    + "<li>" + data[i].name + "</li>" + "<li> <span>price </span>" + data[i].price +"</li><li><span class='btn btn-success'>"+data[i].rating+"<i class='fa fa-star' aria-hidden='true'></i></span>" +"</li></ul>";
                fic++;
            }

            m=subType_prod.localeCompare("comic");
            if(m==0){
                comic[com] = "<ul type='none'><li>" + "<img style='height: 100px;width: 70px' src='" + data[i].imgPath + "'>" + "</li>"
                    + "<li>" + data[i].name + "</li>" + "<li> <span>price </span>" + data[i].price +"</li><li><span class='btn btn-success'>"+data[i].rating+"<i class='fa fa-star' aria-hidden='true'></i></span>"+ "</li></ul>";
                com++;
            }

        }


        $("#emp").append(empdata);



      /* ////////////////////       home page         ///////////////////////////////*/

        $("#home_id").click(function () {
            $("#emp").empty();
            $("#emp").append(empdata);
        });

        /* //////////////////////        electronics      ///////////////////////////*/

        $("#mobile_id").click(function () {
            $("#emp").empty();
            for(var i=0;i<mobile.length;i++){
                $("#emp").append(mobile[i]);
            }



        });


        /* ////////////////////////      books     ///////////////////////////////////*/

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




