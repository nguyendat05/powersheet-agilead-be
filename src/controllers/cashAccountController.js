import {
    createCashAccount,
    getAllCashAccount, hideCashAccount,
    updateCashAccount
} from "../services/cashAccountService.js";

export const createCashAccountController = async (req, res) => {
    try {
        const data = await createCashAccount(req.body);
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllCashAccountController = async (req, res) => {
    try {

        const data = await getAllCashAccount();
        if (data.msg === "Thành công") {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateCashAccountController = async (req, res) => {
    try {
        const data = await updateCashAccount(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};

export const hideCashAccountController = async (req, res) => {
    try {
        const data = await hideCashAccount(req.params.id);
        if (data.msg === "Đã thay dổi show = fasle thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
};