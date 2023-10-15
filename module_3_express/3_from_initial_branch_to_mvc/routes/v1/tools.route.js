const express = require('express');
const toolsControllers = require('../../controllers/tools.controller');
const viewCount = require('../../middleware/viewCount');
const { limiter } = require('../../middleware/limiter');

const router = express.Router();


// router.get("/", async (req, res) => {
//     res.send("found all tools");
// });

// router.post("/tools", async (req, res) => {
//     res.send("tools added");
// });

router
    .route('/')

    /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */

    .get(toolsControllers.getAllTools)


    /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
    .post(toolsControllers.saveATools)

router
    .route('/:id')
    .get(viewCount, limiter, toolsControllers.toolsDetails)
    .patch(toolsControllers.updatesTool)
    .delete(toolsControllers.deleteTool)
module.exports = router;