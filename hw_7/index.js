//1
class Transport {
    #owner = 'Chelovek'

    getOwner() {
        console.log(this.#owner)
    }
    start() {
        console.log('транспорт заведён')
    }
}

const who = new Transport()
who.getOwner()
who.start()


//2, 3, 4
class Car extends Transport {
    type = 'Offroad'
    fuelType = 'Diesel'
    seats = 7
    start () {
        console.log("Машина завелась")
    }
}

class Ship extends Transport {
    type = 'Cutter'
    fuelType = 'Petrol'
    seats = 8
    sail = false
    start () {
        console.log("Лодка завелась")
    }
}

class Plane extends Transport {
    type = 'Light'
    fuelType = 'Petrol'
    seats = 4
    autopilot = true
    start () {
        console.log("Самолёт завелась")
    }
}


const whatC = new Car
whatC.start()

const whatS = new Ship
whatS.start()

const whatP = new Plane
whatP.start()

