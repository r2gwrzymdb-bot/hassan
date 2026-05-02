const story = [
`انا عارف اني اوقات بزعلك وبتحسي اني مش مهتم، ومقدرش الومك على الاحساس ده.`,

`بس الحقيقة انك انتي اهم انسانه في حياتي.`,

`كل اللي حصل بينا خلى فيه شوية غموض وعدم وضوح، وانا عارف ده مضايقك.`,

`وانا بحاول اصلّح ده خطوة خطوة ونخلي كل حاجة بينا أوضح وأهدى…`
];

let i = 0;

function nextStep(){
  const text = document.getElementById("text");

  text.innerText = story[i];
  i++;

  if(i === story.length){
    document.querySelector("button").style.display = "none";
    document.getElementById("final").style.display = "block";
  }
}

/* init */
document.getElementById("text").innerText = "Ready… 💖";