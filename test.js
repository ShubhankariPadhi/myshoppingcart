

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






        /*  appending highly rated  products to home page  */

        $("#emp").append(high_ratings);


        /* fetching product details on clicking the image    */
        $(document).on('click', '.hom', function () {
            // console.log(this);
            $("#emp").empty();
            //$("#emp").append(this);
            // console.log(this.id);

            for(var i=0;i<data.length;i++) {
                // console.log(data[i].value);
                var ofr_type;
                var ofr_amt;
                var cmnt_text,cmnt_rating,cmnt_commentedOn,cmnt_username;
                var tot_rating_product=0;
                var tot_reviews_product=0;

                if (this.id == data[i].id) {





                    $("#emp").append(
                        "<div class='col-sm-5'><img style='height: 500px;width: 450px' src='"+data[i].imgPath+"' >" +
                        "<br><div ><button class='btn  col-sm-5' style='background-color: orange'>Add to cart</button> "+
                        "<button class='btn  col-sm-6' style='background-color: tomato'>Add to Buy</button>"+
                        "</div>"+
                        "</div>"+
                        "<div id='new' class='col-sm-7'>" + "<ul type='none'   class='hom' type='none'>" +
                        " <li><b> " + data[i].name + "</b></li>" +
                        "<li class='append_tot_rating_reviews'>" + "<span class='btn btn-success'>" + data[i].rating + "<i class='fa fa-star' aria-hidden='true'></i></span> </li> " +
                        "<li class='text-success'> Special price</li>"+
                        "<li id='offers_append'> <i class='fa fa-inr' aria-hidden='true'></i><span id='ofr_price'> " + data[i].price + " </span> </li>" +
                        "</ul></div> "
                        );


                    for(var j=0;j<data[i].offers.length;j++){
                        ofr_type=data[i].offers[j].type;
                        ofr_amt=data[i].offers[j].amount;
                        var old_amt=data[i].price;
                        if(data[i].offers[j].type=="Book now"){

                                 data[i].price= old_amt-ofr_amt;
                                 $("#ofr_price").empty();
                                $("#ofr_price").append(
                                "<span> "+ data[i].price +" <del>"+old_amt+"  </del></span>"
                              );

                             }

                        if(data[i].offers[j].type=="Emi"){

                            $("#ofr_price").append(
                                "<span>Emi offer price is "+data[i].offers[j].amount+"  </span>"
                            );

                        }





                       $('#new').append(
                           "<ul type='none' class='text-success'><h5>Available offers </h5>" +
                           "<li class='text-success'>Get flat " +  ofr_amt+ " <span>off on </span>" + ofr_type + " </li></ul>"
                       );
                      //  console.log(data[i].offers[j].type)
                    }//offers


                    $("#new").append("<ul type='none'>" +
                        " <li class=''><b>Description:</b>  " + data[i].description + " </li>" +
                        "</ul>");



                    // console.log(data[i].brand);


                    if (data[i].subType == "mobile") {
                        $("#new").append("<ul type='none'><h5>Specifications</h5>" +
                            "<li><b>Brand </b> " + data[i].brand + "  </li>" +
                            "<li><b>Device Type </b> " + data[i].type + "</li>" +

                            "<h5>Display Features</h5> "+
                            "<li> <b>browse type </b>" + data[i].subType + "</li>" +
                            "<li><b>Model Name</b>  " + data[i].modelName + "</li>" +
                            "<li><b>Color:</b> " + data[i].color + "</li>"+

                            "<h5>Memory & Storage Features</h5> "+
                            "<li><b>RAM </b> " + data[i].RAM + "</li>" +

                            "<h5 id='cam'>Camera Features</h5>"+
                            "<li> <b>Front </b> "+data[i].camera.front+ "</li>"+
                            "<li> <b>Rear </b>"+data[i].camera.rear+ "</li>"
                           +"</ul>"
                        );
                    }//mobile  specifications


                    if (data[i].type == "books") {
                        $("#new").append("<ul type='none'><h5>Specifications</h5>" +
                            "<li><b>Book Type: </b> " + data[i].subType + "</li>" +
                            "<li><b>Author :</b> " + data[i].by + "</li> </ul>"
                        );
                    }//books specifications


                    //if (data[i].type == "comments") {
                        $('#new').append("<ul type='none'>"+
                            "<li > <b class='col-sm-4'>Ratings & Reviews </b>" + "<span class='offset-2 btn btn-success  '>" + data[i].rating + "<i class='fa fa-star' aria-hidden='true'></i> " +
                            "</span><span class='col-sm-4 append_tot_rating_reviews '></span></li></ul>" );

                        for(var j=0;j<data[i].comments.length;j++){
                            if(data[i].comments[j].rating){
                                tot_rating_product++;
                            }
                            if(data[i].comments[j].text){
                                tot_reviews_product++;
                            }

                            cmnt_text=data[i].comments[j].text;
                            cmnt_rating=data[i].comments[j].rating;
                            cmnt_commentedOn=data[i].comments[j].commentedOn;
                            cmnt_username=data[i].comments[j].username;

                            $('#new').append("<ul type='none'> "+
                                "<li>" + "<span class='btn  btn-success'> " + cmnt_rating+ " <i class='fa fa-star' aria-hidden='true'></i></span><span>  "+ cmnt_text+" </span> </li> " +

                                "<li class='text-secondary'>"+ cmnt_username+" <span> <i class='fa fa-check-circle' aria-hidden='true'></i> Certified Buyer,location , on </span>"+cmnt_commentedOn+"</li>"

                            );

                        }
$(".append_tot_rating_reviews").append("<span>  " +
    tot_rating_product +" Ratings & "+tot_reviews_product+ " Reviews </span>");

                   // }//comments







                }//if data[i] closed

            }//for closed

        });// on close




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


