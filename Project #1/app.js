//Rooms implementation
//Class Room
class Room {
  floorNum;
  roomNum;
  price;
  #isBooked;
  constructor(floorNum, roomNum, price) {
    this.floorNum = floorNum;
    this.roomNum = roomNum;
    this.price = price;
    this.#isBooked = false;
  }
  printRoom() {
    console.log(`Room Description:
                        Floor Number: ${this.floorNum}
                        Room  Number: ${this.roomNum}
                        Price       : ${this.price}$`);
  }
  book() {
    this.#isBooked = true;
  }
  isBooked() {
    return this.#isBooked;
  }
}

//////////////////////////////////////Class RoomWithView
class RoomWithView extends Room {
  view;
  numberOfBeds;
  constructor(floorNum, roomNum, price, view, numberOfBeds) {
    super(floorNum, roomNum, price);
    this.view = view;
    this.numberOfBeds = numberOfBeds;
  }
  //Overriding printRoom method
  printRoom() {
    console.log(`Room Wtih View Description:
                        Floor Number: ${this.floorNum}
                        Room  Number: ${this.roomNum}
                        Beds  Number: ${this.numberOfBeds}
                        Price       : ${this.price}$
                        View        : ${this.view}`);
  }
}

////////////////////////////Class SleepingRoom
class SleepingRoom extends Room {
  personCapacity;
  constructor(floorNum, roomNum, price, personCapacity) {
    super(floorNum, roomNum, price);
    this.personCapacity = personCapacity;
  }
  //Overriding printRoom method
  printRoom() {
    console.log(`Sleeping Room Description:
                          Floor  Number: ${this.floorNum}
                          Room   Number: ${this.roomNum}
                          People Number: ${this.personCapacity}
                          Price        : ${this.price}$`);
  }
}

////////////////////////Class Hotel
class Hotel {
  #minFloor;
  #maxFloor;
  constructor(address, numberOfRooms, rooms) {
    this.address = address;
    this.numberOfRooms = numberOfRooms;
    //Class Composition
    this.rooms = rooms;
  }
  printAdvertisement() {
    console.log(`Enjoy the beauty and the nature with US:
              Located in : ${this.address}
              More than  : ${this.numberOfRooms} with different sets of views!`);
  }
  listBookedRooms() {
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].isBooked()) this.rooms[i].printRoom();
    }
  }
}

/////////////////////////////////////////////////////////////
const newRoom = new Room(5, "Room #644", 118);
newRoom.printRoom();
newRoom.book();
if (newRoom.isBooked()) console.log("The Room is already Booked");
else console.log("The Room is available");

const newRoomWithView = new RoomWithView(
  5,
  "Room #645",
  125,
  "Berlin Street",
  3
);
newRoomWithView.printRoom();
newRoomWithView.book();
if (newRoomWithView.isBooked()) console.log("The Room is already Booked");
else console.log("The Room is available");

const newSleepingRoom = new SleepingRoom(5, "Room #647", 128, 4);
newSleepingRoom.printRoom();
if (newSleepingRoom.isBooked()) console.log("The Room is already Booked");
else console.log("The Room is available");

let rooms = [newRoom, newRoomWithView, newSleepingRoom];
const ourHotel = new Hotel(
  "Kurfürstendamm 288, 10719 Berlin, Germany",
  750,
  rooms
);

ourHotel.printAdvertisement();
ourHotel.listBookedRooms();
