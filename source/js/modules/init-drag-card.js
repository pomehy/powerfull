const beforeAfterCards = document.querySelectorAll('[data-ba-card="parent"]');

const initDraggableCards = () => {
  if (!beforeAfterCards.length) {
    return;
  }

  for (let i = 0; i < beforeAfterCards.length; i++) {
    let dragger = beforeAfterCards[i].querySelector('[data-ba-card="dragger"]');
    let imageWrapper = beforeAfterCards[i].querySelector('[data-ba-card="image-wrapper"]');
    let imageAfter = beforeAfterCards[i].querySelector('[data-ba-card="image-after"]');
    gsap.set(dragger, {xPercent: 50});

    // eslint-disable-next-line no-undef
    Draggable.create(dragger, {
      type: 'x',
      bounds: imageWrapper,
      onDrag: function () {
        let widthContainer = gsap.getProperty(imageWrapper, "width");
        console.log(widthContainer);
        let x = widthContainer / 2 - gsap.getProperty(this.target, 'x');
        gsap.set(imageAfter, {
          clipPath: `inset(0px ${x}px 0px 0px)`
        });
      },
      onPress: function () {
          gsap.to(this.target, {
            opacity: 0.8,
          });
      },

    });
  }
};

export {
  initDraggableCards
};
