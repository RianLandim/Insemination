import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export const formatFullDate = (date: Date | number) => {
  return format(date, 'P', { locale: ptBr })
}
