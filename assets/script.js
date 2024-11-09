class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo() {  //метод для получения информации о тс
        return `${this.brand} (${this.type})`;
    }
    getPrice() {  //метод для получения цены
        return `Цена: ${this.price.toLocaleString()} рублей`;
    }
};

// класс Car , наследующий от Transport

class Car extends Transport {
    constructor(brand, price, doors) {
        super('car', brand, price); //Тип всегда будет car
        this.doors = doors;
    }

    //метод для получения количества дверей
    getDoorsCount() {
        return `Количество дверей: ${this.doors}`;
    }
}

// класс bike, наследующий от Transport

class Bike extends Transport {
    constructor(brand, price, maxSpeed) {
        super('bike', brand, price); //Тип всегда будет bike
        this.maxSpeed = maxSpeed;
    }

    // метод для получения максимальной скорости 
    getMaxSpeed() {
        return `Максимальная скорость: ${this.maxSpeed} км/ч`;
    }
}

//данные транспорта
const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
    }
  ];

  // Функция для создания и отображения транспорта 
  function displayTransport(data) {
    data.forEach(item => {
        let transport;

        if (item.type === 'car') {
            transport = new Car(item.brand, item.price, item.doors);
        } else if (item.type === 'bike') {
            transport = new Bike(item.brand, item.price, item.maxSpeed);
        }

        //Генерация карточки транспорта
        const transportCard = document.createElement('div');
        transportCard.classList.add('transport-card');
        transportCard.innerHTML = `
        <img scr="${item.image}" alt="${item.brand}"/>
        <h3>${transport.getInfo()}</h3>
        <p>${transport.getPrice()}</p>
        ${transport instanceof Car ? `<p>${transport.getDoorsCount()}</p>` : ''}
        ${transport instanceof Bike ? `<p>${transport.getMaxSpeed()}</p>` : ''}`;

        //Добавление карточки в контейнер 
        document.body.appendChild(transportCard);
    });
  }

  displayTransport(data);