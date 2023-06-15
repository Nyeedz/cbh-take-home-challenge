const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey when provided in the event object", () => {
    const event = {
      partitionKey: "abc123",
    };
    const key = deterministicPartitionKey(event);
    expect(key).toBe("abc123");
  });

  it("Generates a hash when partitionKey is not provided in the event object", () => {
    const event = {
      name: "John Doe",
      age: 25,
    };
    const expectedHash = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    const key = deterministicPartitionKey(event);
    expect(key).toBe(expectedHash);
  });

  it("Stringifies the candidate if it's not a string", () => {
    const event = {
      partitionKey: 123,
    };
    const expectedKey = JSON.stringify(123);
    const key = deterministicPartitionKey(event);
    expect(key).toBe(expectedKey);
  });

  it("Generates a hash if candidate length exceeds MAX_PARTITION_KEY_LENGTH", () => {
    const longString = "a".repeat(300);
    const expectedHash = crypto
      .createHash("sha3-512")
      .update(longString)
      .digest("hex");
    const event = {
      partitionKey: longString,
    };
    const key = deterministicPartitionKey(event);
    expect(key).toBe(expectedHash);
  });
});
