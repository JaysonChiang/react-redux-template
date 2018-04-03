export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export function addNumber(num) {
    return { type: INCREMENT, num };
}

export function minuNumber(num) {
    return { type: DECREMENT, num };
}
