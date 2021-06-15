import { Transform } from 'stream';

export interface ComposedFunction<I = unknown, O = unknown> {
    (input: I): O;
}

export function toStream<I = unknown, O = unknown>(fn: (arg: I) => O): Transform {
    return new Transform({
        allowHalfOpen: false,
        decodeStrings: false,
        highWaterMark: 1,
        objectMode: true,
        transform(arg: I, _, cb) {
            try {
                cb(undefined, fn(arg));
            } catch (err) {
                cb(err);
            }
        },
    });
}

toStream(() => 3)
    .pipe(toStream((v) => console.log(v)))
    .read();
