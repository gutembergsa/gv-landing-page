export const BASE_URL = 'http://localhost:3000'
export const INSTALACAO_API = '/api/instalacao'
export const INVOICE_API = '/api/invoice'

export const STOCK_HISTORY_API = '/stocks/history'
export const STOCK_VALUES_HISTORY_API = '/stock-values/stock'

const SERVER_IP = '192.168.15.7'
export const SERVER_WEBSOCKET_URL = `http://${SERVER_IP}:3031`
export const DATABASE_WEBSOCKET_URL = `http://${SERVER_IP}:3031/database`

export type Invoice = {
  numeroCliente: string
  InstalacaoId: string
  mesReferencia: string
  energiaEletricaKWh: number
  energiaEletricaValor: number
  energiaSCEEKWh: number
  energiaSCEEValor: number
  energiaCompensadaKWh: number
  energiaCompensadaValor: number
  contribuIlumPublica: number
}

export type Instalacao = {
  nomeInstalacao: string
  numeroInstalacao: string
  distribuidora: string
  consumidor: string
}

export type InstalacaoAcumulado = {
  numeroInstalacao?: string
  mesReferencia?: string
  consumoEnergiaEletricaKilowattHora: number
  energiaCompensadaKilowattHora: number
  valorTotalSemGeracaoDistribuida: number
  economiaGeracaoDistribuida: number
}

export type ChartDataset = {
  data: {
    y: number
    x: number
  }[]
  borderColor: string
  backgroundColor: string
  fill: boolean
}[]

export type StockHistory = {
  StockId: number
  UserId: number
  condition: string
  createdAt: string
  id: number
  lastValue: string
  updatedAt: string
  value: string
  total?: number
}

export type Stock = {
  id: number
  name: string
  quantity: string
  version: number
  createdAt: string
  updatedAt: string
  history: StockHistory[]
}

export type StockValuesHistory = {
  rows: StockHistory[]
  count: number
}

export type ChartData = { x: string | undefined; y: string | number }
export type SelectData = { value: string | number; label: string | number }

export const APP_MAIN_COLOR = '#87bf74'
export const APP_SECOND_COLOR = '#edffd2'

type Media = { track?: MediaProvider }
export const media: Media = {}

export const limitPerPage = 10
