type Duck = {
  colors: string
  feathers: number
}

type DuckProps = keyof Duck
let a: DuckProps = 'colors'
let b: DuckProps = 'feathers'
//error
//let c: DuckProps = 'foo'

type ColorType = Duck['colors']
let d: ColorType = 'red'
//error
//let e: ColorType = 12

type DuckValues = Duck[DuckProps]
let f: DuckValues = 'foo'
let g: DuckValues = 1
//error
//let h: DuckValues = {}
