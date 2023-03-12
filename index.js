
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
 console.log(introduction("Aki")) ;
 
 function  introductionWithLanguage(name, language){
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
 }
 console.log(introductionWithLanguageOptional("Aki", "Ember.js"))
 function introductionWithLanguageOptional(name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}`
 }
 console.log(introductionWithLanguageOptional("Gracie","Javascript"))
 function introductionWithLanguageOptional(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
 }
console.log(introductionWithLanguageOptional("Gracie", "Python"));