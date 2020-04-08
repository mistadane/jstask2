// creation of data object
const data = [
    {principal: 2500, time: 1.8},
    {principal: 1000, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3}
]

// Interest Calculation
function interestCalculator(data) {
    let interestData = [];

    for (let elem of data) {
        let interest = '';
        let rate = 0;
        let myInterest = {};
        let principal = elem.principal;
        let time = elem.time;

        if (principal >= 2500 && time > 1 && time < 3) {
            rate = 3;
            interest = (principal * time * rate)/100;
            myInterest = {
                principal : principal,
                rate: rate,
                time: time,
                interest: interest
            };
            interestData.push(myInterest);
        } else if (principal >= 2500 && time <= 3) {
            rate = 4;
            interest = (principal * time * rate)/100;
            myInterest = {
                principal : principal,
                rate: rate,
                time: time,
                interest: interest
            };
            interestData.push(myInterest);
        } else if (principal < 2500 || time <= 1) {
            rate = 2;
            interest = (principal * time * rate)/100;
            myInterest = {
                principal : principal,
                rate: rate,
                time: time,
                interest: interest
            };
            interestData.push(myInterest);
        } else {
            rate = 1;
            interest = (principal * time * rate)/100;
            myInterest = {
                principal : principal,
                rate: rate,
                time: time,
                interest: interest
            };
            interestData.push(myInterest);
        }

        
        
    }

    console.log(interestData)
    return interestData;
}

interestCalculator(data);

    