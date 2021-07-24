const {getPersons, getPerson,addPerson,updatePerson,countPeople} =require("../func/query/person")
const {getAreas, getArea,addArea} = require("../func/query/area")

const resolvers = {
    Query:{
        persons:async(_,{first,last},{Person})=>getPersons(first,last,Person),
        person:async (_,{id},{Person}) => getPerson(id,Person),
        cities:async(_,{first,last},{City}) => getAreas(first,last,City),
        city: async(_,{id},{City}) => getArea(id,City),
    },

    Mutation:{
        createPerson:async(_,{input:{areaId,first,middle,last}},{Person}) => addPerson(areaId,first,middle,last,Person),
        createCity: async(_,{input:{name}},{City})=>addArea(name,City),
        editPerson: async(_,{id, input},{Person})=>await updatePerson(id,input,Person),
    },

    Person: {
        city:async(person,_,{City})=> await City.findById(person.areaId),
    },
    City:{
        people:async(area,_,{Person}) => await Person.find().where({"areaId":area.id}),
        count: async(area,_,{Person}) =>await countPeople(area,Person)
    }
}



module.exports = {resolvers}