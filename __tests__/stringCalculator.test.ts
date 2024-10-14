import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
    it("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    it("should return the number itself if only one number is provided", () => {
        expect(add("1")).toBe(1);
    });

    it("should return the sum of two numbers separated by a comma", () => {
        expect(add("1,2")).toBe(3);
    });

    it("should handle multiple numbers separated by commas", () => {
        expect(add("1,2,3,4,5")).toBe(15);
    });

    it("should handle newlines as delimiters", () => {
        expect(add("1\n2,3")).toBe(6);
    });

    it("should handle custom delimiters", () => {
        expect(add("//;\n1;2;3")).toBe(6);
    });

});