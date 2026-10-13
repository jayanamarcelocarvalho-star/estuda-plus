(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const STORE_KEY = 'estudaPlus_v1';
  const FUND = 'Ensino Fundamental', MED = 'Ensino Médio';
  const subjectCatalog = {
    [FUND]: [
      ['Língua Portuguesa','📚','Leitura, gramática e interpretação'],['Matemática','➗','Números, formas e problemas'],['Ciências','🔬','Vida, matéria e ambiente'],['História','🏛️','Povos, culturas e transformações'],['Geografia','🌎','Espaço, paisagem e sociedade'],['Inglês','🔤','Vocabulário e compreensão'],['Arte','🎨','Expressões artísticas e cultura'],['Educação Física','⚽','Movimento, saúde e esporte'],['Ensino Religioso','🕊️','Ética, respeito e diversidade']
    ],
    [MED]: [
      ['Língua Portuguesa','📚','Linguagem, leitura e análise'],['Literatura','📖','Escolas literárias e interpretação'],['Redação','✍️','Argumentação e estrutura textual'],['Matemática','➗','Funções, geometria e estatística'],['Biologia','🧬','Organismos, ecologia e genética'],['Física','⚛️','Movimento, energia e fenômenos'],['Química','🧪','Matéria, reações e cálculos'],['História','🏛️','Processos históricos e sociedade'],['Geografia','🌎','Território, economia e ambiente'],['Filosofia','💭','Pensamento crítico e ética'],['Sociologia','👥','Sociedade, cultura e desigualdade'],['Inglês','🔤','Leitura e estruturas da língua'],['Artes','🎭','Arte, estética e contexto'],['Educação Física','⚽','Corpo, saúde e práticas corporais']
    ]
  };
  const questionBank = {
    'Matemática': [
      q('Quanto é 25% de 80?',['10','15','20','25'],2,'25% equivale a 25/100 = 1/4. Um quarto de 80 é 20.','Fácil','Porcentagem'),
      q('Um caderno custa R$ 12. Quanto custam 3 cadernos iguais?',['R$ 24','R$ 30','R$ 36','R$ 40'],2,'Multiplicamos o preço unitário
