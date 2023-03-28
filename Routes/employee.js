const express=require('express');
const router=express.Router();
const controller=require('../Controller/employee');

router.post('/data',controller.gettingData);
router.get('/data',controller.findEmployeeSalary);
router.get('/data',controller.findEmployeeExperience);
router.get('/data',controller.findEmpGradExperience);
router.put('/data',controller.empSalaryUpdate);
router.delete('/data',controller.employeeDelete);

module.exports=router;