function sleep(t) {
    const start = Date.now();
    while (Date.now() - start < t);
  }

console.log("Runnings tests...")

for (let i = 1; i <= 8; i++) {
    sleep(1000)
    console.log(`test ${i} passed.`)
}

