const [useProvideScore, useScore] = createInjectionState(() => {
  const score = ref(0)

  function increment() {
    score.value += 1
  }

  return {
    score,
    increment,
  }
})

export { useProvideScore, useScore }
