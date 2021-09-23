export interface ITask {
  task: string,
  deadline: number
}

export interface IRoute {
  path: string,
  name: string,
  exact: boolean,
  component: any,
  props?: any,
  isPrivate: boolean
}

export interface IPage {
  name: string
}