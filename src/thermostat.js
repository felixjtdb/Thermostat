function Thermostat() {
  this.temp = 20;
  this.powersaver = true;
};

Thermostat.prototype.add1 = function () {
  this.temp ++
  this.boundrycheck()
};

Thermostat.prototype.minus1 = function () {
  this.temp --
  this.boundrycheck()
};

Thermostat.prototype.switchpowersaver = function () {
  this.powersaver = !this.powersaver
  this.boundrycheck()
};

Thermostat.prototype.boundrycheck = function () {
  if (this.powersaver && this.temp > 25) this.temp = 25;
  if (!this.powersaver && this.temp > 32) this.temp = 32;
  if (this.temp < 10) this.temp = 10;
};

Thermostat.prototype.reset = function () {
  this.temp = 20
};

Thermostat.prototype.energyusage = function() {
  if (this.temp < 18) return "Low-usage"
  if (this.temp < 25) return "Medium-usage"
  if (this.temp > 24) return "High-usage"
};
