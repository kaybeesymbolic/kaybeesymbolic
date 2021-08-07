const {getPersons, getPerson,addPerson,updatePerson,countCityPeople} =require("../func/query/person")
const {getAreas, getArea,addArea,countCity} = require("../func/query/area")
const {getCountries,getCountry,addCountry,countCountryPeople} = require("../func/query/country")

const resolvers = {
    Query:{
        persons:async(_,{first,last},{Person})=>getPersons(first,last,Person),
        person:async (_,{id},{Person}) => getPerson(id,Person),
        cities:async(_,{first,last},{City}) => getAreas(first,last,City),
        city: async(_,{id},{City}) => getArea(id,City),
        countries: async(_,{first,last},{Country}) =>getCountries(first,last,Country),
        country: async(_,{id},{Country})=>getCountry(id,Country),
    },

    Mutation:{
        createPerson:async(_,{input:{areaId,first,middle,last}},{Person}) => addPerson(areaId,first,middle,last,Person),
        createCity: async(_,{input:{countryId,name}},{City})=>addArea(countryId,name,City),
        createCountry: async(_,{input:{name}},{Country})=>addCountry(name,Country),
        editPerson: async(_,{id, input},{Person})=>await updatePerson(id,input,Person),
    },

    Person: {
        city:async(person,_,{City})=> await City.findById(person.areaId),
    },
    City:{
        people:async(area,_,{Person}) => await Person.find().where({"areaId":area.id}),
        country:async(city,_,{Country})=>await Country.findById(city.countryId),
        count: async(area,_,{Person}) =>await countCityPeople(area,Person)
    },
    Country:{
        cities: async(country,_,{City}) =>await City.find().where({"countryId":country.id}),
        people:async(country,_,{Person}) => await Person.find().where({"countryId":country.id}),
        countsCity: async(country,_,{City})=>await countCity(country,City),
        countsPeople: async(country,_,{Person})=>await countCountryPeople(country,Person)
        }
}



module.exports = {resolvers}