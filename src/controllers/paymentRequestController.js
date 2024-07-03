import {
    createPaymentRequest,
    hidePaymentRequest,
    getPaymentRequest,
    updatePaymentRequest
} from "../services/paymentRequestService.js";

export const createPaymentRequestController = async (req, res) => {
    try {
        const data = await createPaymentRequest(req.body);
        if (data.msg === "Lỗi thêm dữ liệu") {
            res.status(400).json(data);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getPaymentRequestController = async (req, res) => {
    try {
        const data = await getPaymentRequest();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const hidePaymentRequestController = async (req, res) => {
    try {
        const data = await hidePaymentRequest(req.params.id);
        console.log(data)
        if (data.msg === "Đã ẩn thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updatePaymentRequestController = async (req, res) => {
    try {
        const data = await updatePaymentRequest(req.params.id , req.body);
        if (data.msg === "Đã cập nhật thành công"){
            res.status(200).json(data)
        } else {
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}