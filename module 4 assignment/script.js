var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(i=0;i<names.length;i++)
{
  if(names[i].charAt(0).toUpperCase()=='J'){
    byeSpeaker.speak(names[i]);
  }
  else {
    helloSpeaker.Speak(names[i]);
  }

}