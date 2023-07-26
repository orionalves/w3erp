type ProductCustomerClient = {
  id: number
  nome: string
  percentual: number
  quantidade: number
}[]

type ProductCustomerSummary = {
  media120Dias: number
  nome: string
  percentualUltimos30Dias: number
  ultimos120Dias: number
  ultimos30Dias: number
  ultimos60Dias: number
  ultimos90Dias: number
}
