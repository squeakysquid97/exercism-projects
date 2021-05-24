//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, age) => {
  let earthAge = age/31557600
  const findAge = (timePassed) => {
    return parseFloat((earthAge / timePassed).toFixed(2))
  }
  if(planet === 'earth') { 
    return findAge(1)
  } else if(planet === 'mercury') {
    return findAge(0.2408467)
  }else if(planet === 'venus') {
    return findAge(0.61519726)
  }else if(planet === 'mars') {
    return findAge(1.8808158)
  }else if(planet === 'jupiter') {
    return findAge(11.862615)
  }else if(planet === 'saturn') {
    return findAge(29.446498)
  }else if(planet === 'uranus') {
    return findAge(84.016846)
  }else {
    return findAge(164.79132)
  }
};
