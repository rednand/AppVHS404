# import scrapy

# class YoutubeBot(scrapy.Spider):
#         name = "Youtube Bot"
#         start_urls = ["https://www.alura.com.br/cursos-online-programacao"]

#         def parse(self, response):
#             SELETOR =".subcategoria__item"
#             cursos = []
#             for categoria in response.css(SELETOR):
#                 curso =  {}

#                 NOME_SELETOR = ".card-curso__nome ::text"
#                 LINK_SELECTOR = ".card-curso ::attr(href)"

#                 curso['nome'] = categoria.css(NOME_SELETOR).extract_first()
#                 curso['link'] = "https://www.alura.com.br" + categoria.css(LINK_SELECTOR).extract_first()
#                 print(curso)

#                 cursos.append(curso)

#             print("Toral de Cursos: ", len(cursos))

import scrapy


class YoutubeBot(scrapy.Spider):
    name = "Youtube Bot"
    start_urls = ["https://www.youtube.com/results?search_query=m3gan+review"]

    def parse(self, response):
        SELETOR = "#container"
        cursos = []
        for categoria in response.css(SELETOR):
            curso = {}

            # NOME_SELETOR = ".ytd-video-renderer"
            LINK_SELECTOR = "#video-title ::attr(href)"

            # curso['teste'] = categoria.css(NOME_SELETOR).extract_first()
            curso['link'] = categoria.css(LINK_SELECTOR).extract_first()
            print(curso)

            cursos.append(curso)

        print("Toral de Cursos: ", len(cursos))
