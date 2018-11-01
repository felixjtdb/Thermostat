describe("thermostat", function() {
  var thermostat
  beforeEach(function(){
    thermostat = new Thermostat
  });
  describe("temperature can be changed", function(){
    it("temperature", function(){
      expect(thermostat.temp).toBe(20)
    });

    it("add1", function(){
      thermostat._add1()
      expect(thermostat.temp).toBe(21)
    });

    it("minus1", function(){
      thermostat._minus1()
      expect(thermostat.temp).toBe(19)
    });

    it("cannot go below 10", function(){
      thermostat.temp = 10
      thermostat.minus1
      expect(thermostat.temp).toBe(10)
    });
  });

  describe("powersaver", function(){
    it("power save is true to start", function(){
      expect(thermostat.powersaver).toBe(true)
    });

    it("power save is false to when switched", function(){
      thermostat.switchpowersaver()
      expect(thermostat.powersaver).toBe(false)
    });
  });

  describe("boundrycheck", function(){
    it("sets temp below low boundy to the low boundry", function(){
      thermostat.temp = 9
      thermostat.boundrycheck()
      expect(thermostat.temp).toBe(10)
    });
    it("sets temp below high boundy to the high boundry without powersave", function(){
      thermostat.temp = 26
      thermostat.boundrycheck()
      expect(thermostat.temp).toBe(25)
    });
    it("sets temp below high boundy to the high boundry with powersaver", function(){
      thermostat.temp = 33
      thermostat.switchpowersaver()
      thermostat.boundrycheck()
      expect(thermostat.temp).toBe(32)
    });
  });

  describe("reset", function(){
    it ("temp is set to 20 when reset called", function(){
      thermostat.temp = 11
      thermostat.reset()
      expect(thermostat.temp).toBe(20)
    });
  });
  describe("energy usage", function(){
    it("if temp is under 18 then returns low temp", function(){
      thermostat.temp = 17
      expect(thermostat.energyusage()).toBe("Low-usage")
    });
    it("if temp is under 25 then returns low temp", function(){
      thermostat.temp = 24
      expect(thermostat.energyusage()).toBe("Medium-usage")
    });
    it("if temp is under 25 then returns low temp", function(){
      thermostat.temp = 26
      expect(thermostat.energyusage()).toBe("High-usage")
    });
  });
});
