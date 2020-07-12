const express = require("express");
const router = express.Router();

const {
    addCustomer,
    getCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer,
} = require("../controllers/customers");

router.post("/", addCustomer);
router.get("/", getCustomers);
router.get("/:customerId", getCustomer);
router.patch("/:customerId", updateCustomer);
router.delete("/:customerId", deleteCustomer);

module.exports = router;
