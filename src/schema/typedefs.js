const {gql} = require('apollo-server-express')


const typeDefs = gql`
   
   type Person {
       id:ID
       areaId:String!
       countryId:String!
       firstName:String!
       middleName:String!
       lastName:String!
       birthDate:String
       maritalStatus:String
       gender:String
       city: City
   }
   
   type City {
       id:ID
       name:String!
       people: [Person]
       count: Int
       countryId:String!
       country: Country
   }
   type Country{
       id:ID
       name:String!
       people:[Person]
       cities: [City]
       countsCity: Int 
       countsPeople: Int
   }
   
   input addCity{
       name:String!
       countryId:String!
   }
   input addCountry{
       name:String!
   }
   input addPerson{
       areaId:String!
       first:String!
       middle:String!
       last:String!
   }
   input editPerson{
       id:ID
       gender:String
       maritalStatus: String
       birthDate: String
   }
   type Query{
       persons(first:Int,last:Int):[Person],
       person(id:ID):Person!,
       cities(first:Int,last:Int):[City],
       city(id:ID):City!,
       countries(first:Int,last:Int):[Country],
       country(id:ID):Country!,
      
   }

   type Mutation{
       createPerson(input:addPerson!):Person
       editPerson(id:ID!,input:editPerson!):Person
       createCity(input:addCity!):City
       createCountry(input:addCountry):Country
   }
`

module.exports = {typeDefs}