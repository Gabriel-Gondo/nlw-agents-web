export type GetRooomQuestionsResponse = {
  id: string
  question: string
  answer: string | null
  createdAt: string
  isGeneratingAnswer?: boolean
}[]
