const expect = require("expect");

const { generateMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate the correct message object", () => {
    const res = generateMessage("User1", "This is a test message.");
    expect(res.from).toBe("User1");
    expect(res.text).toBe("This is a test message.");
    expect(typeof res.createdAt).toBe("number");
  });
});
