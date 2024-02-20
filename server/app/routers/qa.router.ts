import express from 'express'
import * as qaController from '../controllers/qa.controller'
const qaRouter = express.Router();

qaRouter.get('/answers/:qId',qaController.getAnswersByQuestionId);
qaRouter.post('/answers/:qId',qaController.postAnswersByQuestionId);
qaRouter.get('/questions',qaController.getQuestions);

export default qaRouter