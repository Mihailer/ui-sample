type T = string
type O = object

export const tabs: object = {
    '1': 'Сервис',
    // '2': 'Продажи',
    '2': 'Склад',
    '3': 'Аналитика',
}



export const selectFieldItem: Array<T> = [
    'Вариант 1',
    'Вариант 2',
    'Вариант 3',
    'Вариант 4'
]

export const ststusFieldItem: Array<T> = [
  'Все заказы',
  'Новый',
  'Диагностика',
  'Ждет запчасти',
  'В работе',
  'Ждет клиента',
  'Оплачен',
  'Закрыт'
]

export const tableHeaderData: Array<T> = [
    '№',
    'Имя',
    'Телефон',
    'Причина обращения',
    'Тип устройства',
    'Производитель',
    'Модель',
    'Статус',
]

export const tableData: Array<O> = [
  { 
      number: '1', 
      name: 'Mihail', 
      tel: '89785654343', 
      reason: 'AKB', 
      deviceType: 'Smart',
      manufacturer: 'Xiaomi',
      model: 'Redmi 9',
      status: 'New'
  },
  { 
      number: '2', 
      name: 'Vlad', 
      tel: '89785654343', 
      reason: 'DM', 
      deviceType: 'Smart',
      manufacturer: 'Xiaomi',
      model: 'Redmi Note 7',
      status: 'New'
  },
  { 
      number: '3', 
      name: 'Peter', 
      tel: '89785654343', 
      reason: 'DM', 
      deviceType: 'Smart',
      manufacturer: 'Xiaomi',
      model: 'Redmi Note 7',
      status: 'New'
  },
  { 
      number: '4', 
      name: 'Mihail', 
      tel: '89785654343', 
      reason: 'AKB', 
      deviceType: 'Smart',
      manufacturer: 'Xiaomi',
      model: 'Redmi 9',
      status: 'New'
  },
  { 
      number: '5', 
      name: 'Vlad', 
      tel: '89785654343', 
      reason: 'DM', 
      deviceType: 'Smart',
      manufacturer: 'Xiaomi',
      model: 'Redmi Note 7',
      status: 'New'
  },
  { 
      number: '6', 
      name: 'Peter', 
      tel: '89785654343', 
      reason: 'DM', 
      deviceType: 'Smart',
      manufacturer: 'Xiaomi',
      model: 'Redmi Note 7',
      status: 'New'
  },
]


