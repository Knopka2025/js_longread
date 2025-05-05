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




    console.log('Задача 124');
 //   - Перевірка віку для участі у змаганнях
//Оголошена функція isEligibleForCompetition(minAge, maxAge, userAge), яка визначає, чи може користувач взяти участь у змаганнях.
//- Якщо userAge більше або дорівнює minAge і менше або дорівнює maxAge, функція повертає true.
//- В іншому випадку повертає false.
    
//    console.log(isEligibleForCompetition(18, 35, 25));  // true (Користувач відповідає критеріям)
//console.log(isEligibleForCompetition(18, 35, 40));  // false (Занадто старий для участі)
//console.log(isEligibleForCompetition(18, 35, 16));  // false (Занадто молодий для участі)


    console.log('Задача 125');
//- Перевірка рівня гучності звуку
//Оголошена функція isVolumeSafe(minVolume, maxVolume, currentVolume), яка перевіряє, чи поточний рівень гучності знаходиться у безпечному діапазоні.
//- Якщо currentVolume більше або дорівнює minVolume і менше або дорівнює maxVolume, функція повертає true.
//- В іншому випадку повертає false.
//console.log(isVolumeSafe(20, 80, 50));  // true (Гучність у безпечному діапазоні)
//console.log(isVolumeSafe(20, 80, 90));  // false (Занадто гучно)
//console.log(isVolumeSafe(20, 80, 10));  // false (Занадто тихо)


    
console.log('Задача 126');
//- Перевірка ваги багажу для авіаперельоту
//Оголошена функція isLuggageWithinLimit(minWeight, maxWeight, luggageWeight), яка перевіряє, чи вага багажу відповідає встановленим нормам авіакомпанії.
//- Якщо luggageWeight більше або дорівнює minWeight і менше або дорівнює maxWeight, функція повертає true.
//- В іншому випадку повертає false.
//console.log(isLuggageWithinLimit(5, 20, 15));  // true (Вага у допустимих межах)
//console.log(isLuggageWithinLimit(5, 20, 25));  // false (Занадто важкий багаж)
//console.log(isLuggageWithinLimit(5, 20, 3));   // false (Недостатня вага)
