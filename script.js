(() => {
 'use strict';
 const $ = (selector, root = document) => root.querySelector(selector);
 const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
 const STORE_KEY = 'estudaPlus_v1';
 const FUND = 'Ensino Fundamental', MED = 'Ensino Médio';
 const subjectCatalog = {
 [FUND]: [
 ['Língua Portuguesa','■','Leitura, gramática e interpretação'],['Matemática','■','Números, formas e problemas'],['Ciências','■','Vida,
 matéria e ambiente'],['História','■■','Povos, culturas e transformações'],['Geografia','■','Espaço, paisagem e sociedade'],['Inglês','■',
'Vocabulário e compreensão'],['Arte','■','Expressões artísticas e cultura'],['Educação Física','■','Movimento, saúde e esporte'],['Ensino 
Religioso','■■','Ética, respeito e diversidade']
 ],
 [MED]: [
 ['Língua Portuguesa','■','Linguagem, leitura e análise'],['Literatura','■','Escolas literárias e interpretação'],['Redação','✍■',
'Argumentação e estrutura textual'],['Matemática','■','Funções, geometria e estatística'],['Biologia','■','Organismos, ecologia e 
genética'],['Física','■■','Movimento, energia e fenômenos'],['Química','■','Matéria, reações e cálculos'],['História','■■','Processos 
históricos e sociedade'],['Geografia','■','Território, economia e ambiente'],['Filosofia','■','Pensamento crítico e ética'],['Sociologia',
'■','Sociedade, cultura e desigualdade'],['Inglês','■','Leitura e estruturas da língua'],['Artes','■','Arte, estética e contexto'],[
'Educação Física','■','Corpo, saúde e práticas corporais']
 ]
 };
 const questionBank = {
 'Matemática': [
 q('Quanto é 25% de 80?',['10','15','20','25'],2,'25% equivale a 25/100 = 1/4. Um quarto de 80 é 20.','Fácil','Porcentagem'),
 q('Um caderno custa R$ 12. Quanto custam 3 cadernos iguais?',['R$ 24','R$ 30','R$ 36','R$ 40'],2,'Multiplicamos o preço unitário pela 
quantidade: 12 × 3 = 36.','Fácil','Operações'),
 q('Resolva: 3x + 5 = 20.',['x = 3','x = 5','x = 8','x = 15'],1,'Subtraindo 5 dos dois lados, 3x = 15. Dividindo por 3, x = 5.',
'Médio','Equações'),
 q('Um triângulo tem ângulos de 45° e 65°. Qual é o terceiro ângulo?',['60°','70°','80°','90°'],1,'A soma dos ângulos internos de um 
triângulo é 180°. Então 180 − 45 − 65 = 70°.','Médio','Geometria'),
 q('Uma loja dá 10% de desconto em um produto de R$ 150. Qual é o preço final?',['R$ 125','R$ 130','R$ 135','R$ 140'],2,'10% de 150 é 
15. O preço com desconto é 150 − 15 = R$ 135.','Difícil','Porcentagem')
 ],
 'Língua Portuguesa': [
 q('Na frase “A menina leu o livro rapidamente”, qual palavra é um advérbio?',['menina','leu','livro','rapidamente'],3,'“Rapidamente” 
indica o modo como a ação de ler aconteceu; por isso, é um advérbio de modo.','Fácil','Classes gramaticais'),
 q('Qual alternativa apresenta uma palavra com sentido oposto a “generoso”?',['Solidário','Egoísta','Gentil','Amável'],1,'“Egoísta” 
descreve quem pensa principalmente em si, sendo antônimo de “generoso”.','Fácil','Vocabulário'),
 q('Em “Embora estivesse cansada, continuou estudando”, a palavra “embora” expressa:',['Causa','Conclusão','Concessão','Finalidade'],2,
'“Embora” introduz uma concessão: algo acontece apesar de uma condição contrária.','Médio','Conjunções'),
 q('Qual frase está pontuada corretamente?',['Vamos estudar, Ana?','Vamos, estudar Ana?','Vamos estudar Ana,?','Vamos estudar Ana.'],0,
'A vírgula separa o vocativo “Ana”, a pessoa com quem se fala.','Médio','Pontuação'),
 q('Uma notícia tem como objetivo principal:',['Narrar fatos imaginários','Informar sobre fatos de interesse público','Ensinar uma 
receita','Expressar apenas sentimentos pessoais'],1,'A notícia é um gênero jornalístico que relata fatos relevantes, buscando informar o 
público.','Difícil','Gêneros textuais')
 ],
 'Ciências': [
 q('Qual órgão é responsável por bombear o sangue pelo corpo humano?',['Pulmão','Estômago','Coração','Rim'],2,'O coração funciona como 
uma bomba muscular que impulsiona o sangue pela circulação.','Fácil','Corpo humano'),
 q('Qual processo permite que as plantas produzam glicose usando luz solar?',['Respiração','Fotossíntese','Fermentação','Evaporação'],
1,'Na fotossíntese, plantas usam energia luminosa, água e dióxido de carbono para produzir açúcares e liberar oxigênio.','Fácil',
'Ecologia'),
 q('A água passa do estado líquido para o gasoso principalmente por:',['Solidificação','Condensação','Evaporação','Fusão'],2,'Na 
evaporação, partículas da água líquida ganham energia e passam para o estado gasoso.','Médio','Estados físicos'),
 q('Qual é uma fonte de energia renovável?',['Carvão mineral','Petróleo','Gás natural','Energia solar'],3,'A energia solar é renovável 
porque utiliza a radiação do Sol, uma fonte continuamente disponível em escala humana.','Médio','Energia'),
 q('Em uma cadeia alimentar, os produtores geralmente são:',['Fungos decompositores','Plantas e algas','Animais carnívoros','Todos os 
consumidores'],1,'Plantas e algas produzem matéria orgânica, normalmente por fotossíntese, formando a base de muitas cadeias alimentares.',
'Difícil','Cadeias alimentares')
 ],
 'História': [
 q('Qual invenção é frequentemente associada à difusão de livros na Europa no século XV?',['Máquina a vapor','Imprensa de tipos 
móveis','Telégrafo','Telefone'],1,'A imprensa de tipos móveis, associada a Gutenberg na Europa, facilitou a reprodução e circulação de 
livros.','Fácil','Idade Moderna'),
 q('A abolição legal da escravidão no Brasil ocorreu em:',['1822','1850','1888','1889'],2,'A Lei Áurea foi assinada em 13 de maio de 
1888. A abolição não eliminou, por si só, as desigualdades sociais.','Fácil','Brasil Império'),
 q('A Revolução Industrial começou primeiro em qual país?',['França','Inglaterra','Portugal','Brasil'],1,'A industrialização começou 
na Inglaterra no século XVIII, favorecida por fatores como capital, carvão e transformações agrícolas.','Médio','Industrialização'),
 q('A Constituição é importante em uma democracia porque:',['Substitui todas as eleições','Define princípios e regras fundamentais do 
Estado','Garante que todos pensem igual','Elimina os poderes públicos'],1,'A Constituição organiza o Estado, define direitos e deveres e 
estabelece limites para o exercício do poder.','Médio','Cidadania'),
 q('Fontes históricas podem incluir:',['Somente documentos oficiais','Apenas livros didáticos','Objetos, relatos, imagens e 
documentos','Somente relatos de reis'],2,'Fontes históricas são vestígios variados do passado; devem ser contextualizadas e analisadas 
criticamente.','Difícil','Método histórico')
 ],
 'Geografia': [
 q('Qual linha imaginária divide a Terra em hemisférios Norte e Sul?',['Meridiano de Greenwich','Trópico de Capricórnio','Linha do 
Equador','Círculo Polar Ártico'],2,'A Linha do Equador está a 0° de latitude e separa os hemisférios Norte e Sul.','Fácil','Cartografia'),
 q('O que é urbanização?',['Redução das cidades','Crescimento da população urbana em relação à rural','Aumento exclusivo das 
florestas','Desaparecimento do comércio'],1,'Urbanização é o crescimento da população que vive em cidades e a expansão do espaço urbano.',
'Fácil','População'),
 q('Qual é um exemplo de recurso natural renovável quando bem manejado?',['Petróleo','Carvão mineral','Vento','Urânio'],2,'O vento é 
continuamente renovado por processos atmosféricos e pode gerar energia eólica.','Médio','Recursos naturais'),
 q('Escala cartográfica 1:100.000 significa que 1 cm no mapa representa:',['100 cm no terreno','1 km no terreno','10 km no terreno',
'100 km no terreno'],1,'100.000 cm equivalem a 1.000 m, ou seja, 1 km.','Médio','Cartografia'),
 q('O desmatamento de grandes áreas pode contribuir para:',['Aumento da biodiversidade em todos os casos','Alterações no ciclo da água 
e perda de habitats','Eliminação da erosão','Estabilização automática do clima'],1,'A remoção da vegetação pode reduzir habitats, aumentar 
a erosão e alterar a infiltração e a evapotranspiração.','Difícil','Meio ambiente')
 ],
 'Inglês': [
 q('What is the meaning of “book”?',['Mesa','Livro','Janela','Cadeira'],1,'“Book” significa “livro” em português.','Fácil',
'Vocabulary'),
 q('Choose the correct sentence:',['She are happy.','She am happy.','She is happy.','She be happy.'],2,'Com “she”, o verbo “to be” no 
presente é “is”: “She is happy”.','Fácil','Verb to be'),
 q('In the sentence “I went to school yesterday”, the verb is in the:',['Simple present','Simple past','Future','Present continuous'],
1,'“Went” é a forma irregular do passado simples do verbo “go”.','Médio','Past tense'),
 q('The word “however” usually expresses:',['Contrast','Addition only','Time only','Place'],0,'“However” é um conector que costuma introduzir contraste, como “porém” ou “entretanto”.','Médio','Connectors'),
 q('Read: “Lia studies every evening because she wants to improve.” Why does Lia study?',['She is travelling','She wants to improve',
'She dislikes school','She studies only on Sundays'],1,'O texto afirma diretamente que Lia estuda porque quer melhorar.','Difícil',
'Reading')
 ],
 'Biologia': [
 q('Qual molécula armazena a informação genética dos seres vivos?',['Amido','DNA','Glicose','Hemoglobina'],1,'O DNA contém instruções 
genéticas usadas no desenvolvimento e funcionamento dos organismos.','Fácil','Genética'),
 q('A unidade básica estrutural e funcional dos seres vivos é:',['Átomo','Tecido','Célula','Órgão'],2,'A célula é a menor unidade 
considerada viva e compõe os organismos.','Fácil','Citologia'),
 q('Em uma relação mutualística, os organismos:',['Sempre competem por alimento','Beneficiam-se mutuamente','Um sempre mata o outro',
'Não interagem'],1,'No mutualismo, os participantes obtêm benefícios na interação, embora os detalhes variem entre relações.','Médio',
'Ecologia'),
 q('A meiose é importante porque:',['Duplica o número de cromossomos dos gametas','Forma células com metade do número de cromossomos',
'Produz apenas células idênticas para crescimento','Não envolve divisão celular'],1,'A meiose reduz à metade o número de cromossomos, 
contribuindo para a formação de gametas em muitos organismos.','Médio','Divisão celular'),
 q('Em uma população, a seleção natural tende a favorecer características que:',['Sempre são maiores','Aumentam o sucesso reprodutivo 
em determinado ambiente','Nunca mudam','São escolhidas conscientemente pelos indivíduos'],1,'Características hereditárias que aumentam 
sobrevivência e reprodução em certo ambiente tendem a se tornar mais comuns ao longo das gerações.','Difícil','Evolução')
 ],
 'Física': [
 q('Qual é a unidade de força no Sistema Internacional?',['Joule','Watt','Newton','Pascal'],2,'A força é medida em newtons (N), em 
homenagem ao físico Isaac Newton.','Fácil','Grandezas'),
 q('Um carro percorre 120 km em 2 horas. Qual é sua velocidade média?',['30 km/h','60 km/h','90 km/h','240 km/h'],1,'Velocidade média 
= distância ÷ tempo = 120 ÷ 2 = 60 km/h.','Fácil','Cinemática'),
 q('A energia cinética de um corpo depende de sua massa e de sua:',['Temperatura apenas','Velocidade','Cor apenas','Altura apenas'],1,
'A energia cinética é Ec = mv²/2; portanto depende da massa e do quadrado da velocidade.','Médio','Energia'),
 q('Em um circuito simples, a corrente elétrica convencional no circuito externo vai do:',['Polo negativo para o positivo, por 
definição','Polo positivo para o negativo','Centro para as extremidades sempre','Solo para a bateria sempre'],1,'Por convenção, a corrente 
elétrica é representada no circuito externo do polo positivo para o negativo.','Médio','Eletricidade'),
 q('Se a força resultante sobre um corpo é zero, ele:',['Necessariamente está parado','Necessariamente acelera','Permanece em repouso 
ou em movimento retilíneo uniforme','Sempre muda de direção'],2,'Pela primeira lei de Newton, força resultante nula significa aceleração 
nula: a velocidade permanece constante.','Difícil','Leis de Newton')
 ],
 'Química': [
 q('Qual partícula possui carga elétrica negativa?',['Próton','Nêutron','Elétron','Núcleo'],2,'O elétron tem carga negativa; o próton 
é positivo e o nêutron não possui carga elétrica líquida.','Fácil','Estrutura atômica'),
 q('Uma substância com pH menor que 7, em condições usuais, é:',['Ácida','Neutra','Básica','Sempre um sal'],0,'Em solução aquosa a 
aproximadamente 25 °C, pH abaixo de 7 indica caráter ácido.','Fácil','Ácidos e bases'),
 q('Na tabela periódica, elementos de uma mesma família tendem a apresentar propriedades semelhantes porque possuem:',['Sempre a mesma 
massa','Configuração semelhante de elétrons de valência','O mesmo número de nêutrons','O mesmo símbolo'],1,'Elementos de uma família 
costumam ter configuração semelhante na camada de valência, influenciando seu comportamento químico.','Médio','Tabela periódica'),
 q('Na equação 2H■ + O■ → 2H■O, quantos átomos de oxigênio há em cada lado?',['1 de cada lado','2 de cada lado','4 de cada lado','3 de 
cada lado'],1,'À esquerda, O■ tem dois átomos de oxigênio. À direita, duas moléculas de água contêm dois átomos de oxigênio ao todo.',
'Médio','Reações químicas'),
 q('Uma solução contém 10 g de soluto em 2 L de solução. Sua concentração comum é:',['2 g/L','5 g/L','10 g/L','20 g/L'],1,
'Concentração comum = massa do soluto ÷ volume da solução = 10 ÷ 2 = 5 g/L.','Difícil','Soluções')
 ],
 'Literatura': [
 q('Uma característica frequente do Romantismo brasileiro é:',['Valorização da subjetividade e dos sentimentos','Rejeição absoluta da 
emoção','Uso exclusivo de linguagem científica','Ausência de temas nacionais'],0,'O Romantismo valoriza a subjetividade, a emoção e, no 
Brasil, também explorou a identidade nacional.','Fácil','Romantismo'),
 q('O narrador-personagem é aquele que:',['Conhece apenas fatos científicos','Participa da história que narra','Nunca aparece no 
texto','É sempre o autor real'],1,'O narrador-personagem participa dos acontecimentos e costuma narrar em primeira pessoa.','Fácil',
'Narrativa'),
 q('No Realismo, é comum encontrar:',['Idealização perfeita de todas as personagens','Observação crítica da sociedade e do 
comportamento humano','Somente mitos medievais','Ausência de conflitos sociais'],1,'O Realismo frequentemente analisa criticamente a 
sociedade e as motivações psicológicas das personagens.','Médio','Realismo'),
 q('Metáfora é uma figura de linguagem baseada em:',['Comparação implícita entre elementos','Repetição de sons consonantais apenas',
'Exagero numérico obrigatório','Contradição gramatical'],0,'A metáfora atribui sentido a um elemento por uma associação implícita, sem usar 
necessariamente “como”.','Médio','Figuras de linguagem'),
 q('Ao analisar uma obra literária, o contexto histórico ajuda a:',['Substituir a leitura da obra','Compreender referências, temas e 
valores do período','Provar que todas as obras são iguais','Ignorar as escolhas do autor'],1,'O contexto oferece pistas sobre referências e 
debates da época, mas deve ser combinado com a análise do próprio texto.','Difícil','Análise literária')
 ],
 'Redação': [
 q('Em uma redação dissertativo-argumentativa, a tese é:',['A lista de referências no final','O ponto de vista central defendido pelo 
autor','Uma pergunta sem resposta','Apenas o título'],1,'A tese apresenta a posição central que será defendida por argumentos ao longo do 
texto.','Fácil','Estrutura textual'),
 q('Qual elemento ajuda a ligar ideias e parágrafos?',['Conectivos','Abreviações aleatórias','Repetição sem propósito','Emojis'],0,
'Conectivos como “além disso”, “porém” e “portanto” explicitam relações lógicas entre ideias.','Fácil','Coesão'),
 q('Um argumento consistente deve:',['Apresentar razões e evidências relacionadas à tese','Repetir a tese sem explicação','Atacar 
pessoalmente quem discorda','Usar dados inventados'],0,'Argumentos fortes sustentam a tese com explicações, exemplos ou dados confiáveis e 
pertinentes.','Médio','Argumentação'),
 q('Na conclusão do modelo ENEM, a proposta de intervenção deve respeitar:',['A dignidade humana e os direitos humanos','A censura de 
grupos sociais','A violência como solução','A ausência de agente responsável'],0,'A proposta deve ser viável e respeitar os direitos 
humanos, com elementos como agente, ação, meio e finalidade.','Médio','ENEM'),
 q('Qual prática melhora a confiabilidade de uma redação?',['Inventar estatísticas para convencer','Usar fontes confiáveis e explicar 
a relação com a tese','Citar sem compreender','Fugir do tema'],1,'Informações verificáveis, bem contextualizadas e conectadas ao argumento 
aumentam a consistência do texto.','Difícil','Repertório')
 ],
 'Filosofia': [
 q('A filosofia busca principalmente:',['Aceitar toda ideia sem questionar','Investigar ideias e argumentos de forma crítica',
'Substituir todas as ciências','Impedir perguntas'],1,'A filosofia examina conceitos, argumentos e pressupostos por meio da reflexão 
crítica.','Fácil','Introdução à filosofia'),
 q('Para Sócrates, fazer perguntas era uma forma de:',['Estimular o exame das próprias ideias','Evitar o diálogo','Memorizar leis sem 
reflexão','Impedir o conhecimento'],0,'O diálogo socrático questiona certezas e ajuda as pessoas a examinar suas ideias e contradições.',
'Fácil','Sócrates'),
 q('Ética é a área que reflete sobre:',['Somente cálculos matemáticos','Ações, valores e questões sobre o agir humano','A formação das 
rochas','A previsão do tempo'],1,'A ética investiga questões sobre valores, deveres, escolhas e o que consideramos uma ação justa ou boa.',
'Médio','Ética'),
 q('Um argumento válido é aquele em que:',['A conclusão decorre logicamente das premissas','A conclusão é sempre popular','As 
premissas são necessariamente verdadeiras','Há muitas palavras difíceis'],0,'Validade diz respeito à estrutura lógica: se as premissas 
forem verdadeiras, a conclusão não pode ser falsa.','Médio','Lógica'),
 q('O pensamento crítico exige:',['Aceitar informações só pela autoridade de quem fala','Examinar evidências, razões e possíveis 
vieses','Rejeitar automaticamente toda informação','Evitar comparar fontes'],1,'Pensar criticamente envolve avaliar evidências, coerência, 
contexto e possíveis vieses antes de concluir.','Difícil','Pensamento crítico')
 ],
 'Sociologia': [
 q('A socialização é o processo pelo qual as pessoas:',['Aprendem normas, valores e práticas sociais','Deixam de interagir com outras 
pessoas','Nascem sabendo todas as regras','Perdem toda identidade'],0,'A socialização ocorre ao longo da vida, em interações com família, 
escola, grupos e outras instituições.','Fácil','Socialização'),
 q('Cultura inclui:',['Somente obras de arte em museus','Valores, costumes, conhecimentos e práticas compartilhadas','Apenas 
características biológicas','Somente leis escritas'],1,'Cultura abrange modos de vida, símbolos, crenças, conhecimentos e práticas 
aprendidas socialmente.','Fácil','Cultura'),
 q('Uma pesquisa sociológica deve procurar:',['Confirmar preconceitos pessoais','Investigar fenômenos sociais com método e evidências',
'Evitar observar a realidade','Usar apenas opiniões sem análise'],1,'A investigação sociológica sistematiza dados e interpreta relações 
sociais com métodos explícitos e reflexão crítica.','Médio','Pesquisa social'),
 q('Desigualdade social refere-se a diferenças sistemáticas no acesso a:',['Recursos, oportunidades e direitos','Somente preferências 
musicais','Apenas condições climáticas','Somente idiomas estrangeiros'],0,'A desigualdade social envolve distribuição desigual de recursos, oportunidades, poder e acesso a direitos.','Médio','Desigualdade'),
 q('Uma instituição social pode ser entendida como:',['Um conjunto estável de normas e práticas que organiza aspectos da vida 
coletiva','Qualquer objeto individual','Uma pessoa isolada','Uma regra sem efeito social'],0,'Instituições como família, escola e Estado 
organizam práticas e expectativas importantes da vida em sociedade.','Difícil','Instituições sociais')
 ],
 'Arte': [
 q('Qual elemento visual se relaciona à variação entre claro e escuro?',['Tom/valor','Ritmo musical','Enredo','Perspectiva histórica 
apenas'],0,'O valor tonal descreve o grau de claridade ou escuridão de uma cor ou área.','Fácil','Elementos visuais'),
 q('O patrimônio cultural pode ser:',['Apenas prédios antigos','Material e imaterial','Somente objetos caros','Apenas pinturas 
europeias'],1,'Patrimônio material inclui bens físicos; o imaterial inclui saberes, festas, expressões e tradições.','Fácil','Patrimônio'),
 q('A perspectiva em desenho ajuda a representar:',['Profundidade em uma superfície plana','Somente movimento musical','O peso real do 
papel','A temperatura das cores apenas'],0,'Técnicas de perspectiva criam a sensação de profundidade e distância numa superfície 
bidimensional.','Médio','Desenho'),
 q('Ao analisar uma obra, é importante considerar:',['Apenas o preço de venda','Forma, materiais, contexto e possíveis significados',
'Somente a opinião de uma pessoa','Que toda obra tem um único sentido obrigatório'],1,'A interpretação pode considerar elementos formais, 
contexto, intenção, recepção e diferentes leituras fundamentadas.','Médio','Leitura de imagem'),
 q('A diversidade cultural nas artes significa que:',['Existe apenas uma forma legítima de expressão','Diferentes comunidades produzem 
expressões artísticas variadas','Toda arte deve seguir o mesmo padrão','Expressões populares não são arte'],1,'Práticas artísticas variam 
entre comunidades e períodos; reconhecer essa diversidade amplia a compreensão cultural.','Difícil','Diversidade cultural')
 ],
 'Educação Física': [
 q('Antes de uma atividade física intensa, é recomendável:',['Fazer aquecimento adequado','Ficar sem beber água o dia todo','Ignorar 
qualquer dor','Começar sempre na intensidade máxima'],0,'O aquecimento prepara gradualmente o corpo para a atividade; deve ser adequado à 
modalidade e à pessoa.','Fácil','Preparação física'),
 q('A hidratação durante exercícios ajuda a:',['Regular a temperatura corporal e repor líquidos','Eliminar a necessidade de descanso',
'Garantir que nunca haja lesões','Substituir todas as refeições'],0,'A reposição de líquidos contribui para o equilíbrio hídrico e a 
regulação da temperatura, especialmente no calor.','Fácil','Saúde'),
 q('O princípio da individualidade biológica significa que:',['Todos devem treinar exatamente igual','As respostas ao exercício variam 
entre pessoas','A idade nunca importa','Descanso é sempre desnecessário'],1,'Pessoas têm condições, experiências e respostas diferentes; o 
exercício deve ser adaptado às necessidades individuais.','Médio','Treinamento'),
 q('No esporte coletivo, o fair play envolve:',['Respeito às regras, colegas e adversários','Vencer a qualquer custo','Desrespeitar a 
arbitragem','Excluir quem está aprendendo'],0,'Fair play significa competir com ética, respeito, responsabilidade e aceitação das regras.',
'Médio','Esporte e ética'),
 q('Atividade física regular pode contribuir para:',['Bem-estar físico e mental','Imunidade absoluta a doenças','Ausência total de 
estresse','Dispensar o sono'],0,'A prática regular, adequada à pessoa, pode favorecer a saúde física e mental, mas não elimina todos os 
riscos.','Difícil','Qualidade de vida')
 ],
 'Ensino Religioso': [
 q('O respeito à diversidade religiosa envolve:',['Obrigar todos a seguir uma crença','Reconhecer a liberdade de crença e também de 
não crer','Proibir o diálogo','Considerar todas as pessoas iguais em suas tradições'],1,'Respeitar a diversidade inclui reconhecer 
diferentes crenças, convicções e o direito de não seguir uma religião.','Fácil','Diversidade'),
 q('O diálogo respeitoso entre pessoas com visões diferentes exige:',['Escuta e consideração mútua','Ridicularizar diferenças','Impor 
uma opinião','Evitar qualquer pergunta'],0,'Escuta ativa e respeito ajudam a construir convivência mesmo quando há discordâncias.','Fácil',
'Convivência'),
 q('Uma tradição cultural pode ser transmitida por:',['Rituais, narrativas e práticas comunitárias','Somente por leis nacionais',
'Apenas por redes sociais','Nunca entre gerações'],0,'Tradições podem ser transmitidas oralmente, por práticas, celebrações, narrativas e 
aprendizagem entre gerações.','Médio','Tradições'),
 q('A liberdade de consciência protege o direito de:',['Pensar e ter convicções sem coerção','Impedir que outros pensem','Obrigar a 
participação em rituais','Eliminar a diversidade'],0,'A liberdade de consciência protege convicções pessoais e se relaciona com direitos 
fundamentais.','Médio','Direitos'),
 q('Ao estudar religiões na escola, uma abordagem adequada é:',['Comparar tradições de modo respeitoso e informativo','Declarar uma 
religião superior','Fazer proselitismo obrigatório','Ridicularizar símbolos'],0,'O estudo escolar deve ser respeitoso, informativo e não 
discriminatório, sem impor uma crença.','Difícil','Estudo das religiões')
 ]
 };
 function q(question, options, answer, explanation, difficulty, topic) { return { question, options, answer, explanation, difficulty, 
topic, type:'multiple' }; }
 const summaries = [
 ['Matemática','Porcentagem no dia a dia','Porcentagem representa uma parte de 100. Para calcular p% de um valor, multiplique o valor 
por p/100.','Exemplo: 20% de 150 = 150 × 0,20 = 30. Para desconto, subtraia a parte calculada do preço inicial.','Dica de prova: transforme 
porcentagens em frações ou números decimais e confira se o resultado faz sentido.'],
 ['Língua Portuguesa','Classes de palavras: advérbio','O advérbio modifica um verbo, adjetivo ou outro advérbio, indicando 
circunstâncias como modo, tempo, lugar, intensidade e negação.','Exemplo: “Ela chegou cedo.” A palavra “cedo” indica quando a ação ocorreu. 
“Falou calmamente” indica modo.','Dica: observe qual palavra está sendo modificada e qual circunstância é expressa no contexto.'],
 ['Ciências','Fotossíntese','Na fotossíntese, plantas, algas e alguns microrganismos utilizam energia luminosa para produzir matéria 
orgânica a partir de água e dióxido de carbono.','De forma simplificada: dióxido de carbono + água + luz → glicose + oxigênio. O processo 
ocorre principalmente nos cloroplastos das plantas.','Dica: não confunda fotossíntese com respiração celular; são processos diferentes e 
complementares.'],
 ['História','Como analisar uma fonte histórica','Fontes históricas são vestígios usados para investigar o passado: documentos, 
fotografias, objetos, relatos orais, construções e registros digitais.','Ao analisar uma fonte, pergunte: quem a produziu, quando, para 
quem, com qual finalidade e o que ela não revela?','Dica: uma fonte não é automaticamente neutra; compare evidências e considere o contexto.
'],
 ['Geografia','Escala cartográfica','A escala relaciona a distância representada no mapa à distância real. Na escala numérica 1:n, uma 
unidade no mapa equivale a n unidades reais.','Na escala 1:100.000, 1 cm no mapa representa 100.000 cm no terreno, ou 1 km. Mantenha as 
unidades consistentes durante a conversão.','Dica: converta centímetros para metros ou quilômetros só depois de aplicar a proporção.'],
 ['Inglês','Verbo to be no presente','O verbo to be pode significar ser ou estar. No presente, usamos I am; you/we/they are; he/she/it 
is.','Exemplos: “I am a student.” (Eu sou estudante.) “They are at school.” (Eles estão na escola.)','Dica: observe o sujeito antes de 
escolher am, is ou are.'],
 ['Biologia','Células e DNA','A célula é a unidade básica dos seres vivos. Em organismos eucariontes, o núcleo abriga a maior parte do 
DNA, molécula que contém informação genética.','O DNA participa da hereditariedade e orienta a produção de proteínas por meio da expressão 
dos genes.','Dica: gene é um segmento de DNA associado a um produto funcional; cromossomos organizam DNA e proteínas.'],
 ['Física','Velocidade média','Velocidade escalar média é calculada dividindo a distância total percorrida pelo tempo total gasto: vm = 
∆s/∆t.','Se um percurso de 150 km é feito em 3 h, a velocidade média é 150 ÷ 3 = 50 km/h.','Dica: confira as unidades e não confunda 
velocidade média com a velocidade em cada instante.'],
 ['Química','Átomos e partículas','O átomo possui um núcleo com prótons positivos e nêutrons sem carga, além de elétrons negativos ao 
redor do núcleo.','Em um átomo neutro, o número de prótons é igual ao de elétrons. O número atômico corresponde ao número de prótons.',
'Dica: íons surgem quando átomos ou grupos de átomos ganham ou perdem elétrons.'],
 ['Redação','Tese e argumentos','A tese apresenta o posicionamento central do texto. Os argumentos explicam e sustentam esse ponto de 
vista com raciocínio, exemplos ou dados confiáveis.','Uma estrutura possível é: introdução com tema e tese; desenvolvimento com argumentos 
articulados; conclusão coerente com o que foi defendido.','Dica: cada parágrafo de desenvolvimento deve contribuir claramente para a tese, 
sem fugir do tema.'],
 ['Literatura','Figuras de linguagem','Figuras de linguagem criam efeitos expressivos. A metáfora associa ideias implicitamente; a 
comparação explicita semelhança; a personificação atribui características humanas a seres não humanos.','Exemplo de metáfora: “Aquela 
notícia foi um balde de água fria.” A expressão comunica frustração sem sentido literal.','Dica: interprete a expressão dentro do contexto, 
não apenas palavra por palavra.'],
 ['Filosofia','Pensamento crítico','Pensamento crítico é examinar afirmações, evidências, pressupostos e argumentos antes de aceitar uma 
conclusão.','Uma análise pode perguntar: quais são as premissas? A conclusão decorre delas? Há evidências? Existem explicações 
alternativas?','Dica: discordar não basta; apresente razões claras e esteja disposto a rever a conclusão diante de boas evidências.'],
 ['Sociologia','Cultura e socialização','Cultura inclui valores, símbolos, saberes, costumes e práticas aprendidos socialmente. A 
socialização é o processo de aprender e negociar esses repertórios ao longo da vida.','Família, escola, amizades, mídia e comunidade podem 
participar da socialização. As pessoas também transformam a cultura.','Dica: evite tratar uma cultura como homogênea; existem diferenças e 
disputas dentro de cada sociedade.'],
 ['Arte','Elementos visuais','Linha, forma, cor, textura, espaço e valor tonal são elementos usados para construir imagens. A 
organização desses elementos cria equilíbrio, contraste e ritmo visual.','Contraste pode destacar uma área; repetição cria ritmo; 
perspectiva pode sugerir profundidade numa superfície plana.','Dica: descreva primeiro o que observa e depois sustente sua interpretação 
com elementos concretos da obra.'],
 ['Educação Física','Princípios de atividade física','Uma prática saudável deve considerar regularidade, progressão, recuperação, 
hidratação e adaptação às condições individuais.','Aumentar a carga gradualmente e respeitar sinais do corpo ajuda a reduzir riscos. Dor 
intensa ou persistente merece atenção.','Dica: consistência e segurança são mais importantes que tentar alcançar resultados imediatos.'],
 ['Física','Leis de Newton','A primeira lei relaciona força resultante nula à manutenção da velocidade. A segunda expressa a relação entre força, massa e aceleração: F = m·a.','Uma força resultante de 12 N aplicada a uma massa de 3 kg produz aceleração de 4 m/s², no 
modelo ideal.','Dica: desenhe as forças e determine a força resultante antes de aplicar a segunda lei.'],
 ['Química','Concentração comum','A concentração comum é a massa de soluto dividida pelo volume da solução: C = m/V, geralmente expressa 
em g/L.','Se 8 g de soluto estão em 2 L de solução, C = 8/2 = 4 g/L.','Dica: use o volume final da solução e confira se está em litros 
quando a unidade pedida for g/L.'],
 ['Biologia','Seleção natural','A seleção natural ocorre quando diferenças hereditárias influenciam a sobrevivência e a reprodução em um 
ambiente. Ao longo das gerações, características vantajosas naquele contexto podem se tornar mais frequentes.','Não é uma escolha 
consciente do organismo. O ambiente influencia quais variações deixam, em média, mais descendentes.','Dica: adapte a explicação ao ambiente 
específico e evite afirmar que os indivíduos evoluem porque “precisam”.']
 ];
 const defaults = { level:FUND, theme:'light', dailyGoal:10, favoriteSubjects:[], favoriteSummaries:[], studiedSummaries:[], attempts:[], 
answers:[], xp:0, achievements:[], studyDays:[], totalStudySeconds:0, lastVisit:null, activeSeconds:0 };
 let state = loadState(), view = 'inicio', selectedSubject = null, activeSession = null, timerHandle = null, sessionStart = 0, toastHandle 
= null, confirmAction = null;
 function loadState(){ try { const raw=localStorage.getItem(STORE_KEY); if(!raw) return structuredCloneSafe(defaults); const parsed=JSON.
parse(raw); return {...structuredCloneSafe(defaults),...parsed,attempts:Array.isArray(parsed.attempts)?parsed.attempts:[],answers:Array.
isArray(parsed.answers)?parsed.answers:[],studyDays:Array.isArray(parsed.studyDays)?parsed.studyDays:[],favoriteSummaries:Array.isArray(
parsed.favoriteSummaries)?parsed.favoriteSummaries:[],studiedSummaries:Array.isArray(parsed.studiedSummaries)?parsed.studiedSummaries:[],
achievements:Array.isArray(parsed.achievements)?parsed.achievements:[]}; } catch(e){ console.warn('Dados locais inválidos; usando valores 
iniciais.',e); return structuredCloneSafe(defaults); } }
 function structuredCloneSafe(obj){return JSON.parse(JSON.stringify(obj));}
 function saveState(){try{localStorage.setItem(STORE_KEY,JSON.stringify(state));}catch(e){toast('Não foi possível salvar. O armazenamento 
do navegador pode estar cheio.');console.error(e);}}
 function todayKey(){return new Date().toLocaleDateString('en-CA');}
 function secondsLabel(sec){sec=Math.max(0,Math.floor(sec||0));const h=Math.floor(sec/3600),m=Math.floor(sec%3600/60),s=sec%60;return h?`${
h}h ${m}min`:`${m}min ${s.toString().padStart(2,'0')}s`;}
 function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
 function allSubjects(){return subjectCatalog[state.level]||subjectCatalog[FUND];}
 function subjectMeta(name){return Object.values(subjectCatalog).flat().find(s=>s[0]===name)||[name,'■','Explore conteúdos e pratique'];}
 function allQuestionSets(){const names=[...new Set(Object.values(subjectCatalog).flat().map(s=>s[0]))];return names.map(name=>({name,
questions:questionBank[name]||fallbackQuestions(name)}));}
 function fallbackQuestions(name){return [q(`Ao estudar ${name}, qual atitude favorece uma aprendizagem consistente?`,['Memorizar sem 
compreender','Relacionar conceitos, praticar e revisar erros','Pular toda explicação','Repetir respostas sem conferir'],1,`Relacionar 
conceitos e praticar com revisão dos erros ajuda a compreender e aplicar o conteúdo de ${name}.`,'Fácil','Estratégias de estudo'),q(`Ao 
encontrar uma informação nova em ${name}, o que é mais adequado?`,['Aceitar sem verificar','Comparar com conceitos estudados e fontes 
confiáveis','Ignorar o contexto','Escolher a resposta mais longa'],1,'Verificar contexto, coerência e fontes é uma boa prática de estudo em 
qualquer disciplina.','Médio','Leitura crítica'),q(`Qual é uma boa forma de revisar conteúdos de ${name}?`,['Refazer questões e explicar o 
raciocínio','Estudar somente na véspera','Não olhar os erros','Deixar o material sempre fechado'],0,'A recuperação ativa e a correção 
comentada ajudam a identificar lacunas e consolidar a aprendizagem.','Difícil','Revisão')];}
 function questionsFor(name,difficulty='Todos'){let arr=(questionBank[name]||fallbackQuestions(name)).map((item,i)=>({...item,id:`${name}-
${i}`}));if(difficulty!=='Todos')arr=arr.filter(x=>x.difficulty===difficulty);return arr.length?arr:(questionBank[name]||fallbackQuestions(
name)).map((item,i)=>({...item,id:`${name}-${i}`}));}
 function markStudyDay(){const key=todayKey();if(!state.studyDays.includes(key))state.studyDays.push(key);state.studyDays=state.studyDays.
slice(-400);state.lastVisit=key;saveState();}
 function streakCount(){const days=new Set(state.studyDays);let d=new Date(),n=0;while(days.has(d.toLocaleDateString('en-CA'))){n++;d.
setDate(d.getDate()-1);}return n;}
 function stats(){const done=state.attempts;const questions=done.reduce((a,x)=>a+(x.total||0),0),correct=done.reduce((a,x)=>a+(x.
correct||0),0);return {attempts:done.length,questions,correct,wrong:Math.max(0,questions-correct),rate:questions?Math.round(correct/
questions*100):0};}
 function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastHandle);
toastHandle=setTimeout(()=>el.classList.remove('show'),2600);}
 function navigate(next){if(activeSession&&!activeSession.finished&&next!=='quiz') {toast('Finalize ou saia da atividade pelo botão de 
retorno.');return;}view=next;selectedSubject=null;render();$('#sidebar').classList.remove('open');window.scrollTo({top:0,behavior:
'smooth'});}
 function setTheme(theme){state.theme=theme;document.body.classList.toggle('dark',theme==='dark');saveState();$('#themeToggle').
textContent=theme==='dark'?'■':'■';}
 function render(){const app=$('#app');const titles={inicio:'Seu espaço de estudos',materias:'Explore suas matérias',atividades:
'Atividades interativas',simulados:'Simulados',resumos:'Biblioteca de resumos',favoritos:'Seus favoritos',progresso:'Acompanhe sua 
evolução',historico:'Seu histórico de estudos',configuracoes:'Configurações'};$('#breadcrumb').textContent=titles[view]||'Estuda Plus';$$('.
nav-link[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));const map={inicio:renderHome,materias:renderSubjects,
atividades:renderActivities,simulados:renderSimulados,resumos:renderSummaries,favoritos:renderFavorites,progresso:renderProgress,historico:
renderHistory,configuracoes:renderSettings};app.innerHTML=(map[view]||renderHome)();bindView();}
 function renderHome(){const s=stats(),recent=state.attempts.slice(-4).reverse();return `<section class="hero"><div class="hero-copy"><div 
class="eyebrow">Seu futuro começa agora</div><h1>Olá, estudante! ■<br>Vamos aprender algo novo?</h1><p>Pequenos passos todos os dias levam 
você mais longe. Escolha uma matéria e comece no seu ritmo.</p><button class="btn btn-primary" data-go="materias">Explorar matérias 
<span>→</span></button></div><div class="hero-art"><div class="hero-book">✎</div></div></section>
 <div class="stats-grid"><article class="stat-card"><div class="stat-top">Questões respondidas <span class="stat-icon">✎</span></
div><div class="stat-value">${s.questions}</div><div class="stat-sub">Em ${s.attempts} atividades concluídas</div></article><article 
class="stat-card"><div class="stat-top">Taxa de acerto <span class="stat-icon">■</span></div><div class="stat-value">${s.rate}%</div><div 
class="stat-sub">${s.correct} acertos no total</div></article><article class="stat-card"><div class="stat-top">Dias de sequência <span 
class="stat-icon">■</span></div><div class="stat-value">${streakCount()} <small style="font-size:13px">dias</small></div><div class="stat￾sub">Volte amanhã para continuar</div></article><article class="stat-card"><div class="stat-top">Experiência <span class="stat-icon">✦</
span></div><div class="stat-value">${state.xp} XP</div><div class="stat-sub">Conquistada estudando de verdade</div></article></div>
 <div class="section-head"><div><h2>Continue sua jornada</h2><p>Escolha uma matéria para praticar.</p></div><button class="text-link" 
data-go="materias">Ver todas →</button></div><div class="subject-grid">${allSubjects().slice(0,6).map(subjectCard).join('')}</div>
 <div class="two-col" style="margin-top:18px"><section class="panel"><div class="panel-head"><h2>Atividades recentes</h2><button 
class="text-link" data-go="historico">Ver histórico</button></div>${recent.length?recent.map(attemptRow).join(''):`<div class="empty￾state"><div class="empty-icon">■</div><h3>Sua jornada começa aqui</h3><p>Quando concluir uma atividade, ela aparecerá nesta área.</
p><button class="btn btn-soft" data-go="atividades">Começar agora</button></div>`}</section><section class="panel"><div class="panel￾head"><h2>Atalhos de estudo</h2></div><div class="activity-row"><div class="activity-symbol">■</div><div class="activity-main"><b>Simulado 
rápido</b><small>Treine com cronômetro</small></div><button class="btn btn-soft" data-go="simulados">Abrir</button></div><div 
class="activity-row"><div class="activity-symbol">■</div><div class="activity-main"><b>Biblioteca de resumos</b><small>Revise conceitos 
importantes</small></div><button class="btn btn-soft" data-go="resumos">Ler</button></div><div class="activity-row"><div class="activity￾symbol">■</div><div class="activity-main"><b>Meta diária</b><small>${state.dailyGoal} questões por dia</small></div><button class="btn btn￾soft" data-go="configuracoes">Ajustar</button></div></section></div>`;}
 function subjectCard(s){const name=s[0],meta=subjectMeta(name),done=state.attempts.filter(a=>a.subject===name),acc=done.reduce((n,a)=>n+a.
correct,0),total=done.reduce((n,a)=>n+a.total,0),pct=total?Math.round(acc/total*100):0;return `<button class="subject-card" data-subject="${
esc(name)}"><div class="subject-icon">${meta[1]}</div><h3>${esc(name)}</h3><p>${esc(meta[2])}</p><div class="subject-bottom"><span>${total} 
questões feitas</span><b>${pct}%</b></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></
button>`;}
 function attemptRow(a){return `<div class="activity-row"><div class="activity-symbol">${subjectMeta(a.subject)[1]}</div><div 
class="activity-main"><b>${esc(a.subject)} · ${esc(a.label||'Atividade')}</b><small>${new Date(a.date).toLocaleString('pt-BR',{dateStyle:
'short',timeStyle:'short'})} · ${a.total} questões</small></div><span class="score-pill">${a.rate}%</span></div>`;}
 function renderSubjects(){return `<div class="eyebrow">Aprenda no seu ritmo</div><h1>Matérias</h1><p class="muted">Selecione uma 
disciplina para ver conteúdos, atividades e seu desempenho.</p><div class="toolbar"><div class="field"><label for="levelSelect">Nível 
escolar</label><select id="levelSelect"><option ${state.level===FUND?'selected':''}>${FUND}</option><option ${state.level===MED?'selected':
''}>${MED}</option></select></div><div class="field"><label for="subjectSearch">Buscar matéria</label><input id="subjectSearch" 
type="search" placeholder="Ex.: Matemática, História…"></div></div><div id="subjectsGrid" class="subject-grid">${allSubjects().map(
subjectCard).join('')}</div>`;}
 function renderSubjectDetail(name){const meta=subjectMeta(name),bank=questionsFor(name);return `<button class="btn btn-outline" data￾go="materias">← Voltar às matérias</button><div class="subject-hero" style="margin-top:16px"><div class="subject-icon">${meta[1]}</
div><div><div class="eyebrow">${esc(state.level)}</div><h1 style="font-size:25px;margin:0">${esc(name)}</h1><p>${esc(meta[2])}</p></div></
div><div class="section-head"><div><h2>Escolha como estudar</h2><p>Pratique, revise e acompanhe sua evolução.</p></div></div><div 
class="subject-grid"><button class="subject-card" data-start-subject="${esc(name)}"><div class="subject-icon">✎</div><h3>Praticar questões</
h3><p>Responda atividades e receba explicações.</p><span class="pill">${bank.length} questões disponíveis</span></button><button 
class="subject-card" data-start-sim-subject="${esc(name)}"><div class="subject-icon">■</div><h3>Fazer simulado</h3><p>Teste seus 
conhecimentos com tempo limitado.</p><span class="pill">Cronometrado</span></button><button class="subject-card" data-go="resumos"><div 
class="subject-icon">■</div><h3>Ler resumos</h3><p>Revise conceitos antes de praticar.</p><span class="pill">Biblioteca</span></button></
div><div class="section-head"><div><h2>Seu desempenho em ${esc(name)}</h2><p>Dados das atividades concluídas neste navegador.</p></div></
div>${renderSubjectStats(name)}`;} function renderSubjectStats(name){const at=state.attempts.filter(a=>a.subject===name),t=at.reduce((n,a)=>n+a.total,0),c=at.reduce((n,
a)=>n+a.correct,0);return `<div class="stats-grid"><article class="stat-card"><div class="stat-top">Questões respondidas</div><div 
class="stat-value">${t}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div class="stat-value">${c}</div></
article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat-value">${t?Math.round(c/t*100):0}%</div></
article><article class="stat-card"><div class="stat-top">Atividades</div><div class="stat-value">${at.length}</div></article></div>`;}
 function renderActivities(){if(selectedSubject)return renderSubjectDetail(selectedSubject);return `<div class="eyebrow">Aprendizagem 
ativa</div><h1>Atividades</h1><p class="muted">Escolha uma disciplina, um nível de dificuldade e comece a praticar.</p><div 
class="toolbar"><div class="field"><label for="activitySubject">Matéria</label><select id="activitySubject">${allSubjects().map(
s=>`<option>${esc(s[0])}</option>`).join('')}</select></div><div class="field"><label for="difficultySelect">Dificuldade</label><select 
id="difficultySelect"><option>Todos</option><option>Fácil</option><option>Médio</option><option>Difícil</option></select></div><div 
class="field"><label for="activityMode">Modo</label><select id="activityMode"><option value="study">Estudo com explicações</option><option 
value="progressive">Desafio progressivo</option></select></div></div><div class="panel"><div class="panel-head"><div><h2 
id="activityPreviewTitle">Atividade de ${esc(allSubjects()[0][0])}</h2><p id="activityPreviewText" class="muted">Questões com correção e 
explicações.</p></div><span class="pill" id="activityCount">5 questões</span></div><button class="btn btn-primary" 
id="startActivity">Iniciar atividade →</button></div><div class="section-head"><div><h2>Escolha uma matéria</h2><p>Você pode voltar a 
qualquer momento antes de iniciar.</p></div></div><div class="subject-grid">${allSubjects().map(subjectCard).join('')}</div>`;}
 function renderSimulados(){return `<div class="eyebrow">Prepare-se para as provas</div><h1>Simulados</h1><p class="muted">Treine com 
tempo limitado e veja o gabarito comentado ao final.</p><div class="panel" style="max-width:760px"><h2>Monte seu simulado</h2><p 
class="muted">Escolha o foco da prova e configure o tempo.</p><div class="toolbar"><div class="field"><label for="simSubject">Matéria</
label><select id="simSubject"><option value="__all">Interdisciplinar</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).join(
'')}</select></div><div class="field"><label for="simCount">Quantidade de questões</label><select id="simCount"><option value="5">5 
questões</option><option value="10">10 questões</option><option value="15">15 questões</option><option value="20">20 questões</option></
select></div><div class="field"><label for="simMinutes">Tempo disponível</label><select id="simMinutes"><option value="5">5 minutos</
option><option value="10" selected>10 minutos</option><option value="20">20 minutos</option><option value="30">30 minutos</option></
select></div></div><div class="setting-row"><div><b>Como funciona</b><p>As respostas ficam ocultas até você finalizar. O simulado termina 
automaticamente quando o tempo acabar.</p></div><span class="stat-icon">■</span></div><button class="btn btn-primary" id="startSim">Iniciar 
simulado →</button></div><div class="section-head"><div><h2>Últimos resultados</h2><p>Compare suas tentativas anteriores.</p></div></div>${
state.attempts.filter(a=>a.mode==='Simulado').length?state.attempts.filter(a=>a.mode==='Simulado').slice(-5).reverse().map(attemptRow).join(
''):`<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhum simulado ainda</h3><p>Seu primeiro resultado aparecerá aqui.</
p></div>`}`;}
 function renderSummaries(){return `<div class="eyebrow">Biblioteca de estudos</div><h1>Resumos</h1><p class="muted">Revise os conceitos 
principais antes de resolver questões.</p><div class="toolbar"><div class="field"><label for="summarySubject">Matéria</label><select 
id="summarySubject"><option value="__all">Todas as matérias</option>${[...new Set(summaries.map(s=>s[0]))].map(n=>`<option>${esc(n)}</
option>`).join('')}</select></div><div class="field"><label for="summarySearch">Buscar resumo</label><input id="summarySearch" 
type="search" placeholder="Buscar por título ou tema…"></div></div><div id="summaryGrid" class="summary-grid">${summaryCards(summaries)}</
div>`;}
 function summaryCards(list){return list.map((s,i)=>`<article class="summary-card"><div class="subject-bottom"><span class="pill">${esc(s[
0])}</span><button class="text-link" data-fav-summary="${i}" aria-label="Favoritar resumo">${state.favoriteSummaries.includes(s[1])?'♥':
'■'}</button></div><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p><div class="subject-bottom"><span>${state.studiedSummaries.includes(s[1])?'✓
Estudado':'Leitura rápida'}</span><button class="btn btn-soft" data-open-summary="${i}">Ler resumo</button></div></article>`).join(
'')||`<div class="empty-state"><h3>Nenhum resumo encontrado</h3><p>Tente outra palavra ou disciplina.</p></div>`;}
 function renderSummaryDetail(i){const s=summaries[i];return `<button class="btn btn-outline" data-go="resumos">← Voltar à biblioteca</
button><article class="panel" style="margin-top:15px"><span class="pill">${esc(s[0])}</span><h1 style="margin-top:14px">${esc(s[1])}</
h1><div class="summary-body"><p>${esc(s[2])}</p><h3>Exemplo prático</h3><p>${esc(s[3])}</p><h3>Dica para provas</h3><p>${esc(s[4])}</p></
div><div class="summary-actions"><button class="btn btn-primary" data-mark-studied="${i}">${state.studiedSummaries.includes(s[1])?'✓ Já 
marquei como estudado':'Marcar como estudado'}</button><button class="btn btn-outline" data-fav-summary="${i}">${state.favoriteSummaries.
includes(s[1])?'♥ Remover dos favoritos':'■ Adicionar aos favoritos'}</button><button class="btn btn-soft" data-practice-summary="${esc(s[
0])}">Praticar matéria →</button></div></article>`;}
 function renderFavorites(){const favSummaries=summaries.map((s,i)=>({s,i})).filter(x=>state.favoriteSummaries.includes(x.s[1]));const 
favSubs=allSubjects().filter(s=>state.favoriteSubjects.includes(s[0]));return `<div class="eyebrow">Guardado para depois</
div><h1>Favoritos</h1><div class="section-head"><div><h2>Matérias favoritas</h2><p>Marque suas disciplinas preferidas nas configurações ou 
no cartão da matéria.</p></div></div>${favSubs.length?`<div class="subject-grid">${favSubs.map(subjectCard).join('')}</div>`:`<div 
class="panel empty-state"><div class="empty-icon">■</div><h3>Suas matérias favoritas aparecerão aqui</h3><p>Você pode escolher suas 
preferidas nas configurações.</p><button class="btn btn-soft" data-go="configuracoes">Escolher favoritas</button></div>`}<div 
class="section-head"><div><h2>Resumos salvos</h2><p>Materiais que você marcou para consultar depois.</p></div></div><div class="summary￾grid">${favSummaries.length?summaryCards(favSummaries.map(x=>x.s).map(s=>s)):`<div class="panel empty-state"><div class="empty-icon">■</
div><h3>Nenhum resumo favorito</h3><p>Salve um resumo para encontrá-lo rapidamente.</p><button class="btn btn-soft" data￾go="resumos">Explorar resumos</button></div>`}</div>`;}
 function renderProgress(){const s=stats(),bySub=allSubjects().map(x=>{const at=state.attempts.filter(a=>a.subject===x[0]),t=at.reduce((n,
a)=>n+a.total,0),c=at.reduce((n,a)=>n+a.correct,0);return {name:x[0],t,c,p:t?Math.round(c/t*100):0};});const recent=state.attempts.slice(-
7).reverse();return `<div class="eyebrow">Seu esforço conta</div><h1>Meu progresso</h1><p class="muted">Todos os indicadores são calculados 
a partir das suas atividades salvas neste dispositivo.</p><div class="stats-grid"><article class="stat-card"><div class="stat￾top">Questões</div><div class="stat-value">${s.questions}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div 
class="stat-value">${s.correct}</div></article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat￾value">${s.rate}%</div></article><article class="stat-card"><div class="stat-top">Sequência atual</div><div class="stat-value">${
streakCount()} dias</div></article></div><div class="two-col" style="margin-top:17px"><section class="panel"><div class="panel￾head"><h2>Desempenho por matéria</h2></div>${bySub.map(x=>`<div class="bar-row"><span>${esc(x.name)}</span><div class="progress-track"><div 
class="progress-fill" style="width:${x.p}%"></div></div><b>${x.p}%</b></div>`).join('')}</section><section class="panel"><div class="panel￾head"><h2>Conquistas</h2></div>${achievementList()}<div class="section-head"><div><h2>Meta diária</h2><p>${state.dailyGoal} questões por 
dia</p></div></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,Math.round((state.answers.filter(a=>a.
date?.slice(0,10)===todayKey()).length/state.dailyGoal)*100)||0)}%"></div></div></section></div><div class="section￾head"><div><h2>Tentativas recentes</h2><p>Últimos resultados salvos.</p></div><button class="text-link" data-go="historico">Ver histórico</
button></div>${recent.length?recent.map(attemptRow).join(''):`<div class="panel empty-state"><h3>Seu progresso começa na primeira 
atividade</h3><p>Faça algumas questões para ver os gráficos e resultados.</p><button class="btn btn-primary" data-go="atividades">Começar a 
estudar</button></div>`}`;}
 function achievementList(){const items=[['■','Primeiros passos','Conclua sua primeira atividade',state.attempts.length>=1],['■','Foco nos 
estudos','Responda 20 questões',stats().questions>=20],['■','Boa pontaria','Alcance 80% em uma atividade',state.attempts.some(a=>a.
rate>=80)],['■','Constância','Estude em 3 dias diferentes',new Set(state.studyDays).size>=3],['■','Leitor ativo','Marque 3 resumos como 
estudados',state.studiedSummaries.length>=3]];return items.map(a=>`<div class="activity-row"><div class="activity-symbol">${a[0]}</div><div 
class="activity-main"><b>${a[1]}</b><small>${a[2]}</small></div><span class="pill ${a[3]?'easy':''}">${a[3]?'Conquistada':'Bloqueada'}</
span></div>`).join('');}
 function renderHistory(){return `<div class="eyebrow">Cada tentativa ensina algo</div><h1>Histórico</h1><p class="muted">Veja suas 
atividades anteriores e seus resultados.</p><div class="toolbar"><div class="field"><label for="historySubject">Filtrar matéria</
label><select id="historySubject"><option value="__all">Todas as matérias</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).
join('')}</select></div><button class="btn btn-outline" id="clearHistory">Apagar histórico</button></div><div id="historyList">${
historyRows(state.attempts.slice().reverse())}</div><p class="muted" style="font-size:11px;margin-top:15px">Os dados são armazenados 
localmente neste navegador e dispositivo. Não há sincronização automática entre aparelhos.</p>`;}
 function historyRows(list){if(!list.length)return `<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhuma atividade 
registrada</h3><p>Depois de concluir uma atividade, o resultado será salvo aqui.</p></div>`;return list.map(a=>`<article class="history￾card" style="margin-bottom:10px"><div class="activity-row"><div class="activity-symbol">${subjectMeta(a.subject)[1]}</div><div 
class="activity-main"><b>${esc(a.subject)} · ${esc(a.label||a.mode||'Atividade')}</b><small>${new Date(a.date).toLocaleString('pt-BR',{
dateStyle:'medium',timeStyle:'short'})} · ${a.correct}/${a.total} acertos · ${secondsLabel(a.seconds||0)}</small></div><span class="score￾pill">${a.rate}%</span></div><details><summary style="cursor:pointer;font-size:12px;color:var(--primary);font-weight:700">Ver respostas e 
explicações</summary>${(a.details||[]).map(d=>`<div class="mistake"><b>${esc(d.question)}</b><p>Sua resposta: ${esc(d.chosenText||'Não 
respondida')}</p><p>Correta: ${esc(d.correctText)}</p><p>${esc(d.explanation)}</p></div>`).join('')}</details></article>`).join('');}
 function renderSettings(){return `<div class="eyebrow">Deixe do seu jeito</div><h1>Configurações</h1><p class="muted">Personalize sua 
experiência de estudos.</p><section class="panel" style="max-width:800px"><div class="setting-row"><div><b>Nível escolar</b><p>Define as 
matérias exibidas nas áreas de estudo.</p></div><select id="settingsLevel" style="max-width:220px;padding:10px;border:1px solid var(--line);
border-radius:10px;background:var(--surface);color:var(--text)"><option ${state.level===FUND?'selected':''}>${FUND}</option><option ${state.
level===MED?'selected':''}>${MED}</option></select></div><div class="setting-row"><div><b>Modo escuro</b><p>Reduz o brilho da interface.</
p></div><button class="switch" id="darkSwitch" role="switch" aria-checked="${state.theme==='dark'}" aria-label="Modo escuro"></button></
div><div class="setting-row"><div><b>Meta diária de questões</b><p>Escolha quantas questões deseja responder por dia.</p></div><select 
id="dailyGoal" style="max-width:160px;padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--
text)">${[5,10,15,20,30,40].map(n=>`<option value="${n}" ${state.dailyGoal===n?'selected':''}>${n} questões</option>`).join('')}</select></
div><div class="setting-row" style="display:block"><b>Matérias favoritas</b><p>Selecione as disciplinas que você quer encontrar rapidamente.
</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:9px;margin-top:13px">${allSubjects().map(
s=>`<label style="display:flex;gap:8px;align-items:center;font-size:13px"><input type="checkbox" data-favorite-subject="${esc(s[0])}" ${
state.favoriteSubjects.includes(s[0])?'checked':''}> ${esc(s[0])}</label>`).join('')}</div></div><div class="setting-row"><div><b>Apagar 
histórico e progresso</b><p>Remove atividades, pontuações, XP e sequência deste dispositivo.</p></div><button class="btn btn-danger" 
id="resetAll">Apagar dados</button></div><p class="muted" style="font-size:11px;margin:18px 0 0">Privacidade: os dados do Estuda Plus ficam  function renderSubjectStats(name){const at=state.attempts.filter(a=>a.subject===name),t=at.reduce((n,a)=>n+a.total,0),c=at.reduce((n,
a)=>n+a.correct,0);return `<div class="stats-grid"><article class="stat-card"><div class="stat-top">Questões respondidas</div><div 
class="stat-value">${t}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div class="stat-value">${c}</div></
article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat-value">${t?Math.round(c/t*100):0}%</div></
article><article class="stat-card"><div class="stat-top">Atividades</div><div class="stat-value">${at.length}</div></article></div>`;}
 function renderActivities(){if(selectedSubject)return renderSubjectDetail(selectedSubject);return `<div class="eyebrow">Aprendizagem 
ativa</div><h1>Atividades</h1><p class="muted">Escolha uma disciplina, um nível de dificuldade e comece a praticar.</p><div 
class="toolbar"><div class="field"><label for="activitySubject">Matéria</label><select id="activitySubject">${allSubjects().map(
s=>`<option>${esc(s[0])}</option>`).join('')}</select></div><div class="field"><label for="difficultySelect">Dificuldade</label><select 
id="difficultySelect"><option>Todos</option><option>Fácil</option><option>Médio</option><option>Difícil</option></select></div><div 
class="field"><label for="activityMode">Modo</label><select id="activityMode"><option value="study">Estudo com explicações</option><option 
value="progressive">Desafio progressivo</option></select></div></div><div class="panel"><div class="panel-head"><div><h2 
id="activityPreviewTitle">Atividade de ${esc(allSubjects()[0][0])}</h2><p id="activityPreviewText" class="muted">Questões com correção e 
explicações.</p></div><span class="pill" id="activityCount">5 questões</span></div><button class="btn btn-primary" 
id="startActivity">Iniciar atividade →</button></div><div class="section-head"><div><h2>Escolha uma matéria</h2><p>Você pode voltar a 
qualquer momento antes de iniciar.</p></div></div><div class="subject-grid">${allSubjects().map(subjectCard).join('')}</div>`;}
 function renderSimulados(){return `<div class="eyebrow">Prepare-se para as provas</div><h1>Simulados</h1><p class="muted">Treine com 
tempo limitado e veja o gabarito comentado ao final.</p><div class="panel" style="max-width:760px"><h2>Monte seu simulado</h2><p 
class="muted">Escolha o foco da prova e configure o tempo.</p><div class="toolbar"><div class="field"><label for="simSubject">Matéria</
label><select id="simSubject"><option value="__all">Interdisciplinar</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).join(
'')}</select></div><div class="field"><label for="simCount">Quantidade de questões</label><select id="simCount"><option value="5">5 
questões</option><option value="10">10 questões</option><option value="15">15 questões</option><option value="20">20 questões</option></
select></div><div class="field"><label for="simMinutes">Tempo disponível</label><select id="simMinutes"><option value="5">5 minutos</
option><option value="10" selected>10 minutos</option><option value="20">20 minutos</option><option value="30">30 minutos</option></
select></div></div><div class="setting-row"><div><b>Como funciona</b><p>As respostas ficam ocultas até você finalizar. O simulado termina 
automaticamente quando o tempo acabar.</p></div><span class="stat-icon">■</span></div><button class="btn btn-primary" id="startSim">Iniciar 
simulado →</button></div><div class="section-head"><div><h2>Últimos resultados</h2><p>Compare suas tentativas anteriores.</p></div></div>${
state.attempts.filter(a=>a.mode==='Simulado').length?state.attempts.filter(a=>a.mode==='Simulado').slice(-5).reverse().map(attemptRow).join(
''):`<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhum simulado ainda</h3><p>Seu primeiro resultado aparecerá aqui.</
p></div>`}`;}
 function renderSummaries(){return `<div class="eyebrow">Biblioteca de estudos</div><h1>Resumos</h1><p class="muted">Revise os conceitos 
principais antes de resolver questões.</p><div class="toolbar"><div class="field"><label for="summarySubject">Matéria</label><select 
id="summarySubject"><option value="__all">Todas as matérias</option>${[...new Set(summaries.map(s=>s[0]))].map(n=>`<option>${esc(n)}</
option>`).join('')}</select></div><div class="field"><label for="summarySearch">Buscar resumo</label><input id="summarySearch" 
type="search" placeholder="Buscar por título ou tema…"></div></div><div id="summaryGrid" class="summary-grid">${summaryCards(summaries)}</
div>`;}
 function summaryCards(list){return list.map((s,i)=>`<article class="summary-card"><div class="subject-bottom"><span class="pill">${esc(s[
0])}</span><button class="text-link" data-fav-summary="${i}" aria-label="Favoritar resumo">${state.favoriteSummaries.includes(s[1])?'♥':
'■'}</button></div><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p><div class="subject-bottom"><span>${state.studiedSummaries.includes(s[1])?'✓
Estudado':'Leitura rápida'}</span><button class="btn btn-soft" data-open-summary="${i}">Ler resumo</button></div></article>`).join(
'')||`<div class="empty-state"><h3>Nenhum resumo encontrado</h3><p>Tente outra palavra ou disciplina.</p></div>`;}
 function renderSummaryDetail(i){const s=summaries[i];return `<button class="btn btn-outline" data-go="resumos">← Voltar à biblioteca</
button><article class="panel" style="margin-top:15px"><span class="pill">${esc(s[0])}</span><h1 style="margin-top:14px">${esc(s[1])}</
h1><div class="summary-body"><p>${esc(s[2])}</p><h3>Exemplo prático</h3><p>${esc(s[3])}</p><h3>Dica para provas</h3><p>${esc(s[4])}</p></
div><div class="summary-actions"><button class="btn btn-primary" data-mark-studied="${i}">${state.studiedSummaries.includes(s[1])?'✓ Já 
marquei como estudado':'Marcar como estudado'}</button><button class="btn btn-outline" data-fav-summary="${i}">${state.favoriteSummaries.
includes(s[1])?'♥ Remover dos favoritos':'■ Adicionar aos favoritos'}</button><button class="btn btn-soft" data-practice-summary="${esc(s[
0])}">Praticar matéria →</button></div></article>`;}
 function renderFavorites(){const favSummaries=summaries.map((s,i)=>({s,i})).filter(x=>state.favoriteSummaries.includes(x.s[1]));const 
favSubs=allSubjects().filter(s=>state.favoriteSubjects.includes(s[0]));return `<div class="eyebrow">Guardado para depois</
div><h1>Favoritos</h1><div class="section-head"><div><h2>Matérias favoritas</h2><p>Marque suas disciplinas preferidas nas configurações ou 
no cartão da matéria.</p></div></div>${favSubs.length?`<div class="subject-grid">${favSubs.map(subjectCard).join('')}</div>`:`<div 
class="panel empty-state"><div class="empty-icon">■</div><h3>Suas matérias favoritas aparecerão aqui</h3><p>Você pode escolher suas 
preferidas nas configurações.</p><button class="btn btn-soft" data-go="configuracoes">Escolher favoritas</button></div>`}<div 
class="section-head"><div><h2>Resumos salvos</h2><p>Materiais que você marcou para consultar depois.</p></div></div><div class="summary￾grid">${favSummaries.length?summaryCards(favSummaries.map(x=>x.s).map(s=>s)):`<div class="panel empty-state"><div class="empty-icon">■</
div><h3>Nenhum resumo favorito</h3><p>Salve um resumo para encontrá-lo rapidamente.</p><button class="btn btn-soft" data￾go="resumos">Explorar resumos</button></div>`}</div>`;}
 function renderProgress(){const s=stats(),bySub=allSubjects().map(x=>{const at=state.attempts.filter(a=>a.subject===x[0]),t=at.reduce((n,
a)=>n+a.total,0),c=at.reduce((n,a)=>n+a.correct,0);return {name:x[0],t,c,p:t?Math.round(c/t*100):0};});const recent=state.attempts.slice(-
7).reverse();return `<div class="eyebrow">Seu esforço conta</div><h1>Meu progresso</h1><p class="muted">Todos os indicadores são calculados 
a partir das suas atividades salvas neste dispositivo.</p><div class="stats-grid"><article class="stat-card"><div class="stat￾top">Questões</div><div class="stat-value">${s.questions}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div 
class="stat-value">${s.correct}</div></article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat￾value">${s.rate}%</div></article><article class="stat-card"><div class="stat-top">Sequência atual</div><div class="stat-value">${
streakCount()} dias</div></article></div><div class="two-col" style="margin-top:17px"><section class="panel"><div class="panel￾head"><h2>Desempenho por matéria</h2></div>${bySub.map(x=>`<div class="bar-row"><span>${esc(x.name)}</span><div class="progress-track"><div 
class="progress-fill" style="width:${x.p}%"></div></div><b>${x.p}%</b></div>`).join('')}</section><section class="panel"><div class="panel￾head"><h2>Conquistas</h2></div>${achievementList()}<div class="section-head"><div><h2>Meta diária</h2><p>${state.dailyGoal} questões por 
dia</p></div></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,Math.round((state.answers.filter(a=>a.
date?.slice(0,10)===todayKey()).length/state.dailyGoal)*100)||0)}%"></div></div></section></div><div class="section￾head"><div><h2>Tentativas recentes</h2><p>Últimos resultados salvos.</p></div><button class="text-link" data-go="historico">Ver histórico</
button></div>${recent.length?recent.map(attemptRow).join(''):`<div class="panel empty-state"><h3>Seu progresso começa na primeira 
atividade</h3><p>Faça algumas questões para ver os gráficos e resultados.</p><button class="btn btn-primary" data-go="atividades">Começar a 
estudar</button></div>`}`;}
 function achievementList(){const items=[['■','Primeiros passos','Conclua sua primeira atividade',state.attempts.length>=1],['■','Foco nos 
estudos','Responda 20 questões',stats().questions>=20],['■','Boa pontaria','Alcance 80% em uma atividade',state.attempts.some(a=>a.
rate>=80)],['■','Constância','Estude em 3 dias diferentes',new Set(state.studyDays).size>=3],['■','Leitor ativo','Marque 3 resumos como 
estudados',state.studiedSummaries.length>=3]];return items.map(a=>`<div class="activity-row"><div class="activity-symbol">${a[0]}</div><div 
class="activity-main"><b>${a[1]}</b><small>${a[2]}</small></div><span class="pill ${a[3]?'easy':''}">${a[3]?'Conquistada':'Bloqueada'}</
span></div>`).join('');}
 function renderHistory(){return `<div class="eyebrow">Cada tentativa ensina algo</div><h1>Histórico</h1><p class="muted">Veja suas 
atividades anteriores e seus resultados.</p><div class="toolbar"><div class="field"><label for="historySubject">Filtrar matéria</
label><select id="historySubject"><option value="__all">Todas as matérias</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).
join('')}</select></div><button class="btn btn-outline" id="clearHistory">Apagar histórico</button></div><div id="historyList">${
historyRows(state.attempts.slice().reverse())}</div><p class="muted" style="font-size:11px;margin-top:15px">Os dados são armazenados 
localmente neste navegador e dispositivo. Não há sincronização automática entre aparelhos.</p>`;}
 function historyRows(list){if(!list.length)return `<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhuma atividade 
registrada</h3><p>Depois de concluir uma atividade, o resultado será salvo aqui.</p></div>`;return list.map(a=>`<article class="history￾card" style="margin-bottom:10px"><div class="activity-row"><div class="activity-symbol">${subjectMeta(a.subject)[1]}</div><div 
class="activity-main"><b>${esc(a.subject)} · ${esc(a.label||a.mode||'Atividade')}</b><small>${new Date(a.date).toLocaleString('pt-BR',{
dateStyle:'medium',timeStyle:'short'})} · ${a.correct}/${a.total} acertos · ${secondsLabel(a.seconds||0)}</small></div><span class="score￾pill">${a.rate}%</span></div><details><summary style="cursor:pointer;font-size:12px;color:var(--primary);font-weight:700">Ver respostas e 
explicações</summary>${(a.details||[]).map(d=>`<div class="mistake"><b>${esc(d.question)}</b><p>Sua resposta: ${esc(d.chosenText||'Não 
respondida')}</p><p>Correta: ${esc(d.correctText)}</p><p>${esc(d.explanation)}</p></div>`).join('')}</details></article>`).join('');}
 function renderSettings(){return `<div class="eyebrow">Deixe do seu jeito</div><h1>Configurações</h1><p class="muted">Personalize sua 
experiência de estudos.</p><section class="panel" style="max-width:800px"><div class="setting-row"><div><b>Nível escolar</b><p>Define as 
matérias exibidas nas áreas de estudo.</p></div><select id="settingsLevel" style="max-width:220px;padding:10px;border:1px solid var(--line);
border-radius:10px;background:var(--surface);color:var(--text)"><option ${state.level===FUND?'selected':''}>${FUND}</option><option ${state.
level===MED?'selected':''}>${MED}</option></select></div><div class="setting-row"><div><b>Modo escuro</b><p>Reduz o brilho da interface.</
p></div><button class="switch" id="darkSwitch" role="switch" aria-checked="${state.theme==='dark'}" aria-label="Modo escuro"></button></
div><div class="setting-row"><div><b>Meta diária de questões</b><p>Escolha quantas questões deseja responder por dia.</p></div><select 
id="dailyGoal" style="max-width:160px;padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--
text)">${[5,10,15,20,30,40].map(n=>`<option value="${n}" ${state.dailyGoal===n?'selected':''}>${n} questões</option>`).join('')}</select></
div><div class="setting-row" style="display:block"><b>Matérias favoritas</b><p>Selecione as disciplinas que você quer encontrar rapidamente.
</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:9px;margin-top:13px">${allSubjects().map(
s=>`<label style="display:flex;gap:8px;align-items:center;font-size:13px"><input type="checkbox" data-favorite-subject="${esc(s[0])}" ${
state.favoriteSubjects.includes(s[0])?'checked':''}> ${esc(s[0])}</label>`).join('')}</div></div><div class="setting-row"><div><b>Apagar 
histórico e progresso</b><p>Remove atividades, pontuações, XP e sequência deste dispositivo.</p></div><button class="btn btn-danger" 
id="resetAll">Apagar dados</button></div><p class="muted" style="font-size:11px;margin:18px 0 0">Privacidade: os dados do Estuda Plus ficam    function renderSubjectStats(name){const at=state.attempts.filter(a=>a.subject===name),t=at.reduce((n,a)=>n+a.total,0),c=at.reduce((n,
a)=>n+a.correct,0);return `<div class="stats-grid"><article class="stat-card"><div class="stat-top">Questões respondidas</div><div 
class="stat-value">${t}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div class="stat-value">${c}</div></
article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat-value">${t?Math.round(c/t*100):0}%</div></
article><article class="stat-card"><div class="stat-top">Atividades</div><div class="stat-value">${at.length}</div></article></div>`;}
 function renderActivities(){if(selectedSubject)return renderSubjectDetail(selectedSubject);return `<div class="eyebrow">Aprendizagem 
ativa</div><h1>Atividades</h1><p class="muted">Escolha uma disciplina, um nível de dificuldade e comece a praticar.</p><div 
class="toolbar"><div class="field"><label for="activitySubject">Matéria</label><select id="activitySubject">${allSubjects().map(
s=>`<option>${esc(s[0])}</option>`).join('')}</select></div><div class="field"><label for="difficultySelect">Dificuldade</label><select 
id="difficultySelect"><option>Todos</option><option>Fácil</option><option>Médio</option><option>Difícil</option></select></div><div 
class="field"><label for="activityMode">Modo</label><select id="activityMode"><option value="study">Estudo com explicações</option><option 
value="progressive">Desafio progressivo</option></select></div></div><div class="panel"><div class="panel-head"><div><h2 
id="activityPreviewTitle">Atividade de ${esc(allSubjects()[0][0])}</h2><p id="activityPreviewText" class="muted">Questões com correção e 
explicações.</p></div><span class="pill" id="activityCount">5 questões</span></div><button class="btn btn-primary" 
id="startActivity">Iniciar atividade →</button></div><div class="section-head"><div><h2>Escolha uma matéria</h2><p>Você pode voltar a 
qualquer momento antes de iniciar.</p></div></div><div class="subject-grid">${allSubjects().map(subjectCard).join('')}</div>`;}
 function renderSimulados(){return `<div class="eyebrow">Prepare-se para as provas</div><h1>Simulados</h1><p class="muted">Treine com 
tempo limitado e veja o gabarito comentado ao final.</p><div class="panel" style="max-width:760px"><h2>Monte seu simulado</h2><p 
class="muted">Escolha o foco da prova e configure o tempo.</p><div class="toolbar"><div class="field"><label for="simSubject">Matéria</
label><select id="simSubject"><option value="__all">Interdisciplinar</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).join(
'')}</select></div><div class="field"><label for="simCount">Quantidade de questões</label><select id="simCount"><option value="5">5 
questões</option><option value="10">10 questões</option><option value="15">15 questões</option><option value="20">20 questões</option></
select></div><div class="field"><label for="simMinutes">Tempo disponível</label><select id="simMinutes"><option value="5">5 minutos</
option><option value="10" selected>10 minutos</option><option value="20">20 minutos</option><option value="30">30 minutos</option></
select></div></div><div class="setting-row"><div><b>Como funciona</b><p>As respostas ficam ocultas até você finalizar. O simulado termina 
automaticamente quando o tempo acabar.</p></div><span class="stat-icon">■</span></div><button class="btn btn-primary" id="startSim">Iniciar 
simulado →</button></div><div class="section-head"><div><h2>Últimos resultados</h2><p>Compare suas tentativas anteriores.</p></div></div>${
state.attempts.filter(a=>a.mode==='Simulado').length?state.attempts.filter(a=>a.mode==='Simulado').slice(-5).reverse().map(attemptRow).join(
''):`<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhum simulado ainda</h3><p>Seu primeiro resultado aparecerá aqui.</
p></div>`}`;}
 function renderSummaries(){return `<div class="eyebrow">Biblioteca de estudos</div><h1>Resumos</h1><p class="muted">Revise os conceitos 
principais antes de resolver questões.</p><div class="toolbar"><div class="field"><label for="summarySubject">Matéria</label><select 
id="summarySubject"><option value="__all">Todas as matérias</option>${[...new Set(summaries.map(s=>s[0]))].map(n=>`<option>${esc(n)}</
option>`).join('')}</select></div><div class="field"><label for="summarySearch">Buscar resumo</label><input id="summarySearch" 
type="search" placeholder="Buscar por título ou tema…"></div></div><div id="summaryGrid" class="summary-grid">${summaryCards(summaries)}</
div>`;}
 function summaryCards(list){return list.map((s,i)=>`<article class="summary-card"><div class="subject-bottom"><span class="pill">${esc(s[
0])}</span><button class="text-link" data-fav-summary="${i}" aria-label="Favoritar resumo">${state.favoriteSummaries.includes(s[1])?'♥':
'■'}</button></div><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p><div class="subject-bottom"><span>${state.studiedSummaries.includes(s[1])?'✓
Estudado':'Leitura rápida'}</span><button class="btn btn-soft" data-open-summary="${i}">Ler resumo</button></div></article>`).join(
'')||`<div class="empty-state"><h3>Nenhum resumo encontrado</h3><p>Tente outra palavra ou disciplina.</p></div>`;}
 function renderSummaryDetail(i){const s=summaries[i];return `<button class="btn btn-outline" data-go="resumos">← Voltar à biblioteca</
button><article class="panel" style="margin-top:15px"><span class="pill">${esc(s[0])}</span><h1 style="margin-top:14px">${esc(s[1])}</
h1><div class="summary-body"><p>${esc(s[2])}</p><h3>Exemplo prático</h3><p>${esc(s[3])}</p><h3>Dica para provas</h3><p>${esc(s[4])}</p></
div><div class="summary-actions"><button class="btn btn-primary" data-mark-studied="${i}">${state.studiedSummaries.includes(s[1])?'✓ Já 
marquei como estudado':'Marcar como estudado'}</button><button class="btn btn-outline" data-fav-summary="${i}">${state.favoriteSummaries.
includes(s[1])?'♥ Remover dos favoritos':'■ Adicionar aos favoritos'}</button><button class="btn btn-soft" data-practice-summary="${esc(s[
0])}">Praticar matéria →</button></div></article>`;}
 function renderFavorites(){const favSummaries=summaries.map((s,i)=>({s,i})).filter(x=>state.favoriteSummaries.includes(x.s[1]));const 
favSubs=allSubjects().filter(s=>state.favoriteSubjects.includes(s[0]));return `<div class="eyebrow">Guardado para depois</
div><h1>Favoritos</h1><div class="section-head"><div><h2>Matérias favoritas</h2><p>Marque suas disciplinas preferidas nas configurações ou 
no cartão da matéria.</p></div></div>${favSubs.length?`<div class="subject-grid">${favSubs.map(subjectCard).join('')}</div>`:`<div 
class="panel empty-state"><div class="empty-icon">■</div><h3>Suas matérias favoritas aparecerão aqui</h3><p>Você pode escolher suas 
preferidas nas configurações.</p><button class="btn btn-soft" data-go="configuracoes">Escolher favoritas</button></div>`}<div 
class="section-head"><div><h2>Resumos salvos</h2><p>Materiais que você marcou para consultar depois.</p></div></div><div class="summary￾grid">${favSummaries.length?summaryCards(favSummaries.map(x=>x.s).map(s=>s)):`<div class="panel empty-state"><div class="empty-icon">■</
div><h3>Nenhum resumo favorito</h3><p>Salve um resumo para encontrá-lo rapidamente.</p><button class="btn btn-soft" data￾go="resumos">Explorar resumos</button></div>`}</div>`;}
 function renderProgress(){const s=stats(),bySub=allSubjects().map(x=>{const at=state.attempts.filter(a=>a.subject===x[0]),t=at.reduce((n,
a)=>n+a.total,0),c=at.reduce((n,a)=>n+a.correct,0);return {name:x[0],t,c,p:t?Math.round(c/t*100):0};});const recent=state.attempts.slice(-
7).reverse();return `<div class="eyebrow">Seu esforço conta</div><h1>Meu progresso</h1><p class="muted">Todos os indicadores são calculados 
a partir das suas atividades salvas neste dispositivo.</p><div class="stats-grid"><article class="stat-card"><div class="stat￾top">Questões</div><div class="stat-value">${s.questions}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div 
class="stat-value">${s.correct}</div></article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat￾value">${s.rate}%</div></article><article class="stat-card"><div class="stat-top">Sequência atual</div><div class="stat-value">${
streakCount()} dias</div></article></div><div class="two-col" style="margin-top:17px"><section class="panel"><div class="panel￾head"><h2>Desempenho por matéria</h2></div>${bySub.map(x=>`<div class="bar-row"><span>${esc(x.name)}</span><div class="progress-track"><div 
class="progress-fill" style="width:${x.p}%"></div></div><b>${x.p}%</b></div>`).join('')}</section><section class="panel"><div class="panel￾head"><h2>Conquistas</h2></div>${achievementList()}<div class="section-head"><div><h2>Meta diária</h2><p>${state.dailyGoal} questões por 
dia</p></div></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,Math.round((state.answers.filter(a=>a.
date?.slice(0,10)===todayKey()).length/state.dailyGoal)*100)||0)}%"></div></div></section></div><div class="section￾head"><div><h2>Tentativas recentes</h2><p>Últimos resultados salvos.</p></div><button class="text-link" data-go="historico">Ver histórico</
button></div>${recent.length?recent.map(attemptRow).join(''):`<div class="panel empty-state"><h3>Seu progresso começa na primeira 
atividade</h3><p>Faça algumas questões para ver os gráficos e resultados.</p><button class="btn btn-primary" data-go="atividades">Começar a 
estudar</button></div>`}`;}
 function achievementList(){const items=[['■','Primeiros passos','Conclua sua primeira atividade',state.attempts.length>=1],['■','Foco nos 
estudos','Responda 20 questões',stats().questions>=20],['■','Boa pontaria','Alcance 80% em uma atividade',state.attempts.some(a=>a.
rate>=80)],['■','Constância','Estude em 3 dias diferentes',new Set(state.studyDays).size>=3],['■','Leitor ativo','Marque 3 resumos como 
estudados',state.studiedSummaries.length>=3]];return items.map(a=>`<div class="activity-row"><div class="activity-symbol">${a[0]}</div><div 
class="activity-main"><b>${a[1]}</b><small>${a[2]}</small></div><span class="pill ${a[3]?'easy':''}">${a[3]?'Conquistada':'Bloqueada'}</
span></div>`).join('');}
 function renderHistory(){return `<div class="eyebrow">Cada tentativa ensina algo</div><h1>Histórico</h1><p class="muted">Veja suas 
atividades anteriores e seus resultados.</p><div class="toolbar"><div class="field"><label for="historySubject">Filtrar matéria</
label><select id="historySubject"><option value="__all">Todas as matérias</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).
join('')}</select></div><button class="btn btn-outline" id="clearHistory">Apagar histórico</button></div><div id="historyList">${
historyRows(state.attempts.slice().reverse())}</div><p class="muted" style="font-size:11px;margin-top:15px">Os dados são armazenados 
localmente neste navegador e dispositivo. Não há sincronização automática entre aparelhos.</p>`;}
 function historyRows(list){if(!list.length)return `<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhuma atividade 
registrada</h3><p>Depois de concluir uma atividade, o resultado será salvo aqui.</p></div>`;return list.map(a=>`<article class="history￾card" style="margin-bottom:10px"><div class="activity-row"><div class="activity-symbol">${subjectMeta(a.subject)[1]}</div><div 
class="activity-main"><b>${esc(a.subject)} · ${esc(a.label||a.mode||'Atividade')}</b><small>${new Date(a.date).toLocaleString('pt-BR',{
dateStyle:'medium',timeStyle:'short'})} · ${a.correct}/${a.total} acertos · ${secondsLabel(a.seconds||0)}</small></div><span class="score￾pill">${a.rate}%</span></div><details><summary style="cursor:pointer;font-size:12px;color:var(--primary);font-weight:700">Ver respostas e 
explicações</summary>${(a.details||[]).map(d=>`<div class="mistake"><b>${esc(d.question)}</b><p>Sua resposta: ${esc(d.chosenText||'Não 
respondida')}</p><p>Correta: ${esc(d.correctText)}</p><p>${esc(d.explanation)}</p></div>`).join('')}</details></article>`).join('');}
 function renderSettings(){return `<div class="eyebrow">Deixe do seu jeito</div><h1>Configurações</h1><p class="muted">Personalize sua 
experiência de estudos.</p><section class="panel" style="max-width:800px"><div class="setting-row"><div><b>Nível escolar</b><p>Define as 
matérias exibidas nas áreas de estudo.</p></div><select id="settingsLevel" style="max-width:220px;padding:10px;border:1px solid var(--line);
border-radius:10px;background:var(--surface);color:var(--text)"><option ${state.level===FUND?'selected':''}>${FUND}</option><option ${state.
level===MED?'selected':''}>${MED}</option></select></div><div class="setting-row"><div><b>Modo escuro</b><p>Reduz o brilho da interface.</
p></div><button class="switch" id="darkSwitch" role="switch" aria-checked="${state.theme==='dark'}" aria-label="Modo escuro"></button></
div><div class="setting-row"><div><b>Meta diária de questões</b><p>Escolha quantas questões deseja responder por dia.</p></div><select 
id="dailyGoal" style="max-width:160px;padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--
text)">${[5,10,15,20,30,40].map(n=>`<option value="${n}" ${state.dailyGoal===n?'selected':''}>${n} questões</option>`).join('')}</select></
div><div class="setting-row" style="display:block"><b>Matérias favoritas</b><p>Selecione as disciplinas que você quer encontrar rapidamente.
</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:9px;margin-top:13px">${allSubjects().map(
s=>`<label style="display:flex;gap:8px;align-items:center;font-size:13px"><input type="checkbox" data-favorite-subject="${esc(s[0])}" ${
state.favoriteSubjects.includes(s[0])?'checked':''}> ${esc(s[0])}</label>`).join('')}</div></div><div class="setting-row"><div><b>Apagar 
histórico e progresso</b><p>Remove atividades, pontuações, XP e sequência deste dispositivo.</p></div><button class="btn btn-danger" 
id="resetAll">Apagar dados</button></div><p class="muted" style="font-size:11px;margin:18px 0 0">Privacidade: os dados do Estuda Plus ficam  function renderSubjectStats(name){const at=state.attempts.filter(a=>a.subject===name),t=at.reduce((n,a)=>n+a.total,0),c=at.reduce((n,
a)=>n+a.correct,0);return `<div class="stats-grid"><article class="stat-card"><div class="stat-top">Questões respondidas</div><div 
class="stat-value">${t}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div class="stat-value">${c}</div></
article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat-value">${t?Math.round(c/t*100):0}%</div></
article><article class="stat-card"><div class="stat-top">Atividades</div><div class="stat-value">${at.length}</div></article></div>`;}
 function renderActivities(){if(selectedSubject)return renderSubjectDetail(selectedSubject);return `<div class="eyebrow">Aprendizagem 
ativa</div><h1>Atividades</h1><p class="muted">Escolha uma disciplina, um nível de dificuldade e comece a praticar.</p><div 
class="toolbar"><div class="field"><label for="activitySubject">Matéria</label><select id="activitySubject">${allSubjects().map(
s=>`<option>${esc(s[0])}</option>`).join('')}</select></div><div class="field"><label for="difficultySelect">Dificuldade</label><select 
id="difficultySelect"><option>Todos</option><option>Fácil</option><option>Médio</option><option>Difícil</option></select></div><div 
class="field"><label for="activityMode">Modo</label><select id="activityMode"><option value="study">Estudo com explicações</option><option 
value="progressive">Desafio progressivo</option></select></div></div><div class="panel"><div class="panel-head"><div><h2 
id="activityPreviewTitle">Atividade de ${esc(allSubjects()[0][0])}</h2><p id="activityPreviewText" class="muted">Questões com correção e 
explicações.</p></div><span class="pill" id="activityCount">5 questões</span></div><button class="btn btn-primary" 
id="startActivity">Iniciar atividade →</button></div><div class="section-head"><div><h2>Escolha uma matéria</h2><p>Você pode voltar a 
qualquer momento antes de iniciar.</p></div></div><div class="subject-grid">${allSubjects().map(subjectCard).join('')}</div>`;}
 function renderSimulados(){return `<div class="eyebrow">Prepare-se para as provas</div><h1>Simulados</h1><p class="muted">Treine com 
tempo limitado e veja o gabarito comentado ao final.</p><div class="panel" style="max-width:760px"><h2>Monte seu simulado</h2><p 
class="muted">Escolha o foco da prova e configure o tempo.</p><div class="toolbar"><div class="field"><label for="simSubject">Matéria</
label><select id="simSubject"><option value="__all">Interdisciplinar</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).join(
'')}</select></div><div class="field"><label for="simCount">Quantidade de questões</label><select id="simCount"><option value="5">5 
questões</option><option value="10">10 questões</option><option value="15">15 questões</option><option value="20">20 questões</option></
select></div><div class="field"><label for="simMinutes">Tempo disponível</label><select id="simMinutes"><option value="5">5 minutos</
option><option value="10" selected>10 minutos</option><option value="20">20 minutos</option><option value="30">30 minutos</option></
select></div></div><div class="setting-row"><div><b>Como funciona</b><p>As respostas ficam ocultas até você finalizar. O simulado termina 
automaticamente quando o tempo acabar.</p></div><span class="stat-icon">■</span></div><button class="btn btn-primary" id="startSim">Iniciar 
simulado →</button></div><div class="section-head"><div><h2>Últimos resultados</h2><p>Compare suas tentativas anteriores.</p></div></div>${
state.attempts.filter(a=>a.mode==='Simulado').length?state.attempts.filter(a=>a.mode==='Simulado').slice(-5).reverse().map(attemptRow).join(
''):`<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhum simulado ainda</h3><p>Seu primeiro resultado aparecerá aqui.</
p></div>`}`;}
 function renderSummaries(){return `<div class="eyebrow">Biblioteca de estudos</div><h1>Resumos</h1><p class="muted">Revise os conceitos 
principais antes de resolver questões.</p><div class="toolbar"><div class="field"><label for="summarySubject">Matéria</label><select 
id="summarySubject"><option value="__all">Todas as matérias</option>${[...new Set(summaries.map(s=>s[0]))].map(n=>`<option>${esc(n)}</
option>`).join('')}</select></div><div class="field"><label for="summarySearch">Buscar resumo</label><input id="summarySearch" 
type="search" placeholder="Buscar por título ou tema…"></div></div><div id="summaryGrid" class="summary-grid">${summaryCards(summaries)}</
div>`;}
 function summaryCards(list){return list.map((s,i)=>`<article class="summary-card"><div class="subject-bottom"><span class="pill">${esc(s[
0])}</span><button class="text-link" data-fav-summary="${i}" aria-label="Favoritar resumo">${state.favoriteSummaries.includes(s[1])?'♥':
'■'}</button></div><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p><div class="subject-bottom"><span>${state.studiedSummaries.includes(s[1])?'✓
Estudado':'Leitura rápida'}</span><button class="btn btn-soft" data-open-summary="${i}">Ler resumo</button></div></article>`).join(
'')||`<div class="empty-state"><h3>Nenhum resumo encontrado</h3><p>Tente outra palavra ou disciplina.</p></div>`;}
 function renderSummaryDetail(i){const s=summaries[i];return `<button class="btn btn-outline" data-go="resumos">← Voltar à biblioteca</
button><article class="panel" style="margin-top:15px"><span class="pill">${esc(s[0])}</span><h1 style="margin-top:14px">${esc(s[1])}</
h1><div class="summary-body"><p>${esc(s[2])}</p><h3>Exemplo prático</h3><p>${esc(s[3])}</p><h3>Dica para provas</h3><p>${esc(s[4])}</p></
div><div class="summary-actions"><button class="btn btn-primary" data-mark-studied="${i}">${state.studiedSummaries.includes(s[1])?'✓ Já 
marquei como estudado':'Marcar como estudado'}</button><button class="btn btn-outline" data-fav-summary="${i}">${state.favoriteSummaries.
includes(s[1])?'♥ Remover dos favoritos':'■ Adicionar aos favoritos'}</button><button class="btn btn-soft" data-practice-summary="${esc(s[
0])}">Praticar matéria →</button></div></article>`;}
 function renderFavorites(){const favSummaries=summaries.map((s,i)=>({s,i})).filter(x=>state.favoriteSummaries.includes(x.s[1]));const 
favSubs=allSubjects().filter(s=>state.favoriteSubjects.includes(s[0]));return `<div class="eyebrow">Guardado para depois</
div><h1>Favoritos</h1><div class="section-head"><div><h2>Matérias favoritas</h2><p>Marque suas disciplinas preferidas nas configurações ou 
no cartão da matéria.</p></div></div>${favSubs.length?`<div class="subject-grid">${favSubs.map(subjectCard).join('')}</div>`:`<div 
class="panel empty-state"><div class="empty-icon">■</div><h3>Suas matérias favoritas aparecerão aqui</h3><p>Você pode escolher suas 
preferidas nas configurações.</p><button class="btn btn-soft" data-go="configuracoes">Escolher favoritas</button></div>`}<div 
class="section-head"><div><h2>Resumos salvos</h2><p>Materiais que você marcou para consultar depois.</p></div></div><div class="summary￾grid">${favSummaries.length?summaryCards(favSummaries.map(x=>x.s).map(s=>s)):`<div class="panel empty-state"><div class="empty-icon">■</
div><h3>Nenhum resumo favorito</h3><p>Salve um resumo para encontrá-lo rapidamente.</p><button class="btn btn-soft" data￾go="resumos">Explorar resumos</button></div>`}</div>`;}
 function renderProgress(){const s=stats(),bySub=allSubjects().map(x=>{const at=state.attempts.filter(a=>a.subject===x[0]),t=at.reduce((n,
a)=>n+a.total,0),c=at.reduce((n,a)=>n+a.correct,0);return {name:x[0],t,c,p:t?Math.round(c/t*100):0};});const recent=state.attempts.slice(-
7).reverse();return `<div class="eyebrow">Seu esforço conta</div><h1>Meu progresso</h1><p class="muted">Todos os indicadores são calculados 
a partir das suas atividades salvas neste dispositivo.</p><div class="stats-grid"><article class="stat-card"><div class="stat￾top">Questões</div><div class="stat-value">${s.questions}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div 
class="stat-value">${s.correct}</div></article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat￾value">${s.rate}%</div></article><article class="stat-card"><div class="stat-top">Sequência atual</div><div class="stat-value">${
streakCount()} dias</div></article></div><div class="two-col" style="margin-top:17px"><section class="panel"><div class="panel￾head"><h2>Desempenho por matéria</h2></div>${bySub.map(x=>`<div class="bar-row"><span>${esc(x.name)}</span><div class="progress-track"><div 
class="progress-fill" style="width:${x.p}%"></div></div><b>${x.p}%</b></div>`).join('')}</section><section class="panel"><div class="panel￾head"><h2>Conquistas</h2></div>${achievementList()}<div class="section-head"><div><h2>Meta diária</h2><p>${state.dailyGoal} questões por 
dia</p></div></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,Math.round((state.answers.filter(a=>a.
date?.slice(0,10)===todayKey()).length/state.dailyGoal)*100)||0)}%"></div></div></section></div><div class="section￾head"><div><h2>Tentativas recentes</h2><p>Últimos resultados salvos.</p></div><button class="text-link" data-go="historico">Ver histórico</
button></div>${recent.length?recent.map(attemptRow).join(''):`<div class="panel empty-state"><h3>Seu progresso começa na primeira 
atividade</h3><p>Faça algumas questões para ver os gráficos e resultados.</p><button class="btn btn-primary" data-go="atividades">Começar a 
estudar</button></div>`}`;}
 function achievementList(){const items=[['■','Primeiros passos','Conclua sua primeira atividade',state.attempts.length>=1],['■','Foco nos 
estudos','Responda 20 questões',stats().questions>=20],['■','Boa pontaria','Alcance 80% em uma atividade',state.attempts.some(a=>a.
rate>=80)],['■','Constância','Estude em 3 dias diferentes',new Set(state.studyDays).size>=3],['■','Leitor ativo','Marque 3 resumos como 
estudados',state.studiedSummaries.length>=3]];return items.map(a=>`<div class="activity-row"><div class="activity-symbol">${a[0]}</div><div 
class="activity-main"><b>${a[1]}</b><small>${a[2]}</small></div><span class="pill ${a[3]?'easy':''}">${a[3]?'Conquistada':'Bloqueada'}</
span></div>`).join('');}
 function renderHistory(){return `<div class="eyebrow">Cada tentativa ensina algo</div><h1>Histórico</h1><p class="muted">Veja suas 
atividades anteriores e seus resultados.</p><div class="toolbar"><div class="field"><label for="historySubject">Filtrar matéria</
label><select id="historySubject"><option value="__all">Todas as matérias</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).
join('')}</select></div><button class="btn btn-outline" id="clearHistory">Apagar histórico</button></div><div id="historyList">${
historyRows(state.attempts.slice().reverse())}</div><p class="muted" style="font-size:11px;margin-top:15px">Os dados são armazenados 
localmente neste navegador e dispositivo. Não há sincronização automática entre aparelhos.</p>`;}
 function historyRows(list){if(!list.length)return `<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhuma atividade 
registrada</h3><p>Depois de concluir uma atividade, o resultado será salvo aqui.</p></div>`;return list.map(a=>`<article class="history￾card" style="margin-bottom:10px"><div class="activity-row"><div class="activity-symbol">${subjectMeta(a.subject)[1]}</div><div 
class="activity-main"><b>${esc(a.subject)} · ${esc(a.label||a.mode||'Atividade')}</b><small>${new Date(a.date).toLocaleString('pt-BR',{
dateStyle:'medium',timeStyle:'short'})} · ${a.correct}/${a.total} acertos · ${secondsLabel(a.seconds||0)}</small></div><span class="score￾pill">${a.rate}%</span></div><details><summary style="cursor:pointer;font-size:12px;color:var(--primary);font-weight:700">Ver respostas e 
explicações</summary>${(a.details||[]).map(d=>`<div class="mistake"><b>${esc(d.question)}</b><p>Sua resposta: ${esc(d.chosenText||'Não 
respondida')}</p><p>Correta: ${esc(d.correctText)}</p><p>${esc(d.explanation)}</p></div>`).join('')}</details></article>`).join('');}
 function renderSettings(){return `<div class="eyebrow">Deixe do seu jeito</div><h1>Configurações</h1><p class="muted">Personalize sua 
experiência de estudos.</p><section class="panel" style="max-width:800px"><div class="setting-row"><div><b>Nível escolar</b><p>Define as 
matérias exibidas nas áreas de estudo.</p></div><select id="settingsLevel" style="max-width:220px;padding:10px;border:1px solid var(--line);
border-radius:10px;background:var(--surface);color:var(--text)"><option ${state.level===FUND?'selected':''}>${FUND}</option><option ${state.
level===MED?'selected':''}>${MED}</option></select></div><div class="setting-row"><div><b>Modo escuro</b><p>Reduz o brilho da interface.</
p></div><button class="switch" id="darkSwitch" role="switch" aria-checked="${state.theme==='dark'}" aria-label="Modo escuro"></button></
div><div class="setting-row"><div><b>Meta diária de questões</b><p>Escolha quantas questões deseja responder por dia.</p></div><select 
id="dailyGoal" style="max-width:160px;padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--
text)">${[5,10,15,20,30,40].map(n=>`<option value="${n}" ${state.dailyGoal===n?'selected':''}>${n} questões</option>`).join('')}</select></
div><div class="setting-row" style="display:block"><b>Matérias favoritas</b><p>Selecione as disciplinas que você quer encontrar rapidamente.
</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:9px;margin-top:13px">${allSubjects().map(
s=>`<label style="display:flex;gap:8px;align-items:center;font-size:13px"><input type="checkbox" data-favorite-subject="${esc(s[0])}" ${
state.favoriteSubjects.includes(s[0])?'checked':''}> ${esc(s[0])}</label>`).join('')}</div></div><div class="setting-row"><div><b>Apagar 
histórico e progresso</b><p>Remove atividades, pontuações, XP e sequência deste dispositivo.</p></div><button class="btn btn-danger" 
id="resetAll">Apagar dados</button></div><p class="muted" style="font-size:11px;margin:18px 0 0">Privacidade: os dados do Estuda Plus ficam  function renderSubjectStats(name){const at=state.attempts.filter(a=>a.subject===name),t=at.reduce((n,a)=>n+a.total,0),c=at.reduce((n,
a)=>n+a.correct,0);return `<div class="stats-grid"><article class="stat-card"><div class="stat-top">Questões respondidas</div><div 
class="stat-value">${t}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div class="stat-value">${c}</div></
article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat-value">${t?Math.round(c/t*100):0}%</div></
article><article class="stat-card"><div class="stat-top">Atividades</div><div class="stat-value">${at.length}</div></article></div>`;}
 function renderActivities(){if(selectedSubject)return renderSubjectDetail(selectedSubject);return `<div class="eyebrow">Aprendizagem 
ativa</div><h1>Atividades</h1><p class="muted">Escolha uma disciplina, um nível de dificuldade e comece a praticar.</p><div 
class="toolbar"><div class="field"><label for="activitySubject">Matéria</label><select id="activitySubject">${allSubjects().map(
s=>`<option>${esc(s[0])}</option>`).join('')}</select></div><div class="field"><label for="difficultySelect">Dificuldade</label><select 
id="difficultySelect"><option>Todos</option><option>Fácil</option><option>Médio</option><option>Difícil</option></select></div><div 
class="field"><label for="activityMode">Modo</label><select id="activityMode"><option value="study">Estudo com explicações</option><option 
value="progressive">Desafio progressivo</option></select></div></div><div class="panel"><div class="panel-head"><div><h2 
id="activityPreviewTitle">Atividade de ${esc(allSubjects()[0][0])}</h2><p id="activityPreviewText" class="muted">Questões com correção e 
explicações.</p></div><span class="pill" id="activityCount">5 questões</span></div><button class="btn btn-primary" 
id="startActivity">Iniciar atividade →</button></div><div class="section-head"><div><h2>Escolha uma matéria</h2><p>Você pode voltar a 
qualquer momento antes de iniciar.</p></div></div><div class="subject-grid">${allSubjects().map(subjectCard).join('')}</div>`;}
 function renderSimulados(){return `<div class="eyebrow">Prepare-se para as provas</div><h1>Simulados</h1><p class="muted">Treine com 
tempo limitado e veja o gabarito comentado ao final.</p><div class="panel" style="max-width:760px"><h2>Monte seu simulado</h2><p 
class="muted">Escolha o foco da prova e configure o tempo.</p><div class="toolbar"><div class="field"><label for="simSubject">Matéria</
label><select id="simSubject"><option value="__all">Interdisciplinar</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).join(
'')}</select></div><div class="field"><label for="simCount">Quantidade de questões</label><select id="simCount"><option value="5">5 
questões</option><option value="10">10 questões</option><option value="15">15 questões</option><option value="20">20 questões</option></
select></div><div class="field"><label for="simMinutes">Tempo disponível</label><select id="simMinutes"><option value="5">5 minutos</
option><option value="10" selected>10 minutos</option><option value="20">20 minutos</option><option value="30">30 minutos</option></
select></div></div><div class="setting-row"><div><b>Como funciona</b><p>As respostas ficam ocultas até você finalizar. O simulado termina 
automaticamente quando o tempo acabar.</p></div><span class="stat-icon">■</span></div><button class="btn btn-primary" id="startSim">Iniciar 
simulado →</button></div><div class="section-head"><div><h2>Últimos resultados</h2><p>Compare suas tentativas anteriores.</p></div></div>${
state.attempts.filter(a=>a.mode==='Simulado').length?state.attempts.filter(a=>a.mode==='Simulado').slice(-5).reverse().map(attemptRow).join(
''):`<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhum simulado ainda</h3><p>Seu primeiro resultado aparecerá aqui.</
p></div>`}`;}
 function renderSummaries(){return `<div class="eyebrow">Biblioteca de estudos</div><h1>Resumos</h1><p class="muted">Revise os conceitos 
principais antes de resolver questões.</p><div class="toolbar"><div class="field"><label for="summarySubject">Matéria</label><select 
id="summarySubject"><option value="__all">Todas as matérias</option>${[...new Set(summaries.map(s=>s[0]))].map(n=>`<option>${esc(n)}</
option>`).join('')}</select></div><div class="field"><label for="summarySearch">Buscar resumo</label><input id="summarySearch" 
type="search" placeholder="Buscar por título ou tema…"></div></div><div id="summaryGrid" class="summary-grid">${summaryCards(summaries)}</
div>`;}
 function summaryCards(list){return list.map((s,i)=>`<article class="summary-card"><div class="subject-bottom"><span class="pill">${esc(s[
0])}</span><button class="text-link" data-fav-summary="${i}" aria-label="Favoritar resumo">${state.favoriteSummaries.includes(s[1])?'♥':
'■'}</button></div><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p><div class="subject-bottom"><span>${state.studiedSummaries.includes(s[1])?'✓
Estudado':'Leitura rápida'}</span><button class="btn btn-soft" data-open-summary="${i}">Ler resumo</button></div></article>`).join(
'')||`<div class="empty-state"><h3>Nenhum resumo encontrado</h3><p>Tente outra palavra ou disciplina.</p></div>`;}
 function renderSummaryDetail(i){const s=summaries[i];return `<button class="btn btn-outline" data-go="resumos">← Voltar à biblioteca</
button><article class="panel" style="margin-top:15px"><span class="pill">${esc(s[0])}</span><h1 style="margin-top:14px">${esc(s[1])}</
h1><div class="summary-body"><p>${esc(s[2])}</p><h3>Exemplo prático</h3><p>${esc(s[3])}</p><h3>Dica para provas</h3><p>${esc(s[4])}</p></
div><div class="summary-actions"><button class="btn btn-primary" data-mark-studied="${i}">${state.studiedSummaries.includes(s[1])?'✓ Já 
marquei como estudado':'Marcar como estudado'}</button><button class="btn btn-outline" data-fav-summary="${i}">${state.favoriteSummaries.
includes(s[1])?'♥ Remover dos favoritos':'■ Adicionar aos favoritos'}</button><button class="btn btn-soft" data-practice-summary="${esc(s[
0])}">Praticar matéria →</button></div></article>`;}
 function renderFavorites(){const favSummaries=summaries.map((s,i)=>({s,i})).filter(x=>state.favoriteSummaries.includes(x.s[1]));const 
favSubs=allSubjects().filter(s=>state.favoriteSubjects.includes(s[0]));return `<div class="eyebrow">Guardado para depois</
div><h1>Favoritos</h1><div class="section-head"><div><h2>Matérias favoritas</h2><p>Marque suas disciplinas preferidas nas configurações ou 
no cartão da matéria.</p></div></div>${favSubs.length?`<div class="subject-grid">${favSubs.map(subjectCard).join('')}</div>`:`<div 
class="panel empty-state"><div class="empty-icon">■</div><h3>Suas matérias favoritas aparecerão aqui</h3><p>Você pode escolher suas 
preferidas nas configurações.</p><button class="btn btn-soft" data-go="configuracoes">Escolher favoritas</button></div>`}<div 
class="section-head"><div><h2>Resumos salvos</h2><p>Materiais que você marcou para consultar depois.</p></div></div><div class="summary￾grid">${favSummaries.length?summaryCards(favSummaries.map(x=>x.s).map(s=>s)):`<div class="panel empty-state"><div class="empty-icon">■</
div><h3>Nenhum resumo favorito</h3><p>Salve um resumo para encontrá-lo rapidamente.</p><button class="btn btn-soft" data￾go="resumos">Explorar resumos</button></div>`}</div>`;}
 function renderProgress(){const s=stats(),bySub=allSubjects().map(x=>{const at=state.attempts.filter(a=>a.subject===x[0]),t=at.reduce((n,
a)=>n+a.total,0),c=at.reduce((n,a)=>n+a.correct,0);return {name:x[0],t,c,p:t?Math.round(c/t*100):0};});const recent=state.attempts.slice(-
7).reverse();return `<div class="eyebrow">Seu esforço conta</div><h1>Meu progresso</h1><p class="muted">Todos os indicadores são calculados 
a partir das suas atividades salvas neste dispositivo.</p><div class="stats-grid"><article class="stat-card"><div class="stat￾top">Questões</div><div class="stat-value">${s.questions}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div 
class="stat-value">${s.correct}</div></article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat￾value">${s.rate}%</div></article><article class="stat-card"><div class="stat-top">Sequência atual</div><div class="stat-value">${
streakCount()} dias</div></article></div><div class="two-col" style="margin-top:17px"><section class="panel"><div class="panel￾head"><h2>Desempenho por matéria</h2></div>${bySub.map(x=>`<div class="bar-row"><span>${esc(x.name)}</span><div class="progress-track"><div 
class="progress-fill" style="width:${x.p}%"></div></div><b>${x.p}%</b></div>`).join('')}</section><section class="panel"><div class="panel￾head"><h2>Conquistas</h2></div>${achievementList()}<div class="section-head"><div><h2>Meta diária</h2><p>${state.dailyGoal} questões por 
dia</p></div></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,Math.round((state.answers.filter(a=>a.
date?.slice(0,10)===todayKey()).length/state.dailyGoal)*100)||0)}%"></div></div></section></div><div class="section￾head"><div><h2>Tentativas recentes</h2><p>Últimos resultados salvos.</p></div><button class="text-link" data-go="historico">Ver histórico</
button></div>${recent.length?recent.map(attemptRow).join(''):`<div class="panel empty-state"><h3>Seu progresso começa na primeira 
atividade</h3><p>Faça algumas questões para ver os gráficos e resultados.</p><button class="btn btn-primary" data-go="atividades">Começar a 
estudar</button></div>`}`;}
 function achievementList(){const items=[['■','Primeiros passos','Conclua sua primeira atividade',state.attempts.length>=1],['■','Foco nos 
estudos','Responda 20 questões',stats().questions>=20],['■','Boa pontaria','Alcance 80% em uma atividade',state.attempts.some(a=>a.
rate>=80)],['■','Constância','Estude em 3 dias diferentes',new Set(state.studyDays).size>=3],['■','Leitor ativo','Marque 3 resumos como 
estudados',state.studiedSummaries.length>=3]];return items.map(a=>`<div class="activity-row"><div class="activity-symbol">${a[0]}</div><div 
class="activity-main"><b>${a[1]}</b><small>${a[2]}</small></div><span class="pill ${a[3]?'easy':''}">${a[3]?'Conquistada':'Bloqueada'}</
span></div>`).join('');}
 function renderHistory(){return `<div class="eyebrow">Cada tentativa ensina algo</div><h1>Histórico</h1><p class="muted">Veja suas 
atividades anteriores e seus resultados.</p><div class="toolbar"><div class="field"><label for="historySubject">Filtrar matéria</
label><select id="historySubject"><option value="__all">Todas as matérias</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).
join('')}</select></div><button class="btn btn-outline" id="clearHistory">Apagar histórico</button></div><div id="historyList">${
historyRows(state.attempts.slice().reverse())}</div><p class="muted" style="font-size:11px;margin-top:15px">Os dados são armazenados 
localmente neste navegador e dispositivo. Não há sincronização automática entre aparelhos.</p>`;}
 function historyRows(list){if(!list.length)return `<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhuma atividade 
registrada</h3><p>Depois de concluir uma atividade, o resultado será salvo aqui.</p></div>`;return list.map(a=>`<article class="history￾card" style="margin-bottom:10px"><div class="activity-row"><div class="activity-symbol">${subjectMeta(a.subject)[1]}</div><div 
class="activity-main"><b>${esc(a.subject)} · ${esc(a.label||a.mode||'Atividade')}</b><small>${new Date(a.date).toLocaleString('pt-BR',{
dateStyle:'medium',timeStyle:'short'})} · ${a.correct}/${a.total} acertos · ${secondsLabel(a.seconds||0)}</small></div><span class="score￾pill">${a.rate}%</span></div><details><summary style="cursor:pointer;font-size:12px;color:var(--primary);font-weight:700">Ver respostas e 
explicações</summary>${(a.details||[]).map(d=>`<div class="mistake"><b>${esc(d.question)}</b><p>Sua resposta: ${esc(d.chosenText||'Não 
respondida')}</p><p>Correta: ${esc(d.correctText)}</p><p>${esc(d.explanation)}</p></div>`).join('')}</details></article>`).join('');}
 function renderSettings(){return `<div class="eyebrow">Deixe do seu jeito</div><h1>Configurações</h1><p class="muted">Personalize sua 
experiência de estudos.</p><section class="panel" style="max-width:800px"><div class="setting-row"><div><b>Nível escolar</b><p>Define as 
matérias exibidas nas áreas de estudo.</p></div><select id="settingsLevel" style="max-width:220px;padding:10px;border:1px solid var(--line);
border-radius:10px;background:var(--surface);color:var(--text)"><option ${state.level===FUND?'selected':''}>${FUND}</option><option ${state.
level===MED?'selected':''}>${MED}</option></select></div><div class="setting-row"><div><b>Modo escuro</b><p>Reduz o brilho da interface.</
p></div><button class="switch" id="darkSwitch" role="switch" aria-checked="${state.theme==='dark'}" aria-label="Modo escuro"></button></
div><div class="setting-row"><div><b>Meta diária de questões</b><p>Escolha quantas questões deseja responder por dia.</p></div><select 
id="dailyGoal" style="max-width:160px;padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--
text)">${[5,10,15,20,30,40].map(n=>`<option value="${n}" ${state.dailyGoal===n?'selected':''}>${n} questões</option>`).join('')}</select></
div><div class="setting-row" style="display:block"><b>Matérias favoritas</b><p>Selecione as disciplinas que você quer encontrar rapidamente.
</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:9px;margin-top:13px">${allSubjects().map(
s=>`<label style="display:flex;gap:8px;align-items:center;font-size:13px"><input type="checkbox" data-favorite-subject="${esc(s[0])}" ${
state.favoriteSubjects.includes(s[0])?'checked':''}> ${esc(s[0])}</label>`).join('')}</div></div><div class="setting-row"><div><b>Apagar 
histórico e progresso</b><p>Remove atividades, pontuações, XP e sequência deste dispositivo.</p></div><button class="btn btn-danger" 
id="resetAll">Apagar dados</button></div><p class="muted" style="font-size:11px;margin:18px 0 0">Privacidade: os dados do Estuda Plus ficam  function renderSubjectStats(name){const at=state.attempts.filter(a=>a.subject===name),t=at.reduce((n,a)=>n+a.total,0),c=at.reduce((n,
a)=>n+a.correct,0);return `<div class="stats-grid"><article class="stat-card"><div class="stat-top">Questões respondidas</div><div 
class="stat-value">${t}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div class="stat-value">${c}</div></
article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat-value">${t?Math.round(c/t*100):0}%</div></
article><article class="stat-card"><div class="stat-top">Atividades</div><div class="stat-value">${at.length}</div></article></div>`;}
 function renderActivities(){if(selectedSubject)return renderSubjectDetail(selectedSubject);return `<div class="eyebrow">Aprendizagem 
ativa</div><h1>Atividades</h1><p class="muted">Escolha uma disciplina, um nível de dificuldade e comece a praticar.</p><div 
class="toolbar"><div class="field"><label for="activitySubject">Matéria</label><select id="activitySubject">${allSubjects().map(
s=>`<option>${esc(s[0])}</option>`).join('')}</select></div><div class="field"><label for="difficultySelect">Dificuldade</label><select 
id="difficultySelect"><option>Todos</option><option>Fácil</option><option>Médio</option><option>Difícil</option></select></div><div 
class="field"><label for="activityMode">Modo</label><select id="activityMode"><option value="study">Estudo com explicações</option><option 
value="progressive">Desafio progressivo</option></select></div></div><div class="panel"><div class="panel-head"><div><h2 
id="activityPreviewTitle">Atividade de ${esc(allSubjects()[0][0])}</h2><p id="activityPreviewText" class="muted">Questões com correção e 
explicações.</p></div><span class="pill" id="activityCount">5 questões</span></div><button class="btn btn-primary" 
id="startActivity">Iniciar atividade →</button></div><div class="section-head"><div><h2>Escolha uma matéria</h2><p>Você pode voltar a 
qualquer momento antes de iniciar.</p></div></div><div class="subject-grid">${allSubjects().map(subjectCard).join('')}</div>`;}
 function renderSimulados(){return `<div class="eyebrow">Prepare-se para as provas</div><h1>Simulados</h1><p class="muted">Treine com 
tempo limitado e veja o gabarito comentado ao final.</p><div class="panel" style="max-width:760px"><h2>Monte seu simulado</h2><p 
class="muted">Escolha o foco da prova e configure o tempo.</p><div class="toolbar"><div class="field"><label for="simSubject">Matéria</
label><select id="simSubject"><option value="__all">Interdisciplinar</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).join(
'')}</select></div><div class="field"><label for="simCount">Quantidade de questões</label><select id="simCount"><option value="5">5 
questões</option><option value="10">10 questões</option><option value="15">15 questões</option><option value="20">20 questões</option></
select></div><div class="field"><label for="simMinutes">Tempo disponível</label><select id="simMinutes"><option value="5">5 minutos</
option><option value="10" selected>10 minutos</option><option value="20">20 minutos</option><option value="30">30 minutos</option></
select></div></div><div class="setting-row"><div><b>Como funciona</b><p>As respostas ficam ocultas até você finalizar. O simulado termina 
automaticamente quando o tempo acabar.</p></div><span class="stat-icon">■</span></div><button class="btn btn-primary" id="startSim">Iniciar 
simulado →</button></div><div class="section-head"><div><h2>Últimos resultados</h2><p>Compare suas tentativas anteriores.</p></div></div>${
state.attempts.filter(a=>a.mode==='Simulado').length?state.attempts.filter(a=>a.mode==='Simulado').slice(-5).reverse().map(attemptRow).join(
''):`<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhum simulado ainda</h3><p>Seu primeiro resultado aparecerá aqui.</
p></div>`}`;}
 function renderSummaries(){return `<div class="eyebrow">Biblioteca de estudos</div><h1>Resumos</h1><p class="muted">Revise os conceitos 
principais antes de resolver questões.</p><div class="toolbar"><div class="field"><label for="summarySubject">Matéria</label><select 
id="summarySubject"><option value="__all">Todas as matérias</option>${[...new Set(summaries.map(s=>s[0]))].map(n=>`<option>${esc(n)}</
option>`).join('')}</select></div><div class="field"><label for="summarySearch">Buscar resumo</label><input id="summarySearch" 
type="search" placeholder="Buscar por título ou tema…"></div></div><div id="summaryGrid" class="summary-grid">${summaryCards(summaries)}</
div>`;}
 function summaryCards(list){return list.map((s,i)=>`<article class="summary-card"><div class="subject-bottom"><span class="pill">${esc(s[
0])}</span><button class="text-link" data-fav-summary="${i}" aria-label="Favoritar resumo">${state.favoriteSummaries.includes(s[1])?'♥':
'■'}</button></div><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p><div class="subject-bottom"><span>${state.studiedSummaries.includes(s[1])?'✓
Estudado':'Leitura rápida'}</span><button class="btn btn-soft" data-open-summary="${i}">Ler resumo</button></div></article>`).join(
'')||`<div class="empty-state"><h3>Nenhum resumo encontrado</h3><p>Tente outra palavra ou disciplina.</p></div>`;}
 function renderSummaryDetail(i){const s=summaries[i];return `<button class="btn btn-outline" data-go="resumos">← Voltar à biblioteca</
button><article class="panel" style="margin-top:15px"><span class="pill">${esc(s[0])}</span><h1 style="margin-top:14px">${esc(s[1])}</
h1><div class="summary-body"><p>${esc(s[2])}</p><h3>Exemplo prático</h3><p>${esc(s[3])}</p><h3>Dica para provas</h3><p>${esc(s[4])}</p></
div><div class="summary-actions"><button class="btn btn-primary" data-mark-studied="${i}">${state.studiedSummaries.includes(s[1])?'✓ Já 
marquei como estudado':'Marcar como estudado'}</button><button class="btn btn-outline" data-fav-summary="${i}">${state.favoriteSummaries.
includes(s[1])?'♥ Remover dos favoritos':'■ Adicionar aos favoritos'}</button><button class="btn btn-soft" data-practice-summary="${esc(s[
0])}">Praticar matéria →</button></div></article>`;}
 function renderFavorites(){const favSummaries=summaries.map((s,i)=>({s,i})).filter(x=>state.favoriteSummaries.includes(x.s[1]));const 
favSubs=allSubjects().filter(s=>state.favoriteSubjects.includes(s[0]));return `<div class="eyebrow">Guardado para depois</
div><h1>Favoritos</h1><div class="section-head"><div><h2>Matérias favoritas</h2><p>Marque suas disciplinas preferidas nas configurações ou 
no cartão da matéria.</p></div></div>${favSubs.length?`<div class="subject-grid">${favSubs.map(subjectCard).join('')}</div>`:`<div 
class="panel empty-state"><div class="empty-icon">■</div><h3>Suas matérias favoritas aparecerão aqui</h3><p>Você pode escolher suas 
preferidas nas configurações.</p><button class="btn btn-soft" data-go="configuracoes">Escolher favoritas</button></div>`}<div 
class="section-head"><div><h2>Resumos salvos</h2><p>Materiais que você marcou para consultar depois.</p></div></div><div class="summary￾grid">${favSummaries.length?summaryCards(favSummaries.map(x=>x.s).map(s=>s)):`<div class="panel empty-state"><div class="empty-icon">■</
div><h3>Nenhum resumo favorito</h3><p>Salve um resumo para encontrá-lo rapidamente.</p><button class="btn btn-soft" data￾go="resumos">Explorar resumos</button></div>`}</div>`;}
 function renderProgress(){const s=stats(),bySub=allSubjects().map(x=>{const at=state.attempts.filter(a=>a.subject===x[0]),t=at.reduce((n,
a)=>n+a.total,0),c=at.reduce((n,a)=>n+a.correct,0);return {name:x[0],t,c,p:t?Math.round(c/t*100):0};});const recent=state.attempts.slice(-
7).reverse();return `<div class="eyebrow">Seu esforço conta</div><h1>Meu progresso</h1><p class="muted">Todos os indicadores são calculados 
a partir das suas atividades salvas neste dispositivo.</p><div class="stats-grid"><article class="stat-card"><div class="stat￾top">Questões</div><div class="stat-value">${s.questions}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div 
class="stat-value">${s.correct}</div></article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat￾value">${s.rate}%</div></article><article class="stat-card"><div class="stat-top">Sequência atual</div><div class="stat-value">${
streakCount()} dias</div></article></div><div class="two-col" style="margin-top:17px"><section class="panel"><div class="panel￾head"><h2>Desempenho por matéria</h2></div>${bySub.map(x=>`<div class="bar-row"><span>${esc(x.name)}</span><div class="progress-track"><div 
class="progress-fill" style="width:${x.p}%"></div></div><b>${x.p}%</b></div>`).join('')}</section><section class="panel"><div class="panel￾head"><h2>Conquistas</h2></div>${achievementList()}<div class="section-head"><div><h2>Meta diária</h2><p>${state.dailyGoal} questões por 
dia</p></div></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,Math.round((state.answers.filter(a=>a.
date?.slice(0,10)===todayKey()).length/state.dailyGoal)*100)||0)}%"></div></div></section></div><div class="section￾head"><div><h2>Tentativas recentes</h2><p>Últimos resultados salvos.</p></div><button class="text-link" data-go="historico">Ver histórico</
button></div>${recent.length?recent.map(attemptRow).join(''):`<div class="panel empty-state"><h3>Seu progresso começa na primeira 
atividade</h3><p>Faça algumas questões para ver os gráficos e resultados.</p><button class="btn btn-primary" data-go="atividades">Começar a 
estudar</button></div>`}`;}
 function achievementList(){const items=[['■','Primeiros passos','Conclua sua primeira atividade',state.attempts.length>=1],['■','Foco nos 
estudos','Responda 20 questões',stats().questions>=20],['■','Boa pontaria','Alcance 80% em uma atividade',state.attempts.some(a=>a.
rate>=80)],['■','Constância','Estude em 3 dias diferentes',new Set(state.studyDays).size>=3],['■','Leitor ativo','Marque 3 resumos como 
estudados',state.studiedSummaries.length>=3]];return items.map(a=>`<div class="activity-row"><div class="activity-symbol">${a[0]}</div><div 
class="activity-main"><b>${a[1]}</b><small>${a[2]}</small></div><span class="pill ${a[3]?'easy':''}">${a[3]?'Conquistada':'Bloqueada'}</
span></div>`).join('');}
 function renderHistory(){return `<div class="eyebrow">Cada tentativa ensina algo</div><h1>Histórico</h1><p class="muted">Veja suas 
atividades anteriores e seus resultados.</p><div class="toolbar"><div class="field"><label for="historySubject">Filtrar matéria</
label><select id="historySubject"><option value="__all">Todas as matérias</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).
join('')}</select></div><button class="btn btn-outline" id="clearHistory">Apagar histórico</button></div><div id="historyList">${
historyRows(state.attempts.slice().reverse())}</div><p class="muted" style="font-size:11px;margin-top:15px">Os dados são armazenados 
localmente neste navegador e dispositivo. Não há sincronização automática entre aparelhos.</p>`;}
 function historyRows(list){if(!list.length)return `<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhuma atividade 
registrada</h3><p>Depois de concluir uma atividade, o resultado será salvo aqui.</p></div>`;return list.map(a=>`<article class="history￾card" style="margin-bottom:10px"><div class="activity-row"><div class="activity-symbol">${subjectMeta(a.subject)[1]}</div><div 
class="activity-main"><b>${esc(a.subject)} · ${esc(a.label||a.mode||'Atividade')}</b><small>${new Date(a.date).toLocaleString('pt-BR',{
dateStyle:'medium',timeStyle:'short'})} · ${a.correct}/${a.total} acertos · ${secondsLabel(a.seconds||0)}</small></div><span class="score￾pill">${a.rate}%</span></div><details><summary style="cursor:pointer;font-size:12px;color:var(--primary);font-weight:700">Ver respostas e 
explicações</summary>${(a.details||[]).map(d=>`<div class="mistake"><b>${esc(d.question)}</b><p>Sua resposta: ${esc(d.chosenText||'Não 
respondida')}</p><p>Correta: ${esc(d.correctText)}</p><p>${esc(d.explanation)}</p></div>`).join('')}</details></article>`).join('');}
 function renderSettings(){return `<div class="eyebrow">Deixe do seu jeito</div><h1>Configurações</h1><p class="muted">Personalize sua 
experiência de estudos.</p><section class="panel" style="max-width:800px"><div class="setting-row"><div><b>Nível escolar</b><p>Define as 
matérias exibidas nas áreas de estudo.</p></div><select id="settingsLevel" style="max-width:220px;padding:10px;border:1px solid var(--line);
border-radius:10px;background:var(--surface);color:var(--text)"><option ${state.level===FUND?'selected':''}>${FUND}</option><option ${state.
level===MED?'selected':''}>${MED}</option></select></div><div class="setting-row"><div><b>Modo escuro</b><p>Reduz o brilho da interface.</
p></div><button class="switch" id="darkSwitch" role="switch" aria-checked="${state.theme==='dark'}" aria-label="Modo escuro"></button></
div><div class="setting-row"><div><b>Meta diária de questões</b><p>Escolha quantas questões deseja responder por dia.</p></div><select 
id="dailyGoal" style="max-width:160px;padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--
text)">${[5,10,15,20,30,40].map(n=>`<option value="${n}" ${state.dailyGoal===n?'selected':''}>${n} questões</option>`).join('')}</select></
div><div class="setting-row" style="display:block"><b>Matérias favoritas</b><p>Selecione as disciplinas que você quer encontrar rapidamente.
</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:9px;margin-top:13px">${allSubjects().map(
s=>`<label style="display:flex;gap:8px;align-items:center;font-size:13px"><input type="checkbox" data-favorite-subject="${esc(s[0])}" ${
state.favoriteSubjects.includes(s[0])?'checked':''}> ${esc(s[0])}</label>`).join('')}</div></div><div class="setting-row"><div><b>Apagar 
histórico e progresso</b><p>Remove atividades, pontuações, XP e sequência deste dispositivo.</p></div><button class="btn btn-danger" 
id="resetAll">Apagar dados</button></div><p class="muted" style="font-size:11px;margin:18px 0 0">Privacidade: os dados do Estuda Plus ficam  function renderSubjectStats(name){const at=state.attempts.filter(a=>a.subject===name),t=at.reduce((n,a)=>n+a.total,0),c=at.reduce((n,
a)=>n+a.correct,0);return `<div class="stats-grid"><article class="stat-card"><div class="stat-top">Questões respondidas</div><div 
class="stat-value">${t}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div class="stat-value">${c}</div></
article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat-value">${t?Math.round(c/t*100):0}%</div></
article><article class="stat-card"><div class="stat-top">Atividades</div><div class="stat-value">${at.length}</div></article></div>`;}
 function renderActivities(){if(selectedSubject)return renderSubjectDetail(selectedSubject);return `<div class="eyebrow">Aprendizagem 
ativa</div><h1>Atividades</h1><p class="muted">Escolha uma disciplina, um nível de dificuldade e comece a praticar.</p><div 
class="toolbar"><div class="field"><label for="activitySubject">Matéria</label><select id="activitySubject">${allSubjects().map(
s=>`<option>${esc(s[0])}</option>`).join('')}</select></div><div class="field"><label for="difficultySelect">Dificuldade</label><select 
id="difficultySelect"><option>Todos</option><option>Fácil</option><option>Médio</option><option>Difícil</option></select></div><div 
class="field"><label for="activityMode">Modo</label><select id="activityMode"><option value="study">Estudo com explicações</option><option 
value="progressive">Desafio progressivo</option></select></div></div><div class="panel"><div class="panel-head"><div><h2 
id="activityPreviewTitle">Atividade de ${esc(allSubjects()[0][0])}</h2><p id="activityPreviewText" class="muted">Questões com correção e 
explicações.</p></div><span class="pill" id="activityCount">5 questões</span></div><button class="btn btn-primary" 
id="startActivity">Iniciar atividade →</button></div><div class="section-head"><div><h2>Escolha uma matéria</h2><p>Você pode voltar a 
qualquer momento antes de iniciar.</p></div></div><div class="subject-grid">${allSubjects().map(subjectCard).join('')}</div>`;}
 function renderSimulados(){return `<div class="eyebrow">Prepare-se para as provas</div><h1>Simulados</h1><p class="muted">Treine com 
tempo limitado e veja o gabarito comentado ao final.</p><div class="panel" style="max-width:760px"><h2>Monte seu simulado</h2><p 
class="muted">Escolha o foco da prova e configure o tempo.</p><div class="toolbar"><div class="field"><label for="simSubject">Matéria</
label><select id="simSubject"><option value="__all">Interdisciplinar</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).join(
'')}</select></div><div class="field"><label for="simCount">Quantidade de questões</label><select id="simCount"><option value="5">5 
questões</option><option value="10">10 questões</option><option value="15">15 questões</option><option value="20">20 questões</option></
select></div><div class="field"><label for="simMinutes">Tempo disponível</label><select id="simMinutes"><option value="5">5 minutos</
option><option value="10" selected>10 minutos</option><option value="20">20 minutos</option><option value="30">30 minutos</option></
select></div></div><div class="setting-row"><div><b>Como funciona</b><p>As respostas ficam ocultas até você finalizar. O simulado termina 
automaticamente quando o tempo acabar.</p></div><span class="stat-icon">■</span></div><button class="btn btn-primary" id="startSim">Iniciar 
simulado →</button></div><div class="section-head"><div><h2>Últimos resultados</h2><p>Compare suas tentativas anteriores.</p></div></div>${
state.attempts.filter(a=>a.mode==='Simulado').length?state.attempts.filter(a=>a.mode==='Simulado').slice(-5).reverse().map(attemptRow).join(
''):`<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhum simulado ainda</h3><p>Seu primeiro resultado aparecerá aqui.</
p></div>`}`;}
 function renderSummaries(){return `<div class="eyebrow">Biblioteca de estudos</div><h1>Resumos</h1><p class="muted">Revise os conceitos 
principais antes de resolver questões.</p><div class="toolbar"><div class="field"><label for="summarySubject">Matéria</label><select 
id="summarySubject"><option value="__all">Todas as matérias</option>${[...new Set(summaries.map(s=>s[0]))].map(n=>`<option>${esc(n)}</
option>`).join('')}</select></div><div class="field"><label for="summarySearch">Buscar resumo</label><input id="summarySearch" 
type="search" placeholder="Buscar por título ou tema…"></div></div><div id="summaryGrid" class="summary-grid">${summaryCards(summaries)}</
div>`;}
 function summaryCards(list){return list.map((s,i)=>`<article class="summary-card"><div class="subject-bottom"><span class="pill">${esc(s[
0])}</span><button class="text-link" data-fav-summary="${i}" aria-label="Favoritar resumo">${state.favoriteSummaries.includes(s[1])?'♥':
'■'}</button></div><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p><div class="subject-bottom"><span>${state.studiedSummaries.includes(s[1])?'✓
Estudado':'Leitura rápida'}</span><button class="btn btn-soft" data-open-summary="${i}">Ler resumo</button></div></article>`).join(
'')||`<div class="empty-state"><h3>Nenhum resumo encontrado</h3><p>Tente outra palavra ou disciplina.</p></div>`;}
 function renderSummaryDetail(i){const s=summaries[i];return `<button class="btn btn-outline" data-go="resumos">← Voltar à biblioteca</
button><article class="panel" style="margin-top:15px"><span class="pill">${esc(s[0])}</span><h1 style="margin-top:14px">${esc(s[1])}</
h1><div class="summary-body"><p>${esc(s[2])}</p><h3>Exemplo prático</h3><p>${esc(s[3])}</p><h3>Dica para provas</h3><p>${esc(s[4])}</p></
div><div class="summary-actions"><button class="btn btn-primary" data-mark-studied="${i}">${state.studiedSummaries.includes(s[1])?'✓ Já 
marquei como estudado':'Marcar como estudado'}</button><button class="btn btn-outline" data-fav-summary="${i}">${state.favoriteSummaries.
includes(s[1])?'♥ Remover dos favoritos':'■ Adicionar aos favoritos'}</button><button class="btn btn-soft" data-practice-summary="${esc(s[
0])}">Praticar matéria →</button></div></article>`;}
 function renderFavorites(){const favSummaries=summaries.map((s,i)=>({s,i})).filter(x=>state.favoriteSummaries.includes(x.s[1]));const 
favSubs=allSubjects().filter(s=>state.favoriteSubjects.includes(s[0]));return `<div class="eyebrow">Guardado para depois</
div><h1>Favoritos</h1><div class="section-head"><div><h2>Matérias favoritas</h2><p>Marque suas disciplinas preferidas nas configurações ou 
no cartão da matéria.</p></div></div>${favSubs.length?`<div class="subject-grid">${favSubs.map(subjectCard).join('')}</div>`:`<div 
class="panel empty-state"><div class="empty-icon">■</div><h3>Suas matérias favoritas aparecerão aqui</h3><p>Você pode escolher suas 
preferidas nas configurações.</p><button class="btn btn-soft" data-go="configuracoes">Escolher favoritas</button></div>`}<div 
class="section-head"><div><h2>Resumos salvos</h2><p>Materiais que você marcou para consultar depois.</p></div></div><div class="summary￾grid">${favSummaries.length?summaryCards(favSummaries.map(x=>x.s).map(s=>s)):`<div class="panel empty-state"><div class="empty-icon">■</
div><h3>Nenhum resumo favorito</h3><p>Salve um resumo para encontrá-lo rapidamente.</p><button class="btn btn-soft" data￾go="resumos">Explorar resumos</button></div>`}</div>`;}
 function renderProgress(){const s=stats(),bySub=allSubjects().map(x=>{const at=state.attempts.filter(a=>a.subject===x[0]),t=at.reduce((n,
a)=>n+a.total,0),c=at.reduce((n,a)=>n+a.correct,0);return {name:x[0],t,c,p:t?Math.round(c/t*100):0};});const recent=state.attempts.slice(-
7).reverse();return `<div class="eyebrow">Seu esforço conta</div><h1>Meu progresso</h1><p class="muted">Todos os indicadores são calculados 
a partir das suas atividades salvas neste dispositivo.</p><div class="stats-grid"><article class="stat-card"><div class="stat￾top">Questões</div><div class="stat-value">${s.questions}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div 
class="stat-value">${s.correct}</div></article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat￾value">${s.rate}%</div></article><article class="stat-card"><div class="stat-top">Sequência atual</div><div class="stat-value">${
streakCount()} dias</div></article></div><div class="two-col" style="margin-top:17px"><section class="panel"><div class="panel￾head"><h2>Desempenho por matéria</h2></div>${bySub.map(x=>`<div class="bar-row"><span>${esc(x.name)}</span><div class="progress-track"><div 
class="progress-fill" style="width:${x.p}%"></div></div><b>${x.p}%</b></div>`).join('')}</section><section class="panel"><div class="panel￾head"><h2>Conquistas</h2></div>${achievementList()}<div class="section-head"><div><h2>Meta diária</h2><p>${state.dailyGoal} questões por 
dia</p></div></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,Math.round((state.answers.filter(a=>a.
date?.slice(0,10)===todayKey()).length/state.dailyGoal)*100)||0)}%"></div></div></section></div><div class="section￾head"><div><h2>Tentativas recentes</h2><p>Últimos resultados salvos.</p></div><button class="text-link" data-go="historico">Ver histórico</
button></div>${recent.length?recent.map(attemptRow).join(''):`<div class="panel empty-state"><h3>Seu progresso começa na primeira 
atividade</h3><p>Faça algumas questões para ver os gráficos e resultados.</p><button class="btn btn-primary" data-go="atividades">Começar a 
estudar</button></div>`}`;}
 function achievementList(){const items=[['■','Primeiros passos','Conclua sua primeira atividade',state.attempts.length>=1],['■','Foco nos 
estudos','Responda 20 questões',stats().questions>=20],['■','Boa pontaria','Alcance 80% em uma atividade',state.attempts.some(a=>a.
rate>=80)],['■','Constância','Estude em 3 dias diferentes',new Set(state.studyDays).size>=3],['■','Leitor ativo','Marque 3 resumos como 
estudados',state.studiedSummaries.length>=3]];return items.map(a=>`<div class="activity-row"><div class="activity-symbol">${a[0]}</div><div 
class="activity-main"><b>${a[1]}</b><small>${a[2]}</small></div><span class="pill ${a[3]?'easy':''}">${a[3]?'Conquistada':'Bloqueada'}</
span></div>`).join('');}
 function renderHistory(){return `<div class="eyebrow">Cada tentativa ensina algo</div><h1>Histórico</h1><p class="muted">Veja suas 
atividades anteriores e seus resultados.</p><div class="toolbar"><div class="field"><label for="historySubject">Filtrar matéria</
label><select id="historySubject"><option value="__all">Todas as matérias</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).
join('')}</select></div><button class="btn btn-outline" id="clearHistory">Apagar histórico</button></div><div id="historyList">${
historyRows(state.attempts.slice().reverse())}</div><p class="muted" style="font-size:11px;margin-top:15px">Os dados são armazenados 
localmente neste navegador e dispositivo. Não há sincronização automática entre aparelhos.</p>`;}
 function historyRows(list){if(!list.length)return `<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhuma atividade 
registrada</h3><p>Depois de concluir uma atividade, o resultado será salvo aqui.</p></div>`;return list.map(a=>`<article class="history￾card" style="margin-bottom:10px"><div class="activity-row"><div class="activity-symbol">${subjectMeta(a.subject)[1]}</div><div 
class="activity-main"><b>${esc(a.subject)} · ${esc(a.label||a.mode||'Atividade')}</b><small>${new Date(a.date).toLocaleString('pt-BR',{
dateStyle:'medium',timeStyle:'short'})} · ${a.correct}/${a.total} acertos · ${secondsLabel(a.seconds||0)}</small></div><span class="score￾pill">${a.rate}%</span></div><details><summary style="cursor:pointer;font-size:12px;color:var(--primary);font-weight:700">Ver respostas e 
explicações</summary>${(a.details||[]).map(d=>`<div class="mistake"><b>${esc(d.question)}</b><p>Sua resposta: ${esc(d.chosenText||'Não 
respondida')}</p><p>Correta: ${esc(d.correctText)}</p><p>${esc(d.explanation)}</p></div>`).join('')}</details></article>`).join('');}
 function renderSettings(){return `<div class="eyebrow">Deixe do seu jeito</div><h1>Configurações</h1><p class="muted">Personalize sua 
experiência de estudos.</p><section class="panel" style="max-width:800px"><div class="setting-row"><div><b>Nível escolar</b><p>Define as 
matérias exibidas nas áreas de estudo.</p></div><select id="settingsLevel" style="max-width:220px;padding:10px;border:1px solid var(--line);
border-radius:10px;background:var(--surface);color:var(--text)"><option ${state.level===FUND?'selected':''}>${FUND}</option><option ${state.
level===MED?'selected':''}>${MED}</option></select></div><div class="setting-row"><div><b>Modo escuro</b><p>Reduz o brilho da interface.</
p></div><button class="switch" id="darkSwitch" role="switch" aria-checked="${state.theme==='dark'}" aria-label="Modo escuro"></button></
div><div class="setting-row"><div><b>Meta diária de questões</b><p>Escolha quantas questões deseja responder por dia.</p></div><select 
id="dailyGoal" style="max-width:160px;padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--
text)">${[5,10,15,20,30,40].map(n=>`<option value="${n}" ${state.dailyGoal===n?'selected':''}>${n} questões</option>`).join('')}</select></
div><div class="setting-row" style="display:block"><b>Matérias favoritas</b><p>Selecione as disciplinas que você quer encontrar rapidamente.
</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:9px;margin-top:13px">${allSubjects().map(
s=>`<label style="display:flex;gap:8px;align-items:center;font-size:13px"><input type="checkbox" data-favorite-subject="${esc(s[0])}" ${
state.favoriteSubjects.includes(s[0])?'checked':''}> ${esc(s[0])}</label>`).join('')}</div></div><div class="setting-row"><div><b>Apagar 
histórico e progresso</b><p>Remove atividades, pontuações, XP e sequência deste dispositivo.</p></div><button class="btn btn-danger" 
id="resetAll">Apagar dados</button></div><p class="muted" style="font-size:11px;margin:18px 0 0">Privacidade: os dados do Estuda Plus ficam  function renderSubjectStats(name){const at=state.attempts.filter(a=>a.subject===name),t=at.reduce((n,a)=>n+a.total,0),c=at.reduce((n,
a)=>n+a.correct,0);return `<div class="stats-grid"><article class="stat-card"><div class="stat-top">Questões respondidas</div><div 
class="stat-value">${t}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div class="stat-value">${c}</div></
article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat-value">${t?Math.round(c/t*100):0}%</div></
article><article class="stat-card"><div class="stat-top">Atividades</div><div class="stat-value">${at.length}</div></article></div>`;}
 function renderActivities(){if(selectedSubject)return renderSubjectDetail(selectedSubject);return `<div class="eyebrow">Aprendizagem 
ativa</div><h1>Atividades</h1><p class="muted">Escolha uma disciplina, um nível de dificuldade e comece a praticar.</p><div 
class="toolbar"><div class="field"><label for="activitySubject">Matéria</label><select id="activitySubject">${allSubjects().map(
s=>`<option>${esc(s[0])}</option>`).join('')}</select></div><div class="field"><label for="difficultySelect">Dificuldade</label><select 
id="difficultySelect"><option>Todos</option><option>Fácil</option><option>Médio</option><option>Difícil</option></select></div><div 
class="field"><label for="activityMode">Modo</label><select id="activityMode"><option value="study">Estudo com explicações</option><option 
value="progressive">Desafio progressivo</option></select></div></div><div class="panel"><div class="panel-head"><div><h2 
id="activityPreviewTitle">Atividade de ${esc(allSubjects()[0][0])}</h2><p id="activityPreviewText" class="muted">Questões com correção e 
explicações.</p></div><span class="pill" id="activityCount">5 questões</span></div><button class="btn btn-primary" 
id="startActivity">Iniciar atividade →</button></div><div class="section-head"><div><h2>Escolha uma matéria</h2><p>Você pode voltar a 
qualquer momento antes de iniciar.</p></div></div><div class="subject-grid">${allSubjects().map(subjectCard).join('')}</div>`;}
 function renderSimulados(){return `<div class="eyebrow">Prepare-se para as provas</div><h1>Simulados</h1><p class="muted">Treine com 
tempo limitado e veja o gabarito comentado ao final.</p><div class="panel" style="max-width:760px"><h2>Monte seu simulado</h2><p 
class="muted">Escolha o foco da prova e configure o tempo.</p><div class="toolbar"><div class="field"><label for="simSubject">Matéria</
label><select id="simSubject"><option value="__all">Interdisciplinar</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).join(
'')}</select></div><div class="field"><label for="simCount">Quantidade de questões</label><select id="simCount"><option value="5">5 
questões</option><option value="10">10 questões</option><option value="15">15 questões</option><option value="20">20 questões</option></
select></div><div class="field"><label for="simMinutes">Tempo disponível</label><select id="simMinutes"><option value="5">5 minutos</
option><option value="10" selected>10 minutos</option><option value="20">20 minutos</option><option value="30">30 minutos</option></
select></div></div><div class="setting-row"><div><b>Como funciona</b><p>As respostas ficam ocultas até você finalizar. O simulado termina 
automaticamente quando o tempo acabar.</p></div><span class="stat-icon">■</span></div><button class="btn btn-primary" id="startSim">Iniciar 
simulado →</button></div><div class="section-head"><div><h2>Últimos resultados</h2><p>Compare suas tentativas anteriores.</p></div></div>${
state.attempts.filter(a=>a.mode==='Simulado').length?state.attempts.filter(a=>a.mode==='Simulado').slice(-5).reverse().map(attemptRow).join(
''):`<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhum simulado ainda</h3><p>Seu primeiro resultado aparecerá aqui.</
p></div>`}`;}
 function renderSummaries(){return `<div class="eyebrow">Biblioteca de estudos</div><h1>Resumos</h1><p class="muted">Revise os conceitos 
principais antes de resolver questões.</p><div class="toolbar"><div class="field"><label for="summarySubject">Matéria</label><select 
id="summarySubject"><option value="__all">Todas as matérias</option>${[...new Set(summaries.map(s=>s[0]))].map(n=>`<option>${esc(n)}</
option>`).join('')}</select></div><div class="field"><label for="summarySearch">Buscar resumo</label><input id="summarySearch" 
type="search" placeholder="Buscar por título ou tema…"></div></div><div id="summaryGrid" class="summary-grid">${summaryCards(summaries)}</
div>`;}
 function summaryCards(list){return list.map((s,i)=>`<article class="summary-card"><div class="subject-bottom"><span class="pill">${esc(s[
0])}</span><button class="text-link" data-fav-summary="${i}" aria-label="Favoritar resumo">${state.favoriteSummaries.includes(s[1])?'♥':
'■'}</button></div><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p><div class="subject-bottom"><span>${state.studiedSummaries.includes(s[1])?'✓
Estudado':'Leitura rápida'}</span><button class="btn btn-soft" data-open-summary="${i}">Ler resumo</button></div></article>`).join(
'')||`<div class="empty-state"><h3>Nenhum resumo encontrado</h3><p>Tente outra palavra ou disciplina.</p></div>`;}
 function renderSummaryDetail(i){const s=summaries[i];return `<button class="btn btn-outline" data-go="resumos">← Voltar à biblioteca</
button><article class="panel" style="margin-top:15px"><span class="pill">${esc(s[0])}</span><h1 style="margin-top:14px">${esc(s[1])}</
h1><div class="summary-body"><p>${esc(s[2])}</p><h3>Exemplo prático</h3><p>${esc(s[3])}</p><h3>Dica para provas</h3><p>${esc(s[4])}</p></
div><div class="summary-actions"><button class="btn btn-primary" data-mark-studied="${i}">${state.studiedSummaries.includes(s[1])?'✓ Já 
marquei como estudado':'Marcar como estudado'}</button><button class="btn btn-outline" data-fav-summary="${i}">${state.favoriteSummaries.
includes(s[1])?'♥ Remover dos favoritos':'■ Adicionar aos favoritos'}</button><button class="btn btn-soft" data-practice-summary="${esc(s[
0])}">Praticar matéria →</button></div></article>`;}
 function renderFavorites(){const favSummaries=summaries.map((s,i)=>({s,i})).filter(x=>state.favoriteSummaries.includes(x.s[1]));const 
favSubs=allSubjects().filter(s=>state.favoriteSubjects.includes(s[0]));return `<div class="eyebrow">Guardado para depois</
div><h1>Favoritos</h1><div class="section-head"><div><h2>Matérias favoritas</h2><p>Marque suas disciplinas preferidas nas configurações ou 
no cartão da matéria.</p></div></div>${favSubs.length?`<div class="subject-grid">${favSubs.map(subjectCard).join('')}</div>`:`<div 
class="panel empty-state"><div class="empty-icon">■</div><h3>Suas matérias favoritas aparecerão aqui</h3><p>Você pode escolher suas 
preferidas nas configurações.</p><button class="btn btn-soft" data-go="configuracoes">Escolher favoritas</button></div>`}<div 
class="section-head"><div><h2>Resumos salvos</h2><p>Materiais que você marcou para consultar depois.</p></div></div><div class="summary￾grid">${favSummaries.length?summaryCards(favSummaries.map(x=>x.s).map(s=>s)):`<div class="panel empty-state"><div class="empty-icon">■</
div><h3>Nenhum resumo favorito</h3><p>Salve um resumo para encontrá-lo rapidamente.</p><button class="btn btn-soft" data￾go="resumos">Explorar resumos</button></div>`}</div>`;}
 function renderProgress(){const s=stats(),bySub=allSubjects().map(x=>{const at=state.attempts.filter(a=>a.subject===x[0]),t=at.reduce((n,
a)=>n+a.total,0),c=at.reduce((n,a)=>n+a.correct,0);return {name:x[0],t,c,p:t?Math.round(c/t*100):0};});const recent=state.attempts.slice(-
7).reverse();return `<div class="eyebrow">Seu esforço conta</div><h1>Meu progresso</h1><p class="muted">Todos os indicadores são calculados 
a partir das suas atividades salvas neste dispositivo.</p><div class="stats-grid"><article class="stat-card"><div class="stat￾top">Questões</div><div class="stat-value">${s.questions}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div 
class="stat-value">${s.correct}</div></article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat￾value">${s.rate}%</div></article><article class="stat-card"><div class="stat-top">Sequência atual</div><div class="stat-value">${
streakCount()} dias</div></article></div><div class="two-col" style="margin-top:17px"><section class="panel"><div class="panel￾head"><h2>Desempenho por matéria</h2></div>${bySub.map(x=>`<div class="bar-row"><span>${esc(x.name)}</span><div class="progress-track"><div 
class="progress-fill" style="width:${x.p}%"></div></div><b>${x.p}%</b></div>`).join('')}</section><section class="panel"><div class="panel￾head"><h2>Conquistas</h2></div>${achievementList()}<div class="section-head"><div><h2>Meta diária</h2><p>${state.dailyGoal} questões por 
dia</p></div></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,Math.round((state.answers.filter(a=>a.
date?.slice(0,10)===todayKey()).length/state.dailyGoal)*100)||0)}%"></div></div></section></div><div class="section￾head"><div><h2>Tentativas recentes</h2><p>Últimos resultados salvos.</p></div><button class="text-link" data-go="historico">Ver histórico</
button></div>${recent.length?recent.map(attemptRow).join(''):`<div class="panel empty-state"><h3>Seu progresso começa na primeira 
atividade</h3><p>Faça algumas questões para ver os gráficos e resultados.</p><button class="btn btn-primary" data-go="atividades">Começar a 
estudar</button></div>`}`;}
 function achievementList(){const items=[['■','Primeiros passos','Conclua sua primeira atividade',state.attempts.length>=1],['■','Foco nos 
estudos','Responda 20 questões',stats().questions>=20],['■','Boa pontaria','Alcance 80% em uma atividade',state.attempts.some(a=>a.
rate>=80)],['■','Constância','Estude em 3 dias diferentes',new Set(state.studyDays).size>=3],['■','Leitor ativo','Marque 3 resumos como 
estudados',state.studiedSummaries.length>=3]];return items.map(a=>`<div class="activity-row"><div class="activity-symbol">${a[0]}</div><div 
class="activity-main"><b>${a[1]}</b><small>${a[2]}</small></div><span class="pill ${a[3]?'easy':''}">${a[3]?'Conquistada':'Bloqueada'}</
span></div>`).join('');}
 function renderHistory(){return `<div class="eyebrow">Cada tentativa ensina algo</div><h1>Histórico</h1><p class="muted">Veja suas 
atividades anteriores e seus resultados.</p><div class="toolbar"><div class="field"><label for="historySubject">Filtrar matéria</
label><select id="historySubject"><option value="__all">Todas as matérias</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).
join('')}</select></div><button class="btn btn-outline" id="clearHistory">Apagar histórico</button></div><div id="historyList">${
historyRows(state.attempts.slice().reverse())}</div><p class="muted" style="font-size:11px;margin-top:15px">Os dados são armazenados 
localmente neste navegador e dispositivo. Não há sincronização automática entre aparelhos.</p>`;}
 function historyRows(list){if(!list.length)return `<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhuma atividade 
registrada</h3><p>Depois de concluir uma atividade, o resultado será salvo aqui.</p></div>`;return list.map(a=>`<article class="history￾card" style="margin-bottom:10px"><div class="activity-row"><div class="activity-symbol">${subjectMeta(a.subject)[1]}</div><div 
class="activity-main"><b>${esc(a.subject)} · ${esc(a.label||a.mode||'Atividade')}</b><small>${new Date(a.date).toLocaleString('pt-BR',{
dateStyle:'medium',timeStyle:'short'})} · ${a.correct}/${a.total} acertos · ${secondsLabel(a.seconds||0)}</small></div><span class="score￾pill">${a.rate}%</span></div><details><summary style="cursor:pointer;font-size:12px;color:var(--primary);font-weight:700">Ver respostas e 
explicações</summary>${(a.details||[]).map(d=>`<div class="mistake"><b>${esc(d.question)}</b><p>Sua resposta: ${esc(d.chosenText||'Não 
respondida')}</p><p>Correta: ${esc(d.correctText)}</p><p>${esc(d.explanation)}</p></div>`).join('')}</details></article>`).join('');}
 function renderSettings(){return `<div class="eyebrow">Deixe do seu jeito</div><h1>Configurações</h1><p class="muted">Personalize sua 
experiência de estudos.</p><section class="panel" style="max-width:800px"><div class="setting-row"><div><b>Nível escolar</b><p>Define as 
matérias exibidas nas áreas de estudo.</p></div><select id="settingsLevel" style="max-width:220px;padding:10px;border:1px solid var(--line);
border-radius:10px;background:var(--surface);color:var(--text)"><option ${state.level===FUND?'selected':''}>${FUND}</option><option ${state.
level===MED?'selected':''}>${MED}</option></select></div><div class="setting-row"><div><b>Modo escuro</b><p>Reduz o brilho da interface.</
p></div><button class="switch" id="darkSwitch" role="switch" aria-checked="${state.theme==='dark'}" aria-label="Modo escuro"></button></
div><div class="setting-row"><div><b>Meta diária de questões</b><p>Escolha quantas questões deseja responder por dia.</p></div><select 
id="dailyGoal" style="max-width:160px;padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--
text)">${[5,10,15,20,30,40].map(n=>`<option value="${n}" ${state.dailyGoal===n?'selected':''}>${n} questões</option>`).join('')}</select></
div><div class="setting-row" style="display:block"><b>Matérias favoritas</b><p>Selecione as disciplinas que você quer encontrar rapidamente.
</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:9px;margin-top:13px">${allSubjects().map(
s=>`<label style="display:flex;gap:8px;align-items:center;font-size:13px"><input type="checkbox" data-favorite-subject="${esc(s[0])}" ${
state.favoriteSubjects.includes(s[0])?'checked':''}> ${esc(s[0])}</label>`).join('')}</div></div><div class="setting-row"><div><b>Apagar 
histórico e progresso</b><p>Remove atividades, pontuações, XP e sequência deste dispositivo.</p></div><button class="btn btn-danger" 
id="resetAll">Apagar dados</button></div><p class="muted" style="font-size:11px;margin:18px 0 0">Privacidade: os dados do Estuda Plus ficam  function renderSubjectStats(name){const at=state.attempts.filter(a=>a.subject===name),t=at.reduce((n,a)=>n+a.total,0),c=at.reduce((n,
a)=>n+a.correct,0);return `<div class="stats-grid"><article class="stat-card"><div class="stat-top">Questões respondidas</div><div 
class="stat-value">${t}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div class="stat-value">${c}</div></
article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat-value">${t?Math.round(c/t*100):0}%</div></
article><article class="stat-card"><div class="stat-top">Atividades</div><div class="stat-value">${at.length}</div></article></div>`;}
 function renderActivities(){if(selectedSubject)return renderSubjectDetail(selectedSubject);return `<div class="eyebrow">Aprendizagem 
ativa</div><h1>Atividades</h1><p class="muted">Escolha uma disciplina, um nível de dificuldade e comece a praticar.</p><div 
class="toolbar"><div class="field"><label for="activitySubject">Matéria</label><select id="activitySubject">${allSubjects().map(
s=>`<option>${esc(s[0])}</option>`).join('')}</select></div><div class="field"><label for="difficultySelect">Dificuldade</label><select 
id="difficultySelect"><option>Todos</option><option>Fácil</option><option>Médio</option><option>Difícil</option></select></div><div 
class="field"><label for="activityMode">Modo</label><select id="activityMode"><option value="study">Estudo com explicações</option><option 
value="progressive">Desafio progressivo</option></select></div></div><div class="panel"><div class="panel-head"><div><h2 
id="activityPreviewTitle">Atividade de ${esc(allSubjects()[0][0])}</h2><p id="activityPreviewText" class="muted">Questões com correção e 
explicações.</p></div><span class="pill" id="activityCount">5 questões</span></div><button class="btn btn-primary" 
id="startActivity">Iniciar atividade →</button></div><div class="section-head"><div><h2>Escolha uma matéria</h2><p>Você pode voltar a 
qualquer momento antes de iniciar.</p></div></div><div class="subject-grid">${allSubjects().map(subjectCard).join('')}</div>`;}
 function renderSimulados(){return `<div class="eyebrow">Prepare-se para as provas</div><h1>Simulados</h1><p class="muted">Treine com 
tempo limitado e veja o gabarito comentado ao final.</p><div class="panel" style="max-width:760px"><h2>Monte seu simulado</h2><p 
class="muted">Escolha o foco da prova e configure o tempo.</p><div class="toolbar"><div class="field"><label for="simSubject">Matéria</
label><select id="simSubject"><option value="__all">Interdisciplinar</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).join(
'')}</select></div><div class="field"><label for="simCount">Quantidade de questões</label><select id="simCount"><option value="5">5 
questões</option><option value="10">10 questões</option><option value="15">15 questões</option><option value="20">20 questões</option></
select></div><div class="field"><label for="simMinutes">Tempo disponível</label><select id="simMinutes"><option value="5">5 minutos</
option><option value="10" selected>10 minutos</option><option value="20">20 minutos</option><option value="30">30 minutos</option></
select></div></div><div class="setting-row"><div><b>Como funciona</b><p>As respostas ficam ocultas até você finalizar. O simulado termina 
automaticamente quando o tempo acabar.</p></div><span class="stat-icon">■</span></div><button class="btn btn-primary" id="startSim">Iniciar 
simulado →</button></div><div class="section-head"><div><h2>Últimos resultados</h2><p>Compare suas tentativas anteriores.</p></div></div>${
state.attempts.filter(a=>a.mode==='Simulado').length?state.attempts.filter(a=>a.mode==='Simulado').slice(-5).reverse().map(attemptRow).join(
''):`<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhum simulado ainda</h3><p>Seu primeiro resultado aparecerá aqui.</
p></div>`}`;}
 function renderSummaries(){return `<div class="eyebrow">Biblioteca de estudos</div><h1>Resumos</h1><p class="muted">Revise os conceitos 
principais antes de resolver questões.</p><div class="toolbar"><div class="field"><label for="summarySubject">Matéria</label><select 
id="summarySubject"><option value="__all">Todas as matérias</option>${[...new Set(summaries.map(s=>s[0]))].map(n=>`<option>${esc(n)}</
option>`).join('')}</select></div><div class="field"><label for="summarySearch">Buscar resumo</label><input id="summarySearch" 
type="search" placeholder="Buscar por título ou tema…"></div></div><div id="summaryGrid" class="summary-grid">${summaryCards(summaries)}</
div>`;}
 function summaryCards(list){return list.map((s,i)=>`<article class="summary-card"><div class="subject-bottom"><span class="pill">${esc(s[
0])}</span><button class="text-link" data-fav-summary="${i}" aria-label="Favoritar resumo">${state.favoriteSummaries.includes(s[1])?'♥':
'■'}</button></div><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p><div class="subject-bottom"><span>${state.studiedSummaries.includes(s[1])?'✓
Estudado':'Leitura rápida'}</span><button class="btn btn-soft" data-open-summary="${i}">Ler resumo</button></div></article>`).join(
'')||`<div class="empty-state"><h3>Nenhum resumo encontrado</h3><p>Tente outra palavra ou disciplina.</p></div>`;}
 function renderSummaryDetail(i){const s=summaries[i];return `<button class="btn btn-outline" data-go="resumos">← Voltar à biblioteca</
button><article class="panel" style="margin-top:15px"><span class="pill">${esc(s[0])}</span><h1 style="margin-top:14px">${esc(s[1])}</
h1><div class="summary-body"><p>${esc(s[2])}</p><h3>Exemplo prático</h3><p>${esc(s[3])}</p><h3>Dica para provas</h3><p>${esc(s[4])}</p></
div><div class="summary-actions"><button class="btn btn-primary" data-mark-studied="${i}">${state.studiedSummaries.includes(s[1])?'✓ Já 
marquei como estudado':'Marcar como estudado'}</button><button class="btn btn-outline" data-fav-summary="${i}">${state.favoriteSummaries.
includes(s[1])?'♥ Remover dos favoritos':'■ Adicionar aos favoritos'}</button><button class="btn btn-soft" data-practice-summary="${esc(s[
0])}">Praticar matéria →</button></div></article>`;}
 function renderFavorites(){const favSummaries=summaries.map((s,i)=>({s,i})).filter(x=>state.favoriteSummaries.includes(x.s[1]));const 
favSubs=allSubjects().filter(s=>state.favoriteSubjects.includes(s[0]));return `<div class="eyebrow">Guardado para depois</
div><h1>Favoritos</h1><div class="section-head"><div><h2>Matérias favoritas</h2><p>Marque suas disciplinas preferidas nas configurações ou 
no cartão da matéria.</p></div></div>${favSubs.length?`<div class="subject-grid">${favSubs.map(subjectCard).join('')}</div>`:`<div 
class="panel empty-state"><div class="empty-icon">■</div><h3>Suas matérias favoritas aparecerão aqui</h3><p>Você pode escolher suas 
preferidas nas configurações.</p><button class="btn btn-soft" data-go="configuracoes">Escolher favoritas</button></div>`}<div 
class="section-head"><div><h2>Resumos salvos</h2><p>Materiais que você marcou para consultar depois.</p></div></div><div class="summary￾grid">${favSummaries.length?summaryCards(favSummaries.map(x=>x.s).map(s=>s)):`<div class="panel empty-state"><div class="empty-icon">■</
div><h3>Nenhum resumo favorito</h3><p>Salve um resumo para encontrá-lo rapidamente.</p><button class="btn btn-soft" data￾go="resumos">Explorar resumos</button></div>`}</div>`;}
 function renderProgress(){const s=stats(),bySub=allSubjects().map(x=>{const at=state.attempts.filter(a=>a.subject===x[0]),t=at.reduce((n,
a)=>n+a.total,0),c=at.reduce((n,a)=>n+a.correct,0);return {name:x[0],t,c,p:t?Math.round(c/t*100):0};});const recent=state.attempts.slice(-
7).reverse();return `<div class="eyebrow">Seu esforço conta</div><h1>Meu progresso</h1><p class="muted">Todos os indicadores são calculados 
a partir das suas atividades salvas neste dispositivo.</p><div class="stats-grid"><article class="stat-card"><div class="stat￾top">Questões</div><div class="stat-value">${s.questions}</div></article><article class="stat-card"><div class="stat-top">Acertos</div><div 
class="stat-value">${s.correct}</div></article><article class="stat-card"><div class="stat-top">Aproveitamento</div><div class="stat￾value">${s.rate}%</div></article><article class="stat-card"><div class="stat-top">Sequência atual</div><div class="stat-value">${
streakCount()} dias</div></article></div><div class="two-col" style="margin-top:17px"><section class="panel"><div class="panel￾head"><h2>Desempenho por matéria</h2></div>${bySub.map(x=>`<div class="bar-row"><span>${esc(x.name)}</span><div class="progress-track"><div 
class="progress-fill" style="width:${x.p}%"></div></div><b>${x.p}%</b></div>`).join('')}</section><section class="panel"><div class="panel￾head"><h2>Conquistas</h2></div>${achievementList()}<div class="section-head"><div><h2>Meta diária</h2><p>${state.dailyGoal} questões por 
dia</p></div></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,Math.round((state.answers.filter(a=>a.
date?.slice(0,10)===todayKey()).length/state.dailyGoal)*100)||0)}%"></div></div></section></div><div class="section￾head"><div><h2>Tentativas recentes</h2><p>Últimos resultados salvos.</p></div><button class="text-link" data-go="historico">Ver histórico</
button></div>${recent.length?recent.map(attemptRow).join(''):`<div class="panel empty-state"><h3>Seu progresso começa na primeira 
atividade</h3><p>Faça algumas questões para ver os gráficos e resultados.</p><button class="btn btn-primary" data-go="atividades">Começar a 
estudar</button></div>`}`;}
 function achievementList(){const items=[['■','Primeiros passos','Conclua sua primeira atividade',state.attempts.length>=1],['■','Foco nos 
estudos','Responda 20 questões',stats().questions>=20],['■','Boa pontaria','Alcance 80% em uma atividade',state.attempts.some(a=>a.
rate>=80)],['■','Constância','Estude em 3 dias diferentes',new Set(state.studyDays).size>=3],['■','Leitor ativo','Marque 3 resumos como 
estudados',state.studiedSummaries.length>=3]];return items.map(a=>`<div class="activity-row"><div class="activity-symbol">${a[0]}</div><div 
class="activity-main"><b>${a[1]}</b><small>${a[2]}</small></div><span class="pill ${a[3]?'easy':''}">${a[3]?'Conquistada':'Bloqueada'}</
span></div>`).join('');}
 function renderHistory(){return `<div class="eyebrow">Cada tentativa ensina algo</div><h1>Histórico</h1><p class="muted">Veja suas 
atividades anteriores e seus resultados.</p><div class="toolbar"><div class="field"><label for="historySubject">Filtrar matéria</
label><select id="historySubject"><option value="__all">Todas as matérias</option>${allSubjects().map(s=>`<option>${esc(s[0])}</option>`).
join('')}</select></div><button class="btn btn-outline" id="clearHistory">Apagar histórico</button></div><div id="historyList">${
historyRows(state.attempts.slice().reverse())}</div><p class="muted" style="font-size:11px;margin-top:15px">Os dados são armazenados 
localmente neste navegador e dispositivo. Não há sincronização automática entre aparelhos.</p>`;}
 function historyRows(list){if(!list.length)return `<div class="panel empty-state"><div class="empty-icon">■</div><h3>Nenhuma atividade 
registrada</h3><p>Depois de concluir uma atividade, o resultado será salvo aqui.</p></div>`;return list.map(a=>`<article class="history￾card" style="margin-bottom:10px"><div class="activity-row"><div class="activity-symbol">${subjectMeta(a.subject)[1]}</div><div 
class="activity-main"><b>${esc(a.subject)} · ${esc(a.label||a.mode||'Atividade')}</b><small>${new Date(a.date).toLocaleString('pt-BR',{
dateStyle:'medium',timeStyle:'short'})} · ${a.correct}/${a.total} acertos · ${secondsLabel(a.seconds||0)}</small></div><span class="score￾pill">${a.rate}%</span></div><details><summary style="cursor:pointer;font-size:12px;color:var(--primary);font-weight:700">Ver respostas e 
explicações</summary>${(a.details||[]).map(d=>`<div class="mistake"><b>${esc(d.question)}</b><p>Sua resposta: ${esc(d.chosenText||'Não 
respondida')}</p><p>Correta: ${esc(d.correctText)}</p><p>${esc(d.explanation)}</p></div>`).join('')}</details></article>`).join('');}
 function renderSettings(){return `<div class="eyebrow">Deixe do seu jeito</div><h1>Configurações</h1><p class="muted">Personalize sua 
experiência de estudos.</p><section class="panel" style="max-width:800px"><div class="setting-row"><div><b>Nível escolar</b><p>Define as 
matérias exibidas nas áreas de estudo.</p></div><select id="settingsLevel" style="max-width:220px;padding:10px;border:1px solid var(--line);
border-radius:10px;background:var(--surface);color:var(--text)"><option ${state.level===FUND?'selected':''}>${FUND}</option><option ${state.
level===MED?'selected':''}>${MED}</option></select></div><div class="setting-row"><div><b>Modo escuro</b><p>Reduz o brilho da interface.</
p></div><button class="switch" id="darkSwitch" role="switch" aria-checked="${state.theme==='dark'}" aria-label="Modo escuro"></button></
div><div class="setting-row"><div><b>Meta diária de questões</b><p>Escolha quantas questões deseja responder por dia.</p></div><select 
id="dailyGoal" style="max-width:160px;padding:10px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--
text)">${[5,10,15,20,30,40].map(n=>`<option value="${n}" ${state.dailyGoal===n?'selected':''}>${n} questões</option>`).join('')}</select></
div><div class="setting-row" style="display:block"><b>Matérias favoritas</b><p>Selecione as disciplinas que você quer encontrar rapidamente.
</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:9px;margin-top:13px">${allSubjects().map(
s=>`<label style="display:flex;gap:8px;align-items:center;font-size:13px"><input type="checkbox" data-favorite-subject="${esc(s[0])}" ${
state.favoriteSubjects.includes(s[0])?'checked':''}> ${esc(s[0])}</label>`).join('')}</div></div><div class="setting-row"><div><b>Apagar 
histórico e progresso</b><p>Remove atividades, pontuações, XP e sequência deste dispositivo.</p></div><button class="btn btn-danger" 
id="resetAll">Apagar dados</button></div><p class="muted" style="font-size:11px;margin:18px 0 0">Privacidade: os dados do Estuda Plus ficam 
