const areas = require("../../model/area")

exports.getAreas =async (first,last,City)=>{
    const result =await City.find({})  
    if(first) return result.slice(0,first)
    let count = result.length-last
    if(last)return result.slice(count)
    return result
}

exports.getArea =async (id,City)=>{
    const result = await City.findById(id)
    if(result)return result 
    return {}
}

exports.addArea = async(name,City)=>{
    const area = new City({name:name})
    console.log(area)
    if(await area.save())return area
    return {}
    
}