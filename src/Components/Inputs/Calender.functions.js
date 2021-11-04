const set = new Date()
const month = set.getMonth()
const month_for = set.getMonth() -1
const year = set.getFullYear()
const today = set.getDay()
const days = new Date(year, month_for, 31)

const Check = () =>{
    // console.log(set)
    // console.log(month)
    // console.log(month_for)
    // console.log(year)
    // console.log(today)
    // console.log(days.getDay())
}

const DatesLoader = (data) =>{
    console.log(data)
    var end = new Date(data.year, data.month + 1, 0).getDate()
    var thisStart = new Date(data.year, data.month, 1).getDate()
    var start = new Date(data.year, data.month, 1).getDate()
    var prevEnd = new Date(data.year, data.month, 0).getDate()
    var nextEnd = new Date(data.year, data.month + 1, 1).getDate()
    var decrement = prevEnd
    var weeks = new Array(5)
    var dates
    var reverse = 0
    var previous = []

    while(new Date(data.year, data.month, prevEnd).getDay() != 0){
        prevEnd--
    }
    while(new Date(data.year, data.month, nextEnd).getDay() < 6){
        nextEnd++
        console.log(nextEnd)
    }

    


    for(var i =0; i<weeks.length; i++){
        dates = new Array(7)
        for(var x=0; x<dates.length; x++){
            // if(new Date(data.year, data.month, start).getDay != 0){
                
            // }
            if(start != 1 && start <= end){
                dates[x] = {
                    day: new Date(data.year, data.month, start).getDay(),
                    date: start,
                    week: i
                }
                start++
            }else if(start == 1){
                dates[x] = {
                    day: new Date(data.year, data.month, start).getDay(),
                    date: start,
                    week: i
                }
                start++
            }
            weeks[i] = dates
        }
    }

    return weeks

}
 const Translate_Month = (num) => {
    let month
    switch (num) {
        case 0:
            month = 'January'
            break
        case 1:
            month = 'February'
            break
        case 2:
            month = 'March'
            break
        case 3:
            month = 'April'
            break
        case 4:
            month = 'May'
            break
        case 5:
            month = 'June'
            break
        case 6:
            month = 'July'
            break
        case 7:
            month = 'August'
            break
        case 8:
            month = 'September'
            break
        case 9:
            month = 'October'
            break
        case 10:
            month = 'November'
            break
        case 11:
            month = 'December'
            break
        default:
            break
    }
    return month
}

// class Calobrate{


//     Translate_Day = (num) => {
//         let day
//         switch (num) {
//             case 0:
//                 day = 'Monday'
//                 break
//             case 1:
//                 day = 'Tuesday'
//                 break
//             case 2:
//                 day = 'March'
//                 break
//             case 3:
//                 month = 'April'
//                 break
//             case 4:
//                 month = 'May'
//                 break
//             case 5:
//                 month = 'June'
//                 break
//             case 6:
//                 month = 'July'
//                 break
//             default:
//                 break
//         }
//         return month
//     }
// }

export {Translate_Month, Check, DatesLoader}