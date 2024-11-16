const btnEl = document.querySelector("#movingButton");

btnEl.addEventListener("mouseover", (e) => {
  const viewportWidth = globalThis.innerWidth;
  const viewportHeight = globalThis.innerHeight;

  console.log(viewportWidth, viewportHeight);

  const randomX = Math.random() * (viewportWidth - btnEl.offsetWidth);
  const randomY = Math.random() * (viewportHeight - btnEl.offsetHeight);

  btnEl.style.left = `${randomX}px`;
  btnEl.style.top = `${randomY}px`;
});
