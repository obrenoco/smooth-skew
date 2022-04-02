let skewSetter = gsap.quickTo("img", "skewY"), // fast
  clamp = gsap.utils.clamp(-15, 15); // don't let the skew go beyond 20 degrees.

ScrollSmoother.create({
  wrapper: "#wrapper",
  content: "#content",
  smooth: 1,
  smoothTouch: 0.05,
  effects: true,
  onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
  onStop: () => skewSetter(0)
});
