document.getElementById("grandparent").addEventListener(
  "click",
  () => alert("Grandparent - Capturing"),
  true
);

document.getElementById("parent").addEventListener(
  "click",
  () => alert("Parent - Capturing"),
  true
);

document.getElementById("child").addEventListener(
  "click",
  () => alert("Child - Bubbling")
);

document.getElementById("parent").addEventListener(
  "click",
  () => alert("Parent - Bubbling")
);

document.getElementById("grandparent").addEventListener(
  "click",
  () => alert("Grandparent - Bubbling")
);

