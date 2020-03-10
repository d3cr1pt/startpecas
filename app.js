var app = {
    // Dados do Aplicativo
    copyright: {
        appname: 'StartPeças'
    },
    // Páginas
    pages: {
        index: {
            filename: 'index.html',
            title_ptBR: 'Início',
            sections: {
                /**
                 * Detalhes para a página
                 * TODO: Implementar gerador de conteudo
                 */
                section1: {
                    type: 'carousel',
                    id: 'carousel_title',
                    outer_id: '#section1',
                    slide1: {
                        filename: 'img/slider_1.jpg',
                        title_ptBR: 'Primeiro Slide',
                        description_ptBR: 'Lorem Ipsum.'
                    },
                    slide2: {
                        filename: 'img/slider_2.jpg',
                        title_ptBR: 'Segundo Slide',
                        description_ptBR: 'Lorem Ipsum.'
                    },
                    slide3: {
                        filename: 'img/slider_3.jpg',
                        title_ptBR: 'Terceiro Slide',
                        description_ptBR: 'Lorem Ipsum.'
                    }
                },
                section2: {}
            }
        },
        shop: {
            filename: 'shop.html',
            title_ptBR: 'Loja'
        },
        about: {
            filename: 'about.html',
            title_ptBR: 'Sobre Nós'
        },
        contact: {
            filename: 'contact.html',
            title_ptBR: 'Contato'
        },
        services: {
            filename: 'services.html',
            title_ptBR: 'Serviços'
        }
    },
    // Geradores de conteúdo
    generator: {
        html: function(){
            el_title = document.getElementsByTagName("title")[0]
            el_title.innerHTML = globalThis.app.copyright.appname
        },
        carousel: function(id){
            //Variaveis: ID  
            id = app.pages.index.sections.section1.id;
            //Variaveis: Slides
            src1: app.pages.index.sections.section1.slide1.filename;
            src2: app.pages.index.sections.section1.slide2.filename;
            src3: app.pages.index.sections.section1.slide3.filename;
            title1: app.pages.index.sections.section1.slide1.title_ptBR;
            title2: app.pages.index.sections.section1.slide2.title_ptBR;
            title3: app.pages.index.sections.section1.slide3.title_ptBR;
            description1: app.pages.index.sections.section1.slide1.description_ptBR;
            description2: app.pages.index.sections.section1.slide2.description_ptBR;
            description3: app.pages.index.sections.section1.slide3.description_ptBR;
            //Variaveis: ID Final
            outer_id: app.pages.index.sections.section1.id;
            //Linha 1
            el1 = document.createElement("div");
            el1.setAttribute("id",id);
            el1.setAttribute("class","carousel");
            el1.setAttribute("data-ride","carousel");
                //Linha 2
                el2 = document.createElement("ol");
                el2.setAttribute("class","carousel-indicators");
                    //Linha 3
                    el3 = document.createElement("li");
                    el3.setAttribute("data-target","#"+id);
                    el3.setAttribute("data-slide-to","0");
                    el3.setAttribute("class","active");
                    el2.appendChild(el3);
                    //Linha 4
                    el4 = document.createElement("li");
                    el4.setAttribute("data-target","#"+id).setAttribute("data-slide-to","1")
                    el2.appendChild(el4);
                    //Linha 5
                    el5 = document.createElement("li");
                    el5.setAttribute("data-target","#"+id).setAttribute("data-slide-to","2").appendChild(el5);
                el1.appendChild(el2);
                //Linha 6
                el6 = document.createElement("div");
                el6.setAttribute("class","carousel-inner");
                    //Linha 7
                    el7 = document.createElement("div");
                    el7.setAttribute("class","carousel-item active");
                        //Linha 8
                        el8 = document.createElement("img");
                        el8.setAttribute("src",src1).setAttribute("class","d-block w-100").setAttribute("alt",title1);
                        el7.appendChild(el8);
                            //Linha 9
                            el9 = document.createElement("div");
                            el9.setAttribute("class","carousel-caption d-none d-md-block");
                                //Linha 10
                                el10 = document.createElement("h5");
                                el10.setAttribute("class","carousel-slide-title").innerHTML = title1;
                                el9.appendChild(el10);
                                //Linha 11
                                el11 = document.createElement("p");
                                el11.setAttribute("class","carousel-slide-description").innerHTML = description1;
                                el9.appendChild(el11);
                            el7.appendChild(el9);
                    el6.appendChild(el7);
                    //Linha 12
                    el12 = document.createElement("div");
                    el12.setAttribute("class","carousel-item");
                        //Linha 13
                        el13 = document.createElement("img");
                        el13.setAttribute("src",src2).setAttribute("class","d-block w-100").setAttribute("alt",title2);
                        el12.appendChild(el13);
                            //Linha 14  
                            el14 = document.createElement("div");
                            el14.setAttribute("class","carousel-caption d-none d-md-block");
                                //Linha 15
                                el15 = document.createElementElement("h5");
                                el15.setAttribute("class","carousel-slide-title").innerHTML = title2;
                                el14.appendChild(el15);
                                //Linha 16
                                el16 = document.createElement("p");
                                el16.setAttribute("class","carousel-slide-description").innerHTML = description2;
                                el14.appendChild(el16);
                        el12.appendChild(el14);
                    el6.appendChild(el12);
                    // Linha 17
                    el17 = document.createElement("div");
                    el17.setAttribute("class","carousel-item");
                        // Linha 18
                        el18 = document.createElement("img");
                        el18.setAttribute("src",src3).setAttribute("class","d-block w-100").setAttribute("alt",title3);
                        el17.appendChild(el18);
                            // Linha 19
                            el19 = document.createElement("div");
                            el19.setAttribute("class","carousel-caption d-none d-md-block");
                                // Linha 20
                                el20 = document.createElement("h5");
                                el20.setAttribute("class","carousel-slide-title").innerHTML = title3;
                                el19.appendChild(el20);
                                // Linha 21
                                el21 = document.createElement("p");
                                el21.setAttribute("class","carousel-slide-description").innerHTML = description3;
                                el19.appendChild(el21);
                        el17.appendChild(el19);
                    el6.appendChild(el17);
                    // Linha 22
                    el23 = document.createElement("a");
                    el23.setAttribute("class","carousel-control-prev").setAttribute("href","#"+id).setAttribute("role","button").setAttribute("data-slide","prev");
                        // Linha 23
                        el24 = document.createElement("span");
                        el24.setAttribute("class","carousel-control-prev-icon").setAttribute("aria-hidden","true");
                        el23.appendChild(el24);
                        // Linha 24
                        el25 = document.createElement("span");
                        el25.setAttribute("class","sr-only").innerHTML = "Previous";
                        el23.appendChild(el25);
                    // Linha 25
                    el1.appendChild(el23);
                    el26 = document.createElement("a");
                    el26.setAttribute("class","carousel-control-next").setAttribute("href","#"+id).setAttribute("role","button").setAttribute("data-slide","next");
                        // Linha 26
                        el27 = document.createElement("span");
                        el27.setAttribute("class","carousel-control-prnextev-icon").setAttribute("aria-hidden","true");
                        el26.appendChild(el27);
                        // Linha 27
                        el28 = document.createElement("span");
                        el28.setAttribute("class","sr-only").innerHTML = "Next";
                        el26.appendChild(el28);
                    el1.appendChild(el26);
                // JQuery Appending to Page
                $(app.pages.index.sections.section1.outer_id).append(el1);
            // TODO: ReImplement using only HTML appending, without DOMCreation
        }
    }
}
