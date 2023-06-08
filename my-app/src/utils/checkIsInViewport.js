// checkIsInViewport
//element가 viewport안에 있는지 확인하는 로직
export const checkIsInViewport = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
};
