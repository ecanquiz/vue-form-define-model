export default interface Task {
    frequency: string
    name: string
    description: string
    situation: number
    supervision: {
      reviewed: boolean,
      approved: boolean
    }
  }
  