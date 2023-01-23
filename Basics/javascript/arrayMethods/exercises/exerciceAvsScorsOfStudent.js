const election = [
    {
        person_name:"John",
        politic_party1:false,
        politic_party2:false,
        politic_party3:true
    },
    {
        person_name:"Michael",
        politic_party1:false,
        politic_party2:false,
        politic_party3:true
    },
    {
        person_name:"Jimmy",
        politic_party1:true,
        politic_party2:false,
        politic_party3:false
    },
    {
        person_name:"Michel",
        politic_party1:true,
        politic_party2:false,
        politic_party3:false
    },
    {
        person_name:"Gabriel",
        politic_party1:false,
        politic_party2:false,
        politic_party3:true
    },
    {
        person_name:"Alberto",
        politic_party1:false,
        politic_party2:true,
        politic_party3:false
    }
]

/*
Politic_party1: 
Politic_party2:
Politic_party3:  
*/

let politicParty1 = 0
let politicParty2 = 0
let politicParty3 = 0
let arr = []
let result = election.forEach(item => {

    if(item.politic_party1) {
        politicParty1++
    }
    if(item.politic_party2) {
        politicParty2++
    }
    if(item.politic_party3) {
        politicParty3++
    }
})

const winner = [{
    party:"politicParty1",
    vote:politicParty1
},
{
    party:"politicParty2",
    vote:politicParty2
},
{
    party:"politicParty3",
    vote:politicParty3
}]

const max = Math.max(...winner.map(o => {
    return o.vote
}))

let getPartyName = winner.filter(party => {
    return party.vote == max
})

console.log(`The winner is ${getPartyName[0].party} with ${max} votes`);
console.log(getPartyName);



