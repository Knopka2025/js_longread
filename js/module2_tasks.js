console.log('Задача 95')
//Перевірка віку для отримання водійських прав
// Напиши функцію `checkDrivingEligibility(age)`, яка приймає вік користувача.
// Якщо користувач досяг 18 років, функція повинна повертати `"You can apply for a driver's license"`,
// у протилежному випадку — `undefined`.

function checkDrivingEligibility(age) {
    if (age >= 18) {
        return `You can apply for driver's license`;
    }
}

console.log(checkDrivingEligibility(15));
console.log(checkDrivingEligibility(21));

console.log('Задача 96')
//Перевірка рівня знання іноземної мови
// Напиши функцію `evaluateLanguageLevel(level)`, яка приймає рівень володіння мовою у вигляді рядка
// (`"beginner"`, `"intermediate"`, `"advanced"`). Якщо рівень `"advanced"`, функція повинна повертати
// `"You can work as a translator"`, в інших випадках — `undefined`.

function evaluateLanguageLevel(level) {
    if (level === 'advanced') {
        return 'You can work as a translator';
    }
}

console.log(evaluateLanguageLevel('beginner'));
console.log(evaluateLanguageLevel('intermediate'));
console.log(evaluateLanguageLevel('advanced'));



console.log('Задача 97')
//Перевірка температури води у басейні
// Напиши функцію `checkWaterTemperature(temp)`, яка приймає температуру води. Якщо температура 22°C або вище,
// функція повертає `"Swimming conditions are good"`, у протилежному випадку — `undefined`.

function checkWaterTemperature(temp) {
    if (temp >= 22) {
        return 'Swimming conditions are good';
    }
}

console.log(checkWaterTemperature(22));
console.log(checkWaterTemperature(15));



console.log('Задача 98')
//Перевірка розміру файлу перед завантаженням
// Напиши функцію `validateFileSize(size)`, яка приймає розмір файлу в мегабайтах. Якщо файл не перевищує 10 МБ,
// функція повертає `"File size is acceptable"`, у протилежному випадку — `undefined`.

function validateFileSize(size) {
    if (size <= 10) {
        return 'File size is acceptable';
    }
}

console.log(validateFileSize(10));
console.log(validateFileSize(14));

console.log('Задача 99')
//Перевірка мінімальної кількості учасників для гри
// Напиши функцію `checkParticipantsCount(count)`, яка приймає кількість учасників у грі. Якщо учасників **5 або більше**,
//  функція повертає `"Game can start"`, у протилежному випадку — `undefined`.

function checkParticipantsCount(count) {
    if (count >= 5) {
        return ' Game can start';
    }
}

console.log(checkParticipantsCount(3));
console.log(checkParticipantsCount(8));

console.log('Задача 100')
//Функція checkGrade працює так:
//Вона приймає один параметр – grade, який містить числове значення (оцінку студента).
//Використовує if...else, щоб перевірити, чи grade більше або дорівнює 70:
//Якщо true, повертає "Satisfactory".
//Якщо false, повертає "Unsatisfactory".
//Виклик console.log(checkGrade(40)):
//Оскільки 40 < 70, виконується else, тому повертається "Unsatisfactory".
//Виклик console.log(checkGrade(75)):
//Оскільки 75 >= 70, виконується if, тому повертається "Satisfactory".


function checkGrade(grade) {
    if (grade >= 70) {
        return 'Satisfactory';
    }
    else {
        return 'Unsatisfactory';
    }
}


console.log(checkGrade(69));
console.log(checkGrade(87));


console.log('Задача 101')

//Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
//оголошує два параметри, значення яких будуть задаватися під час її виклику:
//available - доступна кількість товарів на складі
//ordered - кількість одиниць товару в замовленні
//Використовуючи розгалуження, доповни код функції таким чином, щоб:
//Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, функція повертає рядок "Not enough goods in stock!"
//В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"

function checkStorage(available, ordered) {
    if (ordered <= available) {
        return 'Order is processed, our manager will contact you';
    }
    else {
        return 'Not enough goods is stock!';
    }
}

console.log(checkStorage(18, 21));
console.log(checkStorage(18, 15));




console.log('Задача 102')
//Перевірка рівня заряду пристрою**  
   //Оголошена функція `checkBatteryLevel(currentCharge)`, яка визначає стан батареї.  
   //- Якщо рівень заряду `0%`, функція повертає `"The device is out of battery!"`.  
  // - Якщо рівень заряду менше `20%`, функція повертає `"Battery level is low, please charge soon."`.  
   //- В інших випадках функція повертає `"Battery level is sufficient."`.
   
function checkBatteryLevel(currentCharge) {
    if (currentCharge === 0) {
        return `${currentCharge}% - the device is out of battery`;
    }
    else if (currentCharge < 20) {
        return `${currentCharge}% - battery is low, please charge soon`;
    }
    else { 
        return `${currentCharge}% - battery level is sufficient`;
    }
}
   
console.log(checkBatteryLevel(0));
console.log(checkBatteryLevel(15));
console.log(checkBatteryLevel(20));
   
   
    console.log('Задача 103')
//Перевірка доступності номерів у готелі**  
   //Оголошена функція `checkRoomAvailability(availableRooms, requestedRooms)`, яка перевіряє можливість бронювання.  
   //- Якщо запитана кількість `requestedRooms` дорівнює `0`, функція повертає `"No rooms requested!"`.  
   //- Якщо `requestedRooms` більше `availableRooms`, функція повертає `"Not enough rooms available, please adjust your booking."`.  
   //- В інших випадках функція повертає `"Booking confirmed, enjoy your stay!"`.
   
   
    function checkRoomAvailability(availableRooms, requestedRooms) {
        if (requestedRooms === 0) {
            return 'No rooms requested!';
        }
        else if (requestedRooms >= availableRooms) {
            return 'Not enough rooms aviable, plese adjust your booking.'
        }
        else {
            return ' Booking confirmed, enjoy your stay!';
        }
    }
   
console.log(checkRoomAvailability(4, 6)); 
console.log(checkRoomAvailability(4, 0));
console.log(checkRoomAvailability(4, 2));
   
   
console.log('Задача 104')//
// Перевірка швидкості автомобіля**  
  // Оголошена функція `checkSpeedLimit(currentSpeed, speedLimit)`, яка визначає чи порушує автомобіль ліміт швидкості.  
  // - Якщо `currentSpeed` дорівнює `0`, функція повертає `"The vehicle is stationary!"`.  
  // - Якщо `currentSpeed` перевищує `speedLimit`, функція повертає `"Speed limit exceeded! Reduce your speed."`.  
  // - В інших випадках функція повертає `"Speed is within the allowed limit."`.
  
function checkSpeedLimit(currentSpeed, speedLimit) {
    if (currentSpeed === 0) {
        return 'The vehicle is stationary!';
    }
    else if (currentSpeed > speedLimit) {
        return 'Speed limit exceeded! Reduce your speed'
    }
    else {
        return 'Speed is within the allowed limit';
    }
  }
  

console.log(checkSpeedLimit(0, 90));
console.log(checkSpeedLimit(90, 85));
console.log(checkSpeedLimit(65, 65));  
  
  
console.log('Задача 105')//
// Перевірка балансу банківського рахунку**  
  // Оголошена функція `checkBalance(accountBalance, withdrawalAmount)`, яка перевіряє можливість зняття грошей.  
  // - Якщо `withdrawalAmount` дорівнює `0`, функція повертає `"No withdrawal amount specified!"`.  
  // - Якщо `withdrawalAmount` більше `accountBalance`, функція повертає `"Insufficient funds for this transaction!"`.  
  // - В інших випадках функція повертає `"Withdrawal successful, please collect your cash."`.
  
function checkBalance(accountBalance, withdrawalAmount) {
    if (withdrawalAmount === 0) {
          return "No withdrawal amount specified!"
    }
    else if (withdrawalAmount > accountBalance) {
        return 'Insufficient funds for this transaction';
    }
    else {
        return 'Withdrawal successful, please collect your cash'
    }
  }
  
console.log(checkBalance(500, 0));
console.log(checkBalance(3700, 3800));
console.log(checkBalance(3700, 1400));
  
console.log('Задача 106')//
// Перевірка наявності місць у спортзалі**  
  // Оголошена функція `checkGymAvailability(availableSlots, requestedSlots)`, яка перевіряє можливість реєстрації на тренування.  
  // - Якщо `requestedSlots` дорівнює `0`, функція повертає `"No training session selected!"`.  
  // - Якщо `requestedSlots` більше `availableSlots`, функція повертає `"Not enough slots available, please choose a different time."`.  
  // - В інших випадках функція повертає `"Registration confirmed, see you at the gym!"`.

function checkGymAvailability(availableSlots, requestedSlots) {
    if (requestedSlots === 0) {
        return 'No training session selected!';
    }
    else if (requestedSlots > availableSlots) {
        return 'Not enough slots available, please choose a different time.'
    }
    else {
        return 'Registration confirmed, see you at the gym!';
    }
  }
  
console.log(checkGymAvailability(10, 0));  // "No training session selected!"
console.log(checkGymAvailability(5, 8));   // "Not enough slots available, please choose a different time."
console.log(checkGymAvailability(20, 15)); // "Registration confirmed, see you at the gym!"
  
console.log('Задача 107')
//Тернарний оператор
//let employmentStatus;

//const experience = 3;

//if (experience >= 1) {
//    employmentStatus = "employed";
//} else {
//    employmentStatus = "unemployed";
//}

//console.log(employmentStatus); // "employed"

const experience = 3;

const  employmentStatus = experience >= 1 ? 'employed' : 'unemployed';

console.log(employmentStatus);

console.log('Задача 108')
//Тернарний оператор
//let season;
//const temperature = 30;

//if (temperature >= 25) {
//    season = "summer";
// else {
//    season = "winter";
//}

//console.log(season); // "summer"

const temperaTURE = 24;

const season = temperaTURE >= 25 ? 'summer' : 'winter';

console.log(season);



console.log('Задача 109')
//Тернарний оператор
//let knowledgeLevel;
//const score = 85;

//if (score >= 80) {
//    knowledgeLevel = "expert";
//} else {
//    knowledgeLevel = "beginner";
//}

//console.log(knowledgeLevel); // "expert"

const scoreLevel = 85;

const knowledgeLevel = scoreLevel >= 80 ? 'expert' : 'beginner';

console.log(knowledgeLevel);

console.log('Задача 110')
//Тернарний оператор
//let ticketStatus;
//const availableTickets = 5;

//if (availableTickets > 0) {
//    ticketStatus = "available";
//} else {
//    ticketStatus = "sold out";
//}

//console.log(ticketStatus); // "available"


const availableTickets = 5;

const ticketStatus = availableTickets >= 0 ? 'avialable' : 'sold out';

console.log(ticketStatus); // "available"




console.log('Задача 111')
//Тернарний оператор

//let accountType;
//const balance = 5000;

//if (balance >= 3000) {
//    accountType = "premium";
//} else {
//    accountType = "standard";
//}

//console.log(accountType); // "premium"


const balance = 5000;

const accountType = balance >= 3000 ? 'premium' : 'standard';

console.log(accountType); // "premium"


console.log('Задача 112')
// Перевірка віку для входу в кіно
//Оголошена функція checkMovieAccess(age), яка приймає вік глядача.
//- Якщо користувач має 18 років або більше, функція повертає "Access granted to the movie".
// В іншому випадку функція повертає "Access denied, age restriction applies!".

console.log('варіант 1');
//function checkMovieAccess(userAge) {
//    if (userAge >= 18) {
//        return 'Access granted to the movie';
//    }
//    else {
 //       return 'Access denied, age restriction applies!';
 //   }
//}

//console.log(checkMovieAccess(34));

console.log('варінт 2');
let userAgE = 12;

const checkMovieAccess = userAgE >= 18 ? 'Access granted to the movie' : 'Access denied, age restriction applies!';

console.log(checkMovieAccess);



console.log('Задача 113')
//- Перевірка доступності місць у ресторані
//Оголошена функція checkTableAvailability(reserved, available), яка перевіряє можливість бронювання столиків.
//- Якщо запитана кількість столиків reserved не перевищує доступну available, функція повертає "Reservation successful".
//- В іншому випадку функція повертає "Reservation failed, not enough tables!".

function checkTableAvailability(reserved, available) {
    return reserved <= available ? 'Reservation successful' : 'Reservation failed, not enough tables!';
}
console.log(checkTableAvailability(4, 5));  // "Reservation successful"
console.log(checkTableAvailability(6, 5));  // "Reservation failed, not enough tables!"
console.log(checkTableAvailability(2, 2));  // "Reservation successful"

console.log('Задача 114')
// Перевірка швидкості автомобіля
//Оголошена функція checkSpeedLimit(currentSpeed, maxSpeed), яка перевіряє, чи перевищує автомобіль допустиму швидкість.
//- Якщо currentSpeed менший або дорівнює maxSpeed, функція повертає "Speed is within limit".
//- В іншому випадку функція повертає "Speed limit exceeded!".

function checkSpeedLimit(currentSpeed, maxSpeed) {
    return currentSpeed <= maxSpeed ? 'Speed is within limit' : 'Speed limit exceeded!';
}
console.log(checkSpeedLimit(60, 80)); // "Speed is within limit"
console.log(checkSpeedLimit(90, 80)); // "Speed limit exceeded!"

console.log('Задача 115');
//- Перевірка доступності книг у бібліотеці
//Оголошена функція checkBookAvailability(requested, available), яка перевіряє, чи можна видати запитані книги.
//- Якщо запитана кількість requested не перевищує доступну available, функція повертає "Books successfully borrowed".
//- В іншому випадку функція повертає "Not enough books available!".
//console.log(checkBookAvailability(3, 5)); // "Books successfully borrowed"
//console.log(checkBookAvailability(6, 5)); // "Not enough books available!"

function checkBookAvailability(requested, avialable) {
    return requested > avialable ? 'Books successfully borrowed' : 'Not enough books available!';
}
console.log(checkBookAvailability(3, 5)); // "Books successfully borrowed"
console.log(checkBookAvailability(6, 5)); // "Not enough books available!"




console.log('Задача 116');
//- Перевірка рівня заряду батареї
//Оголошена функція checkBatteryStatus(level), яка перевіряє, чи достатній рівень заряду пристрою для роботи.
//- Якщо рівень заряду level становить 20% або більше, функція повертає "Battery level is sufficient".
//- В іншому випадку функція повертає "Battery is low, please charge!".

//console.log(checkBatteryStatus(50)); // "Battery level is sufficient"
//console.log(checkBatteryStatus(15)); // "Battery is low, please charge!"


function checkBatteryStatus(levelBatery) {
    return levelBatery >= 20 ? 'Battery level is sufficient' : 'Battery is low, please charge!';

}
console.log(checkBatteryStatus(50)); // "Battery level is sufficient"
console.log(checkBatteryStatus(15)); // "Battery is low, please charge!"

console.log('Задача 117');
// Перевірка погоди
//Напиши функцію checkWeather(condition), яка приймає параметр condition і повертає відповідне повідомлення:
//- "sunny" → "It's a bright and sunny day!"
//- "rainy" → "Don't forget your umbrella!"
//- "snowy" → "Wear warm clothes, it's snowing!"
//- "windy" → "Hold onto your hat, it's windy!"
//- default → "Weather condition unknown."

function checkWeather(conditionS) {
    
    switch (conditionS) {
        case 'sunny':
            console.log('It is a bright and sunny day!');
            break
        case 'rainy':
            console.log('Do not forget your umbrella!');
            break
        case 'snowy':
            console.log('Wear warm clothes, it is snowing!');
            break
        case 'windy':
            console.log('Hold onto your hat, it is windy!');
            break
        default:
            console.log('Weather condition unknown.');
    }
}
checkWeather('windy');

console.log('Задача 118');
//- Вибір типу квитка
//Напиши функцію getTicketPrice(type), яка приймає type і повертає вартість квитка:
//- "child" → "Price: $5"
//- "adult" → "Price: $10"
//- "senior" → "Price: $7"
//- default → "Invalid ticket type"

function getTicketPrice(type) {
    switch (type) {
        case 'child':
            console.log('Price: $5');
            break
        case 'adult':
            console.log('Price: $20');
            break
        case 'senior':
            console.log('Price: $7');
            break
        default:
            console.log('Invalid ticket type');
    }
}


getTicketPrice('adult');



console.log('Задача 119');
//Перевірка дня тижня

//Напиши функцію getDayType(day), яка приймає day і визначає, чи це будній день чи вихідний:
//- "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" → "It's a weekday."
//- "Saturday", "Sunday" → "It's a weekend!"
//- default → "Invalid day."

function getDayType(day) {
    switch (day) {
        case 'Monday': 
        case 'Tuesday': 
        case 'Wednesday': 
        case 'Thursday': 
        case 'Friday':
            console.log('It is a weekday');
            break
        case 'Sunday':
        case 'Saturday':
            console.log('It is weekend!');
            break
        default:
            console.log('Invalid day');
    }
}

getDayType('Monday');


console.log('Задача 120');
//- Вибір мови привітання
//Напиши функцію greetUser(language), яка приймає language і повертає привітання:
//- "English" → "Hello!"
//- "French" → "Bonjour!"
//- "Spanish" → "Hola!"
//- "German" → "Guten Tag!"
//- default → "Language not supported."

function greetUsers(language) {
    switch (language) {
       case'English':
       console.log('Hello!');
       break
       case'French':
       console.log('Bonjour!');
       break
       case'Spanish':
       console.log('Hola!');
       break
       case'German':
       console.log('Guten Tag!');
       break
       default:
       console.log('Language not supported.');
    }
}

greetUsers('Spanish');


console.log('Задача 121');
// Класифікація оцінки студента
//Напиши функцію getGradeCategory(grade), яка визначає категорію оцінки:
//- "A" → "Excellent"
//- "B" → "Good"
//- "C" → "Average"
//- "D" → "Below Average"
//- "F" → "Fail"
//- default → "Invalid grade"

function getGradeCategory(grade) {
    switch (grade) {
        case 'A':
            console.log('Excellent');
            break
        case 'B':        
            console.log('Good');
            break
        case 'C':        
            console.log('Average');
            break
        case 'D':        
            console.log('Below Average');
            break
        case 'E':
            console.log('Fail');
            break
        default:
            console.log('Invalid grade');
    }
}

getGradeCategory('B');


console.log('Задача 122');

//Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

//number - число, входження якого перевіряється
//start - початок числового проміжку
//end - кінець числового проміжку
//Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок
// від start до end включно. Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end.
// Результатом виклику функції має бути буль true або false.

function isNumberInRange(start, end, number) {
    return number >= start && number <= end;
}

console.log(isNumberInRange(10, 50, 25));  // true (число входить у проміжок)
console.log(isNumberInRange(10, 50, 5));   // false (число менше за start)
console.log(isNumberInRange(10, 50, 55));  // false (число більше за end)
console.log(isNumberInRange(1, 100, 100)); // true (число дорівнює end)
console.log(isNumberInRange(1, 100, 1));   // true (число дорівнює start)


console.log('Задача 123');
//- Перевірка температури для комфортного відпочинку
//Оголошена функція isComfortableTemperature(minTemp, maxTemp, currentTemp), яка перевіряє, чи знаходиться поточна температура в комфортному діапазоні.
//- Якщо currentTemp більше або дорівнює minTemp і менше або дорівнює maxTemp, функція повертає true.
//- В іншому випадку повертає false.
//    console.log(isComfortableTemperature(15, 25, 20));  // true (Температура у межах норми)
//console.log(isComfortableTemperature(15, 25, 30));  // false (Температура занадто висока)
//console.log(isComfortableTemperature(15, 25, 10));  // false (Температура занадто низька)

function isComfortableTemperature(minTemp, maxTemp, currentTemp) {
    return currentTemp >= minTemp && currentTemp <= maxTemp;
}
console.log(isComfortableTemperature(15, 25, 20));  // true (Температура у межах норми)
console.log(isComfortableTemperature(15, 25, 30));  // false (Температура занадто висока)
console.log(isComfortableTemperature(15, 25, 10));  // false (Температура занадто низька)


    console.log('Задача 124');
 //   - Перевірка віку для участі у змаганнях
//Оголошена функція isEligibleForCompetition(minAge, maxAge, userAge), яка визначає, чи може користувач взяти участь у змаганнях.
//- Якщо userAge більше або дорівнює minAge і менше або дорівнює maxAge, функція повертає true.
//- В іншому випадку повертає false.
    
//    console.log(isEligibleForCompetition(18, 35, 25));  // true (Користувач відповідає критеріям)
//console.log(isEligibleForCompetition(18, 35, 40));  // false (Занадто старий для участі)
//console.log(isEligibleForCompetition(18, 35, 16));  // false (Занадто молодий для участі)

function isEligibleForCompetition(minAge, maxAge, userAge) {
    return userAge >= minAge && userAge <= maxAge;
}

console.log(isEligibleForCompetition(18, 35, 25));  // true (Користувач відповідає критеріям)
console.log(isEligibleForCompetition(18, 35, 40));  // false (Занадто старий для участі)
console.log(isEligibleForCompetition(18, 35, 16));  // false (Занадто молодий для участі)

    console.log('Задача 125');
//- Перевірка рівня гучності звуку
//Оголошена функція isVolumeSafe(minVolume, maxVolume, currentVolume), яка перевіряє, чи поточний рівень гучності знаходиться у безпечному діапазоні.
//- Якщо currentVolume більше або дорівнює minVolume і менше або дорівнює maxVolume, функція повертає true.
//- В іншому випадку повертає false.
//console.log(isVolumeSafe(20, 80, 50));  // true (Гучність у безпечному діапазоні)
//console.log(isVolumeSafe(20, 80, 90));  // false (Занадто гучно)
//console.log(isVolumeSafe(20, 80, 10));  // false (Занадто тихо)

function isVolumeSafe(minVolume, maxVolume, currentVolume) {
    return currentVolume >= minVolume && currentVolume <= maxVolume;
}

console.log(isVolumeSafe(20, 80, 50));  // true (Гучність у безпечному діапазоні)
console.log(isVolumeSafe(20, 80, 90));  // false (Занадто гучно)
console.log(isVolumeSafe(20, 80, 10));  // false (Занадто тихо)
    
console.log('Задача 126');
//- Перевірка ваги багажу для авіаперельоту
//Оголошена функція isLuggageWithinLimit(minWeight, maxWeight, luggageWeight), яка перевіряє, чи вага багажу відповідає встановленим нормам авіакомпанії.
//- Якщо luggageWeight більше або дорівнює minWeight і менше або дорівнює maxWeight, функція повертає true.
//- В іншому випадку повертає false.
//console.log(isLuggageWithinLimit(5, 20, 15));  // true (Вага у допустимих межах)
//console.log(isLuggageWithinLimit(5, 20, 25));  // false (Занадто важкий багаж)
//console.log(isLuggageWithinLimit(5, 20, 3));   // false (Недостатня вага)

function isLuggageWithinLimit(minWeight, maxWeight, luggageWeight) {
    return luggageWeight >= minWeight && luggageWeight <= maxWeight;
}
console.log(isLuggageWithinLimit(5, 20, 15));  // true (Вага у допустимих межах)
console.log(isLuggageWithinLimit(5, 20, 25));  // false (Занадто важкий багаж)
console.log(isLuggageWithinLimit(5, 20, 3));   // false (Недостатня вага)

console.log('Задача 127');
//Доступ до преміум статей
//Розроби функцію checkAccess(subType), яка перевіряє, чи користувач має доступ до преміум-статей на сайті. 
// Якщо передплата "pro" або "vip", доступ дозволено (true), інакше — доступ заборонений (false).
function checkAccess(subType) {
    return subType === 'pro' || subType === 'vip';
}
console.log(checkAccess("pro")); // true
console.log(checkAccess("vip")); // true
console.log(checkAccess("basic")); // false
console.log(checkAccess("free")); // false
console.log(checkAccess("premium")); // false


console.log('Задача 128');
//Доступ до відео високої якості
//Користувачі можуть переглядати відео в 4K тільки якщо мають "premium" або "pro" предоплату.
// Використовуючи оператор "АБО", реалізуй функцію checkVideoAccess(subVideoType), яка визначає, чи може користувач дивитися контент у високій якості.
 
function checkVideoAccess(subVideoType) {
    return subVideoType === 'premium' || subVideoType === 'pro';
}
console.log(checkVideoAccess("pro")); // true
console.log(checkVideoAccess("vip")); // false
console.log(checkVideoAccess("basic")); // false
console.log(checkVideoAccess("free")); // false
console.log(checkVideoAccess("premium")); // true

console.log('Задача 129');
//В інтернет-магазині діє спеціальна умова для безкоштовної доставки. Якщо сума замовлення не менше 1000 грн
// або користувач має преміум-статус ("premium"), то доставка буде безкоштовною.
//Напишіть функцію isFreeShipping(orderAmount, userStatus), яка приймає два параметри:
//- orderAmount – сума замовлення (у грн)
//- userStatus – статус користувача ("basic", "premium", "gold", тощо)
//Функція повинна повертати true, якщо користувач має право на безкоштовну доставку, і false – якщо ні.

function isFreeShipping(orderAmount, userStatus) {
    return orderAmount >= 1000 || userStatus === 'premium';
}
console.log(isFreeShipping(1200, "basic")); // true (сума достатня)  
console.log(isFreeShipping(800, "premium")); // true (користувач має преміум-статус)  
console.log(isFreeShipping(800, "basic")); // false (ані статус, ані сума не підходять)  


console.log('Задача 130');
//На платформі онлайн-курсів існує спеціальна умова для отримання сертифіката. Якщо студент набрав не менше 80 балів або має статус "VIP" на курсі, то він отримує сертифікат.
//Напишіть функцію canGetCertificate(score, studentStatus), яка приймає два параметри:
//- score – кількість набраних балів
//- studentStatus – статус студента ("regular", "VIP", "guest", тощо)
//Функція повинна повертати true, якщо студент має право на сертифікат, і false – якщо ні.

function canGetCertificate(score, studentStatus) {
    return score >= 80 || studentStatus === 'VIP';
}

console.log(canGetCertificate(85, "regular")); // true (балів достатньо)  
console.log(canGetCertificate(75, "VIP")); // true (статус VIP)  
console.log(canGetCertificate(75, "regular")); // false (ані статус, ані бали не підходять)  

console.log('Задача 131');
//В онлайн-грі є два способи отримати доступ до спеціального квесту:
//- Якщо рівень гравця не менше 15 або він має статус "Elite".
//- Якщо у гравця не менше 500 золота або він отримав спеціальне запрошення (hasInvite === true).
//Напишіть функцію canJoinQuest(level, status, gold, hasInvite), яка перевіряє, чи може гравець взяти участь у квесті.

function canJoinQuest(level, status, gold, hasInvite) {
    return level >= 15 || status === 'Elite' && gold >= 500 || hasInvite === true;
}

console.log(canJoinQuest(16, "Regular", 600, false)); // true (рівень і золото достатні)  
console.log(canJoinQuest(12, "Elite", 400, true)); // true (статус Elite і запрошення)  
console.log(canJoinQuest(14, "Regular", 450, false)); // false (ані рівень, ані золота достатньо)  
console.log(canJoinQuest(10, "Elite", 200, false)); // false (немає золота і запрошення)  


console.log('Задача 132');
// На космічну експедицію допускаються лише кандидати, які відповідають одній з двох груп умов:
// - Фізична підготовка:
// - Вік не менше 25 років або кандидат має статус "experienced"
// - Сила (рівень фізичної підготовки) не менше 80 балів
// - Наукова підготовка:
// - Освітній рівень "PhD" або "Master"
// - Досвід роботи у сфері досліджень не менше 5 років
// Реалізуйте функцію canJoinMission(age, status, strength, education, experience), яка перевіряє, чи може кандидат брати участь у космічній експедиції.

function canJoinMission(age, status, strength, education, experience) {
    const phisicalExp = (age >= 25 || status === 'experienced') && strength >= 80;
    const educationExp = (education === 'PhD' || education === 'Master') && experience >= 5;
    return phisicalExp || educationExp;
}
console.log(canJoinMission(30, "novice", 85, "Bachelor", 4)); // true (відповідає фізичним умовам)
console.log(canJoinMission(22, "experienced", 90, "Bachelor", 2)); // true (статус "experienced", сила достатня)
console.log(canJoinMission(28, "novice", 75, "PhD", 6)); // true (відповідає науковим умовам)
console.log(canJoinMission(24, "novice", 70, "Bachelor", 3)); // false (не відповідає жодній групі)
console.log(canJoinMission(40, "expert", 90, "Master", 10)); // true (відповідає обом групам)
 

console.log('Задача 133');
// У великому місті працює система громадського транспорту, яка надає безкоштовний проїзд певним групам пасажирів. 
// Безкоштовний проїзд доступний, якщо виконується хоча б одна з умов:
// - Соціальні пільги:
// - Пасажиру не менше 65 років або він має статус "disabled" (особа з інвалідністю).
// - Студентський проїзд:
// - Пасажир має активний студентський квиток (isStudent === true) та його вік не більше 23 років.
// Напишіть функцію canRideFree(age, status, isStudent), яка перевіряє, чи має пасажир право на безкоштовний проїзд.

function canRideFree(age, status, isStudent) {
    const pensionBenefits = age >= 65 || status === 'disabled';
    const studentBenefits = isStudent === true && age <= 23;
    return pensionBenefits || studentBenefits;
}
console.log(canRideFree(70, "regular", false)); // true (пенсіонер)
console.log(canRideFree(30, "disabled", false)); // true (особа з інвалідністю)
console.log(canRideFree(20, "regular", true)); // true (студент)
console.log(canRideFree(25, "regular", true)); // false (занадто старий для студентської знижки)
console.log(canRideFree(40, "regular", false)); // false (не має пільг)

console.log('Задача 134');
//На веб-сайті є кнопка "Відкрити/Закрити" модальне вікно. Натисканням кнопки модальне вікно має змінювати свій стан —
// якщо воно відкрите, його потрібно закрити, а якщо закрите, то відкрити.
//Напишіть функцію toggleModalVisibility(isVisible), яка приймає булевий параметр isVisible (true або false) і повертає протилежне значення.
//Приклад роботи функції:
//console.log(toggleModalVisibility(true));  // false (модальне вікно закривається)
//console.log(toggleModalVisibility(false)); // true (модальне вікно відкривається)

function toggleModalVisibility(isVisible) {
    return !isVisible;
}

console.log(toggleModalVisibility(true));  // false (модальне вікно закривається)
console.log(toggleModalVisibility(false)); // true (модальне вікно відкривається)


console.log('Задача 135');
// У мобільному додатку є кнопка, яка перемикає режим темної теми.
// - Якщо режим активовано (true), кнопка повинна його вимкнути (false).
// - Якщо режим вимкнено (false), кнопка повинна його активувати (true).
// - Використовуйте оператор ! (НЕ) для реалізації перемикання.

function themeMode(isActive) {
    return !isActive;
}

console.log(themeMode(true)); //false
console.log(themeMode(false)); //true

console.log('Задача 136');
// У додатку є розумна система сповіщень, яка вирішує, чи потрібно надсилати екстрене повідомлення користувачу.
// Сповіщення надсилається, якщо виконується хоча б одна з умов:
// - Екстрені ситуації:
// - Якщо заряд батареї менше або дорівнює 10% та режим енергозбереження вимкнено (powerSaving === false).
// - Якщо інтернет-з’єднання втрачено (isOnline === false) та немає кешованих даних (hasCachedData === false).
// - Особливі користувачі:
// - Якщо користувач є VIP (userStatus === "VIP") або має рівень доступу не менше "premium".
// - Якщо користувач активував аварійний режим (emergencyMode === true).
// Напишіть функцію shouldSendAlert(battery, powerSaving, isOnline, hasCachedData, userStatus, emergencyMode),
// яка перевіряє, чи слід надсилати екстрене сповіщення.

function shouldSendAlert(battery, powerSaving, isOnline, hasCachedData, userStatus, emergencyMode) {
    const emergencySituation = battery <= 10 && powerSaving === false;
    const internetConnection = !isOnline && !hasCachedData;
    const specialUser = userStatus === 'VIP' || userStatus === 'premium';
    const emergencyCode = emergencyMode === true;


    return emergencySituation || specialUser || internetConnection || emergencyCode;
}

console.log(shouldSendAlert(5, false, true, true, "standard", false)); // true (низький заряд і нема енергозбереження)
console.log(shouldSendAlert(50, true, false, false, "basic", false)); // true (немає інтернету та кешованих даних)
console.log(shouldSendAlert(80, true, true, true, "VIP", false)); // true (користувач VIP)
console.log(shouldSendAlert(60, false, true, true, "standard", true)); // true (аварійний режим активовано)
console.log(shouldSendAlert(50, true, true, true, "basic", false)); // false (жодна умова не підходить)



console.log('Задача 137');
// У корпоративному сховищі файлів доступ до документів контролюється за двома групами умов:
// - Права доступу:
// - Якщо користувач має рівень доступу "admin" або "manager", то доступ дозволено.
// - Якщо документ позначений як "public", то його можна переглянути незалежно від рівня доступу.
// - Додаткові перевірки:
// - Якщо користувач має віддалений доступ (remoteAccess === true), то може переглядати файли, навіть без адміністративного рівня.
// - Якщо документ є конфіденційним (isConfidential === true), його можуть переглядати тільки "admin".
// Реалізуйте функцію canAccessFile(userRole, fileType, remoteAccess, isConfidential), яка перевіряє, чи може користувач переглянути файл.
 
function canAccessFile(userRole, fileType, remoteAccess, isConfidential){
     const accessRight = userRole === 'admin' || userRole === 'manager';
    const document = fileType === 'public';
    const rechecking = remoteAccess === true;
    const confidential = isConfidential === true === 'admin';
    return accessRight || document || rechecking || confidential;
}
   
// Перевірка доступу до файлів
console.log(canAccessFile("admin", "internal", false, false)); // true (адмін має доступ)
console.log(canAccessFile("manager", "confidential", false, false)); // true (менеджер має доступ)
console.log(canAccessFile("user", "public", false, false)); // true (публічний документ доступний усім)
console.log(canAccessFile("employee", "internal", true, false)); // true (користувач має віддалений доступ)
console.log(canAccessFile("employee", "confidential", false, true)); // false (конфіденційний файл доступний лише адміну)




console.log('Задача 138');
// У корпоративній мережі кожен співробітник може отримати доступ до спеціальних ресурсів, якщо виконується хоча б одна з умов:
// - Адміністративний доступ:
// - Користувач має рівень доступу "admin" або "supervisor", тоді доступ дозволено.
// - Якщо ресурс має статус "open", він доступний для всіх.
// - Доступ за безпековими винятками:
// - Якщо користувач має доступ за винятками (hasSecurityClearance === true), він може переглядати закриті документи.
// - Якщо ресурс є конфіденційним (isConfidential === true), доступ мають лише адміністратори.
// Реалізуйте функцію canAccessResource(userRole, resourceStatus, hasSecurityClearance, isConfidential), яка перевіряє, чи може користувач отримати доступ.

function canAccessResource(userRole, resourceStatus, hasSecurityClearance, isConfidential) {
    const accessAdmin = userRole === 'admin' || userRole === 'supervisor';
    const openAccessStatus = resourceStatus === 'open';
    const confAccessExeptions = hasSecurityClearance === true;
    const confidentialAccess = isConfidential === true === 'admin';
    return accessAdmin || openAccessStatus || confAccessExeptions || confidentialAccess;
}

// Перевірка доступу до ресурсів
console.log(canAccessResource("admin", "restricted", false, false)); // true (адмін має доступ)
console.log(canAccessResource("supervisor", "confidential", false, false)); // true (керівник має доступ)
console.log(canAccessResource("employee", "open", false, false)); // true (відкритий ресурс доступний усім)
console.log(canAccessResource("staff", "restricted", true, false)); // true (користувач має безпековий доступ)
console.log(canAccessResource("staff", "confidential", false, true)); // false (конфіденційний ресурс доступний лише адміну)


console.log('Задача 139');
// У чаті є автоматичний фільтр, який перетворює текст користувача у великий регістр, якщо він містить слово "важливо" або "терміново".
// Напишіть функцію formatMessage(message), яка:
// - Перевіряє, чи рядок містить "важливо" або "терміново".
// - Якщо так, перетворює рядок у верхній регістр за допомогою toUpperCase().
// - В іншому випадку повертає рядок без змін.

// Перевірка роботи функції
//console.log(formatMessage("Це важливо для всіх!")); // "ЦЕ ВАЖЛИВО ДЛЯ ВСІХ!"
//console.log(formatMessage("терміново! Будь ласка, перевірте!")); // "ТЕРМІНОВО! БУДЬ ЛАСКА, ПЕРЕВІРТЕ!"
//console.log(formatMessage("Просто звичайний текст.")); // "Просто звичайний текст."



console.log('Задача 140');
// У текстовому редакторі є автоматична функція форматування заголовків.
// Напишіть функцію formatTitle(title), яка приймає рядок і перетворює його у верхній регістр.
function formatTitle(title) {
    
    return title.toUpperCase();
}
console.log(formatTitle("нові технології в IT")); // "НОВІ ТЕХНОЛОГІЇ В IT"
console.log(formatTitle("екологія та майбутнє планети")); // "ЕКОЛОГІЯ ТА МАЙБУТНЄ ПЛАНЕТИ"
console.log(formatTitle("що нового у світі штучного інтелекту?")); // "ЩО НОВОГО У СВІТІ ШТУЧНОГО ІНТЕЛЕКТУ?"


console.log('Задача 141');
// У системі онлайн-реєстрації всі імена користувачів мають бути записані великими літерами.
// Напишіть функцію formatUsername(username), яка:
// - Приймає ім’я користувача.
// - Перетворює його у верхній регістр за допомогою toUpperCase().
// - Повертає відформатоване ім’я.

function formatUsername(username) {
    return username.toUpperCase();
}
// Перевірка роботи функції
console.log(formatUsername("vladyslava")); // "VLADYSLAVA"
console.log(formatUsername("john_doe")); // "JOHN_DOE"
console.log(formatUsername("user2025")); // "USER2025"





