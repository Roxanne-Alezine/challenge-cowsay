
import 'dotenv/config';

import cowsay from 'cowsay';

console.log(cowsay.say({
    text: `Hello, I am ${process.env.DB_NAME}, from ${process.env.DB_CAMPUS}`,
    e: "oO",
    T: "U "
}));
