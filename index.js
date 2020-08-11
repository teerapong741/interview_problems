#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var redis = require('redis');
var fetchs = require('node-fetch');
var yargs = require('yargs');
var host = '127.0.0.1';
var port = '6379';
var client = redis.createClient(port, host); // this create a new client
var value;
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
//! Page ------------------------------------------------------------------------------------------------
var selectModePage = function () {
    console.log('\t\t\t\t-------------------------------------------------------------------------');
    console.log('\t\t\t\t|                                |                                      |');
    console.log('\t\t\t\t|       1.Easy Problems          |            2.Medium Problems         |');
    console.log('\t\t\t\t|                                |                                      |');
    console.log('\t\t\t\t-------------------------------------------------------------------------');
};
var selectItemEasyPage = function () {
    console.log('\t\t\t\t-------------------------------------------------------------------------');
    console.log('\t\t\t\t|                 |                         |                           |');
    console.log('\t\t\t\t|      Number     |          Name           |        Status Data        |');
    console.log('\t\t\t\t|                 |                         |                           |');
    console.log('\t\t\t\t-------------------------------------------------------------------------');
    client.LLEN("chioce2", function (err, reply) {
        if (reply > 0) {
            console.log('\t\t\t\t|        1)       |      Fizz and Buzz      |         No Data           |');
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|        2)       |        Leap year        |      Have information     |');
        }
        else {
            console.log('\t\t\t\t|        1)       |      Fizz and Buzz      |         No Data           |');
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|        2)       |        Leap year        |         No Data           |');
        }
    });
    client.LLEN("chioce3.1", function (err, reply) {
        if (reply > 0) {
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|      3.1)       |           *             |                           |');
            console.log('\t\t\t\t|                 |           **            |      Have information     |');
        }
        else {
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|      3.1)       |           *             |                           |');
            console.log('\t\t\t\t|                 |           **            |         No Data           |');
        }
    });
    client.LLEN("chioce3.2", function (err, reply) {
        if (reply > 0) {
            console.log('\t\t\t\t|                 |           ***           |                           |');
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|      3.2)       |             *           |                           |');
            console.log('\t\t\t\t|                 |            **           |      Have information     |');
        }
        else {
            console.log('\t\t\t\t|                 |           ***           |                           |');
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|      3.2)       |             *           |                           |');
            console.log('\t\t\t\t|                 |            **           |         No Data           |');
        }
    });
    client.LLEN("chioce3.3", function (err, reply) {
        if (reply > 0) {
            console.log('\t\t\t\t|                 |           ***           |                           |');
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|      3.3)       |            *            |                           |');
            console.log('\t\t\t\t|                 |           * *           |      Have information     |');
        }
        else {
            console.log('\t\t\t\t|                 |           ***           |                           |');
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|      3.3)       |            *            |                           |');
            console.log('\t\t\t\t|                 |           * *           |         No Data           |');
        }
    });
    client.LLEN("chioce3.4", function (err, reply) {
        if (reply > 0) {
            console.log('\t\t\t\t|                 |          *   *          |                           |');
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|      3.4)       |          *   *          |                           |');
            console.log('\t\t\t\t|                 |            *            |      Have information     |');
        }
        else {
            console.log('\t\t\t\t|                 |          *   *          |                           |');
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|      3.4)       |          *   *          |                           |');
            console.log('\t\t\t\t|                 |            *            |         No Data           |');
        }
    });
    client.LLEN("chioce3.5", function (err, reply) {
        if (reply > 0) {
            console.log('\t\t\t\t|                 |          *   *          |                           |');
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|      3.5)       |            *            |                           |');
            console.log('\t\t\t\t|                 |           ***           |      Have information     |');
        }
        else {
            console.log('\t\t\t\t|                 |          *   *          |                           |');
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|      3.5)       |            *            |                           |');
            console.log('\t\t\t\t|                 |           ***           |         No Data           |');
        }
    });
    client.LLEN("chioce3.6", function (err, reply) {
        if (reply > 0) {
            console.log('\t\t\t\t|                 |            *            |                           |');
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|      3.6)       |           A+B           |                           |  -----------------------');
            console.log('\t\t\t\t|                 |           +E+           |      Have information     |  |  "Delete All Data"  |');
            console.log('\t\t\t\t|                 |           C+D           |                           |  |        Enter 0      |');
            console.log('\t\t\t\t-------------------------------------------------------------------------  -----------------------');
        }
        else {
            console.log('\t\t\t\t|                 |            *            |                           |');
            console.log('\t\t\t\t|                 |                         |                           |');
            console.log('\t\t\t\t|      3.6)       |           A+B           |                           |  -----------------------');
            console.log('\t\t\t\t|                 |           +E+           |         No Data           |  |  "Delete All Data"  |');
            console.log('\t\t\t\t|                 |           C+D           |                           |  |        Enter 0      |');
            console.log('\t\t\t\t-------------------------------------------------------------------------  -----------------------');
        }
    });
};
var selectItemMediumPage = function () {
    console.log('\t\t\t\t-------------------------------------------------------------------------');
    console.log('\t\t\t\t|                 |                         |                           |');
    console.log('\t\t\t\t|      Number     |          Name           |        Status Data        |');
    console.log('\t\t\t\t|                 |                         |                           |');
    console.log('\t\t\t\t-------------------------------------------------------------------------');
    client.LLEN("chioce1", function (err, reply) {
        if (reply > 0) {
            console.log('\t\t\t\t|                 |                         |                           |  -----------------------');
            console.log('\t\t\t\t|        1)       |       Prime numbers     |      Have information     |  |  "Delete All Data"  |');
            console.log('\t\t\t\t|                 |                         |                           |  |        Enter 0      |');
            console.log('\t\t\t\t-------------------------------------------------------------------------  -----------------------');
        }
        else {
            console.log('\t\t\t\t|                 |                         |                           |  -----------------------');
            console.log('\t\t\t\t|        1)       |       Prime numbers     |         No Data           |  |  "Delete All Data"  |');
            console.log('\t\t\t\t|                 |                         |                           |  |        Enter 0      |');
            console.log('\t\t\t\t-------------------------------------------------------------------------  -----------------------');
        }
    });
};
var selectMenuPage = function (n) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('\t\t\t\t\t\t------------------------------------------------');
                console.log('\t\t\t\t\t\t|                    |                         |');
                console.log('\t\t\t\t\t\t|       Index        |          Input          |');
                console.log('\t\t\t\t\t\t|                    |                         |');
                console.log('\t\t\t\t\t\t------------------------------------------------');
                return [4 /*yield*/, client.LLEN("chioce" + n, function (err, reply) {
                        return __awaiter(this, void 0, void 0, function () {
                            var _loop_1, i;
                            return __generator(this, function (_a) {
                                _loop_1 = function (i) {
                                    client.LINDEX("chioce" + n, i, function (err, reply) {
                                        console.log("\t\t\t\t\t\t          " + (i + 1) + ")                      " + reply + "             ");
                                    });
                                };
                                for (i = 0; i < reply; i++) {
                                    _loop_1(i);
                                }
                                return [2 /*return*/];
                            });
                        });
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var selectMenuBottonPage = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("\t\t\t\t-----------------   -------------------   -------------------   --------------------");
        console.log('\t\t\t\t|     "Add"     |   |     "View"      |   |    "Delete"     |   |      "Exit"      |');
        console.log('\t\t\t\t|    Enter 1    |   |     Enter 2     |   |     Enter 3     |   |   Enter "Empty"  |');
        console.log('\t\t\t\t-----------------   -------------------   -------------------   --------------------');
        return [2 /*return*/];
    });
}); };
//! Page ------------------------------------------------------------------------------------------------
//! Process Chioce ------------------------------------------------------------------------------------------------
var EasyProcess = [];
var EasyProcess1 = function () {
    var nums = [];
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            nums.push('Fizz');
        }
        else if (i % 5 === 0 && i % 3 !== 0) {
            nums.push('Buzz');
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            nums.push('FizzBuzz');
        }
        else {
            nums.push(i);
        }
    }
    return nums;
};
EasyProcess['2'] = function (year) {
    var leapYear;
    if (year % 400 === 0) {
        leapYear = true;
    }
    else if (year % 400 !== 0 && year % 100 !== 0 && year % 4 == 0) {
        leapYear = true;
    }
    else
        (leapYear = false);
    return leapYear;
};
EasyProcess['3.1'] = function (n) {
    process.stdout.write('\n');
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            process.stdout.write("*");
        }
        process.stdout.write('\n');
    }
    process.stdout.write('\n');
};
EasyProcess['3.2'] = function (n) {
    process.stdout.write('\n');
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n - i; j++) {
            process.stdout.write(" ");
        }
        for (var k = 1; k <= i; k++) {
            process.stdout.write("*");
        }
        process.stdout.write('\n');
    }
    process.stdout.write('\n');
};
EasyProcess['3.3'] = function (n) {
    process.stdout.write('\n');
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n - i; j++) {
            process.stdout.write(" ");
        }
        for (var k = 1; k <= 2; k++) {
            if (i == 1) {
                process.stdout.write("*");
                for (var l = 1; l <= i - 1; l++) {
                    process.stdout.write("  ");
                }
                break;
            }
            else {
                process.stdout.write("*");
                for (var l = 1; l <= i - 1; l++) {
                    process.stdout.write("  ");
                }
            }
        }
        process.stdout.write('\n');
    }
    process.stdout.write('\n');
};
EasyProcess['3.4'] = function (n) {
    var countFirst = 0;
    var countEnd = n;
    process.stdout.write('\n');
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (countFirst == j || countEnd == j + 1) {
                process.stdout.write('*');
            }
            else {
                process.stdout.write(' ');
            }
        }
        countFirst++;
        countEnd--;
        process.stdout.write('\n');
    }
    process.stdout.write('\n');
};
EasyProcess['3.5'] = function (n) {
    var count;
    if (n % 2 == 0) {
        count = n / 2;
    }
    else {
        count = (n - 1) / 2;
    }
    var stateSpace = 0;
    var stateStar = 0;
    var space = count;
    var star = 1;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < space; j++) {
            process.stdout.write(' ');
        }
        for (var k = 0; k < star; k++) {
            process.stdout.write('*');
        }
        if (star <= n && stateStar === 0) {
            if (n % 2 == 0 && i + 1 >= n / 2 && i + 1 < (n / 2) + 1) {
                star = n - 1;
            }
            else {
                if (n % 2 == 0 && i + 2 > (n / 2) + 1) {
                    star -= 2;
                }
                else {
                    star += 2;
                }
            }
            if (star >= n || (star > n && i + 1 >= (n / 2) + 1)) {
                stateStar = 1;
            }
        }
        else if (stateStar === 1) {
            if (n % 2 == 0) {
                star -= 1;
            }
            else {
                star -= 2;
            }
        }
        if (space <= count && stateSpace === 0) {
            if (n % 2 == 0) {
                if (i + 1 < (n / 2)) {
                    space--;
                }
                else if (i + 1 >= (n / 2) || i + 1 <= (n / 2) + 1) {
                    space = 1;
                }
            }
            else {
                space--;
            }
            if ((space === 0 || i + 1 == n) || (i + 1 >= (n / 2))) {
                stateSpace = 1;
            }
        }
        else if (stateSpace === 1) {
            space++;
        }
        process.stdout.write('\n');
    }
};
EasyProcess['3.6'] = function (n) {
    var value = +n;
    var countEnd = n;
    var countPlus = 0;
    for (var i = 0; i < (value - 1) + value; i++) {
        for (var j = 0; j < countEnd - 1; j++) {
            if (i >= 0 && i < (n - 1)) {
                process.stdout.write('A');
            }
            else {
                process.stdout.write('C');
            }
        }
        for (var k = 0; k < 1; k++) {
            process.stdout.write('+');
        }
        for (var j = 0; j < countPlus - 1; j++) {
            process.stdout.write('E');
        }
        for (var k = 0; k < 1; k++) {
            if (i !== 0 && i !== value + (value - 2)) {
                process.stdout.write('+');
            }
        }
        for (var j = 0; j < countEnd - 1; j++) {
            if (i >= 0 && i < (n - 1)) {
                process.stdout.write('B');
            }
            else {
                process.stdout.write('D');
            }
        }
        if (countEnd >= 1 && i + 2 > n) {
            countEnd++;
            countPlus -= 2;
        }
        else {
            countEnd--;
            countPlus += 2;
        }
        process.stdout.write('\n');
    }
    process.stdout.write('\n');
};
var MediumProcess = function (n) {
    var arr = [];
    for (var i = 2; i <= n; i++) {
        var prime = 2;
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                break;
            }
            prime += 1;
        }
        if (prime > Math.floor(i / prime)) {
            arr.push(i);
        }
    }
    return arr;
};
//! Process Chioce ------------------------------------------------------------------------------------------------
//! Select ------------------------------------------------------------------------------------------------
var SelectMode = function (selectMode) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.clear();
        selectModePage();
        if (selectMode == true) {
            readline.question("Please select mode(Enter number): ", function (mode) {
                if (mode == 1) {
                    SelectItem(1, true);
                }
                else if (mode == 2) {
                    SelectItem(2, true);
                }
                else {
                    SelectMode(false);
                }
                return mode;
            });
        }
        else {
            readline.question("Please select mode again(Enter number): ", function (mode) {
                if (mode == 1) {
                    SelectItem(1, true);
                }
                else if (mode == 2) {
                    SelectItem(2, true);
                }
                else {
                    SelectMode(false);
                }
                return mode;
            });
        }
        return [2 /*return*/];
    });
}); };
var SelectItem = function (mode, statusMode) {
    console.clear();
    if (statusMode == true) {
        if (mode == 1) {
            selectItemEasyPage();
            var ShowMenu = function () {
                readline.question("\nPlease select item(Enter number): ", function (item) {
                    if (item >= 0 && item <= 3.6) {
                        if (item == 1) {
                            console.clear();
                            EasyChooseOne(true);
                        }
                        else if (item == 2) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 3.1) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 3.2) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 3.3) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 3.4) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 3.5) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 3.6) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 0) {
                            console.clear();
                            client.flushdb();
                            SelectItem(mode, false);
                        }
                        else {
                            SelectItem(mode, false);
                        }
                    }
                    else {
                        SelectMode(true);
                    }
                    return mode;
                });
            };
            setTimeout(ShowMenu, 500);
        }
        else if (mode == 2) {
            selectItemMediumPage();
            var ShowMenu = function () {
                readline.question("\nPlease select item(Enter number): ", function (item) {
                    if (item.toString() !== "") {
                        if (item == 1) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 0) {
                            console.clear();
                            client.FLUSHDB();
                            SelectItem(mode, false);
                        }
                        else {
                            SelectMode(true);
                        }
                    }
                    else {
                        SelectMode(true);
                    }
                    return mode;
                });
            };
            setTimeout(ShowMenu, 500);
        }
    }
    else {
        if (mode == 1) {
            selectItemEasyPage();
            var ShowMenu = function () {
                readline.question("\nPlease select item again(Enter number): ", function (item) {
                    if (item >= 0 && item < 3.7) {
                        if (item == 1) {
                            console.clear();
                            EasyChooseOne(true);
                        }
                        else if (item == 2) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 3.1) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 3.2) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 3.3) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 3.4) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 3.5) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 3.6) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 0) {
                            console.clear();
                            client.FLUSHDB();
                            SelectItem(mode, false);
                        }
                        else {
                            SelectItem(mode, false);
                        }
                    }
                    else {
                        SelectMode(true);
                    }
                    return mode;
                });
            };
            setTimeout(ShowMenu, 500);
        }
        else if (mode == 2) {
            selectItemMediumPage();
            var ShowMenu = function () {
                readline.question("\nPlease select item again(Enter number): ", function (item) {
                    if (item.toString() !== "") {
                        if (item == 1) {
                            console.clear();
                            MenuChoose(mode, true, item);
                        }
                        else if (item == 0) {
                            console.clear();
                            client.FLUSHDB();
                            SelectItem(mode, false);
                        }
                        else {
                            SelectMode(true);
                        }
                    }
                    else {
                        SelectMode(true);
                    }
                    return mode;
                });
            };
            setTimeout(ShowMenu, 500);
        }
    }
};
//! Select ------------------------------------------------------------------------------------------------
//! Menu ------------------------------------------------------------------------------------------------
var MenuChoose = function (mode, statusMode, n) { return __awaiter(_this, void 0, void 0, function () {
    var ShowMenu, ShowMenu;
    return __generator(this, function (_a) {
        console.clear();
        selectMenuBottonPage();
        selectMenuPage(n);
        if (statusMode == true) {
            ShowMenu = function () {
                readline.question("\nPlease enter (1=add, 2=view, 3=delete, Empty=exist): ", function (item) {
                    if (item == 1 && mode == 1) {
                        console.clear();
                        EasyChoose(true, n);
                    }
                    else if (item == 1 && mode == 2) {
                        console.clear();
                        MediumChooseOne(true, n);
                    }
                    else if (item == 2) {
                        console.clear();
                        selectMenuPage(n);
                        MenuView(mode, true, n);
                    }
                    else if (item == 3) {
                        console.clear();
                        MenuDelete(mode, true, n);
                    }
                    else if (item == "") {
                        console.clear();
                        SelectMode(true);
                    }
                    else {
                        MenuChoose(mode, false, n);
                    }
                    return item;
                });
            };
            setTimeout(ShowMenu, 500);
        }
        else {
            ShowMenu = function () {
                readline.question("\nPlease enter again(1=add, 2=view, 3=delete, Empty=exist): ", function (item) {
                    if (item == 1) {
                        console.clear();
                        EasyChoose(true, n);
                    }
                    else if (item == 2) {
                        console.clear();
                        selectMenuPage(n);
                        MenuView(mode, true, n);
                    }
                    else if (item == 3) {
                        console.clear();
                        MenuDelete(mode, true, n);
                    }
                    else if (item == "") {
                        console.clear();
                        SelectMode(true);
                    }
                    else {
                        MenuChoose(mode, false, n);
                    }
                    return item;
                });
            };
            setTimeout(ShowMenu, 500);
        }
        return [2 /*return*/];
    });
}); };
var MenuView = function (mode, statusMode, n) { return __awaiter(_this, void 0, void 0, function () {
    var ShowMenu;
    return __generator(this, function (_a) {
        if (statusMode == true) {
            ShowMenu = function () {
                readline.question("\nPlease enter index(Enter \"Empty\" to exit): ", function (item) {
                    if (item == "") {
                        SelectMode(true);
                    }
                    else {
                        if (n == 2) {
                            client.LINDEX("chioce" + n, item - 1, function (err, reply) {
                                console.log("Year " + reply + " --> " + EasyProcess[n.toString()](reply));
                                MenuView(mode, true, n);
                            });
                        }
                        else {
                            if (n == 1 && mode == 2) {
                                client.LINDEX("chioce" + n, item - 1, function (err, reply) {
                                    console.log(MediumProcess(reply));
                                    MenuView(mode, true, n);
                                });
                            }
                            else {
                                client.LINDEX("chioce" + n, item - 1, function (err, reply) {
                                    console.log(EasyProcess[n.toString()](reply));
                                    MenuView(mode, true, n);
                                });
                            }
                        }
                    }
                    return item;
                });
            };
            setTimeout(ShowMenu, 500);
        }
        else { }
        return [2 /*return*/];
    });
}); };
var MenuDelete = function (mode, statusMode, n) { return __awaiter(_this, void 0, void 0, function () {
    var ShowMenu;
    return __generator(this, function (_a) {
        console.clear();
        selectMenuPage(n);
        if (statusMode == true) {
            ShowMenu = function () {
                readline.question("\nPlease enter index(Enter \"Empty\" to exit): ", function (item) {
                    if (item == "") {
                        SelectMode(true);
                    }
                    else {
                        client.LLEN("chioce" + n, function (err, reply) {
                            if (reply > 0) {
                                client.LINDEX("chioce" + n, item - 1, function (err, reply) {
                                    if (reply !== null) {
                                        client.lrem("chioce" + n, item - 1, reply);
                                        MenuDelete(mode, true, n);
                                    }
                                    else {
                                        MenuDelete(mode, true, n);
                                    }
                                });
                            }
                            else {
                                MenuChoose(mode, true, n);
                            }
                        });
                    }
                    return item;
                });
            };
            setTimeout(ShowMenu, 500);
        }
        else { }
        return [2 /*return*/];
    });
}); };
//! Menu ------------------------------------------------------------------------------------------------
//! Chioce Add Add ------------------------------------------------------------------------------------------------
var EasyChooseOne = function (statusMode) {
    console.clear();
    if (statusMode == true) {
        console.log(EasyProcess1());
        readline.question("\nRun again enter \"1\" : No enter other characters: ", function (item) {
            if (item == 1) {
                EasyChooseOne(true);
            }
            else {
                SelectMode(true);
            }
            return item;
        });
    }
    else { }
};
var EasyChoose = function (statusMode, n) {
    if (statusMode == true) {
        readline.question("\nPlease enter number(Exis enter empty): ", function (item) {
            if (item.toString() !== "") {
                if (+item !== NaN) {
                    if (n == 2) {
                        console.log("Year " + item + " --> " + EasyProcess[n.toString()](item));
                        client.rpush("chioce" + n, item);
                    }
                    else {
                        console.log(EasyProcess[n.toString()](item));
                        client.rpush("chioce" + n, item);
                    }
                    EasyChoose(true, n);
                }
                else {
                    EasyChoose(false, n);
                }
            }
            else {
                SelectMode(true);
            }
            return item;
        });
    }
    else {
        readline.question("\nPlease enter number again(Exis enter empty): ", function (item) {
            if (item !== null) {
                if (+item !== NaN) {
                    if (n == 2) {
                        console.log("Year " + item + " --> " + EasyProcess[n.toString()](item));
                        client.rpush("chioce" + n, item);
                    }
                    else {
                        console.log(EasyProcess[n.toString()](item));
                        client.rpush("chioce" + n, item);
                    }
                    EasyChoose(true, n);
                }
                else {
                    EasyChoose(false, n);
                }
            }
            else {
                SelectMode(true);
            }
            return item;
        });
    }
};
var MediumChooseOne = function (statusMode, n) {
    if (statusMode == true) {
        readline.question("\nPlease enter number(Exis enter empty): ", function (item) {
            var number = parseInt(item.toString(), 10);
            if (item.toString() !== "") {
                if (!isNaN(number)) {
                    console.log("n: " + number + " --> " + MediumProcess(number));
                    client.rpush("chioce" + n, item);
                    MediumChooseOne(true, n);
                }
                else {
                    MediumChooseOne(false, n);
                }
            }
            else {
                SelectMode(true);
            }
            return item;
        });
    }
    else {
        readline.question("\nPlease enter number again(Exis enter empty): ", function (item) {
            var number = parseInt(item.toString(), 10);
            if (item.toString() !== "") {
                if (!isNaN(number)) {
                    console.log("n: " + number + " --> " + MediumProcess(number));
                    MediumChooseOne(true, n);
                }
                else {
                    MediumChooseOne(false, n);
                }
            }
            else {
                SelectMode(true);
            }
            return item;
        });
    }
};
//! Chioce Add ------------------------------------------------------------------------------------------------
//! Main ------------------------------------------------------------------------------------------------
var Nav = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, SelectMode(true)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
client.on('connect', function () { });
client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});
Nav();
//! Main ------------------------------------------------------------------------------------------------
