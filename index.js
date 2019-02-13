// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  const qualifiedDrivers = drivers.filter(driver => driver.hometown === location);
  logDriverNames(qualifiedDrivers);
}

function driversByRevenue(drivers) {
  const numberSorter = function ( num1, num2) {
    return num1.revenue - num2.revenue;
  }
  
  drivers.sort(comparator)
}