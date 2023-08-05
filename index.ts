// 2
let personName1: string = "Zaeem";
console.log('Hello ' + personName1 + ', would you like to learn some TypeScript today?');

// 3
function toTitleCase (text: string): string{
    return text.charAt(0).toUpperCase() + text.slice(1,text.length).toLowerCase()
}

let personName2: string = "zaeem";
console.log('Uppercase: ' + personName2.toUpperCase());
console.log('Lowercase: ' + personName2.toLowerCase());
console.log('Titlecase: ' + toTitleCase(personName2));

// 4 
console.log('The Prophet Muhammad (Peace Be Upon Him) said, "The best among you (Muslims) are those who learn the Qur\'an and teach it."');

// 5 
let famousPerson: string = "The Prophet Muhammad (Peace Be Upon Him)";
let message: string = famousPerson + " said, \"The best among you (Muslims) are those who learn the Qur\'an and teach it.\"";
console.log(message);

// 6
let personName3: string = "  \t \t  Ibrahim      \n    ";
console.log("With Whitespace: " + personName3);
console.log("Without Whitespace: " + personName3.trim());

// 7 & 10
console.log(6+2); // Addition
console.log(16-8); // Subtraction
console.log(4*2); // Multiplication
console.log(64/8); // Division

// 9 & 10
/* 
This code stores my favourite number in a variable and then uses that variable
to create a string message, which is then displayed in the console 
*/
let myFavNumber: number = 6;
let favNumberMessage: string = "My Favourite Number is " + myFavNumber;
console.log(favNumberMessage);

// 11
let friendNames = ['Waqar', 'Omer', 'Adnan', 'Moaz']; 
for (let i in friendNames) {
    console.log(friendNames[i]);
}

// 12
friendNames.map((friendName) => {
    if (friendName == 'Waqar'){
        console.log(friendName + ', how was the Table Tennis session today?');
    } else if (friendName == 'Omer'){
        console.log(friendName + ', how was the office today?');
    } else if (friendName == 'Adnan'){
        console.log(friendName + ', when are you buying a new car?');
    } else {
        console.log(friendName + ', you have improved your game a lot!');
    }
});

// 13
let vehicleList: Array<string> = ['car', 'bike', 'truck', 'train']
vehicleList.map((vehicleName) => {
    if (vehicleName == 'car'){
        console.log('I love to travel in a ' + vehicleName + '.');
    } else if (vehicleName == 'bike'){
        console.log(vehicleName.charAt(0).toUpperCase() + vehicleName.slice(1,vehicleName.length) + ' is a risky mode of transportation');
    } else if (vehicleName == 'truck'){
        console.log('I\'d like to overtake this ' + vehicleName + '.');
    } else {
        console.log(toTitleCase(vehicleName) + ' travels at extraordinary high speeds.');
    }
});

// 14
let invitees: string[] = ['Hamza', 'Imran', 'Usman', 'Akram']
invitees.map((invitee) => {
    console.log(invitee + ', you are cordially invited to the dinner today!');
});
let noOfOriginalInvitees = invitees.length

// 15
console.log(invitees[1] + ' could not make it due to some other committment.');
invitees[1] = 'Naeem'
invitees.map((invitee) => {
    console.log(invitee + ', you are cordially invited to the dinner today!');
});

// 16
console.log('I found a bigger dinner table and now I can invite more people! Yay!');
invitees = ['Irfan', ...invitees] 
invitees = [...invitees, 'Farooq']
invitees.splice(invitees.length/2, 0, 'Danyal')
invitees.map((invitee) => {
    console.log(invitee + ', you are cordially invited to the dinner today!');
});

// 17
console.log('A sad news... The table seems to not arrive in time, so I can only invite two guests now');
let totalInvitees:number = invitees.length;
for (let i=0; i<totalInvitees-2; i++) {
    console.log(invitees.pop() + ', sorry for I regret to invite you to the dinner!');
}
invitees.map((invitee) => {
    console.log(invitee + ', you are still invited to the dinner!');
});

invitees.pop();
invitees.pop();
console.log(invitees.length + ' items left in the invitees list.')

// 18
console.log('\nOriginal List:')
let travelLocations:Array<string> = ['Makkah', 'Tokyo', 'UK', 'Switzerland', 'Finland']
travelLocations.map((locationName) => {
    console.log(locationName);
});

let travelLocationsSorted = [...travelLocations].sort()
console.log('\nSorted List:')
travelLocationsSorted.sort().map((locationName) => {
    console.log(locationName);
});

console.log('\nChecking Original List:')
travelLocations.map((locationName) => {
    console.log(locationName);
});

console.log('\nReverse Alphabetical Ordered List:')
travelLocationsSorted.reverse()
travelLocationsSorted.map((locationName) => {
    console.log(locationName);
});

console.log('\nChecking Original List:')
travelLocations.map((locationName) => {
    console.log(locationName);
});

console.log('\nReversed Original List:')
travelLocations.reverse().map((locationName) => {
    console.log(locationName);
});

console.log('\nOriginal List (after reversing again):')
travelLocations.reverse().map((locationName) => {
    console.log(locationName);
});

console.log('\nAlphabetical Ordered Original List:')
travelLocations.sort()
travelLocations.map((locationName) => {
    console.log(locationName);
});

console.log('\nReverse Alphabetical Ordered Original List:')
travelLocations.reverse()
travelLocations.map((locationName) => {
    console.log(locationName);
});

// 19
console.log("The original number of people invited to the dinner were " + noOfOriginalInvitees);

// 20
let languages: string[] = ['Arabic', 'Urdu', 'English', 'Japanese']

// 21
const Person = {
    name: "Zaeem",
    age: 33,
    preferredLanguages : languages
}

// 22
console.log (languages[5])

// 23
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
console.log("Is car == 'honda'? I predict False.")
console.log(car == 'honda')
let num = 5;
console.log("Is num less than 10? I predict True.")
console.log(num < 10)
console.log("Is num times 2 equal to 15? I predict False.")
console.log(num * 2 == 15)
console.log("Is the remainder of num with 2 equal to 1? I predict True.")
console.log(num % 2 == 1)
console.log("Is the difference between num and 8 equal to 10? I predict False.")
console.log(Math.abs(num - 8) == 10)
console.log("Is the sum of num and 3 equal to 8? I predict True.")
console.log(num + 3 == 8)
let decision = false
console.log("Is the AND of decision and true equal to true? I predict False.")
console.log(decision && true)
console.log("What is the inverse of decision? I predict True.")
console.log(!decision)
console.log("Is the NOT of OR of decision and true equal to true? I predict False.")
console.log(!(decision || true))


// 24
let name1: string = "Zaeem"
let name2: string = "ahmad"
let name3: string = "zaeem"
console.log(name1 === name3)
console.log(name1 !== name2)
console.log(name1.toLowerCase() == name1)

let number1: number = 2;
let number2: number = 5;
let number3: number = 10;
console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number2 > number1 && number2 < number3)
console.log(number3 >= number2)
console.log(number2 <= number3)
console.log("Check")
console.log((2 | 5) > 3)

let testArray: number[] = [2, 7, 4]
console.log(testArray.includes(3));
console.log(!testArray.includes(3));

// 25
let alien_color1: string = "green"
if (alien_color1 == 'green'){
    console.log("You earned 5 points!")
}
if (alien_color1 == 'yellow'){
    console.log("")
}

//26
let alien_color2: string = "red"
if (alien_color2 == 'green'){
    console.log("You earned 5 points for shooting the alien!")
}
else {
    console.log("You earned 10 points!")
}

alien_color2 = 'green'
if (alien_color2 == 'green'){
    console.log("You earned 5 points for shooting the alien!")
}
else {
    console.log("You earned 10 points!")
}

// 27
let alien_color3 = 'red'
if (alien_color3 == 'green'){
    console.log("You earned 5 points!")
}
else if (alien_color3 == 'yellow') {
    console.log("You earned 10 points!")
}
else if (alien_color3 == 'red') {
    console.log("You earned 15 points!")
}

// 28
let age: number = 33;
if (age < 2) {
    console.log("Baby");
} else if (age >= 2 && age < 4){
    console.log("Toddler");
} else if (age >= 4 && age < 13){
    console.log("Kid");
} else if (age >= 13 && age < 20){
    console.log("Teenager");
} else if (age >= 20 && age < 65){
    console.log("Adult");
} else if (age >= 65){
    console.log("Elder");
}

// 29
let favourite_fruits: Array<string> = ["orange", "mango", "banana"]
if (favourite_fruits.includes("banana")){
    console.log("You really like bananas!")
}
if (favourite_fruits.includes("mango")){
    console.log("You really like mangoes!")
}
if (favourite_fruits.includes("orange")){
    console.log("You really like oranges!")
}
if (favourite_fruits.includes("guava")){
    console.log("You really like guavas!")
}
if (favourite_fruits.includes("watermelon")){
    console.log("You really like watermelons!")
}

// 30
let usernames = ['zaeem', 'admin', 'adnan', 'omer', 'ishtiaq']
usernames.map((user) => {
    if (user == 'admin'){
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log('Hello ' + toTitleCase(user) + ', thank you for logging in again.');
    } 
});

// 31
while (usernames.length > 0) {
    usernames.pop();
}
if (usernames.length == 0){
    console.log("We need to find some users!")
}

// 32
let current_users = ['zaeem', 'arsalan', 'ADNAN', 'omer', 'ishtiaq']
current_users = current_users.map((cUser) =>
    cUser.toLowerCase())
let new_users = ['danyal', 'zaheer','adnan','ibrahim']
new_users.map((user) => {
    if (!current_users.includes(user.toLowerCase())) {
        console.log(user + " is available!")
    } else {
        console.log(user + " is not available! You need to enter another username!")
    }
}
)

// 33
let numbers_one_to_ten = [1,2,3,4,5,6,7,8,9,10]
numbers_one_to_ten.forEach((num) => {
    if (num == 1) console.log(`${num}st`)
    else if (num == 2) console.log(`${num}nd`)
    else if (num == 3) console.log(`${num}rd`)
    else console.log(`${num}th`)
})

// 34
let pizzas = ['Fajita', 'Tikka', 'Malai Boti']
for (let i = 0; i < pizzas.length; i++) console.log(pizzas[i])
for (let i = 0; i < pizzas.length; i++) console.log(`I like ` + pizzas[i] + ` pizza`)
console.log(`Pizzas are unhealthy, although they are delicious.`)
console.log(`I really love pizza!`)

// 35
let animals = ['Lion', 'Tiger', 'Jaguar']
for (let i = 0; i < animals.length; i++) console.log(animals[i])
for (let i = 0; i < animals.length; i++) console.log(animals[i] + ` is a dangerous pet to have!`)
console.log(`Any of these animals would make a risky pet to have!`)

// 36
function make_shirt(size: number, message: string): void {
    console.log(`The size of the shirt is ${size} and the message on the shirt is "${message}"`)
}
make_shirt(6, "PIAIC Batch 47")

// 37
function make_shirt_default(size: string = "L", message: string = "I love TypeScript"): void {
    console.log(`The size of the shirt is ${size} and the message on the shirt is "${message}"`)
}
make_shirt_default()
make_shirt_default("M")
make_shirt_default("S", "Hello World :)")

// 38
function describe_city(cityName: string, countryName: string = "Pakistan") {
    console.log(`${cityName} is in ${countryName}`)
}
describe_city("Lahore")
describe_city("Ankara", "Turkey")
describe_city("Makkah", "Saudi Arabia")

// 39 
function city_country(cityName: string, countryName: string) {
    console.log(`${cityName}, ${countryName}`)
}
city_country("Lahore", "Pakistan")
city_country("Ankara", "Turkey")
city_country("Makkah", "Saudi Arabia")

// 40
function make_album (artistName: string, albumTitle: string, noOfTracks?: number) {
    return {artistName: artistName, albumTitle: albumTitle, noOfTracks: noOfTracks}
}

let object1 = make_album("X", "Y")
console.log(object1.artistName);
console.log(object1.albumTitle);

let object2 = make_album("A", "B", 8)
console.log(object2.artistName);
console.log(object2.albumTitle);
console.log(object2.noOfTracks);

// 41
let magicians = ["Harry", "Tom", "Ryu"]
function show_magicians(magicians: string[]){
    console.log(magicians);
}
show_magicians(magicians);

// 42
function make_great(magicians: string[]){
    for (let i = 0; i < magicians.length; i++) 
        magicians[i] = "Great " + magicians[i]
}
make_great(magicians);
show_magicians(magicians);

// 43
magicians = ["Harry", "Tom", "Ryu"]
let magicians_copy = [...magicians]
make_great(magicians_copy);
show_magicians(magicians_copy);
show_magicians(magicians);

// 44   
function sandwitch_maker(items: string[]){
    let items_list: string = ""
    for (let i = 0; i < items.length; i++) 
        if (i < items.length - 1) items_list = items_list + items[i] + ", "
        else items_list = items_list + " & " + items[i]
    console.log("The sandwitch contains " + items_list)
}
sandwitch_maker(["mayonnaise", "cheese", "sauce"])

// 45
function create_a_car(manufacturer: string, model_name: string, ...args:string[]) {
    return {manufacturer, model_name, args}
}

const my_car = create_a_car("Honda", "N-WGN", "color", "white", "options", "custom");
console.log(my_car.args[3]);