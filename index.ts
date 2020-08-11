#!/usr/bin/env node
const redis = require('redis');
const fetchs = require('node-fetch');
const yargs = require('yargs');

const host:string = '127.0.0.1'
const port:string = '6379'
const client = redis.createClient(port, host); // this create a new client

let value: any 
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

//! Page ------------------------------------------------------------------------------------------------

const selectModePage = () => {
    console.log('\t\t\t\t-------------------------------------------------------------------------')
    console.log('\t\t\t\t|                                |                                      |')
    console.log('\t\t\t\t|       1.Easy Problems          |            2.Medium Problems         |')
    console.log('\t\t\t\t|                                |                                      |')
    console.log('\t\t\t\t-------------------------------------------------------------------------')
}

const selectItemEasyPage = () => {
    console.log('\t\t\t\t-------------------------------------------------------------------------')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      Number     |          Name           |        Status Data        |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t-------------------------------------------------------------------------')
    
    client.LLEN(`chioce2`, function(err, reply) {
        if(reply > 0) {
    console.log('\t\t\t\t|        1)       |      Fizz and Buzz      |         No Data           |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|        2)       |        Leap year        |      Have information     |')
        }else{
    console.log('\t\t\t\t|        1)       |      Fizz and Buzz      |         No Data           |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|        2)       |        Leap year        |         No Data           |')
        }
    })
    client.LLEN(`chioce3.1`, function(err, reply) {
        if(reply > 0) {
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      3.1)       |           *             |                           |')
    console.log('\t\t\t\t|                 |           **            |      Have information     |')
        }else{
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      3.1)       |           *             |                           |')
    console.log('\t\t\t\t|                 |           **            |         No Data           |')
        }
    })
    
    client.LLEN(`chioce3.2`, function(err, reply) {
        if(reply > 0) {
    console.log('\t\t\t\t|                 |           ***           |                           |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      3.2)       |             *           |                           |')
    console.log('\t\t\t\t|                 |            **           |      Have information     |')
        }else{
    console.log('\t\t\t\t|                 |           ***           |                           |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      3.2)       |             *           |                           |')
    console.log('\t\t\t\t|                 |            **           |         No Data           |')
        }
    })
    
    client.LLEN(`chioce3.3`, function(err, reply) {
        if(reply > 0) {
    console.log('\t\t\t\t|                 |           ***           |                           |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      3.3)       |            *            |                           |')
    console.log('\t\t\t\t|                 |           * *           |      Have information     |')
        }else{
    console.log('\t\t\t\t|                 |           ***           |                           |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      3.3)       |            *            |                           |')
    console.log('\t\t\t\t|                 |           * *           |         No Data           |')
        }
    })
    
    client.LLEN(`chioce3.4`, function(err, reply) {
        if(reply > 0) {
    console.log('\t\t\t\t|                 |          *   *          |                           |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      3.4)       |          *   *          |                           |')
    console.log('\t\t\t\t|                 |            *            |      Have information     |')
        }else{
    console.log('\t\t\t\t|                 |          *   *          |                           |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      3.4)       |          *   *          |                           |')
    console.log('\t\t\t\t|                 |            *            |         No Data           |')
        }
    })
    
    client.LLEN(`chioce3.5`, function(err, reply) {
        if(reply > 0) {
    console.log('\t\t\t\t|                 |          *   *          |                           |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      3.5)       |            *            |                           |')
    console.log('\t\t\t\t|                 |           ***           |      Have information     |')
        }else{
    console.log('\t\t\t\t|                 |          *   *          |                           |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      3.5)       |            *            |                           |')
    console.log('\t\t\t\t|                 |           ***           |         No Data           |')
        }
    })
    
    client.LLEN(`chioce3.6`, function(err, reply) {
        if(reply > 0) {
    console.log('\t\t\t\t|                 |            *            |                           |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      3.6)       |           A+B           |                           |  -----------------------')
    console.log('\t\t\t\t|                 |           +E+           |      Have information     |  |  "Delete All Data"  |')
    console.log('\t\t\t\t|                 |           C+D           |                           |  |        Enter 0      |')
    console.log('\t\t\t\t-------------------------------------------------------------------------  -----------------------')
        }else{
    console.log('\t\t\t\t|                 |            *            |                           |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      3.6)       |           A+B           |                           |  -----------------------')
    console.log('\t\t\t\t|                 |           +E+           |         No Data           |  |  "Delete All Data"  |')
    console.log('\t\t\t\t|                 |           C+D           |                           |  |        Enter 0      |')
    console.log('\t\t\t\t-------------------------------------------------------------------------  -----------------------')
        }
    })
    
}

const selectItemMediumPage = () => {
    console.log('\t\t\t\t-------------------------------------------------------------------------')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t|      Number     |          Name           |        Status Data        |')
    console.log('\t\t\t\t|                 |                         |                           |')
    console.log('\t\t\t\t-------------------------------------------------------------------------')
    
    client.LLEN(`chioce1`, function(err, reply) {
        if(reply > 0) {
    console.log('\t\t\t\t|                 |                         |                           |  -----------------------')
    console.log('\t\t\t\t|        1)       |       Prime numbers     |      Have information     |  |  "Delete All Data"  |')
    console.log('\t\t\t\t|                 |                         |                           |  |        Enter 0      |')
    console.log('\t\t\t\t-------------------------------------------------------------------------  -----------------------')
        }else{
    console.log('\t\t\t\t|                 |                         |                           |  -----------------------')
    console.log('\t\t\t\t|        1)       |       Prime numbers     |         No Data           |  |  "Delete All Data"  |')
    console.log('\t\t\t\t|                 |                         |                           |  |        Enter 0      |')
    console.log('\t\t\t\t-------------------------------------------------------------------------  -----------------------')
        }
    })
    
}

const selectMenuPage = async (n) => {
    console.log('\t\t\t\t\t\t------------------------------------------------')
    console.log('\t\t\t\t\t\t|                    |                         |')
    console.log('\t\t\t\t\t\t|       Index        |          Input          |')
    console.log('\t\t\t\t\t\t|                    |                         |')
    console.log('\t\t\t\t\t\t------------------------------------------------')
    await client.LLEN(`chioce${n}`,async function(err, reply) {
    for (let i=0 ; i<reply; i++) {
            client.LINDEX(`chioce${n}`, i, function(err, reply) {
                console.log(`\t\t\t\t\t\t          ${i+1})                      ${reply}             `);
            })
        }
    })
}

const selectMenuBottonPage = async () => {
    console.log(`\t\t\t\t-----------------   -------------------   -------------------   --------------------`)
    console.log('\t\t\t\t|     "Add"     |   |     "View"      |   |    "Delete"     |   |      "Exit"      |')
    console.log('\t\t\t\t|    Enter 1    |   |     Enter 2     |   |     Enter 3     |   |   Enter "Empty"  |')
    console.log('\t\t\t\t-----------------   -------------------   -------------------   --------------------')
}

//! Page ------------------------------------------------------------------------------------------------

//! Process Chioce ------------------------------------------------------------------------------------------------
const EasyProcess= [];

const EasyProcess1 = () => {
    let nums: any[] = []

    for(let i = 1; i<=100; i++) {
        if (i%3 === 0 && i%5 !== 0) {
            nums.push('Fizz')
        } else if (i%5 === 0 && i%3 !== 0) {
            nums.push('Buzz')
        } else if (i%3 === 0 && i%5 === 0) {
            nums.push('FizzBuzz')
        } else {
            nums.push(i)
        }
    }
    return nums
}

EasyProcess['2'] = (year) => {
    let leapYear: boolean
    if (year%400 === 0 ) {
        leapYear = true
    }else if(year%400 !== 0 && year%100 !==0 && year%4 ==0) {
        leapYear = true
    } else (
        leapYear = false
    )

    return leapYear
}

EasyProcess['3.1'] = (n) => {
    process.stdout.write('\n')
    for (let i = 1; i<=n; i++) {
        for(let j = 1; j<=i; j++) {
            process.stdout.write("*");
        }
        process.stdout.write('\n')
    }
    process.stdout.write('\n')
}

EasyProcess['3.2'] = (n) => {
    process.stdout.write('\n')
    for (let i = 1; i<=n; i++) {
        for(let j = 1; j<=n-i; j++) {
            process.stdout.write(" ");
        }
        for(let k = 1; k<=i; k++) {
            process.stdout.write("*");
        }
        process.stdout.write('\n')
    }
    process.stdout.write('\n')
}

EasyProcess['3.3'] = (n) => {
    process.stdout.write('\n')
    for (let i = 1; i<=n; i++) {

        for(let j = 1; j<=n-i; j++) {
            process.stdout.write(" ");
        }
        for(let k = 1; k<=2; k++) {
            if (i==1) {
                process.stdout.write("*");
                for(let l = 1; l<=i-1; l++) {
                    process.stdout.write("  ")
                }
                break
            } else {
                process.stdout.write("*");
                for(let l = 1; l<=i-1; l++) {
                    process.stdout.write("  ")
                }
            }
            
        }
        process.stdout.write('\n')
    }
    process.stdout.write('\n')
}

EasyProcess['3.4'] = (n) => {
    let countFirst = 0
    let countEnd = n
    process.stdout.write('\n')
    for (let i = 0; i<n; i++) {
        for (let j = 0; j<n; j++) {
            if(countFirst == j || countEnd == j+1) {
                process.stdout.write('*')
            } else {
                process.stdout.write(' ')
            }
        }
        countFirst++
        countEnd--
        process.stdout.write('\n')
    }
    process.stdout.write('\n')
}

EasyProcess['3.5'] = (n) => {
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
}

EasyProcess['3.6'] = (n) => {
    let value = +n
    var countEnd = n;
    var countPlus = 0;
    for (var i = 0; i < (value-1)+value; i++) {
        for (let j = 0; j<countEnd-1; j++) {
            if (i >= 0 && i < (n-1)) {
                process.stdout.write('A')
            } else {
                process.stdout.write('C')
            }
        }
        for (let k = 0; k<1; k++) {
            process.stdout.write('+')
        }
        for (let j = 0; j<countPlus-1; j++) {
            process.stdout.write('E')
        }
        for (let k = 0; k<1; k++) {
            if (i !== 0 && i !== value+(value-2)) {
                process.stdout.write('+')
            }
        }
        for (let j = 0; j<countEnd-1; j++) {
            if (i >= 0 && i < (n-1)) {
                process.stdout.write('B')
            } else {
                process.stdout.write('D')
            }
        }
        
        if (countEnd >= 1 && i+2 > n) {
            countEnd++
            countPlus-=2
        } else {
            countEnd--
            countPlus+=2
        }
        process.stdout.write('\n');
    }
    process.stdout.write('\n');
}

const MediumProcess = (n) => {
    const arr = []
    for (let i = 2; i<=n; i++) {
        let prime = 2
        for (let j = 2; j<i; j++) {
            if (i%j === 0) {
                break
            }
            prime += 1
        }
        if (prime>Math.floor(i/prime)) {
            arr.push(i)
        }
    }
    return arr
}

//! Process Chioce ------------------------------------------------------------------------------------------------


//! Select ------------------------------------------------------------------------------------------------
const SelectMode = async (selectMode: boolean) => {
    console.clear();
    selectModePage();
    if (selectMode == true) {
        readline.question(`Please select mode(Enter number): `, (mode: number) => {
            if (mode == 1) {
                SelectItem(1, true)
            } else if (mode == 2) {
                SelectItem(2, true)
            } else {
                SelectMode(false)
            }
            return mode
        })
    } else {
        readline.question(`Please select mode again(Enter number): `, (mode: number) => {
            if (mode == 1) {
                SelectItem(1, true)
            } else if (mode == 2) {
                SelectItem(2, true)
            } else {
                SelectMode(false)
            }
            return mode
        })
    }
}

const SelectItem = (mode: number, statusMode: boolean) => {
    console.clear();
    if (statusMode == true) {
        if (mode == 1) {
            selectItemEasyPage()
            const ShowMenu = () => {
                readline.question(`\nPlease select item(Enter number): `, (item: number) => {
                    if (item >= 0 && item <= 3.6) {
                        if (item == 1) {
                            console.clear();
                            EasyChooseOne(true)
                        } else if (item == 2) {
                            console.clear();
                            MenuChoose(mode, true, item)
                        } else if (item == 3.1) {
                            console.clear();
                            MenuChoose(mode, true, item)
                        } else if (item == 3.2) {
                            console.clear();
                            MenuChoose(mode, true, item)
                        } else if (item == 3.3) {
                            console.clear();
                            MenuChoose(mode, true, item)
                        } else if (item == 3.4) {
                            console.clear();
                            MenuChoose(mode, true, item)
                        } else if (item == 3.5) {
                            console.clear();
                            MenuChoose(mode, true, item)
                        } else if (item == 3.6) {
                            console.clear();
                            MenuChoose(mode, true, item)
                        } else if (item == 0) {
                            console.clear();
                            client.flushdb()
                            SelectItem(mode, false)
                        } else {
                            SelectItem(mode, false)
                        }
                    } else {
                        SelectMode(true)
                    }
                    return mode
                })
            }
            setTimeout(ShowMenu, 500)
        } else if (mode == 2) {
            selectItemMediumPage()
            const ShowMenu = () => {
                readline.question(`\nPlease select item(Enter number): `, (item: number) => {
                    if (item.toString() !== "") {
                        if (item == 1) {
                            console.clear();
                            MenuChoose(mode, true, item)
                        } else if (item == 0 ) {
                            console.clear();
                           client.FLUSHDB()
                           SelectItem(mode, false)
                        } else {
                            SelectMode(true)
                        }
                    } else {
                        SelectMode(true)
                    }
                    return mode
                })
            }
            setTimeout(ShowMenu, 500)
        }
    } else {
        if (mode == 1) {
            selectItemEasyPage()
            const ShowMenu = () => {
                readline.question(`\nPlease select item again(Enter number): `, (item: number) => {
                    if (item >= 0 && item < 3.7) {
                        if (item == 1) {
                            console.clear();
                            EasyChooseOne(true)
                        } else if (item == 2) {
                            console.clear();
                            MenuChoose(mode,true, item)
                        } else if (item == 3.1) {
                            console.clear();
                            MenuChoose(mode,true, item)
                        } else if (item == 3.2) {
                            console.clear();
                            MenuChoose(mode,true, item)
                        } else if (item == 3.3) {
                            console.clear();
                            MenuChoose(mode,true, item)
                        } else if (item == 3.4) {
                            console.clear();
                            MenuChoose(mode,true, item)
                        } else if (item == 3.5) {
                            console.clear();
                            MenuChoose(mode, true, item)
                        } else if (item == 3.6) {
                            console.clear();
                            MenuChoose(mode, true, item)
                        } else if (item == 0) {
                            console.clear();
                            client.FLUSHDB()
                            SelectItem(mode, false)
                        } else {
                            SelectItem(mode, false)
                        }
                    } else {
                        SelectMode(true)
                    }
                    return mode
                })
            }
        setTimeout(ShowMenu, 500)
        } else if (mode == 2) {
            selectItemMediumPage()
            const ShowMenu = () => {
                readline.question(`\nPlease select item again(Enter number): `, (item: number) => {
                    if (item.toString() !== "") {
                        if (item == 1) {
                            console.clear();
                            MenuChoose(mode, true, item)
                        } else if (item == 0 ) {
                            console.clear();
                            client.FLUSHDB()
                            SelectItem(mode, false)
                        } else {
                            SelectMode(true)
                        }
                    } else {
                        SelectMode(true)
                    }
                    return mode
                })
            }
            setTimeout(ShowMenu, 500)
        }
    }
}
//! Select ------------------------------------------------------------------------------------------------

//! Menu ------------------------------------------------------------------------------------------------

const MenuChoose = async (mode: number, statusMode: boolean, n: number) => {
    console.clear();
    selectMenuBottonPage();
    selectMenuPage(n);
    if (statusMode == true) {
        const ShowMenu = () => {
            readline.question(`\nPlease enter (1=add, 2=view, 3=delete, Empty=exist): `, (item: any) => {
                if (item == 1 && mode == 1) {
                    console.clear();
                    EasyChoose(true, n)
                } else if (item == 1 && mode == 2) {
                    console.clear();
                    MediumChooseOne(true, n)
                } else if (item == 2) {
                    console.clear();
                    selectMenuPage(n)
                    MenuView(mode, true, n)
                } else if (item == 3) {
                    console.clear();
                    MenuDelete(mode, true, n)
                } else if (item == ""){
                    console.clear();
                    SelectMode(true)
                } else {
                    MenuChoose(mode, false, n)
                }
                return item
            })
        }
        setTimeout(ShowMenu, 500)
    } else {
        const ShowMenu = () => {
            readline.question(`\nPlease enter again(1=add, 2=view, 3=delete, Empty=exist): `, (item: any) => {
                if (item == 1) {
                    console.clear();
                    EasyChoose(true, n)
                } else if (item == 2) {
                    console.clear();
                    selectMenuPage(n)
                    MenuView(mode, true, n)
                } else if (item == 3) {
                    console.clear();
                    MenuDelete(mode, true, n)
                } else if (item == ""){
                    console.clear();
                    SelectMode(true)
                } else {
                    MenuChoose(mode, false, n)
                }
                return item
            })
        }
        setTimeout(ShowMenu, 500)
    }
}

const MenuView = async (mode: number , statusMode: boolean, n: number) => {
    if (statusMode == true) {
        const ShowMenu = () => {
            readline.question(`\nPlease enter index(Enter "Empty" to exit): `, (item: any) => {
                if (item == ""){
                    SelectMode(true)
                } else {
                    if (n == 2) {
                        client.LINDEX(`chioce${n}`, item-1, function(err, reply) {
                            console.log(`Year ${reply} --> ${EasyProcess[n.toString()](reply)}`)
                            MenuView(mode, true, n)
                        })
                    } else {
                        if (n == 1 && mode == 2) {
                            client.LINDEX(`chioce${n}`, item-1 , function(err, reply) {
                                console.log(MediumProcess(reply))
                                MenuView(mode, true, n)
                            })
                        } else {
                            client.LINDEX(`chioce${n}`, item-1 , function(err, reply) {
                                console.log(EasyProcess[n.toString()](reply))
                                MenuView(mode, true, n)
                            })
                        }
                    }
                }
                return item
            })
        }
        setTimeout(ShowMenu, 500)
    } else {}
}

const MenuDelete = async (mode: number, statusMode: boolean, n: number) => {
    console.clear();
    selectMenuPage(n);
    if (statusMode == true) {
        const ShowMenu = () => {
            readline.question(`\nPlease enter index(Enter "Empty" to exit): `, (item: any) => {
                if (item == ""){
                    SelectMode(true)
                } else {
                    client.LLEN(`chioce${n}`, function(err, reply) {
                        if (reply > 0) {
                            client.LINDEX(`chioce${n}`, item-1, function(err, reply) {
                                if (reply !== null) {
                                    client.lrem(`chioce${n}`, item-1, reply)
                                    MenuDelete(mode, true, n)
                                } else {
                                    MenuDelete(mode, true, n)
                                }
                            })
                        } else {
                            MenuChoose(mode, true, n)
                        } 
                    })
                }
                return item
            })
        }
        setTimeout(ShowMenu, 500)
    } else {}
}

//! Menu ------------------------------------------------------------------------------------------------

//! Chioce Add Add ------------------------------------------------------------------------------------------------
const EasyChooseOne = (statusMode: boolean) => {
    console.clear();
    if (statusMode == true) {
        console.log(EasyProcess1())
        readline.question(`\nRun again enter "1" : No enter other characters: `, (item: any) => {
            if (item == 1) {
                EasyChooseOne(true)
            } else {
                SelectMode(true)
            }
            return item
        })
    } else {}
}

const EasyChoose = (statusMode: boolean, n) => {
    if (statusMode == true) {
        readline.question(`\nPlease enter number(Exis enter empty): `, (item: number) => {
            if (item.toString() !== "") {
                if (+item !== NaN) {
                    if (n == 2) {
                        console.log(`Year ${item} --> ${EasyProcess[n.toString()](item)}`)
                        client.rpush(`chioce${n}`, item)
                    } else {
                        console.log(EasyProcess[n.toString()](item))
                        client.rpush(`chioce${n}`, item)
                    }
                    EasyChoose(true, n)
                } else {
                    EasyChoose(false, n)
                }
            } else {
                SelectMode(true)
            }
            return item
        })
    } else {
        readline.question(`\nPlease enter number again(Exis enter empty): `, (item: number) => {
            if (item !== null) {
                if (+item !== NaN) {
                    if (n == 2) {
                        console.log(`Year ${item} --> ${EasyProcess[n.toString()](item)}`)
                        client.rpush(`chioce${n}`, item)
                    } else {
                        console.log(EasyProcess[n.toString()](item))
                        client.rpush(`chioce${n}`, item)
                    }
                    EasyChoose(true, n)
                } else {
                    EasyChoose(false, n)
                }
            } else {
                SelectMode(true)
            }
            return item
        })
    }
}

const MediumChooseOne = (statusMode: boolean, n: number) => {
    if (statusMode == true) {
        readline.question(`\nPlease enter number(Exis enter empty): `, (item: any) => {
            var number = parseInt(item.toString(), 10);
            if (item.toString() !== "") {
                if (!isNaN(number)) {
                    console.log(`n: ${number} --> ${MediumProcess(number)}`)
                    client.rpush(`chioce${n}`, item)
                    MediumChooseOne(true, n)
                } else {
                    MediumChooseOne(false, n)
                }
            } else {
                SelectMode(true)
            }
            return item
        })
    } else {
        readline.question(`\nPlease enter number again(Exis enter empty): `, (item: any) => {
            var number = parseInt(item.toString(), 10);
            if (item.toString() !== "") {
                if (!isNaN(number)) {
                    console.log(`n: ${number} --> ${MediumProcess(number)}`)
                    MediumChooseOne(true, n)
                } else {
                    MediumChooseOne(false, n)
                }
            } else {
                SelectMode(true)
            }
            return item
        })
    }
}

//! Chioce Add ------------------------------------------------------------------------------------------------


//! Main ------------------------------------------------------------------------------------------------
const Nav = async () => {
    await SelectMode(true)
}

client.on('connect', function() {})

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});
Nav()
//! Main ------------------------------------------------------------------------------------------------