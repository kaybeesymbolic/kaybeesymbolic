
exports.getCountries =async (first,last,Country)=>{
    const result =await Country.find({})  
    if(first) return result.slice(0,first)
    let count = result.length-last
    if(last)return result.slice(count)
    return result
}

exports.getCountry =async (id,Country)=>{
    const result = await Country.findById(id)
    if(result)return result 
    return {}
}

exports.addCountry = async(name,Country)=>{
    const country = new Country({name:name})
    if(await country.save())return country
    return {}
    
}

exports.countCountryPeople = async(country,Person) =>{
    const people =await Person.find().where({"countryId":country.id})
    return people.length
}