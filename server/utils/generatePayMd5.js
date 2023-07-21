"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
function generatePayMd5(str) {
    const md5 = crypto_1.default.createHash('md5').update(str).digest('hex');
    return md5;
}

exports.default = generatePayMd5;
//# sourceMappingURL=generatePayMd5.js.map