export const animate = (element, name) => {
  setTimeout(() => {
    element.style.animation = "";
  }, 500);
  element.style.animation = `${name} .5s ease both`;
};
