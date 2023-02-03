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

export const statusFieldItem: Array<T> = [
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
  { 
    number: '7', 
    name: 'Mihail', 
    tel: '89785654343', 
    reason: 'AKB', 
    deviceType: 'Smart',
    manufacturer: 'Xiaomi',
    model: 'Redmi 9',
    status: 'New'
},
{ 
    number: '8', 
    name: 'Vlad', 
    tel: '89785654343', 
    reason: 'DM', 
    deviceType: 'Smart',
    manufacturer: 'Xiaomi',
    model: 'Redmi Note 7',
    status: 'New'
},
{ 
    number: '9', 
    name: 'Peter', 
    tel: '89785654343', 
    reason: 'DM', 
    deviceType: 'Smart',
    manufacturer: 'Xiaomi',
    model: 'Redmi Note 7',
    status: 'New'
},
{ 
    number: '10', 
    name: 'Mihail', 
    tel: '89785654343', 
    reason: 'AKB', 
    deviceType: 'Smart',
    manufacturer: 'Xiaomi',
    model: 'Redmi 9',
    status: 'New'
},
{ 
    number: '11', 
    name: 'Vlad', 
    tel: '89785654343', 
    reason: 'DM', 
    deviceType: 'Smart',
    manufacturer: 'Xiaomi',
    model: 'Redmi Note 7',
    status: 'New'
},
{ 
    number: '12', 
    name: 'Peter', 
    tel: '89785654343', 
    reason: 'DM', 
    deviceType: 'Smart',
    manufacturer: 'Xiaomi',
    model: 'Redmi Note 7',
    status: 'New'
    },
    { 
        number: '13', 
        name: 'Mihail', 
        tel: '89785654343', 
        reason: 'AKB', 
        deviceType: 'Smart',
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        status: 'New'
    },
    { 
        number: '14', 
        name: 'Vlad', 
        tel: '89785654343', 
        reason: 'DM', 
        deviceType: 'Smart',
        manufacturer: 'Xiaomi',
        model: 'Redmi Note 7',
        status: 'New'
    },
    { 
        number: '15', 
        name: 'Peter', 
        tel: '89785654343', 
        reason: 'DM', 
        deviceType: 'Smart',
        manufacturer: 'Xiaomi',
        model: 'Redmi Note 7',
        status: 'New'
    },
    { 
        number: '16', 
        name: 'Mihail', 
        tel: '89785654343', 
        reason: 'AKB', 
        deviceType: 'Smart',
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        status: 'New'
    },
    { 
        number: '17', 
        name: 'Vlad', 
        tel: '89785654343', 
        reason: 'DM', 
        deviceType: 'Smart',
        manufacturer: 'Xiaomi',
        model: 'Redmi Note 7',
        status: 'New'
    },
    { 
        number: '18', 
        name: 'Peter', 
        tel: '89785654343', 
        reason: 'DM', 
        deviceType: 'Smart',
        manufacturer: 'Xiaomi',
        model: 'Redmi Note 7',
        status: 'New'
    },
].reverse()

export const tableWarehouseHeaderData: Array<T> = [
    '№',
    'Тип устройства',
    'Название запчасти',
    'Производитель',
    'Модель',
    'Количество на складе',
    'Стоимость запчасти'
]

export const tableWarehouseData: Array<O> = [
    { 
        number: '1', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '2', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '3', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '4', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '5', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '6', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '7', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '8', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '9', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '10', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '11', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '12', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '13', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '14', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '15', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '16', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '17', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '18', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '19', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
    { 
        number: '20', 
        deviceType: 'Смартфон', 
        partName: 'Дисплейный модуль',  
        manufacturer: 'Xiaomi',
        model: 'Redmi 9',
        quantity: 4,
        partCost: 3200
    },
].reverse()


export const headerControlPanelService: object = {
    cpAddButtonName: 'Новый заказ',
    cpSearchPlaceholder: 'Найти заказ',
    cpOptionsData: [
        'Все заказы',
        'Новый',
        'Диагностика',
        'Ждет запчасть',
        'В работе',
        'Ждет клиента',
        'Оплачен',
        'Закрыт'
    ]
}

export const headerControlPanelWarehouse: object = {
    cpAddButtonName: 'Добавить запчасть',
    cpSearchPlaceholder: 'Найти запчасть',
    cpOptionsData: [
        'Все',
        'Дисплей',
        'Аккумулятор',
        'Шлейф'
    ]
}

export const serviceNewOrderData = {
    sectionTextClient: 'Клиент',
    newOrderClientData: [
        '* Имя',
        '* Номер телефона',
        '* Причина обращения'
    ],
    sectionTextDevice: 'Устройство',
    newOrderDeviceData: [
        '* Тип устройства',
        '* Производитель',
        '* Модель',
        'Комментарий'
    ]
}
