type ProductIdClient = {
  id: number
  nome: string
  percentual: number
  quantidade: number
}[]

type ProductIdSummary = {
  media120Dias: number
  nome: string
  percentualUltimos30Dias: number
  ultimos120Dias: number
  ultimos30Dias: number
  ultimos60Dias: number
  ultimos90Dias: number
}
