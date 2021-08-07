
exports.getPersons =async (first,last,Person)=>{
    const result =await Person.find({})  
    if(first) return result.slice(0,first)
    let count = result.length-last
    if(last)return result.slice(count)
    return result
}

exports.getPerson = async(id,Person)=>{
    const result = await Person.findById(id)
    if(result)return result 
    return {}
}

exports.addPerson =async(areaId,first, middle,last,Person)=>{
    const person = await new Person({areaId:areaId,firstName:first,middleName:middle,lastName:last})
    if(await person.save())return person
    else return {}
}

exports.updatePerson = async(id,input,Person)=>{
  return  Person.findByIdAndUpdate(id,{...input},{upsert:true},(err,data)=>{
        if(err)return err
        return data
    })
}

exports.countCityPeople = async(area,Person)=>{
  const result = await Person.find().where({"areaId":area.id})
  return result.length
}


