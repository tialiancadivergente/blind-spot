export interface QuestionOption {
  value: string;
  label: string;
  weight: number;
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
  description?: string;
}

export const questionsOpc: Question[] = [
  {
    id: 1,
    question: "Qual é o seu gênero?",
    options: [
      { value: "masculino", label: "Masculino", weight: 0 },
      { value: "feminino", label: "Feminino", weight: 0 },
    ],
  },
  {
    id: 2,
    question: "Qual é a sua idade?",
    description: "(Usamos a sua idade para personalizar os dados do seu diagnóstico)",
    options: [
      { value: "18-24", label: "Entre 18 e 24", weight: 0 },
      { value: "25-34", label: "Entre 25 e 34", weight: 0 },
      { value: "36-44", label: "Entre 35 e 44", weight: 0 },
      { value: "46-54", label: "Entre 45 e 54", weight: 0 },
      { value: "55+", label: "55 ou mais", weight: 0 },
    ],
  },
  {
    id: 3,
    question: "Com que frequência você se sente sozinho(a)/travado(a) e com baixos resultados?",
    options: [
      { value: "nunca", label: "Nunca", weight: 5 },
      { value: "raramente", label: "Raramente", weight: 4 },
      { value: "as-vezes", label: "Às vezes", weight: 3 },
      { value: "frequentemente", label: "Frequentemente", weight: 2 },
      { value: "sempre", label: "Sempre", weight: 1 },
    ],
  },
  {
    id: 4,
    question: "Tenho conhecimento e trabalho bastante, mas ganho menos do que eu mereço",
    options: [
      { value: "discordo-totalmente", label: "Discordo totalmente", weight: 5 },
      { value: "discordo-parcialmente", label: "Discordo parcialmente", weight: 4 },
      { value: "neutro", label: "Neutro", weight: 3 },
      { value: "concordo-parcialmente", label: "Concordo parcialmente", weight: 2 },
      { value: "concordo-totalmente", label: "Concordo totalmente", weight: 1 },
    ],
  },
  {
    id: 5,
    question: "Sinto que traumas e acontecimentos da minha infância/adolescência afetam meus comportamentos e resultados:",
    options: [
      { value: "discordo-totalmente", label: "Discordo totalmente", weight: 5 },
      { value: "discordo-parcialmente", label: "Discordo parcialmente", weight: 4 },
      { value: "neutro", label: "Neutro", weight: 3 },
      { value: "concordo-parcialmente", label: "Concordo parcialmente", weight: 2 },
      { value: "concordo-totalmente", label: "Concordo totalmente", weight: 1 },
    ],
  },
  {
    id: 6,
    question: "Vejo pessoas que estudaram menos ou trabalham menos do que eu tendo melhores resultados financeiros:",
    options: [
      { value: "discordo-totalmente", label: "Discordo totalmente", weight: 5 },
      { value: "discordo-parcialmente", label: "Discordo parcialmente", weight: 4 },
      { value: "neutro", label: "Neutro", weight: 3 },
      { value: "concordo-parcialmente", label: "Concordo parcialmente", weight: 2 },
      { value: "concordo-totalmente", label: "Concordo totalmente", weight: 1 },
    ],
  },
  {
    id: 7,
    question: "Tenho dificuldade em dizer não para as pessoas ou expressar qual é a minha vontade",
    options: [
      { value: "discordo-totalmente", label: "Discordo totalmente", weight: 5 },
      { value: "discordo-parcialmente", label: "Discordo parcialmente", weight: 4 },
      { value: "neutro", label: "Neutro", weight: 3 },
      { value: "concordo-parcialmente", label: "Concordo parcialmente", weight: 2 },
      { value: "concordo-totalmente", label: "Concordo totalmente", weight: 1 },
    ],
  },
  {
    id: 8,
    question: "Nos momentos difíceis, gostaria que amigos/familiares me ajudassem a resolver problemas:",
    options: [
      { value: "discordo-totalmente", label: "Discordo totalmente", weight: 5 },
      { value: "discordo-parcialmente", label: "Discordo parcialmente", weight: 4 },
      { value: "neutro", label: "Neutro", weight: 3 },
      { value: "concordo-parcialmente", label: "Concordo parcialmente", weight: 2 },
      { value: "concordo-totalmente", label: "Concordo totalmente", weight: 1 },
    ],
  },
  {
    id: 9,
    question: "Sempre que estou prestes a ter uma conquista ou avançar na vida, as coisas parecem dar errado",
    description: "(Algum acidente acontece, surge um imprevisto, contas para pagar, coisas estragam)",
    options: [
      { value: "discordo-totalmente", label: "Discordo totalmente", weight: 5 },
      { value: "discordo-parcialmente", label: "Discordo parcialmente", weight: 4 },
      { value: "neutro", label: "Neutro", weight: 3 },
      { value: "concordo-parcialmente", label: "Concordo parcialmente", weight: 2 },
      { value: "concordo-totalmente", label: "Concordo totalmente", weight: 1 },
    ],
  },
  {
    id: 10,
    question: "Costumo priorizar as necessidades dos outros e sacrificar as minhas próprias",
    options: [
      { value: "discordo-totalmente", label: "Discordo totalmente", weight: 5 },
      { value: "discordo-parcialmente", label: "Discordo parcialmente", weight: 4 },
      { value: "neutro", label: "Neutro", weight: 3 },
      { value: "concordo-parcialmente", label: "Concordo parcialmente", weight: 2 },
      { value: "concordo-totalmente", label: "Concordo totalmente", weight: 1 },
    ],
  },
  {
    id: 11,
    question: "Se tivesse que escolher uma única área da sua vida para mudar com urgência, qual seria? ",
    options: [
      { value: "financas-e-carreira", label: "Finanças e carreira", weight: 0 },
      { value: "relacionamentos", label: "Relacionamentos", weight: 0 },
      { value: "saude", label: "Saúde", weight: 0 },
    ],
  },
  {
    id: 12,
    question: "Quais dos itens a seguir fez com que você sentisse necessidade de mudar a sua vida",
    options: [
      { value: "quero-ganhar-mais", label: "Querer ganhar mais", weight: 0 },
      { value: "quero-melhorar-meu-relacionamento-amoroso", label: "Melhorar seu relacionamento amoroso", weight: 0 },
      { value: "quero-oferecer-uma-vida-melhor-para-a-minha-familia", label: "Oferecer uma vida melhor para a sua família", weight: 0 },
      { value: "quero-resolver-problemas-de-saude", label: "Resolver problemas de saúde", weight: 0 },
      { value: "quero-acabar-com-dificuldade-financeiras", label: "Acabar com dificuldade financeiras", weight: 0 },
      { value: "quero-se-desenvolver-como-pessoa", label: "Se desenvolver como pessoa", weight: 0 },
    ],
  },
  {
    id: 13,
    question: "Você já buscou algum tipo de ajuda ou suporte para lidar com seus desafios emocionais?",
    description: "(terapia, coaching, grupos de apoio, etc)",
    options: [
      { value: "sim", label: "Sim", weight: 0 },
      { value: "nao", label: "Não", weight: 0 },
    ],
  },
  {
    id: 14,
    question: "O método utilizado foi eficaz?",
    options: [
      { value: "sim", label: "Sim", weight: 0 },
      { value: "parcialmente", label: "Parcialmente", weight: 0 },
      { value: "nao", label: "Não", weight: 0 },
    ],
  },
  {
    id: 15,
    question: "Você já ouviu falar sobre Teoria da Permissão?",
    options: [
      { value: "sim-ja-vi-conteudos-sobre-o-tema", label: "Sim, já vi conteúdos sobre o tema", weight: 0 },
      { value: "nao-tenho-certeza", label: "Não tenho certeza", weight: 0 },
      { value: "nao-nunca-ouvi-falar-sobre-isso", label: "Não, nunca ouvi falar sobre isso", weight: 0 },
    ],
  },
  {
    id: 16,
    question: "Você acredita que a Dependência Emocional possa estar bloqueando a sua Permissão para continuar crescendo?",
    options: [
      { value: "sim-vejo-isso-claramente-na-minha-vida", label: "Sim, vejo isso claramente na minha vida", weight: 0 },
      { value: "talvez-preciso-refletir-mais", label: "Talvez, preciso refletir mais", weight: 0 },
      { value: "nao-vejo-relacao-minha-dificuldade-e-outra", label: "Não vejo relação, minha dificuldade é outra", weight: 0 },
      { value: "nao-sei-o-que-e-dependencia-emocional-ou-permissao", label: "Não sei o que é Dependência Emocional ou Permissão", weight: 0 },
    ],
  },
  {
    id: 17,
    question: "Que tipo de resultado você procura?",
    options: [
      { value: "transformacoes-imediatas-sem-conversas-de-autoconhecimento", label: "Transformações imediatas, sem conversas de autoconhecimento", weight: 0 },
      { value: "processo-gradual-estruturado-profundo-e-definitivo-de-dentro-para-fora", label: "Processo gradual, estruturado, profundo e definitivo (de dentro para fora)", weight: 0 },
      { value: "combinacao-de-ambos-algum-impacto-rapido-e-jornada-de-longo-prazo", label: "Combinação de ambos: algum impacto rápido e jornada de longo prazo", weight: 0 },
    ],
  },
];