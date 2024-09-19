const sum = require("./index")

test("add 1 and 2 to equal 3", () => {
    const result = sum(1,2)
    expect(result).toBe(3)
})