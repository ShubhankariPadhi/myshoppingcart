

$(document).ready(function () {

    /*declaring  arrays of subTypes*/
    var mobile=new Array(Object);
    var biography=new Array(Object);
    var fiction=new Array(Object);
    var comic=new Array(Object);
    var arr=new Array(Object);

    var high_ratings=new Array(Object);
    var arr_disp=new Array(Object);
    var arr_hide=new Array(Object);

   var disp=0,hid=0,hr=0;



    /*declaring variables*/
    var mob=0,fic=0,bio=0,com=0;

    var empdata='' ;
    var ratings=0;
    var n=0;
    var subType_prod='';
    var ids='';
    var a=0;
    /*////////// fetching json data and store them in arrays of subtypes & append them on events call //////////*/
    $.getJSON("products.json",function(data){
        n=data.length;

        for(var i=0;i<n;i++){
            ratings=data[i].rating;
            subType_prod=data[i].subType;
            ids=data[i].id;

      arr[a]+=data[i].id;
           a++;

           arr_disp[i] = "<ul  id='"+data[i].id+"' type='none'><li>"+"<img class='hom' id='"+data[i].id+"'  style='height: 300px;width: 200px' src='"+data[i].imgPath+"'>"+"</li>"
                        +"<li>" + data[i].name + "</li>"+
                    "<li> <span><i class='fa fa-inr' aria-hidden='true'></i> </span>" + data[i].price + "</li><li>"+ "<span class='btn btn-success'>"+data[i].rating+"<i class='fa fa-star' aria-hidden='true'></i></span> "+  "</li></ul>";


           /* arr_hide[hid] ="<ul class='hom' type='none'><li>"+data[i].description+" </li>"+
                "<li>"+data[i].type +"</li>"+
                +"<li>"+data[i].subType+"</li>"+
                +"<li>"+data[i].brand +"</li>"+
                +"<li>"+data[i].RAM+"</li>"+
                +"<li>"+data[i].modelName +"</li>"+
                +"<li>"+data[i].color +"</li>"+
                +  " <li></li></ul>";*/



            /*  appending json data to home page with highly rated products */
            if(ratings>=4){
              high_ratings[hr]=arr_disp[i];
                hr++;
            }
            /* storing electronic type products from json obj into arrays of its corresponding subTypes*/

            if( subType_prod.localeCompare("mobile")==0){
                mobile[mob] =arr_disp[i];
                  mob++;
            }

            /*  storing book type products from json obj into  arrays of its corresponding subTypes */

            if(subType_prod.localeCompare("biography")==0){
                biography[bio] = arr_disp[i];
                bio++;
            }
            if(subType_prod.localeCompare("fiction")==0){
                fiction[fic] =arr_disp[i];
                fic++;
            }
            if(subType_prod.localeCompare("comic")==0){
                comic[com] = arr_disp[i];
                    com++;
            }


       disp++;
            // hid++;

        }



     /* fetching product details on clicking the image    */
    $(document).on('click', '.hom', function () {
       // console.log(this);
        $("#emp").empty();
        $("#emp").append(this);
       // console.log(this.id);

        for(var i=0;i<data.length;i++){
           // console.log(data[i].value);
            if(this.id==data[i].id){
                $("#emp").append(
                    "<div col-sm-6>" +"<ul type='none' class='hom' type='none'>"+
                    " <li>"+data[i].id+" </li>"+
                    " <li>"+data[i].name+" </li>"+
                    "<li> <span><i class='fa fa-inr' aria-hidden='true'></i> </span>" + data[i].price + "</li>"+
                    +"<li>"+ "<span class='btn btn-success'>"+data[i].rating+"<i class='fa fa-star' aria-hidden='true'></i></span> "+
                   " <li>"+data[i].description+" </li>"+
                "<li>"+data[i].type +"</li>"+
                +"<li>"+data[i].subType+"</li>"+
                +"<li>"+data[i].brand +"</li>"+
                +"<li>"+data[i].RAM+"</li>"+
                +"<li>"+data[i].modelName +"</li>"+
                +"<li>"+data[i].color +"</li>"+
                +  " <li></li></ul></div>");
               // console.log(data[i].brand);
            }
        }



    });





        /*  appending highly rated  products to home page  */

        $("#emp").append(high_ratings);




        /* appending subtype arrays on hover on types of products */

        $("#navbarDropdownElectronics").mouseenter(function () {
            $('#electronics_dropdown').toggle('medium');
            $("#emp").empty();
            $("#emp").append(mobile);
            $("#showbooks").hide();
        });

        $("#navbarDropdownBooks").mouseenter(function () {
            $('#showbooks').toggle('medium');
            $("#emp").empty();
            $("#emp").append(fiction);
            $("#emp").append(biography);
            $('#electronics_dropdown').hide();
        });


        /* appending data to home page on home click button*/

        $("#home_id").click(function () {
            $("#emp").empty();
            $("#emp").append(high_ratings);
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












//empdata += "<td>" + data[i].camera.front + "</td>";
// empdata += "<td>" + data[i].camera.rear + "</td>";

// empdata += "<td>" + data[i].comments[0].text + "</td>";
//empdata += "<td>" + data[i].comments[0].rating + "</td>";
//empdata += "<td>" + data[i].comments[0].commentedOn + "</td>";
//empdata += "<td>" + data[i].comments[0].username + "</td>";


// empdata += "<td>" + data[i].offers[0].type + "</td>";
// empdata += "<td>" + data[i].offers[0].percentage + "</td>";


