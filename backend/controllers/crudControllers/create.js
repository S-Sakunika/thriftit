const create = async (req, res, model) => {
    try {
        const result = await model.save(req.body)

        res.status(200).json({
            status: 'success',
            result: result,
            message: `Successfully created in ${model} model`
        })
    } catch (e) {
        res.status(500).json({
            status: 'failed',
            result: null,
            message: e.message,
            error: e
        })
    }
}

module.exports = create