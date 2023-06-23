class Pc {
  constructor(name, price, type) {
    this.name = Pc.CapitalizeName(name);
    this.price = price;
    this.type = type || "Normal";
  }

  preview() {
    console.log(this);
  }

  static CapitalizeName(char) {
    return char.charAt(0).toUpperCase() + char.substr(1, char.length);
  }
}

class GamingPc extends Pc {
  type = "Gaming";
  constructor(name, price) {
    super(name, price);
  }
}

let homepc = new Pc("love", 100);
let gem = new GamingPc("boss", 5000);
homepc.preview();
