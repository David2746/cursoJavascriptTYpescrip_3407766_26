import { Router } from 'express';
import * as reservasController from '../controllers/reservas.controller.js';
import { validarCrearReserva, validarReprogramarReserva } from '../middlewares/validarReserva.js';
import { validarId } from '../middlewares/validarId.js';

const router = Router();

router.post('/', validarCrearReserva, reservasController.crear);
router.get('/', reservasController.listar);
router.get('/:id', validarId, reservasController.obtener);
router.put('/:id', validarId, validarReprogramarReserva, reservasController.reprogramar);
router.patch('/:id/cancelar', validarId, reservasController.cancelar);
export default router;