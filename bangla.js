#!/usr/bin/env node

const fs = require("fs");

function runBangla(code) {
    let translated = code
        .replace(/ধরি/g, "let")
        .replace(/আর-যদি/g, "else if")
        .replace(/যদি/g, "if")
        .replace(/নয়তো/g, "else")
        .replace(/যতক্ষণ/g, "while")
        .replace(/দেখাও/g, "console.log")
        .replace(/ফাংশন/g, "function")
        .replace(/ফিরাও/g, "return");

    //console.log(translated)
    return eval(translated);
}

// CLI ব্যবহার
if (require.main === module) {
    const file = process.argv[2];
    if (!file) {
        console.error("⚠️  ব্যবহার: bangla <filename.blang>");
        process.exit(1);
    }

    const code = fs.readFileSync(file, "utf8");
    runBangla(code);
}
