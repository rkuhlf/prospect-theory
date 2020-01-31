export function positiveWeighting(p, gamma) {
  let gamma = gamma || 0.61;

  const numerator = Math.pow(p, gamma);
  const denominator = Math.pow(numerator + Math.pow(1 - p, gamma), 1 / gamma);

  return numerator / denominator;
}

export function negativeWeighting(p, delta) {
  let delta = delta || 0.69;
  const numerator = Math.pow(p, delta);
  const denominator = Math.pow(numerator + Math.pow(1 - p, delta), 1 / delta);

  return numerator / denominator;
}

export function valueFunction(x, lambda, gamma, delta) {
  let lambda = lambda || 2.25;
  if (x > 0) {
    return positiveValue(x, gamma);
  } else if (x === 0) {
    return 0;
  } else {
    return lambda * lossValue(x, delta); // calling this function might not work
  }
}

export function positiveValue(x, alpha) {
  let alpha = alpha || 0.88;

  if (alpha > 0) {
    return Math.pow(x, alpha);
  } else if (alpha === 0) {
    return this.getNaturalLog(x);
  } else {
    return 1 - Math.pow(1 + x, alpha);
  }
}

export function lossValue(x, beta) {
  let beta = beta || 0.88;

  if (beta > 0) {
    return -Math.pow(-x, beta);
  } else if (beta === 0) {
    return -this.getNaturalLog(-x);
  } else {
    return Math.pow(1 - x, beta) - 1;
  }
}

function getNaturalLog(x) {
  let euler = Math.exp(1);
  return Math.log(x) / Math.log(euler);
}

// rewrite all functions to only take optional arguments with K&W presets
// export functions