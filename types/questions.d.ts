type QuestionKey = 'a' | 'b' | 'c'

interface QuestionAnswer {
  key: QuestionKey
  text: string
}

interface Question extends ParsedContent {
  image: string
  title: string
  question: string
  answers: QuestionAnswer[]
  correctAnswer: QuestionKey
  feedback: string
}
