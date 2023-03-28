const {Apply}=require('../Model/employee');

const gettingData=async(req,res)=>{
    const Data=req.body;
    console.log(Data)
    try{
       const applyingDocument=new Apply({
         Name:Data.Name,
         Age:Data.Age,
         Email:Data.Email,
         Created:Date.now()
       })
       const dbResponse=await applyingDocument.save();
       console.log(dbResponse);
       return res.status(200).send({message:"data Saved"})
    }catch(error){
    return res.status(500).send({message:"Error occurs while saving the data"})
    }
}

// const updateData=async(req,res)=>{
//   const reqData=req.body;
//   const filter=reqData.filter;
//   const value={$set:reqData.value};////here it is not maditory to use the atomic oporator "$set"
//   try{
//     await Apply.updateOne(filter,value);
//     return res.status(200).send({message:"updated successfully.."})
//   }catch(error){
//     return res.status(500).send({message:"Error occurs while updating the data",error})
//   }
// }
// const deleteData=async(req,res)=>{
//   const filter=req.params;
//   try{
//     await Apply.deleteOne(filter);
//     return res.status(200).send({message:"deleted successfully.."})
//   }catch(error){
//     return res.status(500).send({message:"Error occurs while updating the data",error})
//   }
// }
const employeeData = async (req, res) => {
  const queryParams = req.query;
  console.log(queryParams);
  try {
    const result = await Apply.find(queryParams);
    console.log("Result", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("something went wrong while performing db operations");
    return res
      .status(500)
      .send({ message: "something went wrong while performing db operations" });
  }
};

const findEmployeeSalary = async (req, res) => {
  const query = { salary: { $gt: "30000" } };
  console.log(query);
  try {
    const result = await Apply.find(query);
    console.log("Result", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("something went wrong while performing db operations");
    return res
      .status(500)
      .send({ message: "something went wrong while performing db operations" });
  }
};

const findEmployeeExperience = async (req, res) => {
  const query = { overallExp: { $gt: "2" } };
  console.log(query);
  try {
    const result = await Apply.find(query);
    console.log("Result", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("something went wrong while performing db operations");
    return res
      .status(500)
      .send({ message: "something went wrong while performing db operations" });
  }
};

const findEmpGradExperience = async (req, res) => {
  const query = { yearGrad: { $gt: "2015" }, overallExp: { $gt: "1" } };
  console.log(query);
  try {
    const result = await Apply.find(query);
    console.log("Result", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("something went wrong while performing db operations");
    return res
      .status(500)
      .send({ message: "something went wrong while performing db operations" });
  }
};

const empSalaryUpdate = async (req, res) => {
  const updateData = req.body;
  // const filter = updateData.filter({salary : {$gt : "70000"}})
  // const value = {$set : updateData.value}
  const filter = updateData.filter;
  const value = { $set: updateData.value };
  console.log(filter);
  try {
    const result = await Apply.updateOne(filter, value);
    console.log("Result", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("something went wrong while performing db operations");
    return res
      .status(500)
      .send({ message: "something went wrong while performing db operations" });
  }
};

const employeeDelete = async (req, res) => {
  const condition = { department: "Sales" };
  console.log(condition);
  try {
    const result = await Apply.deleteOne(condition);
    console.log("Result", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("something went wrong while performing db operations");
    return res
      .status(500)
      .send({ message: "something went wrong while performing db operations" });
  }
};
module.exports={gettingData,employeeData,findEmployeeSalary,findEmployeeExperience,findEmpGradExperience,empSalaryUpdate,employeeDelete}