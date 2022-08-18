
function scuberGreetingForFeet(greetings){
  if (greetings <= 400){
  return 'This one is on me!';
} else if  (greetings > 2000 && greetings < 2500){
    return 'I will gladly take your thirty bucks.';
} else if (greetings > 2500){
    return 'No can do.';
}
// Write your code here!
}
scuberGreetingForFeet(city);
function ternaryCheckCity(city){
  const getCity = city === 'NYC' ? 'Ok, sounds good.' :'No go.';
  return getCity;
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
    return "Bye."
}    // Write your code here!
}