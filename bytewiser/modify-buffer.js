// . => 46 => 0x2e
// ! => 33 => 0x21
process.stdin.on("data", (buf) => {
    for(i = 0; i < buf.length; i++) {
        if(buf[i] === 46)
            buf.write('!', i);
    }
    console.log(buf)
});