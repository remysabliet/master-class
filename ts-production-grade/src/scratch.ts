// @ts-expect-error
const num1: number = 1;

// @ts-ignore
const num2: number = 'lol';

function somethingRisky() {}

class NetworkError extends Error {
  rootcause: string = '';
}

try {
  somethingRisky();
} catch (err: unknown) {
  if (err instanceof NetworkError) {
    console.log(err.rootcause);
  } else if (err instanceof Error) {
    console.log(err.stack);
  } else {
  }
}
