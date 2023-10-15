const tools = [
    { id: 1, name: "thundercliend1" },
    { id: 2, name: "thundercliend2" },
    { id: 3, name: "thundercliend3" },
    { id: 4, name: "thundercliend4" },
]

module.exports.getAllTools = (req, res) => {
    const { limit, page } = req.query;
    console.log(limit, page);
    res.send(tools.slice(0, limit))
}
module.exports.saveATools = (req, res) => {
    console.log(req.body);
    tools.push(req.body)
    res.send(tools)
}
module.exports.toolsDetails = (req, res) => {
    const { id } = req.params;
    console.log(id);
    const findTool = tools.find(tool => tool.id == Number(id));
    // send formate
    // res.send(findTool)
    // res.status(200).send(findTool)
    res.status(200).json({
        success: true,
        messages: "Successfully got the data",
        data: findTool
    });
    // res.status(500), send({
    //     success: false,
    //     error: "Error messages"
    // })
}
module.exports.updatesTool = (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };
    const findData = tools.find(tool => tool.id === Number(id));
    findData.id = id;
    findData.name = req.body.name;
    res.send(findData)
}
module.exports.deleteTool = (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };
    const filterData = tools.filter(tool => tool.id !== Number(id));
    res.send(filterData)
}