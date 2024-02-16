const AddModel = require("../model/add_model")



const getAll = async (req, res) => {
    try {
        console.log("Get All ma aaviyu ")
        const All = await AddModel.find().then((data) => { res.send(data) })
        //res.status(200).json({data: AllIds[0], success: true })
    } catch (error) {
        res.status(500).json({ message: error, success: false })
    }
}

const getById = async (req, res) => {
    try {
        console.log("AllIds ma aaviyu ")

        const id = req.body.id;
        console.log(id)
        const All = await AddModel.findOne({ "_id": id }).then((data) => { res.send({ data: data }) })
        // res.status(200).json({data: AllIds[0], success: true })
    } catch (error) {
        res.status(500).json({ message: error.message, success: false })
    }
}

const add = async (req, res) => {
    try {
        // console.log(req.body)

        // const a = req.body;
        // const data = await adModel.create(a).then((data) => {

        //     console.log(">>>>>>>>>>>>>>>>" + a);
        //     console.log(">>>>>>>>>>>>>>>>" + req.body);

        //     console.log("+++++++" + data);
        //     res.send(res.body);
        // });
        console.log("Data inserted ma aaviyu......");

        const newData = req.body;
        const data = await AddModel.create(newData).then((data) => {
            console.log("Data inserted Sucessfully");
            res.status(200).json({ message: "Data inserted Successfully", success: true, data: newData });
        })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: error, success: false })
    }
}

const updateId = async (req, res) => {
    try {
        console.log("Upate ma aaviyu");

        const id = req.body.id;
        await AddModel.findOneAndUpdate({ _id: id },
            {
                $set: {
                    department_name: req.body.department_name,
                    department_thumbh: req.body.department_thumbh,
                    corse_name: req.body.corse_name,
                    corse_thumbh: req.body.corse_thumbh,
                    semister: req.body.semister,
                    subject_name: req.body.subject_name,
                    subject_thumbh: req.body.subject_thumbh,
                    subject_discription: req.body.subject_discription,
                    authar: req.body.authar,
                    book_name: req.body.book_name,
                    book_link: req.body.book_link,
                    book_thumbh: req.body.book_thumbh,
                    book_discription: req.body.book_discription,
                    book_rating: req.body.book_rating
                }
            }
        ).then(async (data) => {
            console.log("hello");
            await AddModel.findOne({ "_id": id }).then((data) => {
                res.status(200).json({ message: "Data Update Sucessfully", success: true, data: data });
            });
        });

        // res.status(200).json({ data: "user success", success: true })
    } catch (error) {
        res.status(500).json({ message: error, success: false })
    }
}

const deleteId = async (req, res) => {
    try {

        console.log("Delete ma aaviyu ")
        const id = req.body.id;
        const All = await AddModel.deleteOne({ "_id": id }).then((data) => { res.send(data) })

    } catch (error) {
        res.status(500).json({ message: error, success: false })
    }
}

module.exports = { getAll, getById, add, updateId, deleteId }