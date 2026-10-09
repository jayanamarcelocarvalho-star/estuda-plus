const banco = {
  "Português": {
    nivel: "ambos",
    resumo: "Estude interpretação textual, gêneros textuais, gramática, pontuação, concordância e figuras de linguagem.",
    itens: [
      ["Qual é a finalidade principal de um texto argumentativo?", "Defender uma ideia com argumentos", "O texto argumentativo apresenta uma tese e razões para sustentá-la."],
      ["O que é o tema de um texto?", "O assunto central", "O tema é o assunto principal desenvolvido pelo texto."],
      ["O que é uma metáfora?", "Uma comparação implícita", "A metáfora aproxima ideias sem usar necessariamente conectivos como 'como'."],
      ["Qual é a função dos conectivos?", "Relacionar ideias", "Conectivos indicam relações como causa, conclusão, oposição e adição."],
      ["O que é uma ironia?", "Dizer algo sugerindo sentido diferente ou contrário", "A ironia depende do contexto para que o sentido pretendido seja percebido."],
      ["O que é uma oração?", "Uma estrutura organizada em torno de um verbo ou locução verbal", "A oração contém verbo ou locução verbal."],
      ["Qual é a função de um pronome?", "Retomar ou acompanhar nomes e indicar pessoas ou relações", "Pronomes podem substituir ou acompanhar substantivos."],
      ["O que caracteriza a linguagem formal?", "Adequação à situação e uso da norma-padrão quando exigida", "A linguagem formal costuma ser usada em situações acadêmicas e profissionais."],
      ["O que é a ideia principal de um parágrafo?", "A informação central desenvolvida nele", "As demais informações podem explicar, justificar ou exemplificar essa ideia."],
      ["Para que serve a pontuação?", "Organizar o texto e orientar a leitura", "A pontuação ajuda a marcar pausas, relações sintáticas e sentidos."]
    ]
  },
  "Matemática": {
    nivel: "ambos",
    resumo: "Revise operações, frações, porcentagem, proporções, equações, geometria, funções e estatística.",
    itens: [
      ["Quanto é 25% de 240?", "60", "25% equivale a um quarto: 240 ÷ 4 = 60."],
      ["Resolva: 3x + 5 = 20.", "x = 5", "Subtraindo 5, temos 3x = 15. Dividindo por 3, x = 5."],
      ["Qual é a área de um retângulo de lados 8 cm e 5 cm?", "40 cm²", "Área do retângulo = base × altura: 8 × 5 = 40."],
      ["Qual é a média de 6, 8 e 10?", "8", "Somamos os valores e dividimos por 3: 24 ÷ 3 = 8."],
      ["Quanto é 2³?", "8", "Potência significa multiplicar a base por ela mesma três vezes: 2 × 2 × 2 = 8."],
      ["Uma razão de 2 para 3 pode ser escrita como:", "2/3", "Uma razão compara duas quantidades."],
      ["Qual é a soma dos ângulos internos de um triângulo plano?", "180°", "A soma dos três ângulos internos de um triângulo euclidiano é 180°."],
      ["Quanto é √144?", "12", "A raiz quadrada principal de 144 é 12, pois 12 × 12 = 144."],
      ["Se um produto de R$ 80 recebe desconto de 10%, qual é o preço final?", "R$ 72", "10% de 80 são 8 reais. Portanto, 80 − 8 = 72."],
      ["Qual é a probabilidade de sair cara em uma moeda equilibrada?", "1/2", "Há dois resultados igualmente prováveis: cara e coroa."]
    ]
  },
  "História": {
    nivel: "ambos",
    resumo: "Estude sociedades antigas, Idade Média, colonização, escravidão, independências, Brasil República e história contemporânea.",
    itens: [
      ["Em que ano foi proclamada a Independência do Brasil?", "1822", "A Independência foi proclamada em 7 de setembro de 1822."],
      ["Qual atividade econômica marcou o início da colonização portuguesa no Brasil?", "Extração do pau-brasil", "A exploração do pau-brasil foi uma das primeiras atividades econômicas coloniais."],
      ["O que foi a escravidão atlântica?", "O tráfico e a exploração forçada de pessoas africanas e seus descendentes", "Milhões de africanos foram submetidos à escravização e ao deslocamento forçado."],
      ["Em que ano foi proclamada a República brasileira?", "1889", "A República foi proclamada em 15 de novembro de 1889."],
      ["Qual era uma característica do feudalismo europeu?", "Relações de dependência e poder ligadas à terra", "A sociedade feudal envolvia relações entre senhores, camponeses e outros grupos."],
      ["O que foi a Revolução Industrial?", "A transformação da produção com máquinas e fábricas", "O processo começou na Inglaterra no século XVIII e alterou o trabalho e a economia."],
      ["Qual foi uma consequência da expansão marítima europeia?", "A ampliação das conexões comerciais e da colonização", "As viagens conectaram regiões, mas também impulsionaram conquistas e exploração."],
      ["O que caracteriza uma fonte histórica?", "Um vestígio usado para investigar o passado", "Documentos, objetos, imagens e relatos podem servir como fontes históricas."],
      ["Qual foi uma característica da ditadura militar brasileira iniciada em 1964?", "Restrição de direitos políticos e liberdades", "O regime foi marcado por censura, repressão e limitações à participação política."],
      ["O que foi o movimento abolicionista brasileiro?", "A mobilização pelo fim legal da escravidão", "A luta abolicionista envolveu pessoas escravizadas, intelectuais, associações e outros grupos."]
    ]
  },
  "Geografia": {
    nivel: "ambos",
    resumo: "Explore cartografia, clima, relevo, população, urbanização, economia, globalização e problemas ambientais.",
    itens: [
      ["O que representa a escala de um mapa?", "A relação entre distâncias no mapa e no terreno", "A escala permite comparar a distância representada com a distância real."],
      ["Qual é o maior bioma brasileiro em extensão territorial?", "Amazônia", "A Amazônia é o maior bioma do Brasil em área."],
      ["O que é urbanização?", "O crescimento da população que vive em cidades", "A urbanização envolve aumento da população urbana e transformações no espaço."],
      ["O que é latitude?", "A distância angular ao norte ou ao sul do Equador", "A latitude é medida em graus a partir da linha do Equador."],
      ["Qual é uma fonte de energia renovável?", "Energia solar", "A energia solar vem da radiação do Sol e é renovável em escala humana."],
      ["O que é migração?", "O deslocamento de pessoas entre lugares para viver", "A migração pode ocorrer dentro de um país ou entre países."],
      ["O que caracteriza o clima?", "Padrões atmosféricos observados ao longo de muitos anos", "O clima é diferente do tempo atmosférico de um dia específico."],
      ["O que é globalização?", "A intensificação das conexões entre diferentes partes do mundo", "Fluxos de mercadorias, informações, capitais e pessoas conectam territórios."],
      ["Qual é um exemplo de impacto ambiental?", "Desmatamento de florestas", "O desmatamento pode afetar habitats, solos, água e clima."],
      ["O que são coordenadas geográficas?", "Referências de latitude e longitude", "Elas ajudam a localizar pontos na superfície terrestre."]
    ]
  },
  "Ciências": {
    nivel: "fundamental",
    resumo: "Revise corpo humano, ecossistemas, matéria, energia, saúde, astronomia e meio ambiente.",
    itens: [
      ["Qual órgão bombeia o sangue pelo corpo?", "Coração", "O coração impulsiona o sangue pelo sistema circulatório."],
      ["Qual gás as plantas utilizam na fotossíntese?", "Dióxido de carbono", "Na fotossíntese, as plantas usam luz, água e dióxido de carbono para produzir açúcares."],
      ["Qual é a principal estrela do Sistema Solar?", "Sol", "A Terra e os demais planetas do Sistema Solar orbitam o Sol."],
      ["Qual é a função dos decompositores em um ecossistema?", "Decompor matéria orgânica e reciclar nutrientes", "Fungos e muitas bactérias devolvem nutrientes ao ambiente."],
      ["Qual mudança de estado transforma líquido em gás?", "Vaporização", "A vaporização inclui processos como evaporação e ebulição."],
      ["Por que é importante lavar as mãos?", "Para reduzir a transmissão de microrganismos", "A higiene das mãos ajuda a interromper rotas de transmissão de agentes infecciosos."],
      ["Qual sistema do corpo transporta oxigênio pelo sangue?", "Sistema circulatório", "O sangue transporta oxigênio dos pulmões para os tecidos."],
      ["O que é uma cadeia alimentar?", "Uma sequência de transferência de matéria e energia entre organismos", "Cada organismo pode servir de alimento para outro na cadeia."],
      ["Qual é a função principal das raízes em muitas plantas?", "Absorver água e sais minerais e ajudar na fixação", "As raízes absorvem recursos do solo e sustentam a planta."],
      ["O que é reciclagem?", "Transformar materiais descartados para que sejam reaproveitados", "A reciclagem reduz a necessidade de matéria-prima nova e pode diminuir resíduos."]
    ]
  },
  "Biologia": {
    nivel: "medio",
    resumo: "Estude células, genética, evolução, ecologia, fisiologia, microbiologia e diversidade dos seres vivos.",
    itens: [
      ["Qual organela realiza grande parte da respiração celular?", "Mitocôndria", "A mitocôndria participa da produção de ATP por respiração celular."],
      ["Qual molécula armazena a informação genética?", "DNA", "O DNA contém instruções hereditárias usadas no funcionamento e desenvolvimento dos organismos."],
      ["O que é seleção natural?", "Processo em que características hereditárias influenciam sobrevivência e reprodução", "Características que favorecem o sucesso reprodutivo podem se tornar mais comuns ao longo das gerações."],
      ["Qual é a função dos ribossomos?", "Produzir proteínas", "Os ribossomos traduzem informações do RNA mensageiro em cadeias de aminoácidos."],
      ["O que é um ecossistema?", "A interação entre organismos e fatores não vivos de uma área", "Ecossistemas incluem seres vivos, água, solo, luz e suas interações."],
      ["Qual divisão celular forma gametas em muitos animais?", "Meiose", "A meiose reduz pela metade o número de cromossomos e contribui para a variabilidade genética."],
      ["O que é homeostase?", "Manutenção de condições internas relativamente estáveis", "O organismo regula variáveis como temperatura, água e glicose."],
      ["Qual é o papel dos produtores em uma cadeia alimentar?", "Converter energia em matéria orgânica", "Plantas e outros produtores formam matéria orgânica, frequentemente usando energia luminosa."],
      ["O que são anticorpos?", "Proteínas do sistema imune que reconhecem antígenos", "Anticorpos podem se ligar especificamente a estruturas reconhecidas como estranhas."],
      ["O que significa biodiversidade?", "Variedade de genes, espécies e ecossistemas", "A biodiversidade pode ser analisada em diferentes níveis biológicos."]
    ]
  },
  "Física": {
    nivel: "medio",
    resumo: "Pratique movimento, forças, energia, calor, ondas, eletricidade, óptica e interpretação de gráficos.",
    itens: [
      ["Qual é a unidade de força no Sistema Internacional?", "Newton", "O newton, símbolo N, é a unidade de força."],
      ["Qual expressão representa a velocidade média?", "Distância dividida pelo tempo", "Velocidade média escalar = distância percorrida ÷ tempo gasto."],
      ["Qual é a unidade de energia no Sistema Internacional?", "Joule", "O joule, símbolo J, é a unidade de energia e trabalho."],
      ["O que acontece com a corrente em um circuito simples se a resistência aumenta e a tensão permanece constante?", "A corrente diminui", "Pela lei de Ohm, I = V/R. Com tensão fixa, maior resistência significa menor corrente."],
      ["Qual forma de transferência de calor pode ocorrer no vácuo?", "Radiação", "A radiação transfere energia por ondas eletromagnéticas e não exige meio material."],
      ["O que mede a frequência de uma onda?", "O número de oscilações por segundo", "A frequência é medida em hertz (Hz)."],
      ["Qual é a aceleração aproximada da gravidade perto da superfície terrestre?", "9,8 m/s²", "Esse é um valor aproximado, que pode variar ligeiramente conforme o local."],
      ["O que é energia cinética?", "Energia associada ao movimento", "Para um corpo de massa m e velocidade v, Ec = mv²/2."],
      ["O que ocorre com a luz ao passar do ar para a água em direção oblíqua?", "Ela sofre refração", "A mudança de meio altera a velocidade da luz e pode mudar sua direção."],
      ["Qual é a unidade de potência?", "Watt", "O watt, símbolo W, corresponde a um joule por segundo."]
    ]
  },
  "Química": {
    nivel: "medio",
    resumo: "Estude átomos, tabela periódica, ligações, reações, soluções, estequiometria, ácidos e bases.",
    itens: [
      ["Qual partícula possui carga elétrica negativa?", "Elétron", "Elétrons têm carga negativa; prótons têm carga positiva e nêutrons não têm carga elétrica."],
      ["Qual é a fórmula química da água?", "H₂O", "Cada molécula de água possui dois átomos de hidrogênio e um de oxigênio."],
      ["O que indica o número atômico?", "A quantidade de prótons no núcleo", "O número de prótons define qual elemento químico é o átomo."],
      ["O que caracteriza uma ligação iônica?", "A atração entre íons de cargas opostas", "Ligações iônicas resultam de atrações eletrostáticas entre íons."],
      ["Uma solução com pH menor que 7 é geralmente:", "Ácida", "Em condições usuais, pH menor que 7 indica caráter ácido."],
      ["O que é uma reação química?", "Uma transformação que forma substâncias diferentes", "Nas reações, átomos são reorganizados e novas substâncias podem se formar."],
      ["Qual gás é liberado na fotossíntese?", "Oxigênio", "Na fotossíntese oxigênica, ocorre liberação de oxigênio a partir da água."],
      ["O que é massa molar?", "A massa de um mol de uma substância", "A massa molar costuma ser expressa em gramas por mol (g/mol)."],
      ["O que é um catalisador?", "Uma substância que aumenta a velocidade de uma reação sem ser consumida globalmente", "Catalisadores oferecem um caminho reacional de menor energia de ativação."],
      ["Qual é a função de balancear uma equação química?", "Garantir a conservação do número de átomos de cada elemento", "O balanceamento respeita a conservação dos átomos nas reações químicas."]
    ]
  },
  "Inglês": {
    nivel: "ambos",
    resumo: "Pratique vocabulário, leitura, pronomes, tempos verbais, conectivos e compreensão de textos.",
    itens: [
      ['O que significa "book"?', "Livro", 'A palavra inglesa "book" significa "livro".'],
      ['Qual é o passado de "go"?', "Went", '"Go" é um verbo irregular; sua forma no passado simples é "went".'],
      ['O que significa "although"?', "Embora", '"Although" introduz uma ideia de contraste ou concessão.'],
      ['Complete: "She ___ studying now."', "is", 'No presente contínuo, usa-se "is" com "she": she is studying.'],
      ['O que significa "environment"?', "Meio ambiente", '"Environment" pode se referir ao ambiente natural ou às condições ao redor.'],
      ['Qual pronome pode substituir "Maria and I"?', "We", '"We" significa "nós" e inclui quem fala e outra pessoa.'],
      ['O que significa "usually"?', "Geralmente", '"Usually" é um advérbio de frequência.'],
      ['Complete: "There ___ many students."', "are", 'Usa-se "there are" com substantivos plurais.'],
      ['O que significa "careful"?', "Cuidadoso", '"Careful" descreve alguém que age com atenção.'],
      ['Qual é o comparativo de "tall"?', "Taller", 'Em geral, adjetivos curtos como "tall" formam o comparativo com "-er".']
    ]
  },
  "Filosofia": {
    nivel: "medio",
    resumo: "Explore ética, conhecimento, lógica, política, liberdade, justiça e os principais pensadores filosóficos.",
    itens: [
      ["Qual é uma atitude característica da filosofia?", "Questionar criticamente ideias e pressupostos", "A filosofia examina argumentos, conceitos e fundamentos das crenças."],
      ["O que é ética?", "Reflexão sobre ações, valores e princípios morais", "A ética investiga questões sobre o agir e o que pode ser considerado justo ou correto."],
      ["O que é um argumento?", "Um conjunto de razões usado para sustentar uma conclusão", "Argumentos relacionam premissas a uma conclusão."],
      ["Qual pensador é associado ao método de diálogo conhecido como maiêutica?", "Sócrates", "A maiêutica socrática utiliza perguntas para examinar ideias e buscar clareza."],
      ["O que é ceticismo filosófico?", "Uma postura de investigação e questionamento das pretensões de conhecimento", "Diferentes formas de ceticismo examinam os limites e a justificação do conhecimento."],
      ["O que significa liberdade política?", "Possibilidade de participar da vida pública e exercer direitos", "A liberdade política envolve direitos e condições para participação na sociedade."],
      ["O que é falácia?", "Um raciocínio enganoso ou inválido", "Uma falácia pode parecer convincente sem sustentar adequadamente sua conclusão."],
      ["O que é justiça distributiva?", "Reflexão sobre a distribuição de benefícios, recursos e encargos", "A justiça distributiva debate critérios para distribuir bens e oportunidades."],
      ["O que é empirismo?", "A corrente que destaca a experiência como fonte do conhecimento", "Pensadores empiristas atribuem papel central à experiência na formação das ideias."],
      ["O que é pensamento crítico?", "Avaliar evidências e argumentos antes de aceitar uma conclusão", "Pensamento crítico exige examinar fontes, coerência e possíveis vieses."]
    ]
  },
  "Sociologia": {
    nivel: "medio",
    resumo: "Estude cultura, socialização, desigualdade, instituições, trabalho, poder, cidadania e movimentos sociais.",
    itens: [
      ["O que é socialização?", "O processo de aprender normas, valores e práticas sociais", "A socialização ocorre em diferentes espaços, como família, escola e grupos sociais."],
      ["O que são instituições sociais?", "Estruturas organizadas que regulam aspectos da vida coletiva", "Família, escola, Estado e sistemas religiosos são exemplos estudados pela sociologia."],
      ["O que é desigualdade social?", "Distribuição desigual de recursos, oportunidades ou poder", "A desigualdade pode envolver renda, educação, saúde, moradia e participação."],
      ["O que é cultura na sociologia?", "Conjunto aprendido de significados, práticas e símbolos", "A cultura é transmitida e transformada nas relações sociais."],
      ["O que caracteriza a cidadania?", "Direitos, deveres e participação na sociedade", "A cidadania envolve dimensões civis, políticas e sociais."],
      ["O que é mobilidade social?", "Mudança de posição social de pessoas ou grupos", "A mobilidade pode ocorrer entre gerações ou ao longo da vida."],
      ["O que é preconceito?", "Julgamento prévio baseado em generalizações sobre pessoas ou grupos", "O preconceito pode contribuir para práticas discriminatórias."],
      ["O que é divisão social do trabalho?", "Distribuição de tarefas e funções entre pessoas e grupos", "A especialização do trabalho organiza a produção e as relações sociais."],
      ["O que é um movimento social?", "Ação coletiva organizada em torno de demandas ou mudanças", "Movimentos sociais podem reivindicar direitos, reconhecimento ou transformações políticas."],
      ["O que é pesquisa social?", "Investigação sistemática das relações e fenômenos sociais", "Pode utilizar entrevistas, questionários, observação e análise documental."]
    ]
  },
  "Literatura": {
    nivel: "ambos",
    resumo: "Estude gêneros literários, narrador, personagens, poesia, escolas literárias e interpretação de obras.",
    itens: [
      ["Quem conta os acontecimentos de uma narrativa?", "Narrador", "O narrador é a voz que apresenta a história; não é necessariamente o autor."],
      ["O que é uma metáfora em um texto literário?", "Uma associação de sentidos sem comparação explícita", "A metáfora cria significado ao aproximar elementos distintos."],
      ["O que caracteriza um soneto tradicional?", "Poema de 14 versos", "O soneto tradicional costuma apresentar 14 versos, organizados em estrofes."],
      ["Qual é uma característica do Romantismo?", "Valorização da subjetividade e da expressão dos sentimentos", "O Romantismo valorizou emoção, individualidade e, em muitos contextos, nacionalismo."],
      ["O que é o eu lírico?", "A voz que se expressa no p
