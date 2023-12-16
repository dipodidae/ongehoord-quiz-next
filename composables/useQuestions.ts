export default function useQuestions(): {
  questions: Ref<Question[]>
  firstQuestion: ComputedRef<Question>
} {
  const questions = ref<Question[]>([])

  async function setQuestions() {
    const data = await queryContent<Question>('/questions').find()
    questions.value = data
  }

  const firstQuestion = computed<Question>(() => questions.value[0])

  setQuestions()

  return { questions, firstQuestion }
}
