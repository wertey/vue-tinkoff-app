const service = require('../services/user-services');
class UserController {
    constructor(){}
    addUser = async (req, res) => {
        try {
            const result = await service.add(req);
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({error:e.message})
        }
    };
    deleteUser = async (req, res) => {
        try {
            const result = await service.del(req);
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({error: e.message})
        }
    };
    updateUser = async (req, res) => {
        try {
            const result = await service.update(req);
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({error: e.message})
        }
    };
    login = async (req, res) => {
        try {
            const result = await service.login(req);
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({error:e.message})
        }
    };
    profile = async (req, res) => {
        res.send(req.user)
    };
    logout =  async (req, res) => {
        try {
            await service.logout(req);
            res.send({responce: "successfully logout"})
        } catch (e) {
            res.status(400).send({error:e.message})
        }
    };
    getUser = async (req, res) => {
        try {
            const result = await service.get();
            res.send(result)
        } catch (e) {
            res.status(400).send({error:e.message})
        }
    }
}

module.exports = UserController;
