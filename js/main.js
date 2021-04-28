$(document).ready(function(){

    //Slider
    
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({                
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
          });
    }
    

    //Post

    if(window.location.href.indexOf('index') > -1){
        var posts= [
            {
                title: 'Prueba de titulo 1',
                date: moment().format("dddd D MMMM YYYY"),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
            },
            {
                title: 'Prueba de titulo 1',
                date: new Date(),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
            },
            {
                title: 'Prueba de titulo 1',
                date: new Date(),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
            },
            {
                title: 'Prueba de titulo 1',
                date: moment().format("D MMMM YYYY"),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
            },
            {
                title: 'Prueba de titulo 1',
                date: new Date(),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
            },
        ];

        posts.forEach((item, index)=> {
            var post = `
            <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
        </article>
            `;
            
            $('#posts').append(post);
        });
    };

    //Selector de temas

    var tema = $('#tema');

    $('#togreen').click(function(){
        tema.attr("href", "css/green.css");
    });
    $('#tored').click(function(){
        tema.attr("href", "css/red.css");
    });
    $('#toblue').click(function(){
        tema.attr("href", "css/blue.css");
    });

    //Scroll subir web

    $('.subir').click(function(e){
        e.preventDefault();
        
        $('html,body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso

    $('#login form').submit(function(){
        var form_name = $('#form-name').val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != undefined){
        var about_parrafo = $('#about p');

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+ "</strong>");          //sustituir el p por bienvenido nombre
        about_parrafo.append("<a href ='#' id= 'logout'>Cerrar sesion</a>");
        
        $('#login').hide();                                       //ocultar el login 
        
        $('#logout').click(function(){                            //al dal clilck borra el localstorage
            localStorage.clear();
            location.reload();                                    //y recarga la pagina
        });
    }; 

    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    };

    if(window.location.href.indexOf('reloj') > -1){             //reloj
        setInterval(function(){                                 //con el set interrval lo mostramos en tiempo real 
            var reloj = moment().format("hh:mm:ss");            
            $('#reloj').html(reloj);
        }, 1000);
    };

    //validacion

    if(window.location.href.indexOf('contacto') > -1){ 

        $("form input[name='date']").datepicker({              //mostrar calendario 
            dateFormat: 'dd-mm-yy'                              //cambiar de / a -
        });

        $.validate({
            lang:'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });

    }
});