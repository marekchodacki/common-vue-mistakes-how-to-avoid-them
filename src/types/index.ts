interface Lesson {
  id: number
  key: string
  subject: string
  url: string
  slug: string
}

export interface Course {
  title: string
  lessons: Lesson[]
}
